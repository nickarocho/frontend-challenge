# Hero Component Challenge

## View the Project:

Clone the repo to your local environment:
`$ git clone https://github.com/nickarocho/frontend-challenge.git`

Step into the newly cloned directory:
`$ cd frontend-challenge`

Open the `index.html` file in your favorite browser to see the final product.

![project screenshot](https://i.imgur.com/grnyppU.png "Project Preview")


## My Approach:

This was a lot of fun! Thanks for the challenge, I really enjoyed it.

I considered a few differenet approaches for this but ultimately chose to go with Vue simply because I know this is what the team uses now and might be using in the future. I wanted to show my ability to work with the framework while simultaneously demonstrating my understanding of creating reusable componenents.

Initially I wanted to go with React, as it is my comfort zone, but it seemed a bit overkill as it takes quite a bit of boiler plate to just get a componenent up and running. So considering the time constraint, I think Vue was a better option overall.

I also considered going with plain old vanilla JS, which could essentially do the same thing, but would have been a bit more complex to make it elegant and completely reusable.

For the record, I went a bit over the time (including writing this README). But not by much, I clocked it at around 2.5 hours.

## Notes/TODO:

- This approach explicitly uses the data from this endpoint: `https://www.dermstore.com/ajax/challenge.php`
- I assumed this is how it should have been done, but in reality fetching the data and dynamically passing it via props to each hero component individually would be a more scalable approach so each component can source its data individually rather than globally (especially if there is more than one hero per page... i.e. `<hero :src="https://www.derstore.com/ajax/hero-1.php"></hero>`, `<hero :src="https://www.derstore.com/ajax/hero-2.php"></hero>`, etc.)
- The `onSubmit()` function of the email signup is just trickery... nothing is really happening under the hood (including validation), I ran out of time so fleshing out the functionality of the form will go on my `TODO` list.
- I styled the hero components to span `100vw` and `50vh`, with the `<img>` filling the container for true responsiveness. This crops the image drastically at smaller screen sizes, so down the road it would probably be best to lock in the hero at a fixed ratio depending on the content which will go in there.
- I normally prefer to write the styles in `SCSS` then compile via Gulp or Webpack, but since time was of the essence, I kept the CSS styling nice and simple.

### Thank you!

Thank you for your time reviewing my code, and considering me for this team. I hope this helps me earn a spot on the team and a chance to work together!
