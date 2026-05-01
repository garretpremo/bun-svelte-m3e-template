-- Seed the dev/test default user. The notes handler's userIdFromRequest
-- shortcut returns this id when there's no Bearer token, so it must exist
-- for unauthenticated note creation (e.g. the showcase + e2e suite) to work.
-- Real auth replaces this once it lands; the row is harmless either way.

-- The id below is a syntactically valid v4-style UUID (version digit '4',
-- variant digit '8'). zod's strict z.string().uuid() rejects truly all-zero
-- ids, so we need a structurally compliant one for the round-trip parse.
INSERT OR IGNORE INTO users (id, email, display_name, created_at)
VALUES (
  '00000000-0000-4000-8000-000000000001',
  'default@example.test',
  'Default',
  '2026-01-01T00:00:00.000Z'
);
