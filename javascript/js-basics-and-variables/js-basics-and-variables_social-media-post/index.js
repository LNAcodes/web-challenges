console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

// --v-- write your code here --v--
const PostTitle = "My CyberCheck App";
const PostContent = "Try it out for free!";
let PostLikes = 1076;
const UserCreator = "Nodina Javason";
let isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/

// --v-- write your code here --v--
console.log(PostTitle);
console.log(PostContent);
console.log(PostLikes);
console.log(UserCreator);
console.log(isReported);

// --^-- write your code here --^--
PostLikes = PostLikes + 1;
console.log(PostLikes);
