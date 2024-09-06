import Link from "next/link";
export const A404Ppage = () => {
  return (
    <div className="flex  justify-center pt-[100px] pb-20">
      <div className="flex gap-24  w-[642px] h-[208px]  ">
        <div className="text-[72px]">404</div>
        <div className=" flex flex-col gap-4">
          <div className="text-[24px] text-[#000000]">Page Not Found</div>
          <div className="text-[18px] text-[#696A75] w-[392px]">
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </div>
          <div>
            <div
              className=" text-[14px] w-[130px] h-[40px]  bg-[#4B6BFB] flex
              items-center justify-center text-white rounded-lg"
            >
              <Link href={"home"}> Back to Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
