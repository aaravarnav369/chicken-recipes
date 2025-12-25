// Global variables
let posts = [];
let currentPostSlug = null;

// Initialize the blog
document.addEventListener('DOMContentLoaded', function() {
    loadPosts();
});

// Load posts from JSON
async function loadPosts() {
    try {
        const response = await fetch('data/posts.json');
        posts = await response.json();
        
        // Check if we're on the index page or post page
        if (document.querySelector('#posts-container')) {
            renderPostsGrid();
        } else if (document.querySelector('#post-title-display')) {
            renderSinglePost();
        }
    } catch (error) {
        console.error('Error loading posts:', error);
    }
}

// Render the posts grid on the homepage
function renderPostsGrid() {
    const container = document.getElementById('posts-container');
    if (!container || !posts) return;
    
    container.innerHTML = '';
    
    posts.forEach(post => {
        const postCard = document.createElement('div');
        postCard.className = 'post-card';
        
        postCard.innerHTML = `
            <a href="post.html?slug=${post.slug}">
                <img src="${post.image}" alt="${post.title}" class="post-card-image" onerror="this.style.display='none'">
            </a>
            <div class="post-card-content">
                <h2 class="post-card-title">
                    <a href="post.html?slug=${post.slug}">${post.title}</a>
                </h2>
                <p class="post-card-excerpt">${post.description}</p>
                <div class="post-card-meta">
                    <span class="post-date">${formatDate(post.date)}</span>
                    <span class="post-category">${post.category}</span>
                </div>
            </div>
        `;
        
        container.appendChild(postCard);
    });
}

// Render a single post
function renderSinglePost() {
    // Get the slug from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    currentPostSlug = urlParams.get('slug');
    
    if (!currentPostSlug) {
        document.getElementById('post-title-display').textContent = 'Post not found';
        return;
    }
    
    const post = posts.find(p => p.slug === currentPostSlug);
    if (!post) {
        document.getElementById('post-title-display').textContent = 'Post not found';
        return;
    }
    
    // Update the page content
    document.getElementById('post-title').textContent = post.title;
    document.getElementById('post-description').content = post.description;
    document.getElementById('post-title-display').textContent = post.title;
    document.getElementById('post-author').textContent = post.author;
    document.getElementById('post-date').textContent = formatDate(post.date);
    document.getElementById('post-category').textContent = post.category;
    document.getElementById('post-image').src = post.image;
    document.getElementById('post-content').innerHTML = post.content;
    
    // Render tags
    const tagsContainer = document.getElementById('post-tags');
    if (tagsContainer && post.tags && post.tags.length > 0) {
        tagsContainer.innerHTML = '<h4>Tags:</h4>';
        post.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.textContent = tag;
            tagsContainer.appendChild(tagSpan);
        });
    } else if (tagsContainer) {
        tagsContainer.style.display = 'none';
    }
    
    // Render related posts
    renderRelatedPosts(post);
}

// Render related posts
function renderRelatedPosts(currentPost) {
    const relatedContainer = document.getElementById('related-posts-container');
    if (!relatedContainer) return;
    
    // Find posts in the same category, excluding the current post
    const relatedPosts = posts
        .filter(post => post.category === currentPost.category && post.slug !== currentPost.slug)
        .slice(0, 3); // Limit to 3 related posts
    
    if (relatedPosts.length === 0) {
        document.getElementById('related-posts').style.display = 'none';
        return;
    }
    
    const relatedGrid = document.createElement('div');
    relatedGrid.className = 'related-posts-grid';
    
    relatedPosts.forEach(post => {
        const relatedCard = document.createElement('div');
        relatedCard.className = 'related-post-card';
        relatedCard.innerHTML = `
            <h4><a href="post.html?slug=${post.slug}">${post.title}</a></h4>
            <p>${post.description}</p>
            <div class="post-meta">
                <span>${formatDate(post.date)}</span>
            </div>
        `;
        relatedGrid.appendChild(relatedCard);
    });
    
    relatedContainer.appendChild(relatedGrid);
}

// Format date for display
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Helper function to get a post by slug
function getPostBySlug(slug) {
    return posts.find(post => post.slug === slug);
}

// Helper function to get posts by category
function getPostsByCategory(category) {
    return posts.filter(post => post.category === category);
}

// Helper function to get posts by tag
function getPostsByTag(tag) {
    return posts.filter(post => post.tags && post.tags.includes(tag));
}