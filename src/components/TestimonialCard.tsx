interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  avatar: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  position,
  company,
  testimonial,
  avatar,
}) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
      <div className="flex items-center mb-6">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-lg font-semibold text-slate-800 dark:text-white">{name}</h4>
          <p className="text-slate-500 dark:text-slate-400">{position}, {company}</p>
        </div>
      </div>
      
      <div className="mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 inline-block text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <p className="text-slate-600 dark:text-slate-300 italic mb-4">"{testimonial}"</p>
    </div>
  );
}; 