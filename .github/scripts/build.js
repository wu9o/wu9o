const fs = require('fs');
const Parser = require('rss-parser');

const parser = new Parser();

// Replace with your blog's RSS feed URL
const RSS_FEED_URL = 'https://wu9o.github.io/cogita/rss.xml'; 
const MAX_POSTS = 5; // Number of posts to display

async function updateReadme() {
  try {
    // Read the README template
    const readmePath = './README.md';
    let readmeContent = fs.readFileSync(readmePath, 'utf-8');

    try {
      // Fetch and parse the RSS feed
      console.log('Fetching RSS feed from:', RSS_FEED_URL);
      const feed = await parser.parseURL(RSS_FEED_URL);
      
      // Get the latest posts
      const latestPosts = feed.items.slice(0, MAX_POSTS).map(item => {
        const date = new Date(item.pubDate).toLocaleDateString('zh-CN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        return `* [${item.title}](${item.link}) - ${date}`;
      }).join('\n');

      // Replace the blog post list placeholder
      const blogPostListRegex = /<!-- BLOG-POST-LIST:START -->[\s\S]*<!-- BLOG-POST-LIST:END -->/;
      
      if (blogPostListRegex.test(readmeContent)) {
        readmeContent = readmeContent.replace(
          blogPostListRegex,
          `<!-- BLOG-POST-LIST:START -->\n${latestPosts}\n<!-- BLOG-POST-LIST:END -->`
        );
        console.log('Blog posts updated successfully');
      } else {
        console.log('Blog post placeholders not found in README');
      }
    } catch (feedError) {
      console.error('Error fetching RSS feed:', feedError.message);
      console.log('Continuing without updating blog posts...');
    }

    // Replace the date placeholder
    const dateRegex = /{DATE}/g;
    const updatedReadme = readmeContent.replace(
        dateRegex,
        new Date().toLocaleString('zh-CN', {
          timeZone: 'Asia/Shanghai',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
    );

    // Write the new content back to the README
    fs.writeFileSync(readmePath, updatedReadme);
    console.log('README updated successfully.');

  } catch (error) {
    console.error('Error updating README:', error);
    process.exit(1);
  }
}

updateReadme();
