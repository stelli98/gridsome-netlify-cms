// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/scss/main.scss";

export default function (Vue, {
  router,
  head,
  isClient
}) {
  // Set default layout as a global component
  head.link.push({
      rel: 'stylesheet',
      href: 'https://unpkg.com/sanitize.css'
    }, {
      rel: 'stylesheet',
      href: 'https://unpkg.com/sanitize.css/forms.css'
    }, {
      rel: 'stylesheet',
      href: 'https://unpkg.com/sanitize.css/typography.css'
    }, {
      rel: 'stylesheet',
      href: 'https://unpkg.com/sanitize.css/typography.css'
    }, {
      rel: 'stylesheet',
      href: 'https://cdn.snipcart.com/themes/v3.0.11/default/snipcart.css'
    }

  );
  head.script.push({
      type: 'text/javascript',
      src: 'https://kit.fontawesome.com/FONT_AWESOME_KIT_CODE.js" crossorigin="anonymous',
      body: true,
    }, {
      type: 'text/javascript',
      src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js',
      body: true,
    }, {
      type: 'text/javascript',
      src: 'https://cdn.snipcart.com/themes/v3.0.11/default/snipcart.js',
      body: false,
      id: 'snipcart',
      'data-api-key': 'MjRhZjNmMzEtOWRmYi00YWEyLTk5OGYtZjgzZDE4YzUxYjIzNjM3MTYzMTMxNjMzNTQ0OTk4',
    },
    Vue.component("Layout", DefaultLayout)
  )
}
