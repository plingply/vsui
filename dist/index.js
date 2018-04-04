!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.vsui=e()}(this,function(){"use strict";var t={name:"ui-button",props:{type:{type:String,default:"primary"},size:{type:String,default:"small"}},template:'<button type="button" :class="className" class="ui-button ui-size" @click="handleClick"> <slot></slot> </button>',data:function(){return{className:""}},methods:{handleClick:function(t){this.$emit("click",t)}},created:function(){console.log(this.type.indexOf("text"));var t="ui-"+this.type.split(" ")[0],e=this.type.split(" ")[1]?" ui-"+this.type.split(" ")[1]:"";this.className=t+e+" "+(-1===this.type.indexOf("text")?"ui-"+this.size:"ui-small")},install:function(e){e.component(t.name,t)}},e={name:"$progress",template:'<div class="ui-progress" v-show="show" :style="{backgroundColor:style,width:count+\'%\',opacity:opacity}"></div>',data:function(){return{style:"",color:"",count:0,show:!1,intval:"",opacity:0}},methods:{start:function(t){var e=this;this.color=t||"",this.show=!0,this.count=0,this.opacity=1,clearInterval(this.intval),this.intval=setInterval(function(){e.count++,e.opacity=e.opacity>1?1:e.opacity,e.count>95&&clearInterval(e.intval)},10)},finish:function(){var t=this;this.count=100,this.opacity=.5,setTimeout(function(){t.show=!1,t.opacity=0},200)}},created:function(){this.style="false"==this.color?"":this.color},install:function(t){var o=t.prototype.$progress=new t(e).$mount();document.body.appendChild(o.$el)}},o={name:"ui-pop",template:'<transition name="fade"> <div class="pop" ref="uiPopover" data-popver="uipopover" v-show="show" :style="{width:width+\'px\'}"> <div class="popheader" :class="{popright:pos==\'left\',popleft:pos==\'right\'}"> <span class="pop_close" @click="show = false"><i class="el-icon-close"></i></span> <slot name="header"></slot> </div> <div class="popfooter"> <slot name="footer"></slot> </div> </div> </transition>',props:{width:{type:String,default:400},pref:{type:String,required:!0},positon:{type:String,default:"right"},canshow:{type:Boolean,default:!0}},data:function(){return{show:!1,pos:"left"}},methods:{setPosition:function(t){if(this.$refs.uiPopover){var e=t.getBoundingClientRect(),o=this.$refs.uiPopover.parentNode;"static"===document.defaultView.getComputedStyle(o).position&&(o.style.position="relative");var i=o.getBoundingClientRect(),s=document.documentElement.clientWidth,n=(document.documentElement.clientHeight,this.width),p=(this.$refs.uiPopover.offsetHeight,t.offsetWidth),l=(t.offsetHeight,e.top-i.top+o.scrollTop),a=e.left-i.left+o.scrollLeft;if("right"==this.positon)s-p-a<n?(this.$refs.uiPopover.style.left=a-10-n+"px",this.$refs.uiPopover.style.top=l+"px",this.pos="left"):(this.$refs.uiPopover.style.left=p+a+10+"px",this.$refs.uiPopover.style.top=l+"px",this.pos="right");"left"==this.positon&&(a<n?(this.$refs.uiPopover.style.left=a+p+10+"px",this.$refs.uiPopover.style.top=l+"px",this.pos="right"):(this.$refs.uiPopover.style.left=a-n-10+"px",this.$refs.uiPopover.style.top=l+"px",this.pos="left"))}},addClick:function(){var t=this,e="";document.body.addEventListener("click",function(o){if(t.canshow){var i=[];!function t(e){e&&"BODY"!=e.tagName&&(i.push(e),t(e.parentNode))}(o.target);for(var s=0;s<i.length;s++){if("uipopover"==i[s].getAttribute("data-popver"))return;if(i[s].getAttribute("data-"+t.pref))return i[s]===e?t.show=!t.show:t.show=!0,e=i[s],void t.setPosition(i[s])}t.show=!1}else t.show=!1})}},mounted:function(){this.addClick()},install:function(t){t.component(o.name,o)}},i=[];i.push(t),i.push(e),i.push(o);return{button:t,progress:e,pop:o,install:function(t,e){void 0===e&&(e={}),i.map(function(e){if("$"===e.name[0]){t.prototype[e.name]=e;var o=t.prototype[e.name]=new t(e).$mount();document.body.appendChild(o.$el)}else t.component(e.name,e)})}}});
