(this.webpackJsonprefactor=this.webpackJsonprefactor||[]).push([[0],{24:function(e,t,a){e.exports=a(48)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(20),i=a.n(c),o=(a(29),a(3)),l=(a(30),a(31),a(6));var s=function(){return n.a.createElement("div",{className:"welcome"},n.a.createElement("h1",null,"Hi, welcome to my test project!"),n.a.createElement(l.b,{to:"/list"},n.a.createElement("button",{className:"check-app"},"Check the app")))},m=(a(36),a(37),a(12)),d=a(22),u=a(2),h=a(1),p=function e(t){var a=this;Object(m.a)(this,e),this.addCar=function(e,t){e&&t&&a.rootStore.cars.push({make:e,model:t,id:Object(u.a)()})},this.resetModel=function(){return a.model=""},this.setModel=function(e){""!==e&&(a.model=e)},this.rootStore=t,this.model=""};Object(h.j)(p,{model:h.o,addCar:h.f,setModel:h.f,resetModel:h.f});var f=p,k=function e(t){var a=this;Object(m.a)(this,e),this.addCar=function(e){a.rootStore.vehicleModel.addCar(a.make,e)},this.resetMake=function(){return a.make=""},this.setMake=function(e){""!==e&&(a.make=e)},this.rootStore=t,this.make=""};Object(h.j)(k,{make:h.o,addCar:h.f,resetMake:h.f,setMake:h.f});var b=k,E=[{make:"Mini",model:"Cooper JCW GP",isNew:!0,price:5e4,id:Object(u.a)()},{make:"Ferrari",model:"F50",isNew:!1,price:3e6,id:Object(u.a)()},{make:"Subaru",model:"Impreza 22B",isNew:!1,price:1e5,id:Object(u.a)()},{make:"Audi",model:"RSQ8",isNew:!0,price:14e4,id:Object(u.a)()},{make:"Aston Martin",model:"Rapide",isNew:!1,price:6e4,id:Object(u.a)()},{make:"Bentley",model:"Flying Spur",isNew:!0,price:275e3,id:Object(u.a)()},{make:"Porsche",model:"935",isNew:!0,price:1e6,id:Object(u.a)()},{make:"Porsche",model:"Cayenne Turbo S",isNew:!0,price:2e5,id:Object(u.a)()},{make:"Maserati",model:"Coupe",isNew:!1,price:2e4,id:Object(u.a)()},{make:"Fisker",model:"Karma",isNew:!1,price:4e4,id:Object(u.a)()},{make:"Ferrari",model:"F8 Tributo",isNew:!0,price:3e5,id:Object(u.a)()},{make:"GMC",model:"Sierra 3500HD Denali",isNew:!0,price:8e4,id:Object(u.a)()},{make:"McLaren",model:"570S GT4",isNew:!0,price:2e5,id:Object(u.a)()},{make:"Porsche",model:"Panamera",isNew:!1,price:3e4,id:Object(u.a)()},{make:"Mercedes",model:"G63 AMG",isNew:!0,price:2e5,id:Object(u.a)()},{make:"Ford",model:"F-650",isNew:!0,price:15e4,id:Object(u.a)()},{make:"Pagani",model:"Zonda",isNew:!1,price:6e6,id:Object(u.a)()},{make:"Mercedes",model:"G63 AMG 6x6",isNew:!0,price:15e5,id:Object(u.a)()},{make:"Ferrari",model:"599 GTO",isNew:!1,price:55e4,id:Object(u.a)()},{make:"Porsche",model:"911 Speedster",isNew:!0,price:3e5,id:Object(u.a)()},{make:"Jaguar",model:"XE SV Project",isNew:!0,price:2e5,id:Object(u.a)()},{make:"McLaren",model:"GT",isNew:!0,price:25e4,id:Object(u.a)()},{make:"McLaren",model:"P1",isNew:!1,price:2e6,id:Object(u.a)()},{make:"Lexus",model:"LX5709",isNew:!0,price:95e3,id:Object(u.a)()},{make:"Aston Martin",model:"Superleggera",isNew:!0,price:35e4,id:Object(u.a)()},{make:"Bentley",model:"Continental GT",isNew:!0,price:25e4,id:Object(u.a)()},{make:"Bugatti",model:"Chiron",isNew:!1,price:3e6,id:Object(u.a)()},{make:"BMW",model:"i3",isNew:!0,price:5e4,id:Object(u.a)()},{make:"Kia",model:"K900",isNew:!0,price:6e4,id:Object(u.a)()},{make:"Aston Martin",model:"Vanquish S Volante",isNew:!0,price:34e4,id:Object(u.a)()}];var v=function(){function e(){var t=this;Object(m.a)(this,e),this.cars=E.slice(),this.sortParams={sortBy:"make",direction:"ascending"},this.searchText="",this.currentPage=1,this.cardsPerPage=6,this.setCurrentPage=function(e){t.currentPage=e.target.id},this.changeCarSpec=function(e,a,r){var n=t.cars.indexOf(e);t.cars[n].make=a||e.make,t.cars[n].model=r||e.model},this.changeSearchText=function(e){t.searchText=e.target.value},this.setSortParams=function(e,a){t.sortParams={sortBy:e,direction:a}},this.vehicleMake=new b(this),this.vehicleModel=new f(this)}return Object(d.a)(e,[{key:"filteredCars",get:function(){var e,t,a,r=this;return(e=this.cars.slice(),t=this.sortParams.direction,a=this.sortParams.sortBy,"ascending"===t?e.sort((function(e,t){return"string"===typeof e[a]?e[a].toLowerCase()>t[a].toLowerCase()?1:-1:e[a]>t[a]?1:-1})):"descending"===t?e.sort((function(e,t){return"string"===typeof e[a]?e[a].toLowerCase()<t[a].toLowerCase()?1:-1:e[a]<t[a]?1:-1})):void 0).filter((function(e){return e.make.toLowerCase().includes(r.searchText)||e.model.toLowerCase().includes(r.searchText)}))}},{key:"currentCars",get:function(){return function(e,t,a){var r=t*a,n=r-a;return e.slice(n,r)}(this.filteredCars,this.currentPage,this.cardsPerPage)}},{key:"pageNumbersArray",get:function(){for(var e=[],t=1;t<=Math.ceil(this.filteredCars.length/this.cardsPerPage);t++)e.push(t);return e}}]),e}();Object(h.j)(v,{cars:h.o,searchText:h.o,sortParams:h.o,currentPage:h.o,cardsPerPage:h.o,pageNumbersArray:h.g,setCurrentPage:h.f,filteredCars:h.g,currentCars:h.g,changeSearchText:h.f,setSortParams:h.f});var g=v,N=n.a.createContext(null);function w(e){var t=e.children,a=new g;return n.a.createElement(N.Provider,{value:a},t)}function j(){return n.a.useContext(N)}var C=function(){var e=j(),t=e.changeSearchText,a=e.searchText;return n.a.createElement("div",null,n.a.createElement("h2",null,"Find a car"),n.a.createElement("input",{className:"text-input",onChange:t,type:"search",placeholder:"Search",defaultValue:a}))};a(39);var O=function(e){var t=e.sortBy,a=e.direction,r=j();return n.a.createElement("button",{className:"sort-button",onClick:function(){return r.setSortParams(t,a)}},"Sort ",a)};a(40);var M=function(e){return n.a.createElement("div",{className:"sort-option"},n.a.createElement("h3",null,"Sort by ",e.sortBy),n.a.createElement(O,{sortBy:e.sortBy,direction:"ascending"}),n.a.createElement(O,{sortBy:e.sortBy,direction:"descending"}))};var y=function(){return n.a.createElement("div",null,n.a.createElement(M,{sortBy:"make"}),n.a.createElement(M,{sortBy:"model"}))};var P=function(){return n.a.createElement("div",null,n.a.createElement(C,null),n.a.createElement(y,null))},S=a(23),x=(a(41),a(10));a(42);function B(e){e.value=""}var F=function(e){var t=j(),a=t.vehicleModel,r=t.vehicleMake;return n.a.createElement("div",{className:"card-container edit-card"},n.a.createElement("form",{className:"add-card-form",onSubmit:function(n){n.preventDefault(),B(n.target.make),B(n.target.model),t.changeCarSpec(e.car,r.make,a.model),r.resetMake(),a.resetModel(),e.setCardClicked(!1)}},n.a.createElement("label",{htmlFor:"make"},"Make:"),n.a.createElement("input",{className:"text-input",type:"text",id:"make",name:"make",placeholder:e.car.make,onChange:function(e){return r.setMake(e.target.value)}}),n.a.createElement("label",{htmlFor:"model"},"Model:"),n.a.createElement("input",{className:"text-input",type:"text",placeholder:e.car.model,id:"model",name:"model",onChange:function(e){return a.setModel(e.target.value)}}),n.a.createElement("button",{className:"check-app add",type:"submit"},"Edit car")))};var T=Object(x.a)(Object(o.f)((function(e){var t=n.a.useState(!1),a=Object(S.a)(t,2),r=a[0],c=a[1],i=n.a.createElement("div",{className:"card-container",onClick:function(){return"/edit"===e.location.pathname&&c(!0)}},n.a.createElement("h3",{className:"car-make"},e.car.make),n.a.createElement("p",null,e.car.model));return n.a.createElement("div",null,r?n.a.createElement(F,{setCardClicked:c,car:e.car}):i)})));a(43);var G=Object(x.a)((function(){var e=j();return n.a.createElement("div",{className:"card-list"},e.currentCars.length?e.currentCars.map((function(e){return n.a.createElement(T,{key:e.id,car:e})})):n.a.createElement("h3",null,"No cars yet, please add some"))}));a(44);var A=Object(x.a)((function(){var e=j();return n.a.createElement("div",null,e.pageNumbersArray.map((function(t){return n.a.createElement("button",{className:"page-button",key:t,id:t,onClick:e.setCurrentPage},t)})))}));var L=Object(x.a)((function(){return n.a.createElement("div",{className:"Main"},n.a.createElement("h1",null,"Cars"),n.a.createElement(l.b,{className:"link edit",to:"/edit"},"Edit a car"),n.a.createElement(l.b,{className:"link add",to:"/add"},"Add a car"),n.a.createElement(P,null),n.a.createElement(G,null),n.a.createElement(A,null))}));a(45);var D=function(){var e=j(),t=e.vehicleModel,a=e.vehicleMake;return n.a.createElement("div",null,n.a.createElement("form",{className:"add-card-form",onSubmit:function(e){e.preventDefault(),B(e.target.make),B(e.target.model),a.addCar(t.model),a.resetMake(),t.resetModel()}},n.a.createElement("label",{htmlFor:"make"},"Make:"),n.a.createElement("input",{className:"text-input",type:"text",id:"make",name:"make",onChange:function(e){return a.setMake(e.target.value)}}),n.a.createElement("label",{htmlFor:"model"},"Model:"),n.a.createElement("input",{className:"text-input",type:"text",id:"model",name:"model",onChange:function(e){return t.setModel(e.target.value)}}),n.a.createElement("button",{className:"check-app add",type:"submit"},"Make car")))};a(46);var J=function(){return n.a.createElement("div",{className:"screen add-screen"},n.a.createElement("h2",null,"Add a car"),n.a.createElement("h3",null,"Fill the fields to add a new car to the list"),n.a.createElement(l.b,{className:"link",to:"/list"},n.a.createElement("button",{className:"go-back-button"},"Go back to list")),n.a.createElement(D,null))};a(47);var V=function(){return n.a.createElement("div",{className:"screen"},n.a.createElement("h2",null,"Edit a card"),n.a.createElement("h3",null,"Click on a card to edit it"),n.a.createElement(l.b,{to:"/list"},n.a.createElement("button",{className:"go-back-button"},"Go back to list")),n.a.createElement(G,null))};var W=function(){return n.a.createElement("div",null,n.a.createElement(o.c,null,n.a.createElement(o.a,{exact:!0,path:"/",component:s}),n.a.createElement(o.a,{exact:!0,path:"/add",component:J}),n.a.createElement(o.a,{exact:!0,path:"/edit",component:V}),n.a.createElement(o.a,{exact:!0,path:"/list",component:L})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(l.a,null,n.a.createElement(w,null,n.a.createElement(W,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.1b522210.chunk.js.map