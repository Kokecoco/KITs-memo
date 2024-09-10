import { Node, Schema } from "@tiptap/pm/model";
import type { BlockSchema, InlineContent, InlineContentSchema, PartialInlineContent, PartialTableContent, StyleSchema } from "../../schema";
import type { Block, PartialBlock } from "../../blocks/defaultBlocks";
/**
 * converts an array of inline content elements to prosemirror nodes
 */
export declare function inlineContentToNodes<I extends InlineContentSchema, S extends StyleSchema>(blockContent: PartialInlineContent<I, S>, schema: Schema, styleSchema: S): Node[];
/**
 * converts an array of inline content elements to prosemirror nodes
 */
export declare function tableContentToNodes<I extends InlineContentSchema, S extends StyleSchema>(tableContent: PartialTableContent<I, S>, schema: Schema, styleSchema: StyleSchema): Node[];
/**
 * Converts a BlockNote block to a TipTap node.
 */
export declare function blockToNode(block: PartialBlock<any, any, any>, schema: Schema, styleSchema: StyleSchema): Node;
/**
 * Converts an internal (prosemirror) content node to a BlockNote InlineContent array.
 */
export declare function contentNodeToInlineContent<I extends InlineContentSchema, S extends StyleSchema>(contentNode: Node, inlineContentSchema: I, styleSchema: S): InlineContent<I, S>[];
export declare function nodeToCustomInlineContent<I extends InlineContentSchema, S extends StyleSchema>(node: Node, inlineContentSchema: I, styleSchema: S): InlineContent<I, S>;
/**
 * Convert a TipTap node to a BlockNote block.
 */
export declare function nodeToBlock<BSchema extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema>(node: Node, blockSchema: BSchema, inlineContentSchema: I, styleSchema: S, blockCache?: WeakMap<Node, Block<BSchema, I, S>>): Block<BSchema, I, S>;
