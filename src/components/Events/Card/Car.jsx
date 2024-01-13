function Car() {
    return (
        <div>
            <section id="events" class="bg-gray-100 py-12">
                <div class="container mx-auto text-center" data-aos="fade-up" data-aos-duration="800">
                    <h2 class="text-3xl lg:text-4xl font-bold mb-8">Upcoming Events</h2>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Example event card --> */}
                        <div class="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                            data-aos="fade-up" data-aos-duration="800">
                            <h3 class="text-xl lg:text-2xl font-bold mb-2">Event Title</h3>
                            <p class="text-gray-600">Date: March 15, 2023</p>
                            <p class="text-gray-600">Time: 7:00 PM</p>
                            <a href="#" class="text-blue-500 hover:underline inline-block mt-3 transition-colors duration-300">Learn
                                More</a>
                        </div>
                        <div class="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                            data-aos="fade-up" data-aos-duration="800">
                            <h3 class="text-xl lg:text-2xl font-bold mb-2">Event Title</h3>
                            <p class="text-gray-600">Date: March 15, 2023</p>
                            <p class="text-gray-600">Time: 7:00 PM</p>
                            <a href="#" class="text-blue-500 hover:underline inline-block mt-3 transition-colors duration-300">Learn
                                More</a>
                        </div>
                        <div class="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                            data-aos="fade-up" data-aos-duration="800">
                            <h3 class="text-xl lg:text-2xl font-bold mb-2">Event Title</h3>
                            <p class="text-gray-600">Date: March 15, 2023</p>
                            <p class="text-gray-600">Time: 7:00 PM</p>
                            <a href="#" class="text-blue-500 hover:underline inline-block mt-3 transition-colors duration-300">Learn
                                More</a>
                        </div>
                        {/* <!-- Repeat similar cards for other events --> */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Car;