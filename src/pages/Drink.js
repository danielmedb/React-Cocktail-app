import { Link } from 'react-router-dom'
import DrinkDetails from '../components/DrinkDetails'


const Drink = ({drink, onIngredientClick}) => {
    return (
        <div>
            <div className="">  
                <div className="max-w-sm w-128 min-w-full rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={drink.strDrinkThumb} alt={drink.strDrink} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{drink.strDrink}</div>
                        <div className="text-gray-700 text-base">
                            <Link to='/about/'>
                            </Link>
                        </div>
                    </div>
                    <div className="px-6 pb-4">
                        <DrinkDetails details={drink.idDrink} onIngredientClick={onIngredientClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Drink
