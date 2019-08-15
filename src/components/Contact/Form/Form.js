import React from 'react';

import './Form.scss';

const form = () => (
    <form className="form" action="#/">
            <input type="text" className="form__input" id="full-name" placeholder="Full Name" required />
            <input type="email" className="form__input" id="email" placeholder="Email" required />
            <textarea className="form__textarea" placeholder="Your Message" />
            <button className="form__button">Submit</button>
    </form>
)

export default form;