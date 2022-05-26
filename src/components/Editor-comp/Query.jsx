import React, { useContext, useEffect, useState } from 'react'
import MainContext from '../../MainContext'
import '../../Pages/editor.css'

const Query = () => {

    const { setQuery, AllQueries } = useContext(MainContext);
    const [list, setList] = useState(AllQueries['saved']);

    //  console.log(list)

    const ListofQueries = (arr) => {

        return arr.map((query, i) => {
            //  console.log(query);
            return <div key={i} className='query'>
                <code onClick={() => setQuery(query)}>{query}</code>

            </div>
        })

    }


    useEffect(() => {
        setList(AllQueries['saved']);
    }, [AllQueries]);


    return (
        <div className='query-box'>
            {ListofQueries(list)}
        </div>
    )
}

export default Query