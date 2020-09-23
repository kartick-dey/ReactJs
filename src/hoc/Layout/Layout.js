import React, { Component } from 'react';
import './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false
	}
	sideDrawerClosedhandler = () => {
		this.setState({showSideDrawer: false});
	}
	sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !prevState.showSideDrawer};
    });
  }
	render() {
		return (
			<div className="Content">
				<Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
				<SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedhandler} />
				<main>
					{this.props.children}
				</main>
			</div>
		);
	}
}


export default Layout;
