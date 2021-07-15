import { useState, useEffect } from "react"

const DrinkDetails = ({details, onIngredientClick}) => {

    const [drink, setDrink] = useState([]);
    useEffect(() => {
      const getDrinks = async () => {
        const drinks = await fetchDrinks();
        setDrink(drinks);
      }
      getDrinks();
  
    },[]);
  
      // Fetch drink details
      const fetchDrinks = async() => {
        const res = await fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/lookup.php?i=${details}`);
        const data = await res.json();

        let ingredients = [];
        data.drinks.map((item,key) => {
            Object.keys(item).forEach(key => {
            
                if(item[key] !== null && item[key] !== "" && key.includes('strIngredient')){
                  let number = key.slice(-1);
                  ingredients[number] = { 'ingredient' : item[key] };
                 
                }
                if(item[key] !== null && item[key] !== "" && key.includes('strMeasure')){
                  let number = key.slice(-1);
                  ingredients[number].measurement = item[key];
                }
              });
        });
        data.drinks = [...data.drinks, ingredients];
        return data.drinks;
      }

    return (
        <div>
            { drink[0] !== undefined &&
            <div>
                <h2>{drink[0].strInstructions}</h2>

                {drink[1].map((ingredient, index) => {
                    return(
                    <span key={index} onClick={() => onIngredientClick(ingredient.ingredient)} className="cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{ingredient.ingredient} {ingredient.measurement}</span>
                    )
                })
                }
            </div>
            }
        </div>
    )
}

export default DrinkDetails
