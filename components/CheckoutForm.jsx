import { React, useState } from 'react';
import { BiX } from "react-icons/bi";
import { Input, Button } from 'antd';
import { makePaymentRequest } from '@/utils/api';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { removeAllFromCart } from "@/store/cartSlice";

const { TextArea } = Input;

const CheckoutForm = ({ disabledCheckoutForm, cartItems }) => {

    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const [orderItem, setOrderItem] = useState({
        data: {
            customerName: "",
            customerAddress: "",
            customerPhone: "",
            customerPhone2: "",
            streetNo: "",
            flatNo: ""
        }
    });
    const router = useRouter();
    const dispatch = useDispatch();

    const checkout = () => {
        try {
            let itemObj = orderItem;
            // let filterCartItems = cartItems.map((item) => {
            //     delete item.attributes.categoties;
            //     delete item.attributes.image.data;
            //     delete item.attributes.size;
            // })
            itemObj.data.products = cartItems;
            setOrderItem(itemObj);
            // console.log('set order', orderItem);
            if (!orderItem.data.customerName || !orderItem.data.customerAddress || !orderItem.data.customerPhone) {
                setErr(true);
            } else {
                setErr(false);
                setLoading(true);
                let res = makePaymentRequest('/api/orders', orderItem);
                if (res)
                    console.log('res', res);
                    setLoading(false);
                    dispatch(removeAllFromCart({}));
                    router.push('/success');

            }
        } catch (error) {
            console.log(error);
            setLoading(false);

        }
    }


    return (
        <div className={" fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/25 z-20 p-0 "}>
            <div className="text-black/[0.9] shadow-lg shadow-grey-500/50 w-[500px] bg-white p-0 rounded">
                <header className="flex items-center justify-between ">
                    <p></p>
                    <p>Checkout</p>
                    <button>
                        <BiX size="20px" onClick={disabledCheckoutForm} />
                    </button>
                </header>
                <section className='p-5'>
                    <p>Name<span className='text-red-700'>*</span></p><Input onChange={(e) => {
                        let itemObj = orderItem;
                        itemObj.data.customerName = e.target.value;
                        setOrderItem(itemObj);
                    }} />
                    {!orderItem.data.customerName && err ? <p className='text-red-600 text-sm'>Name is required</p> : null}
                    <p className='mt-2'>Phone Number<span className='text-red-700'>*</span></p><Input onChange={(e) => {
                        let itemObj = orderItem;
                        itemObj.data.customerPhone = e.target.value;
                        setOrderItem(itemObj);
                    }} />
                    {!orderItem.data.customerName && err ? <p className='text-red-600 text-sm'>Phone Number is required</p> : null}
                    <p className='mt-2'>Phone Number 2 {'(Optional)'}</p><Input onChange={(e) => {
                        let itemObj = orderItem;
                        itemObj.data.customerPhone2 = e.target.value;
                        setOrderItem(itemObj);
                    }} />
                    <p className='mt-2'>Street Number</p><Input onChange={(e) => {
                        let itemObj = orderItem;
                        itemObj.data.streetNo = e.target.value;
                        setOrderItem(itemObj);
                    }} />
                    <p className='mt-2'>Flat/House No</p><Input onChange={(e) => {
                        let itemObj = orderItem;
                        itemObj.data.flatNo = e.target.value;
                        setOrderItem(itemObj);
                    }} />
                    <p className='mt-2'>Full Address<span className='text-red-700'>*</span></p><TextArea rows={4} onChange={(e) => {
                        let itemObj = orderItem;
                        itemObj.data.customerAddress = e.target.value;
                        setOrderItem(itemObj);
                    }} />
                    {!orderItem.data.customerName && err ? <p className='text-red-600 text-sm'>Address is required</p> : null}
                </section>
                <footer className='flex justify-end p-5'>
                    <Button className='mr-2' onClick={disabledCheckoutForm}>Cancel</Button>
                    <Button className=' bg-black text-white' onClick={checkout}>Checkout</Button>
                </footer>
            </div>
            {loading ?
                <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
                    <img src="/logo.png" width={350} />
                    {/* <span className="text-2xl font-medium">Loading...</span> */}
                </div>
                : null
            }
        </div>
    )
};
export default CheckoutForm;