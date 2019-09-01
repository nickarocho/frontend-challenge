let url = "https://www.dermstore.com/ajax/challenge.php";
let payload;

fetch(url).then(function(res) {
  res
    .text()
    .then(function(text) {
      payload = JSON.parse(text);
    })
    .then(function() {
      Vue.component("hero", {
        template: `
            <section id="hero" class="hero">
                <img v-bind:src="backgroundImg" alt="" class="hero__background" />
                <div class="card">
                    <h1 class="card__title">{{ cardTitle }}</h1>
                    <p class="card__body">{{ cardBody }}</p>
                    <a v-bind:href="cardBtnHref" target="_blank" class="card__btn">{{ cardBtnTxt }}</a>
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

      Vue.component("emailsignup", {
        template: `
            <section class="email-signup">
                <form @submit.prevent="onSubmit">
                    <div class="card card--email-signup">
                        <h1 class="card__title">Email Signup</h1>
                        <div class="form__wrapper">
                            <p class="card__body">
                                <label for="name">Name:</label>
                                <input id="name" v-model="name" placeholder="Joe Shmoe" />
                            </p>
                            <p class="card__body">
                                <label for="email">Email:</label>
                                <input type="email" id="email" v-model="email" placeholder="joe@shmoe.com" />
                            </p>
                            <p><input class="card__btn" type="submit" value="Sign Up" /></p>
                        </div>
                    </div>
                </form>
            </section>
        `,
        data() {
          return {
            email: "",
            name: ""
          };
        },
        methods: {
          onSubmit() {
            let form = document.querySelector(".form__wrapper");
            form.textContent = "Thank you!";
          }
        }
      });

      var app = new Vue({
        el: "#app"
      });
    });
});
