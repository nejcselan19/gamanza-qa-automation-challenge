// tests/pom/PostPage.js

class PostPage {
  constructor(page) {
    this.page = page;

    // Title selector from your HTML
    this.title = this.page.locator('h1.wp-block-post-title');

    // Content wrapper for the post body
    this.content = this.page.locator('div.entry-content.wp-block-post-content');
  }

  async getTitleText() {
    return this.title.textContent();
  }

  async getContentText() {
    return this.content.textContent();
  }
}

module.exports = { PostPage };
