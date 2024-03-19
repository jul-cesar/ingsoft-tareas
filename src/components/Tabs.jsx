import React from 'react'

const Tabs = ({ setShowTareas, showTareas }) => {
    return (

        <div className='flex items-center justify-center mt-16'>
            <div className="text-sm font-medium text-center cursor-pointer text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    <li class="me-2" onClick={() => setShowTareas(true)}>
                        <a className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg ${showTareas && "text-gray-600"} ${showTareas && "border-gray-300"}}`}>Mis tareas</a>
                    </li>

                    <li className="me-2" onClick={() => setShowTareas(false)}>
                        <a  className={`inline-block p-4 cursor-pointer border-b-2 border-transparent rounded-t-lg ${!showTareas && "text-gray-600"} ${!showTareas && "border-gray-300"}}`}>Tareas asignadas</a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Tabs