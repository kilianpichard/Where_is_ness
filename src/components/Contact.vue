<template>
  <span class="flex column pa-15 back">
    <span class="flex column">
      <h1>Vous pensez l’avoir retrouver ?</h1>
      <p class="ma-5">Merci de nous contacter</p>
      <div class="divider"></div>
    </span>
    <span class="form ma-5">
      <span>
      <input
          class="field"
          placeholder="Nom"
      ><input
          class="field"
          placeholder="Prénom"
      ></span>
      <span>
       <input
           class="field"
           placeholder="Téléphone"
       >
        <select id="planque-select" name="planque">
            <option disabled selected value="">Indiquer sa planque</option>
            <option value="voiture">Sous les voitures</option>
            <option value="piano">Dans le piano</option>
            <option value="plantes">Dans les plantes</option>
        </select>
      </span>
         <v-btn class="btn ma-5" color="primary" elevation="0" @click="sendForm()">Envoyer</v-btn>
    </span>
    <span id="hidden" style="display: none">
      <div class="ma-16">
        <p>Votre message a bien été envoyé</p>
        <p>merci de votre aide</p>
      </div>
    </span>
  </span>
</template>

<script>
export default {
  name: "Contact",
  methods: {
    sendForm(){
      document.getElementById("hidden").style.display = 'block';
    }
  }
}
</script>

<style scoped>
.back {
  background: #8B8B8B;
}

.form {
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.field, select {
  padding: 8px;
  margin: 10px;
  border: 1px solid lightgray;
  font-style: italic;
  width: 30vw !important;
  color: #8B8B8B;
  height: 50px;
}
#hidden{
  width: 80vw;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
}
#hidden>div>p{
  font-style: italic;
  text-align: center !important;
}
select {
  appearance: auto;
}
</style>