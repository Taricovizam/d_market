import React from 'react';
import reactDom from 'react-dom';
// import { render } from 'react-dom';
import "./index.css"

// ------------------------------

import Header from './components/Header';

function Dmarket() {
    return (
        <>
            <Header />

        </>
    )
};

reactDom.render(<Dmarket />, document.getElementById("root"))