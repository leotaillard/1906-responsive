!function(e){"use strict";var t={};t.lastActive=void 0,t.activeElement=void 0,t._addEventListener=function(e,t,a){e.addEventListener?e.addEventListener(t,a,!1):e.attachEvent("on"+t,a)},t._addEventListener(document,"keyup",function(e){var a=window.location.hash.replace("#","");if(""!==a&&"!"!==a&&27===e.keyCode){if(window.location.hash="!",t.lastActive)return!1;t.removeFocus()}},!1),t._dispatchEvent=function(e,t){var a;document.createEvent&&(a=document.createEvent("Event"),a.initEvent(e,!0,!0),a.customData={modal:t},document.dispatchEvent(a))},t.mainHandler=function(){var e=window.location.hash.replace("#",""),a=document.getElementById(e),n=document.documentElement.className,c,i;a?(c=a.children[0],c&&c.className.match(/modal-inner/)&&(n.match(/has-overlay/)||(document.documentElement.className+=" has-overlay"),t.activeElement&&(i=t.activeElement,i.className=i.className.replace(" is-active","")),a.className+=" is-active",t.activeElement=a,t.setFocus(e),t._dispatchEvent("cssmodal:show",t.activeElement))):(document.documentElement.className=n.replace(" has-overlay",""),t.activeElement&&(t.activeElement.className=t.activeElement.className.replace(" is-active",""),t._dispatchEvent("cssmodal:hide",t.activeElement),t.activeElement=null,t.removeFocus()))},t._addEventListener(window,"hashchange",t.mainHandler),t._addEventListener(window,"load",t.mainHandler),t.setFocus=function(){t.activeElement&&(t.lastActive=document.activeElement,t.activeElement.focus())},t.removeFocus=function(){t.lastActive&&t.lastActive.focus()},e.CSSModal=t}(window);