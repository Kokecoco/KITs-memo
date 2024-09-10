import { PluginView } from "@tiptap/pm/state";
import { Plugin, PluginKey } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Block } from "../../blocks/defaultBlocks";
import type { BlockNoteEditor } from "../../editor/BlockNoteEditor";
import { UiElementPosition } from "../../extensions-shared/UiElementPosition";
import { BlockSchema, InlineContentSchema, StyleSchema } from "../../schema";
import { EventEmitter } from "../../util/EventEmitter";
export type SideMenuState<BSchema extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema> = UiElementPosition & {
    block: Block<BSchema, I, S>;
};
export declare function getDraggableBlockFromElement(element: Element, view: EditorView): {
    node: HTMLElement;
    id: string;
} | undefined;
export declare class SideMenuView<BSchema extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema> implements PluginView {
    private readonly editor;
    private readonly pmView;
    state?: SideMenuState<BSchema, I, S>;
    readonly emitUpdate: (state: SideMenuState<BSchema, I, S>) => void;
    private needUpdate;
    private mousePos;
    private horizontalPosAnchoredAtRoot;
    private horizontalPosAnchor;
    private hoveredBlock;
    isDragging: boolean;
    menuFrozen: boolean;
    constructor(editor: BlockNoteEditor<BSchema, I, S>, pmView: EditorView, emitUpdate: (state: SideMenuState<BSchema, I, S>) => void);
    updateState: () => void;
    /**
     * Sets isDragging when dragging text.
     */
    onDragStart: () => void;
    /**
     * If the event is outside the editor contents,
     * we dispatch a fake event, so that we can still drop the content
     * when dragging / dropping to the side of the editor
     */
    onDrop: (event: DragEvent) => void;
    /**
     * If the event is outside the editor contents,
     * we dispatch a fake event, so that we can still drop the content
     * when dragging / dropping to the side of the editor
     */
    onDragOver: (event: DragEvent) => void;
    onKeyDown: (_event: KeyboardEvent) => void;
    onMouseDown: () => void;
    onMouseMove: (event: MouseEvent) => void;
    onScroll: () => void;
    update(): void;
    destroy(): void;
    addBlock(): void;
}
export declare const sideMenuPluginKey: PluginKey<any>;
export declare class SideMenuProsemirrorPlugin<BSchema extends BlockSchema, I extends InlineContentSchema, S extends StyleSchema> extends EventEmitter<any> {
    private readonly editor;
    view: SideMenuView<BSchema, I, S> | undefined;
    readonly plugin: Plugin;
    constructor(editor: BlockNoteEditor<BSchema, I, S>);
    onUpdate(callback: (state: SideMenuState<BSchema, I, S>) => void): () => void;
    /**
     * If the block is empty, opens the slash menu. If the block has content,
     * creates a new block below and opens the slash menu in it.
     */
    addBlock: () => void;
    /**
     * Handles drag & drop events for blocks.
     */
    blockDragStart: (event: {
        dataTransfer: DataTransfer | null;
        clientY: number;
    }) => void;
    /**
     * Handles drag & drop events for blocks.
     */
    blockDragEnd: () => void;
    /**
     * Freezes the side menu. When frozen, the side menu will stay
     * attached to the same block regardless of which block is hovered by the
     * mouse cursor.
     */
    freezeMenu: () => boolean;
    /**
     * Unfreezes the side menu. When frozen, the side menu will stay
     * attached to the same block regardless of which block is hovered by the
     * mouse cursor.
     */
    unfreezeMenu: () => void;
}
