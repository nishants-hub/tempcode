"use strict";(self.webpackChunkconstruction_commercial_search_frontend=self.webpackChunkconstruction_commercial_search_frontend||[]).push([[4104],{24104:function(t,e,n){n.r(e),n.d(e,{default:function(){return o}});var s={props:{company:{type:Object,required:!1,default:()=>({})}},computed:{getProducts(){let t=[];return this.company?.products&&(t=this.company?.products?.map((t=>({display_name:t?.productId?.title,_id:t?.productId?._id})))?.filter((t=>t?.display_name))),t}},components:{IconPlus:()=>n.e(531).then(n.bind(n,80531))},methods:{handleAddClick(){this.$bus.$emit("update-category-to-company-modal",{showModal:!0,companyId:this.company?._id,companyName:this.company?.companyName,products:this.getProducts})},goToProductPage(t){this.$bus.$emit("product-details-table-modal",{showModal:!0,productId:t})}}},c=s,a=(0,n(81656).A)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-spacing-100"},[e("div",{staticClass:"mb-spacing-100 flex items-center gap-spacing-100"},[e("h3",{staticClass:"text-body/l/relaxed/500 text-content-on-neutral-primary"},[t._v(" Products ")]),e("div",{staticClass:"flex cursor-pointer items-center justify-center",on:{click:function(e){return t.handleAddClick()}}},[e("IconPlus",{staticClass:"h-spacing-250 w-spacing-250 text-content-on-neutral-primary"})],1)]),e("p",{staticClass:"text-body/m/relaxed/400 text-content-on-neutral-secondary"},t._l(this.getProducts,(function(n,s){return e("span",{key:s},[s>0?e("span",{staticClass:"text-content-on-neutral-secondary"},[t._v(" | ")]):t._e(),e("span",{staticClass:"cursor-pointer hover:text-content-on-neutral-primary",on:{click:function(e){return t.goToProductPage(n?._id)}}},[t._v(t._s(n?.display_name))])])})),0)])}),[],!1,null,"5585ef90",null),o=a.exports}}]);