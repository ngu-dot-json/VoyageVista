import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../components/Navbar'
import backgrounder from "/public/test.png"

import sstyle from '../../src/styles/singin.module.css'

export default function Home() {
  return (
          
    <>
          <Head>
            <title>Create Next App</title>

          </Head>
          
          <div className='absolute -z-10 mt-[-25px] w-full h-full'>
        <Image className="bImg" src={backgrounder} alt="background image" width={1000} height={1000}/>
        </div>
        {/*--------------------NavBar--------------------*/}
        <div>
          <Navbar/>  
          <br/>
        </div>

        
        {/*---------------------HTML---------------------*/}
        <div className={sstyle.body}>
          <div className={sstyle.container}>
            <div className={sstyle.box}>
              <div className={sstyle.title}>
                <h1>Login</h1>
              </div>
              <div className={sstyle.textbox}>
                <input type="text" required="required" />
                <span>Username</span>
              </div>
              <div className={sstyle.textbox}>
                <input type="text" required="required" />
                <span>Password</span>
              </div>
              <div className={sstyle.forgotP}>
                <a href="forgotPW">Forgot Password?</a>
              </div>
              <div className={sstyle.Btn}>
                <a href="account">Login</a>
              </div>
              <div className={sstyle.Register}>
              <p>Don't have an account? <a href="register">Register</a></p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}