import React, { Component } from 'react'
import Descriptions from './Descriptions';

import '../index.css' 

class App extends Component {
	state = {

	}
	render() {
			return (
				<div className="container app" >
					<div>  
                        <div className="head head-left">
							<i className="fa fa-bars"></i>
						</div>
                        <div className="head head-center">
							upTrader
						</div>
                        <div className="head head-right">
							<i className="fa fa-sign-in"></i>
						</div>
                    </div>
					<div class="box">
						<div class="container-1">
							<span class="icon"><i class="fa fa-search"></i></span>
							<input type="search" id="search" placeholder="Search..." />
						</div>
                    </div>
					<div className="circles-container">
						{this.menuOutput()}
					</div>					
					<div className="description-block">
						{this.descriptionOutput()}
                    </div>
					<div className="footer">
                        { this.props.footerOutput() }
                    </div>
				</div>
		)
	}

	menuOutput =()=> {
        return (
        this.props.menuIcons.map((item, index) => {
            return (
				<div className="circles-blocks" onClick = { this.props.menuToggle.bind(this, index) } key={index}>
					<div className={(this.props.showMenu[index]) ? 'circles-checked' : 'circles'}>  
						<div className="circles-content">
						<div className="circles-content-icons">
							<i className={item}></i>
						</div>
						{ ((this.props.windowWidth > 800)) ?
						<div className="circles-content-texts">
							{ this.props.menuTexts[index] }
						</div> : ''}
						</div>
					</div>
				</div>
            )
        }))
	}

	descriptionOutput =()=> {
        return (
        this.props.menuIcons.map((item, index) => {
            return (
				<div key={index}>
					{ (this.props.showMenu[index]) ? <Descriptions showMenu = { this.props.showMenu } /> : ''}
				</div>
            )
        }))
	}

}

export default App;