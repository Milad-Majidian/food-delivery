const preOrders = [
  {
    id: 1,
    name: "king Burgers",
    img: "/images/recently-preOrders/cover-img.png",
    brandImg: "/images/recently-preOrders/brand-logo.png",
    rate: "8/1",
  },
  {
    id: 2,
    name: "king Burgers",
    img: "/images/recently-preOrders/cover-img.png",
    brandImg: "/images/recently-preOrders/brand-logo.png",
    rate: "8/1",
  },
];
export default function RecentlyPreOrders() {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-4 mt-[40px]">
      <h3 className="text-[18px] font-normal text-secondary-secondaryTwo">
        Recently Pre Orders
      </h3>
      <div className="flex justify-center items-center gap-3">
        {preOrders.map((order, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] w-[298px] h-[184px] relative flex flex-col justify-center 
            items-center gap-3 "
          >
            <div className="relative recently-preOrders">
              <img
                style={{
                  backgroundImage: `url(${order.img})`,
                }}
                src={order.img}
                alt={order.name}
                className="cover-img"
              />
            </div>
            <div className="flex justify-start items-start gap-3 absolute bottom-[20px] left-8">
              <img
                src={order.brandImg}
                alt={order.name}
                className="w-[44px] h-[44px]"
              />
              <div className="flex flex-col justify-start items-start text-[#F2F2F2] gap-1">
                <span className="font-bold text-[18px]">{order.name}</span>
                <div className="flex gap-1 justify-start items-start">
                  <span className="font-normal text-[14px]">Rate</span>
                  <span className="font-normal text-[14px]">{order.rate}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
