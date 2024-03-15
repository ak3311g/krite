import BrandsList from "./brandslist";
import Header from "./header";
import data from "../../data.json";

export default function Mainlist() {

    return (
        <>
            <div className="flex flex-col w-full">
                <Header />
                <BrandsList brands = {data.brands}/>
            </div>
        </>
    )
}