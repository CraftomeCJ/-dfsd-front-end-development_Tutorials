# FED Tutorial 6 - CRUD Server and API Testing

## What I completed

- Created a basic Express server using server.js
- Added in-memory goals data
- Added GET /goals
- Added POST /goals
- Added PUT /goals/:id using findIndex and spread syntax
- Added DELETE /goals/:id
- Tested all endpoints with Postman

## Key concepts demonstrated

**findIndex()** — returns the index of the first element that matches the test, or `-1` if not found:
```js
let index = goals.findIndex(g => g.id === id);
```

**Spread syntax** — merges objects so the rightmost value overwrites earlier values:
```js
goals[index] = { ...goals[index], ...req.body };
```

## Local setup

```bash
cd L06_Server-CRUD-and-API-Testing
npm install
node server.js
```

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| GET | / | Health check |
| GET | /goals | Retrieve all goals |
| POST | /goals | Create a new goal |
| PUT | /goals/:id | Update an existing goal |
| DELETE | /goals/:id | Delete a goal |

## Test cases (Postman / curl)

```
GET    http://localhost:3000/goals
POST   http://localhost:3000/goals     { "title": "New Goal" }
PUT    http://localhost:3000/goals/1   { "title": "Updated Goal" }
DELETE http://localhost:3000/goals/1
```

## Evidence

- evidence/get-goals.png
- evidence/post-goal.png
- evidence/put-goal.png
- evidence/delete-goal.png
