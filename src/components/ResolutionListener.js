import React, { Component } from 'react'
import App from './App'
import Mobile from './Mobile'

import '../index.css' 

class ResulutionListener extends Component {
	state = {
		windowWidth: window.innerWidth,
		windowHeight: window.innerHeight,
		showMenu: [true, false, false],
		menuIcons: ["fa fa-bar-chart", "fa fa-briefcase", "fa fa-group"],
        menuTexts: ["Самостоятельно торговать", "Инвестировать", "Привлечение инвесторов"],
		footerIcons: ["fa fa-facebook-square", "fa fa-google-plus-square", "fa fa-youtube-play", "fa fa-twitter-square", "fa fa-vk", "fa fa-linkedin-square"]
	}
	render() {
			return (
				<div ref = { this.getWindowWidth } >
					{/* <div> ширина: { this.state.windowWidth } x { this.state.windowHeight }  </div> */}
                    {(this.state.windowWidth > 550) ? 
					<App windowWidth={this.state.windowWidth} showMenu={ this.state.showMenu } menuIcons={ this.state.menuIcons } menuTexts={ this.state.menuTexts } footerOutput={ this.footerOutput } menuToggle={ this.menuToggle } /> : 
					<Mobile showMenu={ this.state.showMenu } menuIcons={ this.state.menuIcons } menuTexts={ this.state.menuTexts } footerOutput={ this.footerOutput } menuToggle={ this.menuToggle } />}
				</div>
		)
	}

	getWindowWidth =()=> {
		window.addEventListener('resize', this.handleResize);
	}

	handleResize =()=> {
		this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight })
	}

	menuToggle =(index)=> {
        let tempArr = this.state.showMenu.slice()
        tempArr.map((elem, id) => {
            ( index === id || tempArr[id]) ? tempArr[id] = !tempArr[id] : tempArr[id]
        })
        this.setState({ showMenu: tempArr })
    }

	footerOutput =()=> {
        return (
            this.state.footerIcons.map((item, index) => {
                return (
                    <div key={index} className="footer-item">
                            <i className={item}></i>
                    </div>
                )
            })
        )
    }
}

export default ResulutionListener;