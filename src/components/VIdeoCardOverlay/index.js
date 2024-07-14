import React from 'react';
import styles from './VideoCardOverlay.module.css';

function VideoCardOverlay({ video, onClose }) {
    const getCategoryClass = (categoria) => {
        switch (categoria) {
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
        <div className={styles.overlay}>
            <div className={styles.card}>
                <button className={styles.closebutton} onClick={onClose}>X</button>
                <div className={styles.left}>
                    <div className={`${styles.categoryheader} ${getCategoryClass(video.categoria)}`}>{video.categoria}</div>
                    <h1>{video.titulo}</h1>
                    <p>{video.descripcion}</p>
                </div>
                <div className={styles.right}>
                    <iframe
                        width="560"
                        height="315"
                        src={video.video.replace("watch?v=", "embed/")}
                        title={video.titulo}
                        frameBorder="0"
                        className={`${styles.iframe} ${getCategoryClass(video.categoria)}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default VideoCardOverlay;
