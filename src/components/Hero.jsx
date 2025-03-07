import React from 'react';

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-2">
            <span className="text-black">Optimize </span>
            <span className="text-gray-500">Your</span>
          </h1>
          <h1 className="text-5xl font-bold mb-2 text-gray-500">Performance For</h1>
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-black">JEE, NEET, </span>
            <span className="text-gray-500">and </span>
            <span className="text-black">Boards</span>
          </h1>
        </div>
        
        <p className="text-gray-600 mb-8 max-w-lg">
          Your personal AI-Tutor for all academic needs. Whether its school exam, 
          boards or competitive exams we plan, manage, and help you clear your 
          doubts instantly. For students of class 10th, 11th and 12th (CBSE) and 
          preparing for all medical or engineering entrance exams
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-black text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 transition">
            Apply for admission
          </button>
          <button className="flex items-center text-black font-medium hover:text-gray-700 transition">
            Sign In →
          </button>
        </div>
      </div>
      
      {/* Right Content - Img */}
      <img className="hidden lg:block" src="/HeroSectionImg.png" alt="" />
    </div>
  );
};

export default Hero;