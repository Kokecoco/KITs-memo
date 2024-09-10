export type PropSpec<PType extends boolean | number | string> = {
    values?: readonly PType[];
    default: PType;
};
export type PropSchema = Record<string, PropSpec<boolean | number | string>>;
export type Props<PSchema extends PropSchema> = {
    [PName in keyof PSchema]: PSchema[PName]["default"] extends boolean ? PSchema[PName]["values"] extends readonly boolean[] ? PSchema[PName]["values"][number] : boolean : PSchema[PName]["default"] extends number ? PSchema[PName]["values"] extends readonly number[] ? PSchema[PName]["values"][number] : number : PSchema[PName]["default"] extends string ? PSchema[PName]["values"] extends readonly string[] ? PSchema[PName]["values"][number] : string : never;
};
