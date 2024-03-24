import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <div className="bg-blue-800 py-10" >
            <div className="container mx-auto flex justify-between item-center">
                <span className="text-3xl text-white font-bold traking-tight">
                    MernHolidays.com
                </span>
                <span className="text-white font-bold tracking-tight flex gap-4">
                    <p className="cursor-pointer ">Privacy Policy</p>
                    <p className="cursor-pointer ">Terms of Services</p>
                    <p className="cursor-pointer ">
                          Hotel Booking FAQs
                    </p>
                </span>
            </div>
        </div>


    );
};

export default Footer;