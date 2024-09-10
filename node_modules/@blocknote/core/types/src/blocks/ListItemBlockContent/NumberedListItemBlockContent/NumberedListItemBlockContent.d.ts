export declare const numberedListItemPropSchema: {
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
export declare const NumberedListItem: {
    config: {
        type: "numberedListItem";
        content: "inline";
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
    implementation: import("../../../schema").TiptapBlockImplementation<{
        type: "numberedListItem";
        content: "inline";
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
    }, any, import("../../../schema").InlineContentSchema, import("../../../schema").StyleSchema>;
};
