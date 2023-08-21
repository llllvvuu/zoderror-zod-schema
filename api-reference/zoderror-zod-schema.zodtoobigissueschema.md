<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@llllvvuu/zoderror-zod-schema](./zoderror-zod-schema.md) &gt; [ZodTooBigIssueSchema](./zoderror-zod-schema.zodtoobigissueschema.md)

## ZodTooBigIssueSchema variable

**Signature:**

```typescript
ZodTooBigIssueSchema: z.ZodObject<{
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
}>
```