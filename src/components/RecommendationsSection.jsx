// Recommendations Section
const RecommendationsSection = () => {
    return (
        <section id="recommendations" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-sm md:text-sm font-bold text-center mb-8 uppercase tracking-tight">Recommendations</h2>
                <p className="text-center text-xl mb-16 max-w-3xl mx-auto">
                    place holder for the recommendation
                </p>

                <div className="max-w-2xl mx-auto">
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full">
                                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Avatar" className="w-full h-full rounded-full" />
                            </div>
                            <div>
                                <p className="font-bold">Random User • Your Dream Client</p>
                                <p className="text-sm text-gray-500">Recommended on Linkedin</p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg mt-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full">
                                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Avatar" className="w-full h-full rounded-full" />
                            </div>
                            <div>
                                <p className="font-bold">Random User • Your Dream Client</p>
                                <p className="text-sm text-gray-500">Recommended on Linkedin</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default RecommendationsSection;