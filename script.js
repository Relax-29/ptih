// DOM Elements
const blogPostsContainer = document.getElementById('blog-posts');
const blogDetailContainer = document.getElementById('blog-detail');
const blogPostDetailContainer = document.getElementById('blog-post-detail');
const blogsSection = document.getElementById('blogs-container');
const aboutSection = document.getElementById('about');
const contactSection = document.getElementById('contact');
const backButton = document.getElementById('back-button');
const commentForm = document.getElementById('comment-form');
const commentsListContainer = document.getElementById('comments-list');
const commentCountElement = document.getElementById('comment-count');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const categoryLinks = document.querySelectorAll('.categories a');
const navLinks = document.querySelectorAll('.main-nav a, .footer-nav a');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mainNav = document.querySelector('.main-nav');
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.getElementById('newsletter-form');

// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "The Future of Web Development",
        category: "web-development",
        date: "June 15, 2023",
        author: "Jane Doe",
        excerpt: "Explore the emerging trends and technologies that are shaping the future of web development.",
        content: `
            <p>Web development is constantly evolving, with new technologies and frameworks emerging at a rapid pace. In this article, we'll explore the latest trends and technologies that are shaping the future of web development.</p>
            
            <h2>Progressive Web Apps (PWAs)</h2>
            <p>Progressive Web Apps (PWAs) combine the best of web and mobile apps. They are web applications that can be installed on a user's device and work offline, providing a native-like experience. PWAs are fast, reliable, and engaging, making them a popular choice for businesses looking to reach more users.</p>
            
            <h2>JAMstack Architecture</h2>
            <p>JAMstack (JavaScript, APIs, and Markup) is an architecture designed to make the web faster, more secure, and easier to scale. It decouples the frontend from the backend, allowing developers to focus on building interactive UIs without worrying about server-side rendering.</p>
            
            <h2>WebAssembly</h2>
            <p>WebAssembly (Wasm) is a binary instruction format that allows code written in languages like C, C++, and Rust to run in the browser at near-native speed. It enables developers to build high-performance web applications that were previously only possible with native apps.</p>
            
            <h2>Serverless Architecture</h2>
            <p>Serverless architecture allows developers to build and run applications without having to manage servers. It enables automatic scaling, reduced operational costs, and faster time to market. Popular serverless platforms include AWS Lambda, Azure Functions, and Google Cloud Functions.</p>
            
            <h2>AI and Machine Learning</h2>
            <p>Artificial Intelligence (AI) and Machine Learning (ML) are increasingly being integrated into web development. From chatbots and virtual assistants to personalized content and predictive analytics, AI and ML are transforming the way websites interact with users.</p>
            
            <h3>Conclusion</h3>
            <p>The future of web development is bright, with new technologies and frameworks making it easier to build fast, secure, and engaging web applications. As developers, it's important to stay up-to-date with these trends and continuously learn new skills to remain competitive in the industry.</p>
        `,
        tags: ["Web Development", "PWA", "JAMstack", "WebAssembly", "Serverless"],
        comments: []
    },
    {
        id: 2,
        title: "Artificial Intelligence in 2023",
        category: "artificial-intelligence",
        date: "July 2, 2023",
        author: "John Smith",
        excerpt: "Discover how artificial intelligence is revolutionizing industries and changing the way we live and work.",
        content: `
            <p>Artificial Intelligence (AI) has come a long way in recent years, and 2023 is set to be a breakthrough year for AI technologies. In this article, we'll explore how AI is revolutionizing various industries and changing the way we live and work.</p>
            
            <h2>AI in Healthcare</h2>
            <p>AI is transforming healthcare in numerous ways, from diagnosing diseases to developing new treatments. Machine learning algorithms can analyze medical images to detect cancer at early stages, predict patient outcomes, and recommend personalized treatment plans. AI-powered robots are also assisting in surgeries, making them more precise and less invasive.</p>
            
            <h2>AI in Finance</h2>
            <p>In the financial sector, AI is being used to detect fraud, automate customer service, and make investment decisions. AI algorithms can analyze vast amounts of financial data to identify patterns and trends that humans might miss, leading to more accurate predictions and better investment strategies.</p>
            
            <h2>AI in Transportation</h2>
            <p>Self-driving cars are perhaps the most visible example of AI in transportation. Companies like Tesla, Waymo, and Uber are investing heavily in autonomous vehicle technology. AI is also being used to optimize traffic flow, reduce congestion, and improve public transportation systems.</p>
            
            <h2>AI in Education</h2>
            <p>AI is personalizing education by adapting learning materials to individual students' needs and learning styles. Intelligent tutoring systems can provide immediate feedback, track progress, and identify areas where students need additional help. AI is also automating administrative tasks, giving teachers more time to focus on teaching.</p>
            
            <h2>Ethical Considerations</h2>
            <p>As AI becomes more integrated into our daily lives, ethical considerations become increasingly important. Issues like bias in AI algorithms, privacy concerns, and the impact of automation on jobs need to be addressed to ensure that AI benefits society as a whole.</p>
            
            <h3>Conclusion</h3>
            <p>Artificial Intelligence is no longer a futuristic concept; it's a present reality that's transforming industries and changing the way we live and work. As we move further into 2023, we can expect to see even more innovative applications of AI technology.</p>
        `,
        tags: ["Artificial Intelligence", "Machine Learning", "Healthcare", "Finance", "Transportation", "Education"],
        comments: []
    },
    {
        id: 3,
        title: "Cybersecurity Best Practices",
        category: "cybersecurity",
        date: "July 20, 2023",
        author: "Emily Chen",
        excerpt: "Learn essential cybersecurity best practices to protect your data and systems from increasingly sophisticated cyber threats.",
        content: `
            <p>In today's digital landscape, cybersecurity is more important than ever. With cyber threats becoming increasingly sophisticated, organizations and individuals need to adopt robust security measures to protect their data and systems. In this article, we'll discuss essential cybersecurity best practices.</p>
            
            <h2>Use Strong, Unique Passwords</h2>
            <p>One of the simplest yet most effective cybersecurity measures is using strong, unique passwords for each of your accounts. A strong password should be at least 12 characters long and include a mix of uppercase and lowercase letters, numbers, and special characters. Consider using a password manager to generate and store your passwords securely.</p>
            
            <h2>Enable Two-Factor Authentication (2FA)</h2>
            <p>Two-factor authentication adds an extra layer of security by requiring a second form of verification beyond just a password. This could be a code sent to your phone, a biometric verification like a fingerprint, or a physical security key. Enable 2FA wherever possible, especially for sensitive accounts like email and banking.</p>
            
            <h2>Keep Software Updated</h2>
            <p>Software updates often include patches for security vulnerabilities. Set your operating system, applications, and devices to update automatically, and check regularly for updates that might require manual installation.</p>
            
            <h2>Be Wary of Phishing Attempts</h2>
            <p>Phishing remains one of the most common cyber attack vectors. Be cautious of unsolicited emails, text messages, or phone calls asking for personal information or urging you to click on links or download attachments. Verify the sender's identity before taking any action.</p>
            
            <h2>Regularly Backup Your Data</h2>
            <p>Regular backups are your last line of defense against ransomware and other forms of data loss. Follow the 3-2-1 backup rule: keep three copies of your data on two different types of media, with one copy stored off-site or in the cloud.</p>
            
            <h2>Use a VPN on Public Wi-Fi</h2>
            <p>Public Wi-Fi networks are often insecure, making it easy for attackers to intercept your data. Use a virtual private network (VPN) when connecting to public Wi-Fi to encrypt your internet traffic and protect your privacy.</p>
            
            <h3>Conclusion</h3>
            <p>Cybersecurity is not a one-time effort but an ongoing process. By implementing these best practices and staying informed about emerging threats, you can significantly reduce your risk of falling victim to cyber attacks. Remember, when it comes to cybersecurity, prevention is always better than cure.</p>
        `,
        tags: ["Cybersecurity", "Passwords", "Two-Factor Authentication", "Phishing", "Data Backup", "VPN"],
        comments: []
    }
];

// Initialize the blog
function initializeBlog() {
    renderBlogPosts(blogPosts);
    setupEventListeners();
    showSection('home');
}

// Render blog posts
function renderBlogPosts(posts) {
    blogPostsContainer.innerHTML = '';
    
    if (posts.length === 0) {
        blogPostsContainer.innerHTML = '<div class="no-results">No blog posts found matching your search.</div>';
        return;
    }
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-card');
        postElement.dataset.postId = post.id;
        
        // Choose SVG based on category
        let svgContent;
        if (post.category === 'web-development') {
            svgContent = createWebDevSVG();
        } else if (post.category === 'artificial-intelligence') {
            svgContent = createAISVG();
        } else {
            svgContent = createCybersecuritySVG();
        }
        
        postElement.innerHTML = `
            <div class="blog-image">
                ${svgContent}
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                    <span><i class="far fa-user"></i> ${post.author}</span>
                </div>
                <h3>${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        
        blogPostsContainer.appendChild(postElement);
    });
}

// Render blog post detail
function renderBlogPostDetail(postId) {
    const post = blogPosts.find(post => post.id === postId);
    
    if (!post) {
        return;
    }
    
    // Choose SVG based on category
    let svgContent;
    if (post.category === 'web-development') {
        svgContent = createWebDevSVG();
    } else if (post.category === 'artificial-intelligence') {
        svgContent = createAISVG();
    } else {
        svgContent = createCybersecuritySVG();
    }
    
    blogPostDetailContainer.innerHTML = `
        <div class="blog-detail-header">
            <h1>${post.title}</h1>
            <div class="blog-detail-meta">
                <span><i class="far fa-calendar"></i> ${post.date}</span>
                <span><i class="far fa-user"></i> ${post.author}</span>
                <span><i class="far fa-folder"></i> ${getCategoryName(post.category)}</span>
            </div>
        </div>
        <div class="blog-detail-image">
            ${svgContent}
        </div>
        <div class="blog-detail-content">
            ${post.content}
        </div>
        <div class="blog-tags">
            ${post.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
        </div>
        <div class="share-post">
            <span>Share this post:</span>
            <div class="share-icons">
                <a href="https://twitter.com/intent/tweet" target="_blank" class="share-icon"><i class="fab fa-twitter"></i></a>
                <a href="https://github.com/Relax-29" target="_blank" class="share-icon"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/rerelax/" target="_blank" class="share-icon"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://www.instagram.com/re.relax_/" target="_blank" class="share-icon"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    `;
    
    renderComments(postId);
}

// Render comments for a blog post
function renderComments(postId) {
    const post = blogPosts.find(post => post.id === postId);
    
    if (!post) {
        return;
    }
    
    commentsListContainer.innerHTML = '';
    commentCountElement.textContent = post.comments.length;
    
    if (post.comments.length === 0) {
        commentsListContainer.innerHTML = '<div class="no-comments">No comments yet. Be the first to comment!</div>';
        return;
    }
    
    post.comments.forEach(comment => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        
        const initial = comment.name.charAt(0).toUpperCase();
        
        commentElement.innerHTML = `
            <div class="comment-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="comment-content">
                <div class="comment-header">
                    <span class="comment-name">${comment.name}</span>
                    <span class="comment-date">${comment.date}</span>
                </div>
                <div class="comment-body">
                    <p>${comment.comment}</p>
                </div>
            </div>
        `;
        
        commentsListContainer.appendChild(commentElement);
    });
}

// Add a new comment
function addComment(postId, name, email, comment) {
    const post = blogPosts.find(post => post.id === postId);
    
    if (!post) {
        return;
    }
    
    const newComment = {
        name,
        email,
        comment,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    };
    
    post.comments.push(newComment);
    renderComments(postId);
}

// Search blog posts
function searchBlogPosts(query) {
    query = query.toLowerCase();
    
    return blogPosts.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) || 
        post.content.toLowerCase().includes(query)
    );
}

// Filter blog posts by category
function filterBlogPostsByCategory(category) {
    if (category === 'all') {
        return blogPosts;
    }
    
    return blogPosts.filter(post => post.category === category);
}

// Get category name from category slug
function getCategoryName(categorySlug) {
    const categoryMap = {
        'web-development': 'Web Development',
        'artificial-intelligence': 'Artificial Intelligence',
        'cybersecurity': 'Cybersecurity'
    };
    
    return categoryMap[categorySlug] || categorySlug;
}

// Show section (home, blog detail, about, contact)
function showSection(section) {
    blogsSection.style.display = 'none';
    blogDetailContainer.style.display = 'none';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
    
    // Update navigation active state
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === section) {
            link.classList.add('active');
        }
    });
    
    switch (section) {
        case 'home':
            blogsSection.style.display = 'block';
            break;
        case 'blog-detail':
            blogDetailContainer.style.display = 'block';
            break;
        case 'about':
            aboutSection.style.display = 'block';
            break;
        case 'contact':
            contactSection.style.display = 'block';
            break;
    }
}

// Setup event listeners
function setupEventListeners() {
    // Blog post click
    blogPostsContainer.addEventListener('click', function(e) {
        e.preventDefault();
        
        const blogCard = e.target.closest('.blog-card');
        if (blogCard) {
            const postId = parseInt(blogCard.dataset.postId);
            renderBlogPostDetail(postId);
            showSection('blog-detail');
            window.scrollTo(0, 0);
        }
    });
    
    // Back button click
    backButton.addEventListener('click', function(e) {
        e.preventDefault();
        showSection('home');
    });
    
    // Popular post click
    document.querySelectorAll('.popular-post-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const postId = parseInt(this.dataset.postId);
            renderBlogPostDetail(postId);
            showSection('blog-detail');
            window.scrollTo(0, 0);
        });
    });
    
    // Comment form submit
    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const comment = document.getElementById('comment').value;
        
        if (!name || !email || !comment) {
            alert('Please fill in all fields');
            return;
        }
        
        // Get current post ID from the URL or data attribute
        const postId = parseInt(blogPostDetailContainer.querySelector('.blog-detail-header').dataset.postId) || 
                      parseInt(blogPostsContainer.querySelector('.blog-card.active')?.dataset.postId) || 1;
        
        addComment(postId, name, email, comment);
        
        // Reset form
        commentForm.reset();
        
        // Show success message
        alert('Comment added successfully!');
    });
    
    // Search functionality
    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        
        if (!query) {
            renderBlogPosts(blogPosts);
            return;
        }
        
        const results = searchBlogPosts(query);
        renderBlogPosts(results);
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
    
    // Category filter
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active state
            categoryLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.dataset.category;
            const filteredPosts = filterBlogPostsByCategory(category);
            renderBlogPosts(filteredPosts);
        });
    });
    
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.dataset.section;
            showSection(section);
            
            // Close mobile nav if open
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
            }
        });
    });
    
    // Mobile nav toggle
    mobileNavToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
    
    // Contact form submit
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const subject = document.getElementById('contact-subject').value;
        const message = document.getElementById('contact-message').value;
        
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // In a real application, you would send this data to a server
        // For this exercise, we'll just show a success message
        alert('Message sent successfully!');
        contactForm.reset();
    });
    
    // Newsletter form submit
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (!email) {
            alert('Please enter your email address');
            return;
        }
        
        // In a real application, you would send this data to a server
        // For this exercise, we'll just show a success message
        const successMessage = document.getElementById('newsletter-success');
        successMessage.style.display = 'block';
        
        // Hide the success message after 5 seconds
        setTimeout(function() {
            successMessage.style.display = 'none';
        }, 5000);
        
        newsletterForm.reset();
    });
}

// Create SVG for Web Development category
function createWebDevSVG() {
    return `
        <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="500" height="300" fill="#e9f5ff"/>
            <rect x="100" y="50" width="300" height="200" rx="10" fill="#ffffff" stroke="#333333" stroke-width="2"/>
            <rect x="100" y="50" width="300" height="30" rx="10" fill="#4a6eb5" stroke="#333333" stroke-width="2"/>
            <circle cx="115" cy="65" r="5" fill="#ff5f57"/>
            <circle cx="130" cy="65" r="5" fill="#ffbd2e"/>
            <circle cx="145" cy="65" r="5" fill="#28ca41"/>
            <rect x="120" y="100" width="260" height="20" rx="5" fill="#f1f1f1"/>
            <rect x="120" y="130" width="180" height="20" rx="5" fill="#f1f1f1"/>
            <rect x="120" y="160" width="220" height="20" rx="5" fill="#f1f1f1"/>
            <rect x="120" y="190" width="150" height="20" rx="5" fill="#f1f1f1"/>
            <text x="250" y="215" font-family="Arial" font-size="12" text-anchor="middle" fill="#4a6eb5">Web Development</text>
        </svg>
    `;
}

// Create SVG for Artificial Intelligence category
function createAISVG() {
    return `
        <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="500" height="300" fill="#f0f7ff"/>
            <circle cx="250" cy="150" r="100" fill="#edf2fa" stroke="#4a6eb5" stroke-width="2"/>
            <path d="M250 70 L250 130 L310 170 L280 230 L220 230 L190 170 L250 130" fill="#4a6eb5" stroke="#333333" stroke-width="2"/>
            <circle cx="250" cy="100" r="10" fill="#ffffff" stroke="#333333" stroke-width="2"/>
            <circle cx="290" cy="180" r="10" fill="#ffffff" stroke="#333333" stroke-width="2"/>
            <circle cx="210" cy="180" r="10" fill="#ffffff" stroke="#333333" stroke-width="2"/>
            <line x1="150" y1="100" x2="200" y2="120" stroke="#4a6eb5" stroke-width="2"/>
            <line x1="150" y1="200" x2="200" y2="180" stroke="#4a6eb5" stroke-width="2"/>
            <line x1="350" y1="100" x2="300" y2="120" stroke="#4a6eb5" stroke-width="2"/>
            <line x1="350" y1="200" x2="300" y2="180" stroke="#4a6eb5" stroke-width="2"/>
            <text x="250" y="270" font-family="Arial" font-size="12" text-anchor="middle" fill="#4a6eb5">Artificial Intelligence</text>
        </svg>
    `;
}

// Create SVG for Cybersecurity category
function createCybersecuritySVG() {
    return `
        <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="500" height="300" fill="#f5f5f5"/>
            <path d="M250 70 L350 120 L350 220 L250 270 L150 220 L150 120 Z" fill="#edf2fa" stroke="#333333" stroke-width="2"/>
            <rect x="200" y="140" width="100" height="120" rx="10" fill="#ffffff" stroke="#333333" stroke-width="2"/>
            <rect x="220" y="180" width="60" height="40" rx="5" fill="#f1f1f1" stroke="#333333" stroke-width="1"/>
            <circle cx="250" cy="200" r="15" fill="#4a6eb5" stroke="#333333" stroke-width="1"/>
            <line x1="250" y1="200" x2="250" y2="185" stroke="#333333" stroke-width="2"/>
            <path d="M230 90 C230 70, 270 70, 270 90" stroke="#333333" stroke-width="3" fill="none"/>
            <path d="M210 90 C210 60, 290 60, 290 90" stroke="#333333" stroke-width="2" fill="none"/>
            <path d="M190 90 C190 50, 310 50, 310 90" stroke="#333333" stroke-width="1" fill="none"/>
            <text x="250" y="140" font-family="Arial" font-size="10" text-anchor="middle" fill="#333333">SECURE</text>
            <text x="250" y="270" font-family="Arial" font-size="12" text-anchor="middle" fill="#4a6eb5">Cybersecurity</text>
        </svg>
    `;
}

// Initialize the blog when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeBlog);
