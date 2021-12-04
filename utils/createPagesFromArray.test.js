const {
  promises: { unlink },
} = require("fs");

const createPagesFromArray = require("./createPagesFromArray");
describe("create pages from array", () => {
  const pages = [
    "gruppenbilder",
    "hochzeitstanz-&-party",
    "nachmittags",
    "paarbilder",
    "spalier",
    "trauung",
    "vor-der-trauung",
  ];
  const pagesPath = "./.temp/";
  const templatePath = "./pages/abends";

  it("should create pages from array", async () => {
    const res = await createPagesFromArray(pages, pagesPath, templatePath);
    expect(res).toHaveLength(pages.length);
    await Promise.all(res.map(({ path }) => unlink(path)));

    console.log(res.map(({ page }) => ({ href: page, label: page })));
  });
});
