# Unhandled Promise Rejection in Express.js Async Route Handler

This repository demonstrates a common error in Express.js applications involving unhandled promise rejections within asynchronous route handlers.  The provided `bug.js` file showcases the issue, while `bugSolution.js` offers a corrected version with proper error handling.

## Problem

The `bug.js` file contains an Express.js route handler that processes data asynchronously. However, if an error occurs during asynchronous processing, the error isn't caught properly, leading to an unhandled promise rejection.  This can cause the application to crash or behave unpredictably.

## Solution

The `bugSolution.js` file demonstrates the correct way to handle errors within asynchronous Express.js route handlers using `.catch()` to gracefully handle exceptions and send appropriate error responses to the client. This prevents unhandled rejections and ensures better application stability.