/// <reference types="react" />
import { ComponentProps } from "@blocknote/react";
type ToolbarButtonProps = ComponentProps["FormattingToolbar"]["Button"] & ComponentProps["LinkToolbar"]["Button"];
/**
 * Helper for basic buttons that show in the formatting toolbar.
 */
export declare const ToolbarButton: import("react").ForwardRefExoticComponent<ToolbarButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export {};
