import { Node } from "@tiptap/core";
export declare const tablePropSchema: {
    backgroundColor: {
        default: "default";
    };
    textColor: {
        default: "default";
    };
    textAlignment: {
        default: "left";
        values: readonly ["left", "center", "right", "justify"];
    };
};
export declare const TableBlockContent: Node<any, any> & {
    name: "table";
    config: {
        content: "tableRow+";
    };
};
export declare const Table: {
    config: {
        type: "table";
        content: "table";
        propSchema: {
            backgroundColor: {
                default: "default";
            };
            textColor: {
                default: "default";
            };
            textAlignment: {
                default: "left";
                values: readonly ["left", "center", "right", "justify"];
            };
        };
    };
    implementation: import("../../schema").TiptapBlockImplementation<{
        type: "table";
        content: "table";
        propSchema: {
            backgroundColor: {
                default: "default";
            };
            textColor: {
                default: "default";
            };
            textAlignment: {
                default: "left";
                values: readonly ["left", "center", "right", "justify"];
            };
        };
    }, any, import("../../schema").InlineContentSchema, import("../../schema").StyleSchema>;
};
