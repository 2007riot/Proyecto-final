import { useState } from "react"
import "./FilterField.css"
import List from "../list/List"


const FilterField = ({ value, onclick }) => {

    const [isListOpen, setListOpen] = useState(false)

    const toggleList = () => {
        setListOpen(!isListOpen)
    }

    return (
        <div>
            <div className="filterField" onClick={toggleList}>{value}</div>
            {isListOpen && (
                <List />
            )}
        </div>
    )
}

export default FilterField