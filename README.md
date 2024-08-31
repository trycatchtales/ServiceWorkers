
# Service Worker Example

This repository provides a basic example of using Service Workers in JavaScript. Follow the instructions below to set up and run the example code.

## Files Included

- `index.html`: The main HTML file for displaying the status of the Service Worker.
- `main.js`: JavaScript file that registers the Service Worker.
- `serviceWorker.js`: Service Worker script handling install, activate, and fetch events.

## Prerequisites

Ensure you have a local server running to serve the files over HTTP. Service Workers require a secure context (`localhost` or `https`).

## Running the Example

### 1. Clone the Repository

If you haven't already, clone this repository to your local machine:

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Set Up a Local Server

Use one of the following methods to start a local server:

#### Using Python (Python 2.x)

Navigate to the directory containing the files and run:

```bash
python -m SimpleHTTPServer 8000
```

#### Using Python (Python 3.x)

Navigate to the directory containing the files and run:

```bash
python -m http.server 8000
```

#### Using Node.js

If you have Node.js installed, you can use `http-server`. First, install it globally:

```bash
npm install -g http-server
```

Then, start the server:

```bash
http-server -p 8000
```

### 3. Access the Application

Open your browser and navigate to:

```
http://localhost:8000
```

### 4. Check the Status

- The status of the Service Worker registration will be displayed on the webpage.
- Open the Developer Tools (F12) and check the "Console" tab to see logs from the Service Worker (`install`, `activate`, `fetch`).

## Troubleshooting

- **If you see errors related to the Service Worker registration:** Ensure you are running the code over HTTP/HTTPS, not directly from the file system.
- **Console Errors:** Check the browser console for any errors or messages that might indicate what went wrong.

## License

This example is provided for educational purposes and is open-source. Feel free to use and modify it as needed.

