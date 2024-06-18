# CodersBlog

This is a sample React application demonstrating blogging app features which includes SignUp, Adding and removing blogs using AppWrite as a backend including usage of Redux, Tiny MCE, React Hook form and React Router.

## Table of Contents

- [Installation](#installation)
- [Running the App](#running-the-app)
- [Dependencies](#dependencies)
- [Configure Appwrite](#configure-appwrite)
- [Features](#features)
  

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

## Running the App

To start the development server, run:

```bash
npm run dev
```

## Dependencies

| Name             | Description   |
| :-------------:|--------------|
| [Redux](https://redux.js.org/) | Predictable state container for JavaScript apps.  |
| [React Router](https://reactrouter.com/) | React Router is a lightweight, fully-featured routing library for the React JavaScript library.  |
| [Appwrite](https://appwrite.io/) | End-to-end backend server for Web, Mobile, Native, or Backend apps. |
| [React Hook Form](https://react-hook-form.com/) | Performant, flexible and extensible forms with easy-to-use validation. |
| [TinyMCE](https://www.tiny.cloud/) | TinyMCE is a rich-text editor that allows users to create formatted content within a user-friendly interface. |
| [Framer Motion](https://www.framer.com/motion/) | A production-ready motion library for React. |

For a complete list, see package.json.

## Configure Appwrite

 - Set up an Appwrite server by following the [Appwrite setup guide](https://appwrite.io/docs/getting-started-for-server).
    - Create a new project in Appwrite.
    - Set up collections for users and blogs.
    - Configure your `.env` file with Appwrite project details:
      

    ```plaintext
    VITE_APPWRITE_ENDPOINT=https://[YOUR_APPWRITE_ENDPOINT]
    VITE_APPWRITE_PROJECT_ID=[YOUR_PROJECT_ID]
    VITE_APPWRITE_DATABASE_ID=[YOUR_DATABASE_ID]
    VITE_APPWRITE_COLLECTION_ID=[YOUR_COLLECTION_ID]
    VITE_APPWRITE_BUCKET_ID=[YOUR_BUCKET_ID]
    ```
  #NOTE: If you are creating app using React then replace VITE_ with REACT_APP_
