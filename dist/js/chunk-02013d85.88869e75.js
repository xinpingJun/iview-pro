(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02013d85"],{28560:function(t,e,a){},"286d":function(t,e,a){"use strict";var r=a("5dff"),n=a.n(r);n.a},"3a85":function(t,e,a){},"3dd2":function(t,e,a){"use strict";var r=a("af9b"),n=a.n(r);n.a},4338:function(t,e,a){"use strict";var r=a("5273"),n=a.n(r);n.a},"4b3f":function(t,e,a){"use strict";var r=a("28560"),n=a.n(r);n.a},"4d90":function(t,e,a){"use strict";var r=a("4f56"),n=a.n(r);n.a},"4f56":function(t,e,a){},5273:function(t,e,a){},"56a0":function(t,e,a){"use strict";var r=a("3a85"),n=a.n(r);n.a},"5dff":function(t,e,a){},"6c9d":function(t,e,a){},a047:function(t,e,a){"use strict";var r=a("ea94"),n=a.n(r);n.a},a3c7:function(t,e,a){"use strict";var r=a("6c9d"),n=a.n(r);n.a},af9b:function(t,e,a){},bb0c:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Row",{attrs:{gutter:10}},[a("Col",{attrs:{sm:12}},[a("Card",{staticClass:"m-b-10",attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("基础柱状图")]),a("BaseColumnar")],1)],1),a("Col",{attrs:{sm:12}},[a("Card",{staticClass:"m-b-10",attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("分组柱状图")]),a("GroupColumnar")],1)],1),a("Col",{attrs:{sm:12}},[a("Card",{staticClass:"m-b-10",attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("堆叠柱状图")]),a("StackingColumnar")],1)],1),a("Col",{attrs:{sm:12}},[a("Card",{staticClass:"m-b-10",attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("百分比堆叠柱状图")]),a("PercentageStackingColumnar")],1)],1),a("Col",{attrs:{sm:12}},[a("Card",{staticClass:"m-b-10",attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("基础条形图")]),a("BaseStrip")],1)],1),a("Col",{attrs:{sm:12}},[a("Card",{staticClass:"m-b-10",attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("分组条形图")]),a("GroupStrip")],1)],1),a("Col",{attrs:{sm:12}},[a("Card",{staticClass:"m-b-10",attrs:{bordered:!1}},[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("堆叠条形图")]),a("StackingStrip")],1)],1)],1)},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mountNode"}})},s=[],i=a("7f1a"),u=a.n(i),l={data:function(){return{data:[{year:"1951 年",sales:38},{year:"1952 年",sales:52},{year:"1956 年",sales:61},{year:"1957 年",sales:145},{year:"1958 年",sales:48},{year:"1959 年",sales:38},{year:"1960 年",sales:38},{year:"1962 年",sales:38}]}},methods:{creatChart:function(t){var e=new u.a.Chart({container:"mountNode",padding:[40,20,40,40],forceFit:!0,height:400});e.source(t),e.scale("sales",{tickInterval:20}),e.interval().position("year*sales"),e.render()}},mounted:function(){var t=this;this.$nextTick(function(){t.creatChart(t.data)})}},c=l,d=(a("a047"),a("2877")),p=Object(d["a"])(c,o,s,!1,null,null,null);p.options.__file="base-columnar.vue";var f=p.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mountNode2"}})},m=[],y=a("7104"),h=a.n(y),b={data:function(){return{data:[{name:"London","Jan.":18.9,"Feb.":28.8,"Mar.":39.3,"Apr.":81.4,May:47,"Jun.":20.3,"Jul.":24,"Aug.":35.6},{name:"Berlin","Jan.":12.4,"Feb.":23.2,"Mar.":34.5,"Apr.":99.7,May:52.6,"Jun.":35.5,"Jul.":37.4,"Aug.":42.4}]}},methods:{creatChart:function(t){var e=new h.a,a=e.createView().source(t);a.transform({type:"fold",fields:["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug."],key:"月份",value:"月均降雨量"}),console.log(a);var r=new u.a.Chart({container:"mountNode2",padding:[40,20,40,40],forceFit:!0,height:400});r.source(a),r.interval().position("月份*月均降雨量").color("name").adjust([{type:"dodge",marginRatio:1/32}]),r.render()}},mounted:function(){var t=this;this.$nextTick(function(){t.creatChart(t.data)})}},C=b,g=(a("a3c7"),Object(d["a"])(C,v,m,!1,null,null,null));g.options.__file="group-columnar.vue";var _=g.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mountNode3"}})},w=[],x={data:function(){return{data:[{name:"London","Jan.":18.9,"Feb.":28.8,"Mar.":39.3,"Apr.":81.4,May:47,"Jun.":20.3,"Jul.":24,"Aug.":35.6},{name:"Berlin","Jan.":12.4,"Feb.":23.2,"Mar.":34.5,"Apr.":99.7,May:52.6,"Jun.":35.5,"Jul.":37.4,"Aug.":42.4}]}},methods:{creatChart:function(t){var e=new h.a,a=e.createView().source(t);a.transform({type:"fold",fields:["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug."],key:"月份",value:"月均降雨量"});var r=new u.a.Chart({container:"mountNode3",padding:[40,20,40,40],forceFit:!0,height:400});r.source(a),r.intervalStack().position("月份*月均降雨量").color("name").adjust([{type:"dodge",marginRatio:1/32}]),r.render()}},mounted:function(){var t=this;this.$nextTick(function(){t.creatChart(t.data)})}},A=x,J=(a("4b3f"),Object(d["a"])(A,k,w,!1,null,null,null));J.options.__file="stacking-columnar.vue";var E=J.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mountNode4"}})},S=[],$={data:function(){return{data:[{country:"Europe",year:"1750",value:163},{country:"Europe",year:"1800",value:203},{country:"Europe",year:"1850",value:276},{country:"Europe",year:"1900",value:408},{country:"Europe",year:"1950",value:547},{country:"Europe",year:"1999",value:729},{country:"Europe",year:"2050",value:628},{country:"Europe",year:"2100",value:828},{country:"Asia",year:"1750",value:502},{country:"Asia",year:"1800",value:635},{country:"Asia",year:"1850",value:809},{country:"Asia",year:"1900",value:947},{country:"Asia",year:"1950",value:1402},{country:"Asia",year:"1999",value:3634},{country:"Asia",year:"2050",value:5268},{country:"Asia",year:"2100",value:7268}]}},methods:{creatChart:function(t){var e=new h.a,a=e.createView().source(t).transform({type:"percent",field:"value",dimension:"country",groupBy:["year"],as:"percent"}),r=new u.a.Chart({container:"mountNode4",padding:[40,20,40,60],forceFit:!0,height:400});r.source(a,{percent:{min:0,formatter:function(t){return(100*t).toFixed(2)+"%"}}}),r.intervalStack().position("year*percent").color("country"),r.render()}},mounted:function(){var t=this;this.$nextTick(function(){t.creatChart(t.data)})}},M=$,N=(a("4d90"),Object(d["a"])(M,F,S,!1,null,null,null));N.options.__file="percentage-stacking-columnar.vue";var j=N.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mountNode5"}})},O=[],B={data:function(){return{data:[{country:"中国",population:131744},{country:"印度",population:104970},{country:"美国",population:29034},{country:"印尼",population:23489},{country:"巴西",population:18203}]}},methods:{creatChart:function(t){var e=new h.a,a=e.createView().source(t);a.source(t).transform({type:"sort",callback:function(t,e){return e.population-t.population}});var r=new u.a.Chart({container:"mountNode5",padding:[40,40,20,40],forceFit:!0,height:400});r.source(a),r.axis("country",{label:{offset:12}}),r.coord().transpose(),r.interval().position("country*population"),r.render()}},mounted:function(){var t=this;this.$nextTick(function(){t.creatChart(t.data)})}},V=B,R=(a("286d"),Object(d["a"])(V,T,O,!1,null,null,null));R.options.__file="base-strip.vue";var G=R.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mountNode6"}})},P=[],W={data:function(){return{data:[{label:"Mon.",series1:2800,series2:2260},{label:"Tues.",series1:1800,series2:1300},{label:"Wed.",series1:950,series2:900},{label:"Thur.",series1:500,series2:390},{label:"Fri.",series1:170,series2:100}]}},methods:{creatChart:function(t){var e=new h.a,a=e.createView().source(t);a.transform({type:"fold",fields:["series1","series2"],key:"type",value:"value"});var r=new u.a.Chart({container:"mountNode6",padding:[40,20,20,60],forceFit:!0,height:400});r.source(a),r.axis("value",{position:"right"}),r.axis("label",{label:{offset:12}}),r.coord().transpose().scale(1,-1),r.interval().position("label*value").color("type").adjust([{type:"dodge",marginRatio:1/32}]),r.render()}},mounted:function(){var t=this;this.$nextTick(function(){t.creatChart(t.data)})}},I=W,q=(a("3dd2"),Object(d["a"])(I,L,P,!1,null,null,null));q.options.__file="group-strip.vue";var z=q.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"mountNode7"}})},H=[],K={data:function(){return{data:[{label:"Mon.",series1:2800,series2:2260},{label:"Tues.",series1:1800,series2:1300},{label:"Wed.",series1:950,series2:900},{label:"Thur.",series1:500,series2:390},{label:"Fri.",series1:170,series2:100}]}},methods:{creatChart:function(t){var e=new h.a,a=e.createView().source(t);a.transform({type:"fold",fields:["series1","series2"],key:"type",value:"value"});var r=new u.a.Chart({container:"mountNode7",padding:[40,20,20,60],forceFit:!0,height:400});r.source(a),r.axis("value",{position:"right"}),r.axis("label",{label:{offset:12}}),r.coord().transpose().scale(1,-1),r.intervalStack().position("label*value").color("type").adjust([{type:"dodge",marginRatio:1/32}]),r.render()}},mounted:function(){var t=this;this.$nextTick(function(){t.creatChart(t.data)})}},Q=K,U=(a("56a0"),Object(d["a"])(Q,D,H,!1,null,null,null));U.options.__file="stacking-strip.vue";var X=U.exports,Y={components:{BaseColumnar:f,GroupColumnar:_,StackingColumnar:E,PercentageStackingColumnar:j,BaseStrip:G,GroupStrip:z,StackingStrip:X}},Z=Y,tt=(a("4338"),Object(d["a"])(Z,r,n,!1,null,null,null));tt.options.__file="columnar.vue";e["default"]=tt.exports},ea94:function(t,e,a){}}]);
//# sourceMappingURL=chunk-02013d85.88869e75.js.map