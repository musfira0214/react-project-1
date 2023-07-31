import React from "react";
import { useState } from "react";
import signupsvg from '../svg1.svg';
import SignIn from './sign'
import SignUp from './register'
import '../signin/home.css'

function Home(){

   const [ value, setValue ] = useState("SignIn")
    return(
        <>
           <div className="flex container">
           <div className="home">
           <div>
           <h1 class="title-font font-medium text-3xl text-gray-900">
         Slow-carb next level shoindcgoitch ethical authentic, pokoscenester
        </h1>

        <p class="leading-relaxed mt-4">
        Poke slow-carb mixtape knausgaard, typewriter street art
         gentrify hammock starladder roathse. Craies vegan tousled etsy 

         {value === "SignIn" ?
         <button onClick={() =>
         setValue("SignUp")
         }>
            Register
         </button>
         :
         <button onClick={() =>
         setValue("SignIn")
         }>
            SignIn
         </button>

          
         
         }
         
        </p>
           </div>

           <div>
            <img src={signupsvg} alt="" />
           </div>

           </div> 

           {value === "SignIn" ?   <SignIn />:<SignUp   />}
        </div>

        </>
    )
}
export default Home;