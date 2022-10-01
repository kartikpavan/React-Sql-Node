import express from "express";
import mysql from "mysql2";
import cors from "cors";
const app = express();

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "admin123",
	database: "test",
});

//middleware
app.use(express.json());
app.use(cors());
// checking the connection
app.get("/", (req, res) => {
	res.json("Hello this the backend");
});

// fetching all the details from books table
app.get("/books", (req, res) => {
	const q = `SELECT * from books`;
	db.query(q, (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});
//Add new book to the table.
app.post("/books", (req, res) => {
	const q = "INSERT INTO books (`title`,`description`,`price`,`cover`) VALUES (?)";
	const values = [req.body.title, req.body.description, req.body.price, req.body.cover];
	db.query(q, [values], (err, data) => {
		if (err) return res.json(err);
		return res.json("book has been created successfully");
	});
});
// Delete a  book
app.delete("/books/:id", (req, res) => {
	const bookId = req.params.id;
	const q = "DELETE FROM books WHERE id = ?";
	db.query(q, [bookId], (err, data) => {
		if (err) return res.json(err);
		return res.json("book has been DELETED..");
	});
});
//Update a book
app.put("/books/:id", (req, res) => {
	const bookId = req.params.id;
	const q = "UPDATE books SET `title`= ?, `description`= ?, `price`= ?, `cover`= ? WHERE id=? ";
	const values = [req.body.title, req.body.description, req.body.price, req.body.cover];

	db.query(q, [...values, bookId], (err, data) => {
		if (err) return res.json(err);
		return res.json("book has been updated successfully..");
	});
});

app.listen(8800, () => {
	console.log(`Connected to backend @ PORT:8800`);
});
