
import React, { useState } from 'react'
import LessonNav from '../components/LessonNav'
import LessonView from '../components/LessonView'


const English = () => {
    const [currentCourse, setCurrentCourse] = useState(1)

    return (
        <main className='flex justify-center items-center'>
            <LessonNav currentCourse={currentCourse} setCurrentCourse={setCurrentCourse} />
            <LessonView currentCourse={currentCourse} setCurrentCourse={setCurrentCourse} />
        </main>
    )
}

export default English