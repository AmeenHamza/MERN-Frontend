/********************************
* File Name: Checkout.jsx 		*
* Author: Ameen Hamza 			*
* Output: Checkout Component 	*
********************************/

import React from 'react';
import "./checkout.css";
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../Context/Login-Context/login-context';
import { GlobalContext } from '../Context/context';
import axios from 'axios';

export default function Checkout() {

	const { loginState } = useContext(LoginContext);
	let { state } = useContext(GlobalContext);

	const [customerName, setName] = useState("")
	const [message, setMessage] = useState("")
	const [customerContact, setContact] = useState("")
	const [customerAddress, setAddress] = useState("")
	const [items, setitems] = useState([])
	const [totalBill, settotalBill] = useState("")
	const [customerEmail, setCustomerEmail] = useState("")
	const [status, setstatus] = useState("pending")


	const setCustomerName = (e) => {
		setName(e.target.value)
	}


	const setCustomerAddress = (e) => {
		setAddress(e.target.value)
	}

	const setCustomerContact = (e) => {
		setContact(e.target.value)
	}

	const CustomerEmail = (e) => {
		setCustomerEmail(e.target.value)
	}

	useEffect(() => {
		if (state.cart) {
			setitems(state.cart);
			calculateTotalBill();
		}
	}, [state.cart]);

	const calculateTotalBill = () => {
		const total = state.cart.reduce((acc, item) => acc + (item.price * item.count), 0);
		settotalBill(total);
	};

	useEffect(() => {
		calculateTotalBill(); // Calculate the total when the cart changes
	}, [state.cart]);
	const placeOrder = async () => {
        // Prepare the payload
        const payload = {
            items: items,
            totalBill: totalBill,
            customerAddress: customerAddress,
            customerContact: customerContact,
            customerName: customerName,
            customerEmail: customerEmail,
            status: status
        }

		const userResponse = await axios.get(`http://localhost:5001/api/users/getUserByID?email=${customerEmail}`);
            const userData = userResponse.data.user;
            {
				userData? setName(userData.name) : setMessage("User not Found Login First")
			}

        try {
            // Fetch user data
            // Make the POST request to create an order
            const orderResponse = await axios.post(`http://localhost:5001/api/order/createOrder`, payload);
            setMessage(orderResponse.data.message);
            console.log(orderResponse.data);
        } catch (error) {
            console.error(error);
            alert('An error occurred while placing the order.');
        }
    }



	return (
		<form className="form">

			<header>
				<h2 className='text-center'>Order Information <span className='text-danger'>{message}</span></h2>
				<span className="message">Fill the form to continue.</span>
			</header>
			<label>
				<span>Customer Email</span>
				<input
					placeholder="Enter your email"
					className="input"
					type="text"
					required={true}
					value={customerEmail}
					onChange={CustomerEmail}
				/>
			</label>
			<label>
				<span>Customer Contact</span>
				<input
					placeholder="Type your address"
					className="input"
					type="text"
					required={true}
					value={customerContact}
					onChange={setCustomerContact}
				/>
			</label>
			<label>
				<span>Customer Contact</span>
				<input
					placeholder="Type your address"
					className="input"
					type="text"
					required={true}
					value={customerAddress}
					onChange={setCustomerAddress}
				/>
			</label>
			<small>Cash On Delivery</small>

			<button onClick={placeOrder}>Place Order</button>

		</form>

	)
}
