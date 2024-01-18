import "./Filter.css"
import FilterField from "./FilterField/FilterField"
const Filter = () => {
    return (
        <div className="filter">
            <FilterField value="Animal" />
            <FilterField value="Tomaño" />
            <FilterField value="Provincia" />
            <FilterField value="Edad" />
        </div>
    )
}

export default Filter