import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Price from './Price';
import { useNavigate } from 'react-router-dom';

const API_URL_SERVICE = 'http://http://127.0.0.1:8000/service/';
const API_URL_PRICE = 'http://http://127.0.0.1:8000/price/';

function PriceList() {
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchHalls() {
            const response = await axios.get(API_URL_HALLS);
            console.log("Fetched halls:", response.data); // Проверка загруженных данных
            setHalls(response.data);
        }
        fetchHalls();
    }, []);

    const handleSelectHall = (hall) => {
        console.log("Selected hall:", hall); // Проверка выбранного зала
        if (hall && hall.id) { // Проверка существования hall.id
            navigate(`/prices/${hall.id}`); // Навигация по правильному пути
        } else {
            console.error("Selected hall does not have an id");
        }
    };

    return (
        <div>
            <HallSelector halls={halls} onSelectHall={handleSelectHall} />
        </div>
    );
}

export default PriceList;
