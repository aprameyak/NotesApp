# **Notes App**

A simple note-taking app built with React and Vite. Create, view, and delete notes with an optional image. Notes and images are saved in the browser with IndexedDB, so there's no account, no backend, and nothing to pay for.

![React.js Badge](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite Badge](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## Features

- **CRUD Operations**: Create, read, and delete notes. Each note has a name, description, and an optional image.
- **Image Storage**: Images are stored alongside the note in the browser.
- **Persistence**: Notes stay after a refresh or restart. They live in the browser they were created in and don't sync between devices.
- **Responsive Design**: Works on desktop and mobile, in light and dark mode.

## Technology Stack

- **Frontend**: React.js, Vite
- **Storage**: IndexedDB (`src/notes.js`)
- **Hosting**: Cloudflare (static assets)

## Run it

```
npm install
npm run dev
```

## Live Deployment

- **View Here**: [Notes App](https://notesapp.aprameyak.workers.dev/)
