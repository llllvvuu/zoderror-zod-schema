# `zoderror-zod-schema`

This is mostly a codegen/docgen hack, it would be ideal to just use the `z.ZodError` class directly, but [my OpenAPI tooling](https://github.com/ts-rest/ts-rest.git) generates from Zod schemas so here is a Zod schema that matches the `z.ZodError` class.

TS-to-zod tooling didn't work out of the box for me so I manually supervised/massaged it and Copilot.

## Usage

```sh
pnpm install @llllvvuu/zoderror-zod-schema
```

```typescript
import { ZodErrorSchema, ZodIssueSchema } from "@llllvvuu/zoderror-zod-schema"
```

## [API Reference](./api-reference/index.md)
[API Report](./api-report.md)
