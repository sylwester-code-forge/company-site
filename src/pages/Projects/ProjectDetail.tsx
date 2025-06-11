import { useParams, Link } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { projectsData } from "./projectsData";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState<any[]>([]);

  useEffect(() => {
    // Find the project with the matching slug
    const foundProject = projectsData.find(p => p.slug === projectId);
    setProject(foundProject);

    // Find related projects
    if (foundProject) {
      const related = projectsData
        .filter(p => p.category === foundProject.category && p.id !== foundProject.id)
        .slice(0, 3);
      setRelatedProjects(related);
    }

    setLoading(false);

    // Scroll to top when project changes
    window.scrollTo(0, 0);
  }, [projectId]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
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

  if (!project) {
    return (
      <Layout>
        <motion.div 
          className="container mx-auto px-6 py-20 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-red-500 mb-6">Project Not Found</h1>
          <p className="text-lg text-slate-600 mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Back to Projects
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
        className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="flex items-center gap-4 mb-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-sm font-medium bg-blue-500/30 text-blue-200 py-1 px-3 rounded-full">
                {project.category.split("-").map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
              </span>
              <span className="text-sm text-blue-200">
                Client: {project.client}
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {project.title}
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {project.description}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {project.technologies.slice(0, 5).map((tech: string, index: number) => (
                <motion.span 
                  key={index}
                  className="bg-slate-700/50 text-blue-200 text-sm py-1 px-3 rounded-full"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Project Image */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="rounded-xl overflow-hidden shadow-lg">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                />
              </div>
            </motion.div>

            {/* Project Overview */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Project Overview</h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p>{project.longDescription}</p>
              </div>
            </motion.div>

            {/* Challenge and Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">The Challenge</h2>
                <p className="text-slate-600 dark:text-slate-300">{project.challenge}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Our Solution</h2>
                <p className="text-slate-600 dark:text-slate-300">{project.solution}</p>
              </motion.div>
            </div>

            {/* Technologies Used */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech: string, index: number) => (
                  <span 
                    key={index}
                    className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 py-2 px-4 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div 
              className="mb-16"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature: string, index: number) => (
                  <motion.div 
                    key={index} 
                    className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl shadow-sm"
                    variants={featureVariants}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex items-start">
                      <div className="text-blue-500 mr-4 mt-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-slate-700 dark:text-slate-300">{feature}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Results */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <h2 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white">Project Results</h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-blue-900/30 p-8 rounded-2xl">
                <ul className="space-y-4">
                  {project.results.map((result: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="text-green-500 mr-4 mt-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-slate-700 dark:text-white">{result}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Testimonial */}
            {project.testimonial && (
              <motion.div 
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <h2 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white">Client Testimonial</h2>
                <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700">
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-1">
                      <svg className="text-blue-500 w-10 h-10 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                      <p className="text-slate-600 dark:text-slate-300 text-lg italic mb-4">{project.testimonial.quote}</p>
                      <div>
                        <h4 className="font-bold text-slate-800 dark:text-white">{project.testimonial.author}</h4>
                        <p className="text-slate-500 dark:text-slate-400">{project.testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="bg-blue-600 text-white p-8 rounded-2xl text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="mb-6">Let's discuss how we can help bring your ideas to life.</p>
              <Link 
                to="/contact" 
                className="inline-block bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-slate-50 dark:bg-slate-800/50">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-10 text-center text-slate-800 dark:text-white">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 * index }}
                  className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2 duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={relatedProject.image} 
                      alt={relatedProject.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white">{relatedProject.title}</h3>
                      <span className="text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-full">
                        {relatedProject.category.split("-").map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                      </span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">{relatedProject.description}</p>
                    <Link 
                      to={`/projects/${relatedProject.slug}`}
                      className="text-blue-500 hover:text-blue-600 font-medium text-sm inline-flex items-center"
                    >
                      View Details
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}; 