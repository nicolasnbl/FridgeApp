// Navigation/Navigation.js

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MainPage from '../Screen/MainPage'
import Connexion from '../Screen/Connexion'
import CreateFridgePage from '../Screen/CreateFridgePage'
import DetailFridgePage from '../Screen/DetailFridgePage'
import LoadingPage from '../Screen/LoadingPage'
import Profil from '../Screen/Profil'

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
  DetailFridgePage: {
    screen: DetailFridgePage,
    navigationOptions: {
    title: 'Detail Fridge'
    }
  },
  LoadingPage: {
    screen: LoadingPage
  },
  Profil: {
    screen: Profil
  }
  
  
})

export default createAppContainer(MainPageStackNavigator)