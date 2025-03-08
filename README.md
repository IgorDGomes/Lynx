# Pokedex

Made with the purpose of trying Lynx framework

## Preview

## Problems:

### Creating app from Windows machine

[Solution](https://github.com/lynx-family/lynx-stack/issues/89#issuecomment-2705802813)

1. Install the canary version for `@lynx-js/react-rsbuild-plugin-canary` as a development dependency.

2. Change the `lynx.config.ts` file to use `@lynx-js/react-rsbuild-plugin-canary` instead of `lynx-js/react-rsbuild-plugin`

3. Go to node_modules/@lynx-js/tasm/index.js and change the `let encode = encode_napi` to `let encode = getEncodeMode()`

### Only 5 tags supported

As of now it only support `<view>`, `<scroll-view>`, `<text>`, `<image>` and `<list>`.
`( <page> )`

[Solution](https://lynxjs.org/guide/custom-native-component.html#platform=android)

Creating Custom Native elements, either using java or kotlin. ( Android )
