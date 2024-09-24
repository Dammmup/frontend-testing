import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife', // для запуска в браузере
    name: 'App',
    sourcemap: true
  },
  plugins: [terser()]
};
