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
                {project.category}
              </span>
              <span className="text-sm text-blue-200">
                {project.completionDate}
              </span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {project.name}
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
              {project.tags.map((tag: string, index: number) => (
                <motion.span 
                  key={index}
                  className="bg-slate-700/50 text-blue-200 text-sm py-1 px-3 rounded-full"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                >
                  {tag}
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
            {/* Project Gallery */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  className="rounded-xl overflow-hidden shadow-lg"
                  variants={imageVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
                {project.additionalImages && project.additionalImages.map((img: string, index: number) => (
                  <motion.div 
                    key={index} 
                    className="rounded-xl overflow-hidden shadow-lg"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 * (index + 1) }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  >
                    <img 
                      src={img} 
                      alt={`${project.name} ${index + 1}`} 
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                ))}
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
                <div dangerouslySetInnerHTML={{ __html: project.overview }}></div>
              </div>
            </motion.div>

            {/* Project Features */}
            <motion.div 
              className="mb-16"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature: any, index: number) => (
                  <motion.div 
                    key={index} 
                    className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl"
                    variants={featureVariants}
                    whileHover={{ 
                      y: -5, 
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                    }}
                  >
                    <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{feature.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Technical Details */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Technical Details</h2>
              <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">Technologies Used</h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech: string, index: number) => (
                    <motion.span 
                      key={index} 
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium py-1 px-3 rounded-full text-sm"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + (index * 0.05) }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                {project.technical && (
                  <div className="prose prose-lg max-w-none dark:prose-invert">
                    <div dangerouslySetInnerHTML={{ __html: project.technical }}></div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Client Testimonial */}
            {project.testimonial && (
              <motion.div 
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-blue-600 text-white p-8 rounded-xl relative">
                  <svg className="absolute top-4 left-4 w-12 h-12 text-blue-400/30" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8c-2.209 0-4 1.791-4 4v10c0 2.209 1.791 4 4 4h12c2.209 0 4-1.791 4-4v-10c0-2.209-1.791-4-4-4h-12zM2 4v10c0 1.105 0.895 2 2 2s2-0.895 2-2v-6c0-1.105 0.895-2 2-2h16c1.105 0 2 0.895 2 2v6c0 1.105 0.895 2 2 2s2-0.895 2-2v-10c0-1.105-0.895-2-2-2h-24c-1.105 0-2 0.895-2 2z"></path>
                  </svg>
                  <div className="pl-8">
                    <p className="text-xl mb-6 italic text-blue-100">{project.testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white rounded-full mr-4 flex items-center justify-center text-blue-600 font-bold">
                        {project.testimonial.author.split(" ").map((n: string) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-bold">{project.testimonial.author}</p>
                        <p className="text-sm text-blue-200">{project.testimonial.role}, {project.testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Project Results/Outcomes */}
            {project.results && (
              <motion.div 
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Results & Impact</h2>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <div dangerouslySetInnerHTML={{ __html: project.results }}></div>
                </div>
              </motion.div>
            )}

            {/* Call to Action */}
            <motion.div 
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white">Interested in a similar project?</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Contact us today to discuss how we can help bring your vision to life.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <motion.section 
          className="py-16 bg-slate-50 dark:bg-slate-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10 text-center text-slate-800 dark:text-white">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {relatedProjects.map(related => (
                <motion.div 
                  key={related.id} 
                  className="bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <Link to={`/projects/${related.slug}`} className="block">
                    <div className="h-56 overflow-hidden">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-full">
                        {related.category}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{related.completionDate}</span>
                    </div>
                    <Link to={`/projects/${related.slug}`} className="block">
                      <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {related.name}
                      </h3>
                    </Link>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {related.shortDescription || related.description.substring(0, 120) + '...'}
                    </p>
                    <Link 
                      to={`/projects/${related.slug}`}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium inline-flex items-center"
                    >
                      View Details
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </Layout>
  );
}; 