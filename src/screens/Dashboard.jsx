import Card1 from "../components/Card1"
import File from "../assets/Icon1.svg"
import Graph from "../assets/Icon2.svg"
import Users from "../assets/Icon3.svg"
import Bag from "../assets/Icon4.svg"
import CardFrame from "../components/CardFrame"
import BarChart from "../components/BarChart"
import GraphComponent from "../components/GraphComponent"
import MapComponent from "../components/MapComponent"
import CustomersList from "../components/CustomersList"
import Menu from "../components/Menu"

const Dashboard = () => {

    return (
        <div className=" p-4">
            <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                <Card1 icon={File} text={"Total Menu"} value={"345"} />
                <Card1 icon={Graph} text={"Total Revenue"} value={"$37,193.00"} />
                <Card1 icon={Users} text={"Total Customer"} value={"1349"} />
                <Card1 icon={Bag} text={"Total Orders"} value={"3,500"} />
            </div>
            <div className=" mt-8 flex flex-col xl:flex-row *:w-full gap-4">
                <CardFrame title={"Revenue"} menu >
                    <div className=" p-4">
                        <div className=" font-inter font-[700] text-[32px] leading-[32px] text-[#081735]">$112,340</div>
                        <BarChart />
                    </div>
                </CardFrame>
                <CardFrame title={"Customers"} subTitle="Customers that buy our products" menu >
                    <div className=" p-4">
                        <GraphComponent />
                    </div>
                </CardFrame>
            </div>
            <div className=" mt-8 flex flex-col xl:flex-row gap-4">
                <CardFrame title={"Customer Map"} customClasses=" flex-1" >
                    <div className=" p-4 h-[381px]">
                        <MapComponent />
                    </div>
                </CardFrame>
                <CustomersList />
            </div>
            <div className=" mt-8">
                <Menu />
            </div>
        </div>
    )
}

export default Dashboard