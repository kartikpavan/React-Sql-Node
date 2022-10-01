import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const defaultValues = { title: "", description: "", price: null, cover: "" };

const Add = () => {
	const [book, setBook] = useState(defaultValues);
	const navigate = useNavigate();
	const handleChange = (e) => {
		setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const submitHandler = async (e) => {
		e.preventDefault();
		try {
			await axios.post("http://localhost:8800/books", book);
			navigate("/");
			setBook(defaultValues);
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<div className="flex flex-col gap-10 items-center">
			<input
				onChange={handleChange}
				type="text"
				name="title"
				id=""
				placeholder="Title"
				className="input input-bordered input-secondary w-full max-w-xs"
			/>
			<input
				onChange={handleChange}
				type="text"
				name="description"
				id=""
				placeholder="Description"
				className="input input-bordered input-secondary w-full max-w-xs"
			/>
			<input
				onChange={handleChange}
				type="number"
				name="price"
				id=""
				placeholder="Price"
				className="input input-bordered input-secondary w-full max-w-xs"
			/>
			<input
				onChange={handleChange}
				type="text"
				name="cover"
				id=""
				placeholder="image url"
				className="input input-bordered input-secondary w-full max-w-xs"
			/>
			<button onClick={submitHandler} className="btn btn-outline btn-success">
				Add Book
			</button>
		</div>
	);
};

export default Add;
