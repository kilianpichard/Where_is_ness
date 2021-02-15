<template>
  <div
      class="appBar"
      color="back"
      flat>

    <span class="flex header">
      <h1>Where is Ness ?</h1>

      <span class="nav">
         <v-btn class="btn flat ma-1" color="back" elevation="0">Ces Planques</v-btn>
         <v-btn class="btn ma-1" color="primary" elevation="0">Contact</v-btn>
      </span>
    </span>
    <span class="explications flex mt-4 mb-16">
      <span class="pr-4">
         <v-img contain src="@/assets/ness.svg"></v-img>
      </span>
      <span>
        <h1>OMG !!</h1>
        <h1>Le chat de l'agence a disparu</h1>
        <p>Habituée à réclamer des câlins ou des croquettes auprès de
         ses humains préférés. Ce matin Ness le chat de l’agence été aux abonnés absents.
          Elle a sûrement passé la nuit dehors,mais toute l’équipe s’inquiète.</p>
        <h3 class="pb-4">AIDEZ-NOUS À LA RETROUVER</h3>
        <v-btn class="btn" color="primary" elevation="0">Contact</v-btn>
      </span>
    </span>
  </div>
</template>

<script>
export default {

  name: "header",
}
</script>

<style scoped>
.appBar {
  padding: 20px;
  background: #F6F7F8 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flat {
  color: #8B8B8B !important;
}

.explications {
  justify-content: center;
}

p {
  max-width: 400px;
}

.header {
  max-width: 80vw;
}
</style>