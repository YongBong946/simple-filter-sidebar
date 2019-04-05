import React, { useState } from 'react';
import SampleData from './data'

const Filter = props => {
    const [toggle, setToggle] = useState([])

    const toggleState = (e) => {
        setToggle({...toggle, [e.target.id]: !toggle[e.target.id]})
    }

    return(
        <>
        {SampleData.map((heading, index) => {
            return(
                <>
                    <p id={index} onClick={toggleState}>{heading.heading}</p>
                        {toggle[index] &&
                        heading.categories.map(subcategories => {
                            return(
                                <>
                                    <label>
                                        {subcategories}
                                        <input type="checkbox" />
                                    </label>
                                </>
                            )
                        })
                        }
                </>
            )
        })}
        </>
    )
}

    export default Filter