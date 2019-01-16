import React, { Component } from 'react';
import CountUp from 'react-countup';
import SocialLinks from './socialLinks';

class Footer extends Component {
    state = {
        countupDuration: 6
    }

    footerRenderer(pathname) {
        if (pathname === '/About') {
            return (
                <SocialLinks />
            )
        } else if (pathname === '/TablePicker' || pathname === '/Food-menu') {
            return (
                null
            )
        } else if (pathname === '/Location') {
            return (
                <div className="row">
                    <div className="col location--footer">
                        <p>
                            Carrer Coves, 37
                        </p>
                        <p>
                            07589 Capdepera
                        </p>
                        <p>
                            Illes Balears
                        </p>
                        <p>
                            Spain
                        </p>

                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="row">
                    <div className="col"></div>
                    <div className="col footer-item">
                        <div className="footer-item--main-text">
                            <CountUp end={3657} duration={this.state.countupDuration} />
                        </div>
                        <div className="footer-item--sub-text">
                            <span>Dinners served</span>
                        </div>
                    </div>

                    <div className="col footer-item">
                        <div className="footer-item--main-text">
                            <CountUp end={6789} duration={this.state.countupDuration} />
                        </div>
                        <div className="footer-item--sub-text">
                            <span>Happy customers</span>
                        </div>
                    </div>

                    <div className="col footer-item">
                        <div className="footer-item--main-text">
                            <CountUp end={34} duration={this.state.countupDuration} />
                        </div>
                        <div className="footer-item--sub-text">
                            Awards
                        </div>
                    </div>

                    <div className="col footer-item">
                        <div className="footer-item--main-text">
                            0
                        </div>
                        <div className="footer-item--sub-text">
                            Plates broken
                        </div>
                    </div>
                    <div className="col footer-item"></div>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="container footer text-center" id="footer">
                {this.footerRenderer(window.location.pathname)}
            </div>
        )
    }
}

export default Footer;