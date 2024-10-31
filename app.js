new Vue({
    el: '#app', 
    data() {
      return {
        food: 100,     
        toilet: 100,   
        health: 100,   
        play: 100      
      };
    },
    mounted() {
     
      this.timer = setInterval(() => {
        this.food = Math.max(this.food - 1, 0);
        this.toilet = Math.max(this.toilet - 0.5, 0);
        this.health = Math.max(this.health - 0.3, 0);
        this.play = Math.max(this.play - 0.2, 0);
  
        // Advar hvis en af værdierne når 0
        if (this.food === 0 || this.toilet === 0 || this.health === 0 || this.play === 0) {
          alert("Din kat har brug for pleje!");
        }
      }, 1000); // Opdatering hvert sekund
    },
    beforeDestroy() {
      clearInterval(this.timer); // Stopper timeren når komponenten fjernes fra DOM
    },
    methods: {
      feedCat() {
        this.food = Math.min(this.food + 15, 100);
      },
      cleanToilet() {
        this.toilet = Math.min(this.toilet + 20, 100);
      },
      healCat() {
        this.health = Math.min(this.health + 10, 100);
      },
      playWithCat() {
        this.play = Math.min(this.play + 10, 100);
        this.food = Math.max(this.food - 5, 0); // Reducerer mad, når katten leger
      }
    }
  });