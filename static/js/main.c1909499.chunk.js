(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),o=n(6),r=n(8),i=(n(13),n(14),n(1)),a=n(4),l=n.n(a),u=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d="Sort alphabetically",j="Sort by length",h=function(t){var e=t.good;return Object(u.jsx)("li",{"data-cy":"Good",children:e})},g=function(t){return t.goods.map((function(t){return Object(u.jsx)(h,{good:t},t)}))};var p=function(){var t=Object(i.useState)(""),e=Object(o.a)(t,2),n=e[0],s=e[1],c=Object(i.useState)(!1),a=Object(o.a)(c,2),h=a[0],p=a[1],m=function(t,e){var n=e.sortField,s=e.isReversed,c=Object(r.a)(t);return!n&&s?c.reverse():(n&&c.sort((function(t,e){switch(n){case d:return s?e.localeCompare(t):t.localeCompare(e);case j:return t.length!==e.length?s?e.length-t.length:t.length-e.length:s?e.localeCompare(t):t.localeCompare(e);default:return 0}})),c)}(b,{sortField:n,isReversed:h});return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{onClick:function(){return s(d)},type:"button",className:l()("button","is-info",{"is-light":n!==d},{active:d}),children:"Sort alphabetically"}),Object(u.jsx)("button",{onClick:function(){return s(j)},type:"button",className:l()("button","is-success",{"is-light":n!==j},{active:j}),children:"Sort by length"}),Object(u.jsx)("button",{onClick:function(){p(!h)},type:"button",className:l()("button","is-warning",{"is-light":!h},{active:h}),children:"Reverse"}),(n||h)&&Object(u.jsx)("button",{onClick:function(){s(""),p(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(u.jsx)("ul",{className:"GoodList",children:Object(u.jsx)(g,{goods:m})})]})};c.a.render(Object(u.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.c1909499.chunk.js.map