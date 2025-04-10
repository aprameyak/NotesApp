# **Notes App**

This project is a simple and scalable note-taking application built with AWS Amplify that allows users to securely sign in, create, view, and delete notes with images. The app leverages AWS services like Amplify Authentication, Storage, and Data to store and manage notes.

![React.js Badge](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![AWS Amplify Badge](https://img.shields.io/badge/AWS%20Amplify-232F3E?style=for-the-badge&logo=aws-amplify&logoColor=white)

## Features

- **User Authentication**: Secure sign-in and sign-out with AWS Amplify Authenticator for user management.
- **CRUD Operations**: Create, read, and delete notes. Each note can have a name, description, and an optional image.
- **Image Storage**: Stores images associated with notes using AWS Amplify Storage for scalable cloud storage.
- **Responsive Design**: Built with React.js and AWS Amplify UI components for a seamless user experience across devices.

## Technology Stack

- **Frontend**: React.js, AWS Amplify UI React
- **Backend**: AWS Amplify (GraphQL API, Storage, Authentication)
- **Storage**: AWS Amplify Storage for image management
- **Authentication**: AWS Amplify Auth for user sign-in and sign-out

## Functionality

- **Sign In/Sign Out**: Users can sign in using AWS Amplify’s built-in authentication and sign out from the app.
- **Create Notes**: Users can create notes with a name, description, and an optional image. Images are uploaded to AWS Storage.
- **View Notes**: Users can view all their notes with images, and details about the notes are fetched from the backend.
- **Delete Notes**: Users can delete notes, and they will be removed both from the user interface and the backend.

## Live Deployment

- **View Here**: [Notes App](https://main.d1ztm9vf7wa50r.amplifyapp.com/)
