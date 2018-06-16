---
title: "Webpack Basics - With Yarn"
cover: "https://unsplash.it/1152/300/?computer?image=1"
category: "Build Tools"
date: "01/03/2018"
tags:
    - Build tools
---

Build tools usage is growing, and becoming a must learn technology for any web developer these days. Although, there are so many build tools available such as gulp, grunt and webpack, webpack is a better option comparatively.

In this post I will be using <a href="https://yarnpkg.com/en/" target="_blank"> YARN - FAST, RELIABLE, AND SECURE DEPENDENCY MANAGEMENT.</a>

From the terminal, run the following commands.

```
yarn init
yarn add --dev webpack webpack-dev-server
```
</br>
Create a filename <strong>webpack.config.js</strong> at the root of the project and copy the configuration as below.

```
module.exports = {
  entry:  "./app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  }
}
```
entry : is the app entry point.

__dirname : gives us current folder path.

output - path: is the output folder

output - filename : is the name of the file. In our case, it is bundle.js

</br>Now, in index.html , add the below script tag

```
<script type="text/javascript" src="bundle.js"></script>
```

<br></br>
###How to run webpack?

Although, you could run webpack-dev-server from command line, I prefer to run as a part of package.json. So, in package.json file, under scripts section, copy the below code.

```
"scripts": {
  "start": "webpack --progress --colors",
  "server": "webpack-dev-server --progress --colors  --content-base ./ —-port 3000 "
}
```
–content-base is where html is served from, and ‘./’ represents root folder

–port is which port to use, 3000 in this case

</br>
Back on to your terminal, type

```
yarn run server
```

Webpack-dev-server watches for any file changes and serves bundle.js from the memory.

<b>Note :</b> Webpack-dev-server will <b>NOT</b> generate file in the output folder. It will instead run from the memory.

</br>
Run,

```
yarn start
```
This will start webpack, and generates bundle.js file in the output folder.

Now, go to http://localhost:3000/ from your browser.

To watch for changes, pass –-watch as an argument. Modify package.json as,

```
"scripts": {
  "start": "webpack --progress --colors",
  "watch": "webpack --progress --colors --watch",
  "server": "webpack-dev-server --progress --colors  --content-base ./ —-port 3000 "
}
```

