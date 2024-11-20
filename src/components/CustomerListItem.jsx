const CustomerListItem = ({ item }) => {

    return (
        <div className=" py-2 flex items-center gap-4">
            <div className=" w-[40px] aspect-square rounded-full overflow-hidden">
                <img src={item.img} className=" w-full h-full object-cover" alt="" />
            </div>
            <div className="">
                <div className=" font-inter font-[700] text-[14px] leading-[20px] text-[#1E293B]">{item.name}</div>
                <div className=" font-inter font-[400] text-[14px] leading-[20px] text-[#64748B]">{item.email}</div>
            </div>
        </div>
    )
}

export default CustomerListItem