import React, { useState } from 'react';
import axios from 'axios';
import styles from './NuevoVideo.module.css';

function NuevoVideo() {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagen, setImagen] = useState('');
    const [video, setVideo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [error, setError] = useState('');

    const handleGuardar = () => {
        if (!imagen) {
            setError('El enlace es obligatorio');
            return;
        }

        const nuevoVideo = {
            titulo,
            categoria,
            imagen,
            video,
            descripcion,
        };

        axios.get('http://localhost:3001/videos')
            .then(response => {
                const videos = response.data;
                const nuevoId = videos.length ? Math.max(...videos.map(v => v.id)) + 1 : 1;
                nuevoVideo.id = nuevoId;

                axios.post('http://localhost:3001/videos', nuevoVideo)
                    .then(response => {
                        console.log('Video agregado:', response.data);
                        setTitulo('');
                        setCategoria('');
                        setImagen('');
                        setVideo('');
                        setDescripcion('');
                        setError('');
                    })
                    .catch(error => {
                        console.error('Error al agregar el video:', error);
                    });
            })
            .catch(error => {
                console.error('Error al obtener los videos:', error);
            });
    };

    const handleLimpiar = () => {
        setTitulo('');
        setCategoria('');
        setImagen('');
        setVideo('');
        setDescripcion('');
        setError('');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>NUEVO VIDEO</h1>
            <p className={styles.subtitle}>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
            <div className={styles.formContainer}>
                <h2 className={styles.formTitle}>Crear Tarjeta</h2>
                <form className={styles.form}>
                    <label className={styles.label}>
                        Título
                        <input
                            type="text"
                            className={styles.input}
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            placeholder="Ingrese el título"
                        />
                    </label>
                    <label className={styles.label}>
                        Categoría
                        <select
                            className={styles.input}
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                        >
                            <option value="">Seleccione una categoría</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                            <option value="Innovación y Gestión">Innovación y Gestión</option>
                        </select>
                    </label>
                    <label className={styles.label}>
                        Imagen
                        <input
                            type="text"
                            className={`${styles.input} ${error && styles.errorInput}`}
                            value={imagen}
                            onChange={(e) => {
                                setImagen(e.target.value);
                                setError('');
                            }}
                            placeholder="Ingrese el enlace de la imagen"
                        />
                        {error && <span className={styles.error}>{error}</span>}
                    </label>
                    <label className={styles.label}>
                        Video
                        <input
                            type="text"
                            className={styles.input}
                            value={video}
                            onChange={(e) => setVideo(e.target.value)}
                            placeholder="Ingrese el enlace del video"
                        />
                    </label>
                    <label className={styles.label}>
                        Descripción
                        <textarea
                            className={styles.textarea}
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            placeholder="¿De qué se trata este video?"
                        />
                    </label>
                    <div className={styles.buttons}>
                        <button type="button" className={styles.saveButton} onClick={handleGuardar}>GUARDAR</button>
                        <button type="button" className={styles.clearButton} onClick={handleLimpiar}>LIMPIAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NuevoVideo;
