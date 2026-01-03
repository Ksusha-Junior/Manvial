import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/organizations/';

function Organizations() {
    const [organization, setOrganization] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [images, setImages] = useState([]); // фото для веера
    const [expandedImage, setExpandedImage] = useState(null); // увеличенная картинка

    useEffect(() => {
        async function fetchOrganization() {
            const response = await axios.get(API_URL);
            // Предполагаю, что API возвращает массив объектов
            if (response.data && response.data.length > 0) {
                setOrganization(response.data[0]);
                // Предварительно можно подготовить список изображений для веера
                // Например, если у вас есть несколько изображений:
                // setImages([..., ...]);
                // В текущем случае, только одно изображение, так что создадим массив из него
                if (response.data[0].image) {
                    setImages([response.data[0].image]);
                }
            }
        }
        fetchOrganization();
    }, []);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
        if (!modalOpen) {
            // при открытии можно подготовить фотографии веера
            // допустим, у вас есть массив изображений:
            // setImages([...])
        }
    };

    const handleImageClick = (img) => {
        if (expandedImage === img) {
            setExpandedImage(null);
        } else {
            setExpandedImage(img);
        }
    };

    return (
        <div className='organizations-container'>
            <button onClick={toggleModal}>Для вас, юридические лица</button>

            {modalOpen && (
                <div className='modal-overlay' onClick={toggleModal}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                        {/* Верхняя часть: текст */}
                        {organization && (
                            <div className='modal-header'>
                                <h2>Информация для юридических лиц</h2>
                                <p>{organization.text}</p>
                            </div>
                        )}

                        {/* Фото веером */}
                        <div className='fan-container'>
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt='Фото'
                                    className='fan-image'
                                    onClick={() => handleImageClick(img)}
                                />
                            ))}
                        </div>

                        {/* Увеличенная картинка */}
                        {expandedImage && (
                            <div className='expanded-image-container' onClick={() => setExpandedImage(null)}>
                                <img src={expandedImage} alt='Увеличенное' className='expanded-image' />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Organizations;