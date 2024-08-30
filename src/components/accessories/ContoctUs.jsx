export const ContoctUs = () => {
  return (
    <div className="flex  justify-center pt-[100px] pb-20">
      <div className="flex flex-col  w-[624px] gap-20 ">
        <div className="flex flex-col gap-5">
          <div>
            <div className="text-[36px] text-[#000000]">Contact Us</div>
            <div className="text-[16px] text-[#696A75] w-[624px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam
            </div>
          </div>
          <div className="flex gap-10">
            <div className="w-[294px] h-[133px] border-[#E8E8EA] shadow rounded-md flex flex-col gap-4 pt-4 pl-4">
              <div className="text-[24px] text-[#000000]">Address</div>
              <div className="text-[18px] text-[#696A75] w-[260px]">
                1328 Oak Ridge Drive, Saint Louis, Missouri
              </div>
            </div>
            <div className="w-[294px] h-[133px] border-[#E8E8EA] shadow rounded-md flex flex-col gap-4 pt-4 pl-4">
              <div className="text-[24px] text-[#000000]">Contact</div>
              <div className="text-[18px] text-[#696A75] w-[160px]">
                313-332-8662 info@email.com
              </div>
            </div>
          </div>
        </div>
        <div className="w-[624px] h-[440px] bg-[#F6F6F7] shadow-md rounded-md ">
          <div className=" flex flex-col gap-5 pt-8 pl-8">
            <div className="text-[18px] text-[#000000]">Leave a Message</div>
            <div className="flex gap-5">
              <div>
                <input
                  className="w-[225px] h-[35px] px-3 bg-[#FFFFFF] rounded-md"
                  placeholder="Your name"
                  type="text"
                />
              </div>
              <div>
                <input
                  className="w-[225px] h-[35px] px-3 bg-[#FFFFFF] rounded-md"
                  placeholder="Your email"
                  type="text"
                />
              </div>
            </div>
            <div>
              <input
                className="w-[478px] h-[35px] px-3 bg-[#FFFFFF] rounded-md"
                placeholder="Subject"
                type="text"
              />
            </div>
            <div>
              <input
                className="w-[478px] h-[134px] px-3 pb-20 bg-[#FFFFFF]  rounded-md  "
                placeholder="Write a message "
                type="text"
              />
            </div>
            <div>
              <button
                className=" text-[14px] w-[130px] h-[40px]  bg-[#4B6BFB] flex
              items-center justify-center text-white rounded-lg"
              >
                Send mess
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
