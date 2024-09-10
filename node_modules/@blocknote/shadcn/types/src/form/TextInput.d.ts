/// <reference types="react" />
export declare const TextInput: import("react").ForwardRefExoticComponent<{
    className?: string | undefined;
    name: string;
    label?: string | undefined;
    icon: import("react").ReactNode;
    autoFocus?: boolean | undefined;
    placeholder: string;
    value: string;
    onKeyDown: (event: import("react").KeyboardEvent<HTMLInputElement>) => void;
    onChange: (event: import("react").ChangeEvent<HTMLInputElement>) => void;
    onSubmit?: (() => void) | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
