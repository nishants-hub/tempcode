"use strict";(self.webpackChunkconstruction_commercial_search_frontend=self.webpackChunkconstruction_commercial_search_frontend||[]).push([[4976],{37767:function(e,t,s){s.d(t,{A:function(){return o}});var n={props:{active:{required:!0,type:Boolean},eventName:{required:!0,type:String},preventClose:{required:!1,type:Boolean},customStyle:{required:!1,type:[String,Array],default:""},customBackground:{required:!1,type:String,default:""},fullScreen:{required:!1,type:String,default:""},customVerticalPadding:{required:!1,type:String,default:""},customHorizontalPadding:{required:!1,type:String,default:""},customPadding:{required:!1,type:String,default:""},customWidth:{required:!1,type:String,default:""},customHeight:{required:!1,type:String,default:""},customBorderRadius:{required:!1,type:String,default:""},customOverlay:{required:!1,type:String,default:"bg-bg-overlay"}},computed:{customClass(){return[this.widthClass,this.paddingClass,this.heightClass,this.roundedClass,this.backgroundClass]},widthClass(){let e="w-full nexus:w-[448px]";return this.customWidth&&(e=this.customWidth),e},heightClass(){let e="min-h-[268px]";return this.customHeight&&(e=`min-h-[268px] ${this.customHeight}`),"mobile"===this.fullScreen?e=this.customHeight?`min-h-[268px] h-[100dvh] ${this.customHeight}`:"min-h-[268px] h-[100dvh] nexus:h-auto":"nexus"===this.fullScreen?e=this.customHeight?`min-h-[268px] h-[100dvh] ${this.customHeight}`:"min-h-[268px] h-[100dvh] ipad:h-auto":"ipad"===this.fullScreen&&(e="min-h-[268px] h-[100dvh]"),e},paddingClass(){let e="py-spacing-200 nexus:py-spacing-250 ipad:py-spacing-300 px-spacing-200 nexus:px-spacing-250 ipad:px-spacing-300";return this.customPadding?e=this.customPadding:(this.customVerticalPadding||this.customHorizontalPadding)&&(e=`${this.customVerticalPadding} ${this.customHorizontalPadding}`),e},backgroundClass(){let e="bg-bg-neutral-default";return this.customBackground&&(e=this.customBackground),e},roundedClass(){let e="rounded-t-08 nexus:rounded-b-08";return"ipad"===this.fullScreen?e="":"nexus"===this.fullScreen?e="ipad:rounded-t-08 ipad:rounded-b-08":"mobile"===this.fullScreen?e="nexus:rounded-t-08 nexus:rounded-b-08":this.customBorderRadius&&(e=this.customBorderRadius),e}},watch:{active(e){e?(document.addEventListener("keyup",this.handleKeyUp),document.body.style.cssText="overflow:hidden"):(document.removeEventListener("keyup",this.handleKeyUp),document.body.style.cssText="")}},methods:{handleKeyUp(e){const t="Escape"===e?.key,s=document.getElementById(this.eventName);t&&this.active&&(this.closeModal(),document.removeEventListener("keyup",this.handleKeyUp)),this.active&&s||document.removeEventListener("keyup",this.handleKeyUp)},closeModal(){this.preventClose||(document.removeEventListener("keyup",this.handleKeyUp),this.$bus.$emit(this.eventName,!1))}},beforeDestroy(){document.body.style.cssText=""}},i=n,a=(0,s(81656).A)(i,(function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"fade"}},[e.active?t("div",{staticClass:"fixed inset-0 z-[9999] flex h-screen w-full items-center justify-center overflow-y-auto",class:e.customOverlay,attrs:{id:e.eventName},on:{click:function(t){return t.target!==t.currentTarget?null:e.closeModal()}}},[t("div",{staticClass:"fixed bottom-0 overflow-y-auto shadow-lg nexus:relative",class:e.customClass},[e._t("default")],2)]):e._e()])}),[],!1,null,null,null),o=a.exports},14976:function(e,t,s){s.r(t),s.d(t,{default:function(){return l}});var n=s(37767),i=s(77788),a=s(78275),o=s(32378),d={components:{Modal:n.A,GeneralForm:()=>s.e(6277).then(s.bind(s,76277)),FormInput:()=>s.e(6342).then(s.bind(s,96342))},data:()=>({showModal:!1,event:null,formData:{newEventDate:""},fieldValidations:{newEventDate:new i.s({type:"DATE",required:!0,minDate:(0,a.wZ)(1),maxDate:(0,a.wZ)(30)})},isFormSubmitting:!1}),mounted(){this.$bus.$on("change-event-date-modal",(e=>{e?.showModal?(this.showModal=e?.showModal,this.event=e?.event):(this.showModal=!1,this.event=null)}))},methods:{handleClose(){this.$bus.$emit("change-event-date-modal",!1)},async handleSubmit(){if(!this.$validateForm())return;this.isFormSubmitting=!0;const e=this.event?._id,t={newEventDate:this.formData.newEventDate},s=await o.A.patch(`/calendar/events/${e}`,t);s?.data?.success?(this.$toast.success(s?.data?.message),this.$bus.$emit("refetch-today-events"),this.handleClose()):this.$toast.error(s?.message),this.isFormSubmitting=!1}},beforeDestroy(){this.$bus.$off("change-event-date-modal")}},r=d,u=(0,s(81656).A)(r,(function(){var e=this,t=e._self._c;return t("Modal",{attrs:{active:e.showModal,"event-name":"change-event-date-modal","custom-padding":"p-spacing-0"}},[t("div",{staticClass:"flex h-full min-h-[400px] w-full flex-col"},[t("GeneralForm",{staticClass:"flex-1",attrs:{heading:"CHANGE EVENT DATE","sub-heading":"Enter the new event date","show-submit-button":!0,"submit-button-label":"Confirm","is-form-submitting":e.isFormSubmitting},on:{"close-pressed":e.handleClose,"form-submitted":e.handleSubmit},scopedSlots:e._u([{key:"form-body",fn:function(){return[t("FormInput",{ref:"newEventDate",staticClass:"mb-spacing-100",attrs:{label:"New Date","field-validations":e.fieldValidations?.newEventDate,"input-type":"date",inputId:"newEventDate"},model:{value:e.formData.newEventDate,callback:function(t){e.$set(e.formData,"newEventDate",t)},expression:"formData.newEventDate"}})]},proxy:!0}])})],1)])}),[],!1,null,null,null),l=u.exports}}]);