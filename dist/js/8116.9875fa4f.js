"use strict";(self.webpackChunkconstruction_commercial_search_frontend=self.webpackChunkconstruction_commercial_search_frontend||[]).push([[8116],{28116:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var a={name:"SelectableTreeView",components:{GeneralCheckbox:()=>n.e(9002).then(n.bind(n,39002))},props:{nodeObj:{type:Object,required:!0},level:{type:Number,default:0},index:{type:Number,required:!0},parentNumbering:{type:String},expandedTreeView:{type:Object,default:()=>({expand:!1})},searchItemName:{type:String,default:""},selectedProducts:{type:Array,required:!0}},data(){return{isExpanded:this.expandedTreeView?.expand,node:this.nodeObj}},mounted(){},computed:{getNumbering(){return this.parentNumbering?`${this.parentNumbering}${this.index+1}.`:this.index+1+"."},isProduct(){return"product"===this.node?.type},isCategory(){return"category"===this.node?.type},categoryHasChild(){return this.isCategory&&this.node?.commercialItems?.length>0}},watch:{nodeObj:{handler(){this.node=this.nodeObj},deep:!0,immediate:!0},expandedTreeView:{handler(e){this.isExpanded=e?.expand},deep:!0,immediate:!0}},methods:{async toggle(){this.isExpanded=!this.isExpanded},handleNodeClick(){this.isCategory&&this.node.commercialItems?.length>0&&this.toggle()},handleSelectProduct(e){this.$emit("select-product",e)}},beforeDestroy(){}},i=a,s=(0,n(81656).A)(i,(function(){var e=this,t=e._self._c;return t("div",{class:e.level>0?"pl-spacing-300":""},[t("div",{staticClass:"relative"},[t("div",{staticClass:"truncate py-spacing-50 text-[0.9375rem] text-body/m/relaxed/400 text-content-on-neutral-primary"},[t("span",{class:e.categoryHasChild||e.isProduct?"cursor-pointer":"",on:{click:e.handleNodeClick,contextmenu:function(t){return t.preventDefault(),e.handleRightClick.apply(null,arguments)}}},[e.categoryHasChild?t("span",{staticClass:"mr-spacing-50 inline-block cursor-pointer"},[e.isExpanded?t("i",{staticClass:"fa-solid fa-caret-down h-spacing-200 w-spacing-200 text-content-on-neutral-secondary"}):t("i",{staticClass:"fa-solid fa-caret-right h-spacing-200 w-spacing-200 text-content-on-neutral-secondary"})]):t("span",{staticClass:"mr-spacing-50 inline-block h-spacing-200 w-spacing-200"}),t("span",{staticClass:"mr-spacing-100 text-body/s/relaxed/500 text-content-on-neutral-tertiary"},[e._v(e._s(e.getNumbering))]),e.isProduct?t("i",{staticClass:"fa-brands fa-pinterest scale-[1.2] rounded-full bg-constant-neutral-white text-[0.9375rem] text-constant-status-error"}):e.isCategory&&e.isExpanded?t("i",{staticClass:"fa fa-folder-open text-[0.9375rem] text-yellow-500 dark:text-yellow-200"}):e.isCategory&&!e.isExpanded?t("i",{staticClass:"fa fa-folder text-[0.9375rem] text-yellow-500 dark:text-yellow-200"}):e._e()]),t("span",{staticClass:"pl-spacing-100",class:e.categoryHasChild||e.isProduct?"cursor-pointer":"",attrs:{title:e.node?.title},domProps:{innerHTML:e._s(e.$highlightMatch(e.node?.title,e.searchItemName))},on:{click:e.handleNodeClick,contextmenu:function(t){return t.preventDefault(),e.handleRightClick.apply(null,arguments)}}}),e.isProduct?t("GeneralCheckbox",{staticClass:"relative top-spacing-25 mx-spacing-150 inline-block",attrs:{selected:e.selectedProducts.some((t=>t?._id===e.node?._id))},nativeOn:{click:function(t){return e.handleSelectProduct({_id:e.node?._id,originalTitle:e.node?.title})}}}):e._e()],1)]),e.isCategory?t("div",[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isExpanded,expression:"isExpanded"}]},e._l(e.node?.commercialItems,(function(n,a){return t("div",{key:n?._id},[t("SelectableTreeView",{class:[1===e.level&&a===e.node?.commercialItems?.length-1?"mb-spacing-100":"mb-spacing-50"],attrs:{"node-obj":n,level:Number(e.level+1),index:a,"parent-numbering":e.getNumbering,"expanded-tree-view":e.expandedTreeView,"search-item-name":e.searchItemName,"selected-products":e.selectedProducts},on:{"select-product":e.handleSelectProduct}})],1)})),0)]):e._e()])}),[],!1,null,null,null),r=s.exports}}]);