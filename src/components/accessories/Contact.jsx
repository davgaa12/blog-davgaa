import Link from "next/link";
import { Line1 } from "../icons/Line1";
import { Line2 } from "../icons/Line2";
import { Ognoo } from "../icons/Ognoo";

export const Contact = () => {
  return (
    <div className=" pt-[100px] flex  justify-center ">
      <div className="flex flex-col">
        <div>
          <div className="bg-[url('/image.png')] w-[1216px] h-[600px] pt-[333px] pl-3   ">
            <div className="w-[598px] h-[252px] bg-white rounded-md flex flex-col  gap-6 pl-10 pt-10">
              <div>
                <div className="w-[98px] h-[27px] bg-[#4B6BFB] text-white  flex flex-col rounded items-center">
                  Technology
                </div>
                <div className="text-[36px] w-[350px] h-[80px]">
                  Grid system for better Design User Interface
                </div>
              </div>
              <div>
                <Ognoo />
              </div>
            </div>
          </div>
          <div className="flex gap-2 pl-[1130px] pt-4">
            <Line1 />
            <Line2 />
          </div>
        </div>
        <div className="pt-[100px]">
          <div className="text-[24px] pb-10">Trending</div>
          <div className="flex gap-5">
            <div className="bg-[url('/image.png')] w-[289px] h-[320px] rounded-md pt-[200px] pl-[15px] ">
              <div
                className="w-[86px] h-[28px] bg-[#4B6BFB]  flex rounded items-center justify-center text-white
               text-[12px]"
              >
                Technology
              </div>
              <div className="text-white text-[18px] w-[250px]">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </div>
            </div>
            <div className="bg-[url('/image.png')] w-[289px] h-[320px] rounded-md pt-[200px] pl-[15px]">
              <div
                className="w-[86px] h-[28px] bg-[#4B6BFB]  flex rounded items-center justify-center text-white
               text-[12px]"
              >
                Technology
              </div>
              <div className="text-white text-[18px] w-[250px]">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </div>
            </div>
            <div className="bg-[url('/image.png')] w-[289px] h-[320px] rounded-md pt-[200px] pl-[15px]">
              <div
                className="w-[86px] h-[28px] bg-[#4B6BFB]  flex rounded items-center justify-center text-white
               text-[12px]"
              >
                Technology
              </div>
              <div className="text-white text-[18px] w-[250px]">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </div>
            </div>
            <div className="bg-[url('/image.png')] w-[289px] h-[320px] rounded-md pt-[200px] pl-[15px]">
              <div
                className="w-[86px] h-[28px] bg-[#4B6BFB]  flex rounded items-center justify-center text-white
               text-[12px]"
              >
                Technology
              </div>
              <div className="text-white text-[18px] w-[250px]">
                The Impact of Technology on the Workplace: How Technology is
                Changing
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[100px] ">
          <div className=" flex flex-col gap-[32px]">
            <div className="text-[24px]">All Blog Post</div>
            <div className="flex">
              <div className="flex gap-5 pb-10">
                <div className="text-[#D4A373] text-[12px]">All</div>
                <div className="text-[#495057] text-[12px]">Desing</div>
                <div className="text-[#495057] text-[12px]">Travel</div>
                <div className="text-[#495057] text-[12px]">Fashion</div>
                <div className="text-[#495057] text-[12px]">Technology</div>
                <div className="text-[#495057] text-[12px]">Branding</div>
              </div>
              <Link
                href={"/blogpost"}
               className="text-[#495057] text-[12px] pl-[830px]"
              >
                View all
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <div className="w-[392px] h-[476px] rounded border-[#E8E8EA] shadow pt-4 pl-4">
                <div>
                  <img
                    className="w-[360px] h-[240px] rounded-md"
                    src="photo1.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-5 pt-5">
                  <div>
                    <div className="w-[97px] h-[28px] bg-[#4B6BFB0D] text-[#4B6BFB] flex justify-center items-center rounded">
                      Technology
                    </div>
                    <div className="w-[330px] text-[24px]">
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
                    </div>
                  </div>
                  <div>
                    <Ognoo />
                  </div>
                </div>
              </div>
              <div className="w-[392px] h-[476px] rounded border-[#E8E8EA] shadow pt-4 pl-4">
                <div>
                  <img
                    className="w-[360px] h-[240px] rounded-md"
                    src="photo2.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-5 pt-5">
                  <div>
                    <div className="w-[97px] h-[28px] bg-[#4B6BFB0D] text-[#4B6BFB] flex justify-center items-center rounded">
                      Technology
                    </div>
                    <div className="w-[330px] text-[24px]">
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
                    </div>
                  </div>
                  <div>
                    <Ognoo />
                  </div>
                </div>
              </div>
              <div className="w-[392px] h-[476px] rounded border-[#E8E8EA] shadow pt-4 pl-4">
                <div>
                  <img
                    className="w-[360px] h-[240px] rounded-md"
                    src="photo3.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-5 pt-5">
                  <div>
                    <div className="w-[97px] h-[28px] bg-[#4B6BFB0D] text-[#4B6BFB] flex justify-center items-center rounded">
                      Technology
                    </div>
                    <div className="w-[330px] text-[24px]">
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
                    </div>
                  </div>
                  <div>
                    <Ognoo />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-[392px] h-[476px] rounded border-[#E8E8EA] shadow pt-4 pl-4">
                <div>
                  <img
                    className="w-[360px] h-[240px] rounded-md"
                    src="photo4.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-5 pt-5">
                  <div>
                    <div className="w-[97px] h-[28px] bg-[#4B6BFB0D] text-[#4B6BFB] flex justify-center items-center rounded">
                      Technology
                    </div>
                    <div className="w-[330px] text-[24px]">
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
                    </div>
                  </div>
                  <div>
                    <Ognoo />
                  </div>
                </div>
              </div>
              <div className="w-[392px] h-[476px] rounded border-[#E8E8EA] shadow pt-4 pl-4">
                <div>
                  <img
                    className="w-[360px] h-[240px] rounded-md"
                    src="photo5.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-5 pt-5">
                  <div>
                    <div className="w-[97px] h-[28px] bg-[#4B6BFB0D] text-[#4B6BFB] flex justify-center items-center rounded">
                      Technology
                    </div>
                    <div className="w-[330px] text-[24px]">
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
                    </div>
                  </div>
                  <div>
                    <Ognoo />
                  </div>
                </div>
              </div>
              <div className="w-[392px] h-[476px] rounded border-[#E8E8EA] shadow pt-4 pl-4">
                <div>
                  <img
                    className="w-[360px] h-[240px] rounded-md"
                    src="photo6.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-5 pt-5">
                  <div>
                    <div className="w-[97px] h-[28px] bg-[#4B6BFB0D] text-[#4B6BFB] flex justify-center items-center rounded">
                      Technology
                    </div>
                    <div className="w-[330px] text-[24px]">
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
                    </div>
                  </div>
                  <div>
                    <Ognoo />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-[392px] h-[476px] rounded border-[#E8E8EA] shadow pt-4 pl-4">
                <div>
                  <img
                    className="w-[360px] h-[240px] rounded-md"
                    src="photo7.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-5 pt-5">
                  <div>
                    <div className="w-[97px] h-[28px] bg-[#4B6BFB0D] text-[#4B6BFB] flex justify-center items-center rounded">
                      Technology
                    </div>
                    <div className="w-[330px] text-[24px]">
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
                    </div>
                  </div>
                  <div>
                    <Ognoo />
                  </div>
                </div>
              </div>
              <div className="w-[392px] h-[476px] rounded border-[#E8E8EA] shadow pt-4 pl-4">
                <div>
                  <img
                    className="w-[360px] h-[240px] rounded-md"
                    src="photo5.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-5 pt-5">
                  <div>
                    <div className="w-[97px] h-[28px] bg-[#4B6BFB0D] text-[#4B6BFB] flex justify-center items-center rounded">
                      Technology
                    </div>
                    <div className="w-[330px] text-[24px]">
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
                    </div>
                  </div>
                  <div>
                    <Ognoo />
                  </div>
                </div>
              </div>
              <div className="w-[392px] h-[476px] rounded border-[#E8E8EA] shadow pt-4 pl-4">
                <div>
                  <img
                    className="w-[360px] h-[240px] rounded-md"
                    src="photo1.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col gap-5 pt-5">
                  <div>
                    <div className="w-[97px] h-[28px] bg-[#4B6BFB0D] text-[#4B6BFB] flex justify-center items-center rounded">
                      Technology
                    </div>
                    <div className="w-[330px] text-[24px]">
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
                    </div>
                  </div>
                  <div>
                    <Ognoo />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pb-20 pt-10">
            <div className="w-[123px] h-[48px] bg-[#696A754D] rounded-md items-center flex justify-center ">
              Load More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
