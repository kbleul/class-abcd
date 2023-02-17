import { useState } from "react"
import { FormControlLabel, FormGroup, Switch } from '@mui/material'
import { useNavigate } from "react-router-dom"


const Login = () => {
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
        const regex = /^[0-9]{10}$/

        if (regex.test(phone)) {
            if (phone[1] !== "7") {
                if (phone[1] !== "9") {
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

        validatePassword()

        if (validatePhone() && validatePassword()) {
            keepSignedin && localStorage.setItem("isSignedIn", true)
            navigate("/")
        }


    }



    return (
        <main className='login-wrapper h-[80vh] relative'>
            <article className="login-subwrapper absolute border bottom-6 mt-16 w-[30%] ml-[35%] h-[70vh] pt-16 
             rounded-xl text-white ">
                <p className="text-center w-full font-bold font-serif" htmlFor='phone'>Phone</p>
                <input type="tel" name="phone" value={phone} placeholder="0900 ******" required
                    onChange={e => setPhone(e.target.value)}
                    className="w-[90%] ml-[5%] px-4 py-2 block mt-2 " />
                <p className="text-red-600 text-xs text-center mb-10">{phoneError}</p>

                <p className="text-center w-full font-bold font-serif" htmlFor='password'>Password</p>
                <input type="password" name="password" id="password" value={passsword} placeholder="password" required
                    onChange={e => setPasssword(e.target.value)}
                    className="w-[90%] ml-[5%] px-4 py-2 block mt-2" />

                <p className="text-red-600 text-center text-xs">{passError}</p>
                <section>
                    <div className="w-4/5 ml-[10%]  flex justify-between items-center text-xs text-gray-400">
                        <div className="flex justify-end items-center">
                            <FormGroup sx={{
                                color: "gray",
                                width: "30%"
                            }}>
                                <FormControlLabel className="text-sm"
                                    control={<Switch onChange={() => setKeepSignedin(prev => !prev)} defaultChecked />} />
                            </FormGroup>
                            <p className=" w-[70%]  text-xs">Keep Me Signed In</p>
                        </div>

                        <button >Forgot Password ?</button>
                    </div>


                    <div>
                        <button onClick={handleSubmit} className="w-4/5 ml-[10%] mt-[10vh] px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold">Login</button>
                    </div>
                </section>
            </article>
        </main>
    )
}

export default Login