# Next.js 15 API Route Unhandled Promise Rejection

This repository demonstrates a common issue in Next.js 15 API routes where unhandled promise rejections lead to cryptic 500 errors. The provided solution shows how to properly handle these errors for a more robust application.

## Bug
The `pages/api/data.js` file contains an API route that fetches data asynchronously.  The `fetchData` function intentionally throws an error.  However, this error is not caught, leading to an unhandled promise rejection and a generic 500 error response.

## Solution
The `pages/api/dataSolution.js` file demonstrates the solution: using a `try...catch` block to handle potential errors within the asynchronous operation and sending a more informative error response.