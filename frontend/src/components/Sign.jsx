import React from 'react'
import Signup from './SignUp'
import Signin from './SignIn'

const Sign = () => {
  return (
    <div className="flex justify-around gap-20 items-center p-10 mt-20">
          <Signup />
          <Signin />
          
    </div>
  )
}

export default Sign
