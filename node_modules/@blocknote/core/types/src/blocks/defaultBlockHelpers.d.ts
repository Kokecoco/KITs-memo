import type { BlockNoteEditor } from "../editor/BlockNoteEditor";
import type { BlockNoDefaults, InlineContentSchema, StyleSchema } from "../schema";
export declare function createDefaultBlockDOMOutputSpec(blockName: string, htmlTag: string, blockContentHTMLAttributes: Record<string, string>, inlineContentHTMLAttributes: Record<string, string>): {
    dom: HTMLDivElement;
    contentDOM: HTMLElement;
};
export declare const defaultBlockToHTML: <BSchema extends Record<string, import("../schema").BlockConfig>, I extends InlineContentSchema, S extends StyleSchema>(block: BlockNoDefaults<BSchema, I, S>, editor: BlockNoteEditor<BSchema, I, S>) => {
    dom: HTMLElement;
    contentDOM?: HTMLElement;
};
