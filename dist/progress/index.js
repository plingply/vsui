!function(t,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):t["vscoding-ui"]=o()}(this,function(){"use strict";var t={name:"$progress",template:'<div class="ui-progress" v-show="show" :style="{backgroundColor:color,width:count+\'%\',opacity:opacity}"></div>',data:function(){return{color:"#33C24D",count:0,show:!1,intval:"",opacity:0}},methods:{start:function(t){var o=this;clearInterval(this.intval),this.color=t||"#33C24D",this.show=!0,this.count=0,this.opacity=1,this.intval=setInterval(function(){o.count+=parseInt(5*Math.random()),o.opacity=o.opacity>1?1:o.opacity,o.count>=90&&clearInterval(o.intval)},30)},finish:function(){var t=this;clearInterval(this.intval),this.intval=setInterval(function(){t.count+=2,t.count>100&&(clearInterval(t.intval),t.count=100,setTimeout(function(){t.opacity=0,t.show=!1},300))},30)}},install:function(o){var n=o.prototype.$progress=new o(t).$mount();document.body.appendChild(n.$el)}};return t});
