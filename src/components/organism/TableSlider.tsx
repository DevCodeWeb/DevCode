import { useState } from "react";

type TYPETABLE = {
  data: any;
};

export const TableSlider = ({ data }: TYPETABLE) => {
  const [page, setPage] = useState<number>(0);

  return (
    <div className="col-span-8 col-start-3 text-black bg-white shadow-md rounded-2xl xs:col-span-12 sm:col-span-12">
      <div className="flex w-full overflow-scroll shadow-lg">
        {data.map((elm: any, i: number) => {
          return (
            <ul
              key={i}
              className={` ${
                page === i
                  ? "border-b-4 border-white bg-prettyBlue bg-opacity-25"
                  : "border-b-4 border-mediumBlue"
              } cursor-pointer text-[18px] w-full text-center rounded-t-2xl px-[18px] py-[4px] duration-200`}
              onClick={() => {
                setPage(i);
              }}
            >
              {elm.link}
            </ul>
          );
        })}
      </div>
      <div className="flex w-full ">
        <div className="mt-[32px] h-full pb-[24px] px-[32px] w-full">
          <h3 className="font-bold text-[24px] mb-[24px] xs:text-center sm:text-center">
            {data[page].title}
          </h3>
          <p>{data[page].description}</p>
          {data[page].second_description && (
            <p className="mt-[24px]">{data[page].second_description}</p>
          )}
        </div>
        {data[page].img && (
          <div className="flex items-center w-full justiyf-center ">
            <img
              src={data[page].img}
              alt={data[page].title + "image"}
              className="w-full aspect-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};
