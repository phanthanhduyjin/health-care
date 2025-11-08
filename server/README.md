# Server

Mock API server using JSON Server.

## Available Endpoints

- `GET /patients` - Get all patients
- `GET /patients/:id` - Get a specific patient
- `POST /patients` - Create a new patient
- `PUT /patients/:id` - Update a patient
- `DELETE /patients/:id` - Delete a patient

- `GET /appointments` - Get all appointments
- `GET /appointments/:id` - Get a specific appointment
- `POST /appointments` - Create a new appointment
- `PUT /appointments/:id` - Update an appointment
- `DELETE /appointments/:id` - Delete an appointment

- `GET /doctors` - Get all doctors
- `GET /doctors/:id` - Get a specific doctor

## Running the server

```bash
pnpm dev
```

The server will run on http://localhost:3001
