<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@llllvvuu/zoderror-zod-schema](./zoderror-zod-schema.md) &gt; [ZodInvalidDateIssueSchema](./zoderror-zod-schema.zodinvaliddateissueschema.md)

## ZodInvalidDateIssueSchema variable

**Signature:**

```typescript
ZodInvalidDateIssueSchema: z.ZodObject<{
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
}>
```
