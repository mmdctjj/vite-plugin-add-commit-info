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

### warn

because jsdom@22.1.0, node version >= 16

```js
npm i vite-plugin-add-commit-info
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'jsdom@22.1.0',
npm WARN EBADENGINE   required: { node: '>=16' },
npm WARN EBADENGINE   current: { node: 'v14.21.3', npm: '9.7.2' }
npm WARN EBADENGINE }
```

### LICENSE
MIT