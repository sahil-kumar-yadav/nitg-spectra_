
import styles from './card.module.css'

function Card(props) {

    return (
        <>
            <div class="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
                data-aos="fade-up" data-aos-duration="800">
                <h3 class="text-xl lg:text-2xl font-bold mb-2">{props.title}</h3>
                <p class="text-gray-600">{props.date}</p>
                <p class="text-gray-600">{props.time}</p>
                <a href="#" class="text-blue-500 hover:underline inline-block mt-3 transition-colors duration-300">Learn
                    More</a>
            </div>

            {/* <div className={styles.eventcard} data-aos="fade-up" data-aos-duration="800">
                <h3 className="text-xl lg:text-2xl font-bold mb-2">{props.title}</h3>
                <p className="text-gray-600">{props.date}</p>
                <p className="text-gray-600">{props.time}</p>
                <a href="#"
                    className="text-blue-500 hover:underline inline-block mt-3 transition-colors duration-300">Learn
                    More</a>
            </div> */}
        </>
    );
}

export default Card;