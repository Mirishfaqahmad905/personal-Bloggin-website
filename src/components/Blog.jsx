import React from 'react';
import '../CompCss/Blog.css'; // Import the CSS file

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'Exploring the World of Technology' ,
      description:  'Dive into the latest advancements in technology and how they are shaping our future.',
      image: 'https://media.istockphoto.com/id/1441058786/photo/a-young-woman-stands-next-to-a-table-with-fresh-vegetables-and-fruits-and-makes-her-meal-plan.webp?b=1&s=612x612&w=0&k=20&c=vaHaR9aLda3tY1ZQJbXDbpqeewQ8gpNenPhk1RggBk8=',
      category: 'Technology',
    },
    {
      id: 2,
      title: 'The Art of Travel Photography',
      description:
        'Learn how to capture stunning travel photos that tell a story.',
      image: 'https://media.istockphoto.com/id/1903747144/photo/group-of-diversity-school-children-learning-acrylic-art-together-in-art-class.webp?s=1024x1024&w=is&k=20&c=izShwQECvRmSBtnXCAUNvBP_eaNT8Repoj_S3UY8IPs=',
      category: 'Travel',
    },
    {
      id: 3,
      title: 'Healthy Eating Habits for Busy Lives',
      description:
        'Discover simple tips for maintaining a healthy diet even with a hectic schedule.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRoeSUyMGxpZmVzdHlsZXxlbnwwfHwwfHx8MA%3D%3D',
      category: 'Food',
    },
  ];

  return (
    <div className="blog-container">
      {/* Header Section */}
      <header className="blog-header">
        <h1>Latest Blog Posts</h1>
        <p>Explore inspiring stories and insights on various topics.</p>
      </header>

      {/* Blog Posts Grid */}
      <div className="blog-posts">
        {posts.map((post) => (
          <div className="blog-post" key={post.id}>
            <div className="post-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="post-content">
              <span className="post-category">{post.category}</span>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <a href={`/post/${post.id}`} className="read-more">
                Read More &#8594;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;