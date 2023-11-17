# Account service & Decision-Engine service
This repo contains source code for both accounts & decision engine services.
1. Acccount Service -> This api provides the yearly & monthly balance sheet.
2. Decision-Engine Service -> This api checks the loan eligibility based on business preAssessment value.

# 1. Account Service:
	This API currently designed to provide balance sheets based on year, month value. This API only accept valid years and months. 
			-> The valid input for **year is 2010 to 2023**
	 		-> The valid input for **month is 1 to 12**
  ### API Endpoints:
  	  1. https://accounting-service.vercel.app/api/v1/balance-sheet/{year}
	  2. https://accounting-service.vercel.app/api/v1/balance-sheet/{year}/{month}
	  3. https://accounting-service.vercel.app/api/v1/balance-sheet?year=2021
	  4. https://accounting-service.vercel.app/api/v1/balance-sheet?year=2021&month=10

  ### HTTP Method: GET

  ### Results:
	 1. GET -> https://accounting-service.vercel.app/api/v1/balance-sheet/2021
		Status Code -> 200
				Respose: [
		    {
		        "year": 2021,
		        "month": 12,
		        "profitOrLoss": 250000,
		        "assetsValue": 1234
		    },
		    {
		        "year": 2021,
		        "month": 11,
		        "profitOrLoss": 1150,
		        "assetsValue": 5789
		    },
		    {
		        "year": 2021,
		        "month": 10,
		        "profitOrLoss": 2500,
		        "assetsValue": 22345
		    },
		    {
		        "year": 2021,
		        "month": 9,
		        "profitOrLoss": -187000,
		        "assetsValue": 223452
		    }
		]

     2. GET -> https://accounting-service.vercel.app/api/v1/balance-sheet/2021/12
	 Status Code -> 200
	 Response: [{"year":2021,"month":12,"profitOrLoss":250000,"assetsValue":1234}]
  
 
 # 2. Decision Engine Service: 
 	This API is designed to provide eligibility status of loan application based on business preAssessment value.

   ### API Endpoint:
   	1. https://accounting-service.vercel.app/api/v1/decision-engine

      **Request Body:**
	      	{
		    "name":"abc company",
		    "establishedYear":"2015",
		    "profitOrLoss":23423,
		    "preAssessment":100
		}
   ### Http Method: POST 

   ### Results:
   	POST -> https://accounting-service.vercel.app/api/v1/decision-engine
    	Request -> {"name":"abc company","establishedYear":"2015","profitOrLoss":23423,"preAssessment":100}
     	Response: { "isEligible": true, "approvedPercent": 100}

        POST -> https://accounting-service.vercel.app/api/v1/decision-engine
        Request -> {"name":"xyz company","establishedYear":"2022","profitOrLoss":3423,"preAssessment":50}
        Response: {"isEligible": false, "approvedPercent": 0}

## Tools & TechStack
	1. Node.js
 	2. Express Framework
  	3. Joi
   	4. Debug
    	5. Vercel Platform
