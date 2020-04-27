const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/sass/globals/_index.scss'),
      ],
    });
}

module.exports = {
  siteName: "LeKino",
  siteDescription: "Le programme du cinéma Kino, ses places en ligne et son blog",
  plugins: [{
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Post",
        path: "./content/blog/**/*.md",
        refs: {
          // Reference to existing authors by id.
          // Create a Tag content type and its nodes automatically.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        typeName: "Movie",
        path: "./content/movies/**/*.md",
        remark: {
          plugins: [
            ['@noxify/gridsome-plugin-remark-embed', {
              'enabledProviders': ['Youtube'],
            }]
          ]
        }
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`
    },
  ],
  templates: {
    Post: "/blog/:year/:month/:day/:title",
    Movie: "/movies/:title",
    Tag: '/tags/:id'

  },
  chainWebpack(config) {
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];

    // or if you use scss
    types.forEach((type) => {
      addStyleResource(config.module.rule("scss").oneOf(type));
    });
  },
};
