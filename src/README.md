# Assignment 5 Backend API

## Project Overview
This API provides a simple event management system, allowing users to create, read, update, and delete events.  
It offers endpoints to manage events efficiently and is designed for developers learning RESTful API design with Node.js and TypeScript.  

The API solves the problem of organizing event data in a structured, programmatic way. It is ideal for small projects, prototypes, or learning backend API development.

---

## Installation Instructions

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/kkuldeepsingh-pixel/Singh_Kuldeep_Assignment_3_Backend.git
   cd Singh_Kuldeep_Assignment_3_Backend

## API Request Examples

### Get All Events

**Request:**

```bash
curl -X GET http://localhost:3000/events

Response
[
  {
    "id": "1",
    "name": "Tech Meetup",
    "date": "2026-03-25"
  }
]

### Create a New Event

Request:

curl -X POST http://localhost:3000/events \
  -H "Content-Type: application/json" \
  -d '{"name": "Workshop", "date": "2026-03-30"}'

Response (201 Created):

{
  "message": "Event created successfully",
  "data": {
    "id": "2",
    "name": "Workshop",
    "date": "2026-03-30"
  }
}

### Get Single Event

Request:

curl -X GET http://localhost:3000/events/2

Response (200 OK):

{
  "id": "2",
  "name": "Workshop",
  "date": "2026-03-30"
}

# Public API Documentation

Full API documentation is available at: Swagger Docs on GitHub Pages

# Local API Documentation

When running locally, access Swagger UI at:
http://localhost:3000/api-docs

# Security

Refer to SECURITY.md
 for security policies and best practices.

# Contributing
Fork the repository.
Create a new branch for your changes.
Make your changes.
Submit a pull request.