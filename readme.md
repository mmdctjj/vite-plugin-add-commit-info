## 🚀 vite-plugin-add-commit-info

自动添加版本信息

auto add version commit info to your `index.html`

### install
```
npm i vite-plugin-add-commit-info -D
```
### use

```js
import { defineConfig } from 'vite';
import addCommitInfo from 'vite-plugin-add-commit-info';

export default defineConfig({
  plugins: [
    addCommitInfo(),
    // ... others
  ]
});
```

### LICENSE
MIT