import { Node, NodeType } from "prosemirror-model";
export type BlockInfoWithoutPositions = {
    id: string;
    node: Node;
    contentNode: Node;
    contentType: NodeType;
    numChildBlocks: number;
};
export type BlockInfo = BlockInfoWithoutPositions & {
    startPos: number;
    endPos: number;
    depth: number;
};
/**
 * Helper function for `getBlockInfoFromPos`, returns information regarding
 * provided blockContainer node.
 * @param blockContainer The blockContainer node to retrieve info for.
 */
export declare function getBlockInfo(blockContainer: Node): BlockInfoWithoutPositions;
/**
 * Retrieves information regarding the nearest blockContainer node in a
 * ProseMirror doc, relative to a position.
 * @param doc The ProseMirror doc.
 * @param pos An integer position.
 * @returns A BlockInfo object for the nearest blockContainer node.
 */
export declare function getBlockInfoFromPos(doc: Node, pos: number): BlockInfo;
