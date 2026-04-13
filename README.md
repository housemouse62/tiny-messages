# Tiny Messages

A minimal message board built with Node.js, Express, EJS, and PostgreSQL.

![Tiny Messages screenshot](public/Tiny%20Messageboard%20Screen.png)

## Features

- Post short messages with your name
- Browse all messages on the home page
- Click through to view an individual message
- Server-side validation (name max 10 chars, message max 255 chars)

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js (ESM) |
| Framework | Express 5 |
| Templating | EJS |
| Database | PostgreSQL (`pg`) |
| Validation | express-validator |
| Config | dotenv |

## Getting Started

### Prerequisites

- Node.js 18+
- A running PostgreSQL instance

### 1. Clone and install

```bash
git clone https://github.com/housemouse62/tiny-messages.git
cd tiny-messages
npm install
```

### 2. Configure environment

Create a `.env` file in the project root:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/tiny_messages
PORT=3030
```

### 3. Set up the database

```bash
node db/populatedb.js
```

### 4. Start the server

```bash
node app.js
```

The app will be available at `http://localhost:3030`.

## Project Structure

```
tiny-messages/
├── app.js                  # Express app entry point
├── controllers/
│   └── messageController.js
├── db/
│   ├── pool.js             # pg connection pool
│   ├── queries.js          # SQL query functions
│   └── populatedb.js       # Database seed / schema setup
├── partials/
│   └── errors.ejs          # Validation error list partial
├── public/
│   └── style.css           # Stylesheet
├── routes/
│   └── indexRouter.js
└── views/
    ├── index.ejs           # Message board home
    ├── form.ejs            # New message form
    ├── message.ejs         # Message list item partial
    └── messagePage.ejs     # Single message view
```

## Routes

| Method | Path | Description |
|---|---|---|
| `GET` | `/` | List all messages |
| `GET` | `/new` | New message form |
| `POST` | `/new` | Submit a new message |
| `GET` | `/messagePage/:id` | View a single message |
