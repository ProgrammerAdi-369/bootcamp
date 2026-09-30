const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const menu = require("./database/menu.json");
const users = require("./database/auth-data.json");

const app = express();

app.use(express.json());


// ====================
// GET APIs
// ====================

// Basic GET
app.get("/endpoint", (req, res) => {
    try {

        res.status(200).json({
            message: "Success"
        });

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});


// Home
app.get("/", (req, res) => {
    res.send("Server is running");
});


// Health
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "Server is healthy"
    });
});


// Menu
app.get("/api/menu", (req, res) => {
    try {

        res.status(200).json(menu);

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});


// Burger with query parameter
app.get("/api/burger", (req, res) => {
    try {

        const cheese = req.query.cheese;

        let price = 199;

        if (cheese === "extra") {
            price += 30;
        }

        res.status(200).json({
            name: "Burger",
            cheese: cheese || "normal",
            price: price
        });

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});


// Pizza with query parameter
app.get("/api/pizza", (req, res) => {
    try {

        const crust = req.query.crust;

        let price = 199;

        if (crust === "thin") {
            price += 40;
        }

        res.status(200).json({
            name: "Pizza",
            crust: crust || "regular",
            price: price
        });

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});


// ====================
// POST APIs
// ====================


// Basic POST
app.post("/endpoint", (req, res) => {
    try {

        const data = req.body;

        res.status(201).json({
            message: "Created successfully",
            data: data
        });

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});


// Orders
const orders = [];

app.post("/api/order", (req, res) => {
    try {

        const { item, quantity } = req.body;

        const order = {
            id: orders.length + 1,
            item: item,
            quantity: quantity,
            status: "received"
        };

        orders.push(order);

        res.status(200).json(order);

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});


// ====================
// LOGIN
// ====================

app.post("/login", (req, res) => {
    try {

        const { username, password } = req.body;

        const user = users.find(
            user =>
                user.username === username &&
                user.password === password
        );

        if (!user) {
            return res.status(401).json({
                message: "Invalid username or password"
            });
        }

        const token = jwt.sign(
            {
                userId: user.id,
                username: user.username
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.status(200).json({
            message: "Login successful",
            token: token
        });

    } catch (error) {

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});


// ====================
// START SERVER
// ====================

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});