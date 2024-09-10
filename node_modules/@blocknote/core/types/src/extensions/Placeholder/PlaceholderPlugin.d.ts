import { Plugin } from "prosemirror-state";
import type { BlockNoteEditor } from "../../editor/BlockNoteEditor";
export declare const PlaceholderPlugin: (editor: BlockNoteEditor<any, any, any>, placeholders: Record<string | "default", string>) => Plugin<any>;
