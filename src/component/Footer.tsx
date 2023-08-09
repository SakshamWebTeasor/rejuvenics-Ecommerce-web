import { imageLoader } from '@/helper/imageLoader'
import Image from 'next/image'
import React from 'react'
import "./MainPage.css"

function Footer() {
    return (
        <div className='FooterStickToBottom'>
            <section className="footer snipcss-AWZJL">
                <div className="container">
                    <div className="row align-items-center mt-4">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                            <div className="footer-link">
                                <ul>
                                    <li>
                                        <a href="#">
                                            Shop
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            FAQs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Stress Relief Mushroom
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Focus Mushroom
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Contact Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div className="footer-link text-center">
                                <Image className='cardsLg' src="/assets/white-logo.png" loader={() => imageLoader("white-logo.png")} role="showLogo" width={190} height={50} alt={"WhiteLogo"} />
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                            <div className="footer-link">
                                <ul>
                                    <li>
                                        <a href="#">
                                            Search
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Shipping + Returns
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Terms of service
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Refund Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-bottom snipcss-65KxI">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                            <div className="bottom-data">
                                <Image className="img-fluid cards" src="/assets/footer.png" loader={() => imageLoader("footer.png")} role="showLogo" width={150} height={150} alt={"Footer"} />
                                <p className="m-0 text-white">
                                    @ 2023, Rejuvenics
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-12">
                            <div className="footer-link bottom-icon text-end">
                                <ul className='socialList'>
                                    <li>
                                        <a href="#">
                                            <Image src="/assets/facebook.png" loader={() => imageLoader("facebook.png")} role="showLogo" height={40} width={40} alt={"FacebookIco"} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Image src="/assets/instagram.png" loader={() => imageLoader("instagram.png")} role="showLogo" height={40} width={40} alt={"InstaIco"} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <Image src="/assets/twitter.png" loader={() => imageLoader("twitter.png")} role="showLogo" height={40} width={40} alt={"TwitterIco"} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer