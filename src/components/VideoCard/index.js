import React, { useState } from 'react';
import axios from 'axios';
import styles from './VideoCard.module.css';
import Modal from '../Modal';
import VideoCardOverlay from '../VIdeoCardOverlay';


function VideoCard({ video, onVideoUpdate, onVideoDelete }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const handleEdit = (e) => {
        e.stopPropagation();
        setIsModalOpen(true);
        setIsOverlayOpen(false);
    };

    const handleOverlayOpen = () => {
        setIsOverlayOpen(true);
        setIsModalOpen(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleCloseOverlay = () => {
        setIsOverlayOpen(false);
    };

    const handleSave = (updatedVideo) => {
        axios.put(`http://localhost:3001/videos/${updatedVideo.id}`, updatedVideo)
            .then(response => {
                console.log('Video actualizado:', response.data);
                onVideoUpdate(response.data); 
                setIsModalOpen(false); 
            })
            .catch(error => {
                console.error('Error al actualizar el video:', error);
            });
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        axios.delete(`http://localhost:3001/videos/${video.id}`)
            .then(response => {
                console.log('Video borrado:', video.id);
                onVideoDelete(video.id); 
            })
            .catch(error => {
                console.error('Error al borrar el video:', error);
            });
    };

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
        <>
            <div className={`${styles.videocard} ${getCategoryClass(video.categoria)}`} onClick={handleOverlayOpen}>
                <img src={video.imagen} alt={video.titulo} className={styles.videoimage} />
                <div className={styles.buttons}>
                    <button className={styles.deletebutton} onClick={handleDelete}>Borrar</button>
                    <button className={styles.editbutton} onClick={handleEdit}>Editar</button>
                </div>
            </div>
            {isModalOpen && (
                <Modal video={video} onClose={handleCloseModal} onSave={handleSave} />
            )}
            {isOverlayOpen && (
                <VideoCardOverlay video={video} onClose={handleCloseOverlay} />
            )}
        </>
    );
}

export default VideoCard;
