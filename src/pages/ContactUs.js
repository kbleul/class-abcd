
import React, { useState } from 'react'
import Footer from '../components/Footer'

const ContactUs = () => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [subject, setSubject] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    return (<>
        <main className='w-[94%] ml-[3%] md:w-[70%] md:ml-[15%] mt-[20vh]'>
            <h2 className="mt-32 text-center text-5xl font-mono mb-8">Contact <span className="font-bold">Us</span></h2>

            <article>
                <section className='flex flex-col md:flex-row justify-center items-center'>
                    <div className="w-full md:w-1/2 mb-12">
                        <p className="font-bold mb-2">First Name</p>
                        <input onChange={e => setFname(e.target.value)} className="w-[100%] bg-orange-100 px-4 py-2" type="text" value={fname} placeholder="" />
                    </div>
                    <div className="w-full md:w-1/2 mb-12">
                        <p className="mdtext-right font-bold">Last Name</p>
                        <input onChange={e => setLname(e.target.value)} type="text" className="w-[100%] md:ml-[10%] bg-orange-100 px-4 py-2" value={lname} placeholder="" />
                    </div>
                </section>

                <section className='flex flex-col md:flex-row justify-center items-center'>
                    <div className="w-full md:w-1/2 mb-12">
                        <p className="font-bold mb-2">Subject</p>
                        <input onChange={e => setSubject(e.target.value)} type="text" className="w-[100%] bg-orange-100 px-4 py-2" value={subject} placeholder="" />
                    </div>
                    <div className="w-full md:w-1/2 mb-12">
                        <p className="mdtext-right font-bold">E-mail</p>
                        <input onChange={e => setEmail(e.target.value)} type="email" className="w-[100%] md:ml-[10%] bg-orange-100 px-4 py-2" value={email} placeholder="" />
                    </div>
                </section>

                <section>
                    <div>
                        {/* <p className="text-center font-bold">Message</p>
                        <input onChange={e => setMessage(e.target.value)} className="w-[90%] ml-[5%] bg-orange-100 px-4 py-2 h-[30vh]" type="text" value={message} placeholder="" /> */}
                        <textarea onChange={e => setMessage(e.target.value)} className="w-[90%] ml-[5%] bg-orange-100 px-4 py-2 h-[30vh]" rows="10" cols="50" value={message} placeholder="" />


                    </div>

                    <div>
                        <button className='w-[90%] ml-[5%] bg-black hover:bg-gray-800 text-white mt-12 py-2'>Submit</button>
                    </div>
                </section>
            </article>

        </main>
        <Footer />

    </>
    )
}

export default ContactUs