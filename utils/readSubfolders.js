const {
  promises: { readdir, rename },
} = require("fs");

const getDirectories = async (source) =>
  (await readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

(async function main() {
  const res = await getDirectories(".");
  console.log(res);
})();
