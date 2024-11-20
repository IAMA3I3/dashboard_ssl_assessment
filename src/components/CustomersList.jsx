import CustomerListItem from "./CustomerListItem"
import Ab from "../assets/ab.jpeg"
import Gl from "../assets/gl.jpeg"
import Jm from "../assets/jm.jpeg"
import Jj from "../assets/jj.jpeg"
import Ma from "../assets/ma.png"
import Kb from "../assets/kb.png"
import He from "../assets/he.png"

const CustomersList = () => {

    return (
        <div className=" p-4 w-full xl:w-[289px] h-[445px] rounded-lg shadow-lg shadow-[#8F95B226] bg-[#FFFFFF] flex flex-col">
            <div className="">
                <div className=" font-inter font-[700] text-[18px] leading-[24px] text-[#081735]">Customers List</div>
            </div>
            <div className=" flex-1 p-2 overflow-y-auto scrollbar">
                {
                    Customers.map((item, index) => (
                        <div key={index} className=" my-1">
                            <CustomerListItem item={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CustomersList

const Customers = [
    { img: Ab, name: "Ana Black", email: "ana@gmail.com" },
    { img: Gl, name: "George Litz", email: "georgelitz@gmail.com" },
    { img: Jm, name: "John Miller", email: "jmiller@gmail.com" },
    { img: Jj, name: "Jane Jonhson", email: "jj@gmail.com" },
    { img: Ma, name: "Mezei Ágnes", email: "fefekartika@gmail.com" },
    { img: Kb, name: "Katona Beatrix", email: "edobram@gmail.com" },
    { img: He, name: "Halász Emese", email: "jiloputri@yahoo.com" },
]