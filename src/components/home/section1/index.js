import React from 'react';
import { Link } from 'react-router-dom';
import coffee from './coffee.svg';
import './style.scss';

const Section1 = () => {
    return (
        <div className='section1'>
            <div className="container">
                <div className='section1__content'>
                    <h1 className='section1__title'>Свежеобжаренный кофе</h1> 
                    <p className='section1__text1'>Кофе Калининградской обжарки из разных стран произрастания с доставкой на дом.</p>  
                    <p className='section1__text2'>Мы обжариваем кофе каждые выходные.</p> 
                    <Link to='/catalog' className='linkOrange'>Посмотреть каталог</Link>
                </div>
                <div className='section1__imgBlock'>
                    <img className='section1__coffee' src={coffee} alt='img-coffee'/>    
                </div>
            </div>
        </div>
    )
}

export default Section1;