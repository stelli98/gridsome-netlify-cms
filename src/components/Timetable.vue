<template>
 <section class="timetable">
  <tab name="Horaires">
    <h3 class="tabTitle">Les séances</h3>

    <subsection class="date">
      <h4>Selectionnez une date</h4>
      <div class="dateCards">
        <div class="dateCard">
          <p class="day">Mer</p>
          <p class="date">21</p>
          <p class="month">juin</p>
        </div>
        <div class="dateCard__selected">
          <p class="day">Jeu</p>
          <p class="date">22</p>
          <p class="month">juin</p>
        </div>
        <div class="dateCard">
          <p class="day">Ven</p>
          <p class="date">23</p>
          <p class="month">juin</p>
        </div>
      </div>
      </subsection>
      <subsection class="time">
        <h4>Sélectionnez une séance</h4>
      <div class="timeCards">
        <div class="timeCard">
          <p class="day">12h15</p>
        </div>
        <div class="timeCard">
          <p class="day">17h15</p>
        </div>
        <div class="timeCard__selected">
          <p class="day">20h00</p>
        </div>
      </div>
      </subsection>
      <subsection class="ticket">
        <h4>Sélectionnez un mombre de places</h4>
        <div class="numTicket">
          <select name="tickets" id="ticket">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button class="btn btn__resa">Réserver</button>
        </div>
      </subsection>
      <div class="cta">
        <g-link to="/"><button class="btn btn__primary">Continuer</button></g-link>
        <g-link to="/cart"><button class="btn btn__buy">Payer</button></g-link>
      </div>
    </tab>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h3 {
  font-size: 1.5rem;
  font-weight: 500;
}
.dateCards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1em 0;

  .dateCard {
    border-radius: 10px;
    background-color: rgb(250, 164, 250);
    margin: 1 0.75em;
    padding: 0 0.75em;
    align-items: center;

    &__selected {
      border-radius: 10px;
      margin: 1 0.75em;
      padding: 0.25em 0.75em;
      background-color: rgb(250, 79, 250);
    }
  }
}
.timeCards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1em 0;

  .timeCard {
    border-radius: 10px;
    background-color: rgb(250, 164, 250);
    margin: 1 0.75em;
    padding: 0.25em 0.75em;
    align-items: center;

    &__selected {
      background-color: rgb(250, 79, 250);
      border-radius: 10px;
      padding: 0.25em 0.75em;
    }
  }
}

.numTicket {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em 0;
}

.cta {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em 0 1.5em 0;
}

.btn {
  font-weight: 500;
  padding: 0.4em 0.6em;
  border-radius: 5px;
  width: 6em;
  padding: 0.5em;
  margin: 0 0.5em;

  &__resa {
    background-color: magenta;
  }

  &__primary {
    background-color: greenyellow;
  }

  &__buy {
    background-color: orangered;
  }
}
</style>