import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './img2.svg';
import img2 from './img4.svg';
import img3 from './img3.svg';
import img4 from './img1.svg';
import img5 from './img5.svg';
import './style.scss';

const Section2 = () => {
    return (
        <div className='section2' id='section2'>
            <div className='container'>
                <h2 className='section2__title title'>Каталоги нашей продукции</h2>
                <ul className='section2__cards'>
                    <li className='section2__card card-one'>
                        <div className='card-one__img'>
                            <img src={img1} alt='catalog-img'></img>
                        </div>
                        <h3 className='card-one__title'>Свежеобжаренный кофе</h3>
                        <Link to='/catalog' className='card-one__link linkOrange'>Купить</Link>
                    </li>
                    <li className='section2__card card-one'>
                        <div className='card-one__img'>
                            <img className='termo' src={img2} alt='catalog-img'></img>
                        </div>
                        <h3 className='card-one__title'>Чай и кофейные напитки</h3>
                        <Link to='/catalog' className='card-one__link linkOrange'>Купить</Link>
                    </li>
                    <li className='section2__card card-one'>
                        <div className='card-one__img'>
                            <img src={img3} alt='catalog-img'></img>
                        </div>
                        <h3 className='card-one__title'>Продукция для вендинга</h3>
                        <Link to='/catalog' className='card-one__link linkOrange'>Купить</Link>
                    </li>
                    <li className='section2__card card-one'>
                        <div className='card-one__img'>
                            <img src={img4} alt='catalog-img'></img>
                        </div>
                        <h3 className='card-one__title'>Здоровое питание</h3>
                        <Link to='/catalog' className='card-one__link linkOrange'>Купить</Link>
                    </li>   
                </ul>
            </div>
            <img className='section2__coffee' src={img5} alt='coffee'></img>
        </div>
    )
}

export default Section2;