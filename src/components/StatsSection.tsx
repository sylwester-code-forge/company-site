export const StatsSection = () => {
  return (
    <section className="bg-slate-50 dark:bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Our results speak for themselves. We've helped businesses of all sizes transform their digital presence and achieve their goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 text-center shadow-lg">
            <div className="text-blue-500 text-4xl font-bold mb-2">300+</div>
            <div className="text-slate-600 dark:text-slate-300 font-medium">Completed Projects</div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 text-center shadow-lg">
            <div className="text-blue-500 text-4xl font-bold mb-2">98%</div>
            <div className="text-slate-600 dark:text-slate-300 font-medium">Client Satisfaction</div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 text-center shadow-lg">
            <div className="text-blue-500 text-4xl font-bold mb-2">50+</div>
            <div className="text-slate-600 dark:text-slate-300 font-medium">Expert Developers</div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 rounded-xl p-8 text-center shadow-lg">
            <div className="text-blue-500 text-4xl font-bold mb-2">12+</div>
            <div className="text-slate-600 dark:text-slate-300 font-medium">Years of Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}; 