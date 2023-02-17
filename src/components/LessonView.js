
import React, { useState } from 'react'


const LessonView = () => {
    const [currentCourse, setCurrentCourse] = useState(1)

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
            {currentCourse === 9 && <Expl9 />}

            {currentCourse === 10 && <Expl10 />}
            {currentCourse === 11 && <Expl11 />}
            {currentCourse === 12 && <Expl12 />}

            {currentCourse === 13 && <Expl13 />}
            {currentCourse === 14 && <Expl14 />}



            <article className='mt-8 w-4/5 ml-[10%]  flex justify-between'>
                {currentCourse !== 1
                    && <button className="bg-green-600 hover:bg-green-700 cursor-pointer py-2 px-2 text-white w-[15%] rounded-md"
                        onClick={() => {
                            setCurrentCourse(prev => --prev)
                            window.scrollTo(0, 0);
                        }}>Prev</button>}
                {currentCourse !== 14 && <button className="bg-green-600 hover:bg-green-700 cursor-pointer py-2 px-2 text-white w-[15%] rounded-md"
                    onClick={() => {
                        setCurrentCourse(prev => ++prev)
                        window.scrollTo(0, 0);
                    }}>Next</button>}
            </article>
        </main>
    )
}


const Expl1 = () => {

    return (<> <article className="w-4/5 ml-[10%] border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6'>Do you know when you need to use the in common phrases and place names?

        </h2>

        <p className=' my-8 pl-6'>Look at these examples to see when the is and isn't used.</p>

        <li className='list-none my-8 pl-32'>I'm going to bed.</li>
        <li className='list-none my-8 pl-32'> My children are going to start school.</li>
        <li className='list-none my-8 pl-32'>I visited the school yesterday.</li>
        <li className='list-none my-8 pl-32'>Mount Everest is in the Himalayas.</li>

        <p className="pb-4 pl-6">Try this exercise to test your grammar. <span className='text-green-600 font-bold'>
            <a href="https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar/articles-2">Grammar test 1</a>
        </span></p>


    </article>
    </>)
}

const Expl2 = () => {

    return (<> <article className="w-4/5 ml-[10%] border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>Common Phrases</h2>

        <h2 className='text-3xl my-8 pl-6'>Here are some ways we use articles in common phrases and place names.
        </h2>

        <p className=' my-8 pl-6'>We don't usually use an article in expressions with <span className='italic'> bed, work</span> and <span className='italic'>home.</span></p>

        <li className='list-none my-8 pl-32 italic'>go to bed / be in bed</li>
        <li className='list-none my-8 pl-32 italic'> go to work / be at work / start work / finish work</li>
        <li className='list-none my-8 pl-32 italic'>go home / be at home / get home / stay at home</li>

        <p className=' my-8 pl-6'>We also don't normally use an article in expressions with
            <span className='italic'>school, university, prison</span> and <span className='italic'>hospital.</span></p>

        <li className='list-none my-8 pl-32 italic'>start school / go to school / be at school</li>
        <li className='list-none my-8 pl-32 italic'>go to university / be at university
        </li>
        <li className='list-none my-8 pl-32 italic'>be sent to prison / go to prison / be in prison
        </li>
        <li className='list-none my-8 pl-32 italic'>go to hospital / be in hospital
        </li>
        <li className='list-none my-8 pl-32 italic'>start school / go to school / be at school</li>

        <p className=' my-8 pl-6'>But we usually use the if someone is just visiting the place, and not there as a student/prisoner/patient, etc.
        </p>

        <li className='list-none my-8 pl-32 italic'>My son has started school now. I went to the school to meet his teacher.
        </li>
        <li className='list-none my-8 pl-32 italic'>I went to the prison a lot when I was a social worker.

        </li>
        <li className='list-none my-8 pl-32 italic'>I'm at the hospital. My sister has just had a baby.
        </li>

    </article>
    </>)
}

const Expl3 = () => {

    return (<> <article className="w-4/5 ml-[10%] border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>Place names</h2>
        <h2 className='text-3xl my-8 pl-6'>We don't normally use an article for continents, most countries, cities, towns, lakes, mountains or universities. So, we say:
        </h2>

        <p className=' my-8 pl-6'>We don't usually use an article in expressions with <span className='italic'> bed, work</span> and <span className='italic'>home.</span></p>

        <li className='list-none my-8 pl-32 italic'>Africa, Asia, Europe
        </li>
        <li className='list-none my-8 pl-32 italic'>India, Ghana, Peru, Denmark
        </li>
        <li className='list-none my-8 pl-32 italic'>Addis Ababa, Hanoi, New York, Moscow
        </li>
        <li className='list-none my-8 pl-32 italic'>Mount Everest, Mount Kilimanjaro, Mount Elbrus
        </li>
        <li className='list-none my-8 pl-32 italic'>Cardiff University, Harvard University, Manchester University
        </li>

        <p className=' my-8 pl-6'>Some countries are different. Country names with United have the. There are other countries which are exceptions too. So, we say:</p>

        <li className='list-none my-8 pl-32 italic'>the United Arab Emirates, the United Kingdom, the United States of America
            the Bahamas, the Gambia
        </li>


        <p className=' my-8 pl-6'>Seas and oceans, mountain ranges and rivers have the:
        </p>

        <li className='list-none my-8 pl-32 italic'>the Atlantic, the Pacific, the Mediterranean
        </li>
        <li className='list-none my-8 pl-32 italic'>the Andes, the Himalayas, the Alps
        </li>
        <li className='list-none my-8 pl-32 italic'>the Nile, the Amazon, the Yangtze
        </li>

        <p className=' my-8 pl-6'>Universities with of in the title also have the:
        </p>
        <li className='list-none my-8 pl-32 italic'>the University of Cape Town, the University of Delhi, the University of Tokyo
        </li>

    </article>
    </>)
}


const Expl4 = () => {

    return (<> <article className="w-4/5 ml-[10%] border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>Articles</h2>

        <h2 className='text-3xl my-8 pl-6'>Do you know how to use a, an and the ?
        </h2>

        <p className=' my-8 pl-6'>Look at these examples to see how articles are used.</p>

        <li className='list-none my-8 pl-32'>She's a doctor.
        </li>
        <li className='list-none my-8 pl-32'> I need an umbrella.
        </li>
        <li className='list-none my-8 pl-32'>Have you heard the news?
        </li>
        <li className='list-none my-8 pl-32'>I don't like spiders.
        </li>

        <p className="pb-4 pl-6">Try this exercise to test your grammar. <span className='text-green-600 font-bold'>
            <a href="https://learnenglish.britishcouncil.org/grammar/beginner-to-pre-intermediate/articles-1">Grammar test 1</a>
        </span></p>


    </article>
    </>)
}

const Expl5 = () => {

    return (<> <article className="w-4/5 ml-[10%] border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>. . .</h2>

        <h2 className='text-3xl my-8 pl-6'>Here are some of the most important things to know about using articles.
        </h2>

        <p className=' my-8 pl-6 font-bold'>Jobs</p>

        <p className=' my-8 pl-6 font-bold'>When we say what people's jobs are, we usually use a/an.
        </p>


        <li className='list-none my-8 pl-32 italic'>He's an architect.
        </li>
        <li className='list-none my-8 pl-32 italic'> She's a scientist.
        </li>
        <li className='list-none my-8 pl-32 italic'>My grandmother was a teacher.
        </li>

        <p className=' my-8 pl-6 font-bold'>Singular nouns</p>

        <p className=' my-8 pl-6 '>Singular, countable nouns always have an article – a/an or the
            (or another determiner – my, your, this, that, etc.).</p>

        <p className=' my-8 pl-6'>We use a/an – the indefinite article – when we talk about something for the first time,
            or something that is part of a group or type.
        </p>




        <li className='list-none my-8 pl-32 italic'>I saw a good film yesterday.</li>
        <li className='list-none my-8 pl-32 italic'>Do you want a drink ?
        </li>

        <p className=' my-8 pl-6'>We use a when the word that follows it begins with a consonant sound. We use an when it's followed by a vowel sound. This makes pronunciation easier.
        </p>

        <li className='list-none my-8 pl-32 italic'>She has a university degree.
        </li>
        <li className='list-none my-8 pl-32 italic'>It took me an hour to get home.
        </li>

    </article>
    </>)
}

const Expl6 = () => {

    return (<> <article className="w-4/5 ml-[10%] border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>. . .</h2>

        <p className=' my-8 pl-6 font-bold'>Things in general
        </p>

        <p className=' my-8 pl-6'> When we talk about things in general, we normally use a plural or uncountable noun with no article.
        </p>




        <li className='list-none my-8 pl-32 italic'>Birds eat worms.
        </li>
        <li className='list-none my-8 pl-32 italic'>Water freezes at 0°C.
        </li>
        <li className='list-none my-8 pl-32 italic'>Children need a lot of sleep.
        </li>

        <p className=' my-8 pl-6 font-bold'>Particular groups of things
        </p>

        <p className=' my-8 pl-6'>When we talk about a particular group of things, we use the.</p>

        <p className=' my-8 pl-6'>We went to the zoo and saw the kangaroos. (These are the particular kangaroos in that zoo –
            not kangaroos in general.)
        </p>


    </article>
    </>)
}

const Expl7 = () => {

    return (<> <article className="w-4/5 ml-[10%] border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>Adjectives</h2>

        <h2 className='text-3xl my-8 pl-6'>Adjectives ending in '-ed' and '-ing'
        </h2>

        <p className=' my-8 pl-6'>Do you know the difference between<span className='italic'>bored</span> and <span className='italic'>boring.</span>
        </p>

        <p className=' my-8 pl-6'>Look at these examples to see how adjectives ending in -ed and -ing are used.
        </p>

        <li className='list-none my-8 pl-32'>I was really bored in that presentation.
        </li>
        <li className='list-none my-8 pl-32'> That was a really boring presentation.
        </li>

        <p className="pb-4 pl-6">Try this exercise to test your grammar. <span className='text-green-600 font-bold'>
            <a href="https://learnenglish.britishcouncil.org/grammar/beginner-to-pre-intermediate/adjectives-ending-in-ed-and-ing">Grammar test 1</a>
        </span></p>


    </article>
    </>)
}

const Expl8 = () => {

    return (<> <article className="w-4/5 ml-[10%] border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>. . .</h2>

        <h2 className='text-3xl my-8 pl-6'>Adjectives that end in -ed (e.g. bored, interested) and adjectives that end in -ing (e.g. boring, interesting) are often confused.>
        </h2>

        <p className=' my-8 pl-6 font-bold'>-ed adjectives
        </p>

        <p className=' my-8 pl-6 font-bold'>Adjectives that end in -ed generally describe emotions – they tell us how people feel.
        </p>


        <li className='list-none my-8 pl-32 italic'>I was so bored in that lesson, I almost fell asleep.
        </li>
        <li className='list-none my-8 pl-32 italic'> He was surprised to see Helen after all those years.
        </li>
        <li className='list-none my-8 pl-32 italic'>She was really tired and went to bed early.
        </li>

        <p className=' my-8 pl-6 font-bold'>-ing adjectives</p>

        <p className=' my-8 pl-6 '>Adjectives that end in -ing generally describe the thing that causes the emotion – a boring lesson makes you feel bored.</p>

        <li className='list-none my-8 pl-32 italic'>Have you seen that film? It's really frightening.
        </li>
        <li className='list-none my-8 pl-32 italic'>I could listen to her for hours. She's so interesting.
        </li>
        <li className='list-none my-8 pl-32 italic'>I can't sleep! That noise is really annoying!
        </li>


    </article>
    </>)
}

const Expl9 = () => {

    return (<> <article className="w-4/5 ml-[10%] border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>. . .</h2>

        <p className=' my-8 pl-6 font-bold'>Here are some adjectives that can have both an -ed and an -ing form.
        </p>

        <ul className='bg-gray-200 w-1/2 ml-[25%] mb-8'>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/2 text-center leading-8 c border-b border-gray-300 capitalize py-2">bored</li>
                <li className="w-1/2 text-center leading-8 capitalize py-2">boring</li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/2 text-center leading-8 c border-b border-gray-300 capitalize py-2">confused</li>
                <li className="w-1/2 text-center leading-8 capitalize py-2">confusing</li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/2 text-center leading-8 c border-b border-gray-300 capitalize py-2">disappointed</li>
                <li className="w-1/2 text-center leading-8 capitalize py-2">disappointing</li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/2 text-center leading-8 c border-b border-gray-300 capitalize py-2">excited</li>
                <li className="w-1/2 text-center leading-8 capitalize py-2">exciting</li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300'>
                <li className="w-1/2 text-center leading-8 c border-b border-gray-300 capitalize py-2">frightened</li>
                <li className="w-1/2 text-center leading-8 capitalize py-2">frightening</li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300'>
                <li className="w-1/2 text-center leading-8 c border-b border-gray-300 capitalize py-2">interested</li>
                <li className="w-1/2 text-center leading-8 capitalize py-2">interesting</li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/2 text-center leading-8 c border-b border-gray-300 capitalize py-2">surprised</li>
                <li className="w-1/2 text-center leading-8 capitalize py-2">surprising</li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/2 text-center leading-8 c border-b border-gray-300 capitalize py-2">tired</li>
                <li className="w-1/2 text-center leading-8 capitalize py-2">tiring</li>
            </div>
            <div className='flex justify-center items-center border-b border-gray-300'>
                <li className="w-1/2 text-center leading-8 c border-b border-gray-300 capitalize py-2">worried</li>
                <li className="w-1/2 text-center leading-8 capitalize py-2">worrying</li>
            </div>
        </ul>

    </article>
    </>)
}

const Expl10 = () => {

    return (<> <article className="w-4/5 ml-[10%] border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>Countable and uncountable nouns
        </h2>

        <h2 className='text-3xl my-8 pl-6'>Do you know how to use a, some, any, much and many?
        </h2>

        <p className=' my-8 pl-6'>Look at these examples to see how to use countable and uncountable nouns in a sentence.
        </p>

        <li className='list-none my-8 pl-32'>I'm making a cup of tea.
        </li>
        <li className='list-none my-8 pl-32'>There's some money on the table.
        </li>
        <li className='list-none my-8 pl-32'>Have we got any bread?
        </li>
        <li className='list-none my-8 pl-32'>How many chairs do we need?
        </li>
        <li className='list-none my-8 pl-32'>How much milk have we got?
        </li>


        <p className="pb-4 pl-6">Nouns can be countable or uncountable. Countable nouns can be counted, e.g. an apple, two apples, three apples, etc. Uncountable nouns cannot be counted, e.g. air, rice, water, etc. When you learn a new noun, you should check if it is countable or uncountable and note how it is used in a sentence.
        </p>


    </article>
    </>)
}

const Expl11 = () => {

    return (<> <article className="w-4/5 ml-[10%] border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>Countable nouns</h2>

        <h2 className='text-3xl my-8 pl-6'>For positive sentences we can use a/an for singular nouns or some for plurals.
        </h2>

        <li className='list-none my-8 pl-32 italic'>I have some friends in New York.
        </li>
        <li className='list-none my-8 pl-32 italic'> There's a man at the door.
        </li>


        <p className=' my-8 pl-6 font-bold'>For negatives we can use a/an for singular nouns or any for plurals.
        </p>
        <li className='list-none my-8 pl-32 italic'>I don't have a dog.
        </li>
        <li className='list-none my-8 pl-32 italic'>There aren't any seats.</li>

        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>Uncountable nouns</h2>


        <p className=' my-8 pl-6'>Here are some examples of uncountable nouns:
        </p>


        <ul className='bg-gray-200 w-[70%] ml-[15%] mb-8'>
            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8 c border-b border-gray-300 capitalize py-2">bread</li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">rice</li>
                <li className="w-1/4 text-center leading-8 c border-b border-gray-300 capitalize py-2">coffee</li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">information</li>
            </div>

            <div className='flex justify-center items-center border-b border-gray-300 '>
                <li className="w-1/4 text-center leading-8 c border-b border-gray-300 capitalize py-2">money</li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">advice</li>
                <li className="w-1/4 text-center leading-8 c border-b border-gray-300 capitalize py-2">luggage</li>
                <li className="w-1/4 text-center leading-8 capitalize py-2">furniture</li>
            </div>
        </ul>

        <p className=' my-8 pl-6'>Here are some examples of uncountable nouns:
        </p>

        <li className='list-none my-8 pl-32 italic'>There isn't any coffee.
        </li>
        <li className='list-none my-8 pl-32 italic'>There's some milk in the fridge.
        </li>

    </article>
    </>)
}

const Expl12 = () => {

    return (<> <article className="w-4/5 ml-[10%] border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>. . .
        </h2>

        <h2 className='text-3xl my-8 pl-6'>Questions
        </h2>

        <p className=' my-8 pl-6'>In questions we use a/an, any or how many with countable nouns.
        </p>



        <li className='list-none my-8 pl-32'> Is there an email address to write to ?
        </li>
        <li className='list-none my-8 pl-32'>Are there any chairs ?
        </li>
        <li className='list-none my-8 pl-32'>How many chairs are there ?
        </li>


        <p className=' my-8 pl-6'>And we use any or how much with uncountable nouns.
        </p>
        <li className='list-none my-8 pl-32'>Is there any sugar?
        </li>
        <li className='list-none my-8 pl-32'>How much orange juice is there?
        </li>

        <p className=' my-8 pl-6'>But when we are offering something or asking for something, we normally use some.
        </p>


        <li className='list-none my-8 pl-32'>Do you want some chocolate?
        </li>
        <li className='list-none my-8 pl-32'>Can we have some more chairs, please?
        </li>


        <p className="pb-4 pl-6">We also use some in a question when we think the answer will be 'yes'.
        </p>
        <li className='list-none my-8 pl-32'>Have you got some new glasses?
        </li>


        <p className="pb-4 pl-6 fonrt-bold">Other expressions of quantity
        </p>
        <p className="pb-4 pl-6 fonrt-bold">  A lot of (or lots of) can be used with both countable and uncountable nouns.
        </p>
        <li className='list-none my-8 pl-32'>
            There are lots of apples on the trees.
        </li>
        <li className='list-none my-8 pl-32'>
            There is a lot of snow on the road.
        </li>

        <p className="pb-4 pl-6 fonrt-bold"> Notice that we don't usually use many or much in positive sentences. We use a lot of instead.
        </p>
        <li className='list-none my-8 pl-32'>
            They have a lot of money.
        </li>

        <p className="pb-4 pl-6 fonrt-bold">
            However, in negative sentences we use not many with countable nouns and not much with uncountable nouns.
        </p>
        <li className='list-none my-8 pl-32'>
            There are a lot of carrots but there aren't many potatoes.
        </li>
        <li className='list-none my-8 pl-32'>
            There's lots of juice but there isn't much water.
        </li>

    </article>
    </>)
}

const Expl13 = () => {

    return (<> <article className="w-4/5 ml-[10%] border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>Countable and uncountable nouns 2
        </h2>

        <h2 className='text-3xl my-8 pl-6'>Do you know how to use a few, few, very little and a bit of?
        </h2>

        <p className=' my-8 pl-6'>Look at these examples to see how these quantifiers are used with countable and uncountable nouns.
        </p>




        <li className='list-none my-8 pl-32'>I have a few friends, so I'm not lonely.
        </li>
        <li className='list-none my-8 pl-32'>She has few friends, so she's quite lonely.
        </li>
        <li className='list-none my-8 pl-32'>We've got a bit of time before our train. Shall we get a coffee?
        </li>
        <li className='list-none my-8 pl-32'>We've got very little time before our train. Hurry up!
        </li>

    </article>
    </>)
}

const Expl14 = () => {

    return (<> <article className="w-4/5 ml-[10%] border border-gray-300 rounded-lg">
        <h2 className='text-3xl my-8 pl-6 text-green-500 font-bold'>. . .</h2>

        <h2 className='text-3xl my-8 pl-6'>A few and a bit of or a little mean some. Often we feel this amount is enough or more than we expected. We use a few with plural nouns and a bit of or a little with uncountable nouns.
        </h2>

        <li className='list-none my-8 pl-32 italic'>
            I have a few ideas.
        </li>
        <li className='list-none my-8 pl-32 italic'>I've brought a few friends.
        </li>
        <li className='list-none my-8 pl-32 italic'>
            There's a bit of milk left.
        </li>
        <li className='list-none my-8 pl-32 italic'> It needs a little more work.
        </li>


        <p className=' my-8 pl-6 font-bold'>We use few and very little to show that we are talking about a small amount. Often we feel this amount is not enough or less than we expected.
            Few is for countable nouns and very little is for uncountable nouns.
        </p>

        <li className='list-none my-8 pl-32 italic'>
            Few people came to the meeting.
        </li>
        <li className='list-none my-8 pl-32 italic'>
            There are few places where you can still see these birds.
        </li>
        <li className='list-none my-8 pl-32 italic'>
            We have very little time.
        </li>
        <li className='list-none my-8 pl-32 italic'>
            I have very little money.
        </li>



        <p className=' my-8 pl-6'>
            Note that you can use little without very, but it is less common and sounds quite formal.
        </p>
        <li className='list-none my-8 pl-32 italic'>
            She had little water.
        </li>

    </article>
    </>)
}
export default LessonView