<template>
  <div class="w-full bg-primary-navy flex overflow-y-hidden space-x-4 py-4">
    <div v-for="(coach, index) in coaches" :key="index">
      <div class="bg-white w-140 h-160 rounded-lg relative overflow-y-hidden">
        <transition name="slideup" mode="out-in">
          <div v-if="modalStatus === 'cart' " class="bg-gradient-to-t from-vivid-orange via-primary-orange to-bright-orange w-full absolute top-0 h-71 flex items-center justify-center rounded-t-lg">
            <p class="text-sm">You have already purchased this class.</p>
          </div>
        </transition>
        <img src="../../assets/images/cards/masterclass_card_image.png" alt="masterclass__snap">
        <div class="flex flex-col space-y-4 p-4">
           <h4 class="text-1lg text-primary-navy">{{ coach.name}}</h4>
            <p class="text-2md text-primary-navy">Tackling and Game Tactics Lorem ipsum dolor Game Tactics Lorem ipsum dolor</p>
            <p class="text-9md text-primary-navy font-light border-t border-primary-gray pt-4">Lorem ipsum dolor sit amet, secte adipiscing elit. Curabir ipsum dolor sit Curabir ipsum dolor ametconsequat…</p>
            <div class="w-full flex justify-between">
              <button  class="bg-gradient-to-t from-primary-blue-light to-primary-navy rounded-full text-white px-4 w-123 h-200 text-4md">
                More Details
              </button>
              <svg v-if="cartIcon" @click="checkPurchased" class="cursor-pointer" width="38px" height="38px" viewBox="0 0 38 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

              <defs>
                <linearGradient x1="46.9200132%" y1="100%" x2="46.9200132%" y2="-52.564239%" id="linearGradient-1">
                <stop stop-color="#E15B11" offset="0%"></stop>
                <stop stop-color="#EB9845" offset="54%"></stop>
                <stop stop-color="#EF7D3F" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g id="Components-Guide" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Rugby-Masters---Components-Guide" transform="translate(-126.000000, -3242.000000)">
                <g id="home_cart_icon_circle" transform="translate(126.000000, 3242.000000)">
                  <circle id="Oval" fill="url(#linearGradient-1)" fill-rule="nonzero" cx="19" cy="19" r="19"></circle>
                  <g id="gg-shopping-cart" transform="translate(10.000000, 11.000000)" fill="#FFFFFF">
                      <path d="M3.833328,0 L0,0 L0,1.6 L2.57472,1.6 L4.78976,11.74208 L4.8,11.74208 L4.8,12 L15.2,12 L15.2,11.80152 L16.95456,4.07276 L17.22464,3.2 L4.52416,3.2 L4.06788,1.110816 L3.833328,0 Z M15.18952,4.8 L4.8736,4.8 L6.096648,10.4 L13.91824,10.4 L15.18952,4.8 Z" id="Shape"></path>
                      <path d="M7.2,16 C8.08368,16 8.8,15.28368 8.8,14.4 C8.8,13.51632 8.08368,12.8 7.2,12.8 C6.316344,12.8 5.6,13.51632 5.6,14.4 C5.6,15.28368 6.316344,16 7.2,16 Z" id="Path" fill-rule="nonzero"></path>
                      <path d="M14.4,14.4 C14.4,15.28368 13.68368,16 12.8,16 C11.91632,16 11.2,15.28368 11.2,14.4 C11.2,13.51632 11.91632,12.8 12.8,12.8 C13.68368,12.8 14.4,13.51632 14.4,14.4 Z" id="Path" fill-rule="nonzero"></path>
                  </g>
                </g>
                </g>
              </g>
              </svg>
            </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
 name: 'smallcard',
 methods: {
   checkPurchased() {
      this.$store.commit('toggleModalCart')
   }
 },
 computed:{
    coaches(){
      return this.$store.state.coaches;
    },
    modalStatus(){
      return this.$store.state.modalOpen.status;
    },
    cartIcon(){
      return this.$store.state.cart.cartIcon;
    },
 }
}
</script>
