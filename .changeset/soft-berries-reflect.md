---
"eslint-plugin-sonar": patch
---

feat: support flat configs:

```js
// eslint.config.js

import * as sonar from 'eslint-plugin-sonar'

export default [
  ...sonar.configs.flatRecommended,
]
```
