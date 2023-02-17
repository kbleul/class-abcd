
import React, { useState } from 'react'

import ChineseLessonNav from '../components/ChineseLessonNav'
import ChineseLessonView from '../components/ChineseLessonView'


const Chinese = () => {
    const [currentCourse, setCurrentCourse] = useState(1)

    return (
        <article className='flex justify-center items-center'>
            <ChineseLessonNav currentCourse={currentCourse} setCurrentCourse={setCurrentCourse} />
            <ChineseLessonView currentCourse={currentCourse} setCurrentCourse={setCurrentCourse} />
        </article>
    )
}

export default Chinese