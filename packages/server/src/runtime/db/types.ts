import type { Note, NoteCreate } from "../../contract/schemas/note";
import type { User, UserCreate } from "../../contract/schemas/user";

export interface Db {
  notes: {
    list(opts: { limit: number }): Promise<Note[]>;
    get(id: string): Promise<Note | null>;
    create(userId: string, input: NoteCreate): Promise<Note>;
    delete(id: string): Promise<boolean>;
  };
  users: {
    get(id: string): Promise<User | null>;
    getByEmail(email: string): Promise<User | null>;
    create(input: UserCreate): Promise<User>;
    delete(id: string): Promise<boolean>;
  };
  close(): Promise<void> | void;
}
