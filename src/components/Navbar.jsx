const Navbar = () => {
  return (
    <div className="flex">
      <h1 className="basis-[100%] md:basis-[60%] bg-[#4831D4] pt-4 pl-12 text-[#CCF381] font-bold text-xl cursor-pointer">
        {"<codesiddharth.tech/>"}
      </h1>
      <ul className="bg-[#CCF381] basis-[40%] text-[#4831D4] font-bold pt-4 pl-12 hidden md:block"></ul>
    </div>
  );
};

export default Navbar;
