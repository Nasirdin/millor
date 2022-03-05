import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './logotype.svg';
import './style.scss';

const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <Link to='/'><img className='header__logo' src={logo} alt='Logotype'/></Link>
                <ul className='header__items'>
                    <li className='header__item'><NavLink className='header__link' activeClassName='NoActive' to='/'>Главная</NavLink></li>
                    <li className='header__item'><NavLink className='header__link' activeClassName='active' to='/catalog'>Каталог товаров</NavLink></li>
                    <li className='header__item'><NavLink className='header__link' activeClassName='active' to='/blog'>Блог</NavLink></li>
                    <li className='header__item'><NavLink className='header__link' activeClassName='active' to='/contacts'>Контакты</NavLink></li>
                </ul>
                <ul className='header__items'>
                    <li className='header__item'><Link className='header__link'>поиск</Link></li>
                    <li className='header__item'><Link className='header__link'>корзина</Link></li>
                    <li className='header__item'><Link className='header__link'>войти</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;