import Image from "next/image";

export default function Video() {
  return (
    <div className="h-full bg-wedding-light">
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
          <h1 className="text-2xl font-bold">Video</h1>
        </div>
      </a>
      <div className="flex justify-center items-center mt-4">
        <div className="p-2 bg-white shadow-lg">
          <video
            width={640}
            height={360}
            controls
            src="https://hochzeit-f-und-f.fra1.cdn.digitaloceanspaces.com/video/franzi_&_franz%20%28540p%29.mp4"
          />
        </div>
      </div>
    </div>
  );
}
