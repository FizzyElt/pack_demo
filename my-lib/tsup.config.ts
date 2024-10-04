import { defineConfig } from "tsup";

export default defineConfig({
	// 有多個 entry 時需要指定多個
	entry: ["src/index.ts"],
	// 把所有檔案做切分
	splitting: true,
	// 要輸出哪些檔案
	format: ["cjs", "esm"],
	// 是否產生 .d.ts 檔案
	dts: true,
});
