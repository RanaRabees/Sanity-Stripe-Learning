"use client";
import Swal from 'sweetalert2'
import getStipePromise from "./lib/stripe";
import toast, { Toaster } from "react-hot-toast";

const name = "First Product";

const products = [
    {
        product: 1,
        name: name,
        price: 200,
        quantity: 1,
    },
];


const StripeCheckOutButton = () => {
    const handleCheckout = async () => {
        // const handleCheckout = () => {
        Swal.fire({
            title: 'Test Mode - Payment',
            text: "Please don't use real card details",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
        })
        toast.loading('Redirecting...')
        const stripe = await getStipePromise();
        const response = await fetch("/api/stripe-session/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            cache: "no-cache",
            body: JSON.stringify(products),
        });

        const data = await response.json();
        if (data.session) {
            stripe?.redirectToCheckout({ sessionId: data.session.id });
        }
    };

    return (
        <div className="py-5">
            <Toaster />
            <button
                onClick={handleCheckout}
                className='text-xl border py-2 px-4 rounded bg-pink-600 text-black font-extrabold'>Add To Cart</button>

        </div>
    );
};

export default StripeCheckOutButton;
