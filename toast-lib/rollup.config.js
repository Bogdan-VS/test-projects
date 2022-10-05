import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import nodePolyfills from 'rollup-plugin-polyfill-node'
import image from '@rollup/plugin-image'
import visualizer from 'rollup-plugin-visualizer'
import alias from '@rollup/plugin-alias'
import replace from '@rollup/plugin-replace'
import { terser } from 'rollup-plugin-terser'

const packageJson = require('./package.json')

export default {
  input: './src/components/Toast/index.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      extensions: ['.jsx', '.js'],
      browser: true,
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    external(),
    commonjs({
      include: ['node_modules/**'],
    }),
    nodePolyfills({ os: true }),
    image(),
    alias({
      resolve: ['.js', '.jsx'],
      entries: [
        {
          find: 'src',
          replacement: './src',
        },
      ],
    }),
    visualizer(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
      preventAssignment: true,
    }),
    terser(),
  ],
  external: [
    'react',
    'react-dom',
    'react-icons',
    'uniqid',
    'styled-components',
  ],
}
