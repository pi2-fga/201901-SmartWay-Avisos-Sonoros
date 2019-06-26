import React, {Component} from 'react';
import {createStackNavigator}  from 'react-navigation';

import Home from './components/home';
import QRCode from './components/qrcode/QRCode'
import CrosswalkDetection from './components/crosswalk/CrosswalkDetector';
import Favorites from './components/favorites/Favorites';
import Map from './components/map/Map';
import BusLine from './components/busLine/BusLine';
import FavoritesBusLines from './components/favorites/FavoritesBus';
import AddFavoriteLocation from './components/favorites/AddFavoriteLocation';
import SubmitFavoriteLocation from './components/favorites/SubmitFavoriteLocation';
import FavoriteDirection from './components/favorites/FavoriteDirection';

const RoutesNavigation = createStackNavigator({
    Home: Home,
    QRCode: QRCode,
    Crosswalk: CrosswalkDetection,
    Favorites: Favorites,
    Map: Map,
    BusLine: BusLine,
    FavoritesBusLines: FavoritesBusLines,
    AddFavoriteLocation: AddFavoriteLocation,
    SubmitFavoriteLocation: SubmitFavoriteLocation,
    FavoriteDirection: FavoriteDirection
});

export default class Routes extends Component {
    render() {
        return (
            <RoutesNavigation />
        );
    }
}
  