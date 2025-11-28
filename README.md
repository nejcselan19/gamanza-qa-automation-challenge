# Full-Stack QA Automation Challenge

This project provides a simple, containerized WordPress blog (System Under Test) and a basic automated UI test suite using Playwright. The test verifies that a seeded blog post can be found and opened successfully.

## Tech Stack

- **CMS:** WordPress (Docker)
- **Database:** MySQL (Docker)
- **Automation:** Playwright (JavaScript)
- **Infrastructure:** Docker & Docker Compose

## Setup Instructions

### 1. Install dependencies
```bash
npm install
```

### 2. Start WordPress and the database
```bash
docker-compose up -d
```
This will start the local WordPress instance at **http://localhost:8080** and load the seeded blog post:
**QA Automation Challenge** (with the content: "Dockerized testing is the future.").

### 3. Run the Playwright tests
```bash
npm test
```
This executes an end-to-end test that:
- Opens the homepage
- Locates the post via search or direct click
- Opens the blog post
- Verifies the title is visible
- Confirms the expected text is present

## Project Structure
```
docker-compose.yml
playwright.config.js
package.json

/tests
  ├─ blog.spec.js
  └─ pom/
       ├─ HomePage.js
       └─ PostPage.js
```

## Notes
- The project is intentionally simple and designed for demonstration purposes.