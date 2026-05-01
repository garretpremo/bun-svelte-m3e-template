<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { api } from "$lib/api.svelte";
  import { ws } from "$lib/ws";
  import { NoteCreate, type Note } from "@app/server/contract";
  import Button from "$lib/m3e/Button.svelte";
  import Card from "$lib/m3e/Card.svelte";
  import FormField from "$lib/m3e/FormField.svelte";

  let title = $state("");
  let body = $state("");
  let error = $state("");
  let notes = $state<Note[]>([]);
  let loading = $state(true);

  let unsubCreated: (() => void) | null = null;
  let unsubDeleted: (() => void) | null = null;

  async function refresh() {
    notes = await api.notes.list({ query: { limit: 20 } });
    loading = false;
  }

  onMount(() => {
    void refresh();
    unsubCreated = ws.on("note:created", (n) => { notes = [n, ...notes].slice(0, 20); });
    unsubDeleted = ws.on("note:deleted", ({ id }) => { notes = notes.filter(n => n.id !== id); });
  });
  onDestroy(() => { unsubCreated?.(); unsubDeleted?.(); });

  async function submit(e: Event) {
    e.preventDefault();
    error = "";
    const parsed = NoteCreate.safeParse({ title, body });
    if (!parsed.success) {
      error = parsed.error.issues[0]?.message ?? "invalid";
      return;
    }
    const created = await api.notes.create({ body: parsed.data });
    // Optimistic local update; WS broadcast still notifies other tabs. Avoid
    // double-insert by relying on the (n.id) keyed each: the WS broadcast for
    // this client's create will arrive but find the id already present.
    if (!notes.some((n) => n.id === created.id)) {
      notes = [created, ...notes].slice(0, 20);
    }
    title = "";
    body = "";
  }

  async function remove(id: string) {
    await api.notes.delete({ params: { id } });
    // Optimistic local removal; WS broadcast updates other tabs.
    notes = notes.filter((n) => n.id !== id);
  }
</script>

<section>
  <h2>Notes (CRUD over `/api/notes`)</h2>
  <p class="body-large">
    Form validates against the same zod schema the server uses. WS broadcasts
    `note:created` so other tabs see new notes appear live.
  </p>

  <form onsubmit={submit} style="display:flex; flex-direction:column; gap: var(--space-md); max-width: 480px; margin: var(--space-2xl) 0;">
    <FormField label="Title" error={error || undefined}>
      <input type="text" name="title" aria-label="Title" bind:value={title} maxlength="120" />
    </FormField>
    <FormField label="Body">
      <textarea name="body" aria-label="Body" bind:value={body} rows="3" maxlength="10000" style="width:100%;"></textarea>
    </FormField>
    <Button type="submit" variant="filled">Create note</Button>
  </form>

  {#if loading}
    <p>Loading…</p>
  {:else if notes.length === 0}
    <p>No notes yet. Create one above.</p>
  {:else}
    <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--space-md);">
      {#each notes as n (n.id)}
        <Card variant="outlined">
          <h3 style="font-size: var(--font-size-lg);">{n.title}</h3>
          <p>{n.body || "(no body)"}</p>
          <small style="color: var(--md-sys-color-on-surface-variant);">
            {new Date(n.createdAt).toLocaleString()}
          </small>
          <div style="margin-top: var(--space-md);">
            <Button variant="text" onclick={() => remove(n.id)}>Delete</Button>
          </div>
        </Card>
      {/each}
    </div>
  {/if}
</section>
