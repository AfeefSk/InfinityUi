import React from 'react';
import Icon from "../assets/Infi.png";
import { ImLinkedin2, ImFacebook } from "react-icons/im";

const Footer = () => {
    return (
        <>
            <div className="w-[70%]  h-[2px] bg-gradient-to-r from-purple-700 via-blue-600 to-teal-500"></div>
            <div className="overflow-x-hidden max-w-screen font-poppins">
                <footer className="py-6 bg-gradient-to-r from-purple-500 via-blue-400 to-teal-200 text-white text-2xl ">
                    <div className="container px-6 mx-auto space-y-6 divide-y  md:space-y-12 divide-opacity-50">
                        <div className="grid grid-cols-12">
                            <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                                <div to="/" className="flex justify-center space-x-3 md:justify-start">
                                    <div className="flex items-center justify-center w-40 h-8 mt-1">
                                        <img
                                            src={Icon}
                                            alt="icon"
                                            className=""
                                        />
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-span-6 text-center md:text-left md:col-span-3">
                                <p className='py-2 text-blue-800 font-bold  '>LinkS</p>
                                <ul>
                                    <li className=" mr-2 text-purple-600 hover:text-purple-900 font-semibold cursor-pointer">
                                        <div to="/">Home</div>
                                    </li>
                                    <li className=" mr-2 text-purple-600 hover:text-purple-900 font-semibold cursor-pointer">
                                        <div to="/about">About</div>
                                    </li>
                                    <li className=" mr-2 text-purple-600 hover:text-purple-900 font-semibold cursor-pointer">
                                        <div to="/services">Services</div>
                                    </li>
                                    
                                    <li className=" text-purple-600 hover:text-purple-900 font-semibold cursor-pointer">
                                        <div to="/contact">Contact</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-6 text-center md:text-left md:col-span-3">
                                <p className='py-2 text-blue-800 font-bold'>COMPANY</p>
                                <ul>
                                    <li className=" mr-2 text-purple-600 hover:text-purple-900 font-semibold cursor-pointer">
                                        <div to="/">Privacy</div>
                                    </li>
                                    <li className=" mr-2 text-purple-600 hover:text-purple-900 font-semibold cursor-pointer">
                                        <div to="/">Terms of Service</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid justify-center pt-6 lg:justify-between text-xl">
                            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                                <span>©2024 <span className='text-blue-500'>InfiniteB2B</span>. All rights reserved.</span>
                            </div>
                            <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                                <div to="/" title="linkIn" className="flex items-center justify-center  rounded-full">
                                    <ImLinkedin2 className='text-blue-500 w-7 h-7' />
                                </div>
                                <div to="/" title="Facebook" className="flex items-center justify-center  rounded-full">
                                    <ImFacebook className='text-blue-500 w-7 h-7' />
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            
        </>
    );
}

export default Footer;