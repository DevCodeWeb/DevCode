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
      className={`fixed w-screen max-w-[1440px] top-0 z-50 shadow-lg bg-white h-[70px] text-black px-[48px] flex rounded-b-2xl ${
        scroll ? "top-0 duration-300" : "top-[-70px] duration-300"
      } items-center justify-between`}
    >
      <div className="flex items-center gap-[12px]">
        <img src="assets/logo.png" alt="logo DevCode" className="w-[48px]" />
        <h3 className="text-grey">DevCode</h3>
      </div>
      <div className="text-grey">
        <li className="flex gap-[24px] items-center">
          {["Nos offres", "Nos clients"].map((elm, i) => {
            return (
              <ul
                key={i}
                className="duration-300 cursor-pointer hover:text-lightBlue"
              >
                {elm}
              </ul>
            );
          })}
          <Button label="Contacter" />
        </li>
      </div>
    </header>
  );
};
