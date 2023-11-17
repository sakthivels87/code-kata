# Authentication-service

This application provides authentication service like user registration and validation, So that authorised user going to perform interaction with front end application.

### API Endpoints
-----------------
	#### 1. New User Registration:
		HTTP Method: POST
		URL: https://authentication-service-green.vercel.app/api/users
		Request: 
			{
				"name":"Sakthivel S",
				"email":"xyz@test.com",
				"password":"1234567"
			}
			
	
		Successful Response: Status Code - 200
			{
				"_id": "6557a52a8bb8053a88150312",
				"name": "Sakthivel S",
				"email": "qqq@test.com"
			}
			
		Duplicate Registration - Server returns 400 Bad Request.
		Status - User already registered.
	
	#### 2. Login / Authentication:
		HTTP Method: POST
		URL: https://authentication-service-green.vercel.app/api/auth
		Request:
			{
				"email":"abc@test.com",
				"password":"1234567"
			}
			
		Successful Response: Status Code: 200
		Response: JWT Token [eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTU3NTI4YjgwMzRjYjdjOWUyNjc3MDciLCJuYW1lIjoiU2FrdGhpdmVsIFNhbXV0aGlyYW0iLCJlbWFpbCI6ImFiY0B0ZXN0LmNvbSIsImlhdCI6MTcwMDI0MjIyMX0.7nh6rQ6ujTRpBM9KUoIIbXsbXuME9edU5AFDylYpZFI]
		
### Tech Stack:
	1. Node.js
	2. Mongodb
	3. Mongoose
	4. Express
	5. jsonwebtoken