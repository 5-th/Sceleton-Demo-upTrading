import React, { Component } from 'react'
import Descriptions from './Descriptions';
import '../index.css' 

class Mobile extends Component {
	state = {

	}
	render() {
			return (
				<div className="container mobile" ref = { this.getWindowWidth } >
					<div>  
                        <div className="head head-left"><i className="fa fa-bars"></i></div>
                        <div className="head head-center">upTrader</div>
                        <div className="head head-right"><i className="fa fa-sign-in"></i></div>
                        
                    </div>
  
                    <div class="box">
                        <div class="container-1">
                            <span class="icon"><i class="fa fa-search"></i></span>
                            <input type="search" id="search" placeholder="Search..." />
                        </div>
                    </div>

                    <div className="title"> 
                        Выберите способ заработка 
                    </div>

                    { this.menuOutput() }
                    
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
                <div>
                    <div className="menu-block" onClick = { this.props.menuToggle.bind(this, index) } key={index}> 
                        <div className="menu-block-left">
                            <i className={item}></i>
                        </div>
                        <div className="menu-block-center">
                            <span className="menu-text">{ this.props.menuTexts[index] }</span> 
                        </div>
                        <div className="menu-block-right">
                            <i className={(this.props.showMenu[index]) ? 'fa fa-angle-down' : 'fa fa-angle-up'} ></i>
                        </div>
                    </div>
                    <div>
                        { (this.props.showMenu[index]) ? <Descriptions showMenu = { this.props.showMenu } /> : ''}  
                    </div>
                </div>
            )
        }))
    }
}

export default Mobile;