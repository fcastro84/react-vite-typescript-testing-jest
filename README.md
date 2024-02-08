# React + TypeScript + Vite + JEST

## Instalation and configuration of JEST

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```
- yarn add --dev jest
- yarn add --dev babel-jest @babel/core @babel/preset-env @babel/preset-react
- yarn add --dev @testing-library/react @testing-library/dom @testing-library/user-event @types/jest jest-environment-jsdom
- yarn add --dev jest-svg-transformer
- yarn add --dev @babel/preset-typescript
- yarn add --dev identity-obj-proxy
```

- add to `package.json`:
``` json
- "test": "jest --watchAll"
```

- create file `babel.config.cjs`:
```js
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
        '@babel/preset-typescript',
    ],
};
```

- create file `jest.config.js`:
```js
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    moduleNameMapper: {
        "^.+\\.svg$": "jest-svg-transformer",
	"\\.(css|less|scss)$": "identity-obj-proxy",
  }
}
```

- create file `jest.setup.js`
