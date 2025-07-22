import eslintConfigCityssm, { tseslint, } from "eslint-config-cityssm";
const config = tseslint.config(...eslintConfigCityssm, {
    files: ["**/*.ts"],
    rules: {},
});
export default config;
