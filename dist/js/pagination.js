/*! formstone v1.3.3 [pagination.js] 2017-08-16 | GPL-3.0 License | formstone.it */

!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(e,s){"use strict";function i(s){v.killEvent(s);var i=s.data,t=i.index+(e(s.currentTarget).hasClass(d.control_previous)?-1:1);t>=0&&i.$items.eq(t).trigger(c.raw.click)}function t(s){v.killEvent(s);var i=s.data,t=e(s.currentTarget),l=parseInt(t.val(),10);i.$items.eq(l).trigger(c.raw.click)}function l(s){var i=s.data,t=e(s.currentTarget),l=i.$items.index(t);i.ajax?v.killEvent(s):t[0].click(),a(i,l)}function a(e,s){if(s<0&&(s=0),s>e.total&&(s=e.total),s!==e.index){e.index=s;var i=e.index-e.visible,t=e.index+(e.visible+1);i<0&&(i=0),t>e.total&&(t=e.total),e.$items.removeClass(d.visible).removeClass(d.hidden).filter(r.active).removeClass(d.active).end().eq(e.index).addClass(d.active).end().slice(i,t).addClass(d.visible),e.$items.not(r.visible).addClass(d.hidden),e.$position.find(r.current).text(e.index+1).end().find(r.total).text(e.total+1),e.$select.val(e.index),e.$controls.removeClass(d.visible),s>0&&e.$controls.filter(r.control_previous).addClass(d.visible),s<e.total&&e.$controls.filter(r.control_next).addClass(d.visible),e.$ellipsis.removeClass(d.visible),s>e.visible+1&&e.$ellipsis.eq(0).addClass(d.visible),s<e.total-e.visible-1&&e.$ellipsis.eq(1).addClass(d.visible),e.$el.trigger(c.update,[e.index])}}function n(e){for(var s="",i=0;i<=e.total;i++)s+='<option value="'+i+'"',i===e.index&&(s+='selected="selected"'),s+=">Page "+(i+1)+"</option>";e.$select.html(s)}var o=s.Plugin("pagination",{widget:!0,defaults:{ajax:!1,customClass:"",labels:{count:"of",next:"Next",previous:"Previous"},maxWidth:"740px",theme:"fs-light",visible:2},classes:["pages","page","active","first","last","ellipsis","visible","hidden","control","control_previous","control_next","position","select","mobile","current","total"],events:{update:"update"},methods:{_construct:function(s){s.mq="(max-width:"+(s.maxWidth===1/0?"100000px":s.maxWidth)+")";var v="";v+='<button type="button" class="'+[d.control,d.control_previous].join(" ")+'">'+s.labels.previous+"</button>",v+='<button type="button" class="'+[d.control,d.control_next].join(" ")+'">'+s.labels.next+"</button>",v+='<div class="'+d.position+'" aria-hidden="true">',v+='<span class="'+d.current+'">0</span>',v+=" "+s.labels.count+" ",v+='<span class="'+d.total+'">0</span>',v+='<select class="'+d.select+'" tabindex="-1" aria-hidden="true"></select>',v+="</div>",s.thisClasses=[d.base,s.theme,s.customClass],this.addClass(s.thisClasses.join(" ")).wrapInner('<div class="'+d.pages+'" aria-label="pagination"></div>').prepend(v),s.$controls=this.find(r.control),s.$pages=this.find(r.pages),s.$items=s.$pages.children().addClass(d.page),s.$position=this.find(r.position),s.$select=this.find(r.select),s.index=-1,s.total=s.$items.length-1;var p=s.$items.index(s.$items.filter("[data-"+o.namespace+"-active]"));p||(p=s.$items.index(s.$items.filter(r.active))),s.$items.eq(0).addClass(d.first).after('<span class="'+d.ellipsis+'">&hellip;</span>').end().eq(s.total).addClass(d.last).before('<span class="'+d.ellipsis+'">&hellip;</span>'),s.$ellipsis=s.$pages.find(r.ellipsis),n(s),this.on(c.click,r.page,s,l).on(c.click,r.control,s,i).on(c.change,r.select,s,t),e.fsMediaquery("bind",s.rawGuid,s.mq,{enter:function(){s.$el.addClass(d.mobile)},leave:function(){s.$el.removeClass(d.mobile)}}),a(s,p)},_destruct:function(s){e.fsMediaquery("unbind",s.rawGuid),s.$controls.remove(),s.$ellipsis.remove(),s.$select.remove(),s.$position.remove(),s.$items.removeClass([d.page,d.active,d.visible,d.first,d.last].join(" ")).unwrap(),this.removeClass(s.thisClasses.join(" ")).off(c.namespace)}}}),r=o.classes,d=r.raw,c=o.events,v=o.functions});