const FoodCard = ({ item }) => {

    return (
        <div className=" relative h-full w-full rounded-lg overflow-hidden">
            <img src={item.img} className=" w-full h-full object-cover" alt="" />
            <div className=" absolute top-0 left-0 w-full h-full p-4 flex items-end">
                <div className=" w-full p-4 rounded-lg bg-[#FFFFFFA6] backdrop-blur-[27.18px] shadow-lg shadow-[#1E293B1A] border border-[#FFFFFF] flex justify-between">
                    <div className="">
                        <div className=" font-sans font-[500] text-[14px] leading-[21px] text-[#1E293B]">{item.title}</div>
                        <div className=" font-sans font-[400] text-[12px] leading-[15px] text-[#64748B]">{item.served} Served</div>
                    </div>
                    <div className=" font-sans font-[500] text-[14px] leading-[21px] text-[#1E293B]">${item.price}</div>
                </div>
            </div>
        </div>
    )
}

export default FoodCard