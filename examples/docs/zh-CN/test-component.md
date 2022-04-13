## TestComponent lmf测试组件

常用按钮。

### 基础用法

按钮的基础用法。。

:::demo  使用`type`、 `round` 、`plain`和`size`属性来定义按钮样式

```html
<div>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
</div>

<el-row style="margin: 10px;">
  <el-test-component>默认按钮</el-test-component>
  <el-test-component type="primary">主要按钮</el-test-component>
  <el-test-component type="success">成功按钮</el-test-component>
</el-row>

<el-row style="margin: 10px;">
  <el-test-component>默认按钮</el-test-component>
  <el-test-component type="primary">主要按钮</el-test-component>
  <el-test-component type="success">成功按钮</el-test-component>
</el-row>
```
:::

### 按钮类型
默认、主要、成功、警告、失败
:::demo  使用`type`属性来定义按钮类型，使用`plain`属性来定义按钮镂空样式

```html

<el-row style="margin: 10px;">
  <el-test-component>默认按钮</el-test-component>
  <el-test-component type="primary">主要按钮</el-test-component>
  <el-test-component type="success">成功按钮</el-test-component>
  <el-test-component type="info">信息按钮</el-test-component>
  <el-test-component type="warning">警告按钮</el-test-component>
  <el-test-component type="danger">危险按钮</el-test-component>
</el-row>

<el-row style="margin: 10px;">
  <el-test-component plain>默认按钮</el-test-component>
  <el-test-component type="primary" plain>主要按钮</el-test-component>
  <el-test-component type="success" plain>成功按钮</el-test-component>
  <el-test-component type="info" plain>信息按钮</el-test-component>
  <el-test-component type="warning" plain>警告按钮</el-test-component>
  <el-test-component type="danger" plain>危险按钮</el-test-component>
</el-row>

```
:::

### 按钮圆角、圆形图标
默认、主要、成功、警告、信息、危险
:::demo  使用`type`属性来定义按钮类型，使用`round`设置圆角样式，使用`circle`设置圆形按钮，使用`icon`设置图标按钮

```html

<el-row style="margin: 10px;">
  <el-test-component round>默认按钮</el-test-component>
  <el-test-component type="primary" round>主要按钮</el-test-component>
  <el-test-component type="success" round>成功按钮</el-test-component>
  <el-test-component type="info" round>信息按钮</el-test-component>
  <el-test-component type="warning" round>警告按钮</el-test-component>
  <el-test-component type="danger" round>危险按钮</el-test-component>
</el-row>

<el-row style="margin: 10px;">
  <el-test-component icon="el-icon-search" circle></el-test-component>
  <el-test-component type="primary" icon="el-icon-edit" circle></el-test-component>
  <el-test-component type="success" icon="el-icon-check" circle></el-test-component>
  <el-test-component type="info" icon="el-icon-message" circle></el-test-component>
  <el-test-component type="warning" icon="el-icon-star-off" circle></el-test-component>
  <el-test-component type="danger" icon="el-icon-delete" circle></el-test-component>
</el-row>

<el-row style="margin: 10px;">
  <el-test-component icon="el-icon-search" circle plain></el-test-component>
  <el-test-component type="primary" icon="el-icon-edit" circle plain></el-test-component>
  <el-test-component type="success" icon="el-icon-check" circle plain></el-test-component>
  <el-test-component type="info" icon="el-icon-message" circle plain></el-test-component>
  <el-test-component type="warning" icon="el-icon-star-off" circle plain></el-test-component>
  <el-test-component type="danger" icon="el-icon-delete" circle plain></el-test-component>
</el-row>

```
:::