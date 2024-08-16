# J-Shopify

Welcome to the official page of the J-Shopify.
This is a one-stop shopping center for all your needs.

## Overview

This is a full-featured e-commerce application built with Next.js v14.2.5. It allows users to browse products, add them to their cart, and make purchases.

## Features

- User authentication and authorization
- Product listing and search
- Shopping cart functionality
- Order management
- Payment gateway integration
- Admin dashboard for managing products, orders, and users

## Installation

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Steps

1. Clone the repository:

   ```sh
   git clone https://github.com/jesar-enl/next-ecommerce-platform.git
   ```

2. Navigate to the project directory:

   ```sh
   cd next-ecommerce-platform
   ```

3. Install dependencies:

   ```sh
   npm install
   ```

4. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:

   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_API_URL=your_api_url
   ```

5. Start the development server:

   ```sh
   npm run dev
   ```

## Usage

- Open your browser and navigate to `http://localhost:3000`
- Register or log in to start shopping

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact [jessekyambadde0@gmail.com].
