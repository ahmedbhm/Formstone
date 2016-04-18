/*! formstone v1.0.4 [checkbox.js] 2016-04-18 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(b){var c=this.closest("label"),d=c.length?c.eq(0):a("label[for="+this.attr("id")+"]"),e=[p.base,b.theme,b.customClass].join(" "),f="";b.radio="radio"===this.attr("type"),b.group=this.attr("name"),f+='<div class="'+p.marker+'" aria-hidden="true">',f+='<div class="'+p.flag+'"></div>',b.toggle&&(e+=" "+p.toggle,f+='<span class="'+[p.state,p.state_on].join(" ")+'">'+b.labels.on+"</span>",f+='<span class="'+[p.state,p.state_off].join(" ")+'">'+b.labels.off+"</span>"),b.radio&&(e+=" "+p.radio),f+="</div>",d.length?d.addClass(p.label).wrap('<div class="'+e+'"></div>').before(f):this.before('<div class=" '+e+'">'+f+"</div>"),b.$checkbox=d.length?d.parents(o.base):this.prev(o.base),b.$marker=b.$checkbox.find(o.marker),b.$states=b.$checkbox.find(o.state),b.$label=d,this.is(":checked")&&b.$checkbox.addClass(p.checked),(this.is(":disabled")||this.is("[readonly]"))&&b.$checkbox.addClass(p.disabled),this.wrap('<div class="'+p.element_wrapper+'"></div>'),this.on(q.focus,b,l).on(q.blur,b,m).on(q.change,b,i).on(q.click,b,h).on(q.deselect,b,k),b.$checkbox.on(q.click,b,h)}function d(a){a.$checkbox.off(q.namespace),a.$marker.remove(),a.$states.remove(),a.$label.unwrap().removeClass(p.label),this.unwrap().off(q.namespace)}function e(a){this.prop("disabled",!1),a.$checkbox.removeClass(p.disabled)}function f(a){this.prop("disabled",!0),a.$checkbox.addClass(p.disabled)}function g(a){var b=a.$el.is(":disabled")||a.$el.is("[readonly]"),c=a.$el.is(":checked");b||(c?j({data:a}):k({data:a}))}function h(b){b.stopPropagation();var c=b.data;a(b.target).is(c.$el)||(b.preventDefault(),c.$el.trigger("click"))}function i(a){var b=a.data,c=b.$el.is(":disabled")||b.$el.is("[readonly]"),d=b.$el.is(":checked");c||(b.radio?d&&j(a):d?j(a):k(a))}function j(b){b.data.radio&&a('input[name="'+b.data.group+'"]').not(b.data.$el).trigger("deselect"),b.data.$el.trigger(q.focus),b.data.$checkbox.addClass(p.checked)}function k(a){a.data.$el.trigger(q.focus),a.data.$checkbox.removeClass(p.checked)}function l(a){a.data.$checkbox.addClass(p.focus)}function m(a){a.data.$checkbox.removeClass(p.focus)}var n=b.Plugin("checkbox",{widget:!0,defaults:{customClass:"",toggle:!1,labels:{on:"ON",off:"OFF"},theme:"fs-light"},classes:["element_wrapper","label","marker","flag","radio","focus","checked","disabled","toggle","state","state_on","state_off"],methods:{_construct:c,_destruct:d,enable:e,disable:f,update:g},events:{deselect:"deselect"}}),o=n.classes,p=o.raw,q=n.events;n.functions});