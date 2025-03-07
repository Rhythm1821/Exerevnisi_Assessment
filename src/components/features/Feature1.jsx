const Feature1 = () => {
    return (
        <>
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 border-b border-gray-300 pb-8">
        {/* Left Content */}
        <div className="md:w-1/2 mb-10 md:mb-0 pr-4 md:border-r md:border-gray-300">
          <h2 className="text-4xl font-bold mb-6">Unlimited Practice session</h2>
          <p className="text-gray-600 mb-4">
            For topics and subjects you go through in your school and coaching every day, we create instant 
            practice session specially made for your days need.
          </p>
          <p className="text-gray-600 font-medium">
            Our innovative AI algorithm crafts batches of 20 questions, each accompanied by instant feedback 
            and solutions - it's like having a Home tutor 24X7.
          </p>
        </div>
        
        {/* Right Content - Illustration with Chat Bubbles */}
        <div className="md:w-1/2 relative pl-4">
          <img src="/image1.png" alt="" />
        </div>
      </div>
        </>
    )
}

export default Feature1