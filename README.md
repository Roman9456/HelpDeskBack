This project provides a RESTful API for managing tickets using Koa, a web framework for Node.js.

Setup
Clone the repository:
git clone https://github.com/Roman9456/HelpDeskBack.git
cd your-project
Install dependencies:
npm install


Usage
Start the server:
npm start

The server runs on port 3000 by default. Use PORT environment variable to set a different port:
PORT=5000 npm start
API Endpoints
Get all tickets:

http
GET /api/tickets
Get ticket by ID:

http
GET /api/tickets/:id
Create a new ticket:

http
POST /api/tickets
JSON Payload:
{
  "name": "Ticket name",
  "description": "Ticket description",
  "status": false
}
Replace "Ticket name" and "Ticket description" with actual values.

Example
Assuming the server is running locally on port 3000:

Retrieve all tickets:

curl http://localhost:3000/api/tickets
Retrieve details of a ticket with ID 1:


curl http://localhost:3000/api/tickets/1
Create a new ticket:

curl -X POST -H "Content-Type: application/json" -d '{"name":"New Ticket","description":"New ticket description","status":false}' http://localhost:3000/api/tickets
Technologies Used
Koa
koa-router
koa-bodyparser
@koa/cors
License
This project is licensed under the MIT License - see the LICENSE file for details.