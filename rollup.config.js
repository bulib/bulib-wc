import resolve from 'rollup-plugin-node-resolve';
import minify from 'rollup-plugin-babel-minify';

export default {
  input: 'src/index.js',
  inlineDynamicImports: true,
  output: [
    {
      name: 'bulibwc',
      file: 'dist/bundle.esm.js',
      format: 'esm',
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