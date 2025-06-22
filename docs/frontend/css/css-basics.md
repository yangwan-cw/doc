# 📗 基本 CSS 属性

## font-size 文字大小

`font-size` 属性用于设置文本的字体大小。可以使用像素（px）、相对单位（em、rem）、百分比（%）等方式定义。

### ✅ 基本语法：

::: code-group

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p>hello world</p>
  </body>
</html>
```

```css
p {
  font-size: 32px;
}
```

:::

### 疑问: 不为字体设置大小的时候他为什么会有大小

浏览器的默认字体大小是多少？
大多数现代浏览器（包括 Chrome）默认字体大小为：16px

```css
font-size: 16px;
```

### 如何设置字体的默认大小

#### 🛠 Chrome 设置路径：

设置 → 外观 → 字体大小 → 中（推荐） = 16px

💡 小结：就算你没写字体大小，浏览器也会按自己的“默认规则”来处理，不是真正的“无样式”。

## color 文字颜色

`color` 属性用于设置**文本内容的颜色**，也就是网页上文字显示的颜色。
 
### ✅ 基本语法：

::: code-group

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p>hello world</p>
  </body>
</html>
```

```css
p {
  color: red;
}
```

上面这段代码会将所有 `<p>` 标签中的文字设置为红色。

:::

### color 支持的颜色方式:

颜色名称
css

```
color: blue;
```

十六进制

```
color: #ff0000;  /* 红色 */
color: #333;     /* 深灰 */
```

RGB / RGBA

css

```css
color: rgb(0, 128, 0); /* 绿色 */
color: rgba(255, 0, 0, 0.5); /* 半透明红色 */
```

HSL / HSLA

css

```
color: hsl(200, 100%, 50%);
color: hsla(0, 100%, 50%, 0.3);
```

### 注意
>[!warning]
> color 不仅仅设置文字的颜色,同时还设置文字的 装饰线,边框,外轮廓,这些对应的样式后面的文档会讲到
>
> 装饰线: 给文字加上下划线、删除线等 
>
> 边框: 围绕元素内容区域的边框
>
> 外轮廓: 类似边框，但不占据空间、绘制在元素外侧

## backgroud-color 背景色

用于设置元素背景的颜色，语法和 color 几乎一致。

### ✅ 基本语法：

::: code-group

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p>hello world</p>
  </body>
</html>
```

```css
p {
  background-color: lightgray;
}
```

:::
上面这段代码会将所有 `<p>` 标签中的背景为红色。

### backgroud-color 支持的颜色方式:

颜色名称

```css
backgroud-color: blue;
```

十六进制

```
backgroud-color: #ff0000;  /* 红色 */
backgroud-color: #333;     /* 深灰 */
```

RGB / RGBA

```css
backgroud-color: rgb(0, 128, 0); /* 绿色 */
backgroud-color: rgba(255, 0, 0, 0.5); /* 半透明红色 */
```

HSL / HSLA

```css
backgroud-color: hsl(200, 100%, 50%);
backgroud-color: hsla(0, 100%, 50%, 0.3);
```

## width 宽度
`width` 属性用于设置元素的**内容区域的宽度**。

---

### ✅ 示例：

```css
div {
  width: 300px;
}
```

## height 高度

height 属性用于设置元素的高度。默认情况下，块级元素的高度由内容撑开，但你可以用 height 控制它。

## ✅ 示例：

```css
div {
  height: 200px;
}
```
