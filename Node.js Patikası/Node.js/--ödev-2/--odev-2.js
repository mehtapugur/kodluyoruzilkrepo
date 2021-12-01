const posts = [
  { name: "Post 1", content: "This is our first blog post." },
  { name: "Post 2", content: "This is our second blog post." },
  { name: "Post 3", content: "This is our third blog post." },
];

const listPost = () => {
  posts.map((item) => console.log(item.name));
};

listPost();

const addPost = (post) => {
  posts.push(post);
};

async function showPosts() {
  try {
    await addPost({ name: "Post 4", content: "This is our fourt post." });
    listPost();
  } catch (e) {
    console.log(e);
  }
}

showPosts();
