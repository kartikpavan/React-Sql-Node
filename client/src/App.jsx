import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Add from "./pages/Add";
import Update from "./pages/Update";
import Books from "./pages/Books";
export const App = () => {
	return (
		<>
			<Navbar />
			<div className=" w-[70vw] mx-auto py-10 ">
				<div>
					<Routes>
						<Route path="/" element={<Books />} />
						<Route path="/add" element={<Add />} />
						<Route path="/update/:id" element={<Update />} />
					</Routes>
				</div>
			</div>
		</>
	);
};
