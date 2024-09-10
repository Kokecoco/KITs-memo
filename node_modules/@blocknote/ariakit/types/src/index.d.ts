import { InlineContentSchema, StyleSchema } from "@blocknote/core";
import { BlockNoteViewRaw, Components } from "@blocknote/react";
import { ComponentProps } from "react";
import "./style.css";
export declare const components: Components;
export declare const BlockNoteView: <BSchema extends Record<string, import("@blocknote/core").BlockConfig>, ISchema extends InlineContentSchema, SSchema extends StyleSchema>(props: ComponentProps<typeof BlockNoteViewRaw<BSchema, ISchema, SSchema>>) => import("react/jsx-runtime").JSX.Element;
