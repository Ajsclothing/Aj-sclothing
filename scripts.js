// Add any JavaScript functionality here
console.log("Welcome to My Website");<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clothing Store</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            text-align: center;
            background-color: #f5f5f5;
        }
        header {
            background-color: #333;
            color: white;
            padding: 1rem;
        }
        nav ul {
            list-style: none;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin: 0 15px;
        }
        nav ul li a {
            color: white;
            text-decoration: none;
            font-size: 18px;
        }
        section {
            padding: 50px;
        }
        .product-grid {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
        }
        .product {
            display: inline-block;
            margin: 20px;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .product img {
            width: 150px;
            height: auto;
            border-radius: 10px;
        }
        .cart {
            margin-top: 20px;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        #cart-items {
            list-style: none;
            padding: 0;
        }
        .cart button {
            background-color: red;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
            margin-left: 10px;
        }
        #checkout {
            margin-top: 20px;
            padding: 10px 20px;
            background-color: green;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 18px;
        }
    </style>
    <script>
        let cart = [];
        
        function addToCart(item, price) {
            cart.push({ item, price });
            updateCart();
        }
        
        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }
        
        function updateCart() {
            let cartList = document.getElementById("cart-items");
            let totalPrice = 0;
            cartList.innerHTML = "";
            cart.forEach((product, index) => {
                let listItem = document.createElement("li");
                listItem.innerHTML = `${product.item} - $${product.price} <button onclick="removeFromCart(${index})">Remove</button>`;
                cartList.appendChild(listItem);
                totalPrice += product.price;
            });
            document.getElementById("total-price").textContent = `Total: $${totalPrice}`;
        }
        
        function checkout() {
            alert("Thank you for your purchase! Your order has been placed.");
            cart = [];
            updateCart();
        }
    </script>
</head>
<body>
    <header>
        <h1>Fashion Hub</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <section id="home">
        <h2>Welcome to Fashion Hub</h2>
        <p>Discover the latest trends in fashion!</p>
    </section>
    
    <section id="shop">
        <h2>Shop Our Collection</h2>
        <div class="product-grid">
            <div class="product">
                <img src="shirt.jpg" alt="Stylish Shirt">
                <p>Stylish Shirt - $25</p>
                <button onclick="addToCart('Stylish Shirt', 25)">Add to Cart</button>
            </div>
            <div class="product">
                <img src="jeans.jpg" alt="Trendy Jeans">
                <p>Trendy Jeans - $40</p>
                <button onclick="addToCart('Trendy Jeans', 40)">Add to Cart</button>
            </div>
            <div class="product">
                <img src="jacket.jpg" alt="Cool Jacket">
                <p>Cool Jacket - $60</p>
                <button onclick="addToCart('Cool Jacket', 60)">Add to Cart</button>
            </div>
        </div>
    </section>
    
    <section class="cart">
        <h2>Shopping Cart</h2>
        <ul id="cart-items"></ul>
        <p id="total-price">Total: $0</p>
        <button id="checkout" onclick="checkout()">Checkout</button>
    </section>
    
    <section id="contact">
        <h2>Contact Us</h2>
        <form>
            <input type="text" placeholder="Your Name" required>
            <input type="email" placeholder="Your Email" required>
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
        </form>
    </section>
    
    <footer>
        <p>&copy; 2025 Fashion Hub. All rights reserved.</p>
    </footer>
</body>
</html>
