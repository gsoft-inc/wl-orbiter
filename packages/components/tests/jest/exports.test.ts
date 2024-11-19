import fs from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const indexJs = fs.readFileSync(resolve(__dirname, "../../src/index.ts"), "utf-8");

const directories = fs.readdirSync(resolve(__dirname, "../../src"), { withFileTypes: true })
    .filter(x => x.isDirectory())
    .map(x => x.name);

directories.forEach(x => {
    test(`${x} components are exported`, () => {
        expect(indexJs.includes(`./${x}`)).toBeTruthy();
    });
});
