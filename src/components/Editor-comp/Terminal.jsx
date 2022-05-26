import React from 'react'
import '../../Pages/editor.css'
import { useContext } from "react";
import MainContext from "../../MainContext";
import Panel from './Panel';

import CodeMirror from '@uiw/react-codemirror';


const Terminal = () => {

    const { query, setQuery } = useContext(MainContext);

    return (
        <div className='editor'>
            <div className='row'>
                <div className='col-md-8 col-lg-9 col-xl-10 col-12 no-gutters'>
                    {/*-------------------------------- --------------------------Main Text Editor (Used CodeMirror) */}
                    <CodeMirror
                        value={query}
                        name='Editor'
                        onChange={(value) => {
                            setQuery(value);
                        }}
                        height={'20rem'}
                        aria-label='code-editor'
                    />
                    {/* Note: */}
                    <p style={{ fontSize: "0.8rem" }} className='text-2 pt-3 mb-0'>
                        <strong>NOTE: </strong>Click on a Query to Start.
                    </p>
                </div>
                {/* -------------------------------Panel For all the functional btns (Run, save, Clear) */}
                <div className='col-md-4 col-lg-3 col-xl-2'>
                    <Panel />
                </div>
            </div>
        </div>
    )
}

export default Terminal