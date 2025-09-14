# Project: Blog-API

## What did we learn working on this project?

### 1. Layered Architecture
Decomposing the project into **layers** separates concerns and makes the application easier to maintain, extend, and debug.  
If an error occurs, we know exactly which layer is responsible.

### 2. Role of Each Layer
- **Main (`server.js`)**  
  - Sets up the Express app  
  - Configures global middleware (e.g., `morgan`, `express.json`)  
  - Mounts routes with `app.use()`  
        When we say “mount routes with app.use()”, we mean: “Whenever a request URL starts with this prefix, hand it off to this router (or middleware).”

- **Routes (`routes/`)**  
  - Define the endpoints (`GET /blogs`, `POST /blogs/:id`, etc.)  
  - Map each route to its corresponding controller function  

- **Controllers (`controllers/`)**  
  - Contain the request-handling functions  
  - Responsible for parsing the request and sending the response  
  - Do **not** contain business logic  

- **Services (`services/`)**  
  - Contain the **business logic** (rules, validations, orchestration)  
  - Call repositories to fetch or update data  

- **Repositories (`repositories/`)**  
  - Communicate directly with the database layer  
  - Perform CRUD operations (Create, Read, Update, Delete)  

- **Database (`db/`)**  
  - Store the data (currently an in-memory array, later can be a real DB)  
  - Provide helpers like ID generation  

---

### 3. Benefits
- Clear separation of concerns  
- Easier debugging and testing  
- More maintainable and scalable structure  
- Easy to swap out or upgrade a layer (e.g., replace in-memory DB with MongoDB/Postgres)

### 4. The importance of app.use(express.json()) middlewear
 - This middlewear tells express "Hey, whenever a request comes in with a JSON body (e.g. from a POST, PUT, PATCH), please parse it and put the result into req.body”
