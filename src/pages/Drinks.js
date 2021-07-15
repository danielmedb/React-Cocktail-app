import Drink from './Drink'
const Drinks = ({drinks, onIngredientClick}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:mx-5 mt-10">
            { drinks.drinks !== undefined &&  drinks.drinks !== 'None Found'  &&(
                drinks.drinks.map((item) => {
                    return (<Drink drink={item} key={item.idDrink} onIngredientClick={onIngredientClick} />);
                })
            )}
        </div>
    )
}

export default Drinks
