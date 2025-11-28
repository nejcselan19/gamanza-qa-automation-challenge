// tests/pom/HomePage.js

class HomePage {
  constructor(page) {
    this.page = page;
    this.searchInput = this.page.getByRole('searchbox').first();
  }

  async goto() {
    // baseURL is set in playwright.config.js so we only use / here
    await this.page.goto('/');
  }

  // Navigate to the post either via search (if available) or by direct click.
  async openPostByTitle(title) {
    // Try search first
    if (await this.searchInput.isVisible().catch(() => false)) {
      await this.searchInput.fill(title);
      await this.searchInput.press('Enter');
      // After search results load, click the post link
      const postLink = this.page.getByRole('link', { name: title });
      await postLink.click();
      return;
    }

    // Fallback: no search bar, just click the post on the homepage
    const postLink = this.page.getByRole('link', { name: title });
    await postLink.click();
  }
}

module.exports = { HomePage };
