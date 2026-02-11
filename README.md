# todoapi
basic backend tutorial

Goal: A REST API where users can sign up, log in, and manage their own private tasks.

MVP: 
1. User registration & login (email/password or just simple for now)
2. JWT-based authentication (protect routes)
3. CRUD for tasks: create, read (list + single), update, delete
4. Tasks belong to users (only see/edit your own)
5. Basic validation (task title required, due dates optional)
6. Proper error responses (400, 401, 404, etc.)
7. Use a real database (not just in-memory)

Endpoints (MVP):
POST /auth/register → create user
POST /auth/login → get JWT
GET /tasks → list your tasks (protected)
POST /tasks → create task
GET /tasks/:id → get one
PATCH /tasks/:id → update
DELETE /tasks/:id → delete

Tech:
Node.js (latest LTS)
Express
TypeScript
Prisma ORM + PostgreSQL
JWT for auth (jsonwebtoken + bcrypt for passwords)
Zod for input validation (modern & type-safe)
dotenv for env vars