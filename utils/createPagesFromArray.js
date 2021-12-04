const {
  promises: { readFile, writeFile, unlink },
} = require("fs");

module.exports = async function createPagesFromArray(
  pages = [
    "gruppenbilder",
    "hochzeitstanz-&-party",
    "nachmittags",
    "paarbilder",
    "spalier",
    "trauung",
    "vor-der-trauung",
  ],
  pagesPath,
  templatePath
) {
  const pagesPaths = pages.map((page) => ({
    page,
    path: `${pagesPath}${page}.js`,
  }));

  const template = await readFile(`${templatePath}.js`, "utf8"); //?
  await Promise.all(
    pagesPaths.map(({ path, page }) =>
      writeFile(
        path,
        template.replace(/abends/g, page).replace(
          /Abends/g,
          page.replace(/^\w/, (c) => c.toUpperCase())
        )
      )
    )
  );
  return pagesPaths;
};
