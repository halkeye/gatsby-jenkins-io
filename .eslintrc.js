module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['react-app', 'airbnb', 'airbnb/hooks'],
  rules: {
    'react/no-danger': 'off', // gatsby uses it everywhere

    'max-len': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
