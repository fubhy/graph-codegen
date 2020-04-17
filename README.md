# The Graph Code Generator (graph-codegen)

[![Build status](https://img.shields.io/travis/graphprotocol/graph-codegen)](https://travis-ci.org/graphprotocol/graph-codegen)
[![Package version](https://img.shields.io/npm/v/@graphprotocol/graph-codegen)](https://www.npmjs.com/package/@graphprotocol/graph-codegen)
![License](https://img.shields.io/npm/l/@graphprotocol/graph-codegen)

## Installation

This library is published as an [npm package][npm]. You can install it through npm or yarn.

```bash
# Using yarn
yarn add @graphprotocol/graph-codegen

# Using npm
npm install @graphprotocol/graph-codegen
```

## Development

Before you can start developing, you'll need to have [Node.js][node] and [Yarn][yarn] installed.

Installing only takes two commands and you're ready to roll:

```bash
# Install all library dependencies.
yarn install

# Generate the abi and bytecode files for the smart contracts.
yarn codegen
```

You are now ready to start development.

## Testing

The tests contained in this repository use an in-memory ganache test chain.

In order to execute the tests, simply run:

```bash
yarn test
```

## Contributing

Third party contributions to this project are welcome and encouraged. If you want to contribute, please open an issue before submtting a pull requests so we can discuss the proposed changes and/or additions.

Please note that this repository follows our [Code of Conduct][coc], make sure to review and follow it.

[yarn]: https://yarnpkg.com
[node]: https://nodejs.org
[npm]: https://www.npmjs.com/package/@graphprotocol/graph-codegen
[coc]: https://github.com/graphprotocol/graph-codegen/blob/master/CODE_OF_CONDUCT.md
