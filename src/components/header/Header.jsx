import React, {useState} from 'react';
import css from './Header.module.css'
import Logo from '../../assets/logo.png'
import {CgShoppingBag} from "react-icons/cg";
import {GoThreeBars} from "react-icons/go";

export const Header = () => {

    const [showMenu, setShoeMenu] = useState(false)


    const onClickToggleHandler = () => {
        setShoeMenu(!showMenu)
    }


    return (
        <div className={css.container}>
            <div className={css.logo}>
                <img src={Logo} alt="logo"/>
                <span>amazon</span>
            </div>


            <div className={css.right}>

                <div className={css.bars} onClick={onClickToggleHandler}>
                    <GoThreeBars/>
                </div>

                    <ul className={css.menu} style={{display: showMenu ? 'inherit' : 'none'}}>
                        <li>Collections</li>
                        <li>Brands</li>
                        <li>New</li>
                        <li>Sales</li>
                        <li>Eng</li>
                    </ul>

                <input type="text" className={css.search} placeholder='Search'/>
                <CgShoppingBag className={css.cart}/>
            </div>
        </div>
    );
};

