import React from "react";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';
import './auth.css'


function Auth() {
    return (
        <div className="signInContainer">
                <SignedOut className="signOut">
                    <div className="signOutContainer">
                        <SignInButton  mode="modal"><a className="signBtn">SIGN IN</a></SignInButton>
                    </div>
                </SignedOut>

               <SignedIn>
                    <UserButton className='userBtn'/>
               </SignedIn>
        </div>
    )
}

export default Auth;