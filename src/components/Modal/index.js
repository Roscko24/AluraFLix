import React, { useState } from 'react';
import styles from './Modal.module.css';

function Modal({ video, onClose, onSave }) {
    const [titulo, setTitulo] = useState(video.titulo);
    const [categoria, setCategoria] = useState(video.categoria);
    const [imagen, setImagen] = useState(video.imagen);
    const [videoUrl, setVideoUrl] = useState(video.video);
    const [descripcion, setDescripcion] = useState(video.descripcion);

    const handleSave = () => {
        const updatedVideo = { ...video, titulo, categoria, imagen, video: videoUrl, descripcion };
        onSave(updatedVideo);
    };

    const handleClear = () => {
        setTitulo('');
        setCategoria('');
        setImagen('');
        setVideoUrl('');
        setDescripcion('');
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.botoncerrar} onClick={onClose}>X</button>
                <h2>EDITAR CARD:</h2>
                <form>
                    <label>Título</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                    <label>Categoría</label>
                    <select
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    >
                        <option value="Frontend">Frontend</option>
                        <option value="Backend">Backend</option>
                        <option value="Innovación y Gestión">Innovación y Gestión</option>
                    </select>
                    <label>Imagen</label>
                    <input
                        type="text"
                        value={imagen}
                        onChange={(e) => setImagen(e.target.value)}
                    />
                    <label>Video</label>
                    <input
                        type="text"
                        value={videoUrl}
                        onChange={(e) => setVideoUrl(e.target.value)}
                    />
                    <label>Descripción</label>
                    <textarea
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                    <div className={styles.botones}>
                        <button type="button" onClick={handleSave}>GUARDAR</button>
                        <button type="button" onClick={handleClear}>LIMPIAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Modal;
