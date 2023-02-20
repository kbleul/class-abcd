


const ChineseLessonNav = ({ currentCourse, setCurrentCourse }) => {

    return (
        <nav className='hidden md:block bg-gray-200 h-[100vh] overflow-y-hidden hover:overflow-y-scroll w-1/4 scrollbar-hide'>
            <ul className='mt-8'>
                <li className="p-2 font-bold text-center py-4 border-b border-gray-400 hover:border-black">English Course</li>

                <div>
                    <li className="p-2 py-4 font-bold text-gray-800  cursor-pointer text-sm">Chinese Vocabulary</li>
                    <div>
                        <li onClick={() => setCurrentCourse(1)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Intermediate </li>
                        <li onClick={() => setCurrentCourse(2)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Advanced </li>

                    </div>
                </div>
                <div>
                    <li className="p-2 py-4 font-bold text-gray-800  cursor-pointer text-sm">Chinese Vocabulary 2</li>

                    <div>
                        <li onClick={() => setCurrentCourse(3)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Beginner level</li>
                        <li onClick={() => setCurrentCourse(4)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Beginner level Dialogues</li>
                        <li onClick={() => setCurrentCourse(5)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Intermidiate level</li>
                        <li onClick={() => setCurrentCourse(6)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Intermidiate level Dialogues</li>
                        <li onClick={() => setCurrentCourse(7)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Advance level</li>
                        <li onClick={() => setCurrentCourse(8)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Advance level Dialogues</li>
                    </div>
                </div>

            </ul>
        </nav>
    )
}



export default ChineseLessonNav