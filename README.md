# 📚 Book Vibe - Your Digital Library

Welcome to **Book Vibe**, a dynamic platform that lets users explore books, manage their reading lists, and track their reading progress. Built following a detailed Figma design, **Book Vibe** provides an immersive experience for book lovers to manage their bookshelves, create reading goals, and more.

## 🚀 Live Website Link
You can check out the live version of the website here: [BookHub Live](https://book-vibe12.netlify.app/)

## 📄 Project Requirements Document
Access the full project requirements document here: [BookHub Project Requirements]("/project-requirements.pdf")

## 🛠️ React Fundamentals Used in the Project

This project incorporates key React concepts to build a functional and interactive digital library platform:

1. **React Components**:
   - Used for organizing UI into reusable components like Navbar, Book Cards, and Book Details.

2. **React Router (v6)**:
   - Implemented for dynamic routing across pages like Home, Book Details, Listed Books, and Pages to Read.

3. **useState & useEffect**:
   - Used to manage the application state and handle lifecycle methods like fetching book data and updating UI on page load.

4. **LocalStorage**:
   - Local storage is used for persisting user data like read books and wishlist items, even after page reloads.

5. **Custom Bar Chart**:
   - A custom bar chart was created to visualize the total pages of read books against their names on the Pages to Read page.

6. **Toast/Sweet Alerts**:
   - Alerts were implemented using toast/sweet alert to notify users when books are added to their reading list or wishlist.

## 🗃️ Data Handling & Management

**Context API** was used to manage the global state of the app, including:
- **Read Books**: Stored in the local storage and displayed on the Listed Books page.
- **Wishlist**: Books added to the wishlist are stored in local storage, and users can toggle between reading and wishlisting a book.

## 🌟 Key Features of BookHub

Here are five standout features of **BookHub**:

1. **Dynamic Book List**:
   - Displays a card grid with at least 6 books. Clicking on a book redirects to the Book Details page, where users can see more information.

2. **Interactive Book Details**:
   - On the Book Details page, users can read full details about the book (author, category, review, rating, etc.). Buttons for "Read" and "Wishlist" allow users to add books to their reading list and wishlist with toast notifications.

3. **Custom Shape Bar Chart**:
   - Visualize your progress with a custom bar chart that shows the total pages of read books against the book names. This helps users track their reading progress over time.

4. **Listed Books Page**:
   - A separate page that displays all books in the Read and Wishlist categories. You can filter, sort, and view details of these books with the "View Details" button.

5. **Responsive Design**:
   - The website is fully responsive on both desktop and mobile devices. The layout adapts to various screen sizes, making it user-friendly across different devices.

## 📋 Implementation Details

### Main Pages and Features:

1. **Navbar**:
   - A navbar that includes the website logo and menu items like Home, Listed Books, and Pages to Read. It also features Sign In and Sign Up buttons (with no functionality).
   
2. **Home Page**:
   - A banner with a title and a button labeled “View The List” that redirects to the Listed Books page.
   
3. **Books Section**:
   - Displays at least 6 books, with cards showing book name, author, tags, and rating.
   
4. **Book Details Page**:
   - Shows book details, including title, author, tags, review, total pages, publisher, rating, and options to add the book to the Read or Wishlist.
   
5. **Listed Books Page**:
   - A page that displays books added to the Read and Wishlist sections. It includes a dropdown for sorting the books by rating, number of pages, and publication year.
   
6. **Pages to Read Page**:
   - Displays a custom-shaped bar chart showing the total pages of books added to the Read list.

7. **404 Page**:
   - A route for handling invalid URLs, providing a “Page Not Found” message.

### Additional Features:

- **Sorting by Rating, Pages, or Published Year**:
   - The Listed Books page has a sorting feature that lets users sort books in descending order based on rating, number of pages, or publication year.
   
- **Toast Notifications**:
   - Users receive alerts when adding books to the Read or Wishlist list, and an alert informs them when a book is already in one of those lists.

---

### How to Use the Website:

1. **Add Books to Read or Wishlist**:
   - Browse through the book list and click on any book to view its details. Add it to your "Read" or "Wishlist" list by clicking the corresponding button.
   
2. **View Books in the Read and Wishlist Section**:
   - Go to the Listed Books page and toggle between the "Read" and "Wishlist" tabs to view the books you’ve added to each list.
   
3. **Sort Books**:
   - Use the dropdown in the Listed Books page to sort your books by rating, pages, or published year.
   
4. **Track Your Progress**:
   - On the Pages to Read page, view your reading progress using the custom bar chart.

---

## 📈 Project Requirements Checklist:

- [✅] Navbar with active routes
- [✅] Banner section with redirect button
- [✅] JSON file containing book data
- [✅] Book Cards with details
- [✅] Dynamic Book Details page
- [✅] Read and Wishlist functionality with alerts
- [✅] Listed Books page with sorting and tabs
- [✅] Pages to Read page with custom bar chart
- [✅] 404 error page
- [✅] Two additional meaningful routes
- [✅] Responsive layout for desktop and mobile

---