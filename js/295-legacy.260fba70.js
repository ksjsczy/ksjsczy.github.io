(self["webpackChunksupermall"]=self["webpackChunksupermall"]||[]).push([[295],{3482:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return bt}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"detail"}},[s("detail-nav-bar",{ref:"detailNav",staticClass:"detail-nav",on:{titleClick:t.titleClick}}),s("scroll",{ref:"scroll",staticClass:"content",attrs:{"probe-type":3,click:!0},on:{scroll:t.contentScroll}},[s("detail-swiper",{attrs:{"top-images":t.topImages}}),s("detail-base-info",{attrs:{goods:t.goods}}),s("detail-shop-info",{attrs:{shop:t.shop}}),s("detail-goods-info",{attrs:{detailInfo:t.detailInfo},on:{imageLoad:t.imageLoad}}),s("detail-param-info",{ref:"param",attrs:{paramInfo:t.paramInfo}}),s("detail-comment-info",{ref:"comment",attrs:{commentInfo:t.commentInfo}}),s("goods-list",{ref:"recommends",attrs:{goods:t.recommends}})],1),s("back-top",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"backTop",nativeOn:{click:function(e){return t.backClick.apply(null,arguments)}}}),s("detail-bottom-bar",{on:{addToCart:t.addToCart}})],1)},a=[],n=s(3019),o=s(466),r=s(9756),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("swiper",{attrs:{moveRatio:.05}},t._l(t.topImages,(function(t,e){return s("swiper-item",{key:e,staticClass:"swiper-item"},[s("img",{attrs:{src:t,alt:""}})])})),1)},c=[],d=s(4167),f={name:"DetailSwiper",props:{topImages:{type:Array,default:function(){return[]}}},components:{Swiper:d.k,SwiperItem:d.t}},m=f,u=s(1001),p=(0,u.Z)(m,l,c,!1,null,"446e0e17",null),h=p.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav-bar",[i("div",{staticClass:"back",attrs:{slot:"left"},on:{click:t.backClick},slot:"left"},[i("img",{attrs:{src:s(228),alt:""}})]),i("div",{staticClass:"title",attrs:{slot:"center"},slot:"center"},t._l(t.titles,(function(e,s){return i("div",{staticClass:"title-item",class:{active:t.currentIndex==s},on:{click:function(e){return t.titleClick(s)}}},[t._v(" "+t._s(e)+" ")])})),0)])],1)},_=[],g=s(180),C={name:"DetailNavBar",components:{NavBar:g.Z},data:function(){return{titles:["商品","参数","评论","推荐"],currentIndex:0}},methods:{titleClick:function(t){this.currentIndex=t,this.$emit("titleClick",t)},backClick:function(){this.$router.back()}}},b=C,I=(0,u.Z)(b,v,_,!1,null,"7a6e299f",null),y=I.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.goods).length?s("div",{staticClass:"base-info"},[s("div",{staticClass:"info-title"},[t._v(t._s(t.goods.title))]),s("div",{staticClass:"info-price"},[s("span",{staticClass:"n-price"},[t._v(t._s(t.goods.newPrice))]),s("span",{staticClass:"o-price"},[t._v(t._s(t.goods.oldPrice))]),t.goods.discount?s("span",{staticClass:"discount"},[t._v(t._s(t.goods.discount))]):t._e()]),s("div",{staticClass:"info-other"},[s("span",[t._v(t._s(t.goods.columns[0]))]),s("span",[t._v(t._s(t.goods.columns[1]))]),s("span",[t._v(t._s(t.goods.services[t.goods.services.length-1].name))])]),s("div",{staticClass:"info-service"},t._l(t.goods.services.length-1,(function(e){return s("span",{key:e,staticClass:"info-service-item"},[s("img",{attrs:{src:t.goods.services[e-1].icon}}),s("span",[t._v(t._s(t.goods.services[e-1].name))])])})),0)]):t._e()},w=[],$={name:"DetailBaseInfo",props:{goods:{type:Object,default:function(){return{}}}}},O=$,x=(0,u.Z)(O,k,w,!1,null,"8d4a6be2",null),D=x.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-info"},[s("div",{staticClass:"shop-top"},[s("img",{attrs:{src:t.shop.logo}}),s("span",{staticClass:"title"},[t._v(t._s(t.shop.name))])]),s("div",{staticClass:"shop-middle"},[s("div",{staticClass:"shop-middle-item shop-middle-left"},[s("div",{staticClass:"info-sells"},[s("div",{staticClass:"sells-count"},[t._v(" "+t._s(t._f("sellCountFilter")(t.shop.sells))+" ")]),s("div",{staticClass:"sells-text"},[t._v("总销量")])]),s("div",{staticClass:"info-goods"},[s("div",{staticClass:"goods-count"},[t._v(" "+t._s(t.shop.goodsCount)+" ")]),s("div",{staticClass:"goods-text"},[t._v("全部宝贝")])])]),s("div",{staticClass:"shop-middle-item shop-middle-right"},[s("table",t._l(t.shop.score,(function(e,i){return s("tr",{key:i},[s("td",[t._v(t._s(e.name))]),s("td",{staticClass:"score",class:{"score-better":e.isBetter}},[t._v(t._s(e.score))]),s("td",{staticClass:"better",class:{"better-more":e.isBetter}},[s("span",[t._v(t._s(e.isBetter?"高":"低"))])])])})),0)])]),t._m(0)])},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-bottom"},[s("div",{staticClass:"enter-shop"},[t._v("进店逛逛")])])}],T=(s(6977),{name:"DetailShopInfo",props:{shop:{type:Object,default:function(){return{}}}},filters:{sellCountFilter:function(t){return t<1e4?t:(t/1e4).toFixed(1)+"万"}}}),S=T,E=(0,u.Z)(S,j,P,!1,null,"2ae65805",null),Z=E.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.detailInfo).length?s("div",{staticClass:"goods-info"},[s("div",{staticClass:"info-desc clear-fix"},[s("div",{staticClass:"start"}),s("div",{staticClass:"desc"},[t._v(t._s(t.detailInfo.desc))]),s("div",{staticClass:"end"})]),s("div",{staticClass:"info-key"},[t._v(t._s(t.detailInfo.detailImage[0].key))]),s("div",{staticClass:"info-list"},t._l(t.detailInfo.detailImage[0].list,(function(e,i){return s("img",{key:i,attrs:{src:e,alt:""},on:{load:t.imgLoad}})})),0)]):t._e()},B=[],N={name:"DetailGoodsInfo",props:{detailInfo:{type:Object}},data:function(){return{counter:0,imagesLength:0}},methods:{imgLoad:function(){++this.counter===this.imagesLength&&this.$emit("imageLoad")}},watch:{detailInfo:function(){this.imagesLength=this.detailInfo.detailImage[0].list.length}}},Y=N,F=(0,u.Z)(Y,L,B,!1,null,"e07fd14c",null),G=F.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return 0!==Object.keys(t.paramInfo).length?s("div",{staticClass:"param-info"},[t._l(t.paramInfo.sizes,(function(e,i){return s("table",{key:i,staticClass:"info-size"},t._l(e,(function(e,i){return s("tr",{key:i},t._l(e,(function(e,i){return s("td",{key:i},[t._v(t._s(e))])})),0)})),0)})),s("table",{staticClass:"info-param"},t._l(t.paramInfo.infos,(function(e,i){return s("tr",[s("td",{staticClass:"info-param-key"},[t._v(t._s(e.key))]),s("td",{staticClass:"param-value"},[t._v(t._s(e.value))])])})),0),0!==t.paramInfo.image.length?s("div",{staticClass:"info-img"},[s("img",{attrs:{src:t.paramInfo.image,alt:""}})]):t._e()],2):t._e()},M=[],R={name:"DetailParamInfo",props:{paramInfo:{type:Object,default:function(){return{}}}}},W=R,A=(0,u.Z)(W,z,M,!1,null,"09a9ec91",null),q=A.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[0!==Object.keys(t.commentInfo).length?s("div",{staticClass:"comment-info"},[t._m(0),s("div",{staticClass:"info-user"},[s("img",{attrs:{src:t.commentInfo.user.avatar,alt:""}}),s("span",[t._v(t._s(t.commentInfo.user.uname))])]),s("div",{staticClass:"info-detail"},[s("p",[t._v(t._s(t.commentInfo.content))]),s("div",{staticClass:"info-other"},[s("span",{staticClass:"date"},[t._v(t._s(t._f("showDate")(t.commentInfo.created)))]),s("span",[t._v(t._s(t.commentInfo.style))])]),s("div",{staticClass:"info-imgs"},t._l(t.commentInfo.images,(function(t,e){return s("img",{attrs:{src:t}})})),0)])]):t._e()])},J=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"info-header"},[s("div",{staticClass:"header-title"},[t._v("用户评价")]),s("div",{staticClass:"header-more"},[t._v(" 更多 "),s("i",{staticClass:"arrow-right"},[t._v(">")])])])}],K=s(2815),Q={name:"DetailCommentInfo",props:{commentInfo:{type:Object}},filters:{showDate:function(t){var e=new Date(1e3*t);return(0,K.p)(e,"yyyy-MM-dd")}}},U=Q,V=(0,u.Z)(U,H,J,!1,null,"977e8fd8",null),X=V.exports,tt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-bar"},[t._m(0),s("div",{staticClass:"bar-item bar-right"},[s("div",{staticClass:"cart",on:{click:t.addToCart}},[t._v("加入购物车")]),s("div",{staticClass:"buy"},[t._v("购买")])])])},et=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bar-item bar-left"},[s("div",[s("i",{staticClass:"icon service"}),s("span",{staticClass:"text"},[t._v("客服")])]),s("div",[s("i",{staticClass:"icon shop"}),s("span",{staticClass:"text"},[t._v("店铺")])]),s("div",[s("i",{staticClass:"icon select"}),s("span",{staticClass:"text"},[t._v("收藏")])])])}],st={name:"DetailBottomBar",methods:{addToCart:function(){this.$emit("addToCart")}}},it=st,at=(0,u.Z)(it,tt,et,!1,null,"0b0bfb31",null),nt=at.exports,ot=s(2170),rt=s(4665);function lt(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function ct(t,e,s){return e&&lt(t.prototype,e),s&&lt(t,s),Object.defineProperty(t,"prototype",{writable:!1}),t}s(1703);function dt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}s(8309);var ft=s(2924);function mt(t){return(0,ft.W)({url:"/detail",params:{iid:t}})}var ut=ct((function t(e,s,i){dt(this,t),this.title=e.title,this.desc=e.desc,this.newPrice=e.price,this.oldPrice=e.oldPrice,this.discount=e.discountDesc,this.columns=s,this.services=i,this.realPrice=e.lowNowPrice})),pt=ct((function t(e){dt(this,t),this.logo=e.shopLogo,this.name=e.name,this.fans=e.cFans,this.sells=e.cSells,this.score=e.score,this.goodsCount=e.cGoods})),ht=ct((function t(e,s){dt(this,t),this.image=e.images?e.images[0]:"",this.infos=e.set,this.sizes=s.tables}));function vt(){return(0,ft.W)({url:"/recommend"})}var _t={name:"Detail",data:function(){return{iid:null,topImages:[],goods:{},shop:{},detailInfo:{},paramInfo:{},commentInfo:{},recommends:[],themeTopYs:[0,-500,-1e3,-1500],show:!1,message:""}},mixins:[ot.x,ot.s],components:{Scroll:o.Z,GoodsList:r.Z,DetailNavBar:y,DetailSwiper:h,DetailBaseInfo:D,DetailShopInfo:Z,DetailGoodsInfo:G,DetailParamInfo:q,DetailCommentInfo:X,DetailBottomBar:nt},created:function(){var t=this;this.iid=this.$route.params.iid,mt(this.iid).then((function(e){var s=e.data.result;t.topImages=s.itemInfo.topImages,t.goods=new ut(s.itemInfo,s.columns,s.shopInfo.services),t.shop=new pt(s.shopInfo),t.detailInfo=s.detailInfo,t.paramInfo=new ht(s.itemParams.info,s.itemParams.rule),0!==s.rate.cRate&&(t.commentInfo=s.rate.list[0]),t.$nextTick((function(){}))})),vt().then((function(e){t.recommends=e.data.data.list}))},mounted:function(){},destroyed:function(){this.$bus.$off("itemImageLoad",this.itemImageLoader),this.$toast.isShow=!1},methods:(0,n.Z)((0,n.Z)({},(0,rt.nv)(["addCart"])),{},{imageLoad:function(){this.$refs.scroll.refresh(),this.themeTopYs[1]=-this.$refs.param.$el.offsetTop,this.themeTopYs[2]=-this.$refs.comment.$el.offsetTop,this.themeTopYs[3]=-this.$refs.recommends.$el.offsetTop},titleClick:function(t){this.$refs.scroll.scrollTo(0,this.themeTopYs[t],500)},contentScroll:function(t){-t.y>=-this.themeTopYs[3]?this.$refs.detailNav.currentIndex=3:-t.y>=-this.themeTopYs[2]?this.$refs.detailNav.currentIndex=2:-t.y>=-this.themeTopYs[1]?this.$refs.detailNav.currentIndex=1:this.$refs.detailNav.currentIndex=0,this.isShow=-t.y>1e3},addToCart:function(){var t=this,e={image:this.topImages[0],title:this.goods.title,desc:this.goods.desc,price:this.goods.realPrice,iid:this.iid,count:1};this.addCart(e).then((function(e){t.$toast.show(e)}))}})},gt=_t,Ct=(0,u.Z)(gt,i,a,!1,null,"1b8ae20a",null),bt=Ct.exports},9337:function(t,e,s){var i=s(2109),a=s(9781),n=s(3887),o=s(5656),r=s(1236),l=s(6135);i({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,s,i=o(t),a=r.f,c=n(i),d={},f=0;while(c.length>f)s=a(i,e=c[f++]),void 0!==s&&l(d,e,s);return d}})},228:function(t,e,s){"use strict";t.exports=s.p+"img/back.2905f178.svg"},3019:function(t,e,s){"use strict";s.d(e,{Z:function(){return n}});s(7941),s(2526),s(7327),s(1539),s(5003),s(4747),s(9337);function i(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){i(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}}}]);
//# sourceMappingURL=295-legacy.260fba70.js.map