let url = "https://www.dermstore.com/ajax/challenge.php";
let payload;

fetch(url).then(function(res) {
  res
    .text()
    .then(function(text) {
      payload = JSON.parse(text);
      console.log(payload);
    })
    .then(function() {
      Vue.component("hero", {
        template: `
            <section id="hero" class="hero">
                <img v-bind:src="backgroundImg" alt="" class="hero__background" />
                <div class="card">
                    <h1 class="card__title">{{ cardTitle }}</h1>
                    <p class="card__body">{{ cardBody }}</p>
                    <button v-bind:src="cardBtnHref" class="card__btn">{{ cardBtnTxt }}</button>
                </div>
            </section>
        `,
        data() {
          return {
            backgroundImg: payload.background,
            cardTitle: payload.title,
            cardBody: payload.body,
            cardBtnTxt: payload.button.text,
            cardBtnHref: payload.button.href
          };
        }
      });

      var app = new Vue({
        el: "#app"
      });
    });
});
