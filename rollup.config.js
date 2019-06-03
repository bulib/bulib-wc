// import createDefaultConfig from '@open-wc/building-rollup/modern-and-legacy-config';
import resolve from 'rollup-plugin-node-resolve';
import minify from 'rollup-plugin-babel-minify';

export default {
  input: 'src/index.js',
  inlineDynamicImports: true,
  output: [
    {
      name: 'bulibwc',
      file: 'dist/bundle.umd.js',
      format: 'umd',
      globals: []
    }
  ],
  watch: { include: 'src/*' },
  external: ['lit-element', '@open-wc/polyfills-loader', 'lit-html'],
  plugins: [
    resolve(),
    minify()
  ]
};