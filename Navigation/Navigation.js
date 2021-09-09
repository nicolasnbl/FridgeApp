// Navigation/Navigation.js

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MainPage from '../Component/MainPage'
import Connexion from '../Component/Connexion'
import CreateFridgePage from '../Component/CreateFridgePage'

const MainPageStackNavigator = createStackNavigator({
  MainPage: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: MainPage,
    navigationOptions: {
      title: 'Main Page'
    }
  },
  Connexion: {
    screen: Connexion,
    navigationOptions: {
    title: 'Connexion'
    }
  },
  CreateFridgePage: {
    screen: CreateFridgePage,
    navigationOptions: {
    title: 'Add Fridge'
    }
  },
  
  
})

export default createAppContainer(MainPageStackNavigator)