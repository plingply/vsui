!function(t,o){"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):t["vscoding-ui"]=o()}(this,function(){"use strict";var t={name:"$progress",template:'<div class="ui-progress" v-show="show" :style="{backgroundColor:style,width:count+\'%\',opacity:opacity}"></div>',data:function(){return{style:"",color:"",count:0,show:!1,intval:"",opacity:0}},methods:{start:function(t){var o=this;clearInterval(this.intval),this.color=t||"",this.show=!0,this.count=0,this.opacity=1,this.intval=setInterval(function(){o.count++,o.opacity=o.opacity>1?1:o.opacity,o.count>=95&&clearInterval(o.intval)},10)},finish:function(){var t=this;console.log(this.count),this.count>=95?(clearInterval(this.intval),this.count=100,setTimeout(function(){t.show=!1,t.opacity=0},100)):this.finish()}},created:function(){this.style="false"==this.color?"":this.color},install:function(o){var i=o.prototype.$progress=new o(t).$mount();document.body.appendChild(i.$el)}};return t});
