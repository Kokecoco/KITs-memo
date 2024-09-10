export declare const headingPropSchema: {
    level: {
        default: number;
        values: readonly [1, 2, 3];
    };
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
export declare const Heading: {
    config: {
        type: "heading";
        content: "inline";
        propSchema: {
            level: {
                default: number;
                values: readonly [1, 2, 3];
            };
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
        type: "heading";
        content: "inline";
        propSchema: {
            level: {
                default: number;
                values: readonly [1, 2, 3];
            };
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
