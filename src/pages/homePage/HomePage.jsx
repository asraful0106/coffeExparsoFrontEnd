import { Link, useLoaderData } from 'react-router-dom';
import './HomePage.css';
import { RiCupFill } from "react-icons/ri";
import SingleProduct from '../../componentes/singleProduct/SingleProduct';
import { Gallery } from "react-grid-gallery";
import { useEffect, useState } from 'react';


const HomePage = () => {

    const [coffees, setCoffees] = useState([])
    const allCoffee = useLoaderData();

    useEffect(() => {
        setCoffees(allCoffee);
    }, [allCoffee]); 

    const reaminingCoffeeFun = (id) => {
        const reamining = allCoffee.filter(coffee => coffee._id != id);
        setCoffees(reamining);
    }

    const images = [
        {
            src: "/public/images/cups/Rectangle 10.png",
            width: 300,
            height: 300,
        },
        {
            src: "/public/images/cups/Rectangle 11.png",
            width: 300,
            height: 300,
        },
        {
            src: "/public/images/cups/Rectangle 12.png",
            width: 300,
            height: 300,
        },
        {
            src: "/public/images/cups/Rectangle 13.png",
            width: 300,
            height: 300,
        },
        {
            src: "/public/images/cups/Rectangle 14.png",
            width: 300,
            height: 300,
        },
        {
            src: "/public/images/cups/Rectangle 15.png",
            width: 300,
            height: 300,
        },
        {
            src: "/public/images/cups/Rectangle 16.png",
            width: 300,
            height: 300,
        },
    ];

    return (
        <>
            <div className='h-[100vh]'>
                {/* top section */}
                <div className='bg_image_HomeCoffee h-3/4 flex items-center justify-evenly'>
                    <div className='md:m-36'></div>
                    <div>
                        <h1 className='rancho-regular text-white text-[55px] mb-4'>Would you like a Cup of Delicious Coffee?</h1>
                        <p className='raleway text-white text-base mb-8 max-w-[724px]'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                        <button className='rancho-regular text-[#242222] text-2xl px-4 py-2 bg-[#E3B577]'>Learn More</button>
                    </div>
                </div>
                <div className='h-1/4 bg-[#eceae3] flex items-center justify-center gap-6 pt-2'>
                    <div>
                        <img className='w-12' src="/public/images/icons/1.png" alt="" />
                        <h3 className='rancho-regular my-2 text-4xl text-[#331A15]'>Awesome Aroma</h3>
                        <p className='raleway max-w-[301px] text-[#331A15]'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img className='w-12' src="/public/images/icons/2.png" alt="" />
                        <h3 className='rancho-regular my-2 text-4xl text-[#331A15]'>Awesome Aroma</h3>
                        <p className='raleway max-w-[301px] text-[#331A15]'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img className='w-12' src="/public/images/icons/3.png" alt="" />
                        <h3 className='rancho-regular my-2 text-4xl text-[#331A15]'>Awesome Aroma</h3>
                        <p className='raleway max-w-[301px] text-[#331A15]'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                    <div>
                        <img className='w-12' src="/public/images/icons/4.png" alt="" />
                        <h3 className='rancho-regular my-2 text-4xl text-[#331A15]'>Awesome Aroma</h3>
                        <p className='raleway max-w-[301px] text-[#331A15]'>You will definitely be a fan of the design & aroma of your coffee</p>
                    </div>
                </div>
            </div>

            {/* add product */}
            <div className='flex flex-col items-center mt-[120px] mb-12'>
                <h6 className='text-xl'>--- Sip & Savor ---</h6>
                <h1 className='text[#331A15] text-[55px] rancho-regular'>Our Popular Products</h1>
                <Link to={'/add-new-coffee'}><button className='px-3 py-2 border-[2px] border-[#331A15] bg-[#E3B577] rounded'>Add Coffee <RiCupFill className='inline' /></button></Link>
            </div>

            {/* All products */}
            <div className='grid grid-cols-2 gap-4 mx-4'>
                {
                    coffees.map(coffee => <SingleProduct key={coffee._id} id={coffee._id} img={coffee.photo} name={coffee.name} chef={coffee.chef} price={coffee.price} remainingCoffee={reaminingCoffeeFun} />)
                }
            </div>

            {/* Social media Section */}
            <div className='flex flex-col items-center justify-center mt-28 mb-12'>
                <h6 className='text-xl'>Follow Us Now</h6>
                <h1 className='text[#331A15] text-[55px] rancho-regular'>Follow on Instagram</h1>
            </div>

            <div className="container mx-auto lg:mr-[10px] mb-12">
                <div className="row">
                    <div className="col">
                        <div>
                            <Gallery images={images} enableImageSelection={false} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default HomePage;