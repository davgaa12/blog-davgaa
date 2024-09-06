export const Blog = ({ url, badge, title1, date }) => {
  return (
    <div className="w-[392px] h-[476px] rounded border-[#E8E8EA] shadow pt-4 pl-4">
      <div>
        <img className="w-[360px] h-[240px] rounded-md" src={url} alt="" />
      </div>
      <div className="flex flex-col gap-5 pt-5">
        <div>
          <div className="w-[97px] h-[28px] bg-[#4B6BFB0D] text-[#4B6BFB] flex justify-center items-center rounded">
            {badge}
          </div>
          <div className="w-[330px] text-[24px] line-clamp-3">{title1}</div>
        </div>

        <p className="text-[16px] not-italic font-normal leading-5 text-[#97989F]">
          {date}
        </p>
      </div>
    </div>
  );
};
