import { transpile } from "https://deno.land/x/emit@0.28.0/mod.ts"

const url = new URL("../temp/1.ts", import.meta.url)
const result = await transpile(url)

console.log(result)

await Deno.writeTextFile(
    "dist/1.js",
    result.get(url.href) || ""
)