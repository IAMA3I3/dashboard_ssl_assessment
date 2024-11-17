import { NavLink } from "react-router-dom"
import { ReactSVG } from 'react-svg'
import Logo from "../assets/Vector.svg"
import Dashboard from "../assets/Icon.svg"
import Bag from "../assets/Bag.svg"
import Arrow from "../assets/Action Icon.svg"
import Chart from "../assets/Chart.svg"
import Users from "../assets/Users.svg"
import Document from "../assets/Document.svg"
import Close from "../assets/Button Close.svg"
import CircularProgress1 from "./CircularProgressbar1"

const Navbar = ({ openNav, toggleNav }) => {

    return (
        <>
            <div onClick={toggleNav} className={`${openNav ? ' visible opacity-100' : ' invisible opacity-0'} transition-all duration-500 md:hidden fixed w-screen h-screen bg-black/20 z-[100]`}></div>
            <div className={`${openNav ? ' translate-x-0  px-4' : ' translate-x-[-273px] md:translate-x-0 px-0 md:px-4'} transition-all duration-500 w-[271px] fixed md:static flex flex-col gap-2 top-0 bottom-0 left-0 h-screen bg-white shadow-lg py-4 overflow-hidden z-[1000]`}>
                <ReactSVG src={Arrow} onClick={toggleNav} className=" absolute top-4 right-4 rotate-180 md:hidden" />
                {/* brand */}
                <div className=" w-full my-4 flex justify-center gap-6 items-center">
                    <div className=" w-[49px] aspect-square bg-app-primary rounded-sm rounded-tl-xl rounded-br-xl flex justify-center items-center">
                        <ReactSVG src={Logo} />
                    </div>
                    <div className="">
                        <div className=" font-crete font-[400] text-[24px] leading-[30.62px]">Chucky</div>
                        <div className=" font-crete font-[400] text-[14px] leading-[17.86px]">Admin Dashboard</div>
                    </div>
                </div>
                {/*  */}
                <div className=" flex-1 px-4 overflow-y-auto scrollbar *:rounded-lg *:py-2 *:px-4 *:my-4 font-inter font-[700] text-[16px] leading-[20px] *:flex *:items-center *:gap-4 text-[#8F95B2]">
                    <NavLink className={({ isActive }) => (isActive ? ' bg-app-primary text-white' : '')} to={'/'}>
                        <ReactSVG src={Dashboard} />
                        <div className=" flex-1">Dashboard</div>
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? '' : '')} to={'#'}>
                        <ReactSVG src={Bag} />
                        <div className=" flex-1">Orders</div>
                        <ReactSVG src={Arrow} />
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? '' : '')} to={'#'}>
                        <ReactSVG src={Chart} />
                        <div className=" flex-1">Analytics</div>
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? '' : '')} to={'#'}>
                        <ReactSVG src={Users} />
                        <div className=" flex-1">Customer</div>
                    </NavLink>
                    <NavLink className={({ isActive }) => (isActive ? '' : '')} to={'#'}>
                        <ReactSVG src={Document} />
                        <div className=" flex-1">Menu</div>
                    </NavLink>
                </div>
                {/*  */}
                <div className=" relative bg-[#F8F9FB] rounded-lg p-4">
                    <ReactSVG src={Close} className=" absolute top-0 right-0" />
                    <div className=" my-2">
                        <CircularProgress1 percentage={86} />
                    </div>
                    <div className=" font-inter font-[600] text-[15px] leading-[22px] tracking-[-0.1px]">Subscription Plan</div>
                    <div className=" font-inter font-[400] text-[14px] leading-[20px] tracking-[-0.1px]">Your Subscription plan will expire soon please upgrade!</div>
                    <a className=" mt-8 text-app-primary font-inter font-[600] text-[14px] leading-[20px]" href="/#">Upgrade</a>
                </div>
            </div>
        </>
    )
}

export default Navbar