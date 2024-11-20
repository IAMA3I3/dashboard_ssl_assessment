import { ReactSVG } from 'react-svg'
import Menu from "../assets/Frame 70.svg"
import Eye from "../assets/carbon_view-filled.svg"
import Export from "../assets/bx_bx-export.svg"
import Trash from "../assets/feather_trash-2.svg"
import { useEffect, useState } from "react"

const CardFrame = ({ title, subTitle = "", menu = false, children, customClasses = "" }) => {

    const [openMenu, setOpenMenu] = useState(false)

    const toggleMenu = (e) => {
        e.stopPropagation()
        setOpenMenu(!openMenu)
    }

    useEffect(() => {
        const handleClickOutside = () => setOpenMenu(false)
        window.addEventListener('click', handleClickOutside)
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [])

    return (
        <div className={`${customClasses} w-full rounded-lg shadow-lg shadow-[#8F95B226] bg-[#FFFFFF]`}>
            <div className=" p-4 h-[64px] items-center flex justify-between">
                <div className="">
                    <div className=" font-inter font-[700] text-[18px] leading-[24px] text-[#081735]">{title}</div>
                    <div className=" font-inter font-[400] text-[12px] leading-[16px] text-[#8F95B2]">{subTitle}</div>
                </div>
                {
                    menu &&
                    <div className=" relative">
                        <div onClick={toggleMenu} className=" cursor-pointer p-4">
                            <ReactSVG src={Menu} />
                        </div>
                        <div className={`${openMenu ? ' translate-y-0 opacity-100 visible' : ' translate-y-[-20px] opacity-0 invisible'} transition-all duration-500 absolute right-0 w-[150px] rounded-md bg-white border border-[#E6E8F0] shadow-md shadow-[#8F95B226]`}>
                            <div className=" w-full *:flex *:gap-4 *:items-center *:py-2 *:px-4 *:cursor-pointer">
                                <div className="">
                                    <ReactSVG src={Eye} />
                                    <div className=" font-inter font-[400] text-[14px] leading-[20px] text-[#8F95B2]">View</div>
                                </div>
                                <div className="">
                                    <ReactSVG src={Export} />
                                    <div className=" font-inter font-[400] text-[14px] leading-[20px] text-[#8F95B2]">Export</div>
                                </div>
                                <div className="">
                                    <ReactSVG src={Trash} />
                                    <div className=" font-inter font-[400] text-[14px] leading-[20px] text-[#FF754C]">Remove</div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className=" w-full h-[1px] bg-[#E6E8F0]"></div>
            {children}
        </div>
    )
}

export default CardFrame