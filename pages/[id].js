import { useState } from "react";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import files from "data/files";
import { nanoid } from "nanoid";
import readSubfolders from "utils/readSubfolders";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { useCallback } from "react";
import { download } from "utils/download";

export async function getStaticPaths() {
  const paths = await readSubfolders("./public/images/");
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({ params }) => {
  const cdn = process.env.SPACES_CDN;
  const bucket = process.env.SPACES_BUCKET;
  const { id } = params;
  const images = await Promise.all(
    files
      .filter((file) => new RegExp(`${id}\\b`).test(file))
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
      cdn,
      bucket,
      title: id
        .split("-")
        .map((word) => word.replace(/^\w/, (c) => c.toUpperCase()))
        .join(" "),
    },
  };
};

export default function Abends({ images, title, cdn, bucket }) {
  const [isLoading, setIsLoading] = useState([]);

  const handleDownload = useCallback(async (e, key) => {
    setIsLoading((old) => [...old, key]);
    const res = await fetch(`api/image?key=${key}`).then((res) => res.json());
    const { protocol, pathname, search } = new URL(res.link);
    const blob = await fetch(
      `${protocol}//${bucket}.${cdn}${pathname}${search}`
    ).then((res) => res.blob());
    download(URL.createObjectURL(blob), key);
    e.target.blur();
    setIsLoading((old) => old.filter((k) => k !== key));
  }, []);

  return (
    <div className="bg-wedding-light">
      <a
        href="#nav"
        className="flex items-center justify-between py-2 px-4 bg-wedding opacity-90 sticky top-0 left-0 z-10"
      >
        <div className="flex gap-2 items-center">
          <Image
            className="rounded-full"
            width={36}
            height={36}
            fixed="1x"
            src="/assets/V1-mit-Logo-1.png"
          />
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
      </a>
      <div className="mt-4 pb-4 md:container mx-4 md:mx-auto">
        {images.map((image) => {
          const key = image.href
            .replace(/\/images\//, "")
            .replace(/.webp/, ".jpg");
          return (
            <div
              key={image.id}
              className="shadow-lg mb-4 bg-white animate-fadeIn md:w-2/3 lg:w-1/2 mx-auto p-2"
            >
              <div className="relative block overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-full h-full right-0 bottom-0 scale-150 blur-2xl"
                  style={{
                    ...image.css,
                  }}
                />
                <Image {...image.img} sizes="100% " layout="responsive" />
                <div
                  tabIndex={0}
                  className="transition-opacity absolute top-0 left-0 w-full h-full right-0 bottom-0 opacity-0 flex focus:opacity-100  md:hover:opacity-100  bg-wedding-dark/50 items-center justify-center"
                >
                  <button
                    className={`flex flex-col gap-1 align-middle pointer-events-none peer-focus-within:pointer-events-auto`}
                    onClick={(e) => handleDownload(e, key)}
                  >
                    <span
                      className={`flex justify-center text-6xl text-white p-1 ${
                        isLoading.some((x) => x === key) && "animate-ping"
                      }`}
                    >
                      <FiArrowDown />
                    </span>
                    <div className="text-white">
                      Click nochmal und das Foto fliegt zu dir.
                    </div>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <a
        href="#nav"
        className="fixed right-3 bottom-3 p-3 rounded-full bg-wedding"
      >
        <FiArrowUp className="text-xl" />
      </a>
    </div>
  );
}
