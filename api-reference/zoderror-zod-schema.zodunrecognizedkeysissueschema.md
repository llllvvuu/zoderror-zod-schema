<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@llllvvuu/zoderror-zod-schema](./zoderror-zod-schema.md) &gt; [ZodUnrecognizedKeysIssueSchema](./zoderror-zod-schema.zodunrecognizedkeysissueschema.md)

## ZodUnrecognizedKeysIssueSchema variable

**Signature:**

```typescript
ZodUnrecognizedKeysIssueSchema: z.ZodObject<{
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
}>
```