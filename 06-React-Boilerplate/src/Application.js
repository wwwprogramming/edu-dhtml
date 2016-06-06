import React from 'react';

import Header from './Header';
import Footer from './Footer';

import About from './About';

import moment from "moment";

export default class Application extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                    showAbout: false,
                    time: moment()
                }
                // bind this to this class when calling onClick handler
            this._handleShowAbout = () => this.handleShowAbout();
        }
        handleShowAbout() {
            console.log("handleShowAbout()");
            console.log(this);
            console.log(this.state);
            this.setState({
                showAbout: !this.state.showAbout
            });
        }
        tick() {
            this.setState({
                time: moment()
            });
        }
        componentDidMount() {
            // componentDidMount is called by react
            //this.timer = setInterval(this.tick.bind(this), 500);
            console.log(".")
            this.timer = setInterval(() => {this.tick()}, 500);
        }

        render() {
                var divStyle = {
                    minHeight: '300px',
                    backgroundColor: '#F9F9F9'
                };

                var cursorStyle = {
                    cursor: 'pointer'
                }


                return ( <div style={divStyle}>
                    <Header />
                    <p> This is a Boilerplate
                    for simple React Application {
                        this.state.showAbout ? "X" : "Y"
                    } </p> 
                    {!this.state.showAbout ?
                            <div style={cursorStyle} onClick={this._handleShowAbout}>
                            <span className="clock"> Now is the time {this.state.time.format("DD.MM.YYYY HH:mm:ss")}
                            </span></div>
                        : null
                    }
                    {this.state.showAbout ? 
                        <About handleOk={this._handleShowAbout}/> 
                        : null
                    }
                    <Footer />
                    </div>);
                    }
                }