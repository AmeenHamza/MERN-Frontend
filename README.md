# Mymart

Discover Your Style, Shop with Ease

## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## About

Mymart is an e-commerce platform that aims to provide users with a seamless shopping experience. Our platform offers a wide range of products from various categories, allowing users to discover their style and shop with ease. Whether you're looking for fashion, electronics, home decor, or any other product, Mymart has you covered.

## Features

- User-friendly interface for easy navigation
- Advanced search functionality to find products quickly
- Secure payment gateway for safe transactions
- Order tracking and delivery status updates
- Customer reviews and ratings for informed purchasing decisions
- Responsive design for a seamless experience across devices

## Installation

To install and run Mymart locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Ameensaa/Mymart`
2. Navigate to the project directory: `cd Mymart`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit: `http://localhost:5173/`

## Usage

To use Mymart, follow these guidelines:

1. Sign up or log in to your Mymart account.
2. Browse through the available categories or use the search bar to find specific products.
3. Click on a product to view its details, including images, descriptions, prices, and customer reviews.
4. Add the desired products to your cart.
5. Proceed to the checkout page, review your order, and provide the necessary shipping and payment details.
6. Complete the purchase by confirming the payment.
7. Track your order and receive updates on the delivery status.
8. Leave a review and rating for the purchased products and share your experience.

## Technologies Used

- React.js
- HTML
- CSS
- Bootstrap
- npm
- dummy.api
- & +++

## Contributing

We welcome contributions from the community to enhance Mymart. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit them: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request.

Please ensure that your code follows the established coding conventions and includes appropriate documentation.

## License

Mymart is licensed under the [MIT License](LICENSE).

## Additional Information

For additional information, contact us at Mymart@example.com or visit our website [[https://Mymartbyrefiners.vercel.app][(https://mymart.cyclic.cloud/](https://mymart.cyclic.cloud/))]([https://www.Mymartbyrefiners.vercel.app](https://mymart.cyclic.cloud/)).


# Mymart API

Table of Contents
- [Mymart API](#Mymart-api)
  - [Introduction](#introduction)
  - [Endpoints](#endpoints)
    - [User Management](#user-management)
    - [Category Management](#category-management)
    - [Brand Management](#brand-management)
    - [Product Management](#product-management)
  - [Environment Variables](#environment-variables)
  - [How to Run](#how-to-run)
  - [Customization](#customization)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Introduction

The Mymart API is a powerful backend application built using Express and MongoDB. It provides various endpoints to manage users, categories, brands, and products for your e-commerce platform.

## Endpoints

### User Management

- `/api/users/signin`: User login endpoint.
- `/api/users/signup`: User registration endpoint.
- `/api/users/getUsers`: Get all users from the database.
- `/api/users/updateUser`: Update user profile.
- `/api/users/getUserByID`: Get user details by ID.
- `/api/users/deleteUser`: Delete user from the database.

### Category Management

- `/api/category/getCategory`: Get all categories from the database.
- `/api/category/getCategoryByName`: Get category details by name.
- `/api/category/createCategory`: Create a new category.
- `/api/category/deleteCategory`: Delete category from the database.
- `/api/category/updateCategory`: Update category details.

### Brand Management

- `/api/brand/getBrand`: Get all brands from the database.
- `/api/brand/getBrandByName`: Get brand details by name.
- `/api/brand/createBrand`: Create a new brand.
- `/api/brand/deleteBrand`: Delete brand from the database.
- `/api/brand/updateBrand`: Update brand details.

### Product Management

- `/api/product/getProduct`: Get all products from the database.
- `/api/product/getProductByName`: Get product details by name.
- `/api/product/createProduct`: Create a new product.
- `/api/product/deleteProduct`: Delete product from the database.
- `/api/product/updateProduct`: Update product details.

## Environment Variables

Before running the API, make sure to set the following environment variables in a `.env` file:

- `MONGO_URI`: Your MongoDB connection string.
- `JWT_SECRET`: Secret key for JWT token generation.

## How to Run

1. Install the required dependencies using `npm install`.
2. Set up the environment variables in the `.env` file.
3. Start the server with `npm start`.
4. The API will be accessible at `http://localhost:PORT`, where `PORT` is the port number specified in your environment or the default `3000`.

## Customization

Feel free to customize the API according to your specific requirements. You can add more endpoints or modify existing ones to suit your application's needs.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or need further assistance, feel free to contact us at [ameenhamza222@gmail.com](mailto:ameenhamza222@gmail.com).
