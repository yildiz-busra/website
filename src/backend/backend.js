require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL Connection Pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Endpoint: Fetch all products
app.get('/products', async (req, res) => {
    try {
        const query = 'SELECT id, name, price, description FROM products';
        const result = await pool.query(query);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Error fetching products' });
    }
});

// Endpoint: Fetch product details by ID
app.get('/products/:id', async (req, res) => {
    const productId = req.params.id;

    try {
        const productQuery = 'SELECT * FROM products WHERE id = $1';
        const productResult = await pool.query(productQuery, [productId]);

        if (productResult.rows.length === 0) {
            return res.status(404).json({ error: 'Product not found.' });
        }

        const reviewsQuery = 'SELECT * FROM reviews WHERE product_id = $1';
        const reviewsResult = await pool.query(reviewsQuery, [productId]);
        const imagesQuery = 'SELECT * FROM product_images WHERE product_id = $1';
        const imagesResult = await pool.query(imagesQuery, [productId]);

        res.json({
            product: productResult.rows[0],
            reviews: reviewsResult.rows,
            images: imagesResult.rows,
        });
    } catch (error) {
        console.error('Error fetching product details:', error);
        res.status(500).json({ message: 'Error fetching product details' });
    }
});

// Endpoint: Fetch cart items
app.get('/cart', async (req, res) => {
    const userId = req.query.userId; // Replace with authentication middleware to get logged-in user

    try {
        const query = 'SELECT * FROM cart_items WHERE user_id = $1';
        const result = await pool.query(query, [userId]);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching cart items:', error);
        res.status(500).json({ message: 'Error fetching cart items' });
    }
});

// Endpoint: Process an order
app.post('/orders', async (req, res) => {
    const { userId, cartItems, paymentDetails } = req.body;

    try {
        const orderQuery = 'INSERT INTO orders (user_id, payment_details) VALUES ($1, $2) RETURNING id';
        const orderResult = await pool.query(orderQuery, [userId, JSON.stringify(paymentDetails)]);
        const orderId = orderResult.rows[0].id;

        const cartQuery = 'INSERT INTO order_items (order_id, product_id, quantity) VALUES ($1, $2, $3)';
        for (const item of cartItems) {
            await pool.query(cartQuery, [orderId, item.productId, item.quantity]);
        }

        res.status(201).json({ message: 'Order placed successfully', orderId });
    } catch (error) {
        console.error('Error processing order:', error);
        res.status(500).json({ message: 'Error processing order' });
    }
});

// Endpoint: Fetch user account data
app.get('/account', async (req, res) => {
    const userId = req.query.userId; // Replace with authentication middleware

    try {
        const query = 'SELECT firstname, lastname, email FROM users WHERE id = $1';
        const result = await pool.query(query, [userId]);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.error('Error fetching user account data:', error);
        res.status(500).json({ message: 'Error fetching account data' });
    }
});

// Endpoint: Fetch orders
app.get('/orders', async (req, res) => {
    const userId = req.query.userId; // Replace with authentication middleware

    try {
        const query = 'SELECT * FROM orders WHERE user_id = $1';
        const result = await pool.query(query, [userId]);
        res.status(200).json(result.rows);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Error fetching orders' });
    }
});

// Start Server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
