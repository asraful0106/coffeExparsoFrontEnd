import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


const Footer = () => {
    return (
        <footer className="  bg_image1 mt-auto">
            <div className='w-full flex items-center justify-center'>
                <div className='w-full flex items-center justify-around mt-9'>
                    <div className='flex flex-col gap-6'>
                        <img className='w-20' src="/public/images/more/logo1.png" alt="" />
                        <h1 className='text-5xl text-[#331A15] rancho-regular'>Espresso Emporium</h1>
                        <p className='text-xl text-[#1B1A1A] raleway max-w-[663px]'>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className='flex gap-4'>
                            <FaFacebook className='text-3xl' />
                            <FaTwitter className='text-3xl' />
                            <FaInstagram className='text-3xl' />
                            <FaLinkedin className='text-3xl' />
                        </div>
                        <h1 className='text-5xl text-[#331A15] rancho-regular'>Get in Touch</h1>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-4 items-center'>
                                <FaPhoneSquareAlt className='text-xl' />
                                <p className='text-lg'>+88 01533 333 333</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <MdEmail className='text-xl' />
                                <p className='text-lg'>info@gmail.com</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <FaLocationDot className='text-xl' />
                                <p className='text-lg'>72, Wall street, King Road, Dhaka</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-5xl text-[#331A15] rancho-regular mb-8'>Connect with Us</h1>
                        <form className="flex flex-col gap-4 lg:w-[503px]">
                            <div className="form-control">
                                <input type="email" placeholder="Name" className="input" required />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="Email" className="input" required />
                            </div>
                            <div className="form-control relative">
                                <input type="text" className="input h-28" required />
                                <span className="absolute left-4 top-6 transform -translate-y-1/2 text-gray-400 text-[16px]">Massage</span>
                            </div>
                            <div>
                                <button className="border-2 py-3 px-5 rounded-full border-[#331A15] text-[#331A15] rancho-regular text-xl">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='bg_image2 h-12 w-full mt-12 flex items-center justify-center'>
                <h1 className='text-white rancho-regular text-xl'>Copyright Espresso Emporium ! All Rights Reserved</h1>
            </div>
        </footer>
    );
};

export default Footer;