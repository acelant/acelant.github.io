/*!
* DevExtreme (dx.exporter.js)
* Version: 18.1.5
* Build date: Fri Jul 27 2018
*
* Copyright (c) 2012 - 2018 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";!function(){function e(e){var t=/xmlns="[\s\S]*?"/gi,n=!0;return e=e.replace(t,function(e){return n?(n=!1,e):""}),e.replace(/xmlns:NS1="[\s\S]*?"/gi,"").replace(/NS1:xmlns:xlink="([\s\S]*?)"/gi,'xmlns:xlink="$1"')}var t=jQuery,n=DevExpress.viz.BaseWidget,r=DevExpress.registerComponent,i=DevExpress.DOMComponent,o="file",a="exportTo",p="print",s=["PDF","PNG","SVG"],c=["JPEG","GIF"].concat(s),l=i.inherit({_killTracker:n.prototype._killTracker,_getSvgElements:function(){var n=this,r=[];return t(n.getSourceContainer()).find("svg").each(function(n){r[n]=e(t(this).clone().wrap("<div>").parent().html())}),JSON.stringify(r)},_appendTextArea:function(e,n,r){t("<textarea/>",{id:e,name:e,val:n}).appendTo(r)},_formSubmit:function(e){e.get(0).submit(),e.remove()},_getDefaultOptions:function(){return t.extend(this.callBase(),{redrawOnResize:!1,menuAlign:"right",exportFormat:s,printingEnabled:!0,fileName:o,showMenu:!0})},_createWindow:function(){return window.open("","printDiv","")},_createExportItems:function(e){var n=this;return t.map(e,function(e){return e=e.toUpperCase(),n.getSourceContainer().find("svg").length>1&&"SVG"===e?null:t.inArray(e.toUpperCase(),c)===-1?null:{name:e,text:e+" "+o}})},_render:function(){var e=this,n=e.option("fileName"),r=e._createExportItems(e.option("exportFormat")),i=t("<div>"),o=[{name:"export",icon:a,items:r}],s={items:o,onItemClick:function(t){switch(t.itemData.name){case"print":e.print();break;case"export":break;default:e.exportTo(n,t.itemData.name)}}};e.option("showMenu")&&(e.option("printingEnabled")&&o.push({icon:p,name:"print",click:function(){e.print()}}),i.dxMenu(s),e._$element.empty(),e._$element.append(i))},_exportSVG:function(e,n,r){var i=t("<form/>",{method:"POST",action:this.option("serverUrl"),enctype:"application/x-www-form-urlencoded",target:"_self",css:{display:"none",visibility:"hidden"}}),o=this._getSvgElements();this._appendTextArea("exportContent",r.clone().wrap("<div>").parent().html(),i),this._appendTextArea("svgElements",o,i),this._appendTextArea("fileName",e,i),this._appendTextArea("format",n.toLowerCase(),i),this._appendTextArea("width",r.width(),i),this._appendTextArea("height",r.height(),i),this._appendTextArea("url",window.location.host,i),t(document.body).append(i),this._formSubmit(i)},getSourceContainer:function(){return t(this.option("sourceContainer"))},print:function(){var e=this.getSourceContainer().html(),n=this._createWindow();n&&(t(n.document.body).html(e),n.document.close(),n.focus(),n.print(),n.close())},exportTo:function(e,t){var n=this,r=n.getSourceContainer();r.find("svg").length&&n._exportSVG(e,t,r)}});r("dxExporter",l),DevExpress.exporter={dxExporter:l}}();
