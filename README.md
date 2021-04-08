# svg-children-loader

A loader for webpack that enable extracting all child elements of svg file as a String.

## Install

```bash
$ npm install svg-children-loader --save-dev
```

## Usage

```js
module.exports = {
  ...,
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-children-loader',
            options: {
              extractAttributes: ['viewBox']
            }
          },
        ]
      }
    ]
  }
}
```