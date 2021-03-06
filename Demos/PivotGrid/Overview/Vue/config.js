System.config({
  transpiler: "plugin-babel",
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  map: {
    vue: "npm:vue@2.5.16/dist/vue.esm.browser.js",
    'devextreme': 'npm:devextreme@18.1',
    'devextreme-vue': 'npm:devextreme-vue@18.1-unstable',
    jszip: 'npm:jszip@3.1.3/dist/jszip.min.js',

    'plugin-babel': 'npm:systemjs-plugin-babel@0/plugin-babel.js',
    'systemjs-babel-build':
      'npm:systemjs-plugin-babel@0/systemjs-babel-browser.js'
  },
  packages: {
    "devextreme-vue": {
      main: 'index.js'
    },
    'devextreme': {
      defaultExtension: 'js'
    }
  },
  babelOptions: {
    sourceMaps: false,
    stage0: true
  }
});