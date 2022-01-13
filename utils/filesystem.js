const {
  promises: { readdir },
} = require("fs");

module.exports.readSubfolders = async function readSubfolders(source) {
  return (await readdir(source, { withFileTypes: true }))
    .filter((dir) => dir.isDirectory())
    .map((dir) => ({ params: { id: dir.name } }));
};

module.exports.readFilesFromFolder = async function readFilesFromFolder(
  source
) {
  const files = await readdir(source, { withFileTypes: true });
  return files.filter((dir) => !dir.isDirectory()).map((dir) => `${dir.name}`);
};
