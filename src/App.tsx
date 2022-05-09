import React from 'react';
import './App.css';
import MovieCard from './components/FeaturedMovies';
import ToggleTheme from './components/Drawer';
import HeroSection from './components/HeroSection';
import PlanCard from './components/PlanCard';
import FreeMovies from './components/FreeMovies';
import AnsweredQuestions from './components/AnsweredQuestions'
import News from './components/News';
import Footer from './components/Footer';
import TopCategories from './components/TopCategories';
import AllCategories from './components/AllCategories';
import Carousel from './components/Carousel';
import { Paper} from '@mui/material';
import { createTheme } from "@mui/material/styles";
import { ColorModeProvider } from './contexts/ColorModeContext';
import { getDesignMode } from './themes/DarkMode';
function App() {
  const darkTheme =createTheme({

palette:{
 mode:'dark'
}
  })
  return (
   
    <div className="App">
   <ColorModeProvider>
        <Paper>
<HeroSection></HeroSection>
<MovieCard></MovieCard>
<FreeMovies></FreeMovies>
<TopCategories></TopCategories> 
<AllCategories></AllCategories>

<PlanCard></PlanCard>

 <ToggleTheme></ToggleTheme> 

<AnsweredQuestions></AnsweredQuestions>
<News></News>
<Footer></Footer>

</Paper>
</ColorModeProvider>
    </div>
  
  );
}

export default App;
