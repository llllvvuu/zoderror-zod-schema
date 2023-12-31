<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@llllvvuu/zoderror-zod-schema](./zoderror-zod-schema.md) &gt; [ZodInvalidReturnTypeIssueSchema](./zoderror-zod-schema.zodinvalidreturntypeissueschema.md)

## ZodInvalidReturnTypeIssueSchema variable

**Signature:**

```typescript
ZodInvalidReturnTypeIssueSchema: z.ZodObject<{
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
}>
```
