import React from 'react';
 const TopSlider = () => {
    return (
        <div>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/*  Indicators  */}
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                    <li data-target="#myCarousel" data-slide-to="4"></li>
                </ol>

                { /* Wrapper for slides */ }
                <div className="carousel-inner">
                    <div className="item active">
                        <img src="/cp-assets/images/slider/1.png" alt="Los Angeles" />
                        <div className="carousel-caption">
                            <h3>Los Angeles</h3>
                            <p>LA is always so much fun!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src="/cp-assets/images/slider/2.png" alt="Chicago" />
                        <div className="carousel-caption">
                            <h3>Chicago</h3>
                            <p>Thank you, Chicago!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src="/cp-assets/images/slider/3.png" alt="New York" />
                        <div className="carousel-caption">
                            <h3>New York</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src="/cp-assets/images/slider/s-1.png" alt="New York" />
                        <div className="carousel-caption">
                            <h3>New York</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>
                    <div className="item">
                        <img src="/cp-assets/images/slider/banner.png" alt="New York" />
                        <div className="carousel-caption">
                            <h3>New York</h3>
                            <p>We love the Big Apple!</p>
                        </div>
                    </div>

                </div>

                {/* Left and right controls */}
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right"></span>
                  <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}


export default TopSlider;