import React from 'react'

const Tabs = ({setShowTareas}) => {
    return (

        <div className='flex items-center justify-center'>
            <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px">
                    <li class="me-2" onClick={()=>setShowTareas(true)}>
                        <a  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Mis tareas</a>
                    </li>

                    <li class="me-2" onClick={()=>setShowTareas(false)}>
                        <a  class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Tareas asignada</a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Tabs