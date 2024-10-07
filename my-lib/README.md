# 如何包一個模組

- typescript

## 簡化一些麻煩事的工具

在一堆輪子的情況下，已經沒辦法理解 bundle tool 到底該涵蓋哪些功能 ，每個工具目標不同，功能可能有部份重疊，或是基於什麼再製作一個版本，總之挑一個符合需求且順眼的就好了🫠，這次使用 tsup。

這裡 gulp 目的比較明確單一，主要用於建立流程，任何工具由 plugin 完成

- *[tsup](https://tsup.egoist.dev/)
- [swc](https://swc.rs/)
- [rollup](https://rollupjs.org/)
- [esbuild](https://esbuild.github.io/)
- [gulp](https://gulpjs.com/)
- [vite](https://vite.dev/)
- [rspack](https://rspack.dev/index)
- [webpack](https://webpack.js.org/)
- [parcel](https://parceljs.org/)
- [rolldown](https://rolldown.rs/) (vite 之後的新輪子)
- ...

## 不想一直上傳做測試

`pnpm pack` 產生一個壓縮檔，並在另一個專案中下載時給予檔案路徑

## IDE 沒有型別提示

package.json `exports` 要告訴 IDE 這些檔案引用來源

- `require` : common js 專案下的引用路徑
- `import` : ES module 專案下的引用路徑

### package json exports

https://nodejs.org/api/packages.html#determining-package-manager


https://nodejs.org/api/packages.html#conditional-exports

