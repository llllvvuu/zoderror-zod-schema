## API Report File for "@llllvvuu/zoderror-zod-schema"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { z } from 'zod';

// @public (undocumented)
export const ZodCustomIssueSchema: z.ZodObject<{
    path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
    message: z.ZodOptional<z.ZodString>;
    code: z.ZodLiteral<"custom">;
    params: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    path: (string | number)[];
    code: "custom";
    message?: string | undefined;
    params?: Record<string, any> | undefined;
}, {
    path: (string | number)[];
    code: "custom";
    message?: string | undefined;
    params?: Record<string, any> | undefined;
}>;

// @public (undocumented)
export const ZodErrorSchema: z.ZodType<Pick<z.ZodError<any>, "issues" | "name">, z.ZodTypeDef, Pick<z.ZodError<any>, "issues" | "name">>;

// @public (undocumented)
export const ZodInvalidArgumentsIssueSchema: z.ZodObject<{
    path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
    message: z.ZodOptional<z.ZodString>;
    code: z.ZodLiteral<"invalid_arguments">;
    argumentsError: z.ZodLazy<z.ZodType<Pick<z.ZodError<any>, "issues" | "name">, z.ZodTypeDef, Pick<z.ZodError<any>, "issues" | "name">>>;
}, "strip", z.ZodTypeAny, {
    path: (string | number)[];
    code: "invalid_arguments";
    argumentsError: Pick<z.ZodError<any>, "issues" | "name">;
    message?: string | undefined;
}, {
    path: (string | number)[];
    code: "invalid_arguments";
    argumentsError: Pick<z.ZodError<any>, "issues" | "name">;
    message?: string | undefined;
}>;

// @public (undocumented)
export const ZodInvalidDateIssueSchema: z.ZodObject<{
    path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
    message: z.ZodOptional<z.ZodString>;
    code: z.ZodLiteral<"invalid_date">;
}, "strip", z.ZodTypeAny, {
    path: (string | number)[];
    code: "invalid_date";
    message?: string | undefined;
}, {
    path: (string | number)[];
    code: "invalid_date";
    message?: string | undefined;
}>;

// @public (undocumented)
export const ZodInvalidEnumValueIssueSchema: z.ZodObject<{
    path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
    message: z.ZodOptional<z.ZodString>;
    code: z.ZodLiteral<"invalid_enum_value">;
    received: z.ZodUnion<[z.ZodString, z.ZodNumber]>;
    options: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
}, "strip", z.ZodTypeAny, {
    path: (string | number)[];
    code: "invalid_enum_value";
    received: string | number;
    options: (string | number)[];
    message?: string | undefined;
}, {
    path: (string | number)[];
    code: "invalid_enum_value";
    received: string | number;
    options: (string | number)[];
    message?: string | undefined;
}>;

// @public (undocumented)
export const ZodInvalidIntersectionTypesIssueSchema: z.ZodObject<{
    path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
    message: z.ZodOptional<z.ZodString>;
    code: z.ZodLiteral<"invalid_intersection_types">;
}, "strip", z.ZodTypeAny, {
    path: (string | number)[];
    code: "invalid_intersection_types";
    message?: string | undefined;
}, {
    path: (string | number)[];
    code: "invalid_intersection_types";
    message?: string | undefined;
}>;

// @public (undocumented)
export const ZodInvalidLiteralIssueSchema: z.ZodObject<{
    path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
    message: z.ZodOptional<z.ZodString>;
    code: z.ZodLiteral<"invalid_literal">;
    expected: z.ZodUnknown;
    received: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    path: (string | number)[];
    code: "invalid_literal";
    message?: string | undefined;
    expected?: unknown;
    received?: unknown;
}, {
    path: (string | number)[];
    code: "invalid_literal";
    message?: string | undefined;
    expected?: unknown;
    received?: unknown;
}>;

// @public (undocumented)
export const ZodInvalidReturnTypeIssueSchema: z.ZodObject<{
    path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
    message: z.ZodOptional<z.ZodString>;
    code: z.ZodLiteral<"invalid_return_type">;
    returnTypeError: z.ZodLazy<z.ZodType<Pick<z.ZodError<any>, "issues" | "name">, z.ZodTypeDef, Pick<z.ZodError<any>, "issues" | "name">>>;
}, "strip", z.ZodTypeAny, {
    path: (string | number)[];
    code: "invalid_return_type";
    returnTypeError: Pick<z.ZodError<any>, "issues" | "name">;
    message?: string | undefined;
}, {
    path: (string | number)[];
    code: "invalid_return_type";
    returnTypeError: Pick<z.ZodError<any>, "issues" | "name">;
    message?: string | undefined;
}>;

// @public (undocumented)
export const ZodInvalidStringIssueSchema: z.ZodObject<{
    path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
    message: z.ZodOptional<z.ZodString>;
    code: z.ZodLiteral<"invalid_string">;
    validation: z.ZodUnion<[z.ZodEnum<["email", "url", "emoji", "uuid", "regex", "cuid", "cuid2", "ulid", "datetime", "ip"]>, z.ZodObject<{
        includes: z.ZodString;
        position: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        includes: string;
        position?: number | undefined;
    }, {
        includes: string;
        position?: number | undefined;
    }>, z.ZodObject<{
        startsWith: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        startsWith: string;
    }, {
        startsWith: string;
    }>, z.ZodObject<{
        endsWith: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        endsWith: string;
    }, {
        endsWith: string;
    }>]>;
}, "strip", z.ZodTypeAny, {
    path: (string | number)[];
    code: "invalid_string";
    validation: ("email" | "url" | "emoji" | "uuid" | "regex" | "cuid" | "cuid2" | "ulid" | "datetime" | "ip" | {
        includes: string;
        position?: number | undefined;
    } | {
        startsWith: string;
    } | {
        endsWith: string;
    }) & ("email" | "url" | "emoji" | "uuid" | "regex" | "cuid" | "cuid2" | "ulid" | "datetime" | "ip" | {
        includes: string;
        position?: number | undefined;
    } | {
        startsWith: string;
    } | {
        endsWith: string;
    } | undefined);
    message?: string | undefined;
}, {
    path: (string | number)[];
    code: "invalid_string";
    validation: ("email" | "url" | "emoji" | "uuid" | "regex" | "cuid" | "cuid2" | "ulid" | "datetime" | "ip" | {
        includes: string;
        position?: number | undefined;
    } | {
        startsWith: string;
    } | {
        endsWith: string;
    }) & ("email" | "url" | "emoji" | "uuid" | "regex" | "cuid" | "cuid2" | "ulid" | "datetime" | "ip" | {
        includes: string;
        position?: number | undefined;
    } | {
        startsWith: string;
    } | {
        endsWith: string;
    } | undefined);
    message?: string | undefined;
}>;

// @public (undocumented)
export const ZodInvalidTypeIssueSchema: z.ZodObject<{
    path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
    message: z.ZodOptional<z.ZodString>;
    code: z.ZodLiteral<"invalid_type">;
    expected: z.ZodEnum<["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]>;
    received: z.ZodEnum<["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]>;
}, "strip", z.ZodTypeAny, {
    path: (string | number)[];
    code: "invalid_type";
    expected: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "nan" | "integer" | "float" | "date" | "null" | "array" | "unknown" | "promise" | "void" | "never" | "map" | "set";
    received: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "nan" | "integer" | "float" | "date" | "null" | "array" | "unknown" | "promise" | "void" | "never" | "map" | "set";
    message?: string | undefined;
}, {
    path: (string | number)[];
    code: "invalid_type";
    expected: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "nan" | "integer" | "float" | "date" | "null" | "array" | "unknown" | "promise" | "void" | "never" | "map" | "set";
    received: "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "nan" | "integer" | "float" | "date" | "null" | "array" | "unknown" | "promise" | "void" | "never" | "map" | "set";
    message?: string | undefined;
}>;

// @public (undocumented)
export const ZodInvalidUnionDiscriminatorIssueSchema: z.ZodObject<{
    path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
    message: z.ZodOptional<z.ZodString>;
    code: z.ZodLiteral<"invalid_union_discriminator">;
    options: z.ZodArray<z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodSymbol, z.ZodBigInt, z.ZodBoolean]>>>, "many">;
}, "strip", z.ZodTypeAny, {
    path: (string | number)[];
    code: "invalid_union_discriminator";
    options: (string | number | bigint | boolean | symbol | null | undefined)[];
    message?: string | undefined;
}, {
    path: (string | number)[];
    code: "invalid_union_discriminator";
    options: (string | number | bigint | boolean | symbol | null | undefined)[];
    message?: string | undefined;
}>;

// @public (undocumented)
export const ZodInvalidUnionIssueSchema: z.ZodObject<{
    path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
    message: z.ZodOptional<z.ZodString>;
    code: z.ZodLiteral<"invalid_union">;
    unionErrors: z.ZodArray<z.ZodLazy<z.ZodType<Pick<z.ZodError<any>, "issues" | "name">, z.ZodTypeDef, Pick<z.ZodError<any>, "issues" | "name">>>, "many">;
}, "strip", z.ZodTypeAny, {
    path: (string | number)[];
    code: "invalid_union";
    unionErrors: Pick<z.ZodError<any>, "issues" | "name">[];
    message?: string | undefined;
}, {
    path: (string | number)[];
    code: "invalid_union";
    unionErrors: Pick<z.ZodError<any>, "issues" | "name">[];
    message?: string | undefined;
}>;

// @public (undocumented)
export const ZodIssueBaseSchema: z.ZodObject<{
    path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
    message: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    path: (string | number)[];
    message?: string | undefined;
}, {
    path: (string | number)[];
    message?: string | undefined;
}>;

// @public (undocumented)
export const ZodIssueCodeSchema: z.ZodEnum<["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]>;

// @public (undocumented)
export const ZodNotFiniteIssueSchema: z.ZodObject<{
    path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
    message: z.ZodOptional<z.ZodString>;
    code: z.ZodLiteral<"not_finite">;
}, "strip", z.ZodTypeAny, {
    path: (string | number)[];
    code: "not_finite";
    message?: string | undefined;
}, {
    path: (string | number)[];
    code: "not_finite";
    message?: string | undefined;
}>;

// @public (undocumented)
export const ZodNotMultipleOfIssueSchema: z.ZodObject<{
    path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
    message: z.ZodOptional<z.ZodString>;
    code: z.ZodLiteral<"not_multiple_of">;
    multipleOf: z.ZodUnion<[z.ZodNumber, z.ZodBigInt]>;
}, "strip", z.ZodTypeAny, {
    path: (string | number)[];
    code: "not_multiple_of";
    multipleOf: number | bigint;
    message?: string | undefined;
}, {
    path: (string | number)[];
    code: "not_multiple_of";
    multipleOf: number | bigint;
    message?: string | undefined;
}>;

// @public (undocumented)
export const ZodParsedTypeSchema: z.ZodEnum<["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]>;

// @public (undocumented)
export const ZodPrimitiveTypeSchema: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodSymbol, z.ZodBigInt, z.ZodBoolean]>>>;

// @public (undocumented)
export const ZodStringValidationSchema: z.ZodUnion<[z.ZodEnum<["email", "url", "emoji", "uuid", "regex", "cuid", "cuid2", "ulid", "datetime", "ip"]>, z.ZodObject<{
    includes: z.ZodString;
    position: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    includes: string;
    position?: number | undefined;
}, {
    includes: string;
    position?: number | undefined;
}>, z.ZodObject<{
    startsWith: z.ZodString;
}, "strip", z.ZodTypeAny, {
    startsWith: string;
}, {
    startsWith: string;
}>, z.ZodObject<{
    endsWith: z.ZodString;
}, "strip", z.ZodTypeAny, {
    endsWith: string;
}, {
    endsWith: string;
}>]>;

// @public (undocumented)
export const ZodTooBigIssueSchema: z.ZodObject<{
    path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
    message: z.ZodOptional<z.ZodString>;
    code: z.ZodLiteral<"too_big">;
    maximum: z.ZodUnion<[z.ZodNumber, z.ZodBigInt]>;
    inclusive: z.ZodBoolean;
    exact: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodEnum<["array", "string", "number", "set", "date", "bigint"]>;
}, "strip", z.ZodTypeAny, {
    path: (string | number)[];
    code: "too_big";
    inclusive: boolean;
    type: "string" | "number" | "bigint" | "date" | "array" | "set";
    maximum: number | bigint;
    message?: string | undefined;
    exact?: boolean | undefined;
}, {
    path: (string | number)[];
    code: "too_big";
    inclusive: boolean;
    type: "string" | "number" | "bigint" | "date" | "array" | "set";
    maximum: number | bigint;
    message?: string | undefined;
    exact?: boolean | undefined;
}>;

// @public (undocumented)
export const ZodTooSmallIssueSchema: z.ZodObject<{
    path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
    message: z.ZodOptional<z.ZodString>;
    code: z.ZodLiteral<"too_small">;
    minimum: z.ZodUnion<[z.ZodNumber, z.ZodBigInt]>;
    inclusive: z.ZodBoolean;
    exact: z.ZodOptional<z.ZodBoolean>;
    type: z.ZodEnum<["array", "string", "number", "set", "date", "bigint"]>;
}, "strip", z.ZodTypeAny, {
    path: (string | number)[];
    code: "too_small";
    minimum: number | bigint;
    inclusive: boolean;
    type: "string" | "number" | "bigint" | "date" | "array" | "set";
    message?: string | undefined;
    exact?: boolean | undefined;
}, {
    path: (string | number)[];
    code: "too_small";
    minimum: number | bigint;
    inclusive: boolean;
    type: "string" | "number" | "bigint" | "date" | "array" | "set";
    message?: string | undefined;
    exact?: boolean | undefined;
}>;

// @public (undocumented)
export const ZodUnrecognizedKeysIssueSchema: z.ZodObject<{
    path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
    message: z.ZodOptional<z.ZodString>;
    code: z.ZodLiteral<"unrecognized_keys">;
    keys: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    path: (string | number)[];
    code: "unrecognized_keys";
    keys: string[];
    message?: string | undefined;
}, {
    path: (string | number)[];
    code: "unrecognized_keys";
    keys: string[];
    message?: string | undefined;
}>;

// (No @packageDocumentation comment for this package)

```