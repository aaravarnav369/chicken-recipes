# Static Blog Theme - Automation Rules

This is a static blog theme designed for AI automation. The theme uses HTML, CSS, and vanilla JavaScript to render content from JSON files.

## Core Architecture

- `index.html` - Homepage layout with dynamic post grid
- `post.html` - Single post template
- `theme.css` - All styling
- `js/render.js` - JSON to HTML rendering logic
- `data/posts.json` - Content data
- `images/` - Image assets

## Automation Rules

1. HTML/CSS/JS files must never be modified by AI after initial creation
2. New content is added only by appending JSON objects to `data/posts.json`
3. The system must scale to hundreds of posts
4. All dynamic content comes from JSON files
5. JavaScript only reads JSON and renders content

## JSON Structure

Each post object must contain:
- `slug` - URL-friendly identifier
- `title` - Post title
- `description` - Short description
- `image` - Path to featured image
- `content` - Main content (HTML)
- `date` - Publication date
- `author` - Author name
- `tags` - Array of tags
- `category` - Post category

## File Structure

```
/
├── index.html              (homepage layout)
├── post.html               (single post/recipe template)
├── theme.css               (all styling)
├── js/render.js            (JSON → HTML rendering logic)
├── data/posts.json         (sample content)
├── images/                (image placeholders)
└── README.md               (automation rules)
```

## Deployment

This theme is ready for GitHub Pages or Cloudflare Pages deployment.

## Development

To test locally, you need to serve the files through a web server due to the JSON fetch operations. You can use:

- Python: `python -m http.server 8000`
- Node: `npx serve`
- PHP: `php -S localhost:8000`

## Key Features

- Dynamic content rendering from JSON
- Responsive design
- SEO-friendly structure
- AdSense placeholders
- Related posts functionality
- Clean, modern styling
- Fast loading times
- Mobile-friendly layout
