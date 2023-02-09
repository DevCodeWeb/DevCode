type TYPEBUTTON = {
  label: string;
};

export const Button = ({ label }: TYPEBUTTON) => {
  return (
    <button className="px-[20px] bg-darkBlue text-white hover:bg-lightBlue duration-300 rounded-3xl py-[6px] xs:w-full sm:w-full">
      {label}
    </button>
  );
};
