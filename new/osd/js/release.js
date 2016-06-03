/*! stb-app: v0.0.2 (webpack: v1.13.0) */
!function(t){function e(n){if(i[n])return i[n].exports;var s=i[n]={exports:{},id:n,loaded:!1};return t[n].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){"use strict";var n=i(5),s=i(4),o=i(2),a=i(14),d=new a({value:gSTB.GetVolume(),max:100,min:0}),r=window.parent.document.createElement("div"),c=window.parent.document.createElement("div"),h=window.parent.document.createElement("div"),l=window.parent.document.createElement("div"),u=window.parent.document.createElement("div"),p=5e3,v=-1,m=-1,f=!!gSTB.GetMute();n.addListeners({load:function(){var t,e=window.core.plugins.ufs.loadSync();try{e=JSON.parse(e)}catch(a){e={}}t=location.protocol+"//"+location.host+location.pathname.replace("index.html",""),n.visible=!1,s.init([i(6)]),s.navigate("pageMain"),n.muteWidget=window.core.widget({visible:!1,events:{show:function(){n.volumeWidget.hide()}}}),n.muteWidget.$node.style.display="none",n.muteWidget.$node.className+=" osdPanel",n.volumeWidget=window.core.widget({visible:!1,events:{show:function(){n.muteWidget.hide()}}}),n.volumeWidget.$node.style.display="none",n.volumeWidget.$node.className+=" osdPanel",n.notifyWidget=window.core.widget({visible:!1,events:{show:function(){}}}),n.notifyWidget.$node.style.display="none",n.muteWidget.$node.innerText="B";var y=new XMLHttpRequest;y.open("GET",n.linkThemeCSS+n.data.metrics.height+".css"),y.onload=function(){var t;t=window.parent.document.createElement("style"),t.innerHTML=this.responseText.replace('src: url("icons.ttf")','src: url("'+n.linkThemeCSS+'icons.ttf")'),window.parent.document.head.appendChild(t)},y.send(null);var w=new XMLHttpRequest;w.open("GET",t+n.linkCSS),w.onload=function(){var t;t=window.parent.document.createElement("style"),t.innerHTML=this.responseText.replace(/#muteWidget/g,"."+n.muteWidget.className).replace(/#volumeWidget/g,"."+n.volumeWidget.className).replace(/#notifyWidget/g,"."+n.notifyWidget.className),window.parent.document.head.appendChild(t),n.muteWidget.$node.style.display="",n.volumeWidget.$node.style.display="",n.notifyWidget.$node.style.display=""},w.send(null),n.volumeWidget.$body.appendChild(r),r.className="icon volume",n.volumeWidget.children.push(d),d.parent=n.volumeWidget,d.$node&&null===d.$node.parentNode&&n.volumeWidget.$body.appendChild(d.$node),d.$node.className="component progressBar",d.$value.className+=" osdFocusItem",c.className="pointer osdFocusItem",d.$node.appendChild(c),n.volumeWidget.$node.appendChild(h),h.className="textValue",h.innerText=d.value,d.addListener("change",function(t){h.innerText=t.curr,gSTB.SetVolume(t.curr)}),l.className="icon info",u.className="title",n.notifyWidget.$icon=n.notifyWidget.$body.appendChild(l),n.notifyWidget.$title=n.notifyWidget.$body.appendChild(u),n.volumeWidget.volumeChange=function(t){f&&n.volumeWidget.toggleMute(),100>=t&&t>=0&&(d.set(t),e.volume=t)},n.volumeWidget.volumeUp=function(){f&&n.volumeWidget.toggleMute(),n.volumeWidget.show(),d.value<100&&n.volumeWidget.volumeChange(d.value+5),clearTimeout(v),v=setTimeout(function(){n.volumeWidget.hide()},p)},n.volumeWidget.volumeDown=function(){f&&n.volumeWidget.toggleMute(),n.volumeWidget.show(),d.value>0&&n.volumeWidget.volumeChange(d.value-5),clearTimeout(v),v=setTimeout(function(){n.volumeWidget.hide()},p)},n.volumeWidget.toggleMute=function(t){t!==f&&(n.muteWidget.$node.style.display="",f?(n.muteWidget.hide(),gSTB.SetMute(0)):(n.muteWidget.show(),gSTB.SetMute(1)),e.mute=f=!f)},document.body.style.background="rgba(24, 24, 24, 0.7)",document.body.style.overflow="hidden",n.notifyWidget.init=function(t){var e=t.buttons&&t.buttons.length>0?" control":"";t.timeout=t.timeout||5e3,t.type=t.type||"",n.notifyWidget.$body.innerHTML="",n.notifyWidget.$body.appendChild(n.notifyWidget.$icon),n.notifyWidget.$body.appendChild(n.notifyWidget.$title),n.notifyWidget.$icon.className="icon "+t.icon,n.notifyWidget.$title.innerHTML=t.title,n.notifyWidget.$node.className=n.notifyWidget.className+" "+t.type+e,n.notifyWidget.visible=!0,t.buttons&&t.buttons.length>0?(n.notifyWidget.buttons=[],t.buttons.forEach(function(t,e){var i=window.parent.document.createElement("div");i.className="button",0===e&&(n.notifyWidget.currentButtonIndex=0,i.className="button focus"),i.innerText=t.value,i.onclick=t.click,n.notifyWidget.buttons.push(i),n.notifyWidget.$body.appendChild(i)}),setTimeout(function(){n.notifyWidget.show(),window.core.call("show"),window.core.call("focus")},300)):(n.notifyWidget.buttons=!1,clearTimeout(m),m=setTimeout(function(){n.notifyWidget.hide()},t.timeout))},window.parent.extendCorePrototype("notify",n.notifyWidget.init),n.addListener("keydown",function(t){n.notifyWidget.visible&&n.notifyWidget.buttons&&(t.code===o.right?(n.notifyWidget.buttons[n.notifyWidget.currentButtonIndex].className="button",++n.notifyWidget.currentButtonIndex,n.notifyWidget.currentButtonIndex===n.notifyWidget.buttons.length&&(n.notifyWidget.currentButtonIndex=0),n.notifyWidget.buttons[n.notifyWidget.currentButtonIndex].className="button focus"):t.code===o.left?(n.notifyWidget.buttons[n.notifyWidget.currentButtonIndex].className="button",--n.notifyWidget.currentButtonIndex,n.notifyWidget.currentButtonIndex<0&&(n.notifyWidget.currentButtonIndex=n.notifyWidget.buttons.length-1),n.notifyWidget.buttons[n.notifyWidget.currentButtonIndex].className="button focus"):t.code===o.ok&&(n.notifyWidget.buttons[n.notifyWidget.currentButtonIndex].onclick(),n.notifyWidget.hide(),n.notifyWidget.visible=!1,n.notifyWidget.buttons=!1,window.core.call("hide"),window.core.call("blur")))}),e.mute&&n.volumeWidget.toggleMute(),e.volume&&n.volumeWidget.volumeChange(e.volume),window.addEventListener("unload",function(){window.core.plugins.ufs.saveSync(JSON.stringify(e))})}})},function(t,e,i){"use strict";function n(t){var e,i=this;if(t=t||{},this.visible=!0,this.focusable=!0,this.$node=null,this.$body=null,this.parent=null,this.children=[],this.propagate=!!t.propagate,s.call(this,t.data),this.$node=t.$node||document.createElement("div"),this.$body=t.$body||this.$node,this.$node.className+=" component "+(t.className||""),this.id=t.id||this.$node.id||"cid"+a++,t.parent&&t.parent.add(this),t.visible===!1&&this.hide(),t.focusable===!1&&(this.focusable=!1),this.defaultEvents){t.events=t.events||{};for(e in this.defaultEvents)t.events[e]=t.events[e]||this.defaultEvents[e]}t.events&&this.addListeners(t.events),t.children&&this.add.apply(this,t.children),this.$node.addEventListener("click",function(t){0===t.button&&(i.focus(),i.events.click&&i.emit("click",{event:t})),t.stopPropagation()})}var s=i(3),o=i(4),a=0;n.prototype=Object.create(s.prototype),n.prototype.constructor=n,n.prototype.defaultEvents=null,n.prototype.add=function(t){var e;for(e=0;e<arguments.length;e++)t=arguments[e],this.children.push(t),t.parent=this,t.$node&&null===t.$node.parentNode&&this.$body.appendChild(t.$node),this.events.add&&this.emit("add",{item:t})},n.prototype.remove=function(){this.parent&&(o.current.activeComponent===this&&(this.blur(),this.parent.focus()),this.parent.children.splice(this.parent.children.indexOf(this),1)),this.children.forEach(function(t){t.remove()}),this.removeAllListeners(),this.$node.parentNode.removeChild(this.$node),this.events.remove&&this.emit("remove")},n.prototype.focus=function(t){var e=o.current,i=e.activeComponent;return this.focusable&&this!==i?(i&&i.blur(),e.activeComponent=i=this,i.$node.classList.add("focus"),i.events.focus&&i.emit("focus",t),!0):!1},n.prototype.blur=function(){var t=o.current,e=t.activeComponent;return this.$node.classList.remove("focus"),this===e?(t.activeComponent=null,this.events.blur&&this.emit("blur"),!0):!1},n.prototype.show=function(t){return this.visible?!0:(this.$node.classList.remove("hidden"),this.visible=!0,this.events.show&&this.emit("show",t),!0)},n.prototype.hide=function(){return this.visible?(this.$node.classList.add("hidden"),this.visible=!1,this.events.hide&&this.emit("hide"),!0):!0},t.exports=n},function(t,e,i){"use strict";t.exports={back:8,"delete":46,channelPrev:1009,channelNext:9,ok:13,exit:27,up:38,down:40,left:37,right:39,pageUp:33,pageDown:34,end:35,home:36,volumeUp:107,volumeDown:109,f1:112,f2:113,f3:114,f4:115,refresh:116,frame:117,phone:119,set:120,tv:121,menu:122,web:123,mic:2032,rewind:2066,forward:2070,app:2076,usbMounted:2080,usbUnmounted:2081,playPause:2082,stop:2083,power:2085,record:2087,info:2089,mute:2192,clock:2032,audio:2071,keyboard:2076}},function(t,e,i){"use strict";function n(){this.events={}}n.prototype={addListener:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},once:function(t,e){var i=this;this.events[t]=this.events[t]||[],this.events[t].push(function n(){e.apply(this,arguments),i.removeListener(t,n)})},addListeners:function(t){var e;if("object"==typeof t)for(e in t)t.hasOwnProperty(e)&&this.addListener(e,t[e])},removeListener:function(t,e){this.events[t]&&(this.events[t]=this.events[t].filter(function(t){return t!==e}),0===this.events[t].length&&(this.events[t]=void 0))},removeAllListeners:function(t){0===arguments.length?this.events={}:t&&(this.events[t]=void 0)},emit:function(t,e,i){var n,s=this.events[t];if(s)for(n=0;n<s.length;n++)s[n].apply(this,Array.prototype.slice.call(arguments,1))}},n.prototype.constructor=n,t.exports=n},function(t,e,i){"use strict";var n,s=i(3);n=new s,n.current=null,n.history=[],n.pages=[],n.ids={},n.init=function(t){var e,i,n;if(t){for(this.pages=[],this.pages=t,e=0,i=t.length;i>e;e++)n=t[e],this.ids[n.id]=n,n.active&&(this.current=n);return this.events.init&&this.emit("init",{pages:t}),!0}return!1},n.parse=function(t){var e={name:"",data:[]};return e.data=t.split("/").map(decodeURIComponent),e.name=e.data.shift().slice(1),e},n.stringify=function(t,e){return e=Array.isArray(e)?e:[],t=encodeURIComponent(t),e=e.map(encodeURIComponent),e.unshift(t),e.join("/")},n.show=function(t,e){return t&&!t.active?(t.$node.classList.add("active"),t.active=!0,this.current=t,t.events.show&&t.emit("show",{page:t,data:e}),!0):!1},n.hide=function(t){return t&&t.active?(t.$node.classList.remove("active"),t.active=!1,this.current=null,t.events.hide&&t.emit("hide",{page:t}),!0):!1},n.navigate=function(t,e){var i=this.current,n=this.ids[t];return n&&!n.active?(location.hash=this.stringify(t,e),this.hide(this.current),this.show(n,e),this.events.navigate&&this.emit("navigate",{from:i,to:n}),this.history.push(n),!0):!1},n.back=function(){var t,e;return this.history.length>1&&(t=this.history.pop(),e=this.history[this.history.length-1],e&&!e.active)?(location.hash=e.id,this.hide(this.current),this.show(e),this.events.navigate&&this.emit("navigate",{from:t,to:e}),!0):!1},t.exports=n},function(t,e,i){"use strict";var n,s,o=i(7),a=i(4),d=i(2),r=i(15),c={};i(8),window.core=window.parent.getCoreInstanse(window),window.core.once("load",function(){n.data.time.load&&n.defaultEvents.load({type:"load"})}),window.localStorage=window.parent.localStorage||window.parent.stbStorage,window.parent&&window.parent.gSTB&&(window.dvbManager=window.parent.dvbManager,window.epgManager=window.parent.epgManager,window.gSTB=window.parent.gSTB,window.pvrManager=window.parent.pvrManager,window.stbDownloadManager=window.parent.stbDownloadManager,window.stbStorage=window.parent.stbStorage,window.stbUpdate=window.parent.stbUpdate,window.stbUPnP=window.parent.stbUPnP,window.stbWebWindow=window.parent.stbWebWindow,window.stbWindowMgr=window.parent.stbWindowMgr,window.timeShift=window.parent.timeShift),n=new o({debug:!1,host:!0,screen:null,time:{init:+new Date,load:0,done:0}}),n.setScreen=function(t){return t?(t.availHeight=t.height-(t.availTop+t.availBottom),t.availWidth=t.width-(t.availLeft+t.availRight),window.moveTo(0,0),window.resizeTo(t.width,t.height),n.linkThemeCSS=window.core.theme.path,n.linkCSS="css/release."+t.height+".css",this.data.metrics=t,!0):!1},n.EVENT_END_OF_FILE=1,n.EVENT_GET_MEDIA_INFO=2,n.EVENT_PLAYBACK_BEGIN=4,n.EVENT_CONTENT_ERROR=5,n.EVENT_DUAL_MONO_DETECT=6,n.EVENT_INFO_GET=7,n.EVENT_SUBTITLE_LOAD_ERROR=8,n.EVENT_SUBTITLE_FIND=9,n.EVENT_HDMI_CONNECT=32,n.EVENT_HDMI_DISCONNECT=33,n.EVENT_RECORD_FINISH_SUCCESSFULL=34,n.EVENT_RECORD_FINISH_ERROR=35,n.EVENT_DVB_SCANING=40,n.EVENT_DVB_FOUND=41,n.EVENT_DVB_CHANELL_EPG_UPDATE=42,n.EVENT_DVB_ANTENNA_OFF=43,n.setScreen(r[screen.height]||r[720]);for(s in d)"volumeUp"!==s&&"volumeDown"!==s&&(c[d[s]]=!0);n.defaultEvents={load:function(t){new XMLHttpRequest;n.data.time.load=t.timeStamp,window.core.ready&&(n.events[t.type]&&n.emit(t.type,t),a.pages.forEach(function(e){e.events[t.type]&&e.emit(t.type,t)}),n.data.time.done=+new Date,n.events.done&&n.emit("done",t))},unload:function(t){n.events[t.type]&&n.emit(t.type,t),a.pages.forEach(function(e){e.events[t.type]&&e.emit(t.type,t)})},error:function(t){},keydown:function(t){var e,i=a.current,s={keyCode:t.keyCode,stop:t.stop,shiftKey:t.shiftKey,altKey:t.altKey,type:t.type,"native":t};0!==s.keyCode&&(s.code=s.keyCode,s.shiftKey&&(s.code+=1e3),s.altKey&&(s.code+=2e3),e=i.activeComponent,e&&e!==i&&(e.events[s.type]&&e.emit(s.type,s),!s.stop&&e.propagate&&e.parent&&e.parent.events[s.type]&&e.parent.emit(s.type,s)),s.stop||(i.events[s.type]&&i.emit(s.type,s),s.stop||n.events[s.type]&&n.emit(s.type,s)),n.data.host&&c[s.code]&&t.preventDefault())},keypress:function(t){var e=a.current;e.activeComponent&&e.activeComponent!==e&&e.activeComponent.events[t.type]&&e.activeComponent.emit(t.type,t)},click:function(t){},contextmenu:function(t){t.preventDefault()},mousewheel:function(t){var e=a.current;e.activeComponent&&e.activeComponent!==e&&e.activeComponent.events[t.type]&&e.activeComponent.emit(t.type,t),t.stop||e.events[t.type]&&e.emit(t.type,t)}};for(s in n.defaultEvents)window.addEventListener(s,n.defaultEvents[s]);n.show=function(){this.events.show&&this.emit("show"),window.core.call("app:ready")},n.exit=function(t){var e,s=i(12),o=i(10),r=a.current.activeComponent;a.current.add(e=new s({title:gettext("Exit"),events:{show:function(){this.children[0].focus()},hide:function(){r.focus()}},children:[new o({size:2,focusIndex:0,data:[{items:[{value:gettext("Exit")}],click:function(){return"function"==typeof t&&t(!0)?(e.hide(),void e.remove()):(n.events.exit&&n.emit("exit"),e.hide(),e.remove(),void core.call("exit"))}},{items:[{value:gettext("Cancel")}],click:function(){"function"==typeof t&&t(!1),e.hide(),e.remove()}}],events:{keydown:function(i){o.prototype.defaultEvents.keydown.call(this,i),i.code===d.back&&(i.stop=!0,"function"==typeof t&&t(!1),e.hide(),e.remove())}}})]})),e.show(),e.focus()},window.stbEvent={},window.stbEvent.onEvent=function(t,e){if(Array.prototype.forEach.call(window.frames,function(i){i.stbEvent&&i.stbEvent.onEvent&&i.stbEvent.onEvent(t,e)}),n.events.media){if(e)try{e=JSON.parse(e)}catch(i){}n.emit("media",{code:parseInt(t,10),info:e})}},window.stbEvent.onBroadcastMessage=function(t,e,i){Array.prototype.forEach.call(window.frames,function(n){n.stbEvent&&n.stbEvent.onBroadcastMessage&&n.stbEvent.onBroadcastMessage(t,e,i)}),n.events.message&&n.emit("message",{broadcast:!0,windowId:t,message:e,data:i})},window.stbEvent.onMessage=function(t,e,i){Array.prototype.forEach.call(window.frames,function(n){n.stbEvent&&n.stbEvent.onMessage&&n.stbEvent.onMessage(t,e,i)}),n.events.message&&n.emit("message",{broadcast:!1,windowId:t,message:e,data:i})},window.stbEvent.onMount=function(t){Array.prototype.forEach.call(window.frames,function(e){e.stbEvent&&e.stbEvent.onMount&&e.stbEvent.onMount(t)}),n.events["device:mount"]&&n.emit("device:mount",{state:t})},window.stbEvent.onMediaAvailable=function(t,e){Array.prototype.forEach.call(window.frames,function(i){i.stbEvent&&i.stbEvent.onMediaAvailable&&i.stbEvent.onMediaAvailable(t,e)}),n.events["media:available"]&&n.emit("media:available",{mime:t,url:e})},window.stbEvent.onNetworkStateChange=function(t){n.events["internet:state"]&&n.emit("internet:state",{state:t})},window.stbEvent.onWebBrowserProgress=function(t){Array.prototype.forEach.call(window.frames,function(e){e.stbEvent&&e.stbEvent.onWebBrowserProgress&&e.stbEvent.onWebBrowserProgress(t)}),n.events["browser:progress"]&&n.emit("browser:progress",{progress:t})},window.stbEvent.onWindowActivated=function(){Array.prototype.forEach.call(window.frames,function(t){t.stbEvent&&t.stbEvent.onWindowActivated&&t.stbEvent.onWindowActivated()}),n.events["window:focus"]&&n.emit("window:focus")},window.gSTB&&gSTB.SetNativeStringMode&&gSTB.SetNativeStringMode(!0),t.exports=n},function(t,e,i){"use strict";var n=i(5),s=i(2),o=i(13),a=new o({$node:window.pageMain});core.addListener("hide",function(){n.visible=!1,n.notifyWidget.hide()}),core.addListener("intent",function(t,e){"volume"===t.action&&("undefined"!=typeof t.data.mute?(n.volumeWidget.toggleMute(t.data.mute),e(!1,{})):"undefined"!=typeof t.data.volume&&n.volumeWidget.volumeChange(t.data.volume))}),window.core.addListener("keydown:"+s.volumeUp,function(){n.volumeWidget.volumeUp()}),window.core.addListener("keydown:"+s.volumeDown,function(){n.volumeWidget.volumeDown()}),window.core.addListener("keydown:192",function(t){t.altKey&&n.volumeWidget.toggleMute()}),t.exports=a},function(t,e,i){"use strict";function n(t){s.call(this),this.data=t||{}}var s=i(3);n.prototype=Object.create(s.prototype),n.prototype.constructor=n,n.prototype.idName="id",n.prototype.clear=function(){var t=this.data;return Object.keys(t).length>0?(this.data={},this.events.clear&&this.emit("clear",{data:t}),!0):!1},n.prototype.init=function(t){return t?(this.clear(),this.data=t,this.events.init&&this.emit("init",{data:t}),!0):!1},n.prototype.has=function(t){return this.data.hasOwnProperty(t)},n.prototype.get=function(t){return this.data[t]},n.prototype.set=function(t,e){var i=t in this.data,n={name:t,curr:e};return i?(n.prev=this.data[t],e!==n.prev?(this.data[t]=e,this.events.change&&this.emit("change",n),!0):!1):(this.data[t]=e,this.events.change&&this.emit("change",n),!0)},n.prototype.unset=function(t){var e,i=t in this.data;return i?(e={name:t,prev:this.data[t]},delete this.data[t],this.events.change&&this.emit("change",e),!0):!1},t.exports=n},function(t,e){"use strict";if(!("classList"in document.documentElement)){var i=Array.prototype,n=i.indexOf,s=i.slice,o=i.push,a=i.splice,d=i.join;window.DOMTokenList=function(t){if(this._element=t,t.className!==this._classCache){if(this._classCache=t.className,!this._classCache)return;var e,i=this._classCache.replace(/^\s+|\s+$/g,"").split(/\s+/);for(e=0;e<i.length;e++)o.call(this,i[e])}},window.DOMTokenList.prototype={add:function(t){this.contains(t)||(o.call(this,t),this._element.className=s.call(this,0).join(" "))},contains:function(t){return-1!==n.call(this,t)},item:function(t){return this[t]||null},remove:function(t){var e=n.call(this,t);-1!==e&&(a.call(this,e,1),this._element.className=s.call(this,0).join(" "))},toString:function(){return d.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},Object.defineProperty(Element.prototype,"classList",{get:function(){return new window.DOMTokenList(this)}})}},function(t,e,i){"use strict";function n(t){t=t||{},this.focusIndex=0,t.className="layout "+(t.className||""),this.data=[],o.call(this,t),this.init(t),this.addListener("keydown",function(t){switch(t.code){case a.right:this.children.length&&this.focusIndex<this.children.length-1&&this.children[++this.focusIndex].focus();break;case a.left:this.children.length&&this.focusIndex>0&&this.children[--this.focusIndex].focus();break;case a.back:this.parent.focus(),this.parent&&this.$parentItem&&this.parent.focusItem(this.$parentItem)}})}function s(t){var e,i;for(e=0;e<t.length;e++)i=t[e],"object"!=typeof i?t[e]={value:t[e],wrap:!0}:i instanceof o||i instanceof HTMLElement?t[e]={value:i,wrap:!1}:t[e].wrap=!0;return t}var o=i(1),a=i(2);n.prototype=Object.create(o.prototype),n.prototype.constructor=n,n.prototype.init=function(t){for(var e,i,n,a=this,d=s(t.data);this.$node.firstChild;)this.$node.removeChild(this.$node.firstChild);for(this.data=d,n=0;n<d.length;n++)e=d[n],"string"==typeof e.value?(i=document.createElement("div"),i.textContent=e.value,e.className&&(i.className=e.className),this.$node.appendChild(i)):e.value instanceof HTMLElement?e.wrap?(i=document.createElement("div"),e.className&&(i.className=e.className),i.appendChild(e.value),this.$node.appendChild(i)):this.$node.appendChild(e.value):e.value instanceof o&&(e.value.propagate=!0,e.value.index=this.children.length,e.value.addListener("click",function(){a.focusIndex=this.index}),e.wrap?(i=document.createElement("div"),e.className&&(i.className=e.className),i.appendChild(e.value.$node),this.$node.appendChild(i),this.children.push(e.value),e.value.parent=this):this.add(e.value))},t.exports=n},function(t,e,i){"use strict";function n(t){var e,i=this;t=t||{},this.handlers={},this.$noData=null,t.className="layoutList "+(t.className||""),t.propagate=t.propagate||!0,this.fixedData=t.fixedData||!1,t.$body=document.createElement("div"),t.$body.className="body",this.$noData=document.createElement("div"),this.$noData.className="noData hidden",s.call(this,t),this.$node.appendChild(this.$body),t.noData&&(t.noData instanceof Element?this.$noData.appendChild(t.noData):"string"==typeof t.noData&&(e=document.createElement("div"),e.innerText=t.noData,this.$noData.appendChild(e)),this.$node.appendChild(this.$noData)),this.addListener("click:item",function(t){t.$item.layout.children.length&&!t.inner&&t.$item.layout.children[t.$item.layout.focusIndex].focus(),t.inner&&(i.focus(),i.focusItem(t.$item)),i.handlers[t.$item.index]&&i.handlers[t.$item.index](t.$item)})}var s=i(11),o=i(9);n.prototype=Object.create(s.prototype),n.prototype.constructor=n,n.prototype.renderItemDefault=function(t,e){var i,n;if(t.ready&&this.fixedData&&!t.innerHTML.length)for(n=0;n<e.items.length;n++)"string"==typeof e.items[n].value&&(t.layout.$node.childNodes[n].innerText=e.items[n].value,t.layout.$node.childNodes[n].className=e.items[n].className);else{for(;t.firstChild;)t.removeChild(t.firstChild);i=new o({focusable:!1,data:e.items}),t.appendChild(i.$node),t.layout=i,i.parent=this,i.$parentItem=t,i.addListener("click",function(){this.parent.emit("click:item",{$item:t,inner:!0})}),e.click&&(this.handlers[t.index]=e.click),t.ready=!0}t.value=e.value||{}},n.prototype.setData=function(t){s.prototype.setData.call(this,t),t.data&&t.data.length?this.$noData.classList.add("hidden"):this.$noData.classList.remove("hidden")},n.prototype.init=function(t){s.prototype.init.call(this,t),t.data&&t.data.length?this.$noData.classList.add("hidden"):this.$noData.classList.remove("hidden")},n.prototype.renderItem=n.prototype.renderItemDefault,t.exports=n},function(t,e,i){"use strict";function n(t){t=t||{},this.$focusItem=null,this.viewIndex=null,this.data=[],this.type=this.TYPE_VERTICAL,this.size=5,this.cycle=!1,this.scroll=null,t.type&&(this.type=t.type),this.provider=null,t.className="list "+(t.className||""),this.type===this.TYPE_HORIZONTAL&&(t.className+=" horizontal"),o.call(this,t),this.init(t)}function s(t){var e,i;for(e=0;e<t.length;e++)i=t[e],"object"!=typeof i&&(i=t[e]={value:t[e]});return t}var o=i(1),a=i(2);n.prototype=Object.create(o.prototype),n.prototype.constructor=n,n.prototype.TYPE_VERTICAL=1,n.prototype.TYPE_HORIZONTAL=2,n.prototype.renderItemDefault=function(t,e){t.innerText=e.value},n.prototype.renderItem=n.prototype.renderItemDefault,n.prototype.defaultEvents={mousewheel:function(t){this.type===this.TYPE_VERTICAL&&t.wheelDeltaY&&this.move(t.wheelDeltaY>0?a.up:a.down),this.type===this.TYPE_HORIZONTAL&&t.wheelDeltaX&&this.move(t.wheelDeltaX>0?a.left:a.right)},keydown:function(t){switch(t.code){case a.up:case a.down:case a.right:case a.left:case a.pageUp:case a.pageDown:case a.home:case a.end:this.move(t.code);break;case a.ok:this.events["click:item"]&&this.emit("click:item",{$item:this.$focusItem,event:t})}}},n.prototype.init=function(t){var e,i,n=this,s=this.$body.children.length,o=function(t){this.data&&(n.focusItem(this),n.events["click:item"]&&n.emit("click:item",{$item:this,event:t}))};if(void 0!==t.cycle&&(this.cycle=t.cycle),t.scroll&&(this.scroll=t.scroll),t.provider&&(this.provider=t.provider),t.render&&(this.renderItem=t.render),t.size&&(this.size=t.size),this.size!==s)for(s>0&&(this.$body.innerText=null),i=0;i<this.size;i++)e=document.createElement("div"),e.index=i,e.className="item",e.addEventListener("click",o),this.$body.appendChild(e);void 0!==t.viewIndex,this.viewIndex=null,this.provider?this.provider.get(null,function(e,i){e?n.events["data:error"]&&n.emit("data:error",e):(i&&(t.data=i,n.setData(t)),n.events["data:get"]&&n.emit("data:get"))}):t.data&&this.setData(t)},n.prototype.setData=function(t){t.data&&(this.data=s(t.data)),this.viewIndex=null,this.$focusItem&&this.blurItem(this.$focusItem),void 0!==t.focusIndex&&this.data.length?this.focusIndex(t.focusIndex):this.renderView(t.viewIndex||0)},n.prototype.renderView=function(t){var e,i,n,s,o;if(this.viewIndex!==t){for(s=this.viewIndex,this.viewIndex=o=t,i=0;i<this.size;i++)e=this.$body.children[i],n=this.data[t],n?(e.data=n,e.index=t,this.renderItem(e,n),n.mark?e.classList.add("mark"):e.classList.remove("mark")):(e.data=e.index=void 0,e.innerHTML="&nbsp;",e.ready=!1),t++;return this.events["move:view"]&&this.emit("move:view",{prevIndex:s,currIndex:o}),this.events["select:item"]&&this.emit("select:item",{$item:e}),this.scroll&&this.scroll.scrollTo(this.viewIndex),!0}return!1},n.prototype.move=function(t){var e=this,i=!1;if(this.data.length)switch(t){case a.left:if(this.type!==this.TYPE_HORIZONTAL)break;i=!0;case a.up:(i||this.type===this.TYPE_VERTICAL)&&(this.$focusItem&&this.$focusItem.index>0?this.$focusItem===this.$body.firstChild?this.renderView(this.viewIndex-1):this.focusItem(this.$focusItem.previousSibling):this.provider?this.provider.get(t,function(t,i){t?e.events["data:error"]&&e.emit("data:error",t):i&&e.setData({data:i,focusIndex:e.$focusItem.index})}):(this.cycle&&this.move(a.end),this.events.overflow&&this.emit("overflow",{direction:t,cycle:this.cycle})));break;case a.right:if(this.type!==this.TYPE_HORIZONTAL)break;i=!0;case a.down:(i||this.type===this.TYPE_VERTICAL)&&(this.$focusItem&&this.$focusItem.index<this.data.length-1?this.$focusItem===this.$body.lastChild?this.renderView(this.viewIndex+1):this.focusItem(this.$focusItem.nextSibling):this.provider?this.provider.get(t,function(t,i){t?e.events["data:error"]&&e.emit("data:error",t):i&&e.setData({data:i,focusIndex:e.$focusItem.index})}):(this.cycle&&this.move(a.home),this.events.overflow&&this.emit("overflow",{direction:t,cycle:this.cycle})));break;case a.pageUp:if(this.provider)return void this.provider.get(t,function(t,i){t?e.events["data:error"]&&e.emit("data:error",t):i&&e.setData({data:i,focusIndex:0})});this.viewIndex<this.size?this.renderView(0):this.renderView(this.viewIndex-this.size+1),this.focusItem(this.$body.firstChild);break;case a.pageUp:if(this.provider){this.provider.get(t,function(t,i){t?e.events["data:error"]&&e.emit("data:error",t):i&&e.setData({data:i,focusIndex:0})});break}this.viewIndex<this.size?this.renderView(0):this.renderView(this.viewIndex-this.size+1),this.focusItem(this.$body.firstChild);break;case a.pageDown:if(this.provider){this.provider.get(t,function(t,i){t?e.events["data:error"]&&e.emit("data:error",t):i&&e.setData({data:i,focusIndex:i.length<e.size?i.length-1:e.size-1})});break}this.data.length>this.size?(this.viewIndex>this.data.length-2*this.size?this.renderView(this.data.length-this.size):this.renderView(this.viewIndex+this.size-1),this.focusItem(this.$body.lastChild)):this.focusItem(this.$body.children[this.data.length-1]);break;case a.home:if(this.provider){this.provider.get(t,function(t,i){t?e.events["data:error"]&&e.emit("data:error",t):i&&e.setData({data:i,focusIndex:0})});break}this.renderView(0),this.focusItem(this.$body.firstChild);break;case a.end:if(this.provider){this.provider.get(t,function(t,i){t?e.events["data:error"]&&e.emit("data:error",t):i&&e.setData({data:i,focusIndex:i.length<e.size?i.length-1:e.size-1})});break}this.data.length>this.size?(this.renderView(this.data.length-this.size),this.focusItem(this.$body.lastChild)):this.focusItem(this.$body.children[this.data.length-1])}},n.prototype.focusItem=function(t){var e=this.$focusItem;return t&&e!==t?(null!==e&&(e.classList.remove("focus"),this.events["blur:item"]&&this.emit("blur:item",{$item:e})),this.$focusItem=t,this.$focusItem.data=this.data[this.$focusItem.index],t.classList.add("focus"),this.events["focus:item"]&&this.emit("focus:item",{$prev:e,$curr:t}),this.events["select:item"]&&this.emit("select:item",{$item:t}),!0):!1},n.prototype.blurItem=function(t){return t?(t===this.$focusItem&&(this.$focusItem=null),t.classList.remove("focus"),this.events["blur:item"]&&this.emit("blur:item",{$item:t}),!0):!1},n.prototype.focusIndex=function(t){var e=this.viewIndex||0;t>=e+this.size?(t=t<this.data.length-1?t:this.data.length-1,this.renderView(t-this.size+1),this.focusItem(this.$body.lastChild)):e>t?(t=t>0?t:0,this.renderView(t),this.focusItem(this.$body.firstChild)):(null===this.viewIndex&&this.renderView(0),this.focusItem(this.$body.children[t-e]))},n.prototype.markItem=function(t,e){e?t.classList.add("mark"):t.classList.remove("mark"),t.data.mark=e},t.exports=n},function(t,e,i){"use strict";function n(t){var e;t=t||{},t.focusable=t.focusable||!1,t.className="modalMessage "+(t.className||""),t.visible=t.visible||!1,t.$body=document.createElement("div"),t.$body.className="body",s.call(this,t),this.$node.appendChild(document.createElement("div")),this.$node.firstChild.appendChild(document.createElement("div")),this.$header=document.createElement("div"),this.$header.className="header",this.$text=this.$header.appendChild(document.createElement("div")),this.$text.classList.add("text"),this.$text.innerText=t.title||"",t.icon&&(this.$icon=this.$header.appendChild(document.createElement("div")),this.$icon.className="icon "+t.icon),e=document.createElement("div"),e.className="overlay",this.$node.firstChild.firstChild.appendChild(this.$header),this.$node.firstChild.firstChild.appendChild(this.$body),this.$node.firstChild.firstChild.appendChild(e)}var s=i(1);n.prototype=Object.create(s.prototype),n.prototype.constructor=n,n.prototype.focus=function(){this.$node.classList.add("active"),s.prototype.focus.call(this),this.children[0]&&this.children[0]instanceof s&&this.children[0].focus()},n.prototype.blur=function(){this.$node.classList.remove("active"),s.prototype.blur.call(this)},t.exports=n},function(t,e,i){"use strict";function n(t){t=t||{},this.active=!1,this.activeComponent=null,t.className="page "+(t.className||""),s.call(this,t),this.active=this.$node.classList.contains("active"),null===this.$node.parentNode&&document.body.appendChild(this.$node),this.page=this}var s=i(1);n.prototype=Object.create(s.prototype),n.prototype.constructor=n,t.exports=n},function(t,e,i){"use strict";function n(t){t=t||{},this.max=100,this.min=0,this.value=0,this.step=1,t.focusable=t.focusable||!1,t.className="progressBar "+(t.className||""),s.call(this,t),this.$value=this.$body.appendChild(document.createElement("div")),this.$value.className="value",this.init(t)}var s=i(1);n.prototype=Object.create(s.prototype),n.prototype.constructor=n,n.prototype.set=function(t){var e=this.value;return this.value!==t&&t<=this.max&&t>=this.min?(this.value=t,t=Math.abs(this.value-this.min)/this.step,100===t&&this.events.done&&this.emit("done"),this.$value.style.width=t+"%",this.events.change&&this.emit("change",{curr:this.value,prev:e}),!0):!1},n.prototype.init=function(t){void 0!==t.max&&(this.max=t.max),void 0!==t.min&&(this.min=t.min),void 0!==t.value&&(this.value=t.value),this.step=Math.abs(this.max-this.min)/100,this.$value.style.width=Math.abs(this.min-this.value)/this.step+"%"},t.exports=n},function(t,e){"use strict";t.exports={480:{height:480,width:720,availTop:24,availBottom:24,availRight:32,availLeft:48},576:{height:576,width:720,availTop:24,availBottom:24,availRight:26,availLeft:54},720:{height:720,width:1280,availTop:30,availBottom:30,availRight:40,
availLeft:40},1080:{height:1080,width:1920,availTop:45,availBottom:45,availRight:60,availLeft:60}}}]);