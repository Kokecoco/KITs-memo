import { Block, PartialBlock } from "../../blocks/defaultBlocks";
import { BlockSchema } from "../../schema/blocks/types";
import { InlineContentSchema } from "../../schema/inlineContent/types";
import { StyleSchema } from "../../schema/styles/types";
export declare function partialBlocksToBlocksForTesting<BSchema extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema>(schema: BSchema, partialBlocks: Array<PartialBlock<BSchema, I, S>>): Array<Block<BSchema, I, S>>;
export declare function partialBlockToBlockForTesting<BSchema extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema>(schema: BSchema, partialBlock: PartialBlock<BSchema, I, S>): Block<BSchema, I, S>;
export declare function addIdsToBlock(block: PartialBlock<any, any, any>): void;
export declare function addIdsToBlocks(blocks: PartialBlock<any, any, any>[]): void;
