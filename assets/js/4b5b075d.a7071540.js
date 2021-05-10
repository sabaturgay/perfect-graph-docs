(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=o(n),O=a,m=p["".concat(l,".").concat(O)]||p[O]||u[O]||b;return n?r.a.createElement(m,c(c({ref:t},i),{},{components:n})):r.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=O;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<b;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),b=(n(0),n(115)),l={title:"Graph"},c={unversionedId:"components/graph",id:"components/graph",isDocsHomePage:!1,title:"Graph",description:"A React component to create a Graph View easily, you can just pass data and render methods.",source:"@site/docs/components/graph.md",slug:"/components/graph",permalink:"/perfect-graph-docs/docs/components/graph",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/components/graph.md",version:"current",sidebar:"docs",previous:{title:"GraphEditor",permalink:"/perfect-graph-docs/docs/components/graph-editor"},next:{title:"View",permalink:"/perfect-graph-docs/docs/components/view"}},d=[{value:"Examples",id:"examples",children:[]},{value:"Props",id:"props",children:[{value:"<code>children</code>",id:"children",children:[]},{value:"<code>edges</code>",id:"edges",children:[]},{value:"<code>extraData</code>",id:"extradata",children:[]},{value:"<code>style</code>",id:"style",children:[]},{value:"<code>nodes</code>",id:"nodes",children:[]},{value:"<code>renderNode</code>",id:"rendernode",children:[]},{value:"<code>renderEdge</code>",id:"renderedge",children:[]},{value:"<code>renderClusterNode</code>",id:"renderclusternode",children:[]},{value:"<code>drawLine</code>",id:"drawline",children:[]},{value:"<code>onPress</code>",id:"onpress",children:[]},{value:"<code>config</code>",id:"config",children:[]},{value:"<code>selectedElementIds</code>",id:"selectedelementids",children:[]},{value:"<code>onBoxSelection</code>",id:"onboxselection",children:[]}]},{value:"BoundingBox",id:"boundingbox",children:[{value:"<code>x</code>",id:"x",children:[]},{value:"<code>y</code>",id:"y",children:[]},{value:"<code>width</code>",id:"width",children:[]},{value:"<code>height</code>",id:"height",children:[]}]}],i={toc:d};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"A React component to create a Graph View easily, you can just pass data and render methods."),Object(b.b)("h2",{id:"examples"},"Examples"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js",metastring:"live=true",live:"true"},'function MyGraph() {\n  const [data, setData] = React.useState({\n    nodes: [\n      { id: 1, position: { x: 10, y: 10 } },\n      { id: 2, position: { x: 300, y: 100 } },\n    ],\n    edges: [{ id: 51, source: 1, target: 2 }],\n  });\n  return (\n    <Graph\n      style={{ width: "100%", height: 250 }}\n      onPress={({ position }) => {\n        setData({\n          nodes: [\n            ...data.nodes,\n            { id: "" + (Math.random() * 1000).toFixed(0), position },\n          ],\n          edges: data.edges,\n        });\n      }}\n      nodes={data.nodes}\n      edges={data.edges}\n    />\n  );\n}\n')),Object(b.b)("hr",null),Object(b.b)("h1",{id:"reference"},"Reference"),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("h3",{id:"children"},Object(b.b)("inlineCode",{parentName:"h3"},"children")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"React.ReactNode"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"edges"},Object(b.b)("inlineCode",{parentName:"h3"},"edges")),Object(b.b)("p",null,"The edge item list."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/type#edgeitem"},"EdgeItem"),"[]"),Object(b.b)("td",{parentName:"tr",align:null},"Yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"extradata"},Object(b.b)("inlineCode",{parentName:"h3"},"extraData")),Object(b.b)("p",null,"A marker property for telling the list to re-render (since it implements PureComponent). If any of your renderItem, Header, Footer, etc. functions depend on anything outside of the data prop, stick it here and treat it immutably."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"any"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"style"},Object(b.b)("inlineCode",{parentName:"h3"},"style")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"style"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://reactnative.dev/docs/view-style-props"},"ViewStyleProps"))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nodes"},Object(b.b)("inlineCode",{parentName:"h3"},"nodes")),Object(b.b)("p",null,"The node item list."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/type#nodeitem"},"NodeItem"),"[]"),Object(b.b)("td",{parentName:"tr",align:null},"Yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"rendernode"},Object(b.b)("inlineCode",{parentName:"h3"},"renderNode")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"(info: RenderNodeInput) => ?React.Element\\<any\\>")),Object(b.b)("p",null,"Takes an item from ",Object(b.b)("inlineCode",{parentName:"p"},"data")," and renders it into the list"),Object(b.b)("p",null,"Parameters: ",Object(b.b)("a",{parentName:"p",href:"/docs/type#rendernodeinput"},"RenderNodeInput")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"function"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"renderedge"},Object(b.b)("inlineCode",{parentName:"h3"},"renderEdge")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"(info: RenderEdgeInput) => ?React.Element\\<any\\>")),Object(b.b)("p",null,"Takes an item from ",Object(b.b)("inlineCode",{parentName:"p"},"data")," and renders it into the list"),Object(b.b)("p",null,"Parameters: ",Object(b.b)("a",{parentName:"p",href:"/docs/type#renderedgeinput"},"RenderEdgeInput")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"function"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"renderclusternode"},Object(b.b)("inlineCode",{parentName:"h3"},"renderClusterNode")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"(info: RenderNodeInput) => ?React.Element\\<any\\>")),Object(b.b)("p",null,"Takes an item from ",Object(b.b)("inlineCode",{parentName:"p"},"data")," and renders it into the list"),Object(b.b)("p",null,"Parameters: ",Object(b.b)("a",{parentName:"p",href:"/docs/type#rendernodeinput"},"RenderNodeInput")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"function"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"drawline"},Object(b.b)("inlineCode",{parentName:"h3"},"drawLine")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/type#drawline"},"DrawLine")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onpress"},Object(b.b)("inlineCode",{parentName:"h3"},"onPress")),Object(b.b)("p",null,"Invoked on press background. "),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"function"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"config"},Object(b.b)("inlineCode",{parentName:"h3"},"config")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"/docs/type#graphconfig"},"GraphConfig")),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"selectedelementids"},Object(b.b)("inlineCode",{parentName:"h3"},"selectedElementIds")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"string[]"),Object(b.b)("td",{parentName:"tr",align:null},"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"onboxselection"},Object(b.b)("inlineCode",{parentName:"h3"},"onBoxSelection")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required")))),Object(b.b)("p",null,"| ",Object(b.b)("inlineCode",{parentName:"p"},"(params: {\n    event: PIXI.InteractionEvent,\n    elements: cytoscape.Collection,\n    elementIds: string[],\n    boundingBox: BoundingBox;\n  }) => boolean")," | Yes     |"),Object(b.b)("p",null,"Parameters:  "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"params: {\nelement: ",Object(b.b)("a",{parentName:"li",href:"#nodeelement"},"NodeElement"),";\nevent: ",Object(b.b)("a",{parentName:"li",href:"https://pixijs.download/dev/docs/PIXI.InteractionEvent.html"},"PIXI.InteractionEvent"),";\nelements: ",Object(b.b)("a",{parentName:"li",href:"https://js.cytoscape.org/#collection"},"cytoscape.Collection"),";\nelementIds: string[];\nboundingBox: ",Object(b.b)("a",{parentName:"li",href:"#boundingbox"},"BoundingBox"),";\n}")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"boundingbox"},"BoundingBox"),Object(b.b)("h3",{id:"x"},Object(b.b)("inlineCode",{parentName:"h3"},"x")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"Yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"y"},Object(b.b)("inlineCode",{parentName:"h3"},"y")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"Yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"width"},Object(b.b)("inlineCode",{parentName:"h3"},"width")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"Yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"height"},Object(b.b)("inlineCode",{parentName:"h3"},"height")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Type"),Object(b.b)("th",{parentName:"tr",align:null},"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"number"),Object(b.b)("td",{parentName:"tr",align:null},"Yes")))),Object(b.b)("hr",null))}o.isMDXComponent=!0}}]);