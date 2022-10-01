import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Books = () => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const res = await axios.get("http://localhost:8800/books");
				console.log(res);
				setBooks(res.data);
			} catch (error) {
				console.log(error.message);
			}
		};
		fetchBooks();
	}, []);

	const handleDelete = async (bookId) => {
		try {
			await axios.delete("http://localhost:8800/books/" + bookId);
			window.location.reload();
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-y-10 ">
			{books?.map((book) => {
				return (
					<div key={book?.id} className="flex flex-col items-center gap-2 flex-1 ">
						{book.cover && (
							<img
								src={book.cover}
								alt={book.title}
								className="w-[300px] h-[300px] object-cover bg-green-200"
							/>
						)}
						<h2 className="text-xl font-semibold">{book?.title}</h2>
						<p className="">{book?.description}</p>
						<p className="italic text-gray-700">Rs {book?.price}</p>
						<div className="flex justify-around">
							<button
								className="btn btn-outline btn-error rounded-none"
								onClick={() => handleDelete(book.id)}
							>
								Delete
							</button>

							<Link
								to={`/update/${book.id}`}
								className="btn btn-outline btn-info rounded-none"
							>
								Update
							</Link>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Books;
