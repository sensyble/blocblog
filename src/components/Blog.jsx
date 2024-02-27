// src/components/Blog.jsx
import React from 'react';
import { Card, Container, Box, Image } from '@chakra-ui/react';
import Post from './Post';
import Navbar from './NavBar';;  // Import the Navbar component

const Blog = () => {
  const posts = [
    { title: 'Post 1', content: 'This is the content of post 1.' },
    { title: 'Post 2', content: 'This is the content of post 2.' },
    { title: 'Post 3', content: 'This is the content of post 2.' },
    { title: 'Post 4', content: 'This is the content of post 2.' },
    { title: 'Post 5', content: 'This is the content of post 2.' },
    { title: 'Post 6', content: 'This is the content of post 2.' },
    { title: 'Post 7', content: 'This is the content of post 2.' },
    { title: 'Post 8', content: 'This is the content of post 2.' },
    { title: 'Post 9', content: 'This is the content of post 2.' },
    { title: 'Post 10', content: 'This is the content of post 2.' },
    { title: 'Post 11', content: 'This is the content of post 2.' },
    // Add more posts as needed
  ];

  return (
    <div>
      <Navbar />  {/* Use the Navbar component here */}
      <Card maxW="container.xl" mt={0} bgColor={'gray.800'} overflow="hidden">
      <Box width="100vw" overflow="hidden">
      <Image src="/blogheader.jpg" alt="Image Alt Text" width="100%" height="auto" />
    </Box>
        {posts.map((post, index) => (
          <Post key={index} title={post.title} content={post.content} />
        ))}
      </Card>
    </div>
  );
};

export default Blog;
