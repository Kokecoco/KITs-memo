import type { BlockNoteEditor } from "../../editor/BlockNoteEditor";
import { BlockFromConfig, FileBlockConfig } from "../../schema";
export declare const createDefaultFilePreview: (block: BlockFromConfig<FileBlockConfig, any, any>) => {
    dom: HTMLElement;
    destroy?: () => void;
};
export declare const createFileAndCaptionWrapper: (block: BlockFromConfig<FileBlockConfig, any, any>, file: HTMLElement) => {
    dom: HTMLDivElement;
};
export declare const createAddFileButton: (block: BlockFromConfig<FileBlockConfig, any, any>, editor: BlockNoteEditor<any, any, any>, buttonText?: string, buttonIcon?: HTMLElement) => {
    dom: HTMLDivElement;
    destroy: () => void;
};
export declare const parseEmbedElement: (embedElement: HTMLEmbedElement) => {
    url: string | undefined;
};
export declare const parseFigureElement: (figureElement: HTMLElement, targetTag: string) => {
    targetElement: HTMLElement;
    caption: string | undefined;
} | undefined;
export declare const createLinkWithCaption: (element: HTMLElement, caption: string) => {
    dom: HTMLDivElement;
};
export declare const createFigureWithCaption: (element: HTMLElement, caption: string) => {
    dom: HTMLElement;
};
export declare const createResizeHandlesWrapper: (block: BlockFromConfig<FileBlockConfig, any, any>, editor: BlockNoteEditor<any, any, any>, element: HTMLElement, getWidth: () => number, setWidth: (width: number) => void) => {
    dom: HTMLElement;
    destroy: () => void;
};
