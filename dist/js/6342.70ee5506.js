"use strict";(self.webpackChunkconstruction_commercial_search_frontend=self.webpackChunkconstruction_commercial_search_frontend||[]).push([[6342],{96342:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var i={props:{label:{type:String,required:!0},value:{type:[String,Number],required:!1},inputId:{type:String,default:"input-field"},inputType:{type:String,default:"text"},placeholder:{type:String,required:!1},autocomplete:{type:String,default:"off"},isRequired:{type:Boolean,default:!1},autofocus:{type:Boolean,required:!1,default:!1},min:{type:Number,required:!1},max:{type:Number,required:!1},minLength:{type:Number,required:!1},maxLength:{type:Number,required:!1},multiline:{type:Boolean,required:!1,default:!1},rows:{type:Number,default:5,required:!1},suggestions:{type:Array,default:()=>[]},isSuggestionsFetching:{type:Boolean,required:!1,default:!1},preventVModel:{type:Boolean,required:!1,default:!1},clearButton:{type:Boolean,required:!1,default:!1},verticalPadding:{type:String,default:"py-spacing-150",required:!1},showError:{type:Boolean,default:!0,required:!1},fieldValidations:{type:Object,default:null,required:!1},trim:{type:Boolean,default:!0},order:{type:Number,default:0},checkAvailability:{type:Boolean,required:!1,default:!1},isAvailable:{type:Boolean,required:!1,default:!0},notAvailableErrorMessage:{type:String,default:"",required:!1},checkingAvailability:{type:Boolean,default:!1,required:!1}},components:{IconCalendar:()=>n.e(8099).then(n.bind(n,8099)),IconX:()=>n.e(6847).then(n.bind(n,96847)),IconAlertTriangle:()=>n.e(5677).then(n.bind(n,65677)),IconPlus:()=>n.e(531).then(n.bind(n,80531)),IconEye:()=>n.e(2757).then(n.bind(n,72757)),IconCheck:()=>n.e(9496).then(n.bind(n,69496)),IconEyeOff:()=>n.e(7469).then(n.bind(n,37469)),GeneralSkeleton:()=>n.e(2174).then(n.bind(n,2174)),IconLoader2:()=>n.e(4242).then(n.bind(n,94242))},data(){return{highlightedIndex:-1,errorMessage:"",passwordType:this.inputType}},watch:{isAvailable:{handler(e){this.checkAvailability&&(!e&&this.notAvailableErrorMessage?this.errorMessage=this.notAvailableErrorMessage:this.errorMessage="")},immediate:!0}},methods:{handleInput(e){const t=e?.target?.value;if("phoneNumber"!==this.inputType)this.$emit("input",t),"searchable-input"===this.inputType&&(this.$emit("fetch-suggestions",t),this.highlightedIndex=-1);else{const n=this.formatPhoneNumber(t,e.target);this.$emit("input",n)}},formatPhoneNumber(e,t){let n=t?.selectionStart;const i=e?.replace(/\D/g,"");let s="+0000 000 00 00 000".split(""),a=0;for(let e=0;e<s?.length;e++)"0"===s[e]&&a<i?.length&&(s[e]=i[a++]);const r=s.join("");n=Math.max(n,1);const o=this.calculateCursorOffset(e,r,n);return t.value=r,t.setSelectionRange(n+o,n+o),r},calculateCursorOffset(e,t,n){let i=0;for(let s=0;s<n;s++)e[s]!==t[s]&&i++;return i},changePasswordType(e){this.passwordType=e},selectSuggestion(e){this.isSuggestionsFetching||(this.preventVModel||this.$emit("input",e?.originalTitle||e?.display_name),this.$emit("set-suggestion",e),this.$emit("reset-suggestions"),this.highlightedIndex=-1,this.$emit("enter-pressed"))},navigateSuggestions(e){"searchable-input"===this.inputType&&0!==this.suggestions?.length&&(this.highlightedIndex=(this.highlightedIndex+e+this.suggestions.length)%this.suggestions.length,this.$nextTick((()=>{const e=this.$refs.suggestionRefs?.[this.highlightedIndex];e&&e.scrollIntoView({behavior:"smooth",block:"nearest"})})))},selectHighlightedSuggestion(){this.highlightedIndex>=0&&this.selectSuggestion(this.suggestions[this.highlightedIndex])},handleBlur(){return this.trim&&"number"!==this.inputType&&this.value&&this.$emit("input",this.value?.trim()),"phoneNumber"===this.inputType&&this.value.length<19&&this.$emit("input","+0000 000 00 00 000"),this.validate(!0),this.$emit("blur"),"searchable-input"===this.inputType&&(this.$emit("reset-suggestions",!0),this.highlightedIndex=-1),!0},handleFocus(){return"phoneNumber"===this.inputType&&(this.value.length<19&&this.$emit("input","+0000 000 00 00 000"),setTimeout((()=>{"+0000 000 00 00 000"===this.value&&this.$refs.inputField.setSelectionRange(1,1)}),0)),this.$emit("focus"),this.errorMessage="",!0},handleEnterKey(){"searchable-input"===this.inputType&&this.selectHighlightedSuggestion(),this.$emit("enter-pressed")},handleClearButtonAction(){this.$emit("input",""),this.$emit("clear-button-press"),"searchable-input"===this.inputType&&(this.$emit("clear-suggestions",""),this.highlightedIndex=-1)},handleAddToArray(){this.$emit("add-item-to-array")},validate(e){if(!this.fieldValidations)return!0;let t=this.fieldValidations?.validate(this.value);return this.checkAvailability&&!this.isAvailable&&(t=this.notAvailableErrorMessage),!t||(this.errorMessage=t,e&&this.scrollToComponent(),!1)},scrollToComponent(){this.multiline?this.$refs.textAreaField?.scrollIntoView({behavior:"smooth",block:"center"}):this.$refs.inputField?.scrollIntoView({behavior:"smooth",block:"center"})}}},s=i,a=(0,n(81656).A)(s,(function(){var e=this,t=e._self._c;return t("div",{ref:"inputWrapper",staticClass:"relative w-full"},[t("div",{staticClass:"relative flex items-center rounded-08 border border-solid",class:e.errorMessage?"border-constant-status-error text-constant-status-error":"border-stroke-bold text-content-on-neutral-secondary focus-within:border-constant-brand-primary focus-within:text-constant-brand-primary"},[e.multiline?t("textarea",{ref:"textAreaField",staticClass:"floating-form-field block w-full appearance-none bg-transparent px-spacing-150 text-left text-body/m/relaxed/500 text-content-on-neutral-primary antialiased focus:outline-none ipad:px-spacing-200 ipad:text-body/m/relaxed/500",class:e.verticalPadding,attrs:{autofocus:e.autofocus,id:e.inputId,required:e.isRequired,minlength:e.minLength,maxlength:e.maxLength,name:e.inputId,placeholder:e.placeholder,rows:e.rows},domProps:{value:e.value},on:{input:e.handleInput,focus:e.handleFocus,blur:e.handleBlur}}):t("input",{ref:"inputField",staticClass:"floating-form-field block w-full appearance-none bg-transparent px-spacing-150 text-left text-body/m/relaxed/500 text-content-on-neutral-primary antialiased focus:outline-none ipad:px-spacing-200 ipad:text-body/m/relaxed/500",class:e.verticalPadding,attrs:{autofocus:e.autofocus,id:e.inputId,type:e.passwordType||e.inputType,placeholder:"array"===e.inputType?e.placeholder:"",autocomplete:e.autocomplete,required:"date"===e.inputType||e.isRequired,min:e.min,max:e.max,minlength:e.minLength,maxlength:e.maxLength,name:e.inputId},domProps:{value:e.value},on:{input:e.handleInput,focus:e.handleFocus,blur:e.handleBlur,keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.navigateSuggestions(1))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.navigateSuggestions(-1))}],keypress:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.handleEnterKey.apply(null,arguments))}}}),t("label",{staticClass:"floating-form-field-label absolute left-spacing-0 top-spacing-0 origin-0 px-spacing-150 text-current duration-300 ipad:px-spacing-200",class:e.verticalPadding,attrs:{for:e.inputId}},[e._v(" "+e._s(e.label)+" ")]),"date"===e.inputType?t("div",{staticClass:"absolute bottom-spacing-150 right-spacing-200 top-spacing-150 flex items-center justify-end"},[t("IconCalendar",{staticClass:"h-spacing-200 w-spacing-200 text-content-on-neutral-tertiary hover:text-content-on-neutral-secondary"})],1):e._e(),"password"===e.inputType?t("div",{staticClass:"flex w-spacing-400 items-center justify-start"},[t("IconEye",{directives:[{name:"show",rawName:"v-show",value:"password"===e.passwordType,expression:"passwordType === 'password'"}],staticClass:"h-spacing-200 w-spacing-200 cursor-pointer text-content-on-neutral-tertiary hover:text-content-on-neutral-secondary",nativeOn:{click:function(t){return e.changePasswordType("text")}}}),t("IconEyeOff",{directives:[{name:"show",rawName:"v-show",value:"text"===e.passwordType,expression:"passwordType === 'text'"}],staticClass:"h-spacing-200 w-spacing-200 cursor-pointer text-content-on-neutral-tertiary hover:text-content-on-neutral-secondary",nativeOn:{click:function(t){return e.changePasswordType("password")}}})],1):e._e(),e.checkAvailability&&e.value?t("div",{staticClass:"flex w-spacing-400 items-center justify-start"},[e.checkingAvailability?t("IconLoader2",{staticClass:"h-spacing-200 w-spacing-200 animate-spin text-constant-brand-primary"}):e.isAvailable?t("IconCheck",{staticClass:"h-spacing-200 w-spacing-200 rounded-full border border-constant-status-success p-spacing-25 text-constant-status-success"}):t("IconAlertTriangle",{staticClass:"h-spacing-200 w-spacing-200 text-constant-status-error"})],1):e._e(),"array"===e.inputType?t("div",{staticClass:"absolute bottom-spacing-200 right-spacing-200 top-spacing-200 flex items-center justify-end"},[t("div",{staticClass:"flex h-spacing-300 w-spacing-300 cursor-pointer items-center justify-center rounded-full bg-constant-brand-primary hover:bg-hover-constant-brand-primary",on:{click:function(t){return e.handleAddToArray()}}},[t("IconPlus",{staticClass:"h-spacing-250 w-spacing-250 text-content-on-neutral-primary"})],1)]):e._e(),e.clearButton&&""!==e.value?t("div",{staticClass:"absolute bottom-spacing-200 right-spacing-200 top-spacing-200 flex cursor-pointer items-center justify-end",on:{click:e.handleClearButtonAction}},[t("IconX",{staticClass:"h-spacing-250 w-spacing-250 text-content-on-neutral-tertiary hover:text-content-on-neutral-secondary"})],1):e._e()]),"searchable-input"===e.inputType&&e.suggestions?.length||e.isSuggestionsFetching?t("div",{staticClass:"absolute left-spacing-0 right-spacing-0 z-[101] mt-spacing-25 max-h-[250px] w-full overflow-y-auto rounded-08 bg-bg-neutral-default shadow-card"},[e.isSuggestionsFetching?e._l(new Array(4).fill(""),(function(e,n){return t("div",{key:n,staticClass:"border-b border-stroke-bold bg-bg-neutral-raised px-spacing-150 py-spacing-150"},[t("GeneralSkeleton",{staticClass:"h-spacing-250 w-full",attrs:{skeletonBackgroundColor:"bg-bg-neutral-disabled"}})],1)})):e._l(e.suggestions,(function(n,i){return t("div",{key:i,ref:"suggestionRefs",refInFor:!0,staticClass:"cursor-pointer border-b border-stroke-bold px-spacing-150 py-spacing-150 hover:bg-bg-neutral-disabled",class:i===e.highlightedIndex?"bg-bg-neutral-disabled":"bg-bg-neutral-raised",on:{mousedown:function(t){return t.preventDefault(),e.selectSuggestion(n)}}},[n?.tree_view?t("div",e._l(n?.path,(function(i,s){return t("div",{key:s,staticClass:"flex flex-col gap-spacing-50"},[t("p",{staticClass:"relative mt-spacing-25 text-body/m/relaxed/400",class:s===n?.path?.length-1?"text-content-on-neutral-primary":"text-content-on-neutral-secondary"},[t("span",{staticClass:"opacity-0"},[e._v(e._s("-----".repeat(s)))]),t("span",{staticClass:"relative -top-[3px] inline-block h-spacing-250 w-spacing-250 min-w-spacing-250 rounded-bl-08 border-b border-l border-content-on-neutral-secondary"}),t("span",s===n?.path?.length-1?{domProps:{innerHTML:e._s(e.$highlightMatch(n?.path[n?.path?.length-1],e.value))}}:[e._v(e._s(i))])])])})),0):n?.is_html&&n?.htmlContent?t("p",{staticClass:"text-body/m/relaxed/400 text-content-on-neutral-primary",domProps:{innerHTML:e._s(n?.htmlContent)}}):n?.is_html?e._e():t("p",{staticClass:"text-body/m/relaxed/400 text-content-on-neutral-primary"},[e._v(" "+e._s(n?.display_name)+" ")])])}))],2):e._e(),e.showError?t("p",{staticClass:"mt-spacing-50 min-h-spacing-200 text-left text-body/s/relaxed/400 text-constant-status-error"},[e._v(" "+e._s(e.errorMessage?e.errorMessage:"")+" ")]):e._e()])}),[],!1,null,"7ab71365",null),r=a.exports}}]);