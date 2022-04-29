<template>
  <div class="flex flex-wrap justify-between align-baseline border-t border-b border-secondary-white border-opacity-10 py-20">
    <div class="flex space-x-6">
      <!-- <img src="../assets/images/cobus_coach_image.png" alt=""> -->
      <img class="w-8 h-8" src="../assets/images/class_overview_circle_image.png" alt="">
      <div class="flex flex-col space-y-4">
        <h1 class="text-2xl">Rugby Basics</h1>
        <h2 class="text-1xl">Taught by Cobus Reinach</h2>
        <h3 class="text-2md opacity-70 uppercase">6 Lessons - 3 hours, 27mins</h3>
        <div class="flex items-center space-x-2">
           <div class="text-primary-navy rounded-2xl bg-white flex justify-center items-center h-5 max-w-max px-2">{{this.snapshots.length}} Snapshots Available </div>
            <svg tooltip="hey" width="17px" height="17px" viewBox="0 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>E04BB7B1-6DD1-4722-9E0C-4A21A517B567</title>
                <defs>
                    <linearGradient x1="46.9200132%" y1="100%" x2="46.9200132%" y2="-52.564239%" id="linearGradient-1">
                        <stop stop-color="#E15B11" offset="0%"></stop>
                        <stop stop-color="#EB9845" offset="54%"></stop>
                        <stop stop-color="#EF7D3F" offset="100%"></stop>
                    </linearGradient>
                    <path d="M8.5,0.583333333 C4.13,0.583333333 0.583333333,4.13 0.583333333,8.5 C0.583333333,12.87 4.13,16.4166667 8.5,16.4166667 C12.87,16.4166667 16.4166667,12.87 16.4166667,8.5 C16.4166667,4.13 12.87,0.583333333 8.5,0.583333333 L8.5,0.583333333 Z M9.29166667,12.4583333 L7.70833333,12.4583333 L7.70833333,7.70833333 L9.29166667,7.70833333 L9.29166667,12.4583333 L9.29166667,12.4583333 Z M9.29166667,6.125 L7.70833333,6.125 L7.70833333,4.54166667 L9.29166667,4.54166667 L9.29166667,6.125 L9.29166667,6.125 Z" id="path-2"></path>
                </defs>
                <g id="Desktop-UI" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Class-Overview" transform="translate(-513.000000, -417.000000)">
                        <g id="class_details_i_icon" transform="translate(513.000000, 417.000000)">
                            <mask id="mask-3" fill="white">
                                <use xlink:href="#path-2"></use>
                            </mask>
                            <use id="Mask" fill="url(#linearGradient-1)" fill-rule="nonzero" xlink:href="#path-2"></use>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between">
      <div class="flex items-center space-x-6 justify-end">
         <h2 class="text-1xl">R1550.00</h2>
         <Button>Add to Cart</Button>
      </div>
      <div class="flex space-x-4">
        <div v-for="(tag, index) in tags" :key="index">
          <div class="text-white rounded-2xl flex justify-center items-center h-5 px-4 border text-2md">{{tag.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Button from '../components/Button.vue'
export default {
  name: 'Description',
  components:{
    Button
  },
  data(){
    return{
      tags: [
        {desc: "Basic Skills"},
        {desc: "Coaching"},
        {desc: "Techniques"},
      ],
      snapshots: [
        {
          id: 1,
          title: 'Snapshot 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          date: '2020-05-01',
          time: '10:00',
          location: 'Rugby Field',
          price: '$10',
          image: '../assets/images/class_overview_circle_image.png',
        },
        {
          id: 2,
          title: 'Snapshot 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          date: '2020-05-01',
          time: '10:00',
          location: 'Rugby Field',
          price: '$10',
          image: '../assets/images/class_overview_circle_image.png',
        },
        {
          id: 3,
          title: 'Snapshot 3',
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          date: '2020-05-01',
          time: '10:00',
          location: 'Rugby Field',
          price: '$10',
          image: '../assets/images/class_overview_circle_image.png',
        }
      ]
    }
  }
}
</script>
