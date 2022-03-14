import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';

const isProduction = process.env.NODE_ENV === 'production';
const packageJson = require('./package.json');

const rollupConfig = [
  {
    input: 'src/index.ts',
    external: ['react', 'react-dom'],
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: !isProduction,
        name: 'react-modules-template',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: !isProduction,
        plugins: [
          getBabelOutputPlugin({
            presets: ['@babel/preset-env'],
          }),
        ],
      },
    ],
    plugins: [
      peerDepsExternal(),
      del({ targets: ['dist/*', 'styles/tailwind.css'] }),
      nodeResolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        config: {
          path: './postcss.config.js',
        },
        minimize: true,
        sourceMap: !isProduction,
        inject: {
          insertAt: 'top',
        },
      }),
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-react'],
        exclude: 'node_modules/**',
      }),
      terser(),
    ],
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'esm',
      },
    ],
    external: [/\.css$/],
    plugins: [dts()],
  },
];

export default rollupConfig;
