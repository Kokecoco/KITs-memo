import { Extension } from "@tiptap/core";
import type { BlockNoteEditor } from "../../editor/BlockNoteEditor";
import { InlineContentSchema, StyleSchema } from "../../schema";
export declare const createDropFileExtension: <BSchema extends Record<string, import("../../schema").BlockConfig>, I extends InlineContentSchema, S extends StyleSchema>(editor: BlockNoteEditor<BSchema, I, S>) => Extension<{
    editor: BlockNoteEditor<BSchema, I, S>;
}, undefined>;
