<template>
  <v-app>
    <Header></Header>
    <v-main>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";

export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;0,700;1,400&display=swap");

*{
  font-family: 'Montserrat', sans-serif;
}

.flex{
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
}
.btn{
  border-radius: 100px;
  color: white !important;
  font-weight: 600;
  text-transform: none;
}
</style>
