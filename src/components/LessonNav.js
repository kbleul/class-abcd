
import React from 'react'

const LessonNav = () => {
    return (
        <nav className='bg-gray-200 h-[100vh] overflow-y-hidden hover:overflow-y-scroll w-1/4 scrollbar-hide'>
            <ul className='mt-8'>
                <li className="p-2 font-bold text-center py-4 border-b border-gray-400 hover:border-black">English Course</li>

                <div>
                    <li className="p-2 py-4 font-bold text-gray-800  cursor-pointer text-sm">Common phrases.</li>
                    <div>
                        <li className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Explanation</li>
                        <li className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Common phrases</li>
                        <li className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Things in general</li>

                    </div>
                </div>
                <div>
                    <li className="p-2 py-4 font-bold text-gray-800  cursor-pointer text-sm">How to use a, an and the intermediate Grammar</li>

                    <div>
                        <li className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Explanation</li>
                        <li className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Singular nouns
                        </li>
                        <li className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Things</li>

                    </div>
                </div>
                <div>
                    <li className="p-2 py-4 font-bold text-gray-800  cursor-pointer text-sm">Adjectives endings intermediate_Grammar</li>

                    <div>
                        <li className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Explanation</li>
                        <li className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Common phrases</li>
                        <li className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Place names</li>

                    </div>
                </div>
                <div>
                    <li className="p-2 py-4 font-bold text-gray-800  cursor-pointer text-sm">Countable and uncountable nouns advanced grammar</li>

                    <div>
                        <li className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Explanation</li>
                        <li className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Common phrases</li>
                        <li className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Place names</li>

                    </div>
                </div>
                <div>
                    <li className="p-2 py-4 font-bold text-gray-800  cursor-pointer text-sm">Countable and uncountable nouns 2 advanced grammar</li>

                    <div>
                        <li className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Explanation</li>
                        <li className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Common phrases</li>
                        <li className="px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Place names</li>

                    </div>
                </div>
            </ul>
        </nav>
    )
}

export default LessonNav