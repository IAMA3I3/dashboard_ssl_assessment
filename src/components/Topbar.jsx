import { CgMenuLeft } from "react-icons/cg"
import Girl from "../assets/f3982a3f38174ada0e7b09506ea13edc.png"
import { ReactSVG } from 'react-svg'
import Search from "../assets/Search.svg"
import Mail from "../assets/mail.svg"
import Bell from "../assets/bell.svg"

const Topbar = ({ toggleNav }) => {

    return (
        <div className=" bg-white shadow-sm p-4">
            <div className=" flex flex-col md:flex-row gap-4">
                <div className=" flex-1 flex items-center gap-4">
                    <div onClick={toggleNav} className=" md:hidden text-xl w-[25px]">
                        <CgMenuLeft />
                    </div>
                    <div className=" scale-90 md:scale-100">
                        <div className=" font-inter font-[700] text-[24px] leading-[31.2px] text-[#111827]">Hi, Taylor!</div>
                        <div className=" font-inter font-[400] text-[14px] leading-[22.4px] text-[#718096]">Let’s check your store today</div>
                    </div>
                </div>
                <div className=" flex flex-row-reverse justify-between md:flex-row gap-4 items-center">
                    <div className=" flex items-center gap-4">
                        <form className=" hidden xl:block relative w-[282px] h-[48px] rounded-lg bg-[#FAFAFA] border border-[#D9D9D9] overflow-hidden">
                            <button className=" absolute top-[50%] translate-y-[-50%] left-4">
                                <ReactSVG src={Search} />
                            </button>
                            <input type="text" placeholder="Search..." className=" w-full h-full outline-none p-2 pl-12" name="" id="" />
                        </form>
                        <div className=" xl:hidden">
                            <ReactSVG src={Search} />
                        </div>
                        <div className=" relative">
                            <div className=" absolute top-[2px] right-[2px] w-[8px] aspect-square rounded-full bg-[#FD6A6A] border border-white"></div>
                            <ReactSVG src={Mail} />
                        </div>
                        <div className=" relative">
                            <div className=" absolute top-[2px] right-[2px] w-[8px] aspect-square rounded-full bg-[#FD6A6A] border border-white"></div>
                            <ReactSVG src={Bell} />
                        </div>
                    </div>
                    <div className=" h-full w-[1px] bg-[#EEEFF2]"></div>
                    <div className=" flex items-center gap-4">
                        <div className=" w-[25px] md:hidden"></div>
                        <div className=" scale-90 md:scale-100 w-[48px] aspect-square rounded-full overflow-hidden bg-[#FFD023]">
                            <img src={Girl} className=" w-full h-full object-contain" alt="" />
                        </div>
                        <div className=" hidden md:block font-sans font-[700] text-[16px] leading-[24px] text-[#111827]">Tynisha Obey</div>
                    </div>
                </div>
            </div>
            <div className=" md:hidden"></div>
        </div>
    )
}

export default Topbar