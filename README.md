# Beautiful Blog - Automated Content System

This is a static, automation-ready blog theme built with HTML, CSS, and vanilla JavaScript. The system is designed for long-term AI automation where content is generated and updated automatically.

## Core Architecture

- **index.html** - Homepage layout with dynamic post grid
- **post.html** - Single post template with image area and AdSense placeholders
- **theme.css** - All styling with responsive design
- **js/render.js** - JSON → HTML rendering logic
- **data/posts.json** - Content source with complete metadata
- **images/** - Image placeholders directory

## Automation Rules

### DO NOT MODIFY:
- HTML/CSS/JS files after initial creation
- Rendering logic in `js/render.js`
- HTML structure and CSS class names
- AdSense placeholder positions

### ONLY MODIFY:
- `data/posts.json` to add new content
- Images in the `images/` directory

### JSON Structure Requirements

Each post must include these fields:
```json
{
  "id": 1,
  "slug": "unique-post-slug",
  "title": "Post Title",
  "description": "Brief description",
  "image": "images/image.jpg",
  "content": "<h2>HTML content with tags</h2><p>Full post content</p>",
  "author": "Author Name",
  "date": "YYYY-MM-DD",
  "tags": ["tag1", "tag2"],
  "category": "Category Name",
  "related": [2, 3]
}
```

### Adding New Content

To add a new post:
1. Add a new object to the `posts` array in `data/posts.json`
2. Ensure the `id` is unique
3. Create a corresponding image in the `images/` directory
4. Update the `related` array with relevant post IDs

### Content Scaling

The system is designed to handle hundreds of posts efficiently:
- Posts are loaded once and cached in memory
- Related posts are computed dynamically
- Lazy loading can be implemented for large datasets

### Deployment

This system is ready for deployment to:
- GitHub Pages
- Cloudflare Pages
- Any static hosting service

Simply upload all files and the system will automatically render all content from the JSON data.

### AdSense Integration

AdSense placeholders are located:
- Top of page
- Middle of single post (after content)
- Bottom of page

Replace the placeholder divs with actual AdSense code while maintaining the same CSS classes.
