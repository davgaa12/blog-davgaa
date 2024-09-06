import { Line1 } from "../icons/Line1";
import { Line2 } from "../icons/Line2";
import { Ognoo } from "../icons/Ognoo";

export const Cros = ({ url1 }) => {
  return (
    <div className="  pt-[100px] flex  justify-center ">
      <div className="flex flex-col">
        <div
          style={{
            backgroundImage: `url(${url1})`,
            width: "100%",
            height: "600px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "6px",
          }}
          className="  w-[1216px] h-[600px] pt-[333px] pl-3 "
        >
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
    </div>
  );
};
