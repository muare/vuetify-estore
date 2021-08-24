<template>
  <div>
    <Header />
    <PopularProducts />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import PopularProducts from "../components/home/PopularProducts";

export default {
  components: {
    Header,
    Footer,
    PopularProducts,
  },
};
</script>