import React from 'react';
import Feature1 from './features/Feature1';
import Feature2 from './features/Feature2';
import Feature3 from './features/Feature3';

const FeatureSection = () => {
  return (
    <div className="container mx-auto px-4 pb-16">
      {/* Practice Session Section */}
      <Feature1 />
      
      {/* Personalized Assessment Section */}
      <Feature2 />
      
      {/* Managing Students Section */}
      <Feature3 />
    </div>
  );
};

export default FeatureSection;