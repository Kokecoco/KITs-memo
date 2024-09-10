export declare const bulletListItemPropSchema: {
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
export declare const BulletListItem: {
    config: {
        type: "bulletListItem";
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
        type: "bulletListItem";
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
