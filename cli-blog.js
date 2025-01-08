const prompt = require("prompt-sync")();


let posts = [];

// Function to display the main menu
function displayMenu() {
  console.log("\n--- Welcome to Ellie's New Year Blog ---");
  console.log("1. Create a New Post");
  console.log("2. View All Posts");
  console.log("3. Exit");
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
