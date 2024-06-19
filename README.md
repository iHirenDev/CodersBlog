# CodersBlog

A sample react app with blogging functionality featuring user authentication and blog creation using Appwrite as a backend service.

## Table of Contents

- [Installation](#installation)
- [Appwrite Configuration](#appwrite-configuration)
- [Dependencies](#dependencies)

## Installation
1. **Clone the repository:**

    ```bash
    git clone https://github.com/iHirenDev/CodersBlog.git
    cd CodersBlog
    ```

2. **Install dependencies:**

    Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:

    ```bash
    npm install
    ```

3. **Running the App:**

    To start the development server, run:

    ```bash
    npm run dev

## Appwrite Configuration

- Set up an Appwrite server by following the [Appwrite setup guide](https://appwrite.io/docs/getting-started-for-server).
    - Create a new project in Appwrite.
    - Set up collections for users and blogs.
    - Configure your `.env` file with Appwrite project details:

    ```plaintext
    VITE_APPWRITE_URL=https://[YOUR_APPWRITE_ENDPOINT]
    VITE_APP_APPWRITE_PROJECT_ID=[YOUR_PROJECT_ID]
    VITE_APPWRITE_DATABASE_ID=[YOUR_DATABASE_ID]
    VITE_APPWRITE_COLLECTION_ID=[YOUR_COLLECTION_ID]
    VITE_APPWRITE_BUCKET_ID=[YOUR_BUCKET_ID]
    ```

## Dependencies

| Name             | Description   |
| :-------------:|--------------|
| [Redux](https://redux.js.org/) |  A JS library for predictable and maintainable global state management. |
| [React Router](https://reactrouter.com/) | Declarative routing for React web applications. |
| [Appwrite](https://appwrite.io/) | End-to-end backend server for Web, Mobile, Native, or Backend apps. |
| [Tailwind CSS](https://tailwindcss.com/) | Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.  |
| [React Hook Form](https://react-hook-form.com/) | Performant, flexible and extensible forms with easy-to-use validation.|
| [Tiny MCE](https://www.tiny.cloud/) | TinyMCE is the most advanced WYSIWYG HTML editor designed to simplify website content creation.|
| [Framer Motion](https://www.framer.com/motion/) | A production-ready motion library for React.|

