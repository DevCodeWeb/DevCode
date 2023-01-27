import { useState } from "react";

type TYPETABLE = {
  data: any;
};

export const TableSlider = ({ data }: TYPETABLE) => {
  const [page, setPage] = useState<number>(0);

  return (
    <div className="col-span-8 col-start-3 text-black shadow-lg rounded-2xl">
      <div className="flex gap-[12px]">
        {data.map((elm: any, i: number) => {
          return (
            <ul
              key={i}
              className={` ${
                page === i
                  ? "border-b-4 border-mediumBlue bg-prettyBlue bg-opacity-25"
                  : "border-b-4 border-white"
              } cursor-pointer  rounded-t-2xl px-[18px] py-[4px] duration-200`}
              onClick={() => {
                setPage(i);
              }}
            >
              {elm.link}
            </ul>
          );
        })}
      </div>
      <div className="flex justify-between w-full">
        <div className="mt-[32px] h-[420px] px-[32px] w-full">
          <h3 className="font-bold text-[24px] mb-[24px]">
            {data[page].title}
          </h3>
          <p>{data[page].description}</p>
        </div>
        <div className="flex items-center w-full justiyf-center ">
          {data[page].img && (
            <img
              src={data[page].img}
              alt={data[page].title + "image"}
              className="w-full aspect-auto"
            />
          )}
        </div>
      </div>
    </div>
  );
};
