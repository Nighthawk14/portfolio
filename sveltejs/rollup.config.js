import babel from 'rollup-plugin-babel';
import eslint from 'rollup-plugin-eslint';
import svelte from 'rollup-plugin-svelte';
import html from 'rollup-plugin-fill-html';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
  entry: 'src/main.js',
  dest: 'dist/main.js',
  format: 'es',
  plugins: [
    eslint({
      include: [
        './src/**/*.js',
      ],
    }),
    babel({
      include: ['./src/**/*.js'],
    }),
    svelte({
      // By default, all .html and .svelte files are compiled
      extensions: ['.html'],

      // You can restrict which files are compiled
      // using `include` and `exclude`
      include: 'src/components/**.html',
    }),
    html({
      template: 'index.html',
      filename: 'index.html'
    }),
    serve('dist'),
    livereload({
      watch: 'dist'
    })
  ],
};
