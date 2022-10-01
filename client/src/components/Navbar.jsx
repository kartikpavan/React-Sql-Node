import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<div className="max-w-[100vw] bg-red-200">
			<nav className="max-w-[80vw] mx-auto py-10 flex items-center justify-between">
				<h1 className="text-2xl font-semibold">FireBook Shop 🔥</h1>
				<div className="flex gap-10">
					<Link to="/" className="text-xl btn btn-outline rounded-none">
						HOME
					</Link>
					<Link to="/add" className="text-xl btn btn-outline rounded-none">
						Add new Book
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
