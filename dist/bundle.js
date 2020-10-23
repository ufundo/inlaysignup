!function(n){var e={};function t(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return n[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var s in n)t.d(i,s,function(e){return n[e]}.bind(null,s));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/",t(t.s=0)}([function(n,e,t){n.exports=t(1)},function(n,e){!function(){if(!window.inlaySignupInit){window.inlaySignupInit=function(n){var e=document.createElement("div");e.classList.add("inlay-signup","i"+n.publicID,"at-rest"),e.innerHTML='\n      <div class="is-overlay">\n        <div class="is-locator">\n          <button class="is-close" title="Close this form">×</button>\n          <form action=\'#\' >\n            <div class="is-field email">\n              <label>Email</label>\n              <input\n                name="email"\n                type="email"\n                placeholder="youremail@example.org"\n                required\n                />\n            </div>\n            <div class="is-field first_name">\n              <label>First name</label>\n              <input\n                name="first_name"\n                type="text"\n                required\n                />\n            </div>\n            <div class="is-field last_name">\n              <label>Last name</label>\n              <input\n                name="last_name"\n                type="text"\n                required\n                />\n            </div>\n            <div class="is-buttons">\n              <div class="is-smallprint" ></div>\n              <button class="is-submit" ></button>\n              <div class="is-progress"></div>\n            </div>\n          </form>\n          <div class="is-thanks">Thank you.</div>\n      </div>\n      ';var t={overlay:e.firstElementChild,emailInput:e.querySelector('input[name="email"]'),firstNameInput:e.querySelector('input[name="first_name"]'),lastNameInput:e.querySelector('input[name="last_name"]'),submitButton:e.querySelector("button.is-submit"),closeButton:e.querySelector("button.is-close"),smallprint:e.querySelector(".is-smallprint"),thanks:e.querySelector(".is-thanks"),progress:e.querySelector(".is-progress"),form:e.querySelector("form")};console.log({signupAppDiv:e,nodes:t}),t.thanks.style.display="none",t.submitButton.textContent=n.initData.signupButtonText,t.thanks.innerHTML=n.initData.webThanksHTML,t.smallprint.innerHTML=n.initData.smallprintHTML;var i=["emailInput","firstNameInput","lastNameInput"].map((function(n){return t[n]})),s=!1,r=function(n){s||(e.classList.remove("at-rest"),e.classList.add("focussed"),document.body.classList.add("inlay-signup-modal-active"),document.body.appendChild(e),s=!0,setTimeout((function(){return t.emailInput.focus()}),1)),n.classList.remove("pre-interaction"),n.validity.valid?n.parentNode.classList.remove("invalid"):n.parentNode.classList.add("invalid")},o=function(){s=!1,e.classList.add("at-rest"),e.classList.remove("focussed"),document.body.classList.remove("inlay-signup-modal-active"),i.forEach((function(n){n.value="",n.classList.add("pre-interaction"),n.parentNode.classList.remove("invalid"),n.reset&&n.reset()})),n.script.insertAdjacentElement("afterend",e),t.form.style.display="",t.thanks.style.display="none",t.submitButton.textContent=n.initData.signupButtonText,t.submitButton.disabled=!1};function a(n){var e={email:t.emailInput.value,first_name:t.firstNameInput.value,last_name:t.lastNameInput.value};return n&&(e.token=n),e}t.overlay.addEventListener("click",(function(n){this===n.target&&o()})),t.thanks.addEventListener("click",o),t.closeButton.addEventListener("click",o),i.forEach((function(n){n.classList.add("pre-interaction"),n.addEventListener("input",(function(e){return r(n)})),n.addEventListener("focus",(function(e){return r(n)}))})),t.closeButton.addEventListener("click",(function(n){n.preventDefault()})),t.submitButton.addEventListener("click",(function(n){console.log("buttonclick"),i.forEach((function(n){return r}))}));var l={doneBefore:0,jobTotal:100,expectedTime:null,percent:0,start:null};function u(n){l.start||(l.start=n);var e=Math.min(1,(n-l.start)/l.expectedTime),i=1-(1-e)*(1-e)*(1-e);l.percent=l.doneBefore+i*(l.percentDoneAtEndOfJob-l.doneBefore),t.progress.style.width=l.percent+"%",l.running&&e<1?window.requestAnimationFrame(u):l.running=!1}function c(n,e,i){n*=1e3,i?(l={doneBefore:0,percentDoneAtEndOfJob:e,expectedTime:n,percent:0,start:null,running:!1},t.progress.classList.add("active")):(l.doneBefore=l.percent,l.start=null,l.expectedTime=n,l.percentDoneAtEndOfJob=e),l.running||(l.running=!0,window.requestAnimationFrame(u))}window.cancelTimer=function(){l.start=null,l.running=!1,t.progress.classList.remove("active")},t.form.addEventListener("submit",(function(e){function i(){t.submitButton.disabled=!1,t.submitButton.textContent=n.initData.signupButtonText,cancelTimer()}console.log("submitted and valid"),e.preventDefault(),t.submitButton.disabled=!0,t.submitButton.textContent="Just a mo...",c(2,20,1),n.request({method:"post",body:a()}).then((function(e){console.log(e),e.error?(alert("Sorry, there was a problem with the form: "+e.error),i()):e.token&&(console.log("Token received, waiting 5s"),c(6,80),setTimeout((function(){console.log("Sending 2nd request, with token"),c(2,100),n.request({method:"post",body:a(e.token)}).then((function(n){if(!n.success)return alert("Sorry, there was a problem with the form: "+(n.error||"unknown error")),void i();cancelTimer(),t.form.style.display="none",t.thanks.style.display=""}))}),5e3))}))})),n.script.insertAdjacentElement("afterend",e)};var n=document.createElement("style");n.type="text/css",n.innerText="\n    .inlay-signup.at-rest .first_name,\n    .inlay-signup.at-rest .last_name,\n    .inlay-signup.at-rest .is-smallprint,\n    .inlay-signup.at-rest .is-close,\n    .inlay-signup.at-rest label {\n      display:none;\n    }\n    .inlay-signup.focussed .is-field {\n      margin-bottom: 1rem;\n    }\n    .inlay-signup.focussed .is-field input {\n      box-sizing:border-box;\n      width: 100%;\n    }\n    .inlay-signup.at-rest .email,\n    .inlay-signup.at-rest .is-buttons {\n      display:inline-block;\n      margin-left: 1rem;\n    }\n\n    .inlay-signup.focussed .is-overlay {\n      position:fixed;\n      z-index: 10000;\n      left:0;\n      right:0;\n      top:0;\n      bottom:0;\n      background-color: white;\n      background-color: rgba(255, 255, 255, 0.9);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n    .inlay-signup.focussed .is-locator {\n      position: relative;\n      max-width: 30rem;\n      max-height: 90vh;\n      overflow: auto;\n      background: #662a73;\n      color: white;\n      padding: 2rem;\n      border-radius: 0.5rem;\n    }\n    .inlay-signup.focussed .is-close {\n      display:block;\n      appearance: none;\n      -moz-appearance: none;\n      -webkit-appearance: none;\n      position:absolute;\n      margin: 0;\n      padding: 0;\n      top: 1rem;\n      right: 1rem;\n      width: 4rem;\n      font-size: 2rem;\n      line-height: 1;\n      text-align: center;\n      background: transparent;\n      color:white;\n      border: none;\n    }\n    .is-thanks {\n      font-size: 1.6rem;\n      text-align: center;\n    }\n    .inlay-signup .is-progress {\n      height: 2px;\n      margin-top:0.25rem;\n      background-color: transparent;\n    }\n    .inlay-signup .is-progress.active {\n      background-color: white;\n    }\n\n    .inlay-signup.focussed label {\n    }\n    .inlay-signup.focussed label {\n      display: block;\n    }\n    .inlay-signup.focussed .is-buttons button {\n      width: 100%;\n    }\n    body.inlay-signup-modal-active {\n      position: fixed;\n      overflow: hidden;\n    }\n\n\n",document.head.appendChild(n)}}()}]);