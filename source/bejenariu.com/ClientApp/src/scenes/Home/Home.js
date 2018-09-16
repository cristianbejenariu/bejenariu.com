import React from 'react';
import { connect } from 'react-redux';

import './Home.css';

import logoUrl from './images/svg/figure.svg';
import Circle from '../../components/Circle';

const Home = props => (
        <div className="front">
            <div className="front__wrapper">
                <Circle />
                <div className="front__content">
                    <img className="front__figure" src={logoUrl} alt="Hello World!" />
                    <h1 className="heading front__title">Hello</h1>
                    <h2 className="heading front__subtitle -case-upper">World!</h2>
                </div>
                <a href="mailto:cristian@bejenariu.com" className="button" alt="Get in touch with cristian@bejenariu.com">Get in contact</a>
                <ul className="social">
                    <li className="social__item"><a href="https://www.facebook.com/cristi.bejenariu" title="Get in touch with Cristian on Facebook!"><span className="icon -facebook" /></a></li>
                    <li className="social__item"><a href="https://www.linkedin.com/in/cristianbejenariu" title="Get in touch with Cristian on LinkedIn!"><span className="icon -linkedin" /></a></li>
                </ul>
            </div>
        </div>
);

export default connect()(Home);
