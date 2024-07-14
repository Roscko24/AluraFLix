import React, { useState } from 'react';
import Banner from '../../components/Banner';
import VideoCardOverlay from '../../components/VIdeoCardOverlay';
import ContenedorCat from "../../components/ContenedorCat"

function Inicio() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <>
            <Banner />
            {selectedVideo && (
                <VideoCardOverlay video={selectedVideo} onClose={() => setSelectedVideo(null)} />
            )}
            <ContenedorCat onVideoSelect={setSelectedVideo} />
        </>
    );
}

export default Inicio;

