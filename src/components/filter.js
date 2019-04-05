import React, { useState } from 'react';

import SampleData from './data'


const Filter = props => {

    const [toggle, setToggle] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
    })

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
                                    {subcategories.Subheading1}
                                    <input type="checkbox" />
                                </label>
                                <br/>
                                <label>
                                {subcategories.Subheading2}
                                    <input type="checkbox" />
                                </label>
                                <br/>
                                <label>
                                {subcategories.Subheading3}
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