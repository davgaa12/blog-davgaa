export const Tran = ({url, tag, tag2}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        width: "100%",
        height: "340px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "6px",
      }}
      className="  w-[289px] h-[320px] rounded-md pt-[200px] pl-[15px] "
    >
      <div
        className="w-[86px] h-[28px] bg-[#4B6BFB]  flex rounded items-center justify-center text-black
               text-[12px] line-clamp-3"
      >
        {tag}
      </div>
      <div className="text-white text-[18px] w-[250px]">{tag2}</div>
    </div>
  );
};
