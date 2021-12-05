const fs = require("fs");

const path = require("path");
const webp = require("webp-converter");
const dir = "../public/images";
const fileTypes = [".jpg", ".jpeg"];
(async function main() {
  const filesToReturn = [];

  function walkDir(currentPath) {
    const files = fs.readdirSync(currentPath);
    for (const i in files) {
      const curFile = path.join(currentPath, files[i]);
      if (
        fs.statSync(curFile).isFile() &&
        fileTypes.indexOf(path.extname(curFile)) != -1
      ) {
        filesToReturn.push(curFile);
      } else if (fs.statSync(curFile).isDirectory()) {
        walkDir(curFile);
      }
    }
  }
  walkDir(dir);
  // const res = await Promise.all(
  //   filesToReturn.map((file) =>
  //     webp
  //       .cwebp(file, file.replace(/.jpg/, ".webp"), "-q 80", (logging = "-v"))
  //       .then((response) => {
  //         console.log(response);
  //       })
  //   )
  // );
  console.log(filesToReturn);
  await Promise.all(filesToReturn.map((path) => fs.unlinkSync(path)));
})();
