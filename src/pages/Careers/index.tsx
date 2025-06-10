import { Layout } from "../../components/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "engineering",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-time",
      description: "We're looking for an experienced Full Stack Developer to join our team, working on client projects and internal systems. The ideal candidate has strong experience with React, Node.js, and cloud technologies.",
      requirements: [
        "5+ years of experience in web development",
        "Strong proficiency in JavaScript/TypeScript, React, and Node.js",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Understanding of CI/CD pipelines and DevOps practices",
        "Excellent problem-solving skills and attention to detail"
      ]
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "design",
      location: "Remote (US-based)",
      type: "Full-time",
      description: "Join our design team to create exceptional user experiences for web and mobile applications. You'll work closely with clients and developers to deliver intuitive, accessible, and visually appealing designs.",
      requirements: [
        "3+ years of experience in UX/UI design for digital products",
        "Proficiency in design tools such as Figma, Sketch, or Adobe XD",
        "Portfolio demonstrating strong visual design skills",
        "Understanding of design systems and component libraries",
        "Experience conducting user research and usability testing"
      ]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "engineering",
      location: "San Francisco, CA (On-site)",
      type: "Full-time",
      description: "Help us build and maintain our cloud infrastructure and deployment pipelines. You'll be responsible for ensuring system reliability, security, and performance across our client projects.",
      requirements: [
        "3+ years of experience in DevOps or SRE roles",
        "Experience with infrastructure as code (Terraform, CloudFormation)",
        "Strong knowledge of containerization (Docker, Kubernetes)",
        "Experience with CI/CD tools (Jenkins, GitHub Actions, etc.)",
        "Understanding of security best practices in cloud environments"
      ]
    },
    {
      id: 4,
      title: "Project Manager",
      department: "management",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-time",
      description: "Lead client projects from inception to delivery, ensuring they're completed on time, within scope, and to the highest quality standards. You'll coordinate between clients, designers, and developers.",
      requirements: [
        "4+ years of experience managing technology projects",
        "Strong communication and client management skills",
        "Experience with Agile methodologies (Scrum, Kanban)",
        "Ability to manage multiple projects simultaneously",
        "Technical background or understanding of software development"
      ]
    },
    {
      id: 5,
      title: "Cloud Solutions Architect",
      department: "engineering",
      location: "Remote (US-based)",
      type: "Full-time",
      description: "Design and implement cloud-based solutions for our clients, focusing on scalability, reliability, and cost-effectiveness. You'll work with clients to understand their needs and translate them into technical solutions.",
      requirements: [
        "5+ years of experience in cloud architecture",
        "AWS, Azure, or GCP certification(s)",
        "Experience designing distributed systems and microservices",
        "Strong understanding of networking, security, and infrastructure",
        "Excellent communication skills for explaining technical concepts"
      ]
    },
    {
      id: 6,
      title: "Marketing Specialist",
      department: "marketing",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-time",
      description: "Help us grow our brand presence and generate leads through content marketing, social media, and digital campaigns. You'll work closely with the sales team to develop targeted marketing strategies.",
      requirements: [
        "3+ years of experience in B2B marketing, preferably in tech",
        "Experience with content creation and social media management",
        "Familiarity with SEO, SEM, and analytics tools",
        "Strong writing and communication skills",
        "Ability to translate technical concepts into compelling content"
      ]
    },
  ];

  const departments = [
    { id: "all", name: "All Departments" },
    { id: "engineering", name: "Engineering" },
    { id: "design", name: "Design" },
    { id: "management", name: "Management" },
    { id: "marketing", name: "Marketing" },
  ];

  const filteredJobs = selectedDepartment === "all" 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const toggleJobExpansion = (jobId: number) => {
    if (expandedJob === jobId) {
      setExpandedJob(null);
    } else {
      setExpandedJob(jobId);
    }
  };

  // Animation variants
  const accordionVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
    },
    visible: (i: number) => ({ 
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      }
    }),
    hover: {
      scale: 1.01,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.99,
      transition: { duration: 0.1 }
    }
  };

  const contentVariants = {
    hidden: { 
      height: 0,
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      }
    },
    visible: { 
      height: "auto",
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      }
    }
  };

  const contentItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.2
      }
    },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const departmentButtonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.2
      }
    }),
    hover: { y: -2 }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-blue-100 mb-8">
              Build your career at Code Forge and work on innovative technology solutions that make a difference.
            </p>
            <motion.a 
              href="#open-positions" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Why Join Code Forge?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              We're building a team of passionate professionals who want to grow their careers while working on challenging and meaningful projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 text-center shadow-lg">
              <div className="text-blue-500 w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">Challenging Work</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Work on complex projects for innovative clients across various industries, using the latest technologies and methodologies.
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 text-center shadow-lg">
              <div className="text-blue-500 w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">Growth Opportunities</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Continuous learning through training, conferences, certifications, and mentorship from industry experts.
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 text-center shadow-lg">
              <div className="text-blue-500 w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-full">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">Collaborative Culture</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Work in a supportive environment where teamwork, innovation, and work-life balance are valued and encouraged.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Our Benefits</h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                We offer a comprehensive benefits package designed to support your health, well-being, and professional development.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="text-blue-500 mr-4 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Competitive Compensation</h3>
                    <p className="text-slate-600 dark:text-slate-300">Salary packages tailored to your experience and expertise, with regular reviews and performance bonuses.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-500 mr-4 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Health & Wellness</h3>
                    <p className="text-slate-600 dark:text-slate-300">Comprehensive health, dental, and vision insurance, plus wellness programs and gym membership subsidies.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-500 mr-4 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Flexible Work</h3>
                    <p className="text-slate-600 dark:text-slate-300">Hybrid work options, flexible hours, and remote work opportunities to support your work-life balance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-blue-500 mr-4 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Professional Development</h3>
                    <p className="text-slate-600 dark:text-slate-300">Learning stipends, conference attendance, and certification support to help you grow your skills and career.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
                <img 
                  src="/team-working.jpg" 
                  alt="Team working together" 
                  className="relative rounded-xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Open Positions</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Explore our current job openings and find your next career opportunity with us.
            </p>
          </motion.div>
          
          {/* Department Filters */}
          <motion.div 
            className="mb-12 flex flex-wrap justify-center gap-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {departments.map((department, index) => (
              <motion.button
                key={department.id}
                custom={index}
                variants={departmentButtonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedDepartment(department.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedDepartment === department.id
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
              >
                {department.name}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Job Listings */}
          <motion.div 
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <AnimatePresence>
              {filteredJobs.map((job, index) => (
                <motion.div 
                  key={job.id}
                  layout
                  custom={index}
                  variants={accordionVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden"
                >
                  <motion.div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleJobExpansion(job.id)}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 mb-4">
                          <motion.span 
                            className="text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 py-1 px-2 rounded-full"
                            whileHover={{ scale: 1.1 }}
                          >
                            {job.department.charAt(0).toUpperCase() + job.department.slice(1)}
                          </motion.span>
                          <motion.span 
                            className="text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 py-1 px-2 rounded-full"
                            whileHover={{ scale: 1.1 }}
                          >
                            {job.location}
                          </motion.span>
                          <motion.span 
                            className="text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 py-1 px-2 rounded-full"
                            whileHover={{ scale: 1.1 }}
                          >
                            {job.type}
                          </motion.span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <motion.button 
                          className="text-blue-600 dark:text-blue-400 font-medium flex items-center"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleJobExpansion(job.id);
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {expandedJob === job.id ? 'Hide Details' : 'View Details'}
                          <motion.svg 
                            className="ml-2 w-5 h-5" 
                            animate={{ rotate: expandedJob === job.id ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                  
                  <AnimatePresence>
                    {expandedJob === job.id && (
                      <motion.div 
                        className="p-6 pt-0 border-t border-slate-200 dark:border-slate-700"
                        key={`content-${job.id}`}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={contentVariants}
                      >
                        <motion.p 
                          className="text-slate-600 dark:text-slate-300 mb-6"
                          variants={contentItemVariants}
                        >
                          {job.description}
                        </motion.p>
                        
                        <motion.h4 
                          className="text-lg font-semibold text-slate-800 dark:text-white mb-3"
                          variants={contentItemVariants}
                        >
                          Requirements
                        </motion.h4>
                        <motion.ul 
                          className="list-disc pl-5 mb-6 text-slate-600 dark:text-slate-300 space-y-1"
                          variants={contentItemVariants}
                        >
                          {job.requirements.map((req, index) => (
                            <motion.li 
                              key={index}
                              variants={contentItemVariants}
                              custom={index}
                              initial="hidden"
                              animate="visible"
                              transition={{ delay: 0.1 * index }}
                            >
                              {req}
                            </motion.li>
                          ))}
                        </motion.ul>
                        
                        <motion.div 
                          className="flex justify-end"
                          variants={contentItemVariants}
                        >
                          <motion.div
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                          >
                            <Link 
                              to={`/careers/apply/${job.id}`}
                              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
                            >
                              Apply Now
                            </Link>
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      
      {/* Application Process */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Our Application Process</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Here's what you can expect when you apply for a position at Code Forge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">Application Review</h3>
              <p className="text-slate-600 dark:text-slate-300">We review your resume and application to assess your qualifications and experience.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">Initial Interview</h3>
              <p className="text-slate-600 dark:text-slate-300">A conversation with our recruiting team to discuss your background and interest in the role.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">Technical Assessment</h3>
              <p className="text-slate-600 dark:text-slate-300">Depending on the role, you may complete a skills assessment or technical interview.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-lg font-semibold mb-2 text-slate-800 dark:text-white">Final Interview</h3>
              <p className="text-slate-600 dark:text-slate-300">Meet with the team you'll be working with to ensure it's a great fit for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't See the Right Fit?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link to="/contact" className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
}; 