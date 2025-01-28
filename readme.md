# REVILISE/BOILERPLATE

This is boilerplate for frontend project means static generation based on react & webpack.

Output html files can be used for php applications. You don't need to change source code to make UI elements work different. All of them can be controlled by `data-core-<name>` attribute.

## Requirements 

- nodejs >= 21
- npm >= 10

## Get start

1. Close source repo from github
```shell
git clone https://github.com/Revilise/boilerplate
```

2. Install dependencies
```shell
npm install
```

3. Start project in dev mode
```shell
npm run dev
```

4. Build project for production
```shell
npm run build
```

## Architecture

- `src/` - source frontend code
  - `components/` - ui
    - `ui/` - clear jsx/tsx components
    - `plugin/` - component logic
    - `index.js` - file for ui export
    - `style.pcss` - styles. Webpack collects whole styles with .pcss and .css extension and bundle into one bundle.css. No need import style.pcss into ui files. 
  - `lib/` - common libraries, functions, another logical modules

## Plugins

Plugins allows to bind html and js scripts for some features. For example, you can create swiper of images.

To ways to realize swiper:
1. Create your own solution
2. Use ready solution and integrate it into boilerplate.

By the way you will use `Plugin logic`:
