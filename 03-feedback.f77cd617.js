var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function p(e,t,n){var o,r,a,i,u,f,c=0,l=!1,p=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,a=r;return o=r=void 0,c=t,i=e.apply(a,n)}function x(e){return c=e,u=setTimeout(j,t),l?y(e):i}function S(e){var n=e-f;return void 0===f||n>=t||n<0||p&&e-c>=a}function j(){var e=m();if(S(e))return h(e);u=setTimeout(j,function(e){var n=t-(e-f);return p?d(n,a-(e-c)):n}(e))}function h(e){return u=void 0,b&&o?y(e):(o=r=void 0,i)}function k(){var e=m(),n=S(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return x(f);if(p)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),i}return t=g(t)||0,v(n)&&(l=!!n.leading,a=(p="maxWait"in n)?s(g(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),k.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},k.flush=function(){return void 0===u?i:h(m())},k}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||a.test(e)?i(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const b={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector(".feedback-form input")},y=localStorage.getItem("feedback-form-state-email"),x=localStorage.getItem("feedback-form-state");" "===y?console.log("empty"):(console.log("not empty"),b.input.value=y)," "===x?console.log("empty"):(console.log("not empty"),b.textarea.value=x),b.form.addEventListener("submit",(function(e){e.preventDefault();const t={email:b.textarea.value,massage:b.input.value};console.log(t),b.textarea.value=" ",b.input.value=" ",localStorage.setItem("feedback-form-state"," "),localStorage.setItem("feedback-form-state-email"," ")})),b.textarea.addEventListener("input",t((function(){const e=b.textarea.value;localStorage.setItem("feedback-form-state",e)}),1e3)),b.input.addEventListener("input",t((function(){const e=b.input.value;localStorage.setItem("feedback-form-state-email",e)}),1e3));
//# sourceMappingURL=03-feedback.f77cd617.js.map
