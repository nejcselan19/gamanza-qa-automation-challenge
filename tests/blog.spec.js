// tests/blog.spec.js
const { test, expect } = require('@playwright/test');
const { HomePage } = require('./pom/HomePage');
const { PostPage } = require('./pom/PostPage');

test.describe('Blog post: QA Automation Challenge', () => {
  test('user can find the post and see correct title and content', async ({ page }) => {
    const homePage = new HomePage(page);
    const postPage = new PostPage(page);

    const POST_TITLE = 'QA Automation Challenge';
    const REQUIRED_TEXT = 'Dockerized testing is the future';

    // 1) Navigate to the homepage.
    await homePage.goto();

    // 2) Locate Search bar or simply click on the post (POM handles both).
    await homePage.openPostByTitle(POST_TITLE);

    // 3) Assert that the post title is visible and correct.
    await expect(postPage.title).toBeVisible();
    await expect(postPage.title).toHaveText(POST_TITLE);

    // 4) Assert that the post content contains the required text.
    await expect(postPage.content).toContainText(REQUIRED_TEXT);
  });
});