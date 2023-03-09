
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import API from '@/api/API';
import type { IProduct } from '@/types';

const productList = ref<IProduct[]>([])


onMounted(async () => {
  const productPromise = API.getProducts();

  await Promise.all([productPromise]).then(
    ([products]) => {
      productList.value = products;
    }
  )
})
</script>

<template>
  <ProductCard />
</template>

<style lang="scss">

</style>
