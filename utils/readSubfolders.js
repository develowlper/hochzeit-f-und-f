const {
  promises: { readdir, rename },
} = require("fs");

module.exports = async function readSubfolders(source) {
  return (await readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => ({ params: { id: dirent.name } }));
};

// (async function main() {
//   const res = await getDirectories(".");
//   console.log(res);
// })();
