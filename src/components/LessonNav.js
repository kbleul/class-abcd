
import React from 'react'

const LessonNav = ({ currentCourse, setCurrentCourse }) => {
    return (
        <nav className='hidden md:block bg-gray-200 h-[100vh] overflow-y-hidden hover:overflow-y-scroll w-1/4 scrollbar-hide'>
            <ul className='mt-8'>
                <li className="p-2 font-bold text-center py-4 border-b border-gray-400 hover:border-black">English Course</li>

                <div>
                    <li className="p-2 py-4 font-bold text-gray-800  cursor-pointer text-sm">Common phrases.</li>
                    <div>
                        <li onClick={() => setCurrentCourse(1)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Explanation</li>
                        <li onClick={() => setCurrentCourse(2)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Common phrases</li>
                        <li onClick={() => setCurrentCourse(3)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Place name</li>

                    </div>
                </div>
                <div>
                    <li className="p-2 py-4 font-bold text-gray-800  cursor-pointer text-sm">How to use a, an and the intermediate Grammar</li>

                    <div>
                        <li onClick={() => setCurrentCourse(4)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Explanation</li>
                        <li onClick={() => setCurrentCourse(5)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Singular nouns
                        </li>
                        <li onClick={() => setCurrentCourse(6)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Things</li>

                    </div>
                </div>
                <div>
                    <li className="p-2 py-4 font-bold text-gray-800  cursor-pointer text-sm">Adjectives endings intermediate_Grammar</li>

                    <div>
                        <li onClick={() => setCurrentCourse(7)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Explanation</li>
                        <li onClick={() => setCurrentCourse(8)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Adjectives endings with -ed</li>
                        <li onClick={() => setCurrentCourse(9)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Common adjectives</li>
                    </div>
                </div>
                <div>
                    <li className="p-2 py-4 font-bold text-gray-800  cursor-pointer text-sm">Countable and uncountable nouns advanced grammar</li>

                    <div>
                        <li onClick={() => setCurrentCourse(10)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Explanation</li>
                        <li onClick={() => setCurrentCourse(11)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Countable and Uncountable</li>
                        <li onClick={() => setCurrentCourse(12)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Questions</li>

                    </div>
                </div>
                <div>
                    <li className="p-2 py-4 font-bold text-gray-800  cursor-pointer text-sm">Countable and uncountable nouns 2 advanced grammar</li>

                    <div>
                        <li onClick={() => setCurrentCourse(13)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Explanation</li>
                        <li onClick={() => setCurrentCourse(14)} className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Examples</li>
                    </div>
                </div>
            </ul>
        </nav>
    )
}

export default LessonNav