export default {
  input: 'src/index.ts', // 入口文件路径
  output: {
    file: 'dist/index.js', // 输出文件路径
    format: 'es', // 输出格式（可选：amd, cjs, es, iife, umd）
    name: 'vite-plugin-add-commit-info' // 输出的UMD模块名称
  }
};