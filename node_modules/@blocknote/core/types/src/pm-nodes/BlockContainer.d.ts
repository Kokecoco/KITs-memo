import { Node } from "@tiptap/core";
import { PartialBlock } from "../blocks/defaultBlocks";
import type { BlockNoteEditor } from "../editor/BlockNoteEditor";
import { BlockSchema, InlineContentSchema, StyleSchema } from "../schema";
declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        block: {
            BNCreateBlock: (pos: number) => ReturnType;
            BNDeleteBlock: (posInBlock: number) => ReturnType;
            BNMergeBlocks: (posBetweenBlocks: number) => ReturnType;
            BNSplitBlock: (posInBlock: number, keepType?: boolean, keepProps?: boolean) => ReturnType;
            BNUpdateBlock: <BSchema extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema>(posInBlock: number, block: PartialBlock<BSchema, I, S>) => ReturnType;
            BNCreateOrUpdateBlock: <BSchema extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema>(posInBlock: number, block: PartialBlock<BSchema, I, S>) => ReturnType;
        };
    }
}
/**
 * The main "Block node" documents consist of
 */
export declare const BlockContainer: Node<{
    domAttributes?: Partial<{
        blockGroup: Record<string, string>;
        block: Record<string, string>;
        editor: Record<string, string>;
        blockContent: Record<string, string>;
        inlineContent: Record<string, string>;
    }> | undefined;
    editor: BlockNoteEditor<any, any, any>;
}, any>;
