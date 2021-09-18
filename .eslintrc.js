module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['./'],
        alias: {
          _src: './src',
          _molecules: './src/components/molecules',
          _organisms: './src/components/organisms',
          _atoms: './src/components/atoms',
          _services: './src/services',
          _navigations: './src/navigations',
          _actions: './src/stateManagment/actions',
          _reducers: './src/stateManagment/reducers',
          _store: './src/stateManagment/store',
          _styles: "./src/styles"
        },
      },
    },
  },
};