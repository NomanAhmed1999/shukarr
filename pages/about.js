import Image from "next/image";
import React, {useState} from "react";
export default function AboutUs() {

    const [readFull, setReadFull] = useState(false);

    return (
        <>
            <div className="flex flex-row flex-wrap md:flex-nowrap justify-around p-4 md:p-20">
                <div className="md:w-[40rem] w-[40rem] p-0 md:p-10">
                <h1 className="font-bold text-4xl">About Us</h1>
                <p>Shukarr is an online e-commerce store that offers a unique and hassle-free shopping experience for customers. From trendy fashion items to home appliances, Shukarr has a vast collection of products to choose from.
                    As soon as you visit the Shukarr.com, you will be amazed by its user-friendly interface and elegant design. The website is easy to navigate and allows you to find your desired products quickly. The products are categorized into different sections, making it easier for you to find what you are looking for.
                </p>
                {
                    readFull ? 
                    <p>
                        Shukarr prides itself on offering high-quality products at affordable prices. The store sources its products from trusted suppliers and manufacturers, ensuring that every product sold is of the highest quality. From the packaging to the delivery, Shukarr ensures that every aspect of your shopping experience is top-notch.
                        One of the unique features of Shukarr is its customer service. The store has a dedicated team of customer service representatives who are always ready to assist you with any questions or concerns. Shukarr also offers various payment options, making it easier for you to complete your purchases.
                        Overall, Shukarr is an excellent e-commerce store that offers a wide range of products, excellent customer service, and hassle-free shopping experience. Shop now and experience the convenience and quality of Shukarr, And Do Shukarr to Allah who blessed you!
                    </p>: null
                }
                {
                    readFull ? 
                    <p>
                    <button onClick={() => {setReadFull(false)}} className="md:w-28 w-18 mt-4 bg-black text-white md:text-lg text-sm px-2 transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
                    Read Less
                </button>
                    </p>
                    :
                <button onClick={() => {setReadFull(true)}} className="md:w-28 w-18 mt-4 bg-black text-white md:text-lg text-sm px-2 transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
                    Read More
                </button>

                }

                </div>
                <div className="md:w-[30rem] w-[40rem] p-0 md:pt-20">
                <Image
                width={500}
                height={500}
                src='/shukarr-cover.png'
                alt="store Image"
            />
                </div>
            </div>
        </>
    );
}
/*

                    Shukarr prides itself on offering high-quality products at affordable prices. The store sources its products from trusted suppliers and manufacturers, ensuring that every product sold is of the highest quality. From the packaging to the delivery, Shukarr ensures that every aspect of your shopping experience is top-notch.

                    One of the unique features of Shukarr is its customer service. The store has a dedicated team of customer service representatives who are always ready to assist you with any questions or concerns. Shukarr also offers various payment options, making it easier for you to complete your purchases.

                    Overall, Shukarr is an excellent e-commerce store that offers a wide range of products, excellent customer service, and hassle-free shopping experience. Shop now and experience the convenience and quality of Shukarr! */