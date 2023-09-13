import { useState } from 'react';


export const GifExpertApp = () => {

    // eslint-disable-next-line no-unused-vars
    const [ categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);


    return (
        <>
            <h1>GifExpertApp</h1>
            <ol>
                {
                categories.map( category => {
                    return <li key={ category }>{ category }</li>
                })
                }
            </ol>
        </>
    )
}