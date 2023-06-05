import React from 'react';
import css from './Footer.module.css'
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon
} from '@heroicons/react/outline'
import Logo from '../../assets/logo.png'

export const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr/>

            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo} alt="logo"/>
                    <span>amazon</span>
                </div>
                <div className={css.blockWrap}>
                    <div className={css.block}>
                        <div className={css.detail}>
                            <span>Contact US</span>
                            <span className={css.pngLine}>
                        <LocationMarkerIcon className={css.icon}/>
                        <span>111 north avenue Orlando, FL 32801</span>
                    </span>
                            <span className={css.pngLine}>
                            {""}
                                <PhoneIcon className={css.icon}/>
                            <a href="tel:352-444-5555">352-444-5555</a>
                        </span>
                            <span className={css.pngLine}>
                            {""}
                                <InboxIcon className={css.icon}/>
                            <a href="mailto:sweeterthanfurby@mail.ru">sweeterthanfurby@mail.ru</a>
                        </span>
                        </div>
                    </div>
                    <div className={css.block}>
                        <div className={css.detail}>
                            <span>Account</span>
                            <span className={css.pngLine}>
                        <LoginIcon className={css.icon}/>
                      Sing In
                    </span>
                        </div>
                    </div>
                </div>
                <div className={css.blockWrap}>
                    <div className={css.block}>
                        <div className={css.detail}>
                            <span>Company</span>
                            <span className={css.pngLine}>
                        <UsersIcon className={css.icon}/>
                            About us
                    </span>
                        </div>
                    </div>
                    <div className={css.block}>
                        <div className={css.detail}>
                            <span>Resources</span>
                            <span className={css.pngLine}>
                        <LinkIcon className={css.icon}/>
                     Safety Privacy & Terms
                    </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.copyRight}>
                <span>Copyright ©2023 by Amazon, Inc.</span>
                <span>All rights reserved.</span>
            </div>
        </div>
    );
};

