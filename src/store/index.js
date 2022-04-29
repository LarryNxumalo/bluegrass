import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userAuth: {
      isLoggedIn: false,
      user: {
        id: '1',
        name: 'Larry Doe',
        email: 'tlnxumalo@gmail.com',
        password: 'password',
        role: 'reader',
      },
    },
    modalOpen: {
      status: '',
      backdrop: false,
    },
    cart: {
      cartIcon: true,
      items: [
        {
          name: 'Cobus Reinach',
          subtitle: 'Professional Rugby Union Player',
          image: '../assets/images/cobus_coach_image.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat in elit eget malesuada. Aenean laoreet sem vel sollicitudin dolor sit amet, consectetur adipiscing elit. Quisque condimentum dui eget lacinia pellentesque. Nulla rhoncus at est ac sollicitudin. Sed quis egestas sapien. Nam dignissim.',
          videos: [
            {
              id: 'acPEMmW9rz8',
              purchased: true,
              playing: false,
              volume: 0.5,
              duration: 1,
              currentTime: 42,
              fullscreen: false,
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat in elit eget malesuada. Aenean laoreet sem vel sollicitudin dolor sit amet, consectetur adipiscing elit. Quisque condimentum dui eget lacinia pellentesque. Nulla rhoncus at est ac sollicitudin. Sed quis egestas sapien. Nam dignissim posuere rutrum. Nunc suscipit posuere felis eu maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
            },
            {
              id: 'acPEMmW9rz9',
              purchased: false,
              playing: false,
              volume: 0.5,
              duration: 1,
              currentTime: 42,
              fullscreen: false,
              description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat in elit eget malesuada. Aenean laoreet sem vel sollicitudin dolor sit amet, consectetur adipiscing elit. Quisque condimentum dui eget lacinia pellentesque. Nulla rhoncus at est ac sollicitudin. Sed quis egestas sapien. Nam dignissim posuere rutrum. Nunc suscipit posuere felis eu maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
            },
          ],
        },
      ],
      total: 0,
    },
    coaches: [
    {
      name: 'Cobus Reinach',
      subtitle: 'Professional Rugby Union Player',
      image: '../assets/images/cobus_coach_image.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat in elit eget malesuada. Aenean laoreet sem vel sollicitudin dolor sit amet, consectetur adipiscing elit. Quisque condimentum dui eget lacinia pellentesque. Nulla rhoncus at est ac sollicitudin. Sed quis egestas sapien. Nam dignissim.',
      videos: [
        {
          id: 'acPEMmW9rz8',
          purchased: true,
          playing: false,
          volume: 0.5,
          duration: 1,
          currentTime: 42,
          fullscreen: false,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat in elit eget malesuada. Aenean laoreet sem vel sollicitudin dolor sit amet, consectetur adipiscing elit. Quisque condimentum dui eget lacinia pellentesque. Nulla rhoncus at est ac sollicitudin. Sed quis egestas sapien. Nam dignissim posuere rutrum. Nunc suscipit posuere felis eu maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
        },
        {
          id: 'acPEMmW9rz9',
          purchased: false,
          playing: false,
          volume: 0.5,
          duration: 1,
          currentTime: 42,
          fullscreen: false,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat in elit eget malesuada. Aenean laoreet sem vel sollicitudin dolor sit amet, consectetur adipiscing elit. Quisque condimentum dui eget lacinia pellentesque. Nulla rhoncus at est ac sollicitudin. Sed quis egestas sapien. Nam dignissim posuere rutrum. Nunc suscipit posuere felis eu maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
        },
      ],
    },
    {
      name: 'Siya Kolisi',
      subtitle: 'Professional Rugby Union Player',
      image: '../assets/images/cobus_coach_image.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat in elit eget malesuada. Aenean laoreet sem vel sollicitudin dolor sit amet, consectetur adipiscing elit. Quisque condimentum dui eget lacinia pellentesque. Nulla rhoncus at est ac sollicitudin. Sed quis egestas sapien. Nam dignissim.',
      videos: [
        {
          id: 'acPEMmW9rz8',
          purchased: true,
          playing: false,
          volume: 0.5,
          duration: 1,
          currentTime: 42,
          fullscreen: false,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat in elit eget malesuada. Aenean laoreet sem vel sollicitudin dolor sit amet, consectetur adipiscing elit. Quisque condimentum dui eget lacinia pellentesque. Nulla rhoncus at est ac sollicitudin. Sed quis egestas sapien. Nam dignissim posuere rutrum. Nunc suscipit posuere felis eu maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
        },
        {
          id: 'acPEMmW9rz9',
          purchased: true,
          playing: false,
          volume: 0.5,
          duration: 1,
          currentTime: 42,
          fullscreen: false,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat in elit eget malesuada. Aenean laoreet sem vel sollicitudin dolor sit amet, consectetur adipiscing elit. Quisque condimentum dui eget lacinia pellentesque. Nulla rhoncus at est ac sollicitudin. Sed quis egestas sapien. Nam dignissim posuere rutrum. Nunc suscipit posuere felis eu maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra.',
        },
      ],
    },

  ]
  },
  mutations: {
    toggleModalB (state) {
      // mutate state
      if(state.modalOpen.backdrop === false && state.modalOpen.status === '') {
        state.modalOpen.status = ''
        state.modalOpen.backdrop = false
      } else {
        state.modalOpen.status = ''
        state.modalOpen.backdrop = true
      }
    },
    toggleModalT (state) {
      // mutate state
      if(state.modalOpen.status === '') {
        state.modalOpen.status = 'toast'
        state.modalOpen.backdrop = true
        setTimeout(() => {
          state.modalOpen.status = ''
          state.modalOpen.backdrop = false
        }
        , 2000)
      }
    },
    toggleModalR (state) {
      // mutate state
      if(state.modalOpen.status === '') {
        state.modalOpen.status = 'removal'
         state.modalOpen.backdrop = true
      } else {
        state.modalOpen.status = ''
        state.modalOpen.backdrop = false
      }
    },
    toggleModalCart (state) {
      if(state.modalOpen.status === '' ) {
        state.cart.cartIcon = false
        state.modalOpen.status = 'cart'
        setTimeout(() => {
          state.modalOpen.status = ''
          state.modalOpen.backdrop = false
          state.cart.cartIcon = true
        }
        , 2000)
      }
      // mutate state
     //loop through coaches and check if purchased

      // state.coaches.forEach(coach => {
      //   if(coach.videos[0].purchased === true && state.modalOpen.status === '') {
      //     console.log(coach.videos[0].purchased, 'ppp')

      //     state.modalOpen.status = 'cart'
      //   state.modalOpen.backdrop = false

      //   } else {
      //     state.modalOpen.status = ''
      //   }
      // }
      // )

    },
  },
  actions: {
    toggleModalB(context){
      context.commit('toggleModalB');
    },
    toggleModalT(context){
      context.commit('toggleModalT');
    },
    toggleModalR(context){
      context.commit('toggleModalR');
    },
    toggleModalCart(context){
      context.commit('toggleModalCart');
    },
  },
  modules: {
  },
});
