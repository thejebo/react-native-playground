import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NetInfo } from 'react-native'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

import { MenuContext } from 'react-native-popup-menu';

import LoginScreen from '../screens/Login'
import DrawerNavigation from './DrawerNavigation'
import EntrySaveScreen from '../screens/entries/Save'
import { setConnectivity } from '../redux/modules/network/actions'

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: DrawerNavigation },
  EntrySave: { screen: EntrySaveScreen },
});


class AppWithNavigationState extends Component {
	
	componentWillMount = () => {
		NetInfo.isConnected.addEventListener(
		  'connectionChange',
		  this.onConnectivityChange
		);
	}
	componentWillUnMount = () => {
		NetInfo.isConnected.removeEventListener(
		  'connectionChange',
		  this.onConnectivityChange
		);
	}
	onConnectivityChange = (connected) => {
		this.props.dispatch(setConnectivity(connected))
	}

	render() {
		const dispatch = this.props.dispatch;
		const nav = this.props.nav;
		return (
			<MenuContext>
  			<AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
			</MenuContext>
		)
	}

}
AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);