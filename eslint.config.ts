import eslintConfigCityssm, {
  type Config,
  tseslint,
} from "eslint-config-cityssm";

const config = tseslint.config(...eslintConfigCityssm, {
  files: ["**/*.ts"],
  rules: {},
}) as Config;

export default config;
