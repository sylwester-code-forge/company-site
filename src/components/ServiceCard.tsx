import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 h-full">
      <div className="text-blue-500 mb-4 w-14 h-14 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300 mb-6">{description}</p>
      <Link 
        to={link}
        className="inline-flex items-center text-blue-500 hover:text-blue-600 font-medium"
      >
        Learn more
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  );
}; 