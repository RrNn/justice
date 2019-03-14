### JusticeBot Home Page UI

#### USAGE REQUIREMENTS.

- To run this locally, you must have `Node` and `yarn` installed on your local machine, then,

- Clone this repository.
- `cd` into the `justice` directory.
- Run the command `yarn install`
- You should now see a `node_modules` directory.
- If you add any `css` or `javascript` remember to re-compile.
- The command for compiling is `yarn dev` or you can run `yarn watch` to keep watching for any changes you make automatically and re-compile, without having to run `yarn dev` everytime you change an asset file.
- The output directories for `css` and `js` are `public/css` and `public/js` respectively.
- The `html` that consumes these assests is found in the `public/index.html` file, so basically, if you dont want to add any more `css` or `js` for now, what you need for the current UI status is only the **public** and **images** folders.
- The `css` or `scss` files are found in `src/styles`, ie, this is where the `css/scss` to be compiled is looked for, and compiled to the `public/css` folder.
- The `js` files are in `src`, ie, this is where the js files are looked for and compiled to the `public/js` folder.
- If you add a `.css` or `.scss` file, remember to import it in the `src/styles/index.scss` file as this is like the index/entry of style complilation. If you dont import it there, it wont be compiled.
- Also for the js files you add, remember to import them in the `src/index.js` file as this is the index/entry point of javascript complilation.
