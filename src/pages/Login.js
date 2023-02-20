import { useState } from "react"
import { FormControlLabel, FormGroup, Switch } from '@mui/material'
import { useNavigate } from "react-router-dom"


const Login = ({ setisloggedIn }) => {
    const [phone, setPhone] = useState("")
    const [passsword, setPasssword] = useState("")
    const [keepSignedin, setKeepSignedin] = useState(true)

    const [phoneError, setPhoneError] = useState(null)
    const [passError, setPassError] = useState(null)

    const navigate = useNavigate()

    const validatePassword = () => {
        if (passsword.length < 5) {
            setPassError("Password is too short")
            return false
        }

        setPassError(null)
        return true
    }

    const validatePhone = () => {
        const regex = /^[0-9]{9}$/

        if (regex.test(phone)) {
            if (phone[0] !== "7") {
                if (phone[0] !== "9") {
                    setPhoneError("Invalid phone number")
                    return false
                }
                else {
                    setPhoneError(null)
                    return true
                }
            }

        }

        else {
            setPhoneError("Invalid phone number")
            return false
        }

        return true
    }

    const handleSubmit = () => {

        if (validatePhone() && validatePassword()) {
            localStorage.setItem("isSignedIn", true)
            setisloggedIn(true)
            window.scrollTo(0, 0);
        }


    }



    return (
        <main id="login-form" className=' md:h-[80vh] relative w-[90%] md:w-1/2'>
            <article className="border bg-blue-500 md:w-3/5 md:ml-[20%] mt-16  md:h-[70vh] pt-8 md:pt-16 
             rounded-3xl pb-8">
                <p className="text-center w-full font-bold font-serif text-white" htmlFor='phone'>Phone</p>

                <div className="flex items-center border-2 w-[90%] ml-[5%]">
                    <p className="text-white font-bold text-center w-[20%]  py-2">+251</p>
                    <input type="tel" name="phone" value={phone} placeholder="900 ******" required
                        onChange={e => setPhone(e.target.value)}
                        className="w-[80%] px-4 py-2 block bg-transparent text-white placeholder:text-white  " />
                </div>

                <p className="text-orange-400 text-xs text-right mb-8 mr-[5%] ">{phoneError}</p>

                <p className="text-center w-full font-bold font-serif  text-white" htmlFor='password'>Password</p>
                <input type="password" name="password" id="password" value={passsword} placeholder="*******" required
                    onChange={e => setPasssword(e.target.value)}
                    className="w-[90%] ml-[5%] px-4 py-2 block mt-2 border-2 bg-transparent border-b-2 text-white placeholder:text-white text-center" />

                <p className="text-orange-400 text-xs text-right mb-8 mr-[5%] ">{passError}</p>
                <section>
                    <div className="px-2 md:px-0 md:w-4/5 md:ml-[10%]  flex justify-between items-center text-xs text-black">
                        <div className="flex justify-end items-center">
                            <FormGroup sx={{
                                color: "black",
                                width: "30%",
                            }}>
                                <FormControlLabel className="text-sm "
                                    control={<Switch color="warning" onChange={() => setKeepSignedin(prev => !prev)} defaultChecked />} />
                            </FormGroup>
                            <p className=" w-[70%]  text-xs text-gray-900">Keep Me Signed In</p>
                        </div>

                        <button className="text-gray-900">Forgot Password ?</button>
                    </div>


                    <div className="w-full">
                        <button onClick={handleSubmit} className="w-4/5 ml-[10%] mt-[6vh] px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold">Login</button>
                    </div>
                </section>
            </article>
        </main>
    )
}

export default Login