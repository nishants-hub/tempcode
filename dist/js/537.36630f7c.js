"use strict";(self.webpackChunkconstruction_commercial_search_frontend=self.webpackChunkconstruction_commercial_search_frontend||[]).push([[537],{48278:function(a,t,e){e.r(t),e.d(t,{default:function(){return l}});var r=(e(44114),e(66886)),s=e.n(r),n=e(91943),i={props:{markersData:{type:Array,default:()=>[]},mapContainerId:{type:String,required:!0}},data:()=>({map:null,markers:[],lines:[],userLocation:[]}),watch:{markersData(){this.map&&this.updateMapMarkers()}},async mounted(){this.mapContainerId&&await this.initMap()},methods:{async initMap(){try{this.map=(0,n.Ls)(this.mapContainerId),this.userLocation=await(0,n.Lu)(),s().marker(this.userLocation).addTo(this.map).bindPopup('<div class="text-content-on-neutral-primary text-body/l/relaxed/500 bg-bg-neutral-raised w-full h-full font-sans">You are here</div>').openPopup(),this.updateMapMarkers()}catch(a){}},async updateMapMarkers(){this.markers.forEach((a=>this.map.removeLayer(a))),this.lines.forEach((a=>this.map.removeLayer(a))),this.markers=[],this.lines=[];for(const a of this.markersData)if(a.lat&&a.long){const t=[a.lat,a.long],e=s().marker(t).addTo(this.map);let r=0;if(this.userLocation?.length){r=await(0,n.d)(t,this.userLocation);const a=s().polyline([this.userLocation,t],{color:"var(--constant-brand-primary)"}).addTo(this.map);this.lines.push(a)}e.bindPopup(`<div class="text-content-on-neutral-primary text-body/l/relaxed/500 bg-bg-neutral-raised w-full h-full font-sans"><b>${a.companyName||"Name Unavailable"}</b>\n            <br/>Distance: ${r.toFixed(2)} km\n            <br/>Location: ${a.location||"N/A"}</div>`),this.markers.push(e)}if(this.markers.length>0){const a=new(s().featureGroup)(this.markers);this.map.fitBounds(a.getBounds())}}},beforeDestroy(){this.map&&(this.map.off(),this.map.remove())}},o=i,l=(0,e(81656).A)(o,(function(){return(0,this._self._c)("div",{staticClass:"h-full min-h-[90dvh] w-full rounded-12 shadow-card",attrs:{id:this.mapContainerId}})}),[],!1,null,null,null).exports}}]);