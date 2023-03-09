import type { App } from "vue";

//UI components
import ProductCard from '@/components/Cards/ProductCard.vue';

export default {
  install(app : App): void {
    app.component("ProductCard", ProductCard)
  }
}
