import { Icon } from "@iconify/react";
import instagramLogo from "@iconify/icons-ph/instagram-logo";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-screen">
      <div className="flex items-center justify-center w-full max-w-[1440px] bg-white">
        <div className="m-[12px] w-full text-white p-[48px] rounded-2xl bg-darkBlue flex justify-between items-center">
          <div className="">
            <h2 className="font-bold text-[24px]">DevCode</h2>
            <p className="mb-[24px]">Design & création de sites web</p>
            <p className="font-light text-[12px]">© copyright 2023 - DevCode</p>
          </div>
          <div className="flex items-center font-light gap-[12px] xs:hidden sm:hidden">
            <p>Retrouvez-nous sur </p>
            <Icon
              icon={instagramLogo}
              className="w-[32px] h-[32px] hover:text-prettyBlue duration-200 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
