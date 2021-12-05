import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import files from "data/files";
import { nanoid } from "nanoid";
import readSubfolders from "utils/readSubfolders";

export async function getStaticPaths() {
  const paths = await readSubfolders("./public/images/");
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  console.log(id);
  const images = await Promise.all(
    files
      .filter((file) => new RegExp(id).test(file))
      .map(async (file) => {
        const { img, css } = await getPlaiceholder(`/images/${file}`);
        return {
          id: nanoid(),
          img,
          css,
          href: `/images/${file}`,
        };
      })
  );
  return {
    props: {
      images,
      title: id
        .split("-")
        .map((word) => word.replace(/^\w/, (c) => c.toUpperCase()))
        .join(" "),
    },
  };
};

export default function Abends({ images, title }) {
  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-between py-2 px-4 bg-green-50 opacity-90 sticky top-0 left-0 z-10">
        <div className="flex gap-4 items-center">
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
      </div>
      <div className="mt-4 pb-4 md:container mx-4 md:mx-auto">
        {images.map((image) => (
          <div
            key={image.id}
            className="shadow-lg mb-4 bg-white animate-fadeIn md:w-2/3 lg:w-1/2 mx-auto p-2"
          >
            <div
              style={{
                position: "relative",
                display: "block",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  transform: "scale(1.5)",
                  filter: "blur(40px)",
                  ...image.css,
                }}
              />
              <Image {...image.img} sizes="100% " layout="responsive" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
