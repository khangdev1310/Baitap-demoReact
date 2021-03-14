import Header from "./Header";
import Navigation from "./Navigation";

import React, { Component } from 'react'
import Page from "./Page";
import Footer from "./Footer";

export default class Baitap extends Component {
    render() {
        return (
            <div>
                <Header/>,
                <Navigation/>,
                <Page/>,
                <Footer/>
            </div>
        )
    }
}
