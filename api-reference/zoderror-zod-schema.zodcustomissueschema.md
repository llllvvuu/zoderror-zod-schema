<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@llllvvuu/zoderror-zod-schema](./zoderror-zod-schema.md) &gt; [ZodCustomIssueSchema](./zoderror-zod-schema.zodcustomissueschema.md)

## ZodCustomIssueSchema variable

**Signature:**

```typescript
ZodCustomIssueSchema: z.ZodObject<{
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
}>
```
