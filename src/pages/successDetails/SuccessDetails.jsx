import { IoIosArrowRoundBack } from "react-icons/io";
import "./SucessDetails.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const successDetails = () => {
    const {id} = useParams('id');
    const [singleCoffee, setSingleCoffee] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/coffee/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleCoffee(data);
            })
    }, [])


    return (
        <div className="bg_image_addNewCoffee w-full flex items-center justify-center mb-20">
            <div className="w-3/4">
                <Link to={'/'}>
                    <button className="py-2 px-3 hover:bg-[#D2B48C] text-center rancho-regular text-2xl rounded-lg mt-4 text-[#374151]">
                        <IoIosArrowRoundBack className="text-2xl inline text-center text-[#374151]" />
                        Back to home
                    </button>
                </Link>
                <div className="p-20 bg-[#F4F3F0] mt-4">
                    <div className="w-full flex items-center justify-evenly">
                        <div>
                            <img src={singleCoffee.photo} alt="" />
                        </div>
                        <div>
                            <h1 className="text-[#331A15] rancho-regular text-4xl mb-8">Niceties</h1>
                            <div className="flex flex-col gap-1">
                                <p className="text-xl text-[#5C5B5B] raleway"><span className="font-semibold text-black">Name:</span> {singleCoffee.name}</p>
                                <p className="text-xl text-[#5C5B5B] raleway"><span className="font-semibold text-black">Chef:</span> {singleCoffee.chef}</p>
                                <p className="text-xl text-[#5C5B5B] raleway"><span className="font-semibold text-black">Supplier:</span> {singleCoffee.supplier}</p>
                                <p className="text-xl text-[#5C5B5B] raleway"><span className="font-semibold text-black">Taste:</span> {singleCoffee.test}</p>
                                <p className="text-xl text-[#5C5B5B] raleway"><span className="font-semibold text-black">Category:</span> {singleCoffee.category}</p>
                                <p className="text-xl text-[#5C5B5B] raleway"><span className="font-semibold text-black">Details:</span> {singleCoffee.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default successDetails;