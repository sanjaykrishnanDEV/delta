import React from 'react'
import Button from './Button'
const Banner = () => {
  return (
    <div className=' bg-slate-950 text-slate-200
    flex flex-col flex-wrap justify-center items-center mt-5 border h-44 w-screen'>
        <h4>Get personalized  Recommendations</h4>
        <Button content="Sign up for free!"/>
        <p>Already a member?Sign in</p>
    </div>
  )
}

export default Banner