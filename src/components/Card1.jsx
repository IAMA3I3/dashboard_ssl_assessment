import { ReactSVG } from 'react-svg'

const Card1 = ({ icon, text, value }) => {

    return (
        <div className=" w-full p-4 rounded-lg shadow-lg bg-[#F9F9FB] shadow-[#0C1A240A]">
            <div className=" mb-4">
                <ReactSVG src={icon} />
            </div>
            <div className=" font-inter font-[400] text-[14px] leading-[21px] text-[#64748B]">{text}</div>
            <div className=" font-inter font-[600] text-[30px] leading-[41.1px] tracking-[-0.8px] text-[#1E293B]">{value}</div>
        </div>
    )
}

export default Card1