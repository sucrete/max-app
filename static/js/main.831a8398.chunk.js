(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(8),l=a.n(s),u=(a(16),a(17),a(1)),r=a(2),o=a(4),m=a(3),c=a(6),d=a(5),p=a(9),v=a.n(p),h=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={top:null,height:null},a.handleScroll=a.handleScroll.bind(Object(c.a)(a)),a.handleResize=a.handleResize.bind(Object(c.a)(a)),a}return Object(d.a)(t,e),Object(r.a)(t,[{key:"handleScroll",value:function(){this.setState({scroll:window.scrollY})}},{key:"handleResize",value:function(){console.log(this.state.top);var e=document.getElementsByClassName("navItemsContainer")[0];this.setState({top:e.offsetTop,height:e.offsetHeight})}},{key:"componentDidMount",value:function(){var e=document.getElementsByClassName("navItemsContainer")[0];this.setState({top:e.offsetTop,height:e.offsetHeight}),window.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleResize)}},{key:"render",value:function(){return i.a.createElement("nav",{className:"maxNav"},i.a.createElement("img",{src:v.a,className:"rawr",alt:"dinosaurLogo"}),i.a.createElement("div",{className:"maxSpacer"}),i.a.createElement("ul",{className:this.state.scroll>this.state.top?"navItemsContainerFixed":"navItemsContainer"},i.a.createElement("li",{className:"navItem"},i.a.createElement("a",null,"About")),i.a.createElement("li",{className:"navItem"},i.a.createElement("a",null,"Work")),i.a.createElement("li",{className:"navItem"},i.a.createElement("a",null,"Awards")),i.a.createElement("li",{className:"navItem"},i.a.createElement("a",null,"Contact"))))}}]),t}(n.Component),g=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("header",{className:"maxHeader"},"MAX ROSEN, NYC")}}]),t}(n.Component),b=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"maxContent"},i.a.createElement("section",null,i.a.createElement("h2",null,"About"),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla vel lectus non porta. Nulla laoreet sapien nec sem rhoncus rhoncus. Donec elementum vel odio quis cursus. Nam vitae est justo. Aenean aliquam, massa et accumsan pulvinar, sem magna iaculis purus, a ultrices purus ante sed sapien. Suspendisse consequat diam sed mi vestibulum aliquet. Nullam eget mauris eget magna mollis interdum non quis ipsum. Proin quis neque turpis. Duis sagittis, lorem elementum euismod consequat, mi est viverra est, eget congue lacus mauris et odio. Suspendisse potenti. Nunc varius malesuada metus, nec molestie nisl bibendum interdum. Mauris at velit sed est scelerisque ultrices sed vitae libero. Nullam ornare sollicitudin urna quis aliquam. Cras augue magna, pretium ac rhoncus at, varius ut diam. Vivamus ac augue mattis, posuere elit vitae, tincidunt risus. Nullam porta tellus id metus ultrices tincidunt. Phasellus hendrerit vel urna scelerisque volutpat. Praesent vitae vehicula sem. Suspendisse lacus lacus, elementum in fringilla at, fermentum eget massa. Nam feugiat aliquam magna. Quisque eu arcu in risus aliquet imperdiet. Ut lacus nisi, dignissim a est et, fermentum porta velit. Phasellus dignissim ante non rhoncus finibus.")),i.a.createElement("section",null,i.a.createElement("h2",null,"Work"),i.a.createElement("p",null,"Nullam nunc tortor, pharetra sed egestas non, blandit sed ligula. Curabitur a tortor et mi fringilla laoreet. Nulla facilisi. Mauris a hendrerit lacus, non fermentum magna. Aenean molestie est ut turpis porttitor euismod. In molestie felis sagittis finibus vulputate. Maecenas luctus volutpat sagittis. Mauris dictum dui vel ante rhoncus, vitae ornare urna blandit.")),i.a.createElement("section",null,i.a.createElement("h2",null,"Awards"),i.a.createElement("p",null,"Nulla nec mi velit. In nulla turpis, gravida quis ipsum et, gravida porttitor nisi. Mauris facilisis sed quam sed lacinia. Sed sem nibh, egestas non consequat luctus, elementum vitae neque. Praesent bibendum ipsum ac est elementum vulputate. Suspendisse potenti. Phasellus consequat nulla vitae massa commodo, eget fermentum felis faucibus. Etiam sollicitudin, enim non mollis porta, eros ante semper tortor, a euismod lacus sapien euismod velit. Nullam quis elit id est vulputate auctor non id arcu. Sed rutrum ipsum ligula, vel ultricies eros blandit sed. Mauris lacus nibh, condimentum vitae purus volutpat, maximus ultrices nulla. Suspendisse erat libero, imperdiet id eros vel, fermentum interdum eros. Mauris accumsan, urna a interdum imperdiet, erat nisl porttitor massa, eu semper nisi erat vel quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.")),i.a.createElement("section",null,i.a.createElement("h2",null,"Contact"),i.a.createElement("p",null,"Aenean vestibulum elit in posuere placerat. Nulla ut fermentum sem, ut tempus libero. Nullam tristique massa eu ex maximus, ac lobortis dolor venenatis. Suspendisse quis arcu sed sem ornare pellentesque vel a odio. Curabitur vulputate sem libero, in facilisis justo fringilla sit amet. Nunc nec libero porttitor, porta quam sed, mollis lacus. Sed volutpat id tellus eget volutpat. Donec egestas purus massa, facilisis pellentesque ligula finibus vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut pretium imperdiet justo. Donec luctus hendrerit ultricies. Curabitur at tincidunt lacus, non sollicitudin nunc. Nullam laoreet turpis id nibh blandit, non imperdiet velit consequat.")))}}]),t}(n.Component);var f=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"maxAppContainer"},i.a.createElement(h,null),i.a.createElement("main",{className:"maxMain"},i.a.createElement(g,null),i.a.createElement(b,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t){e.exports="data:image/gif;base64,R0lGODlhKQAhAPIAAP///5mZmf+ZmczMzP+ZzMyZmcxmmQAAACH5BAEAAAAALAAAAAApACEAAAPUCHDc/k3JSas6NkusO+/ZB1JYaZbbsjCjZV4w+qotSdOy+om1PrG5G682JPZsx1vy4vhBWEsNpxgFTavLK/aI2nKnUO/oYCgYqOJNoXAgsH/pn3n9vgx24kNBQCeUBoB/eFEMc2UMAQOJB4p3C45VbX1sDoCBlmhjc2tlnRCKmVZ7dHxrpaOUoR6GrJ2tlISTa26zsgVuqhV6ZZx0vHO7vrlyuKi3pGuSpsMXngueDK6HZMA9yiXJC8d6uNrZRM7U2MnVwcwrO1AR68txUmZh7iQREgkAOw=="}},[[10,1,2]]]);
//# sourceMappingURL=main.831a8398.chunk.js.map