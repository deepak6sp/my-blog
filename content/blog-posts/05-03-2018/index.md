---
title: "Getting started with TypeScript and Webpack"
cover: "https://unsplash.it/1152/300/?computer?image=3"
category: "Development"
date: "01/03/2018"
tags:
    - Development
---

To get started with Typescript projects,

On the terminal, type
```
yarn init
yarn add webpack webpack-dev-server typescript ts-loader —dev
```

Create package.json file in the root folder of the project, and copy the lines below.
```
"scripts": {
      "build": "webpack",
      "start": "webpack-dev-server --content-base ./"
}
```

Now, create a new file webpack.config.js

```
var path = require('path');

module.exports = {
 entry: "./index.ts",
 output: {
   path: path.resolve(__dirname),
   filename: "bundle.js"
 },
 resolve: {
   extensions: [".ts", ".tsx", ".js"]
 },
 module: {
   rules: [
     { test: /\.tsx?$/, use: "ts-loader" }
   ]
 }
}
```

Finally, we need to configure typescript.

So, in the root folder, create tsconfig.json, and add these lines,
```
{
  "compilerOptions": {
    "target": "es6"
  }
}
```

Here, we are just specifying the module output when targeting ES6.

In index.ts, write a simple class which does the addition of two numbers

```
interface IApp {
  add(a, b): () => void
}

class App implements IApp {
  constructor() {}

  add(a: number, b: number): void {
     console.log(`Value after adding a and b is ${a+b}`);
  }
}

const obj = new App();
obj.add(2,3);
```

Now, in the terminal, type
```
yarn start
```

Output
```
Value after adding a and b is 5.
```

Now,  you have the working typescript, to get started on your project.