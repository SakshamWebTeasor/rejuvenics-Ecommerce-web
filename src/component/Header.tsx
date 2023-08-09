import Image from 'next/image'
import React from 'react'
import "./MainPage.css"
import { MdNavigateNext } from "react-icons/md";
import { imageLoader } from '@/helper/imageLoader';

function Header() {

    return (
        <header className="header snipcss-Vc41o">
            <div className="container">
                <div className="row v-center">
                    <div className="header-item item-left">
                        <div className="logo">
                            <a href="#">
                                <Image src="/assets/logo.jpeg" loader={() => imageLoader("logo.png")} role="showLogo" width={160} height={42} alt={"Logo"} />
                            </a>
                        </div>
                    </div>
                    <div className="header-item item-center">
                        <div className="menu-overlay">
                        </div>
                        <nav className="menu">
                            <div className="mobile-menu-head">
                                <div className="go-back">
                                    <i className="fa fa-angle-left">
                                    </i>
                                </div>
                                <div className="current-menu-title">
                                </div>
                                <div className="mobile-menu-close">
                                    ×
                                </div>
                            </div>
                            <ul className="menu-main">
                                <li>
                                    <a href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#">
                                        Shop Now
                                        <span
                                            className={"arrow-rotated ml-12"}
                                        >
                                            <MdNavigateNext />
                                        </span>
                                    </a>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#">
                                        About Us
                                        <span
                                            className={"arrow-rotated ml-12"}
                                        >
                                            <MdNavigateNext />
                                        </span>
                                    </a>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#">
                                        Learn
                                        <span
                                            className={"arrow-rotated ml-12"}
                                        >
                                            <MdNavigateNext />
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Faq
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-item item-left">
                        <ul className='MainAction'>
                            <li>
                                <a href="#" className="img-fluid">
                                    <Image src="/assets/images/user.png" loader={() => imageLoader("user.png")} role="userIco" width={430} height={690} alt={"user"} />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="img-fluid">
                                    <Image src="/assets/images/search.png" loader={() => imageLoader("search.png")} role="searchIco" width={430} height={690} alt={"search"} />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="img-fluid">
                                    <Image src="/assets/images/cart.png" loader={() => imageLoader("cart.png")} role="cartIco" width={430} height={690} alt={"cart"} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="header-item item-right">
                        <div className="mobile-menu-trigger">
                            <span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header