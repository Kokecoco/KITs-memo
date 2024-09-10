/// <reference types="react" />
import { ComponentProps } from "@blocknote/react";
export declare const Toolbar: import("react").ForwardRefExoticComponent<{
    className?: string | undefined;
    children?: import("react").ReactNode;
} & {
    className?: string | undefined;
    children?: import("react").ReactNode;
    onMouseEnter?: (() => void) | undefined;
    onMouseLeave?: (() => void) | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
type ToolbarButtonProps = ComponentProps["FormattingToolbar"]["Button"] & ComponentProps["LinkToolbar"]["Button"];
export declare const ToolbarButton: import("react").ForwardRefExoticComponent<ToolbarButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export declare const ToolbarSelect: import("react").ForwardRefExoticComponent<{
    className?: string | undefined;
    items: {
        text: string;
        icon: import("react").ReactNode;
        onClick: () => void;
        isSelected: boolean;
        isDisabled?: boolean | undefined;
    }[];
    isDisabled?: boolean | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
export {};
