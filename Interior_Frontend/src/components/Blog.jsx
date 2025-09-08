import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "5 Tips to Transform Your Living Room",
    date: "June 10, 2024",
    author: "Jane Doe",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Discover simple yet effective ways to refresh your living space with color, texture, and layout. Make your living room the heart of your home.",
  },
  {
    id: 2,
    title: "Choosing the Perfect Lighting",
    date: "June 5, 2024",
    author: "John Smith",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Lighting can make or break a room. Learn how to select fixtures and bulbs that complement your interior style and create the right mood.",
  },
  {
    id: 3,
    title: "Modern Minimalist Bedroom Ideas",
    date: "May 28, 2024",
    author: "Emily Clark",
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80",
    excerpt:
      "Minimalism is all about simplicity and functionality. Explore our favorite minimalist bedroom designs for a peaceful retreat.",
  },
];

const Blog = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Interior Design Blog</h2>
      <div style={styles.grid}>
        {blogPosts.map((post) => (
          <article key={post.id} style={styles.card}>
            <img src={post.image} alt={post.title} style={styles.image} />
            <div style={styles.content}>
              <h3 style={styles.title}>{post.title}</h3>
              <p style={styles.meta}>
                {post.date} | By {post.author}
              </p>
              <p style={styles.excerpt}>{post.excerpt}</p>
              <a href="#" style={styles.link}>
                Read More &rarr;
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "40px 20px",
    background: "#f7f7f7",
    fontFamily: "Segoe UI, sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "32px",
    color: "#333",
    letterSpacing: "1px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "32px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  content: {
    padding: "24px",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "1.4rem",
    margin: "0 0 12px 0",
    color: "#2d2d2d",
  },
  meta: {
    fontSize: "0.95rem",
    color: "#888",
    marginBottom: "16px",
  },
  excerpt: {
    fontSize: "1rem",
    color: "#444",
    marginBottom: "20px",
  },
  link: {
    alignSelf: "flex-start",
    color: "#4e8cff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    transition: "color 0.2s",
  },
};

export default Blog;