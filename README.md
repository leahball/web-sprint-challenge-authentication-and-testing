# Authentication and Testing Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **Authentication and Testing**. During this sprint, you studied **authentication, JSON web tokens, unit testing, and backend testing**. In your challenge this week, you will demonstrate your mastery of these skills by creating **a dad jokes app**.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers on Monday following the challenge submission. For more information on the review process [click here.](https://www.notion.so/bloomtech/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Setup

- [X] Run `npm install` to install your dependencies.
- [X] Build your database executing `npm run migrate`.
- [X] Run tests locally executing `npm test`.

## Project Instructions

Dad jokes are all the rage these days! In this challenge, you will build a real wise-guy application.

Users must be able to call the `[POST] /api/auth/register` endpoint to create a new account, and the `[POST] /api/auth/login` endpoint to get a token.

We also need to make sure nobody without the token can call `[GET] /api/jokes` and gain access to our dad jokes.

We will hash the user's password using `bcryptjs`, and use JSON Web Tokens and the `jsonwebtoken` library.

### MVP

Your finished project must include all of the following requirements (further instructions are found inside each file):

- [ ] An authentication workflow with functionality for account creation and login, implemented inside `api/auth/auth-router.js`.
- [X] Middleware used to restrict access to resources from non-authenticated requests, implemented inside `api/middleware/restricted.js`.
- [ ] A minimum of 2 tests per API endpoint, written inside `api/server.test.js`.

**IMPORTANT Notes:**

- Do not exceed 2^8 rounds of hashing with `bcryptjs`.
- If you use environment variables make sure to provide fallbacks in the code (e.g. `process.env.SECRET || "shh"`).
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries. Do not update existing packages.
- The database already has the `users` table, but if you run into issues, the migration is available.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing.

## Submission format

- [ ] Submit via Codegrade by pushing commits to your `main` branch on Github.
- [ ] Check Codegrade before the deadline to compare its results against your local tests.
- [ ] Check Codegrade on the days following the Sprint Challenge for reviewer feedback.
- [ ] New commits will be evaluated by Codegrade if pushed _before_ the sprint challenge deadline.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics.

1. Differences between using _sessions_ or _JSON Web Tokens_ for authentication.

answer: Session based authentication is where the user state is stored on the server’s memory. In session based auth system, the server creates and stores the session data in the server memory when the user logs in and then stores the session Id in a cookie on the user browser.
The session Id is then sent on subsequent requests to the server and the server compares it with the stored session data and proceeds to process the requested action. 
Token based authentication --the user state is stored on the client.  In the token based authentication, the user data is encrypted into a JWT (JSON Web Token) with a secret and then sent back to the client. The JWT is then stored on the client side mostly localStorage and sent as a header for every subsequent request. The server receives and validates the JWT before proceeding to send a response to the client.

2. What does `bcryptjs` do to help us store passwords in a secure manner?

answer: Bcrypt incorporates hash encryption along with a work factor, which allows you to determine how expensive the hash function will be (i.e. how long it takes to decrypt it by brute force measures).

3. How are unit tests different from integration and end-to-end testing?

answer: unit tests are to verify wether a small and isolated piece of the codebase (often functions or methods) behaves as the developer intended. they run often and need to be fast and are preferred tool for test driven development (TDD)

4. How does _Test Driven Development_ change the way we write applications and tests?

answer: a good test is independent, focused and tests only one unit of code. Tests only what needs to be tested and no more. Doesn't rely on other tests. Usually you want the test failing, write a little code to get it to pass then refractor it.




