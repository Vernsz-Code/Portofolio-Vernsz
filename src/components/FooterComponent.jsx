import { FaRegCopyright } from "react-icons/fa6";
function FooterComponent() {
  return (
    <div className="w-full p-3 sm:p-5 bg-slate-800 text-white flex justify-center items-center gap-2">
      <FaRegCopyright />
      <span className="">2024 Vernsz</span>
    </div>
  );
}

export default FooterComponent;
