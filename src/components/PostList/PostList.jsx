import React from "react";
import Post from "../Post/Post";

const dummyPost = [
  {
    id: 1,
    user: {
      avatar: "https://via.placeholder.com/50",
      name: "Jane Doe",
    },
    timestamp: "August 3, 2024 at 2:00 PM",
    image: "https://via.placeholder.com/500",
    content:
      "This is a sample caption for the post. It includes a brief description or message related to the image.",
  },
  {
    id: 2,
    user: {
      avatar: "https://via.placeholder.com/50",
      name: " Doe",
    },
    timestamp: "August 5, 2024 at 2:00 PM",
    image: "https://via.placeholder.com/500",
    content:
      "This is a sample caption for the post. It includes a brief description or message related to the image.",
  },
];

const PostList = () => {
  return (
    <div>
      {dummyPost?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
