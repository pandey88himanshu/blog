# Fullstack Blog Application (MERN Stack)

## Database Information

The database contains two users:

### Users:

1. **User 1**:
   - **Email**: `test@gmail.com`
   - **Password**: `12345678`
   - **Role**: Regular User (Can create, update, like, comment, and delete posts)

2. **User 2 (Admin)**:
   - **Email**: `admin@gmail.com`
   - **Password**: `12345678`
   - **Role**: Admin (Can manage categories and users, create and manage posts)

---

This is a full-stack blog application built using the **MERN stack** (MongoDB, Express, React, Node.js) along with additional technologies like **Vite**, **Shadcn UI**, **Firebase**, **Cloudinary**, and **Multer** for image uploading. It features OAuth authentication with Firebase, allowing users to securely log in. Users can create, update, delete blog posts, like blogs, and comment on them. Admin users have additional privileges like managing blog categories and deleting users.

## Live Demo

Check out the live demo of the project on [Vercel](https://blogfrontend-three.vercel.app).

## Features

- **OAuth Authentication**: Secure login and registration via **Firebase Authentication**.
- **Create, Update, Delete Blog Posts**: Both regular users and admins can manage blog posts.
- **Like and Comment on Posts**: Users can interact with posts by liking them and adding comments.
- **Admin Features**:
  - Admins can create, manage, and delete blog categories.
  - Admins can delete users.
- **Image Uploads**: Images are uploaded to **Cloudinary** with **Multer** integration.
- **Frontend with Shadcn UI**: Beautifully designed UI using **Shadcn UI** for a smooth user experience.

## Tech Stack

- **Frontend**:
  - **React** for building user interfaces.
  - **Vite** for fast builds and development.
  - **Shadcn UI** for styling and pre-built UI components.
- **Backend**:
  - **Node.js** and **Express.js** for building the server.
  - **MongoDB** for database storage.
  - **Firebase Authentication** for OAuth login.
  - **Cloudinary** for storing images.
  - **Multer** for handling image uploads.
- **Authentication**:
  - **Firebase OAuth** for secure user authentication.
- **Image Upload**:
  - **Cloudinary** for cloud storage of images.
  - **Multer** for handling the uploading process.

## Installation

Follow these steps to run the project locally.

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/fullstack-blog-app.git
   cd fullstack-blog-app
