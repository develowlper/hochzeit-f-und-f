import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import files from "data/files";
import { nanoid } from "nanoid";
import { BlurhashCanvas } from "react-blurhash";

export const getStaticProps = async () => {
  const images = await Promise.all(
    files
      .filter((file) => /gratulations/.test(file))
      .map(async (file) => {
        const { img, blurhash } = await getPlaiceholder(`/images/${file}`);
        return {
          id: nanoid(),
          img,
          blurhash,
          href: `/images/${file}`,
        };
      })
  );
  return {
    props: {
      images,
    },
  };
};

export default function Gratulations({ images }) {
  return (
    <div className="bg-gray-100">
      <div className="flex items-center justify-between py-2 px-4 bg-green-50 opacity-90 sticky top-0 left-0 z-10">
        <div className="flex gap-4 items-center">
          <h1 className="text-2xl font-bold">Gratulations</h1>
        </div>
      </div>
      <div className="mt-4 pb-4 md:container mx-4 md:mx-auto">
        {images.map((image) => (
          <div
            key={image.id}
            className="shadow-lg mb-4 bg-white animate-fadeIn md:w-2/3 lg:w-1/2 mx-auto p-2"
          >
            <div className="relative block overflow-hidden">
              <BlurhashCanvas
                className="absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                {...image.blurhash}
                punch={1}
              />
              <Image {...image.img} sizes="100% " layout="responsive" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
