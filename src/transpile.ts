import { transpile } from "https://deno.land/x/emit@0.29.0/mod.ts"

const url = new URL("https://deno.land/x/enz@0.1.1/mod.ts", import.meta.url)
const result = await transpile(url)

console.log(result)

await Deno.writeTextFile(
    "dist/enz.js",
    result.get(url.href) || ""
)