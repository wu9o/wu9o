const fs = require('fs');
const Parser = require('rss-parser');

const parser = new Parser();

// Replace with your blog's RSS feed URL
const RSS_FEED_URL = 'https://your-blog.com/rss.xml'; 
const MAX_POSTS = 5; // Number of posts to display

async function updateReadme() {
  try {
    // Read the README template
    const readmePath = './README.md';
    let readmeContent = fs.readFileSync(readmePath, 'utf-8');

    // Fetch and parse the RSS feed
    const feed = await parser.parseURL(RSS_FEED_URL);
    
    // Get the latest posts
    const latestPosts = feed.items.slice(0, MAX_POSTS).map(item => {
      return `* [${item.title}](${item.link}) - ${new Date(item.pubDate).toDateString()}`;
    }).join('\n');

    // Replace the blog post list placeholder
    const blogPostListRegex = /<!-- BLOG-POST-LIST:START -->[\s\S]*<!-- BLOG-POST-LIST:END -->/;
    const newReadmeContent = readmeContent.replace(
      blogPostListRegex,
      `<!-- BLOG-POST-LIST:START -->\n${latestPosts}\n<!-- BLOG-POST-LIST:END -->`
    );

    // Replace the date placeholder
    const updatedReadme = newReadmeContent.replace(
        /{DATE}/,
        new Date().toUTCString()
    );

    // Write the new content back to the README
    fs.writeFileSync(readmePath, updatedReadme);
    console.log('README updated successfully.');

  } catch (error) {
    console.error('Error updating README:', error);
  }
}

updateReadme();
