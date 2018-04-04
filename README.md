# vscoding-ui

####安装
> npm install vscoding --save
 现有模块有：{ button, pop, progress }
####用法1: 
#####全局引入
```javascript
import vscoding from 'vscoding'
vue.use(vscoding)
```
####用法2:
#####按需引入
```javascript
import { button, pop, progress } from 'vscoding'
```
####button
```javascript
//type 有primary，success，warning，danger，info默认primary
//szie：mini，smll，large 默认samll
<ui-button type="primary" size="mini" @click="open">按钮</ui-button>

//文字按钮在type中加入text 例如：
<ui-button type="primary text" size="mini" @click="open">按钮</ui-button>
```
####progress
```javascript
/*
progress为全局方法
调用方法:
1.组件内部调用 this.$progress.start() this.$progress.finish()
2.全局调用 Vue.prototype.$progress.start() Vue.prototype.$progress.finish() 
应用场景：
1.路由切换是在全局路由钩子函数中 调用start() 
2.然后在组件create中执行finish()---使用混合
*/

```
####pop
```javascript
<ui-pop :canshow="canshow" pref="popover" width="400" positon="right"></ui-pop>

<ui-button type="primary text" data-popover="popover" size="mini" @click="canshow = true">打开弹框</ui-button>
/*
使用方式
	1.width:字符串形式数字，不传默认400
	2.pref:必须传 定位绑定者的位置
	3.position:目前只支持left right,不传默认right
	4.通过使用 data-popover属性的值与pref的相同 建立弹窗与点击源的绑定关系
  	5.canshow 默认true 控制是否显示
*/
```

