
import { useState } from "react"

const ChineseLessonView = ({ currentCourse, setCurrentCourse }) => {

    const [showNav, setShowNav] = useState(false)

    return (
        <main className='md:h-[100vh] overflow-y-scroll w-full md:w-3/4 md:p-[10vh] scrollbar-hide'>

            <div onClick={() => setShowNav(prev => !prev)} className="flex md:hidden justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M4 18q-.425 0-.713-.288T3 17q0-.425.288-.713T4 16h16q.425 0 
                .713.288T21 17q0 .425-.288.713T20 18H4Zm0-5q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11h16q.425 0 
                .713.288T21 12q0 .425-.288.713T20 13H4Zm0-5q-.425 0-.713-.288T3 7q0-.425.288-.713T4 6h16q.425 0 
                .713.288T21 7q0 .425-.288.713T20 8H4Z" />
                </svg>
            </div>

            {showNav && <ChineseLessonNav currentCourse={currentCourse} setCurrentCourse={setCurrentCourse} setShowNav={setShowNav} />}

            {!showNav && <>

                {currentCourse === 1 && <Expl1 />}
                {currentCourse === 2 && <Expl2 />}
                {currentCourse === 3 && <Expl3 />}
                {currentCourse === 4 && <Expl4 />}
                {currentCourse === 5 && <Expl5 />}
                {currentCourse === 6 && <Expl6 />}
                {currentCourse === 7 && <Expl7 />}
                {currentCourse === 8 && <Expl8 />}

                <article className='mt-8 w-4/5 ml-[10%] pb-2  flex justify-between'>
                    {currentCourse !== 1
                        && <button className="bg-green-600 hover:bg-green-700 cursor-pointer py-2 px-2 text-white w-[40%] md:w-[15%] rounded-md"
                            onClick={() => {
                                setCurrentCourse(prev => --prev)
                                window.scrollTo(0, 0);
                            }}>Prev</button>}
                    {currentCourse !== 8 && <button className="bg-green-600 hover:bg-green-700 cursor-pointer py-2 px-2 text-white w-[40%] md:w-[15%] rounded-md"
                        onClick={() => {
                            setCurrentCourse(prev => ++prev)
                            window.scrollTo(0, 0);
                        }}>Next</button>}
                </article>
            </>}
        </main>
    )
}

const Expl1 = () => {

    return (<> <article className="w-full md:border md:border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-2 md:pl-6 text-green-500 font-bold'>Intermediate</h2>

        <ul className=' w-[98%] ml-[1%] mb-8 text-sm'>

            <div className='flex justify-center items-center border-b border-gray-300 font-bold'>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">Hanzi/??????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">Pinyin</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">Type of word</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">Meaning</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">
                    In a Sentence in Hanzi
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">Translation
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">du??shao</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">pron.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">how many; how much</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">??????????????? ~ ???????
                    ???????????? ~ ????
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">How many students does your school have?
                    How much are these clothes?
                </li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">???????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">hu??ch??zh??n</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">railway station</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">?????????3?????? ~ ???
                    ???????????? ~ ????????????
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">I will go to the railway station at 3 o???clock in the afternoon.
                    He frequently went to the train station to receive guests.
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">j??ngch??ng</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">adv.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">often</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">??? ~ ?????????????????????
                    ???????????? ~ ????????????
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">I often meet him at school.
                    I cook hamburgers all the time in America.
                </li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">x??y??o</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">v.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">need; claim; demand; want
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">?????? ~ ???????????????
                    ??? ~ ?????????
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">We need some help.
                    I need to rest.
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">???????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">t?? z??qi??</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2"></li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">play soccer
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">
                    ?????????????????? ~ ???
                    ?????????????????? ~???
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">My classmates and I are playing football.
                    Yesterday evening,  I went to play football.
                </li>
            </div>

        </ul>
    </article>
    </>)
}

const Expl2 = () => {

    return (<> <article className="w-full md:border md:border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-2 md:pl-6 text-green-500 font-bold'>Advanced</h2>

        <ul className=' w-[98%] ml-[1%] mb-8 text-sm'>

            <div className='flex justify-center items-center border-b border-gray-300 font-bold'>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">Hanzi/??????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">Pinyin</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">Type of word</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">Meaning</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">
                    In a Sentence in Hanzi
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">Translation
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">?????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">f??n</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">nm.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">part; portion</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">??????????????????????????????????????????
                    ??????????????????????????????
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">I ate two meals alone, so hungry.
                    Part of the job was not completed.
                </li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">q??bi??</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">difference</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">?????????????????????????????????
                    ???????????????????????????????????????
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">Is there any difference between these two materials?
                    Let me tell you the difference between these two kinds of doors.
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">sh??w??ng</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">v.
                    adj
                </li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">lose hope
                    disappointed; frustrated
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">?????????????????????????????????????????????

                    ??????????????????
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">Don't be disappointed, we still have hope.
                    I'm disappointed in him.
                </li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">j??nzh??ng</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">adj.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">feel nervous
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">??????????????????????????????
                    ??? ~ ???????????????
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">For the first performance, he was very nervous.
                    She fainted from nervousness.
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">???????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">p??ngp??ngqi??</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">table tennis; ping-pong
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">
                    ???????????????????????????
                    ?????????????????????.
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">Does anyone want to participate in the table tennis competition?
                    I'm good at playing table tennis
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">?????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">t??ng</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">soup
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">
                    ???????????????????????????
                    ????????????????????????
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">Would you like another bowl of soup?
                    I want two bowls of egg soup.
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">xi??oshu??</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">novel; fiction
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">
                    ????????????????????????????????????
                    ??????????????? ~ ????????????
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">He's writing a novel and hasn't finished it yet.
                    What is your favorite novel?
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">zu??w??i</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">seat
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">
                    ?????????????????? 23 ??????
                    ???????????????????????? ~???
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">There are 23 seats in this car.
                    I could not find a seat in the cafe.
                </li>
            </div>

        </ul>
    </article>
    </>)
}


const Expl3 = () => {
    return (<> <article className="md:w-4/5 md:ml-[10%] md:border md:border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 px-2 md:pl-6 text-green-500 font-bold'>Beginner Level Mandarin Chinese</h2>

        <ul className='bg-gray-200 w-[90%] ml-[5%] mb-8'>
            <div className='flex justify-center items-center border-b border-gray-300 font-bold'>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">Pinyin</li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">Hanzi/??????</li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">Meaning</li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">n??
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">???</li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">You</li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">w??
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">???
                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">  I, Me</li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">h??o
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">???
                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">Good, Well</li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">ma
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">???
                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">Question particle </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">  yi
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">???

                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">one
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2"> h??n
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">???

                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">Very
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">    y??
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">???

                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">Also, too
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">nin
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">???

                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">You (honor, respect)
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">N??men
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">??????
                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">You (plural)
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">Ne
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">
                    ???
                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">        Question particle

                </li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">bu
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">
                    ???
                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">
                    not
                </li>
            </div>
        </ul>

    </article>
    </>)
}


const Expl4 = () => {
    return (
        <> <article className="md:w-4/5 md:ml-[10%] md:border md:border-gray-300 rounded-lg">
            <h2 className='text-3xl my-8 pl-2 md:pl-6 text-green-500 font-bold'>Beginner Level Mandarin Dialogues</h2>

            <p className=' my-8 pl-6 font-bold'> Example 1 :
            </p>

            <li className='list-none my-8 pl-12 md:pl-32 italic'>A: ?????????Hello!
            </li>
            <li className='list-none my-8 pl-12 md:pl-32 italic'> B????????????Hello!
            </li>
            <li className='list-none my-8 pl-12 md:pl-32 italic'>   A??????????????? How  are you?
            </li>
            <li className='list-none my-8 pl-12 md:pl-32 italic'> B: ?????????????????????????????? I am fine, thank you. And you?
            </li>
            <li className='list-none my-8 pl-12 md:pl-32 italic'> A??? ???????????????I am fine too.
            </li>

            <p className=' my-8 pl-6 font-bold'>Example 2:
            </p>

            <li className='list-none my-8 pl-12 md:pl-32 italic'>   A???????????????
            </li>
            <li className='list-none my-8 pl-12 md:pl-32 italic'>    B: ????????????????????????
            </li>
            <li className='list-none my-8 pl-12 md:pl-32 italic'>  A???????????????
            </li>
            <li className='list-none my-8 pl-12 md:pl-32 italic'> B:?????? ?????????
            </li>
        </article></>
    )
}

const Expl5 = () => {
    return (<> <article className="w-[98%] ml-[1%] md:border md:border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-2 md:pl-6 text-green-500 font-bold'>Intermediate Level Mandarin Chinese</h2>

        <ul className=' w-[98%] ml-[1%] mb-8 text-sm'>

            <div className='flex justify-center items-center border-b border-gray-300 font-bold'>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">Hanzi/??????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">Pinyin</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">Type of word</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">Meaning</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">
                    In a Sentence in Hanzi
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">Translation
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">du??shao</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">pron.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">how many; how much</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">??????????????? ~ ?????????

                    ???????????? ~ ????

                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">How many students does your school have?
                    How much are these clothes?
                </li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">zhu??zi</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">desk; table</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">????????? ~ ??????

                    ?????????????????????, ~ ,???????????????????????????????????????

                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">The computer is on the table.

                    The sofa, tables, and coffee table in their home were brought back from Europe.
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">???????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">hu??ch??zh??n</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">railway station
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">?????????3?????? ~ ???


                    ???????????? ~ ????????????
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">I will go to the railway station at 3 o???clock in the afternoon.

                    He frequently went to the train station to receive guests.
                </li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">j??ngch??ng</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">adv.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">often
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">??? ~ ?????????????????????

                    ???????????? ~ ????????????

                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">I often meet him at school.

                    I cook hamburgers all the time in America.
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">x??y??o</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">v.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">need; claim; demand; want
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">?????? ~ ???????????????
                    ??? ~ ?????????
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">We need some help.

                    I need to rest.

                </li>
            </div>

        </ul>

    </article>
    </>)
}

const Expl6 = () => {
    return (
        <> <article className="md:w-4/5 md:ml-[10%] md:border md:border-gray-300 rounded-lg">
            <h2 className='text-3xl my-8 pl-2 md:pl-6 text-green-500 font-bold'>Intermediate Level Mandarin Dialogues</h2>

            <p className=' my-8 pl-6 font-bold'> Example 1 :
            </p>

            <li className='list-none my-8 pl-12 md:pl-32 italic'>A: ???????????????????????? Do you often play football?
            </li>
            <li className='list-none my-8 pl-12 md:pl-32 italic'>  B: ????????????????????????????????????Not often. I often prefer mountain climbing.
            </li>

            <p className=' my-8 pl-6 font-bold'> Example 2 :
            </p>
            <li className='list-none my-8 pl-12 md:pl-32 italic'>   A: ????????? ??????????????? Which color do you like?
            </li>
            <li className='list-none my-8 pl-12 md:pl-32 italic'> B: ??? ?????? ????????????????????? I like the blue one. What about you?
            </li>

            <p className=' my-8 pl-6 font-bold'>Example 3:
            </p>
            <li className='list-none my-8 pl-12 md:pl-32 italic'>   A??? ????????????????????????How much is this table?
            </li>
            <li className='list-none my-8 pl-12 md:pl-32 italic'>  B:  ??? 2000 RMB??? It is 2000 RMB.
            </li>

            <p className=' my-8 pl-6 font-bold'>Example 4:
            </p>
            <li className='list-none my-8 pl-12 md:pl-32 italic'> A??? ???????????????????????????The line at the railway station is so long.
            </li>
            <li className='list-none my-8 pl-12 md:pl-32 italic'> B: ????????????????????????????????? Yes. Let???s call a taxi.
            </li>
        </article></>
    )
}

const Expl7 = () => {
    return (<> <article className="w-[98%] ml-[1%] md:border md:border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-2 md:pl-6 text-green-500 font-bold'>Advanced Level Mandarin Chinese</h2>

        <ul className=' w-[98%] ml-[1%] mb-8 text-sm'>

            <div className='flex justify-center items-center border-b border-gray-300 font-bold'>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">Hanzi/??????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">Pinyin</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">Type of word</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">Meaning</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">
                    In a Sentence in Hanzi
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">Translation
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">?????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">f??n</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">nm.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">part; portion</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">??????????????????????????????????????????
                    ??????????????????????????????
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">I ate two meals alone, so hungry.
                    Part of the job was not completed.
                </li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">q??bi??</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">difference</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">?????????????????????????????????


                    ???????????????????????????????????????


                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">Is there any difference between these two materials?

                    Let me tell you the difference between these two kinds of doors.
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">sh??w??ng</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">v.
                    adj
                </li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">
                    lose hope
                    disappointed; frustrated
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">?????????3?????? ~ ???
                    ?????????????????????????????????????????????

                    ??????????????????

                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">Don't be disappointed, we still have hope.

                    I'm disappointed in him.
                </li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">j??nzh??ng</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">adj.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">feel nervous
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">??????????????????????????????

                    ??? ~ ???????????????

                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">For the first performance, he was very nervous.

                    She fainted from nervousness.
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">???????????????</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">p??ngp??ngqi??</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">table tennis; ping-pong
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">???????????????????????????
                    ?????????????????????.
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">Does anyone want to participate in the table tennis competition?
                    I'm good at playing table tennis
                </li>
            </div>

        </ul>

    </article>
    </>)
}


const Expl8 = () => {
    return (
        <> <article className="md:w-4/5 md:ml-[10%] md:border md:border-gray-300 rounded-lg">
            <h2 className='text-3xl my-8 pl-2 md:pl-6 text-green-500 font-bold'>Advanced Level Mandarin Dialogues</h2>

            <p className=' my-8 pl-6 font-bold'> Example 1 :
            </p>

            <li className='list-none my-8 pl-12 md:pl-32 italic'>A: ????????????????????? The restaurant is temporarily closed.
            </li>
            <li className='list-none my-8 pl-12 md:pl-32 italic'>B: ?????????????????????????????????????????????????????? Oh no. Where will I take my girlfriend out for lunch now?
            </li>
            <li className='list-none my-8 pl-12 md:pl-32 italic'> A:  ????????????????????????????????????You can go to the new noodle restaurant nearby.
            </li>


            <p className=' my-8 pl-6 font-bold'> Example 2 :
            </p>
            <li className='list-none my-8 pl-12 md:pl-32 italic'>  A: ?????????????????????????????????Her skin looks so young.
            </li>
            <li className='list-none my-8 pl-12 md:pl-32 italic'>B?????????????????????????????????????????????????????????????????? I noticed. She looks so young for her age.
            </li>

            <p className=' my-8 pl-6 font-bold'>Example 3:
            </p>
            <li className='list-none my-8 pl-12 md:pl-32 italic'> A: ????????????????????? I???m very angry today.
            </li>
            <li className='list-none my-8 pl-12 md:pl-32 italic'> B??? ?????????????????????Why are you angry?
            </li>
            <li className='list-none my-8 pl-12 md:pl-32 italic'> A??? ???????????????????????????????????? My sister secretly read my diary.
            </li>

            <p className=' my-8 pl-6 font-bold'>Example 4:
            </p>
            <li className='list-none my-8 pl-12 md:pl-32 italic'> A: ??????????????????????????????????????? ??? I think I???m catching a cold. What should I do?
            </li>
            <li className='list-none my-8 pl-12 md:pl-32 italic'> B: ???????????????????????????????????? You should drink hot water and rest well.
            </li>
        </article></>
    )
}

const ChineseLessonNav = ({ currentCourse, setCurrentCourse, setShowNav }) => {

    return (
        <nav className=' bg-gray-200 md:h-[100vh] overflow-y-hidden hover:overflow-y-scroll w-full md:w-1/4 scrollbar-hide'>
            <ul className='mt-8'>
                <li className="p-2 font-bold text-center py-4 border-b border-gray-400 hover:border-black">English Course</li>

                <div>
                    <li className="p-2 py-4 font-bold text-gray-800  cursor-pointer text-sm">Chinese Vocabulary</li>
                    <div>
                        <li onClick={() => { { setCurrentCourse(1); setShowNav(false) } }} className="text-center md:text-left md:px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Intermediate </li>
                        <li onClick={() => { { setCurrentCourse(2); setShowNav(false) } }} className="text-center md:text-left md:px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Advanced </li>

                    </div>
                </div>
                <div>
                    <li className="p-2 py-4 font-bold text-gray-800  cursor-pointer text-sm">Chinese Vocabulary 2</li>

                    <div>
                        <li onClick={() => { setCurrentCourse(3); setShowNav(false) }} className="text-center md:text-left md:px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Beginner level</li>
                        <li onClick={() => { setCurrentCourse(4); setShowNav(false) }} className="text-center md:text-left md:px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Beginner level Dialogues</li>
                        <li onClick={() => { setCurrentCourse(5); setShowNav(false) }} className="text-center md:text-left md:px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Intermidiate level</li>
                        <li onClick={() => { setCurrentCourse(6); setShowNav(false) }} className="text-center md:text-left md:px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Intermidiate level Dialogues</li>
                        <li onClick={() => { setCurrentCourse(7); setShowNav(false) }} className="text-center md:text-left md:px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Advance level</li>
                        <li onClick={() => { setCurrentCourse(8); setShowNav(false) }} className="text-center md:text-left md:px-12 py-2 border-b border-gray-300 hover:border-gray-400 cursor-pointer text-sm">Advance level Dialogues</li>
                    </div>
                </div>

            </ul>
        </nav>
    )
}


export default ChineseLessonView