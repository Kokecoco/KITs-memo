import { InlineContentSchema, StyleSchema } from "@blocknote/core";
import { BlockNoteViewRaw, Components } from "@blocknote/react";
import { ComponentProps } from "react";
import { Theme } from "./BlockNoteTheme";
import "./style.css";
export * from "./BlockNoteTheme";
export * from "./defaultThemes";
export declare const components: Components;
export declare const BlockNoteView: <BSchema extends Record<string, import("@blocknote/core").BlockConfig>, ISchema extends InlineContentSchema, SSchema extends StyleSchema>(props: Omit<ComponentProps<typeof BlockNoteViewRaw<BSchema, ISchema, SSchema>>, "theme"> & {
    theme?: "light" | "dark" | Theme | {
        light: Theme;
        dark: Theme;
    };
}) => import("react/jsx-runtime").JSX.Element;
