import React from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import './auth.css'


function Auth() {
    return (
        <div className="signInContainer">
                <SignedOut className="signOut">
                    <div className="signOutContainer">
                        <SignInButton  mode="modal"><span className="signBtn">SIGN IN</span></SignInButton>
                    </div>
                </SignedOut>

               <SignedIn>
                    <UserButton className='userBtn'/>
               </SignedIn>
        </div>
    )
}

export default Auth;