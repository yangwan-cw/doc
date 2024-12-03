# 大文件上传 & 下载

大文件**上传 & 下载** 需求在项目中非常常见，对用户来说，大文件上传不但可以提高上传效率，而且对服务端来说，大文件上传可以减少服务器的压力。



# 服务端
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::


# 客户端

::: code-group

```java [Config.java]
/**
 * Java 图标
 */
public class Config {
    // ...
}
```

```cpp [Config.cpp]
/**
 * C++ 图标
 */
class Config {
    // ...
};
```

```python [config.py]
/**
 * Python 图标
 */
class Config:
    # ...
    pass
```

```vue [Config.vue]
/**
 * Vue 图标
 */
<template>
  <div>
    <!-- ... -->
  </div>
</template>

<script>
export default {
  // ...
}
</script>
```

```jsx [Config.jsx]
/**
 * React 图标
 */
import React from 'react';

const Config = () => {
    // ...
    return (
        <div>
            {/* ... */}
        </div>
    );
};

export default Config;
```

```html [Config.html]
/**
 * 原生 HTML 图标
 */
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>Config</title>
</head>
<body>
    <!-- ... -->
</body>
</html>
```

:::