import React, { useMemo, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainContext from '../MainContext'
import Sidebar from '../components/Editor-comp/Sidebar'
import Terminal from '../components/Editor-comp/Terminal'
import Result from '../components/Editor-comp/Result'


const Editor = () => {

    const [query, setQuery] = useState("SELECT * FROM customers;");
    const [AllQueries, setAllQueries] = useState({
        saved: ["SELECT * FROM customers;", "SELECT companyName, contactName, city, country FROM customers;", "SELECT * FROM territories"],
        outputData: [],
    })

    const contextValue = useMemo(
        () => ({ query, setQuery, AllQueries, setAllQueries }),
        [query, AllQueries]
    );

    return (
        <div className='App-Editor'>
            <MainContext.Provider value={contextValue}>
                <div className='content'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <Sidebar />
                        </div>
                        <div className='col-md-9 col-12 editor-area'>
                            <Terminal />
                            <Result />
                        </div>

                    </div>

                </div>
            </MainContext.Provider>
        </div>
    )
}

export default Editor