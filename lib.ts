import { z } from "zod"

// translated from https://github.com/colinhacks/zod/blob/master/src/ZodError.ts
// with the help of https://transform.tools/typescript-to-zod and some manual massaging

export const ZodIssueCodeSchema = z.enum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite",
])

export const ZodParsedTypeSchema = z.enum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set",
])

export const ZodPrimitiveTypeSchema = z
  .union([z.string(), z.number(), z.symbol(), z.bigint(), z.boolean()])
  .nullable()
  .optional()

export const ZodStringValidationSchema = z.union([
  z.enum([
    "email",
    "url",
    "emoji",
    "uuid",
    "regex",
    "cuid",
    "cuid2",
    "ulid",
    "datetime",
    "ip",
  ]),
  z.object({
    includes: z.string(),
    position: z.number().optional(),
  }),
  z.object({
    startsWith: z.string(),
  }),
  z.object({
    endsWith: z.string(),
  }),
])

export const ZodIssueBaseSchema = z.object({
  path: z.array(z.union([z.string(), z.number()])),
  message: z.string().optional(),
})

export const ZodInvalidTypeIssueSchema = ZodIssueBaseSchema.extend({
  code: z.literal("invalid_type"),
  expected: ZodParsedTypeSchema,
  received: ZodParsedTypeSchema,
})

export const ZodInvalidLiteralIssueSchema = ZodIssueBaseSchema.extend({
  code: z.literal("invalid_literal"),
  expected: z.unknown(),
  received: z.unknown(),
})

export const ZodCustomIssueSchema = ZodIssueBaseSchema.extend({
  code: z.literal("custom"),
  params: z.record(z.any()).optional(),
})

export const ZodInvalidUnionIssueSchema = ZodIssueBaseSchema.extend({
  code: z.literal("invalid_union"),
  unionErrors: z.array(z.lazy(() => ZodErrorSchema)),
})

export const ZodInvalidUnionDiscriminatorIssueSchema =
  ZodIssueBaseSchema.extend({
    code: z.literal("invalid_union_discriminator"),
    options: z.array(ZodPrimitiveTypeSchema),
  })

export const ZodInvalidEnumValueIssueSchema = ZodIssueBaseSchema.extend({
  code: z.literal("invalid_enum_value"),
  received: z.union([z.string(), z.number()]),
  options: z.array(z.union([z.string(), z.number()])),
})

export const ZodUnrecognizedKeysIssueSchema = ZodIssueBaseSchema.extend({
  code: z.literal("unrecognized_keys"),
  keys: z.array(z.string()),
})

export const ZodInvalidArgumentsIssueSchema = ZodIssueBaseSchema.extend({
  code: z.literal("invalid_arguments"),
  argumentsError: z.lazy(() => ZodErrorSchema),
})

export const ZodInvalidReturnTypeIssueSchema = ZodIssueBaseSchema.extend({
  code: z.literal("invalid_return_type"),
  returnTypeError: z.lazy(() => ZodErrorSchema),
})

export const ZodInvalidDateIssueSchema = ZodIssueBaseSchema.extend({
  code: z.literal("invalid_date"),
})

export const ZodInvalidStringIssueSchema = ZodIssueBaseSchema.extend({
  code: z.literal("invalid_string"),
  validation: ZodStringValidationSchema,
})

export const ZodTooSmallIssueSchema = ZodIssueBaseSchema.extend({
  code: z.literal("too_small"),
  minimum: z.union([z.number(), z.bigint()]),
  inclusive: z.boolean(),
  exact: z.boolean().optional(),
  type: z.enum(["array", "string", "number", "set", "date", "bigint"]),
})

export const ZodTooBigIssueSchema = ZodIssueBaseSchema.extend({
  code: z.literal("too_big"),
  maximum: z.union([z.number(), z.bigint()]),
  inclusive: z.boolean(),
  exact: z.boolean().optional(),
  type: z.enum(["array", "string", "number", "set", "date", "bigint"]),
})

export const ZodInvalidIntersectionTypesIssueSchema = ZodIssueBaseSchema.extend(
  {
    code: z.literal("invalid_intersection_types"),
  },
)

export const ZodNotMultipleOfIssueSchema = ZodIssueBaseSchema.extend({
  code: z.literal("not_multiple_of"),
  multipleOf: z.union([z.number(), z.bigint()]),
})

export const ZodNotFiniteIssueSchema = ZodIssueBaseSchema.extend({
  code: z.literal("not_finite"),
})

export const ZodErrorSchema = z
  .object({
    issues: z.array(
      z.union([
        ZodInvalidTypeIssueSchema,
        ZodInvalidLiteralIssueSchema,
        ZodCustomIssueSchema,
        ZodInvalidUnionIssueSchema,
        ZodInvalidUnionDiscriminatorIssueSchema,
        ZodInvalidEnumValueIssueSchema,
        ZodUnrecognizedKeysIssueSchema,
        ZodInvalidArgumentsIssueSchema,
        ZodInvalidReturnTypeIssueSchema,
        ZodInvalidDateIssueSchema,
        ZodInvalidStringIssueSchema,
        ZodTooSmallIssueSchema,
        ZodTooBigIssueSchema,
        ZodInvalidIntersectionTypesIssueSchema,
        ZodNotMultipleOfIssueSchema,
        ZodNotFiniteIssueSchema,
      ]),
    ),
  })
  .describe(
    "@see https://github.com/colinhacks/zod/blob/master/ERROR_HANDLING.md",
  ) as z.ZodType<Pick<z.ZodError, "issues">> // I screwed this up somehow but IDK how, so just asserting away for now
