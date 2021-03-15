<template>
  <v-app>
    <Header></Header>
    <Planques></Planques>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Planques from "./components/Planques";

export default {
  name: 'App',

  components: {
    Header,
    Planques
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
p{
  color: #8B8B8B;
}
h1{
  color: #000001;
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
.divider{
  height: 4px;
  width: 5vw;
  background: #F0F1F2;
}
.flexC{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
