
//Register Screen for Navigation
import ProductDetailList from '../Controls/ProductDetailList';
import ProductList from '../Controls/ProductList';
import { Navigation } from 'react-native-navigation';

export default() => {
    Navigation.registerComponent('example.FirstTabScreen', ()=> ProductList);
    Navigation.registerComponent('example.SecondTabScreen', ()=> ProductDetailList);
    Navigation.startTabBasedApp({
        tabs: [
            { label: 'Products',
                screen: 'example.FirstTabScreen',
                icon: require( '../Images/1.png'),
                selectedIcon: require('../Images/1.png'),
                title: 'Products',
            },
            { label: 'Products Details',
                screen: 'example.SecondTabScreen',
                icon: require( '../Images/2.png'),
                selectedIcon: require('../Images/2.png'),
                title: 'Products Details',
            },  
        ],
    })
    
};


