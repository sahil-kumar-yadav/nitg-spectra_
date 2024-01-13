import Card from "./Card/Card";

function EventCard() {
    return (
        <>
            <section id="events" class="bg-gray-100 py-12">
                <div class="container mx-auto text-center" data-aos="fade-up" data-aos-duration="800">
                    <h2 class="text-3xl lg:text-4xl font-bold mb-8">Upcoming Events</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Example event card --> */}
                        <Card title="Event Title" date="Date: March 15, 2023" time="Time: 7:00 PM" />
                        <Card title="Event Title" date="Date: March 15, 2023" time="Time: 7:00 PM" />
                        <Card title="Event Title" date="Date: March 15, 2023" time="Time: 7:00 PM" />
                        {/* <!-- Repeat similar cards for other events --> */}
                    </div>
                </div>
            </section>

        </>
    );
}

export default EventCard;