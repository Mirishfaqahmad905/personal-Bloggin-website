import React from 'react';
import '../CompCss/Blog.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();

  const posts = [
    {
      id: 1,
      title: 'Exploring the World of Technology',
      description: 'Dive into the latest advancements in technology and how they are shaping our future.',
      image: 'https://media.istockphoto.com/id/1441058786/photo/a-young-woman-stands-next-to-a-table-with-fresh-vegetables-and-fruits-and-makes-her-meal-plan.webp?b=1&s=612x612&w=0&k=20&c=vaHaR9aLda3tY1ZQJbXDbpqeewQ8gpNenPhk1RggBk8=',
      category: 'Technology',
    },
    {
      id: 2,
      title: 'The Art of Travel Photography',
      description: 'Learn how to capture stunning travel photos that tell a story.',
      image: 'https://media.istockphoto.com/id/1903747144/photo/group-of-diversity-school-children-learning-acrylic-art-together-in-art-class.webp?s=1024x1024&w=is&k=20&c=izShwQECvRmSBtnXCAUNvBP_eaNT8Repoj_S3UY8IPs=',
      category: 'Travel',
    },
    {
      id: 3,
      title: 'Healthy Eating Habits for Busy Lives',
      description: 'Discover simple tips for maintaining a healthy diet even with a hectic schedule.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRoeSUyMGxpZmVzdHlsZXxlbnwwfHwwfHx8MA%3D%3D',
      category: 'Food',
    },
    {
      id: 4,
      title: 'Mastering the Art of Personal Finance',
      description: 'A beginner’s guide to budgeting, saving, and smart investing.',
      image: 'https://media.licdn.com/dms/image/D4D12AQET0iXozECA3Q/article-cover_image-shrink_720_1280/0/1681821470333?e=2147483647&v=beta&t=l1GfrlmLVe1AA8rutAMNinsH3YxMiScD-9OG5NooM0w',
      category: 'Finance',
    },
    {
      id: 5,
      title: 'The Future of Artificial Intelligence',
      description: 'An insight into how AI is transforming industries and daily life.',
      image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/Future_Of_Artificial_Intelligence.jpg',
      category: 'AI & Machine Learning',
    },
    {
      id: 6,
      title: 'Fitness Routines for a Healthy Lifestyle',
      description: 'Effective workout routines and fitness tips for beginners.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zml0bmVzc3xlbnwwfHwwfHx8MA%3D%3D',
      category: 'Health & Fitness',
    },
    {
      id: 7,
      title: 'Building a Strong Personal Brand Online',
      description: 'Step-by-step guide to improving your digital presence.',
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHww',
      category: 'Marketing & Branding',
    },
  ];

  const ReadMore = (id) => {
    const routeMap = {
      1: '/category/technology',
      2: '/category/travel',
      3: '/category/food',
      4: '/finance',
      5: '/category/ai-machine-learning',
      6: '/category/Home&Living',
      7: '/category/brand',
    };

    if (routeMap[id]) {
      navigate(routeMap[id]);
    } else {
      navigate(`/post/${id}`);
    }
  };

  return (
    <div className="unique-blog-container">
      {/* Header Section */}
      <header className="unique-blog-header">
        <h1 style={{ color: 'black' }}>Latest Blog Posts</h1>
        <p style={{ color: 'black' }}>Explore inspiring stories and insights on various topics.</p>
      </header>

      {/* Blog Posts Grid */}
      <div className="unique-blog-posts">
        {posts.map((post) => (
          <div className="unique-blog-post" key={post.id}>
            <div className="unique-post-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="unique-post-content">
              <span className="unique-post-category">{post.category}</span>
              <h2 style={{ color: 'black' }}>{post.title}</h2>
              <p style={{ color: 'black' }}>{post.description}</p>
              <button onClick={() => ReadMore(post.id)} className="unique-read-more">
                Read More &#8594;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
