// packages/m3e-svelte/scripts/cem-types.ts
export interface CemAttribute {
  name: string;
  type?: { text?: string | null };
  default?: string | null;
  description?: string;
}

export interface CemSlot {
  name: string;
  description?: string;
}

export interface CemEvent {
  name: string;
  type?: { text?: string | null };
  description?: string;
}

export interface CemCssProperty {
  name: string;
  description?: string;
}

export interface CemMember {
  kind: string;
  name: string;
  privacy?: "public" | "private" | "protected";
  static?: boolean;
  readonly?: boolean;
  type?: { text?: string | null };
  default?: string | null;
  description?: string;
  attribute?: string;
}

export interface CemClassDeclaration {
  kind: "class";
  name: string;
  tagName?: string;
  description?: string;
  attributes?: CemAttribute[];
  slots?: CemSlot[];
  events?: CemEvent[];
  cssProperties?: CemCssProperty[];
  members?: CemMember[];
}

export interface CemModule {
  kind: "javascript-module";
  path: string;
  declarations: Array<CemClassDeclaration | { kind: string }>;
}

export interface Cem {
  schemaVersion: string;
  modules: CemModule[];
}

export interface LoadedElement {
  /** e.g. "@m3e/button" */
  pkg: string;
  /** e.g. "m3e-button" */
  tag: string;
  /** e.g. "M3eButtonElement" */
  className: string;
  declaration: CemClassDeclaration;
}
