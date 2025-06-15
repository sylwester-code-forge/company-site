import { Layout } from "../../components/Layout";
import { Link } from "react-router-dom";
import Teamwork from "../../assets/images/teamwork.jpg";
import Team1 from "../../assets/images/1.jpg";
import Team2 from "../../assets/images/2.png";
import Team3 from "../../assets/images/3.png";
import Team5 from "../../assets/images/5.jpg";

export const About = () => {
  const team = [
    {
      name: "Alex Johnson",
      position: "CEO & Co-Founder",
      bio: "With over 15 years in the tech industry, Alex founded Code Forge with a vision to create innovative solutions that transform businesses.",
      image: Team1,
    },
    {
      name: "Vijaiaaravindh Veerapandian",
      position: "CPO & Co-Founder",
      bio: "Vijaiaaravindh brings a wealth of operational expertise to Code Forge, ensuring smooth project delivery and client satisfaction through strategic planning and efficient team coordination.",
      image: Team5,
    },
    {
      name: "Lucas Martin",
      position: "CTO",
      bio: "Lucas leads our technical strategy and ensures we're always at the forefront of emerging technologies and best practices.",
      image: Team2,
    },
    {
      name: "Kenisha Robinson",
      position: "Lead Developer",
      bio: "Kenisha oversees our development team, bringing extensive experience in building scalable and robust applications.",
      image: Team3,
    },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to client communication.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and maintain open communication with our clients throughout the development process.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Integrity",
      description: "We conduct our business with the highest ethical standards, honesty, and transparency.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-blue-100 mb-8">
              We're a team of passionate technology experts dedicated to helping businesses succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Our Story</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  Founded in 2010, Code Forge began with a simple mission: to help businesses leverage technology to reach their full potential. What started as a small team of passionate developers has grown into a comprehensive IT consulting firm with expertise across multiple domains.
                </p>
                <p>
                  Over the years, we've had the privilege of working with clients ranging from startups to Fortune 500 companies, delivering solutions that drive growth, efficiency, and innovation. Our team has expanded to include specialists in web and mobile development, cloud architecture, cybersecurity, data analytics, and more.
                </p>
                <p>
                  Today, Code Forge stands as a trusted technology partner for businesses across various industries. We continue to evolve and adapt to the ever-changing technology landscape, ensuring our clients always have access to the most effective solutions for their unique challenges.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
                <img 
                  src={Teamwork} 
                  alt="Code Forge Team" 
                  className="relative rounded-xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Our Values</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              These core principles guide everything we do and how we work with our clients and each other.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-slate-700 rounded-xl p-8 shadow-lg">
                <div className="text-blue-500 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-white">Our Leadership Team</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Meet the talented individuals who drive our company's vision and success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-slate-800 dark:text-white">{member.name}</h3>
                  <p className="text-blue-500 font-medium mb-4">{member.position}</p>
                  <p className="text-slate-600 dark:text-slate-300">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals who share our passion for technology and innovation.
          </p>
          <Link to="/careers" className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors duration-300">
            View Careers
          </Link>
        </div>
      </section>
    </Layout>
  );
}; 