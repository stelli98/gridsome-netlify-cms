module.exports = {
  siteName: "LeKino",
  siteDescription: "Le programme du cinéma Kino, ses places en ligne et son blog",
  plugins: [{
    use: "@gridsome/source-filesystem",
    options: {
      typeName: "Post",
      path: "./content/blog/**/*.md",

    },
  }, ],
  templates: {
    Post: "/blog/:year/:month/:day/:title",
  },
};
