# SlidelyTaskBackendServer

This is a backend server built with Express and TypeScript for storing and retrieving submissions. It uses a JSON file as a database.

## Features

- Save submissions with fields for Name, Email, Phone Number, GitHub repo link, and Stopwatch time.
- Retrieve submissions with pagination.
- Endpoint to check server status.

## Endpoints

- `GET /ping`: Check server status.
- `POST /submit`: Save a new submission.
- `GET /read`: Retrieve a submission by index.


### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Prashant-9977/SlidelyTaskBackendServer.git
    ```
2. Navigate to the project directory:
    ```sh
    cd SlidelyTaskBackendServer
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
4. Start the server:
    ```sh
    npm start
    ```

### API Usage

- **Check Server Status**:
    ```sh
    curl http://localhost:3000/ping
    ```
- **Submit a New Submission**:
    ```sh
    curl -X POST http://localhost:3000/submit -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john@example.com","phone":"1234567890","github_link":"http://github.com/johndoe","stopwatch_time":"00:05:23"}'
    ```
- **Read a Submission**:
    ```sh
    curl http://localhost:3000/read?index=0
    ```

## License

This project is licensed under the MIT License.
