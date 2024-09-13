import { Mateblog } from "../icons/Mateblog";
import Link from "next/link";

export const Header = () => {
  return (
    <div className=" flex  justify-center pt-[32px]  pr-[300px] pb-[32px] pl-[300px]">
      <div className="w-[1216px] h-[36px] flex gap-[118px]">
        <div>
          <Link href={"/"} className="text-[#3B3C4A]">
            <Mateblog />
          </Link>
        </div>
        <div className="flex gap-10 Width w-[667px] h-[24px] justify-center">
          <Link
            className="hover:text-blue-800 hover:underline font-bold"
            href={"/"}
          >
            Home
          </Link>
          <Link
            className="hover:text-blue-800 hover:underline font-bold"
            href={"/blog-post"}
          >
            Blog
          </Link>
          <Link
            className="hover:text-blue-800 hover:underline font-bold"
            href={"/contoct"}
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center  ">
          <input
            className="w-[166px] h-[36px] gap-10 bg-[#F4F4F5] pl-2 rounded"
            placeholder="search... "
            type="text"
          />
        </div>
      </div>
    </div>
  );
};
