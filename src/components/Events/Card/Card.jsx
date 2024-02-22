import Link from 'next/link';
import './card.module.css'

function Card(props) {

    return (
        <>
            <div className="bg-white mx-4 py-6 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                data-aos="fade-up" data-aos-duration="800">
                <h3 className="text-xl lg:text-2xl font-bold mb-2">{props.title}</h3>
                <p className="text-gray-600">{props.date}</p>
                <p className="text-gray-600">{props.time}</p>
                <Link href="/" className="text-blue-500 hover:underline inline-block mt-3 transition-colors duration-300">Learn More</Link>

            </div>
        </>
    );
}

export default Card;