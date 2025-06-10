import { Layout } from "../../components/Layout";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { blogData } from "./blogData";
import { motion } from "framer-motion";

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const location = useLocation();

  useEffect(() => {
    // Check if there's a category parameter in the URL
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [location]);

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "web-development", name: "Web Development" },
    { id: "cloud", name: "Cloud Computing" },
    { id: "artificial-intelligence", name: "Artificial Intelligence" },
    { id: "design", name: "Design" },
  ];

  const filteredPosts = selectedCategory === "all" 
    ? blogData 
    : blogData.filter(post => post.category === selectedCategory);

  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryItemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const sidebarVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.3
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-xl text-blue-100 mb-8">
              Insights, tutorials, and news from our team of technology experts.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Blog Content */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Category Filters */}
              <motion.div 
                className="mb-12 flex flex-wrap gap-3"
                variants={categoryVariants}
                initial="hidden"
                animate="visible"
              >
                {categories.map(category => (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.id
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                    variants={categoryItemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </motion.div>

              {/* Blog Posts Grid */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
                variants={cardContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredPosts.map(post => (
                  <motion.div 
                    key={post.id} 
                    className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg"
                    variants={cardVariants}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Link to={`/blog/${post.slug}`} className="block">
                      <div className="h-56 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-full">
                          {post.category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">{post.date}</span>
                      </div>
                      <Link to={`/blog/${post.slug}`} className="block">
                        <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-slate-600 dark:text-slate-300 mb-5">
                        {post.excerpt}
                      </p>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-slate-300 dark:bg-slate-600 rounded-full mr-3 flex items-center justify-center text-sm font-medium text-slate-700 dark:text-slate-300">
                            {post.author.split(" ").map(n => n[0]).join("")}
                          </div>
                          <div>
                            <span className="block text-sm font-medium text-slate-800 dark:text-white">{post.author}</span>
                            <span className="block text-xs text-slate-500 dark:text-slate-400">{post.authorRole}</span>
                          </div>
                        </div>
                        <span className="text-xs text-slate-500 dark:text-slate-400">{post.readTime}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div 
              className="lg:w-1/4"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Popular Posts */}
              <motion.div 
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 mb-8"
                whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Popular Posts</h3>
                <div className="space-y-4">
                  {blogData.slice(0, 3).map(post => (
                    <motion.div 
                      key={post.id} 
                      className="flex items-start"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-md mr-3"
                      />
                      <div>
                        <Link 
                          to={`/blog/${post.slug}`}
                          className="text-sm font-medium text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          {post.title}
                        </Link>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-slate-500 dark:text-slate-400">{post.date}</span>
                          <span className="text-xs text-slate-400 dark:text-slate-500 mx-2">•</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400">{post.readTime}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Categories */}
              <motion.div 
                className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 mb-8"
                whileHover={{ boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              >
                <h3 className="text-lg font-bold mb-4 text-slate-800 dark:text-white">Categories</h3>
                <ul className="space-y-2">
                  {categories.filter(cat => cat.id !== "all").map(category => (
                    <motion.li 
                      key={category.id}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <button 
                        onClick={() => setSelectedCategory(category.id)}
                        className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {category.name}
                      </button>
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
      </section>

      {/* CTA Section */}
      <motion.section 
        className="py-16 bg-blue-600 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Informed with Our Newsletter</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Subscribe to get the latest insights, tutorials, and news delivered directly to your inbox.
          </p>
          <motion.button 
            className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe Now
          </motion.button>
        </div>
      </motion.section>
    </Layout>
  );
}; 