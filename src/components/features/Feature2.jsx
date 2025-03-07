const Feature2 = () => {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row items-center justify-between mb-24 border-b border-gray-300 pb-8">
                {/* Left Content - Illustration */}
                <div className="md:w-1/2 relative pr-4 md:border-r md:border-gray-300">
                    <img src="/image2.png" alt="" />
                </div>

                {/* Right Content */}
                <div className="md:w-1/2 mb-10 md:mb-0 pl-4">
                    <h2 className="text-4xl font-bold mb-6">Personalized Assessment</h2>
                    <p className="text-gray-600 mb-4">
                        We measure your learning differently. Not just comparing you among your classmates and peers
                        rather, how much you have learnt and how much have your skills in each subject have grown.
                    </p>
                    <p className="text-gray-600 mb-4">
                        We create tests based on your learning session and exam requirement to understand and modify
                        study plan for you. The tests are uniquely created for each student to improve and advance their
                        respective knowledge.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Feature2