import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import visualizer from 'rollup-plugin-visualizer';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.es.js',
      format: 'esm',
      exports: 'named',
    },
  ],
  plugins: [
    external('react'),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    resolve({
      extensions: ['.jsx', '.js'],
    }),
    commonjs(),
    image(),
    visualizer(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      preventAssignment: true,
    }),
    terser(),
  ],
};
