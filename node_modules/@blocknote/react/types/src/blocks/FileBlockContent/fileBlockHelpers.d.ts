import { FileBlockConfig } from "@blocknote/core";
import { ReactNode } from "react";
import { ReactCustomBlockRenderProps } from "../../schema/ReactBlockSpec";
export declare const DefaultFilePreview: (props: Omit<ReactCustomBlockRenderProps<FileBlockConfig, any, any>, "contentRef">) => import("react/jsx-runtime").JSX.Element;
export declare const FileAndCaptionWrapper: (props: Omit<ReactCustomBlockRenderProps<FileBlockConfig, any, any>, "contentRef"> & {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const AddFileButton: (props: Omit<ReactCustomBlockRenderProps<FileBlockConfig, any, any>, "contentRef"> & {
    buttonText: string;
    buttonIcon: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const LinkWithCaption: (props: {
    caption: string;
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const FigureWithCaption: (props: {
    caption: string;
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const ResizeHandlesWrapper: (props: Required<Omit<ReactCustomBlockRenderProps<FileBlockConfig, any, any>, "contentRef">> & {
    width: number;
    setWidth: (width: number) => void;
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
