<div align="center">

  <img width="100" height="auto" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png" />

  <h1>
    <font color="#FF0000" style="font-weight: bold;">YouTube</font> <font color="#282828" style="font-weight: bold;">Clone</font>
  </h1>

  <h3 style="font-weight: normal; margin-top: 0;">A React 19 Video Streaming Interface</h3>

  A fully responsive frontend application replicating the core user experience of YouTube, powered by the YouTube Data API v3.

  <p>
    <img alt="Framework" src="https://img.shields.io/badge/Framework-React%2019-61DAFB.svg?style=for-the-badge&logo=react"/>
    <img alt="Build Tool" src="https://img.shields.io/badge/Build%20Tool-Vite-646CFF.svg?style=for-the-badge&logo=vite"/>
    <img alt="API" src="https://img.shields.io/badge/Data-YouTube%20API%20v3-FF0000.svg?style=for-the-badge&logo=youtube"/>
  </p>

</div>

---

## About The Project

This **YouTube Clone** is a modern single-page application (SPA) built to demonstrate advanced frontend development skills using **React 19**. It interfaces directly with Google's **YouTube Data API v3** to fetch real-time video data, channel statistics, and comment threads. The application focuses on providing a clean, responsive user interface that mimics the look and feel of the original platform, featuring dynamic routing, state management, and an interactive video player.

### Key Features

| Component | Functionality |
| :--- | :--- |
| **Home Feed** | Browse a grid of popular videos or filter them dynamically by categories (Gaming, Music, Tech, etc.) via the sidebar. |
| **Video Player** | A fully functional video playback interface utilizing `iframe` embedding, complete with like/view counts and publication dates using **Moment.js**. |
| **Interactions** | View real-time comments and channel details (subscriber counts, channel icons) fetched asynchronously from the API. |
| **Recommendations** | A "Recommended Videos" sidebar that intelligently fetches and displays content related to the category of the video currently being watched. |
| **Responsive Design** | A mobile-first CSS architecture that adapts the Sidebar and Grid layouts for different screen sizes (Desktop vs Mobile). |

---

## Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Core** | **React 19** | The library for web and native user interfaces. |
| **Build** | **Vite** | Next Generation Frontend Tooling for fast development and building. |
| **Routing** | **React Router Dom** | Enables dynamic navigation between pages. |
| **Formatting** | **Moment.js** | Used for parsing and formatting timestamps. |
| **Styling** | **CSS3** | Vanilla CSS. |

---

## Prerequisites

Before running the application, ensure you have the following installed:

| Tool | Requirement |
| :--- | :--- |
| **Node.js** | v16.0.0 or higher |
| **API Key** | A valid [Google Cloud Console](https://console.cloud.google.com/) project with **YouTube Data API v3** enabled. |

---

## Getting Started

Follow these steps to set up the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/TAR33k/youtube-clone-react.git
cd youtube-clone-react
```

### 2. Install Dependencies

Install the required NPM packages defined in `package.json`.

```bash
npm install
```

### 3. API Configuration

To fetch data, you must configure your API key.

1.  Copy .env.example to .env
2.  Add your API key inside the file

### 4. Run the Application

Start the local development server.

```bash
npm run dev
```

Open your browser and navigate to **`http://localhost:5173`**.
