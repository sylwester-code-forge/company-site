import { Layout } from "../../components/Layout";
import { Link } from "react-router-dom";
import { servicesData } from "./servicesData";

export const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              We offer comprehensive IT solutions to help your business navigate the digital landscape and achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12">
            {servicesData.map((service, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 border-b border-gray-200 dark:border-slate-700 pb-12 last:border-0 last:pb-0">
                <div className="md:w-1/3 flex flex-col items-center md:items-start">
                  <div className="text-blue-500 mb-4 p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                    {service.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white text-center md:text-left">{service.title}</h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-6 text-center md:text-left">{service.description}</p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
                  >
                    Learn more
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
                <div className="md:w-2/3">
                  <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8">
                    <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Key Features</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
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
          <h2 className="text-3xl font-bold mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help you find the right solutions for your business needs.
          </p>
          <Link to="/contact" className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            Contact Us
          </Link>
        </div>
      </section>
    </Layout>
  );
}; 