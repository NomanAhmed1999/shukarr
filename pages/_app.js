import "@/styles/globals.css";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Provider } from "react-redux";
import store from "@/store/store";
import { useEffect } from "react";
import TagManager from "react-gtm-module";

export default function App({ Component, pageProps }) {

    let GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;


    useEffect(() => {
        TagManager.initialize({ gtmId: GTM_ID });
    }, []);


    const schema = {
        "@context": "https://schema.org/", 
        "@type": "Product", 
        "name": "Flame design Humidifier",
        "image": "https://www.shukarr.com/product/f-1",
        "description": "Health benefits: The humidifier adds moisture to the air, which can help alleviate symptoms of dry skin, sore throats, and allergies. It also helps to keep plants healthy by providing them with the necessary moisture they need. Improved air quality: By adding moisture to the air, the humidifier can improve the overall quality of the air in your space, making it easier to breathe and promoting a healthy living environment. Description Introducing our flame design humidifier, the perfect addition to your home or office! This stylish and modern humidifier not only adds moisture to the air but also serves as a beautiful and eye-catching piece of décor. The flame design of this humidifier is both unique and elegant, featuring a sleek black base with a white flame-shaped top that emits a soothing mist. It's not only functional but also aesthetically pleasing and can blend in with any interior design. The flame design humidifier is equipped with a large water tank that can hold up to 180ml of water, providing up to 6 hours of continuous mist output. It also features an auto-shutoff feature that prevents the humidifier from overheating or running out of water. It also operates silently, making it perfect for use in bedrooms, offices, or any other space where you need a peaceful environment. Our flame design humidifier not only adds moisture to the air, but it can also help alleviate symptoms of dry skin, sore throats, and allergies. It also helps to keep your plants healthy by providing them with the necessary moisture they need. In summary, our flame design humidifier is an excellent addition to any home or office. It's stylish, functional, easy to use, and can improve the overall quality of the air in your space.",
        "brand": {
          "@type": "Brand",
          "name": "Shukarr"
        },
        "sku": "",
        "offers": {
          "@type": "Offer",
          "url": "https://www.shukarr.com/product/f-1",
          "priceCurrency": "PKR",
          "price": "4000",
          "priceValidUntil": "2023-07-29",
          "availability": "https://schema.org/OnlineOnly",
          "itemCondition": "https://schema.org/NewCondition"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.5",
          "bestRating": "5",
          "worstRating": "0",
          "ratingCount": "5"
        }
      }

    return (
        <>
            <Head>
                <title>Shukarr | Online Store</title>
                <meta
                    name="description"
                    content="Shukarr.com offers a vast selection of premium products for all your needs. From home essentials to tech gadgets, find everything you need at unbeatable prices."
                />
                <meta name="facebook-domain-verification" content="mfzkxitulmv9x6rysfh7121gv7oefb" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
                <link rel="canonical" href="https://www.shukarr.com" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            </Head>
            <Provider store={store}>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </Provider>
        </>
    );
}
