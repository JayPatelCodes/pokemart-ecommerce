# PokeMart E-commerce Microservices Project

A microservices-based e-commerce application themed around the Pokémon universe. Users can browse products, manage carts, place orders, and handle payments, all powered by a distributed backend architecture.

## Table of Contents

1. [Description](#description)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Microservices](#microservices)  
5. [Setup Instructions](#setup-instructions)  
6. [Demo Video](#demo-video)  
7. [Usage](#usage)  

## Description

This project demonstrates a modern microservices architecture for an e-commerce store, styled as a Pokémon-themed marketplace (PokeMart). Each service is independently deployable and communicates with others through REST APIs.

## Features

- User authentication and role-based authorization  
- Product browsing with categories and search  
- Shopping cart management  
- Order placement and tracking  
- Payment processing (simulated)  
- Service discovery and API Gateway for routing  
- PostgreSQL persistence for core services  

## Tech Stack

**Frontend**  
- React  
- TypeScript  
- Vite  
- TailwindCSS  

**Backend (Microservices)**  
- Java  
- Spring Boot  
- Spring Security with JWT  
- PostgreSQL  
- Docker  

**Infrastructure**  
- API Gateway  
- Service Registry (Eureka)  

## Microservices

- **auth-service**: Handles user registration, login, and JWT-based authentication  
- **product-service**: Manages Pokémon-themed products (Poké Balls, Potions, TMs, etc.)  
- **cart-service**: Manages shopping cart functionality for users  
- **order-service**: Processes and tracks customer orders  
- **payment-service**: Simulates payment transactions  
- **api-gateway**: Routes requests to appropriate services  
- **service-registry**: Enables service discovery and registration  

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/JayPatelCodes/pokemart-microservices.git
cd pokemart-microservices
```

### 2. Backend Setup

Each microservice has its own directory. Navigate into each one and run:

```bash
./mvnw spring-boot:run
```

Make sure PostgreSQL is running and configured for the product, cart, and order services.

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### 4. Environment Variables

Set up environment variables for each microservice. Example for `auth-service`:

```env
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5432/authdb
SPRING_DATASOURCE_USERNAME=your-username
SPRING_DATASOURCE_PASSWORD=your-password
JWT_SECRET=your-secret-key
```

## Running the Application

- Frontend: [http://localhost:5173](http://localhost:5173)  
- Backend services: Run individually on their configured ports (via application.properties)  

## Demo Video

A demo video will be available soon.

## Usage

1. Register and log in as a new user.  
2. Browse products on the store page.  
3. Add items to your cart.  
4. Proceed to checkout to place an order.  
5. Simulated payment will confirm the order.  
6. View past orders and their statuses.  

