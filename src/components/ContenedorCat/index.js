import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideoCard from '../VideoCard';
import styles from './ContenedorCat.module.css';

function ContenedorCat() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/videos')
            .then(response => {
                console.log("Videos fetched from API:", response.data);
                setVideos(response.data);
            })
            .catch(error => {
                console.error("Error fetching the videos:", error);
            });
    }, []);

    const handleVideoUpdate = (updatedVideo) => {
        setVideos(videos.map(video => video.id === updatedVideo.id ? updatedVideo : video));
    };

    const handleVideoDelete = (videoId) => {
        setVideos(videos.filter(video => video.id !== videoId));
    };

    const categories = ["Frontend", "Backend", "Innovación y Gestión"];

    const getCategoryClass = (category) => {
        switch (category) {
            case 'Frontend':
                return styles.frontend;
            case 'Backend':
                return styles.backend;
            case 'Innovación y Gestión':
                return styles.innovaciongestion;
            default:
                return '';
        }
    };

    return (
        <div className={styles.contenedorcat}>
            {categories.map(category => (
                <div key={category}>
                    <div className={`${styles.categoryheader} ${getCategoryClass(category)}`}>{category}</div>
                    <div className={styles.videogrid}>
                        {videos.filter(video => video.categoria === category).map(video => (
                            <VideoCard
                                key={video.id}
                                video={video}
                                onVideoUpdate={handleVideoUpdate}
                                onVideoDelete={handleVideoDelete}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ContenedorCat;
