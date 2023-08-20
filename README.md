# `zoderror-zod-schema`

```sh
pnpm install zoderror-zod-schema
```

`zoderror-zod-schema` is mostly a codegen/docgen hack, it would be ideal to just use the `z.ZodError` class directly, but [my OpenAPI tooling](https://github.com/ts-rest/ts-rest.git) generates from Zod schemas so here is a Zod schema that matches the `z.ZodError` class.

TS-to-zod tooling didn't work out of the box for me so I manually supervised/massaged it and Copilot.
