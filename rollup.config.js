import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import terser from "@rollup/plugin-terser";

export default {
  input: "./src/index.tsx",
  output: [
    {
      file: "./dist/cjs/index.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "./dist/esm/index.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [terser(), resolve(), commonjs(), typescript()],
  external: ["react", "react-dom", "next"],
};
