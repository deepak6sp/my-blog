---
title: "Karma configuration for Angular & Typescript"
cover: "https://unsplash.it/1152/300/?computer?blur"
category: "Build tools"
date: "10/05/2018"
tags:
    - Build tools
---

Firstly, create package.json file in the project root folder, and copy the below configuration.

```
{
  "name": "karma-configuration-for-angular-typescript",
  "version": "1.0.0",
  "description": "Karma configuration for Angular & Typescript",
  "scripts": {
    "start": "webpack-dev-server --content-base ./ ",
    "build": "webpack",
    "test": "karma start"
  },
  "dependencies": {
    "@types/angular": "^1.6.21",
    "@types/angular-mocks": "^1.5.10",
    "@types/jasmine": "^2.5.53",
    "angular": "^1.6.4",
    "angular-mocks": "^1.6.4",
    "jasmine-core": "^2.6.4",
    "karma": "^2.0.0",
    "karma-chrome-launcher": "^2.2.0",
    "karma-jasmine": "^1.1.0",
    "karma-typescript": "^3.0.12",
    "phantomjs-prebuilt": "^2.1.16",
    "typescript": "latest"
  },
  "devDependencies": {
    "gulp": "^3.9.1",
    "karma-phantomjs-launcher": "^1.0.4",
    "ts-loader": "^4.3.0",
    "webpack": "^4.8.3",
    "webpack-cli": "^2.1.3",
    "webpack-dev-server": "^3.1.4"
  }
}
```

</br>
Then, in the root folder, create Karma.conf.js,

```
"use strict";
module.exports = function(config) {
    config.set({

        frameworks: ["jasmine", "karma-typescript"],

        files: [
            { pattern: "app/**/*.ts" }
        ],

        preprocessors: {
            "app/**/*.ts": ["karma-typescript"]
        },

        reporters: ["dots", "karma-typescript"],

        karmaTypescriptConfig: {
            tsconfig: "./tsconfig.json"
        },

        browsers: ["PhantomJS"]
    });
};
```

</br>
And, then in the same folder, create tsconfig.json,

```
{
    "compileOnSave": false,
    "compilerOptions": {
        "target": "ES5",
        "module": "commonjs",
        "sourceMap": true,
        "types" : [
            "angular",
            "angular-mocks",
            "jasmine"
        ]
    },
    "exclude": [
        "node_modules"
    ],
    "moduleResolution": "node"
}
```
</br>
Now, in webpack.config.js file, add

```
const path = require('path');
module.exports = {
  entry: './app/app.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```
</br>
Create, src and test folders and from your terminal, run

```
npm test
```
