//UI component
import ProductCard from "./components/Cards/ProductCard.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    //UI components
    ProductCard: typeof ProductCard;
  }
}
