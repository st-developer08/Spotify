import Swiper from "swiper";
import "swiper/css";
import { Mousewheel } from "swiper/modules";

export const swiper = new Swiper(".mySwiper", {
  modules: [Mousewheel],  
  slidesPerView: "auto",  
  spaceBetween: 10,      
  freeMode: true,        
  mousewheel: true,      
});
