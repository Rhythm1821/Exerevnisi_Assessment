const Feature3 = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Left Content */}
                <div className="md:w-1/2 mb-10 md:mb-0 pr-4 md:border-r md:border-gray-300">
                    <h2 className="text-4xl font-bold mb-6">Managing students academic life</h2>
                    <p className="text-gray-600">
                        There is more to study than just practicing giving test. To meet the requirement of exam,
                        we need to carefully plan our time as per the diverse needs.
                    </p>
                </div>

                {/* Right Content - Schedule Visualization */}
                <div className="md:w-1/2 relative pl-4">
                    <img src="/image3.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Feature3