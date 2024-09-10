import { Node } from "prosemirror-model";
import { Block, PartialBlock } from "../../blocks/defaultBlocks";
import type { BlockNoteEditor } from "../../editor/BlockNoteEditor";
import { BlockIdentifier, BlockSchema, InlineContentSchema, StyleSchema } from "../../schema";
export declare function insertBlocks<BSchema extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema>(blocksToInsert: PartialBlock<BSchema, I, S>[], referenceBlock: BlockIdentifier, placement: "before" | "after" | "nested" | undefined, editor: BlockNoteEditor<BSchema, I, S>): Block<BSchema, I, S>[];
export declare function updateBlock<BSchema extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema>(blockToUpdate: BlockIdentifier, update: PartialBlock<BSchema, I, S>, editor: BlockNoteEditor<BSchema, I, S>): Block<BSchema, I, S>;
export declare function removeBlocks<BSchema extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema>(blocksToRemove: BlockIdentifier[], editor: BlockNoteEditor<BSchema, I, S>): Block<BSchema, I, S>[];
export declare function replaceBlocks<BSchema extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema>(blocksToRemove: BlockIdentifier[], blocksToInsert: PartialBlock<BSchema, I, S>[], editor: BlockNoteEditor<BSchema, I, S>): {
    insertedBlocks: Block<BSchema, I, S>[];
    removedBlocks: Block<BSchema, I, S>[];
};
export declare function insertContentAt<BSchema extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema>(position: any, nodes: Node[], editor: BlockNoteEditor<BSchema, I, S>, options?: {
    updateSelection: boolean;
}): boolean;
