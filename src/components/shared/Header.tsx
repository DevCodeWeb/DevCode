import { useEffect, useState } from "react";
import { Button } from "../atoms/Button";

export const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
    });
  }, []);

  return (
    <header
      className={` ${
        scroll
          ? "top-0 duration-300 opacity-100"
          : "top-[-70px] duration-300 opacity-0"
      } fixed top-0 z-50 flex items-center justify-center w-screen`}
    >
      <div
        className={` w-full max-w-[1440px] shadow-lg bg-white h-[50px] hover:h-[70px] hover:rounded-b-lg duration-200 text-black px-[48px] xs:px-[16px] sm:px-[16px] flex rounded-b-2xl items-center justify-between`}
      >
        <div className="flex items-center gap-[12px]">
          <img src="assets/logo.png" alt="logo DevCode" className="w-[48px]" />
          <h3 className="text-grey">DevCode</h3>
        </div>
        <div className="text-grey">
          <li className="flex gap-[24px] items-center  ">
            {/* {["Offres", "Clients"].map((elm, i) => {
              return (
                <ul
                  key={i}
                  className="w-full duration-300 cursor-pointer hover:text-lightBlue xs:hidden sm:hidden"
                >
                  {elm}
                </ul>
              );
            })} */}
            <Button label="Contacter" />
          </li>
        </div>
      </div>
    </header>
  );
};
