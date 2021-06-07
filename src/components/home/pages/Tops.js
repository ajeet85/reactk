import React from 'react';

const Landing = () => {
    return (
        <div>
            <div className="block collegesBlock">
                { /*<!-- COLLEGE BLOCK start -->*/ }
                <ul className="tabs">
                    <li className="tab-link current " data-tab="explore-college">
                        <h2>Top Colleges</h2>
                    </li>
                    <li className="tab-link " data-tab="explore-exams">
                        <h2>Trending Exams</h2>
                    </li>
                </ul>

                <div className="dataContent">
                    <div id="explore-college" className="tab-content current">
                        <ul className="row">
                            <li>
                                <div className="items">
                                    <div className="streamIcon engg"><svg version="1.1" id="engineering" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 502.596 502.596" xmlSpace="preserve">

                                        <path style={{fill:'#84DBFF'}} d="M336.98,141.061c-3.135-12.539-8.359-25.078-14.629-36.571l12.539-29.257l-43.886-42.841
                                            l-29.257,12.539c-11.494-6.269-22.988-11.494-36.571-14.629L214.727,0h-61.649l-11.494,30.302
                                            c-12.539,3.135-25.078,8.359-36.571,14.629L75.755,32.392L32.914,75.233l12.539,29.257c-6.269,11.494-11.494,22.988-14.629,36.571
                                            L0.522,152.555v61.649l30.302,11.494c3.135,12.539,8.359,25.078,14.629,36.571l-12.539,29.257L76.8,334.367l29.257-12.539
                                            c11.494,6.269,22.988,11.494,36.571,14.629l11.494,30.302h60.604l11.494-30.302c12.539-3.135,25.078-8.359,36.571-14.629
                                            l29.257,12.539l43.886-42.841l-12.539-29.257c6.269-11.494,11.494-22.988,14.629-36.571l30.302-11.494v-61.649L336.98,141.061z
                                             M183.38,258.09c-41.796,0-75.233-33.437-75.233-75.233s33.437-75.233,75.233-75.233s75.233,33.437,75.233,75.233
                                            S225.176,258.09,183.38,258.09z"/><g>

                                        <path style={{fill:'#54C0EB'}} d="M236.669,236.147c-29.257,29.257-76.278,29.257-105.535,0l-27.167,27.167
                                                                                        c43.886,43.886,115.984,43.886,159.869,0s43.886-114.939,0-159.869l-27.167,27.167C265.927,159.869,265.927,206.89,236.669,236.147
                                                                                        z"/>

                                        <path style={{fill:'#54C0EB'}} d="M103.967,103.445c-43.886,43.886-43.886,114.939,0,159.869l27.167-27.167
                                                c-29.257-29.257-29.257-76.278,0-105.535s76.278-29.257,105.535,0l27.167-27.167C219.951,59.559,147.853,59.559,103.967,103.445z"
                                                /></g>

                                        <path style={{fill:'#4CDBC4'}} d="M354.743,428.408c1.045-6.269,1.045-11.494,0-17.763l10.449-10.449l-10.449-26.122h-14.629
                                            c-3.135-4.18-8.359-8.359-12.539-12.539v-14.629l-26.122-10.449l-10.449,10.449c-6.269-1.045-11.494-1.045-17.763,0l-10.449-10.449
                                            l-26.122,10.449v14.629c-4.18,3.135-8.359,8.359-12.539,12.539h-14.629l-10.449,26.122l10.449,10.449
                                            c-1.045,6.269-1.045,11.494,0,17.763l-10.449,10.449l10.449,26.122h14.629c3.135,4.18,8.359,8.359,12.539,12.539v14.629
                                            l26.122,10.449l10.449-10.449c6.269,1.045,11.494,1.045,17.763,0l10.449,10.449l26.122-10.449v-14.629
                                            c4.18-3.135,8.359-8.359,12.539-12.539h14.629l10.449-26.122L354.743,428.408z M271.151,450.351
                                            c-17.763-7.314-26.122-27.167-18.808-43.886c7.314-17.763,27.167-26.122,43.886-18.808c17.763,7.314,26.122,27.167,18.808,43.886
                                            C307.722,449.306,287.869,457.665,271.151,450.351z"/>

                                        <path style={{fill:'#FF7058'}} d="M491.624,291.527c1.045-6.269,1.045-11.494,0-17.763l10.449-10.449l-10.449-26.122h-14.629
                                            c-3.135-4.18-8.359-8.359-12.539-12.539v-14.629l-26.122-10.449l-10.449,10.449c-6.269-1.045-11.494-1.045-17.763,0l-10.449-10.449
                                            l-26.122,10.449v14.629c-4.18,3.135-8.359,8.359-12.539,12.539h-14.629l-10.449,26.122l10.449,10.449
                                            c-1.045,6.269-1.045,11.494,0,17.763l-10.449,10.449l10.449,26.122h14.629c3.135,4.18,8.359,8.359,12.539,12.539v14.629
                                            l26.122,10.449l10.449-10.449c6.269,1.045,11.494,1.045,17.763,0l10.449,10.449l26.122-10.449v-14.629
                                            c4.18-3.135,8.359-8.359,12.539-12.539h14.629l10.449-26.122L491.624,291.527z M406.988,314.514
                                            c-17.763-7.314-26.122-27.167-18.808-43.886c7.314-17.763,27.167-26.122,43.886-18.808c17.763,7.314,26.122,27.167,18.808,43.886
                                            C444.604,313.469,424.751,321.829,406.988,314.514z"/></svg>
                                    </div>
                                    <h5><a href="engineering-stream/index.html" title="Engineering Colleges in India">MBA</a></h5>

                                    <p>6112 Colleges</p>
                                </div>

                                <div className="items">
                                    <div className="streamIcon bms"><svg version="1.1" id="nformation" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
                                        <path d="M0,346.68v-310c0-5.504,4.704-10,10.448-10h491.104c5.744,0,10.448,4.496,10.448,10v310H0z"/><g style={{opacity:'0.12'}}>
                                        <rect x="21.328" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="56.24" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="91.072" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="125.944" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="160.8" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="195.688" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="230.56" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="265.44" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="300.312" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="335.184" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="370.08" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="404.928" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="439.8" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="474.64" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="21.328" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="56.24" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="91.072" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="125.944" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="160.8" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="195.688" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="230.56" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="265.44" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="300.312" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="335.184" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="370.08" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="404.928" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="439.8" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="474.64" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="21.328" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="56.24" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="91.072" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="125.944" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="160.8" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="195.688" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="230.56" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="265.44" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="300.312" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="335.184" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="370.08" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="404.928" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="439.8" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="474.64" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="21.328" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="56.24" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="91.072" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="125.944" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="160.8" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="195.688" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="230.56" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="265.44" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="300.312" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="335.184" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="370.08" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="404.928" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="439.8" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="474.64" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="21.328" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="56.24" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="91.072" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="125.944" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="160.8" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="195.688" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="230.56" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="265.44" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="300.312" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="335.184" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="370.08" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="404.928" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="439.8" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="474.64" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="21.328" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="56.24" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="91.072" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="125.944" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="160.8" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="195.688" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="230.56" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="265.44" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="300.312" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="335.184" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="370.08" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="404.928" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="439.8" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="474.64" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="21.328" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="56.24" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="91.072" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="125.944" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="160.8" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="195.688" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="230.56" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="265.44" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="300.312" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="335.184" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="370.08" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="404.928" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="439.8" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="474.64" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="21.328" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="56.24" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="91.072" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="125.944" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="160.8" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="195.688" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="230.56" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="265.44" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="300.312" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="335.184" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="370.08" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="404.928" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="439.8" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="474.64" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="21.328" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="56.24" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="91.072" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="125.944" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="160.8" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="195.688" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="230.56" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="265.44" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="300.312" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="335.184" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="370.08" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="404.928" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="439.8" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="474.64" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/></g>

                                        <path style={{fill:'#D8D8D8'}} d="M512,346.68v42.664c0,5.872-4.704,10.672-10.448,10.672H10.448c-5.744,0-10.448-4.8-10.448-10.664
                                                                    v-42.664L512,346.68L512,346.68z"/>

                                        <polygon style={{fill:'#BCBCBC'}} points="181.336,474.68 330.664,474.68 320,400.016 192,400.016 "/>

                                        <polygon style={{fill:'#AAAAAA'}} points="320,400.016 192,400.016 185.352,446.552 322.488,417.416 "/>
                                        <rect x="144" y="474.656" style={{fill:'#D8D8D8'}} width="224" height="10.664"/>

                                        <polygon style={{fill:'#939393'}} points="192,400.016 320,400.016 320.72,405.056 188.68,423.28 "/>

                                        <polygon style={{fill:'#CCCCCC'}} points="299.136,249.256 199.944,149.2 102.744,246.408 97.088,240.752 199.968,137.864
                                            299.136,237.896 395.472,140.72 401.16,146.352 "/>
                                            <circle style={{fill:'#FFFFFF'}} cx="99.912" cy="243.576" r="34.912"/>
                                            <g>
                                                <circle style={{fill:'#E21B1B'}} cx="99.912" cy="243.576" r="15.368"/>
                                                <circle style={{fill:'#E21B1B'}} cx="300.752" cy="243.576" r="34.912"/>
                                            </g>
                                            <circle style={{fill:'#FFFFFF'}} cx="300.752" cy="243.576" r="15.368"/>
                                            <circle style={{fill:'#E21B1B'}} cx="200" cy="143.536" r="48.688"/>
                                            <g>
                                                <circle style={{fill:'#FFFFFF'}} cx="200" cy="143.536" r="21.424"/>
                                                <circle style={{fill:'#FFFFFF'}} cx="398.312" cy="143.536" r="48.688"/></g><circle style={{fill:'#E21B1B'}} cx="398.312" cy="143.536" r="21.424"/></svg>
                                    </div>
                                    <h5><a href="information-technology-stream/index.html" title="B.M.S. Colleges in India">Information Technology</a></h5>
                                    <p>5249 Colleges</p>
                                </div>
                            </li>
                            <li>
                                <div className="items">
                                    <div className="streamIcon arts"><svg version="1.1" id="arts" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 460.001 460.001"  xmlSpace="preserve">
                                        <path style={{fill:'#EDEEF0'}} d="M92.122,230c0,25.529-13.223,47.971-33.193,60.848c0,0,272.328,0,297.606,0
                                        s59.403-17.19,59.403-60.848s-34.125-60.848-59.403-60.848s-297.606,0-297.606,0C78.899,182.029,92.122,204.471,92.122,230z"/>
                                        <path style={{fill:'#E5C400'}} d="M29.873,153.333h323.586c42.275,0,76.668,34.393,76.668,76.667c0,42.276-34.393,76.667-76.668,76.667
                                            H29.873v-29.816h323.586c25.835,0,46.852-21.016,46.852-46.851c0-25.833-21.018-46.851-46.852-46.851H29.873V153.333z"/>
                                        <path style={{opacity:'0.3', fill:'#5B5B5F'}} d="M92.122,230c0,17.877-6.501,34.226-17.245,46.851H29.873
                                            v29.816h323.586c42.275,0,76.668-34.391,76.668-76.667L92.122,230L92.122,230z"/>

                                        <path style={{fill:'#EDEEF0'}} d="M367.878,383.333c0,25.529,13.223,47.971,33.193,60.848c0,0-272.328,0-297.606,0
                                            s-59.403-17.19-59.403-60.848s34.125-60.848,59.403-60.848s297.606,0,297.606,0C381.102,335.363,367.878,357.804,367.878,383.333z"
                                            />

                                        <path style={{fill:'#C8523B'}} d="M430.128,306.667H106.541c-42.275,0-76.668,34.393-76.668,76.667
                                            c0,42.276,34.393,76.667,76.668,76.667h323.586v-29.816H106.541c-25.835,0-46.852-21.016-46.852-46.851
                                            c0-25.833,21.018-46.851,46.852-46.851h323.586V306.667z"/>

                                        <path style={{opacity:0.3, fill:'#5B5B5F'}} d="M367.878,383.333c0,17.877,6.501,34.226,17.245,46.851h45.004
                                            V460H106.541c-42.275,0-76.668-34.391-76.668-76.667H367.878z"/>

                                        <path style={{fill:'#EDEEF0'}} d="M367.878,76.667c0,25.529,13.223,47.971,33.193,60.848c0,0-272.328,0-297.606,0
                                            s-59.403-17.19-59.403-60.848s34.125-60.848,59.403-60.848s297.606,0,297.606,0C381.102,28.696,367.878,51.137,367.878,76.667z"/>

                                        <path style={{fill:'#ABCB57'}} d="M430.128,0H106.541C64.266,0,29.873,34.393,29.873,76.666c0,42.276,34.393,76.667,76.668,76.667
                                            h323.586v-29.816H106.541c-25.835,0-46.852-21.016-46.852-46.851c0-25.833,21.018-46.851,46.852-46.851h323.586V0z"/>

                                        <path style={{opacity:0.3, fill:'#5B5B5F'}} d="M367.878,76.667c0,17.877,6.501,34.226,17.245,46.851h45.004
                                            v29.816H106.541c-42.275,0-76.668-34.391-76.668-76.667H367.878z"/></svg>
                                    </div>
                                    <h5><a href="arts-stream/index.html" title="Arts Colleges in India">Commerce &amp; Banking</a></h5>
                                    <p>5287 Colleges</p>
                                </div>

                                <div className="items">

                                    <div className="streamIcon law"><svg version="1.1" id="law" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"  xmlSpace="preserve">

                                        <path style={{fill:'#775146'}} d="M499.293,305.036c-1.605,0-3.125-0.957-3.767-2.535l-55.529-136.7l-55.529,136.7
                                            c-0.845,2.08-3.216,3.08-5.295,2.236c-2.08-0.845-3.08-3.215-2.236-5.295l59.294-145.969c0.623-1.532,2.111-2.535,3.765-2.535
                                            s3.143,1.002,3.765,2.535l59.294,145.969c0.844,2.08-0.156,4.45-2.236,5.295C500.32,304.94,499.802,305.036,499.293,305.036z"/>

                                        <path style={{fill:'#FEA921'}} d="M442.949,368.155h-5.903c-33.883,0-61.351-27.468-61.351-61.351v-6.605
                                            c0-0.485,0.393-0.879,0.879-0.879h126.849c0.485,0,0.879,0.393,0.879,0.879v6.605C504.3,340.687,476.832,368.155,442.949,368.155z"
                                            />

                                        <path style={{fill:'#FF901D'}} d="M503.421,299.32h-47.412c0.485,0,0.879,0.393,0.879,0.879v6.605
                                            c0,26.598-16.929,49.235-40.597,57.744c6.483,2.331,13.469,3.608,20.755,3.608h5.903c33.883,0,61.351-27.468,61.351-61.351V300.2
                                            C504.3,299.713,503.907,299.32,503.421,299.32z"/>

                                        <path style={{fill:'#775146'}} d="M131.297,305.036c-1.605,0-3.125-0.957-3.767-2.535l-55.529-136.7L16.472,302.5
                                            c-0.845,2.08-3.216,3.08-5.295,2.236c-2.08-0.845-3.08-3.215-2.236-5.295l59.294-145.969c0.623-1.532,2.111-2.535,3.765-2.535
                                            s3.143,1.002,3.765,2.535l59.295,145.969c0.844,2.08-0.156,4.45-2.236,5.295C132.324,304.94,131.806,305.036,131.297,305.036z"/>

                                        <path style={{fill:'#FEA921'}} d="M74.953,368.155h-5.904c-33.883,0-61.351-27.468-61.351-61.351v-6.605
                                            c0-0.485,0.393-0.879,0.879-0.879h126.849c0.485,0,0.879,0.393,0.879,0.879v6.605C136.304,340.687,108.836,368.155,74.953,368.155z"
                                            />

                                        <path style={{fill:'#FF901D'}} d="M135.425,299.32h-47.76c0.485,0,0.879,0.393,0.879,0.879v6.605c0,26.533-16.845,49.129-40.423,57.685
                                            c6.532,2.37,13.578,3.666,20.928,3.666h5.903c33.883,0,61.351-27.468,61.351-61.351v-6.605
                                            C136.304,299.713,135.911,299.32,135.425,299.32z"/><rect x="238.859" y="55.58" style={{fill:'#61AFF6'}} width="34.27" height="394.23"/><rect x="255.999" y="55.58" style={{fill:'#55A2F0'}} width="17.14" height="394.23"/>

                                        <path style={{fill:'#775146'}} d="M374.863,484.651H137.135v-34.185c0-8.651,7.013-15.664,15.664-15.664h206.398
                                            c8.651,0,15.664,7.013,15.664,15.664v34.185H374.863z"/>
                                            <circle style={{fill:'#61AFF6'}} cx="255.999" cy="31.15" r="31.15"/>

                                        <path style={{fill:'#55A2F0'}} d="M270.086,3.37c2.15,4.231,3.369,9.015,3.369,14.086c0,17.206-13.948,31.153-31.153,31.153
                                            c-5.071,0-9.855-1.22-14.087-3.369c5.144,10.125,15.65,17.066,27.784,17.066c17.205,0,31.153-13.948,31.153-31.153
                                            C287.152,19.019,280.21,8.513,270.086,3.37z"/>

                                        <path style={{fill:'#61AFF6'}} d="M425.476,157.034c-23.439,0-45.314-9.313-61.594-26.225c-9.142-9.497-21.818-14.943-34.778-14.943
                                            H185.91c-15.389,0-29.675,6.194-40.227,17.441c-14.147,15.079-34.664,23.727-56.288,23.727h-72.77c-3.357,0-6.078-2.721-6.078-6.078
                                            v-18.179c0-3.357,2.721-6.078,6.078-6.078h69.899c15.389,0,29.675-6.194,40.227-17.441c14.148-15.079,34.667-23.727,56.293-23.727
                                            h145.912c21.625,0,42.143,8.648,56.292,23.727c10.553,11.247,24.84,17.441,40.228,17.441h69.897c3.357,0,6.078,2.721,6.078,6.078
                                            v18.179c0,3.357-2.721,6.078-6.078,6.078H425.476z"/>

                                        <path style={{fill:'#55A2F0'}} d="M495.373,144.165h-69.897c-23.439,0-45.314-9.313-61.594-26.224
                                            c-9.142-9.497-21.817-14.943-34.778-14.943H185.91c-15.389,0-29.675,6.194-40.227,17.441
                                            c-14.147,15.079-34.664,23.727-56.288,23.727h-72.77c-3.357,0-6.078-2.721-6.078-6.078v12.869c0,3.357,2.721,6.078,6.078,6.078
                                            h72.77c21.624,0,42.141-8.648,56.288-23.727c10.552-11.247,24.838-17.441,40.227-17.441h143.193c12.96,0,25.636,5.447,34.778,14.943
                                            c16.28,16.911,38.155,26.224,61.594,26.224h69.897c3.357,0,6.078-2.721,6.078-6.078v-12.869
                                            C501.451,141.444,498.73,144.165,495.373,144.165z"/>

                                        <path style={{fill:'#664239'}} d="M359.198,434.802h-31.403l-0.018,11.161c-0.015,9.652-7.845,17.469-17.497,17.469H137.135v21.219
                                            h237.727v-34.185C374.863,441.815,367.849,434.802,359.198,434.802z"/>

                                        <path style={{fill:'#775146'}} d="M411.842,512H100.156v-24.285c0-8.872,7.192-16.063,16.063-16.063h279.56
                                            c8.872,0,16.063,7.192,16.063,16.063V512z"/>

                                        <path style={{fill:'#664239'}} d="M411.788,502.593l0.025-15.464c-0.311-8.598-7.36-15.478-16.034-15.478h-31.841l-0.024,14.947
                                            c-0.014,8.838-7.182,15.994-16.02,15.994H100.156V512h311.617h0.069L411.788,502.593z"/></svg>
                                    </div>
                                    <h5><a href="law-humanities-stream/index.html" title="Law Colleges in India">Law</a></h5>
                                    <p>1055 Colleges</p>
                                </div>
                            </li>  
                        </ul>
                    </div>
                    <div id="explore-exams" className="tab-content">
                        <ul className="row">
                            <li>
                                <div className="items">
                                    <div className="streamIcon engg"><svg version="1.1" id="engineering" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 502.596 502.596" xmlSpace="preserve">
                                            <path style={{fill:'#84DBFF'}} d="M336.98,141.061c-3.135-12.539-8.359-25.078-14.629-36.571l12.539-29.257l-43.886-42.841
                                            l-29.257,12.539c-11.494-6.269-22.988-11.494-36.571-14.629L214.727,0h-61.649l-11.494,30.302
                                            c-12.539,3.135-25.078,8.359-36.571,14.629L75.755,32.392L32.914,75.233l12.539,29.257c-6.269,11.494-11.494,22.988-14.629,36.571
                                            L0.522,152.555v61.649l30.302,11.494c3.135,12.539,8.359,25.078,14.629,36.571l-12.539,29.257L76.8,334.367l29.257-12.539
                                            c11.494,6.269,22.988,11.494,36.571,14.629l11.494,30.302h60.604l11.494-30.302c12.539-3.135,25.078-8.359,36.571-14.629
                                            l29.257,12.539l43.886-42.841l-12.539-29.257c6.269-11.494,11.494-22.988,14.629-36.571l30.302-11.494v-61.649L336.98,141.061z
                                             M183.38,258.09c-41.796,0-75.233-33.437-75.233-75.233s33.437-75.233,75.233-75.233s75.233,33.437,75.233,75.233
                                            S225.176,258.09,183.38,258.09z"/><g>

                                            <path style={{fill:'#54C0EB'}} d="M236.669,236.147c-29.257,29.257-76.278,29.257-105.535,0l-27.167,27.167
                                                c43.886,43.886,115.984,43.886,159.869,0s43.886-114.939,0-159.869l-27.167,27.167C265.927,159.869,265.927,206.89,236.669,236.147
                                                                                            z"/>

                                            <path style={{fill:'#54C0EB'}} d="M103.967,103.445c-43.886,43.886-43.886,114.939,0,159.869l27.167-27.167
                                                c-29.257-29.257-29.257-76.278,0-105.535s76.278-29.257,105.535,0l27.167-27.167C219.951,59.559,147.853,59.559,103.967,103.445z"
                                                                                            /></g>

                                            <path style={{fill:'#4CDBC4'}} d="M354.743,428.408c1.045-6.269,1.045-11.494,0-17.763l10.449-10.449l-10.449-26.122h-14.629
                                            c-3.135-4.18-8.359-8.359-12.539-12.539v-14.629l-26.122-10.449l-10.449,10.449c-6.269-1.045-11.494-1.045-17.763,0l-10.449-10.449
                                            l-26.122,10.449v14.629c-4.18,3.135-8.359,8.359-12.539,12.539h-14.629l-10.449,26.122l10.449,10.449
                                            c-1.045,6.269-1.045,11.494,0,17.763l-10.449,10.449l10.449,26.122h14.629c3.135,4.18,8.359,8.359,12.539,12.539v14.629
                                            l26.122,10.449l10.449-10.449c6.269,1.045,11.494,1.045,17.763,0l10.449,10.449l26.122-10.449v-14.629
                                            c4.18-3.135,8.359-8.359,12.539-12.539h14.629l10.449-26.122L354.743,428.408z M271.151,450.351
                                            c-17.763-7.314-26.122-27.167-18.808-43.886c7.314-17.763,27.167-26.122,43.886-18.808c17.763,7.314,26.122,27.167,18.808,43.886
                                            C307.722,449.306,287.869,457.665,271.151,450.351z"/>

                                            <path style={{fill:'#FF7058'}} d="M491.624,291.527c1.045-6.269,1.045-11.494,0-17.763l10.449-10.449l-10.449-26.122h-14.629
                                            c-3.135-4.18-8.359-8.359-12.539-12.539v-14.629l-26.122-10.449l-10.449,10.449c-6.269-1.045-11.494-1.045-17.763,0l-10.449-10.449
                                            l-26.122,10.449v14.629c-4.18,3.135-8.359,8.359-12.539,12.539h-14.629l-10.449,26.122l10.449,10.449
                                            c-1.045,6.269-1.045,11.494,0,17.763l-10.449,10.449l10.449,26.122h14.629c3.135,4.18,8.359,8.359,12.539,12.539v14.629
                                            l26.122,10.449l10.449-10.449c6.269,1.045,11.494,1.045,17.763,0l10.449,10.449l26.122-10.449v-14.629
                                            c4.18-3.135,8.359-8.359,12.539-12.539h14.629l10.449-26.122L491.624,291.527z M406.988,314.514
                                            c-17.763-7.314-26.122-27.167-18.808-43.886c7.314-17.763,27.167-26.122,43.886-18.808c17.763,7.314,26.122,27.167,18.808,43.886
                                            C444.604,313.469,424.751,321.829,406.988,314.514z"/></svg>
                                    </div>
                                    <h5><a href="engineering-entrance-exams/index.html" title="Engineering Exams in India">Engineering</a></h5>
                         
                               </div>

                                <div className="items">

                                    <div className="streamIcon bms"><svg version="1.1" id="nformation" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"  xmlSpace="preserve">

                                        <path d="M0,346.68v-310c0-5.504,4.704-10,10.448-10h491.104c5.744,0,10.448,4.496,10.448,10v310H0z"/><g style={{opacity:0.12}}>
                                        <rect x="21.328" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="56.24" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="91.072" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="125.944" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="160.8" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="195.688" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="230.56" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="265.44" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="300.312" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="335.184" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="370.08" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="404.928" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="439.8" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="474.64" y="50.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="21.328" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="56.24" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="91.072" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="125.944" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="160.8" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="195.688" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="230.56" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="265.44" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="300.312" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="335.184" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/>
                                        <rect x="370.08" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="404.928" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="439.8" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="474.64" y="82.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="21.328" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="56.24" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="91.072" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="125.944" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="160.8" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="195.688" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="230.56" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="265.44" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="300.312" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="335.184" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="370.08" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="404.928" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="439.8" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="474.64" y="114.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="21.328" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="56.24" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="91.072" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="125.944" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="160.8" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="195.688" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="230.56" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="265.44" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="300.312" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="335.184" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="370.08" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="404.928" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="439.8" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="474.64" y="146.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="21.328" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="56.24" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="91.072" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="125.944" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="160.8" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="195.688" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="230.56" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="265.44" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="300.312" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="335.184" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="370.08" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="404.928" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="439.8" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="474.64" y="178.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="21.328" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="56.24" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="91.072" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="125.944" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="160.8" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="195.688" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="230.56" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="265.44" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="300.312" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="335.184" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="370.08" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="404.928" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="439.8" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="474.64" y="210.616" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="21.328" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="56.24" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="91.072" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="125.944" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="160.8" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="195.688" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="230.56" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="265.44" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="300.312" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="335.184" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="370.08" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="404.928" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="439.8" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="474.64" y="242.576" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="21.328" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="56.24" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="91.072" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="125.944" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="160.8" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="195.688" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="230.56" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="265.44" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="300.312" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="335.184" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="370.08" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="404.928" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="439.8" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="474.64" y="274.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="21.328" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="56.24" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="91.072" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="125.944" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="160.8" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="195.688" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="230.56" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="265.44" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="300.312" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="335.184" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="370.08" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="404.928" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="439.8" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/><rect x="474.64" y="306.656" style={{fill:'#FFFFFF'}} width="16" height="16"/></g>

                                        <path style={{fill:'#D8D8D8'}} d="M512,346.68v42.664c0,5.872-4.704,10.672-10.448,10.672H10.448c-5.744,0-10.448-4.8-10.448-10.664
                                                                                    v-42.664L512,346.68L512,346.68z"/>

                                        <polygon style={{fill:'#BCBCBC'}} points="181.336,474.68 330.664,474.68 320,400.016 192,400.016 "/>

                                        <polygon style={{fill:'#AAAAAA'}} points="320,400.016 192,400.016 185.352,446.552 322.488,417.416 "/><rect x="144" y="474.656" style={{fill:'#D8D8D8'}} width="224" height="10.664"/>

                                        <polygon style={{fill:'#939393'}} points="192,400.016 320,400.016 320.72,405.056 188.68,423.28 "/>

                                        <polygon style={{fill:'#CCCCCC'}} points="299.136,249.256 199.944,149.2 102.744,246.408 97.088,240.752 199.968,137.864
                                            299.136,237.896 395.472,140.72 401.16,146.352 "/><circle style={{fill:'#FFFFFF'}} cx="99.912" cy="243.576" r="34.912"/><g>
                                            <circle style={{fill:'#E21B1B'}} cx="99.912" cy="243.576" r="15.368"/><circle style={{fill:'#E21B1B'}} cx="300.752" cy="243.576" r="34.912"/></g>
                                            <circle style={{fill:'#FFFFFF'}} cx="300.752" cy="243.576" r="15.368"/><circle style={{fill:'#E21B1B'}} cx="200" cy="143.536" r="48.688"/><g>
                                            <circle style={{fill:'#FFFFFF'}} cx="200" cy="143.536" r="21.424"/><circle style={{fill:'#FFFFFF'}} cx="398.312" cy="143.536" r="48.688"/></g>
                                            <circle style={{fill:'#E21B1B'}} cx="398.312" cy="143.536" r="21.424"/></svg>
                                    </div>
                                    <h5><a href="information-technology-entrance-exams/index.html" title="B.M.S. Exams in India">Information Technology</a></h5>
                                </div>
                            </li>
                            <li>

                                <div className="items">

                                    <div className="streamIcon com"><svg version="1.1" id="commerce" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"  xmlSpace="preserve">

                                    <path style={{fill:'#F6B545'}} d="M267.636,500.364h-256C4.655,500.364,0,495.709,0,488.727v-23.273
                                        c0-6.982,4.655-11.636,11.636-11.636h256c6.982,0,11.636,4.655,11.636,11.636v23.273
                                        C279.273,495.709,274.618,500.364,267.636,500.364z"/>

                                    <path style={{fill:'#FFCB5B'}} d="M221.091,465.455H0l0,0c0-6.982,4.655-11.636,11.636-11.636h209.455V465.455z"/><g>

                                    <path style={{fill:'#F19920'}} d="M221.091,465.455v11.636c0,6.982-4.655,11.636-11.636,11.636H0c0,6.982,4.655,11.636,11.636,11.636
                                                                                    h197.818h58.182c6.982,0,11.636-4.655,11.636-11.636v-23.273H221.091z"/>

                                    <path style={{fill:'#F19920'}} d="M34.909,488.727v-17.455c0-3.491-2.327-5.818-5.818-5.818s-5.818,2.327-5.818,5.818v17.455"/>

                                    <path style={{fill:'#F19920'}} d="M69.818,488.727v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455"
                                                                                    />

                                    <path style={{fill:'#F19920'}} d="M104.727,488.727v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455
                                                                                    "/>

                                    <path style={{fill:'#F19920'}} d="M139.636,488.727v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455
                                                                                    "/>

                                    <path style={{fill:'#F19920'}} d="M174.545,488.727v-17.455c0-3.491-2.327-5.818-5.818-5.818s-5.818,2.327-5.818,5.818v17.455"/>

                                    <path style={{fill:'#F19920'}} d="M209.455,488.727v-17.455c0-3.491-2.327-5.818-5.818-5.818s-5.818,2.327-5.818,5.818v17.455"/></g>

                                    <path style={{fill:'#F6B545'}} d="M290.909,453.818h-256c-6.982,0-11.636-4.655-11.636-11.636v-23.273
                                        c0-6.982,4.655-11.636,11.636-11.636h256c6.982,0,11.636,4.655,11.636,11.636v23.273
                                        C302.545,449.164,297.891,453.818,290.909,453.818z"/>

                                    <path style={{fill:'#FFCB5B'}} d="M244.364,418.909H23.273l0,0c0-6.982,4.655-11.636,11.636-11.636h209.455V418.909z"/><g>

                                    <path style={{fill:'#F19920'}} d="M244.364,418.909v11.636c0,6.982-4.655,11.636-11.636,11.636H23.273
                                        c0,6.982,4.655,11.636,11.636,11.636h197.818h58.182c6.982,0,11.636-4.655,11.636-11.636v-23.273H244.364z"/>

                                    <path style={{fill:'#F19920'}} d="M58.182,442.182v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455"
                                                                                    />

                                    <path style={{fill:'#F19920'}} d="M93.091,442.182v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455"
                                                />

                                    <path style={{fill:'#F19920'}} d="M128,442.182v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455"/>

                                    <path style={{fill:'#F19920'}} d="M162.909,442.182v-17.455c0-3.491-2.327-5.818-5.818-5.818s-5.818,2.327-5.818,5.818v17.455"/>

                                    <path style={{fill:'#F19920'}} d="M197.818,442.182v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455
                                                                                    "/>

                                    <path style={{fill:'#F19920'}} d="M232.727,442.182v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455
                                                                                    "/></g>

                                    <path style={{fill:'#F6B545'}} d="M314.182,360.727h-256c-6.982,0-11.636-4.655-11.636-11.636v-23.273
                                            c0-6.982,4.655-11.636,11.636-11.636h256c6.982,0,11.636,4.655,11.636,11.636v23.273
                                            C325.818,356.073,321.164,360.727,314.182,360.727z"/>

                                    <path style={{fill:'#FFCB5B'}} d="M267.636,325.818H46.545l0,0c0-6.982,4.655-11.636,11.636-11.636h209.455V325.818z"/><g>

                                    <path style={{fill:'#F19920'}} d="M267.636,325.818v11.636c0,6.982-4.655,11.636-11.636,11.636H46.545
                                        c0,6.982,4.655,11.636,11.636,11.636H256h58.182c6.982,0,11.636-4.655,11.636-11.636v-23.273H267.636z"/>

                                    <path style={{fill:'#F19920'}} d="M81.455,349.091v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455"
                                                                                    />

                                    <path style={{fill:'#F19920'}} d="M116.364,349.091v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455
                                                                                    "/>

                                    <path style={{fill:'#F19920'}} d="M151.273,349.091v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455
                                                                                    "/>

                                    <path style={{fill:'#F19920'}} d="M186.182,349.091v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455
                                                "/>

                                    <path style={{fill:'#F19920'}} d="M221.091,349.091v-17.455c0-3.491-2.327-5.818-5.818-5.818s-5.818,2.327-5.818,5.818v17.455"/>

                                    <path style={{fill:'#F19920'}} d="M256,349.091v-17.455c0-3.491-2.327-5.818-5.818-5.818s-5.818,2.327-5.818,5.818v17.455"/></g>

                                    <path style={{fill:'#F6B545'}} d="M290.909,314.182h-256c-6.982,0-11.636-4.655-11.636-11.636v-23.273
                                        c0-6.982,4.655-11.636,11.636-11.636h256c6.982,0,11.636,4.655,11.636,11.636v23.273
                                        C302.545,309.527,297.891,314.182,290.909,314.182z"/>

                                    <path style={{fill:'#FFCB5B'}} d="M244.364,279.273H23.273l0,0c0-6.982,4.655-11.636,11.636-11.636h209.455V279.273z"/><g>

                                    <path style={{fill:'#F19920'}} d="M244.364,279.273v11.636c0,6.982-4.655,11.636-11.636,11.636H23.273
                                        c0,6.982,4.655,11.636,11.636,11.636h197.818h58.182c6.982,0,11.636-4.655,11.636-11.636v-23.273H244.364z"/>

                                    <path style={{fill:'#F19920'}} d="M58.182,302.545v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455"
                                                                                    />

                                    <path style={{fill:'#F19920'}} d="M93.091,302.545v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455"
                                                />

                                    <path style={{fill:'#F19920'}} d="M128,302.545v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455"/>

                                    <path style={{fill:'#F19920'}} d="M162.909,302.545v-17.455c0-3.491-2.327-5.818-5.818-5.818s-5.818,2.327-5.818,5.818v17.455"/>

                                    <path style={{fill:'#F19920'}} d="M197.818,302.545v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455
                                                                                    "/>

                                    <path style={{fill:'#F19920'}} d="M232.727,302.545v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455
                                                                                    "/></g>

                                    <path style={{fill:'#F6B545'}} d="M267.636,407.273h-256C4.655,407.273,0,402.618,0,395.636v-23.273
                                        c0-6.982,4.655-11.636,11.636-11.636h256c6.982,0,11.636,4.655,11.636,11.636v23.273
                                        C279.273,402.618,274.618,407.273,267.636,407.273z"/>

                                    <path style={{fill:'#FFCB5B'}} d="M221.091,372.364H0l0,0c0-6.982,4.655-11.636,11.636-11.636h209.455V372.364z"/><g>

                                    <path style={{fill:'#F19920'}} d="M221.091,372.364V384c0,6.982-4.655,11.636-11.636,11.636H0c0,6.982,4.655,11.636,11.636,11.636
                                        h197.818h58.182c6.982,0,11.636-4.655,11.636-11.636v-23.273H221.091z"/>

                                    <path style={{fill:'#F19920'}} d="M34.909,395.636v-17.455c0-3.491-2.327-5.818-5.818-5.818s-5.818,2.327-5.818,5.818v17.455"/>

                                    <path style={{fill:'#F19920'}} d="M69.818,395.636v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455"
                                                                                    />

                                    <path style={{fill:'#F19920'}} d="M104.727,395.636v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455
                                                                                    "/>

                                    <path style={{fill:'#F19920'}} d="M139.636,395.636v-17.455c0-3.491-2.327-5.818-5.818-5.818c-3.491,0-5.818,2.327-5.818,5.818v17.455
                                                                                    "/>

                                    <path style={{fill:'#F19920'}} d="M174.545,395.636v-17.455c0-3.491-2.327-5.818-5.818-5.818s-5.818,2.327-5.818,5.818v17.455"/>

                                    <path style={{fill:'#F19920'}} d="M209.455,395.636v-17.455c0-3.491-2.327-5.818-5.818-5.818s-5.818,2.327-5.818,5.818v17.455"/></g>

                                    <path style={{fill:'#C97629'}} d="M488.727,424.727c-15.127-10.473-23.273-27.927-23.273-46.545
                                        c0-70.982-27.927-138.473-77.964-188.509l-50.036-50.036v-34.909l40.727-51.2C381.673,48.873,384,43.055,384,37.236
                                        c0-13.964-11.636-25.6-25.6-25.6h-44.218l-11.636,23.273l-23.273-23.273h-55.855c-13.964,0-25.6,11.636-25.6,25.6
                                        c0,5.818,2.327,11.636,5.818,16.291l40.727,51.2v34.909l-50.036,50.036c-50.036,50.036-77.964,117.527-77.964,188.509l0,0
                                        c0,18.618-8.145,36.073-23.273,46.545s-23.273,27.927-23.273,46.545l0,0c0,16.291,12.8,29.091,29.091,29.091h384
                                        c16.291,0,29.091-12.8,29.091-29.091l0,0C512,452.655,503.855,435.2,488.727,424.727z"/>

                                        <path style={{fill:'#B06328'}} d="M488.727,424.727c-15.127-11.636-23.273-29.091-23.273-47.709
                                            c1.164-73.309-32.582-141.964-83.782-194.327l-44.218-43.055v-34.909l40.727-51.2c6.982-8.145,8.145-19.782,2.327-30.255
                                            c-4.655-8.145-13.964-11.636-23.273-11.636c-8.145,0-12.8,9.309-10.473,16.291c1.164,2.327,2.327,5.818,2.327,9.309
                                            c0,5.818-2.327,11.636-5.818,16.291l-40.727,51.2v34.909h-58.182l-11.636,11.636h81.455l43.055,43.055
                                            c47.709,47.709,66.327,112.873,61.673,179.2c-1.164,19.782,6.982,38.4,22.109,50.036c1.164,1.164,2.327,2.327,3.491,2.327
                                            c17.455,18.618,2.327,50.036-24.436,50.036H70.982c2.327,12.8,13.964,23.273,27.927,23.273h337.455h29.091h17.455
                                            C499.2,499.2,512,486.4,512,470.109v-2.327C512,450.327,502.691,435.2,488.727,424.727z"/>

                                        <path style={{fill:'#FFCB5B'}} d="M343.273,139.636H238.545c-9.309,0-17.455-8.145-17.455-17.455l0,0
                                            c0-9.309,8.145-17.455,17.455-17.455h104.727c9.309,0,17.455,8.145,17.455,17.455l0,0
                                            C360.727,131.491,352.582,139.636,343.273,139.636z"/>

                                        <path style={{fill:'#FFE278'}} d="M238.545,104.727h58.182c3.491,0,5.818,2.327,5.818,5.818l0,0c0,3.491-2.327,5.818-5.818,5.818
                                            h-58.182c-3.491,0-5.818-2.327-5.818-5.818l0,0C232.727,107.055,235.055,104.727,238.545,104.727z"/>

                                        <path style={{fill:'#F6B545'}} d="M343.273,104.727h-5.818v11.636c0,6.982-4.655,11.636-11.636,11.636H222.255
                                            c2.327,6.982,9.309,11.636,16.291,11.636h104.727c9.309,0,17.455-8.145,17.455-17.455S352.582,104.727,343.273,104.727z"/>

                                        <path style={{fill:'#F19920'}} d="M308.364,128h34.909c3.491,0,5.818,2.327,5.818,5.818l0,0c0,3.491-2.327,5.818-5.818,5.818h-34.909
                                            c-3.491,0-5.818-2.327-5.818-5.818l0,0C302.545,130.327,304.873,128,308.364,128z"/><rect x="279.273" y="139.636" style={{fill:'#F6B545'}} width="23.273" height="93.091"/>

                                        <polygon style={{fill:'#F19920'}} points="279.273,139.636 279.273,151.273 290.909,151.273 290.909,232.727 302.545,232.727
                                            302.545,151.273 302.545,139.636 "/><circle style={{fill:'#F6B545'}} cx="290.909" cy="314.182" r="93.091"/>

                                        <path style={{fill:'#B06328'}} d="M361.891,254.836C375.855,271.127,384,290.909,384,314.182c0,51.2-41.891,93.091-93.091,93.091
                                            c-23.273,0-43.055-8.145-59.345-22.109c17.455,20.945,43.055,33.745,70.982,33.745c51.2,0,93.091-41.891,93.091-93.091
                                            C395.636,296.727,382.836,271.127,361.891,254.836z"/><circle style={{fill:'#FFCB5B'}} cx="290.909" cy="314.182" r="81.455"/>

                                        <path style={{fill:'#F19920'}} d="M372.364,314.182c0,45.382-36.073,81.455-81.455,81.455v11.636c51.2,0,93.091-41.891,93.091-93.091
                                            H372.364z"/>

                                        <path style={{fill:'#FFE27A'}} d="M290.909,232.727v-11.636c-51.2,0-93.091,41.891-93.091,93.091h11.636
                                            C209.455,268.8,245.527,232.727,290.909,232.727z"/>

                                        <path style={{fill:'#E78825'}} d="M302.545,302.545h-23.273c-6.982,0-11.636-4.655-11.636-11.636c0-6.982,4.655-11.636,11.636-11.636
                                            h34.909c6.982,0,11.636-4.655,11.636-11.636c0-6.982-4.655-11.636-11.636-11.636h-11.636l0,0c0-6.982-4.655-11.636-11.636-11.636
                                            c-6.982,0-11.636,4.655-11.636,11.636l0,0c-19.782,0-34.909,15.127-34.909,34.909s15.127,34.909,34.909,34.909h23.273
                                            c6.982,0,11.636,4.655,11.636,11.636s-4.655,11.636-11.636,11.636h-34.909c-6.982,0-11.636,4.655-11.636,11.636
                                            c0,6.982,4.655,11.636,11.636,11.636h11.636l0,0c0,6.982,4.655,11.636,11.636,11.636c6.982,0,11.636-4.655,11.636-11.636l0,0
                                            c19.782,0,34.909-15.127,34.909-34.909S322.327,302.545,302.545,302.545z"/></svg>
                                    </div>
                                    <h5><a href="commerce-banking-entrance-exams/index.html" title="Commerce Exams in India">Commerce &amp; Banking</a></h5>
                                </div>

                                <div className="items">

                                    <div className="streamIcon arts"><svg version="1.1" id="arts" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 460.001 460.001" xmlSpace="preserve">

                                        <path style={{fill:'#EDEEF0'}} d="M92.122,230c0,25.529-13.223,47.971-33.193,60.848c0,0,272.328,0,297.606,0
                                                                                    s59.403-17.19,59.403-60.848s-34.125-60.848-59.403-60.848s-297.606,0-297.606,0C78.899,182.029,92.122,204.471,92.122,230z"/>

                                        <path style={{fill:'#E5C400'}} d="M29.873,153.333h323.586c42.275,0,76.668,34.393,76.668,76.667c0,42.276-34.393,76.667-76.668,76.667
                                                                                    H29.873v-29.816h323.586c25.835,0,46.852-21.016,46.852-46.851c0-25.833-21.018-46.851-46.852-46.851H29.873V153.333z"/>

                                        <path style={{opacity:0.3, fill:'#5B5B5F'}} d="M92.122,230c0,17.877-6.501,34.226-17.245,46.851H29.873
                                                                                    v29.816h323.586c42.275,0,76.668-34.391,76.668-76.667L92.122,230L92.122,230z"/>

                                        <path style={{fill:'#EDEEF0'}} d="M367.878,383.333c0,25.529,13.223,47.971,33.193,60.848c0,0-272.328,0-297.606,0
                                                                                    s-59.403-17.19-59.403-60.848s34.125-60.848,59.403-60.848s297.606,0,297.606,0C381.102,335.363,367.878,357.804,367.878,383.333z"
                                                                                    />

                                        <path style={{fill:'#C8523B'}} d="M430.128,306.667H106.541c-42.275,0-76.668,34.393-76.668,76.667
                                                                                    c0,42.276,34.393,76.667,76.668,76.667h323.586v-29.816H106.541c-25.835,0-46.852-21.016-46.852-46.851
                                                                                    c0-25.833,21.018-46.851,46.852-46.851h323.586V306.667z"/>

                                        <path style={{opacity:0.3, fill:'#5B5B5F'}} d="M367.878,383.333c0,17.877,6.501,34.226,17.245,46.851h45.004
                                                                                    V460H106.541c-42.275,0-76.668-34.391-76.668-76.667H367.878z"/>

                                        <path style={{fill:'#EDEEF0'}} d="M367.878,76.667c0,25.529,13.223,47.971,33.193,60.848c0,0-272.328,0-297.606,0
                                                                                    s-59.403-17.19-59.403-60.848s34.125-60.848,59.403-60.848s297.606,0,297.606,0C381.102,28.696,367.878,51.137,367.878,76.667z"/>

                                        <path style={{fill:'#ABCB57'}} d="M430.128,0H106.541C64.266,0,29.873,34.393,29.873,76.666c0,42.276,34.393,76.667,76.668,76.667
                                                                                    h323.586v-29.816H106.541c-25.835,0-46.852-21.016-46.852-46.851c0-25.833,21.018-46.851,46.852-46.851h323.586V0z"/>

                                        <path style={{opacity:0.3, fill:'#5B5B5F'}} d="M367.878,76.667c0,17.877,6.501,34.226,17.245,46.851h45.004
                                            v29.816H106.541c-42.275,0-76.668-34.391-76.668-76.667H367.878z"/></svg>
                                    </div>
                                    <h5><a href="arts-entrance-exams/index.html" title="Arts Exams in India">Arts &amp; Humanities</a></h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="block careerBlock">
                { /* <!-- CAREER OPTION start --> */}
                <h2>Top Courses</h2>

                <div className="dataContent">
                    <h3>Choose which course you want to pursue</h3>

                    <p>100+ Courses to choose from</p>
                    <div className="content col-lg-4 col-md-4 col-sm-12">
                        <ul>
                            <li><a href="courses/b-pharma/index.html" title="B.Pharma">B.Pharma</a></li>
                            <li><a href="courses/journalism/index.html" title="Journalism">Journalism</a></li>
                            <li><a href="bachelor-of-science-bsc/index.html" title="BSc">BSc</a></li>
                            <li><a href="courses/pgdm/index.html" title="PGDM">PGDM</a></li>
                            <li><a href="courses/ba-llb/index.html" title="BA LLB">BA LLB</a></li>

                        </ul>
                    </div>
                    <div className="image col-lg-4 col-md-4 col-sm-12">
                        <ul>
                            <li><a href="courses/b-p-ed/index.html" title="B.P.Ed">B.P.Ed</a></li>
                            <li><a href="courses/bachelor-of-paramedical-technology-bpmt/index.html" title="BPMT">BPMT</a></li>
                            <li><a href="courses/master-of-surgery-ms/index.html" title="Master of Surgery">Master of Surgery (MS)</a></li>
                            <li><a href="courses/bachelor-of-accounting-and-finance-baf/index.html" title="BAF Course">BAF Course</a></li>
                            <li><a href="courses/mds/index.html" title="Master of Dental Surgery">Master of Dental Surgery</a></li>
                            <li><a href="courses/aviation-courses/index.html" title="Aviation Courses">Aviation Courses</a></li>
                        </ul>
                    </div>
                    <div className="image col-lg-4 col-md-4 col-sm-12">
                        <ul>
                            <li><a href="courses/general-nursing-and-midwifery-gnm/index.html" title="GNM">GNM</a></li>
                            <li><a href="courses/mbbs/index.html" title="MBBS">MBBS</a></li>
                            <li><a href="courses/bca/index.html" title="BCA">BCA</a></li>
                            <li><a href="courses/btech/index.html" title="Bachelor of Technology (B.Tech)">Bachelor of Technology (B.Tech)</a></li>
                            <li><a href="courses/master-of-business-administration-mba/index.html" title="Masters of Business Administration">MBA</a></li>
                            <li><a href="courses/mca/index.html" title="MCA">MCA</a></li>
                        </ul>
                        <div className="button text-center" style={{'marginBottom':'15px'}}>
                            <a href="courses/index.html" target="_blank" title="Explore Courses">Explore Courses</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block popularCollegeBlock">
                { /* <!-- POPULAR COLLEGE start --> */}
                <h2>Popular Trending Colleges of the India</h2>
                <div className="dataContent">
                    <ul className="row">
                        <li>
                            <div className="box">

                                <div className="collegeLogo"><img src="/cp-assets/images/logo/bulogo.jpg" data-src="/cp-assets/images/logo/bulogo.jpg?tr=h-155,w-135" alt="Brainware University" />
                                </div>
                                <h5><a href="colleges/brainware-university.html">Brainware University, Kolkata</a></h5>
                            </div>

                            <div className="box">

                                <div className="collegeLogo"><img src="/cp-assets/images/logo/01.jpg" data-src="/cp-assets/images/logo/01.jpg?tr=h-155,w-135" alt="Echelon Institute of Technology" />
                                </div>
                                <h5><a href="colleges/echelon-institute-of-technology.html">Echelon Institute of Technology, Faridabad</a></h5>
                            </div>
                        </li>
                        <li>
                            <div className="box">

                                <div className="collegeLogo"><img src="/cp-assets/images/logo/02.png" data-src="/cp-assets/images/logo/02.png?tr=h-155,w-135" alt="Dronacharya College of Engineering" />
                                </div>
                                <h5><a href="colleges/dronacharya-college-of-engineering.html">Dronacharya College of Engineering, Gurgaon</a></h5>
                            </div>

                            <div className="box">

                                <div className="collegeLogo"><img src="/cp-assets/images/logo/rims.jpeg" data-src="/cp-assets/images/logo/rims.jpeg?tr=h-155,w-135" alt="Ramachandran International Institute of Management" />
                                </div>
                                <h5><a href="colleges/ramachandran-international-institute-of-management.html">Ramachandran International Institute of Management, Pune</a></h5>
                            </div>
                        </li>
                        <li>
                            <div className="box">

                                <div className="collegeLogo"><img src="/cp-assets/images/logo/abha-gaikwad.jpg" data-src="/cp-assets/images/logo/abha-gaikwad.jpg?tr=h-155,w-135" alt="Abha Gaikwad-Patil College of Engineering" />
                                </div>
                                <h5><a href="colleges/abha-gaikwad-patil-college-of-engineering.html">Abha Gaikwad-Patil College of Engineering, Nagpur</a></h5>
                            </div>

                            <div className="box">

                                <div className="collegeLogo"><img src="/cp-assets/images/logo/04.jpeg" data-src="/cp-assets/images/logo/04.jpeg?tr=h-155,w-135" alt="JECRC UDML College of Engineering" />
                                </div>
                                <h5><a href="colleges/jecrc-udml.html">JECRC UDML College of Engineering, Jaipur</a></h5>
                            </div>
                        </li>
                        <li>
                            <div className="box">

                                <div className="collegeLogo"><img src="/cp-assets/images/logo/05.png" data-src="/cp-assets/images/logo/05.png?tr=h-155,w-135" alt="Symbiosis Institute of Business Management" />
                                </div>
                                <h5><a href="colleges/symbiosis-bangalore.html">Symbiosis Institute of Business Management, Bangalore</a></h5>
                            </div>

                            <div className="box">

                                <div className="collegeLogo"><img src="/cp-assets/images/logo/logo.png" data-src="/cp-assets/images/logo/logo.png?tr=h-155,w-135" alt="SJES College Of Management Studies" />
                                </div>
                                <h5><a href="colleges/sjes-college-of-management-studies.html">SJES College Of Management Studies, Bangalore</a></h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            { /*<!-- POPULAR COLLEGE end --> */}

            <div className="block pyschoBlock">
                { /*<!-- PYSCHOMETRIC BLOCK start --> */}

                <div className="box">

                    <div className="image col-lg-5 col-md-6 col-sm-12"><img src="/cp-assets/media/img/news/LAW-STUDENT-2.jpeg" alt="" />
                    </div>

                    <div className="message col-lg-7 col-md-6 col-sm-12">
                        <h4>choose the course with help of consultant?</h4>

                        <p style={{color:'#FFF'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                        <div className="button"><a href="career-test/index.html" title="Perdict Your Career">Book Your Career consultant</a>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- PYSCHOMETRIC BLOCK end -->*/}


            <div className="block examUpdateBlock">
                {/*<!-- EXAM UPDATE start -->*/}
                <h2>Upcomming Exam Updates</h2>

                <div className="dataContent">
                    <ul className="row">
                        <li>

                            <div className="box">
                                <h5><a href="exam/cat.html"> CAT</a></h5>

                                <div className="date">
                                    01 Nov, 2020

                                </div>

                                <p><a href="exam/cat/best-books.html" title="CAT Preparation Books for Verbal Ability &amp; Reading Comprehension">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></p>

                                <div className="cut-off"><a href="exam/cat/cut-off-results.html">Check CutOffs</a></div>
                            </div>
                        </li>
                        <li>
                        <div className="box "><h5><a href="exam/ipu-cet.html "> IPU CET</a></h5>
                            <div className="date ">01 Nov, 2020</div>
                            <p><a href="exam/ipu-cet.html " title="About IPU CET 2020 (Choice Preference Link Activated) ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></p>

                            <div className="cut-off "><a href="exam/ipu-cet/cut-off-results.html">Check CutOffs</a></div>
                            </div>
                        </li>
                        <li>
                            <div className="box">
                                <h5><a href="jee-main.html"> JEE Main</a></h5>
                                <div className="date">
                                    30 Oct, 2020
                                </div>
                                <p><a href="exam/jee-main/seat-allotment.html" title="JEE Main 2020 Round 4 Seat Allotment (Out)">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></p>
                                <div className="cut-off"><a href="exam/jee-main/cut-off-results.html">Check CutOffs</a></div>
                            </div>
                        </li>
                        <li>
                            <div className="box "><h5><a href="jee-advanced.html "> JEE Advanced</a></h5>
                                <div className="date ">30 Oct, 2020 </div>
                                <p><a href="exam/jee-advanced/seat-allotment.html " title="JEE Advanced 2020 Seat Allotment (4th round Seat Allotment from 30 Oct) ">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</a></p>
                                <div className="cut-off "><a href="exam/jee-advanced/cut-off-results.html">Check CutOffs</a></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="block exploreCollege streamLanding">
                <section className="latestUp examBlock whiteBlock">

                    <div className="container">

                        <div className="centerAlign">
                            <h2>Top Colleges </h2>
                        </div>

                        <div className="aboutCourse">
                            <ul>
                                <li><a href="btech-colleges-in-india.html" title="B.Tech. (Bachelor of Technology) Colleges in India">

                                B.Tech
                                </a></li>
                                <li><a href="mbbs-colleges-in-india/index.html" title="M.B.B.S. (Bachelor of Medicine and Bachelor of Surgery) Colleges in India">

                                MBBS
                                </a></li>
                                <li><a href="bba-colleges-in-india/index.html" title="B.B.A. (Bachelor of Business Administration) Colleges in India">

                                BBA
                                </a></li>
                                <li><a href="bms-colleges-in-india/index.html" title="B.M.S. (Bachelor of Management Studies) Colleges in India">

                                BMS
                                </a></li>
                                <li><a href="mba_degree-colleges-in-india/index.html" title="M.B.A. (Master of Business Administration) Colleges in India">

                                MBA
                                </a></li>
                                <li><a href="ma-colleges-in-india/index.html" title="M.A. (Master of Arts) Colleges in India">

                                MA
                                </a></li>
                                <li><a href="bed-colleges-in-india/index.html" title="B.Ed. (Bachelor of Education) Colleges in India">

                                B.Ed
                                </a></li>
                                <li><a href="mha-colleges-in-india/index.html" title="M.H.A. (Master of Hospital Administration) Colleges in India">

                                MHA
                                </a></li>
                                <li><a href="bmc-colleges-in-india/index.html" title="B.M.C. (Bachelor of Mass Communication) Colleges in India">

                                BMC
                                </a></li>
                                <li><a href="mca-colleges-in-india/index.html" title="M.C.A. (Master of Computer Applications) Colleges in India">

                                MCA
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Landing;