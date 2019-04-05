import React, { useState } from 'react';
import SampleData from './data'
import * as Ui from './filter.styles'

const Filter = props => {
    const [toggle, setToggle] = useState([])

    const toggleState = (e) => {
        setToggle({...toggle, [e.target.id]: !toggle[e.target.id]})
    }

    return(
        <>
        <Ui.Container>
        {SampleData.map((heading, index) => {
            return(
                <>
                    <Ui.MenuItems id={index} onClick={toggleState}>{heading.heading}</Ui.MenuItems>
                    {toggle[index] &&
                    heading.categories.map(subcategories => {
                        return(
                            <>
                                <Ui.FilterOption>
                                    <input type="checkbox" />
                                    {subcategories.Subheading1}
                                </Ui.FilterOption>
                                
                                <Ui.FilterOption>
                                    <input type="checkbox" />
                                {subcategories.Subheading2}
                                </Ui.FilterOption>
                               
                                <Ui.FilterOption>
                                    <input type="checkbox" />
                                    {subcategories.Subheading3}
                                </Ui.FilterOption>
                            </>
                        )
                    })
                    }
                    </>
            )
        })}
        </Ui.Container>
        </>
    )
}

    export default Filter