import { Icon } from "@iconify/react";
import openInNewRounded from "@iconify/icons-material-symbols/open-in-new-rounded";
import { Button } from "../atoms/Button";

import style from "@/styles/animation.module.scss";

type TYPECARD = {
  key: number;
  name: string;
  description: string;
  site?: string;
  tag: any;
  img: string;
};

export const ClientCard = ({
  key,
  name,
  description,
  site,
  tag,
  img,
}: TYPECARD) => {
  return (
    <div
      key={key}
      className="flex flex-col col-span-4 xs:col-span-12 sm:col-span-12 md:col-span-6 overflow-hidden duration-300 hover:shadow-lg rounded-2xl hover:ring-4 hover:ring-mediumBlue p-[28px]"
    >
      <div className="flex mb-[24px] items-center justify-center grayscale hover:grayscale-0 duration-300 fill-neutral-100 w-full bg-grey h-[200px] rounded-2xl overflow-hidden">
        <img src={img} alt={name + "screen"} className="w-full aspect-auto" />
      </div>
      <div className="flex flex-col gap-[12px]">
        <div className="mb-[18px]">
          <h1 className="text-[24px] font-bold">{name}</h1>
          {site ? (
            <a
              href={site}
              target="_blank"
              rel="norefferer"
              className="flex gap-[6px] items-center duration-200 hover:text-lightBlue text-mediumBlue hover:underline"
            >
              {site}
              <Icon icon={openInNewRounded} />
            </a>
          ) : (
            <p className="italic text-lightBlue">
              Site en cours de création<span className={style.load}></span>
            </p>
          )}
        </div>
        <div className="flex gap-[12px] flex-wrap">
          {tag.map((elm: any, i: number) => {
            return (
              <h4
                key={i}
                className="rounded-3xl text-center flex items-center cursor-pointer hover:bg-opacity-75 duration-200 bg-prettyBlue text-darkBlue font-bold bg-opacity-30 xs:px-[12px] sm:px-[12px] xs:text-[12px] sm:text-[12px] px-[20px] py-[4px] ring-mediumBlue ring-2"
              >
                {elm}
              </h4>
            );
          })}
        </div>
        <p className="mb-[18px]">{description}</p>
        {site && (
          <div className="flex items-end h-full xs:w-full sm:w-full">
            <Button label="Voir le site" />
          </div>
        )}
      </div>
    </div>
  );
};
