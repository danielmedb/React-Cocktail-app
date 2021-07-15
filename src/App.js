import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import  { useState, useEffect } from 'react'
import Drinks from './pages/Drinks';
import MainNavigation from './components/layout/MainNavigation'

function App() {

  const [searchText, setSearchText] = useState('Vodka');
  const [drinks, setDrinks] = useState([]);
  const [search, setSearch] = useState(false);

  useEffect(() => {
    const getDrinks = async () => {
      const drinks = await fetchDrinks();
      setDrinks(drinks);
    }
    getDrinks();

  },[searchText]);

    // Fetch drinks from start
    const fetchDrinks = async() => {
      const res = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=${searchText}`);
      const data = await res.json();

      if(data.drinks !== 'None Found'){
        setSearch(true);
      }else{
        setSearch(false);
      }
      return data;
    }

    const showIngredientRecipe = async (ingredient) => {
      setSearchText(ingredient);
    }
  
  return (
    <div>
      <Router>
        <MainNavigation onSearchChange={setSearchText} onSearch={fetchDrinks} />
        <Switch>
          <Route path="/" exact>
            <Drinks drinks={drinks} onIngredientClick={showIngredientRecipe} />
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
