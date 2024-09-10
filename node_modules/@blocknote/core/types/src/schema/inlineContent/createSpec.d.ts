import { TagParseRule } from "@tiptap/pm/model";
import { StyleSchema } from "../styles/types";
import { CustomInlineContentConfig, InlineContentConfig, InlineContentFromConfig, InlineContentSpec } from "./types";
export type CustomInlineContentImplementation<T extends InlineContentConfig, S extends StyleSchema> = {
    render: (
    /**
     * The custom inline content to render
     */
    inlineContent: InlineContentFromConfig<T, S>
    /**
     * The BlockNote editor instance
     * This is typed generically. If you want an editor with your custom schema, you need to
     * cast it manually, e.g.: `const e = editor as BlockNoteEditor<typeof mySchema>;`
     */
    ) => {
        dom: HTMLElement;
        contentDOM?: HTMLElement;
    };
};
export declare function getInlineContentParseRules(config: CustomInlineContentConfig): TagParseRule[];
export declare function createInlineContentSpec<T extends CustomInlineContentConfig, S extends StyleSchema>(inlineContentConfig: T, inlineContentImplementation: CustomInlineContentImplementation<T, S>): InlineContentSpec<T>;
