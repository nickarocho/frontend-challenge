Vue.component("hero", {
  template: `
    <section id="hero" class="hero">
        <img src="#" alt="" class="hero__background" />
        <div class="card">
            <h1 class="card__title">Title</h1>
            <p class="card__body">Body</p>
            <button href="#" class="card__btn">Click Me</button>
        </div>
    </section>
    `
});

var app = new Vue({
  el: "#app"
});
