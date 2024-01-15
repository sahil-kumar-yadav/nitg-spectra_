"use client"

import { Player } from '@lottiefiles/react-lottie-player';

function LottieAnimation() {
    return (
        <>
            <div className="bg-black">
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/fb57c608-6d4e-4548-af6b-ee57e5a5123d/2cbkRdNOJw.json"
                    style={{ height: '300px', width: '300px' }}
                >
                </Player>
            </div>
        </>
    );
}

export default LottieAnimation;