import { InlineContentSchema, StyleSchema } from "@blocknote/core";
import { BlockNoteViewRaw, Components } from "@blocknote/react";
import { ComponentProps } from "react";
import { ShadCNComponents } from "./ShadCNComponentsContext";
import "./style.css";
export declare const components: Components;
export declare const BlockNoteView: <BSchema extends Record<string, import("@blocknote/core").BlockConfig>, ISchema extends InlineContentSchema, SSchema extends StyleSchema>(props: ComponentProps<typeof BlockNoteViewRaw<BSchema, ISchema, SSchema>> & {
    /**
     * (optional)Provide your own shadcn component overrides
     */
    shadCNComponents?: Partial<ShadCNComponents>;
}) => import("react/jsx-runtime").JSX.Element;
