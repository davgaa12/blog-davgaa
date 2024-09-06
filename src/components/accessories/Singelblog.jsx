export const Singelblog = ({title, date, img,text}) => {
  return (
    <div>
      <div className=" pt-[100px] flex  justify-center pb-20  ">
        <div className="flex flex-col gap-8 ">
          <div className="w-[800px] text-[36px]">{title}</div>
          <div className="flex">
            <div className="flex w-[266px]">
              <img
                src="
               imaeeeege.png"
                alt=""
              />
              <div className="text-[#696A75] text-[14px]">Tracey Wilson</div>
            </div>
            <div>{date}</div>
          </div>

          <div>
            <img src={img} alt="" />
          </div>
          <div className="w-[800px] text-[#3B3C4A] text-[20px]">
            {title}
          </div>
          <div className="w-[800px] text-[#3B3C4A] text-[20px]">
            {text}
          </div>
          <div className="w-[800px] text-[#181A2A] text-[24px]">
            Research Your Destination
          </div>
          <div className="w-[800px] text-[#3B3C4A] text-[20px]">
            Before embarking on your journey, take the time to research your
            destination. This includes understanding the local culture, customs,
            and laws, as well as identifying top attractions, restaurants, and
            accommodations. Doing so will help you navigate your destination
            with confidence and avoid any cultural faux pas.
          </div>
          <div className="w-[800px] text-[#3B3C4A] text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. In
            hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
            faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
            elementum nisi quis eleifend quam adipiscing vitae. Viverra
            adipiscing at in tellus.
          </div>
          <div className="w-[800px] text-[#181A2A] text-[24px]">
            Plan Your Itinerary
          </div>
          <div className="w-[800px] text-[#3B3C4A] text-[20px]">
            While it's essential to leave room for spontaneity and unexpected
            adventures, having a rough itinerary can help you make the most of
            your time and budget. Identify the must-see sights and experiences
            and prioritize them according to your interests and preferences.
            This will help you avoid overscheduling and ensure that you have
            time to relax and enjoy your journey.
          </div>
          <div className="w-[800px] text-[#3B3C4A] text-[20px]">
            Vitae sapien pellentesque habitant morbi tristique. Luctus venenatis
            lectus magna fringilla. Nec ullamcorper sit amet risus nullam eget
            felis. Tincidunt arcu non sodales neque sodales ut etiam sit amet.
          </div>
        </div>
      </div>
    </div>
  );
};
