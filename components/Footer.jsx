import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaSnapchatGhost, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import Wrapper from "./Wrapper";
import { Input } from 'antd';

const Footer = () => {
    const [mail, setMail] = useState('')



    const subscribeByMail = () => {
        console.log('mail', mail);
    }

    return (
        // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0"
        <footer className="bg-black text-white pt-14 pb-3">
            <Wrapper className="flex justify-between flex-col gap-[50px] md:gap-0">
                <div className="footer-top md:p-10 p-2 flex flex-row justify-between flex-wrap">
                    <div>
                        <p className="font-serif font-bold text-4xl">Don't Miss Out</p>
                        <p>Subscribe for the latest news, product samples and coupons</p>
                        <p className="mt-8 text-lg">Email</p>
                        <Input placeholder="abc@gmail.com" className="rounded-none" type="text" onChange={(e) => { setMail(e.target.value) }} />
                        <button
                            className="w-full p-2 mt-4 bg-black border-slate-100 border-2 text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center"
                            onClick={() => { subscribeByMail() }}
                        >
                            Subscribe
                        </button>

                        <div className="mt-8 flex flex-row justify-around items-center flex-wrap">
                            <div
                                onClick={() =>
                                    window.open("https://www.facebook.com/Shukarr", "_blank")
                                }
                                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-black hover:bg-white/[0.2] cursor-pointer"
                            >
                                <FaFacebookF size={20} color="white" />
                            </div>
                            <div
                                onClick={() =>
                                    window.open("https://www.instagram.com/shukarr", "_blank")
                                }
                                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-black hover:bg-white/[0.2] cursor-pointer"
                            >
                                <FaInstagram size={20} color="white" />
                            </div>
                            <div
                                onClick={() =>
                                    window.open("https://www.twitter.com", "_blank")
                                }
                                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-black hover:bg-white/[0.2] cursor-pointer"
                            >
                                <FaTwitter size={20} color="white" />
                            </div>
                            <div
                                onClick={() =>
                                    window.open("https://www.youtube.com", "_blank")
                                }
                                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-black hover:bg-white/[0.2] cursor-pointer"
                            >
                                <FaYoutube size={20} color="white" />
                            </div>
                            <div
                                onClick={() =>
                                    window.open("https://www.youtube.com", "_blank")
                                }
                                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-black hover:bg-white/[0.2] cursor-pointer"
                            >
                                <FaSnapchatGhost size={20} color="white" />
                            </div>
                            <div
                                onClick={() =>
                                    window.open("https://www.youtube.com", "_blank")
                                }
                                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-black hover:bg-white/[0.2] cursor-pointer"
                            >
                                <FaWhatsapp size={20} color="white" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 md:mt-0">
                        <h2 className="font-normal text-lg">Company</h2>

                        <ul className="list-none md:mt-4 mt-2 leading-loose cursor-pointer">
                            <li className="text-gray-300">Home</li>
                            <li className="text-gray-300">About Us</li>
                        </ul>
                    </div>
                    <div className="mt-10 md:mt-0">
                        <div>
                            <h2 className="font-normal text-lg">Customer Services</h2>

                            <ul className="list-none md:mt-4 mt-2 leading-loose cursor-pointer">
                                <li className="text-gray-300">Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                </div>
            </Wrapper>
            <div className="p-2 border-2 border-gray-800 w-full h-10 flex items-center">
                <div className="text-[12px] text-white/[0.5] text-center md:text-left">
                    <FaMapMarkerAlt size={12} className="inline" /> <strong>Pakistan</strong> <span className="ml-4">© 2023 Shukarr, Inc. All Rights Reserved</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
