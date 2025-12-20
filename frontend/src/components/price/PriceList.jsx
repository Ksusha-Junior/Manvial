import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Price from './Price';
import { useNavigate } from 'react-router-dom';
import './Price.css';

const API_URL_PRICE = 'http://127.0.0.1:8000/price/';

{/* * */}

function PriceList() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    async function fetchPrices() {
      try {
        const response = await axios.get(API_URL_PRICE);
        setPrices(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    }
    fetchPrices();
  }, []);

  return (
    <div className='PriceList-main'>
      {/* Заголовок по центру, крупный и жирный */}
      <h2 className='PriceList-title'>Услуги и цены</h2>

      {/* Контейнер для двух колонок */}
      <div className='PriceList-columns'>
        {/* Колонка с услугами */}
        <div className='column services-column'>
          {prices.map((item) => (
            <div key={item.id} className='service-item'>
              {item.service_name}
            </div>
          ))}
        </div>

        {/* Колонка с ценами */}
        <div className='column prices-column'>
          {prices.map((item) => (
            <div key={item.id} className='price-item'>
              {item.base_price} руб
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PriceList;