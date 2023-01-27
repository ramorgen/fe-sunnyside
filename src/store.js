import { reactive } from "vue"
import { useWindowSize } from "@vueuse/core"
const { width, height } = useWindowSize()

const store = reactive({
   version: "1.0.00",
   wWidth: width,
   wHeight: height,
   testimonials: [
      {
         pic: "./image-emily.jpg",
         txt: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
         name: "Emily R.",
         job: "Marketing Director",
      },
      {
         pic: "./image-thomas.jpg",
         txt: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
         name: "Thomas S.",
         job: "Chief Operating Officer",
      },
      {
         pic: "./image-jennie.jpg",
         txt: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
         name: "Jennie F.",
         job: "Business Owner",
      },
   ],
})
export default store
