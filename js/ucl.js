// HTML5 Placeholder for old IE

(function(e,t,n){function c(e){var t={};var r=/^jQuery\d+$/;n.each(e.attributes,function(e,n){if(n.specified&&!r.test(n.name)){t[n.name]=n.value}});return t}function h(e,t){var r=this;var i=n(r);if(r.value==i.attr("placeholder")&&i.hasClass("placeholder")){if(i.data("placeholder-password")){i=i.hide().next().show().attr("id",i.removeAttr("id").data("placeholder-id"));if(e===true){return i[0].value=t}i.focus()}else{r.value="";i.removeClass("placeholder");r==d()&&r.select()}}}function p(){var e;var t=this;var r=n(t);var i=this.id;if(t.value==""){if(t.type=="password"){if(!r.data("placeholder-textinput")){try{e=r.clone().attr({type:"text"})}catch(s){e=n("<input>").attr(n.extend(c(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":r,"placeholder-id":i}).bind("focus.placeholder",h);r.data({"placeholder-textinput":e,"placeholder-id":i}).before(e)}r=r.removeAttr("id").hide().prev().attr("id",i).show()}r.addClass("placeholder");r[0].value=r.attr("placeholder")}else{r.removeClass("placeholder")}}function d(){try{return t.activeElement}catch(e){}}var r=Object.prototype.toString.call(e.operamini)=="[object OperaMini]";var i="placeholder"in t.createElement("input")&&!r;var s="placeholder"in t.createElement("textarea")&&!r;var o=n.fn;var u=n.valHooks;var a=n.propHooks;var f;var l;if(i&&s){l=o.placeholder=function(){return this};l.input=l.textarea=true}else{l=o.placeholder=function(){var e=this;e.filter((i?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":h,"blur.placeholder":p}).data("placeholder-enabled",true).trigger("blur.placeholder");return e};l.input=i;l.textarea=s;f={get:function(e){var t=n(e);var r=t.data("placeholder-password");if(r){return r[0].value}return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,t){var r=n(e);var i=r.data("placeholder-password");if(i){return i[0].value=t}if(!r.data("placeholder-enabled")){return e.value=t}if(t==""){e.value=t;if(e!=d()){p.call(e)}}else if(r.hasClass("placeholder")){h.call(e,true,t)||(e.value=t)}else{e.value=t}return r}};if(!i){u.input=f;a.value=f}if(!s){u.textarea=f;a.value=f}n(function(){n(t).delegate("form","submit.placeholder",function(){var e=n(".placeholder",this).each(h);setTimeout(function(){e.each(p)},10)})});n(e).bind("beforeunload.placeholder",function(){n(".placeholder").each(function(){this.value=""})})}})(this,document,jQuery);

// Fastclick

function FastClick(e,t){"use strict";function r(e,t){return function(){return e.apply(t,arguments)}}var n;t=t||{};this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=t.touchBoundary||10;this.layer=e;this.tapDelay=t.tapDelay||200;if(FastClick.notNeeded(e)){return}var i=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"];var s=this;for(var o=0,u=i.length;o<u;o++){s[i[o]]=r(s[i[o]],s)}if(deviceIsAndroid){e.addEventListener("mouseover",this.onMouse,true);e.addEventListener("mousedown",this.onMouse,true);e.addEventListener("mouseup",this.onMouse,true)}e.addEventListener("click",this.onClick,true);e.addEventListener("touchstart",this.onTouchStart,false);e.addEventListener("touchmove",this.onTouchMove,false);e.addEventListener("touchend",this.onTouchEnd,false);e.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){e.removeEventListener=function(t,n,r){var i=Node.prototype.removeEventListener;if(t==="click"){i.call(e,t,n.hijacked||n,r)}else{i.call(e,t,n,r)}};e.addEventListener=function(t,n,r){var i=Node.prototype.addEventListener;if(t==="click"){i.call(e,t,n.hijacked||(n.hijacked=function(e){if(!e.propagationStopped){n(e)}}),r)}else{i.call(e,t,n,r)}}}if(typeof e.onclick==="function"){n=e.onclick;e.addEventListener("click",function(e){n(e)},false);e.onclick=null}}var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0;var deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent);var deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent);var deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled){return true}break;case"input":if(deviceIsIOS&&e.type==="file"||e.disabled){return true}break;case"label":case"video":return true}return/\bneedsclick\b/.test(e.className)};FastClick.prototype.needsFocus=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"textarea":return true;case"select":return!deviceIsAndroid;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}};FastClick.prototype.sendClick=function(e,t){"use strict";var n,r;if(document.activeElement&&document.activeElement!==e){document.activeElement.blur()}r=t.changedTouches[0];n=document.createEvent("MouseEvents");n.initMouseEvent(this.determineEventType(e),true,true,window,1,r.screenX,r.screenY,r.clientX,r.clientY,false,false,false,false,0,null);n.forwardedTouchEvent=true;e.dispatchEvent(n)};FastClick.prototype.determineEventType=function(e){"use strict";if(deviceIsAndroid&&e.tagName.toLowerCase()==="select"){return"mousedown"}return"click"};FastClick.prototype.focus=function(e){"use strict";var t;if(deviceIsIOS&&e.setSelectionRange&&e.type.indexOf("date")!==0&&e.type!=="time"){t=e.value.length;e.setSelectionRange(t,t)}else{e.focus()}};FastClick.prototype.updateScrollParent=function(e){"use strict";var t,n;t=e.fastClickScrollParent;if(!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n;e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}if(t){t.fastClickLastScrollTop=t.scrollTop}};FastClick.prototype.getTargetElementFromEventTarget=function(e){"use strict";if(e.nodeType===Node.TEXT_NODE){return e.parentNode}return e};FastClick.prototype.onTouchStart=function(e){"use strict";var t,n,r;if(e.targetTouches.length>1){return true}t=this.getTargetElementFromEventTarget(e.target);n=e.targetTouches[0];if(deviceIsIOS){r=window.getSelection();if(r.rangeCount&&!r.isCollapsed){return true}if(!deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier){e.preventDefault();return false}this.lastTouchIdentifier=n.identifier;this.updateScrollParent(t)}}this.trackingClick=true;this.trackingClickStart=e.timeStamp;this.targetElement=t;this.touchStartX=n.pageX;this.touchStartY=n.pageY;if(e.timeStamp-this.lastClickTime<this.tapDelay){e.preventDefault()}return true};FastClick.prototype.touchHasMoved=function(e){"use strict";var t=e.changedTouches[0],n=this.touchBoundary;if(Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n){return true}return false};FastClick.prototype.onTouchMove=function(e){"use strict";if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e)){this.trackingClick=false;this.targetElement=null}return true};FastClick.prototype.findControl=function(e){"use strict";if(e.control!==undefined){return e.control}if(e.htmlFor){return document.getElementById(e.htmlFor)}return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};FastClick.prototype.onTouchEnd=function(e){"use strict";var t,n,r,i,s,o=this.targetElement;if(!this.trackingClick){return true}if(e.timeStamp-this.lastClickTime<this.tapDelay){this.cancelNextClick=true;return true}this.cancelNextClick=false;this.lastClickTime=e.timeStamp;n=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(deviceIsIOSWithBadTarget){s=e.changedTouches[0];o=document.elementFromPoint(s.pageX-window.pageXOffset,s.pageY-window.pageYOffset)||o;o.fastClickScrollParent=this.targetElement.fastClickScrollParent}r=o.tagName.toLowerCase();if(r==="label"){t=this.findControl(o);if(t){this.focus(o);if(deviceIsAndroid){return false}o=t}}else if(this.needsFocus(o)){if(e.timeStamp-n>100||deviceIsIOS&&window.top!==window&&r==="input"){this.targetElement=null;return false}this.focus(o);this.sendClick(o,e);if(!deviceIsIOS||r!=="select"){this.targetElement=null;e.preventDefault()}return false}if(deviceIsIOS&&!deviceIsIOS4){i=o.fastClickScrollParent;if(i&&i.fastClickLastScrollTop!==i.scrollTop){return true}}if(!this.needsClick(o)){e.preventDefault();this.sendClick(o,e)}return false};FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=false;this.targetElement=null};FastClick.prototype.onMouse=function(e){"use strict";if(!this.targetElement){return true}if(e.forwardedTouchEvent){return true}if(!e.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(e.stopImmediatePropagation){e.stopImmediatePropagation()}else{e.propagationStopped=true}e.stopPropagation();e.preventDefault();return false}return true};FastClick.prototype.onClick=function(e){"use strict";var t;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(e.target.type==="submit"&&e.detail===0){return true}t=this.onMouse(e);if(!t){this.targetElement=null}return t};FastClick.prototype.destroy=function(){"use strict";var e=this.layer;if(deviceIsAndroid){e.removeEventListener("mouseover",this.onMouse,true);e.removeEventListener("mousedown",this.onMouse,true);e.removeEventListener("mouseup",this.onMouse,true)}e.removeEventListener("click",this.onClick,true);e.removeEventListener("touchstart",this.onTouchStart,false);e.removeEventListener("touchmove",this.onTouchMove,false);e.removeEventListener("touchend",this.onTouchEnd,false);e.removeEventListener("touchcancel",this.onTouchCancel,false)};FastClick.notNeeded=function(e){"use strict";var t;var n;if(typeof window.ontouchstart==="undefined"){return true}n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(n){if(deviceIsAndroid){t=document.querySelector("meta[name=viewport]");if(t){if(t.content.indexOf("user-scalable=no")!==-1){return true}if(n>31&&window.innerWidth<=window.screen.width){return true}}}else{return true}}if(e.style.msTouchAction==="none"){return true}return false};FastClick.attach=function(e,t){"use strict";return new FastClick(e,t)};if(typeof define!=="undefined"&&define.amd){define(function(){"use strict";return FastClick})}else if(typeof module!=="undefined"&&module.exports){module.exports=FastClick.attach;module.exports.FastClick=FastClick}else{window.FastClick=FastClick}

// Pickaday

(function(e,t){"use strict";var n;if(typeof exports==="object"){try{n=require("moment")}catch(r){}module.exports=t(n)}else if(typeof define==="function"&&define.amd){define(function(e){var r="moment";n=e.defined&&e.defined(r)?e(r):undefined;return t(n)})}else{e.Pikaday=t(e.moment)}})(this,function(e){"use strict";var t=typeof e==="function",n=!!window.addEventListener,r=window.document,i=window.setTimeout,s=function(e,t,r,i){if(n){e.addEventListener(t,r,!!i)}else{e.attachEvent("on"+t,r)}},o=function(e,t,r,i){if(n){e.removeEventListener(t,r,!!i)}else{e.detachEvent("on"+t,r)}},u=function(e,t,n){var i;if(r.createEvent){i=r.createEvent("HTMLEvents");i.initEvent(t,true,false);i=y(i,n);e.dispatchEvent(i)}else if(r.createEventObject){i=r.createEventObject();i=y(i,n);e.fireEvent("on"+t,i)}},a=function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},f=function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")!==-1},l=function(e,t){if(!f(e,t)){e.className=e.className===""?t:e.className+" "+t}},c=function(e,t){e.className=a((" "+e.className+" ").replace(" "+t+" "," "))},h=function(e){return/Array/.test(Object.prototype.toString.call(e))},p=function(e){return/Date/.test(Object.prototype.toString.call(e))&&!isNaN(e.getTime())},d=function(e){return e%4===0&&e%100!==0||e%400===0},v=function(e,t){return[31,d(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},m=function(e){if(p(e))e.setHours(0,0,0,0)},g=function(e,t){return e.getTime()===t.getTime()},y=function(e,t,n){var r,i;for(r in t){i=e[r]!==undefined;if(i&&typeof t[r]==="object"&&t[r].nodeName===undefined){if(p(t[r])){if(n){e[r]=new Date(t[r].getTime())}}else if(h(t[r])){if(n){e[r]=t[r].slice(0)}}else{e[r]=y({},t[r],n)}}else if(n||!i){e[r]=t[r]}}return e},b=function(e){if(e.month<0){e.year-=Math.ceil(Math.abs(e.month)/12);e.month+=12}if(e.month>11){e.year+=Math.floor(Math.abs(e.month)/12);e.month-=12}return e},w={field:null,bound:undefined,position:"bottom left",format:"YYYY-MM-DD",defaultDate:null,setDefaultDate:false,firstDay:0,minDate:null,maxDate:null,yearRange:10,showWeekNumber:false,minYear:0,maxYear:9999,minMonth:undefined,maxMonth:undefined,isRTL:false,yearSuffix:"",showMonthAfterYear:false,numberOfMonths:1,mainCalendar:"left",container:undefined,i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},onSelect:null,onOpen:null,onClose:null,onDraw:null},E=function(e,t,n){t+=e.firstDay;while(t>=7){t-=7}return n?e.i18n.weekdaysShort[t]:e.i18n.weekdays[t]},S=function(e,t,n,r,i,s,o){if(o){return'<td class="is-empty"></td>'}var u=[];if(s){u.push("is-disabled")}if(i){u.push("is-today")}if(r){u.push("is-selected")}return'<td data-day="'+e+'" class="'+u.join(" ")+'">'+'<button class="pika-button pika-day" type="button" '+'data-pika-year="'+n+'" data-pika-month="'+t+'" data-pika-day="'+e+'">'+e+"</button>"+"</td>"},x=function(e,t,n){var r=new Date(n,0,1),i=Math.ceil(((new Date(n,t,e)-r)/864e5+r.getDay()+1)/7);return'<td class="pika-week">'+i+"</td>"},T=function(e,t){return"<tr>"+(t?e.reverse():e).join("")+"</tr>"},N=function(e){return"<tbody>"+e.join("")+"</tbody>"},C=function(e){var t,n=[];if(e.showWeekNumber){n.push("<th></th>")}for(t=0;t<7;t++){n.push('<th scope="col"><abbr title="'+E(e,t)+'">'+E(e,t,true)+"</abbr></th>")}return"<thead>"+(e.isRTL?n.reverse():n).join("")+"</thead>"},k=function(e,t,n,r,i){var s,o,u,a=e._o,f=n===a.minYear,l=n===a.maxYear,c='<div class="pika-title">',p,d,v=true,m=true;for(u=[],s=0;s<12;s++){u.push('<option value="'+(n===i?s-t:12+s-t)+'"'+(s===r?" selected":"")+(f&&s<a.minMonth||l&&s>a.maxMonth?"disabled":"")+">"+a.i18n.months[s]+"</option>")}p='<div class="pika-label">'+a.i18n.months[r]+'<select class="pika-select pika-select-month">'+u.join("")+"</select></div>";if(h(a.yearRange)){s=a.yearRange[0];o=a.yearRange[1]+1}else{s=n-a.yearRange;o=1+n+a.yearRange}for(u=[];s<o&&s<=a.maxYear;s++){if(s>=a.minYear){u.push('<option value="'+s+'"'+(s===n?" selected":"")+">"+s+"</option>")}}d='<div class="pika-label">'+n+a.yearSuffix+'<select class="pika-select pika-select-year">'+u.join("")+"</select></div>";if(a.showMonthAfterYear){c+=d+p}else{c+=p+d}if(f&&(r===0||a.minMonth>=r)){v=false}if(l&&(r===11||a.maxMonth<=r)){m=false}if(t===0){c+='<button class="pika-prev'+(v?"":" is-disabled")+'" type="button">'+a.i18n.previousMonth+"</button>"}if(t===e._o.numberOfMonths-1){c+='<button class="pika-next'+(m?"":" is-disabled")+'" type="button">'+a.i18n.nextMonth+"</button>"}return c+="</div>"},L=function(e,t){return'<table cellpadding="0" cellspacing="0" class="pika-table">'+C(e)+N(t)+"</table>"},A=function(o){var u=this,a=u.config(o);u._onMouseDown=function(e){if(!u._v){return}e=e||window.event;var t=e.target||e.srcElement;if(!t){return}if(!f(t,"is-disabled")){if(f(t,"pika-button")&&!f(t,"is-empty")){u.setDate(new Date(t.getAttribute("data-pika-year"),t.getAttribute("data-pika-month"),t.getAttribute("data-pika-day")));if(a.bound){i(function(){u.hide();if(a.field){a.field.blur()}},100)}return}else if(f(t,"pika-prev")){u.prevMonth()}else if(f(t,"pika-next")){u.nextMonth()}}if(!f(t,"pika-select")){if(e.preventDefault){e.preventDefault()}else{e.returnValue=false;return false}}else{u._c=true}};u._onChange=function(e){e=e||window.event;var t=e.target||e.srcElement;if(!t){return}if(f(t,"pika-select-month")){u.gotoMonth(t.value)}else if(f(t,"pika-select-year")){u.gotoYear(t.value)}};u._onInputChange=function(n){var r;if(n.firedBy===u){return}if(t){r=e(a.field.value,a.format);r=r&&r.isValid()?r.toDate():null}else{r=new Date(Date.parse(a.field.value))}u.setDate(p(r)?r:null);if(!u._v){u.show()}};u._onInputFocus=function(){u.show()};u._onInputClick=function(){u.show()};u._onInputBlur=function(){if(!u._c){u._b=i(function(){u.hide()},50)}u._c=false};u._onClick=function(e){e=e||window.event;var t=e.target||e.srcElement,r=t;if(!t){return}if(!n&&f(t,"pika-select")){if(!t.onchange){t.setAttribute("onchange","return;");s(t,"change",u._onChange)}}do{if(f(r,"pika-single")){return}}while(r=r.parentNode);if(u._v&&t!==a.trigger){u.hide()}};u.el=r.createElement("div");u.el.className="pika-single"+(a.isRTL?" is-rtl":"");s(u.el,"mousedown",u._onMouseDown,true);s(u.el,"change",u._onChange);if(a.field){if(a.container){a.container.appendChild(u.el)}else if(a.bound){r.body.appendChild(u.el)}else{a.field.parentNode.insertBefore(u.el,a.field.nextSibling)}s(a.field,"change",u._onInputChange);if(!a.defaultDate){if(t&&a.field.value){a.defaultDate=e(a.field.value,a.format).toDate()}else{a.defaultDate=new Date(Date.parse(a.field.value))}a.setDefaultDate=true}}var l=a.defaultDate;if(p(l)){if(a.setDefaultDate){u.setDate(l,true)}else{u.gotoDate(l)}}else{u.gotoDate(new Date)}if(a.bound){this.hide();u.el.className+=" is-bound";s(a.trigger,"click",u._onInputClick);s(a.trigger,"focus",u._onInputFocus);s(a.trigger,"blur",u._onInputBlur)}else{this.show()}};A.prototype={config:function(e){if(!this._o){this._o=y({},w,true)}var t=y(this._o,e,true);t.isRTL=!!t.isRTL;t.field=t.field&&t.field.nodeName?t.field:null;t.bound=!!(t.bound!==undefined?t.field&&t.bound:t.field);t.trigger=t.trigger&&t.trigger.nodeName?t.trigger:t.field;var n=parseInt(t.numberOfMonths,10)||1;t.numberOfMonths=n>4?4:n;if(!p(t.minDate)){t.minDate=false}if(!p(t.maxDate)){t.maxDate=false}if(t.minDate&&t.maxDate&&t.maxDate<t.minDate){t.maxDate=t.minDate=false}if(t.minDate){m(t.minDate);t.minYear=t.minDate.getFullYear();t.minMonth=t.minDate.getMonth()}if(t.maxDate){m(t.maxDate);t.maxYear=t.maxDate.getFullYear();t.maxMonth=t.maxDate.getMonth()}if(h(t.yearRange)){var r=(new Date).getFullYear()-10;t.yearRange[0]=parseInt(t.yearRange[0],10)||r;t.yearRange[1]=parseInt(t.yearRange[1],10)||r}else{t.yearRange=Math.abs(parseInt(t.yearRange,10))||w.yearRange;if(t.yearRange>100){t.yearRange=100}}return t},toString:function(n){return!p(this._d)?"":t?e(this._d).format(n||this._o.format):this._d.toDateString()},getMoment:function(){return t?e(this._d):null},setMoment:function(n,r){if(t&&e.isMoment(n)){this.setDate(n.toDate(),r)}},getDate:function(){return p(this._d)?new Date(this._d.getTime()):null},setDate:function(e,t){if(!e){this._d=null;return this.draw()}if(typeof e==="string"){e=new Date(Date.parse(e))}if(!p(e)){return}var n=this._o.minDate,r=this._o.maxDate;if(p(n)&&e<n){e=n}else if(p(r)&&e>r){e=r}this._d=new Date(e.getTime());m(this._d);this.gotoDate(this._d);if(this._o.field){this._o.field.value=this.toString();u(this._o.field,"change",{firedBy:this})}if(!t&&typeof this._o.onSelect==="function"){this._o.onSelect.call(this,this.getDate())}},gotoDate:function(e){var t=true;if(!p(e)){return}if(this.calendars){var n=new Date(this.calendars[0].year,this.calendars[0].month,1),r=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),i=e.getTime();r.setMonth(r.getMonth()+1);r.setDate(r.getDate()-1);t=i<n.getTime()||r.getTime()<i}if(t){this.calendars=[{month:e.getMonth(),year:e.getFullYear()}];if(this._o.mainCalendar==="right"){this.calendars[0].month+=1-this._o.numberOfMonths}}this.adjustCalendars()},adjustCalendars:function(){this.calendars[0]=b(this.calendars[0]);for(var e=1;e<this._o.numberOfMonths;e++){this.calendars[e]=b({month:this.calendars[0].month+e,year:this.calendars[0].year})}this.draw()},gotoToday:function(){this.gotoDate(new Date)},gotoMonth:function(e){if(!isNaN(e)){this.calendars[0].month=parseInt(e,10);this.adjustCalendars()}},nextMonth:function(){this.calendars[0].month++;this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--;this.adjustCalendars()},gotoYear:function(e){if(!isNaN(e)){this.calendars[0].year=parseInt(e,10);this.adjustCalendars()}},setMinDate:function(e){this._o.minDate=e},setMaxDate:function(e){this._o.maxDate=e},draw:function(e){if(!this._v&&!e){return}var t=this._o,n=t.minYear,r=t.maxYear,s=t.minMonth,o=t.maxMonth,u="";if(this._y<=n){this._y=n;if(!isNaN(s)&&this._m<s){this._m=s}}if(this._y>=r){this._y=r;if(!isNaN(o)&&this._m>o){this._m=o}}for(var a=0;a<t.numberOfMonths;a++){u+='<div class="pika-lendar">'+k(this,a,this.calendars[a].year,this.calendars[a].month,this.calendars[0].year)+this.render(this.calendars[a].year,this.calendars[a].month)+"</div>"}this.el.innerHTML=u;if(t.bound){if(t.field.type!=="hidden"){i(function(){t.trigger.focus()},1)}}if(typeof this._o.onDraw==="function"){var f=this;i(function(){f._o.onDraw.call(f)},0)}},adjustPosition:function(){if(this._o.container)return;var e=this._o.trigger,t=e,n=this.el.offsetWidth,i=this.el.offsetHeight,s=window.innerWidth||r.documentElement.clientWidth,o=window.innerHeight||r.documentElement.clientHeight,u=window.pageYOffset||r.body.scrollTop||r.documentElement.scrollTop,a,f,l;if(typeof e.getBoundingClientRect==="function"){l=e.getBoundingClientRect();a=l.left+window.pageXOffset;f=l.bottom+window.pageYOffset}else{a=t.offsetLeft;f=t.offsetTop+t.offsetHeight;while(t=t.offsetParent){a+=t.offsetLeft;f+=t.offsetTop}}if(a+n>s||this._o.position.indexOf("right")>-1&&a-n+e.offsetWidth>0){a=a-n+e.offsetWidth}if(f+i>o+u||this._o.position.indexOf("top")>-1&&f-i-e.offsetHeight>0){f=f-i-e.offsetHeight}this.el.style.cssText=["position: absolute","left: "+a+"px","top: "+f+"px"].join(";")},render:function(e,t){var n=this._o,r=new Date,i=v(e,t),s=(new Date(e,t,1)).getDay(),o=[],u=[];m(r);if(n.firstDay>0){s-=n.firstDay;if(s<0){s+=7}}var a=i+s,f=a;while(f>7){f-=7}a+=7-f;for(var l=0,c=0;l<a;l++){var h=new Date(e,t,1+(l-s)),d=n.minDate&&h<n.minDate||n.maxDate&&h>n.maxDate,y=p(this._d)?g(h,this._d):false,b=g(h,r),w=l<s||l>=i+s;u.push(S(1+(l-s),t,e,y,b,d,w));if(++c===7){if(n.showWeekNumber){u.unshift(x(l-s,t,e))}o.push(T(u,n.isRTL));u=[];c=0}}return L(n,o)},isVisible:function(){return this._v},show:function(){if(!this._v){c(this.el,"is-hidden");this._v=true;this.draw();if(this._o.bound){s(r,"click",this._onClick);this.adjustPosition()}if(typeof this._o.onOpen==="function"){this._o.onOpen.call(this)}}},hide:function(){var e=this._v;if(e!==false){if(this._o.bound){o(r,"click",this._onClick)}this.el.style.cssText="";l(this.el,"is-hidden");this._v=false;if(e!==undefined&&typeof this._o.onClose==="function"){this._o.onClose.call(this)}}},destroy:function(){this.hide();o(this.el,"mousedown",this._onMouseDown,true);o(this.el,"change",this._onChange);if(this._o.field){o(this._o.field,"change",this._onInputChange);if(this._o.bound){o(this._o.trigger,"click",this._onInputClick);o(this._o.trigger,"focus",this._onInputFocus);o(this._o.trigger,"blur",this._onInputBlur)}}if(this.el.parentNode){this.el.parentNode.removeChild(this.el)}}};return A})


// UCL JS

$(document).ready(function(){

  // fast click being called
  $(function() {
    FastClick.attach(document.body);
  });

  // mobile nav

  $('#nav-mobile-menu, #nav-mobile-back').click(function (e) {

  var body = $('body');

  if (body.hasClass('mobile-open')) body.removeClass('mobile-open');
  else body.addClass('mobile-open');

    prevent(e);

  });

	$('.tabbed div').hide();
	$('.tabbed div:first').show();
	$('.tabbed ul li:first').addClass('active');

	$('.tabbed ul li a').click(function(){
		$('.tabbed ul li').removeClass('active');
		$(this).parent().addClass('active');
		var currentTab = $(this).attr('href');
		$('.tabbed div').hide();
		$(currentTab).show();
		return false;
	});


	var allPanels = $('.accordion > dd').hide();

	$('.accordion > dt > a').click(function() {
		allPanels.slideUp();
		$(this).parent().next().slideDown();
		return false;
	});


	if (document.documentElement.clientWidth < 767) {


	//Add Inactive Class To All Accordion Headers
	$('.accordion-header').addClass('inactive-header');

		//Set The Accordion Content Width
		var contentwidth = $('.accordion-header').width();
		$('.accordion-content').css({'width' : contentwidth });

		//Open The First Accordion Section When Page Loads
		$('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
		$('.accordion-content').first().slideDown().toggleClass('open-content');

		// The Accordion Effect
		$('.accordion-header').click(function () {
			if($(this).is('.inactive-header')) {
				$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
				$(this).toggleClass('active-header').toggleClass('inactive-header');
      $(this).removeClass('inactive-header').addClass('active-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }

    else {
      $(this).removeClass('active-header').addClass('inactive-header');
      $(this).next().slideToggle().toggleClass('open-content');
    }
  });

	}

	// Search things

  // pikaday

  var picker = new Pikaday({ field: $('#dateFrom')[0] });
  var picker = new Pikaday({ field: $('#dateTo')[0] });

  // placeholder.js called
  $('input, textarea').placeholder();

  // face show/hide
  $('.facet h4').click(function() {
    $(this).parent().toggleClass('facet--close');
    return false;
  });
  // facet show/hide toggle
  $('.off-canvas').click(function() {
    $('.facets').toggleClass('show-facet');
    $('.search-results__meta').toggleClass('move');
    $('.search-results').toggleClass('move');

    $('.off-canvas').toggleClass('spin');
    return false;
  });
  // facet hide
  $('.close').click(function() {
    $('.facets').removeClass('show-facet');
    $('.search-results__meta, .search-results').removeClass('move');

    $('.off-canvas').removeClass('spin');
    return false;
  });

  // facet hide
  $('.close-me').click(function() {
    $('.facets').removeClass('show-facet');
    $('.search-results__meta, .search-results').removeClass('move');

    $('.off-canvas').removeClass('spin');
    return false;
  });

	// collections show/hide for mobile devices
	$('.collections-list__show-hide').click(function() {
		$('.collections__list').toggleClass('show-list');
    $('.collections__list').toggleClass('spinner');
		return false;
	});







});
if ($(window).width() < 700) {
  // collections put whatever collection is selected at top of list on mobile
  $('.collections__list').find('.list__item--is-selected').prependTo('.collections__list');
}

// collections put whatever collection is selected at top of list on mobile
$(window).resize(function() {
  if ($(window).width() < 700) {
    // collections put whatever collection is selected at top of list on mobile
    $('.collections__list').find('.list__item--is-selected').prependTo('.collections__list');
  }
  else {
  }
});
