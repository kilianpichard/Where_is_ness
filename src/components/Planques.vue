<template>
  <span class="flex column pa-15">
    <span class="flex column">
      <h1>Ses Planques Favorites</h1>
      <div class="divider"></div>
    </span>
    <span class="flex">
      <span v-for="planque in items" :key="planque.title" class="item planque">
          <span v-if="planque.new" class="new">
             <v-img contain src="@/assets/picto-new.svg"></v-img>
          </span>
          <div class="img">
             <v-img :src="getImgUrl(planque.icon)" contain></v-img>
          </div>

            <h2 class="ma-3">{{ planque.title }}</h2>
            <p>{{ planque.desc }}</p>
            <v-btn class="btn ma-5" color="secondary" elevation="0">En savoir +</v-btn>
        </span>
      </span>
    </span>
</template>

<script>
export default {
  name: "Planques",
  data: () => ({
    items: [
      {
        title: 'Sous les Voitures',
        icon: 'picto-voiture.svg',
        desc: 'Ness adore la chaleur des moteurs et se glisse volontiers sous les roues des voitures garées sur le parking de l’agence',
        new: false
      },
      {
        title: 'Dans le piano',
        icon: 'picto-piano.svg',
        desc: 'Mélomane à ses heures perdues, Ness aime se réfugier dans le piano quand son humain préféré enflamment le dance floor\n',
        new: false
      },
      {
        title: 'Dans les plantes',
        icon: 'picto-plantes.svg',
        desc: 'Quoi de plus agréable que l’odeur de la terre fraîche, et le doux parfum des plantes pour ronronner en toute quiétude ?',
        new: true
      },
    ],
  }), methods: {
    getImgUrl(val) {
      return require('@/assets/' + val);
    },
  },
}
</script>

<style scoped>
.item {
  max-width: 20vw;
}

.planque {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
}

.img {
  width: 150px;
}

h2 {
  font-weight: normal;
}

p {
  width: 300px;
}

.new {
  position: absolute;
  top: 0;
  right: 50px;
  z-index: 1;
}
</style>