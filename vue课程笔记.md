### 属性：  
1. props:自定义属性 (子组件中声明，父组件向子组件传递)
2. attrs:原生属性 (例如title)
3. 其他：class、style、ref、key等，无法通过inheritAttrs取消挂载
   
### 事件：
1. 普通事件：例如@click 可用于自定义组件 用 `this.$emit('change',e.target.value')` 等触发父组件方法
2. 修饰符事件：例如@click.stop 一般用于原生html元素 （@click.stop为阻止点击事件生效，使得父元素的点击事件不触发，等效e.stopPropogation）

### 插槽：
```html
<template v-slot:xxx> </template> 
```

父组件调用子组件， `<child>之间的内容无效</child>` 但是子组件child中`<div><slot></slot>/div>`即能得到父组件在子组件之间安插的东西。

### 双向绑定，单向数据流
双向绑定的本质也是单向数据流——通过model的改变去改变view，双向绑定的本质是回调change函数（编译后相同）。在同一组件中，如果v-model已经被占用，可以用`:tempName.sync="data"` 进行双向绑定。