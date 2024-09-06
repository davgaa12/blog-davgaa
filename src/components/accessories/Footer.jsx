import { Bbb } from "../icons/Bbb";
import { Face } from "../icons/Face";
import { Ig } from "../icons/Ig";
import { In } from "../icons/In";
import { Tewi } from "../icons/Tewi";
import { Zuraas } from "../icons/Zuraas";
import Link from "next/link";
export const Footer = () => {
  return (
    <div>
      <div className="w-auto h-auto bg-[#E8E8EA] ">
        <div className=" flex justify-center ">
          <div className="flex w-[1215px] gap-5 pt-20 pb-10">
            <div className="flex flex-col gap-6">
              <div className="text-[18px]"> About</div>
              <div className="w-[260px] text-[#696A75] text-[16px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </div>
              <div>
                <div className="text-[#181A2A] text-[16px]">
                  Email : info@jstemplate.net
                </div>
                <div className="text-[#181A2A] text-[16px]">
                  Phone : 880 123 456 789
                </div>
              </div>
            </div>
            <div className="w-[512px] flex justify-center">
              <div className="w-[48px] text-[#3B3C4A] text-[16px] flex flex-col">
                <Link href={"home"}>Home</Link>
                <Link href={"/blogpost"} className="text-[#3B3C4A]">
                  Blog
                </Link>
                <Link href={"/contoct"} className="text-[#3B3C4A]">
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <Face />
              </div>
              <div>
                <Tewi />
              </div>
              <div>
                <Ig />
              </div>
              <div>
                <In />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-20">
          <div className="flex w-[1216px] ">
            <div className="flex gap-[10px]">
              <div>
                <Bbb />
              </div>
              <div>
                <div>MetaBlog</div>
                <div>© All Rights Reserved.</div>
              </div>
            </div>
            <div className="flex gap-4 w-[921px] pl-[400px] justify-end">
              Terms of Use <Zuraas /> Privacy Policy <Zuraas /> Cookie Policy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
