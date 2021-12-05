const { withPlaiceholder } = require("@plaiceholder/next");
module.exports = withPlaiceholder({
  async redirects() {
    return [
      {
        source: "/",
        destination: "/ankunft",
        permanent: true,
      },
    ];
  },
});
