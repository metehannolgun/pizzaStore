Here’s the English version of the updated README:

---

# 🍽️ FoodOrder

FoodOrder is a modern and user-friendly web application for online food ordering. Users can filter foods by categories, search for specific dishes, add items to the cart, and complete their orders.

## 🚀 Features

- **Category Filtering**: Users can filter foods by categories.
- **Search Bar**: Users can easily find the dishes they are looking for.
- **Cart Management**: 
  - Users can add products to the cart, change quantities, and completely remove items.
  - The cart totals and prices are dynamically updated.
- **Checkout and Order Confirmation**: Users can successfully complete their orders and receive a small animation confirming their order.
- **Map Structure**: A structure is used to properly map products to categories for efficient management.
- **Toasted Notifications**: Toasted notifications provide user-friendly feedback, such as order confirmation.
- **Responsive Design**: The application works seamlessly on mobile devices.

## 🛠️ Technologies Used

- **ReactJS**: For building the user interface.
- **Tailwind CSS**: For fast and customizable styling.
- **React Router (React Navigate)**: For page routing and navigation functionality.
- **Redux**: For state management in the application, using the **slice** structure.
  - **Slice**: State management for specific tasks, such as cart management (adding/removing products), is handled using Redux slices.
  - **Dispatch**: The Redux dispatch function is used to update the cart content and reflect the changes in the UI. When users add or remove items from the cart, related actions are dispatched to update the state.
- **React Dispatch**: For managing data updates within the application.
- **Map Structure**: Products are mapped to categories in an organized and efficient way.
- **Toasted**: For real-time notifications after user interactions (e.g., order confirmation).

## 📦 Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/metehannolgun/foodOrder.git
   cd foodOrder
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Start the Development Server**:

   ```bash
   npm run dev
   ```

4. **Access in Browser**:

   Visit **http://localhost:3000** in your browser to view the project.

## 🧑‍💻 Contributing

We welcome contributions! Please open an **issue** first and then submit a **pull request**.

## 📄 License

This project is licensed under the MIT License.

---

