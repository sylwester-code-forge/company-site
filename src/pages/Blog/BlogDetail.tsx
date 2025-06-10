import { useParams, Link } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { useEffect, useState } from "react";
import { blogData } from "./blogData";
import { motion } from "framer-motion";

export const BlogDetail = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);

  useEffect(() => {
    // Find the blog post with the matching slug
    const foundPost = blogData.find(p => p.slug === blogId);
    setPost(foundPost);
    
    // Find related posts in the same category
    if (foundPost) {
      const related = blogData
        .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
        .slice(0, 3);
      setRelatedPosts(related);
    }
    
    setLoading(false);
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [blogId]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-20 flex justify-center">
          <motion.div 
            className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          ></motion.div>
        </div>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <motion.div 
          className="container mx-auto px-6 py-20 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-red-500 mb-6">Blog Post Not Found</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            The blog post you're looking for doesn't exist or has been removed.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/blog" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Back to Blog
            </Link>
          </motion.div>
        </motion.div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-sm font-medium bg-blue-500/30 text-blue-200 py-1 px-3 rounded-full">
                {post.category.split("-").map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </span>
              <span className="text-sm text-blue-200">{post.date}</span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {post.title}
            </motion.h1>
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-10 h-10 bg-blue-600 rounded-full mr-4 flex items-center justify-center text-sm font-medium">
                {post.author.split(" ").map((n: string) => n[0]).join("")}
              </div>
              <div>
                <span className="block font-medium">{post.author}</span>
                <span className="block text-sm text-blue-200">{post.authorRole}</span>
              </div>
              <span className="ml-auto text-sm text-blue-200">{post.readTime}</span>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Image */}
      <motion.section 
        className="py-12 bg-white dark:bg-slate-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="rounded-xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Blog Content */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <motion.div 
                className="lg:w-3/4"
                variants={fadeInFromLeft}
                initial="hidden"
                animate="visible"
              >
                <motion.article 
                  className="prose prose-lg max-w-none dark:prose-invert mb-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                </motion.article>
                
                {/* Author Bio */}
                <motion.div 
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-blue-600 rounded-full mr-6 flex items-center justify-center text-xl font-medium text-white">
                      {post.author.split(" ").map((n: string) => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{post.author}</h3>
                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">{post.authorRole}</p>
                      <p className="text-slate-600 dark:text-slate-300">
                        {post.author} is a technology expert with over 10 years of experience in software development and IT consulting. 
                        They are passionate about helping businesses leverage technology to achieve their goals.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Sidebar */}
              <motion.div 
                className="lg:w-1/4"
                variants={fadeInFromRight}
                initial="hidden"
                animate="visible"
              >
                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <motion.div 
                    className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 mb-8"
                    whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                  >
                    <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Related Posts</h3>
                    <div className="space-y-4">
                      {relatedPosts.map(related => (
                        <motion.div 
                          key={related.id} 
                          className="flex items-start"
                          whileHover={{ x: 3 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <img
                            src={related.image}
                            alt={related.title}
                            className="w-16 h-16 object-cover rounded-md mr-3"
                          />
                          <div>
                            <Link 
                              to={`/blog/${related.slug}`}
                              className="text-sm font-medium text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                              {related.title}
                            </Link>
                            <div className="flex items-center mt-1">
                              <span className="text-xs text-slate-500 dark:text-slate-400">{related.date}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
                
                {/* Categories */}
                <motion.div 
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 mb-8"
                  whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Categories</h3>
                  <ul className="space-y-2">
                    {["web-development", "cloud", "artificial-intelligence", "design"].map(category => (
                      <motion.li 
                        key={category}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <Link 
                          to={`/blog?category=${category}`}
                          className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                {/* Newsletter */}
                <motion.div 
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6"
                  whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                >
                  <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Subscribe to Our Newsletter</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                    Get the latest articles, updates, and news delivered straight to your inbox.
                  </p>
                  <form className="space-y-3">
                    <motion.input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-700 dark:text-white"
                      whileFocus={{ scale: 1.02 }}
                    />
                    <motion.button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Subscribe
                    </motion.button>
                  </form>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* More Articles Section */}
      <motion.section 
        className="py-16 bg-slate-50 dark:bg-slate-800"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold mb-10 text-center text-slate-800 dark:text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            More Articles
          </motion.h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            {blogData.filter(p => p.id !== post.id).slice(0, 3).map(otherPost => (
              <motion.div 
                key={otherPost.id} 
                className="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg"
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <Link to={`/blog/${otherPost.slug}`} className="block">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={otherPost.image}
                      alt={otherPost.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-full">
                      {otherPost.category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{otherPost.date}</span>
                  </div>
                  <Link to={`/blog/${otherPost.slug}`} className="block">
                    <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {otherPost.title}
                    </h3>
                  </Link>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {otherPost.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${otherPost.slug}`}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium inline-flex items-center"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </Layout>
  );
}; 