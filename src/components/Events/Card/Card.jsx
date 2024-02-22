import Link from 'next/link';
import './card.module.css'

function Card(props) {

    return (
        <>
            <div className="bg-white mx-4 py-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 z-2 shadow-gray-600/50"
                data-aos="fade-up" data-aos-duration="800">
                <h3 className="text-xl lg:text-2xl font-bold mb-2">{props.title}</h3>
                <p className="text-gray-600">{props.date}</p>
                <p className="text-gray-600">{props.time}</p>
                {/* <Link href="/" className="text-blue-500 hover:underline inline-block mt-3 transition-colors duration-300">Learn More</Link> */}
                <button
                class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-gray-700 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none mt-2"
                type="button">
                Learn More
                </button>

            </div>
        </>
    );
}

export default Card;