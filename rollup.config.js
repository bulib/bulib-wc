export default {
  input: 'src/index.js',
  external: ['lit-element', 'lit-hmtl'],
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
    name: 'bulib-wc'
  }
};