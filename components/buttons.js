import clsx from "clsx";
import { FiArrowDown } from "react-icons/fi";

export const DownloadAllButton = ({ path, label = "all" }) => {
  return (
    <a
      className="flex border-2 px-2 py-2 border-green-300 justify-center items-center "
      download
      href={`/zips/${path}.zip`}
    >
      <FiArrowDown className="mr-2" />

      <span>{`download ${label}`}</span>
    </a>
  );
};

export const Button = ({ className, ...props }) => {
  return (
    <button
      className={clsx(
        "bg-white mr-2 border-2 border-green-300 py-1 px-2",
        className
      )}
      {...props}
    ></button>
  );
};
