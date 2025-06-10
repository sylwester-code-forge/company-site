import { Layout } from "../../components/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "./projectsData";

export const Projects = () => {
  const [filter, setFilter] = useState("all");
  
  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-blue-100 mb-8">
              Explore our portfolio of successful projects across various industries and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Project Filters */}
      <section className="py-8 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === "all" 
                  ? "bg-blue-600 text-white" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter("web-development")}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === "web-development" 
                  ? "bg-blue-600 text-white" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              Web Development
            </button>
            <button 
              onClick={() => setFilter("mobile-apps")}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === "mobile-apps" 
                  ? "bg-blue-600 text-white" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              Mobile Apps
            </button>
            <button 
              onClick={() => setFilter("cloud-solutions")}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === "cloud-solutions" 
                  ? "bg-blue-600 text-white" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              Cloud Solutions
            </button>
            <button 
              onClick={() => setFilter("data-analytics")}
              className={`px-6 py-2 rounded-full transition-colors ${
                filter === "data-analytics" 
                  ? "bg-blue-600 text-white" 
                  : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              Data Analytics
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2 duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">{project.title}</h3>
                    <span className="text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-full">
                      {project.category.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 py-1 px-2 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 py-1 px-2 rounded">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500 dark:text-slate-400">Client: {project.client}</span>
                    <Link 
                      to={`/projects/${project.slug}`}
                      className="text-blue-500 hover:text-blue-600 font-medium text-sm inline-flex items-center"
                    >
                      View Details
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how we can help bring your ideas to life with innovative technology solutions.
          </p>
          <Link to="/contact" className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
};