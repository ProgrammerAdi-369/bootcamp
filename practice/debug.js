

// ============================================================
// LESSGOOOOO!!!!
// ============================================================











// ============================================================
// API 2
// ============================================================

app.get("/menu/:id", async (req, res) => {
    try {
        const id = req.query.id;

        const item = await getMenuItem(id);

        res.status(200).json({
            data: item
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

// Hint:
// Look at the URL:
// /menu/:id
// Where should you get "id" from?

// Answer:
// Use req.params.id instead of req.query.id.
//
// const id = req.params.id;







// ============================================================
// API 5
// ============================================================

app.post("/orders", async (req, res) => {
    try {
        const { item, quantity } = req.body;

        const order = await createOrder({
            item,
            quantity
        });

        res.status(200).json({
            message: "Order created",
            data: orders
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

// Hint:
// Look carefully at the variable you are sending in the response.

// Answer:
// "orders" does not exist here.
// The variable created above is "order".
//
// data: order


// ============================================================
// API 6
// ============================================================

app.get("/orders", async (req, res) => {
    try {
        const orders = await getOrders();

        res.status(200).json({
            message: "Orders fetched",
            data: order
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

// Hint:
// Compare the variable you created with the variable you return.

// Answer:
// Created:
// const orders = await getOrders();
//
// Returned:
// data: order
//
// It should be:
// data: orders


// ============================================================
// API 7
// ============================================================

app.post("/orders", async (req, res) => {
    try {
        const { item, quantity } = req.body;

        const order = await createOrder({
            item,
            quantity
        });

        res.status(200).json({
            message: "Order created",
            data: order
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Hint:
// Look at the function call. Is the function being awaited?

// Answer:
// If createOrder is asynchronous, it should be:
//
// const order = await createOrder({
//     item,
//     quantity
// });


// ============================================================
// API 8
// ============================================================

app.get("/burger", async (req, res) => {
    try {
        const cheese = req.query.cheese;

        const burger = await getBurger(cheese);

        res.status(200).json({
            data: pizza
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

// Hint:
// You're fetching one food item but returning another variable.

// Answer:
// "pizza" should be "burger".
//
// data: burger


// ============================================================
// API 9
// ============================================================

app.post("/orders", async (req, res) => {
    try {
        const { item, quantity } = req.body;

        const order = await createOrder({
            item
        });

        res.status(200).json({
            message: "Order created",
            data: order
        });

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

// Hint:
// Look at the data being sent to createOrder.
// Is everything received from the client being passed?

// Answer:
// "quantity" is missing.
//
// const order = await createOrder({
//     item,
//     quantity
// });


// ============================================================
// API 10
// ============================================================

app.get("/menu", async (req, res) => {
    try {
        const menu = await getMenu();

        res.status(200).json({
            message: "Menu fetched successfully",
            data: menu
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

// Hint:
// Check whether the route itself matches the request
// you are trying to make.

// Answer:
// If the frontend/Postman is calling:
//
// GET /menus
//
// then the backend route should be:
//
// app.get("/menus", ...)
//
// The route name must match exactly.