import React from 'react';
 const Testimonial = () => {
    return (
        <div>
            <div className="block newsCarousel video-testimonial">
                <div className="box">
                    <h2>Students Testimonials</h2>
                    <p style={{color:'#FFF'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <div className="owl-video-testimonial owl-video owl-two owl-carousel owl-theme">
                        <div className="item">
                            <div className="video-testimonial-block">
                                <div className="image playvideo" data-video="https://www.youtube.com/embed/zQgO0LaIc8A" data-width="344" data-height="160">
                                    <div className="owl-youtube-play-icon">
                                    </div><img className="lazy" src="/cp-assets/media/img/news/md-ms-admissions-2020-banner.jpg" />
                                </div>

                                <div className="info">
                                    <h5><a href="#" target="_blank">
                               Lorem Ipsum is simply dummy text of the printing
                            </a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="item">
                            <div className="video-testimonial-block">
                                <div className="image playvideo" data-video="https://www.youtube.com/embed/aHqRZhAtlrw" data-width="344" data-height="160">
                                    <div className="owl-youtube-play-icon">
                                    </div><img className="lazy" src="/cp-assets/media/img/news/Employment_and_Labour_Law_Studies.jpg" />
                                </div>
                                <div className="info">
                                    <h5><a href="#" target="_blank">
                               Lorem Ipsum is simply dummy text of the printing
                            </a></h5>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="video-testimonial-block">
                                <div className="image playvideo" data-video="https://www.youtube.com/embed/i56EcQR6E5E" data-width="344" data-height="160">
                                    <div className="owl-youtube-play-icon">
                                    </div><img className="lazy" src="/cp-assets/media/img/news/Facilities_&_services.jpg" />
                                </div>
                                <div className="info">
                                    <h5><a href="#" target="_blank">
                                           Lorem Ipsum is simply dummy text of the printing
                                        </a>
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className="item">

                            <div className="video-testimonial-block">

                                <div className="image playvideo" data-video="https://www.youtube.com/embed/zQgO0LaIc8A" data-width="344" data-height="160">

                                    <div className="owl-youtube-play-icon">
                                    </div><img className="lazy" data-src="/cp-assets/images/default.jpg" />
                                </div>

                                <div className="info">
                                    <h5><a href="#" target="_blank">
                               Lorem Ipsum is simply dummy text of the printing
                            </a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block box study-abroad">

                <div className="study-abroad--heading">
                    <h2>Study Abroad</h2>
                    <p style={{color:'#FFF'}}>Lorem Ipsum is simply dummy text of the printing</p>
                </div>

                <div className="study-abroad__content">
                    <ul>
                        <li>
                            <a href="usa/index.html" target="_balnk">
                                <span className="study-abroad__content--image"><img src="/cp-assets/images/home_new/sb-usa.e8fd3073e653.jpg" /></span>
                                <p>USA</p>
                            </a>
                        </li>
                        <li>
                            <a href="germany/index.html" target="_balnk">
                                <span className="study-abroad__content--image"><img src="/cp-assets/images/home_new/sb-germany.jpg" /></span>
                                <p>Germany</p>
                            </a>
                        </li>
                        <li>
                            <a href="australia/index.html" target="_balnk">
                                <span className="study-abroad__content--image"><img src="/cp-assets/images/home_new/sb-australia.1d817ecd7c95.jpg" /></span>
                                <p>Australia</p>
                            </a>
                        </li>
                        <li>
                            <a href="united-kingdom/index.html" target="_balnk">
                                <span className="study-abroad__content--image"><img src="/cp-assets/images/home_new/sb-uk.jpg" /></span>
                                <p>United Kingdom</p>
                            </a>
                        </li>
                        <li>
                            <a href="canada/index.html" target="_balnk">
                                <span className="study-abroad__content--image"><img src="/cp-assets/images/home_new/sb-canada.jpg" /></span>
                                <p>Canada</p>
                            </a>
                        </li>
                        <li>
                            <a href="new-zealand/index.html" target="_balnk">
                                <span className="study-abroad__content--image"><img src="/cp-assets/images/home_new/sb-new-zealand.jpg" /></span>
                                <p>New Zealand</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default Testimonial;