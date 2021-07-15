const SearchField = (props) => {
    return (
        <div className="w-2/4">
            <input 
                onChange={props.handleChange}  
                type="text" 
                className="px-2 py-1 h-8 border border-solid  border-gray-600 rounded-full text-sm leading-snug text-gray-700 bg-gray-100 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-gray-600"
                placeholder="Search for ingredients or beverages, i.e vodka,gin" 
            />
        </div>
    );
}

export default SearchField
