const prompt = require("prompt-sync")();


let posts = [];

// Function to display the main menu
function displayMenu() {
  console.log("\n--- Welcome to Ellie's Programming Journey Blog ---");
  console.log("1. Create a New Post");
  console.log("2. View All Posts");
  console.log("3. Update a Post");
  console.log("4. Exit");
}

// Function to create a new blog post
function createPost() {
  console.log("\n--- Create a New Post ---");
  const title = prompt("Enter the post title: ");
  const content = prompt("Enter the post content: ");
  
  if (title && content) {
    const post = { id: posts.length + 1, title, content, date: new Date().toLocaleString() };
    posts.push(post);
    console.log("\nYour new post was created successfully!");
  } else {
    console.log("\nError: Title and content cannot be empty.");
  }
}

// Function to view all blog posts
function viewPosts() {
  console.log("\n--- All Blog Posts ---");
  
  if (posts.length === 0) {
    console.log("No posts available.");
    return;
  }

  posts.forEach((post) => {
    console.log(`\nPost ID: ${post.id}`);
    console.log(`Title: ${post.title}`);
    console.log(`Content: ${post.content}`);
    console.log(`Date: ${post.date}`);
  });
}

// Function to update an existing blog post
function updatePost() {
    console.log("\n--- Update a Post ---");
    
    if (posts.length === 0) {
      console.log("No posts available to update.");
      return;
    }
  
    const postId = parseInt(prompt("Enter the Post ID of the post you want to update: "), 10);
    const post = posts.find((p) => p.id === postId);
  
    if (!post) {
      console.log(`No post found with ID ${postId}.`);
      return;
    }
  
    console.log(`\nCurrent Title: ${post.title}`);
    const newTitle = prompt("Enter the new title (or press Enter to keep the current title): ");
    console.log(`Current Content: ${post.content}`);
    const newContent = prompt("Enter the new content (or press Enter to keep the current content): ");
  
    if (newTitle.trim()) post.title = newTitle;
    if (newContent.trim()) post.content = newContent;
  
    console.log("\nPost updated successfully!");
  }
  

// Main application loop
function runBlogApp() {
  let isRunning = true;

  while (isRunning) {
    displayMenu();
    const choice = prompt("Enter your choice (1-3): ");

    switch (choice) {
      case "1":
        createPost();
        break;
      case "2":
        viewPosts();
        break;
      case "3":
        updatePost();
        break;
      case "4":
        console.log("Exiting the application. Goodbye!");
        isRunning = false;
        break;
      default:
        console.log("Invalid choice. Please enter 1, 2, or 3.");
    }
  }
}

// Run the application
runBlogApp();
