

const ChineseLessonView = ({ currentCourse, setCurrentCourse }) => {


    return (
        <main className=' h-[100vh] overflow-y-scroll w-3/4 p-[10vh] scrollbar-hide'>
            {currentCourse === 1 && <Expl1 />}
            {currentCourse === 2 && <Expl2 />}
            {currentCourse === 3 && <Expl3 />}
            {currentCourse === 4 && <Expl4 />}
            {currentCourse === 5 && <Expl5 />}
            {currentCourse === 6 && <Expl6 />}
            {currentCourse === 7 && <Expl7 />}
            {currentCourse === 8 && <Expl8 />}

            <article className='mt-8 w-4/5 ml-[10%]  flex justify-between'>
                {currentCourse !== 1
                    && <button className="bg-green-600 hover:bg-green-700 cursor-pointer py-2 px-2 text-white w-[15%] rounded-md"
                        onClick={() => {
                            setCurrentCourse(prev => --prev)
                            window.scrollTo(0, 0);
                        }}>Prev</button>}
                {currentCourse !== 8 && <button className="bg-green-600 hover:bg-green-700 cursor-pointer py-2 px-2 text-white w-[15%] rounded-md"
                    onClick={() => {
                        setCurrentCourse(prev => ++prev)
                        window.scrollTo(0, 0);
                    }}>Next</button>}
            </article>
        </main>
    )
}

const Expl1 = () => {

    return (<> <article className="w-full border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>Intermediate</h2>

        <ul className=' w-[98%] ml-[1%] mb-8 text-sm'>

            <div className='flex justify-center items-center border-b border-gray-300 font-bold'>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">Hanzi/汉字</li>
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
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【多少】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">duōshao</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">pron.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">how many; how much</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">你们学校有 ~ 学生?
                    这件衣服 ~ 钱?
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">How many students does your school have?
                    How much are these clothes?
                </li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【火车站】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">huǒchēzhàn</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">railway station</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">我下午3点去 ~ 。
                    他经常到 ~ 去接客人
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">I will go to the railway station at 3 o’clock in the afternoon.
                    He frequently went to the train station to receive guests.
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【经常】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">jīngcháng</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">adv.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">often</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">我 ~ 在学校遇到他。
                    我在美国 ~ 做汉堡。
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">I often meet him at school.
                    I cook hamburgers all the time in America.
                </li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【需要】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">xūyào</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">v.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">need; claim; demand; want
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">我们 ~ 一些帮助。
                    我 ~ 休息｡
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">We need some help.
                    I need to rest.
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【踢足球】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">tī zúqiú</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2"></li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">play soccer
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">
                    我和同学们在 ~ 。
                    我昨天晚上去 ~。
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

    return (<> <article className="w-full border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>Advanced</h2>

        <ul className=' w-[98%] ml-[1%] mb-8 text-sm'>

            <div className='flex justify-center items-center border-b border-gray-300 font-bold'>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">Hanzi/汉字</li>
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
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【份】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">fèn</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">nm.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">part; portion</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">我一个人吃了两～饭，太饿了。
                    作业的一部分未完成。
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">I ate two meals alone, so hungry.
                    Part of the job was not completed.
                </li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【区别】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">qūbié</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">difference</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">这两种材料有什么～吗？
                    让我告诉你这两种门的区别。
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">Is there any difference between these two materials?
                    Let me tell you the difference between these two kinds of doors.
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【失望】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">shīwàng</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">v.
                    adj
                </li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">lose hope
                    disappointed; frustrated
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">大家不要～，我们还是有希望的。

                    我对他很～。
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">Don't be disappointed, we still have hope.
                    I'm disappointed in him.
                </li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【紧张】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">jǐnzhāng</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">adj.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">feel nervous
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">第一次演出，他很～。
                    她 ~ 得晕倒了。
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">For the first performance, he was very nervous.
                    She fainted from nervousness.
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【乒乓球】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">pīngpāngqiú</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">table tennis; ping-pong
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">
                    有谁想参加～比赛？
                    我擅长打乒乓球.
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">Does anyone want to participate in the table tennis competition?
                    I'm good at playing table tennis
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【汤】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">tāng</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">soup
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">
                    您想再喝一碗～吗？
                    我要两碗鸡蛋汤。
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">Would you like another bowl of soup?
                    I want two bowls of egg soup.
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【小说】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">xiǎoshuō</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">novel; fiction
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">
                    他在写一本～，还没写完。
                    你最喜欢的 ~ 是什么？
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">He's writing a novel and hasn't finished it yet.
                    What is your favorite novel?
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【座位】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">zuòwèi</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">seat
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">
                    这辆汽车上有 23 个～
                    我在咖啡厅找不到 ~。
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
    return (<> <article className="w-4/5 ml-[10%] border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>Beginner Level Mandarin Chinese</h2>



        <ul className='bg-gray-200 w-[90%] ml-[5%] mb-8'>
            <div className='flex justify-center items-center border-b border-gray-300 font-bold'>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">Pinyin</li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">Hanzi/汉子</li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">Meaning</li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">nǐ
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">你</li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">You</li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">wǒ
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">我
                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">  I, Me</li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">hǎo
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">好
                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">Good, Well</li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">ma
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">吗
                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">Question particle </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">  yi
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">一

                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">one
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2"> hěn
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">很

                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">Very
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">    yě
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">也

                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">Also, too
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">nin
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">您

                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">You (honor, respect)
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">Nǐmen
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">你们
                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">You (plural)
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">Ne
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">
                    呢
                </li>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">        Question particle

                </li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8  border-gray-300 capitalize py-2">bu
                </li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">
                    不
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
        <> <article className="w-4/5 ml-[10%] border border-gray-300 rounded-lg">
            <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>Beginner Level Mandarin Dialogues</h2>

            <p className=' my-8 pl-6 font-bold'> Example 1 :
            </p>

            <li className='list-none my-8 pl-32 italic'>A: 你好！Hello!
            </li>
            <li className='list-none my-8 pl-32 italic'> B：你好！Hello!
            </li>
            <li className='list-none my-8 pl-32 italic'>   A：你好吗？ How  are you?
            </li>
            <li className='list-none my-8 pl-32 italic'> B: 我很好，谢谢。你呢？ I am fine, thank you. And you?
            </li>
            <li className='list-none my-8 pl-32 italic'> A： 我也很好。I am fine too.
            </li>

            <p className=' my-8 pl-6 font-bold'>Example 2:
            </p>

            <li className='list-none my-8 pl-32 italic'>   A：早上好！
            </li>
            <li className='list-none my-8 pl-32 italic'>    B: 早上好，你们吗？
            </li>
            <li className='list-none my-8 pl-32 italic'>  A：我很好。
            </li>
            <li className='list-none my-8 pl-32 italic'> B:好。 再见。
            </li>
        </article></>
    )
}

const Expl5 = () => {
    return (<> <article className="w-[98%] ml-[1%] border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>Intermediate Level Mandarin Chinese</h2>

        <ul className=' w-[98%] ml-[1%] mb-8 text-sm'>

            <div className='flex justify-center items-center border-b border-gray-300 font-bold'>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">Hanzi/汉字</li>
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
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【多少】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">duōshao</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">pron.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">how many; how much</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">你们学校有 ~ 学生？

                    这件衣服 ~ 钱?

                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">How many students does your school have?
                    How much are these clothes?
                </li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【桌子】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">zhuōzi</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">desk; table</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">电脑在 ~ 上。

                    他们家里的沙发, ~ ,茶几都是欧洲找回来的宝贝。

                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">The computer is on the table.

                    The sofa, tables, and coffee table in their home were brought back from Europe.
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【火车站】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">huǒchēzhàn</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">railway station
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">我下午3点去 ~ 。


                    他经常到 ~ 去接客人
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">I will go to the railway station at 3 o’clock in the afternoon.

                    He frequently went to the train station to receive guests.
                </li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【经常】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">jīngcháng</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">adv.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">often
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">我 ~ 在学校遇到他。

                    我在美国 ~ 做汉堡。

                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">I often meet him at school.

                    I cook hamburgers all the time in America.
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【需要】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">xūyào</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">v.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">need; claim; demand; want
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">我们 ~ 一些帮助。
                    我 ~ 休息｡
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
        <> <article className="w-4/5 ml-[10%] border border-gray-300 rounded-lg">
            <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>Intermediate Level Mandarin Dialogues</h2>

            <p className=' my-8 pl-6 font-bold'> Example 1 :
            </p>

            <li className='list-none my-8 pl-32 italic'>A: 你经常踢足球吗？ Do you often play football?
            </li>
            <li className='list-none my-8 pl-32 italic'>  B: 不经常。我喜欢经常爬山。Not often. I often prefer mountain climbing.
            </li>

            <p className=' my-8 pl-6 font-bold'> Example 2 :
            </p>
            <li className='list-none my-8 pl-32 italic'>   A: 你喜欢 哪种颜色？ Which color do you like?
            </li>
            <li className='list-none my-8 pl-32 italic'> B: 我 喜欢 蓝色的。你呢？ I like the blue one. What about you?
            </li>

            <p className=' my-8 pl-6 font-bold'>Example 3:
            </p>
            <li className='list-none my-8 pl-32 italic'>   A： 这个桌子多少钱？How much is this table?
            </li>
            <li className='list-none my-8 pl-32 italic'>  B:  是 2000 RMB。 It is 2000 RMB.
            </li>

            <p className=' my-8 pl-6 font-bold'>Example 4:
            </p>
            <li className='list-none my-8 pl-32 italic'> A： 火车站的队伍很长。The line at the railway station is so long.
            </li>
            <li className='list-none my-8 pl-32 italic'> B: 对。我们叫辆出租车吧。 Yes. Let’s call a taxi.
            </li>
        </article></>
    )
}

const Expl7 = () => {
    return (<> <article className="w-[98%] ml-[1%] border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>Advanced Level Mandarin Chinese</h2>

        <ul className=' w-[98%] ml-[1%] mb-8 text-sm'>

            <div className='flex justify-center items-center border-b border-gray-300 font-bold'>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">Hanzi/汉字</li>
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
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【份】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">fèn</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">nm.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">part; portion</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">我一个人吃了两～饭，太饿了。
                    作业的一部分未完成。
                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">I ate two meals alone, so hungry.
                    Part of the job was not completed.
                </li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【区别】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">qūbié</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">difference</li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">这两种材料有什么～吗？


                    让我告诉你这两种门的区别。


                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">Is there any difference between these two materials?

                    Let me tell you the difference between these two kinds of doors.
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【失望】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">shīwàng</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">v.
                    adj
                </li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">
                    lose hope
                    disappointed; frustrated
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">我下午3点去 ~ 。
                    大家不要～，我们还是有希望的。

                    我对他很～。

                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">Don't be disappointed, we still have hope.

                    I'm disappointed in him.
                </li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【紧张】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">jǐnzhāng</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">adj.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">feel nervous
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">第一次演出，他很～。

                    她 ~ 得晕倒了。

                </li>
                <li className="w-[30%] text-center leading-8 capitalize py-2">For the first performance, he was very nervous.

                    She fainted from nervousness.
                </li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">【乒乓球】</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">pīngpāngqiú</li>
                <li className="w-[10%] text-center leading-8  border-gray-300 capitalize py-2">n.</li>
                <li className="w-[10%] text-center leading-8 capitalize py-2">table tennis; ping-pong
                </li>
                <li className="w-[30%] text-center leading-8  border-gray-300 capitalize py-2 ">有谁想参加～比赛？
                    我擅长打乒乓球.
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
        <> <article className="w-4/5 ml-[10%] border border-gray-300 rounded-lg">
            <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>Advanced Level Mandarin Dialogues</h2>

            <p className=' my-8 pl-6 font-bold'> Example 1 :
            </p>

            <li className='list-none my-8 pl-32 italic'>A: 餐厅暂时关闭。 The restaurant is temporarily closed.
            </li>
            <li className='list-none my-8 pl-32 italic'>B: 不好了。我会带我女朋友去那里吃午饭？ Oh no. Where will I take my girlfriend out for lunch now?
            </li>
            <li className='list-none my-8 pl-32 italic'> A:  你们可以去附近的新面馆。You can go to the new noodle restaurant nearby.
            </li>


            <p className=' my-8 pl-6 font-bold'> Example 2 :
            </p>
            <li className='list-none my-8 pl-32 italic'>  A: 她的皮肤看起来很年轻。Her skin looks so young.
            </li>
            <li className='list-none my-8 pl-32 italic'>B：我注意到。就她的年龄而言，她看起来很年轻。 I noticed. She looks so young for her age.
            </li>

            <p className=' my-8 pl-6 font-bold'>Example 3:
            </p>
            <li className='list-none my-8 pl-32 italic'> A: 我今天很生气。 I’m very angry today.
            </li>
            <li className='list-none my-8 pl-32 italic'> B： 你为什么生气？Why are you angry?
            </li>
            <li className='list-none my-8 pl-32 italic'> A： 我姐姐偷偷看了我的日记。 My sister secretly read my diary.
            </li>

            <p className=' my-8 pl-6 font-bold'>Example 4:
            </p>
            <li className='list-none my-8 pl-32 italic'> A: 我想我感冒了。我应该怎么办 ？ I think I’m catching a cold. What should I do?
            </li>
            <li className='list-none my-8 pl-32 italic'> B: 你应该喝热水，好好休息。 You should drink hot water and rest well.
            </li>
        </article></>
    )
}

export default ChineseLessonView