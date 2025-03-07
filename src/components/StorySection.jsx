import React from 'react';

const StorySection = () => {
  return (
    <div className="container mx-auto px-4 py-16 ">
      <div className="bg-neutral-800 text-white rounded-xl p-8 md:p-12 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">How we come to this?</h2>
        
        <p className="text-gray-300 mb-8 leading-relaxed">
          We observed and researched for three years in a variety of student. 
          Where The best needs more attention to do better and the student 
          struggling needs more attention to improve their own abilities. All 
          students need personal attention. Based on the notion of "Personal 
          attention" we have built our algorithm and Ai tutor to cater each 
          children uniquely...
        </p>
        
        <a 
          href="#" 
          className="inline-flex items-center text-white hover:text-gray-200 border-b border-white hover:border-gray-200 pb-1 transition-colors"
        >
          Read the full story →
        </a>
      </div>
    </div>
  );
};

export default StorySection;