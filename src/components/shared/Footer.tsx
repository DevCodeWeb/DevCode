import { Icon } from "@iconify/react";
import instagramLogo from "@iconify/icons-ph/instagram-logo";

export const Footer = () => {
  return (
    <footer className="w-screen max-w-[1440px] text-white p-[48px] bg-darkBlue flex justify-between items-center">
      <div className="">
        <h2 className="font-bold text-[24px]">DevCode</h2>
        <p className="mb-[24px]">Design & création de sites web</p>
        <p className="font-light text-[12px]">© copyright 2023 - DevCode</p>
      </div>
      <div className="flex items-center font-light gap-[12px]">
        <p>Retrouvez-nous sur </p>
        <Icon
          icon={instagramLogo}
          className="w-[32px] h-[32px] hover:text-prettyBlue duration-200 cursor-pointer"
        />
      </div>
    </footer>
  );
};
