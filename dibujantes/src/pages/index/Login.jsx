import React, { useState } from "react";
import { LoginForm } from "../../components/index/LoginForm";
import { SignInForm } from "../../components/index/SignInForm";

export const Login = () => {
    const [showSignedInForm, setShowSignInForm] = useState(false);

    const handleSignIn = () => {
        setShowSignInForm(true);
      };
    
      const handleBack = () => {
        setShowSignInForm(false);
      };

    return (

        <div>
            {showSignedInForm ? <SignInForm onBack={handleBack}/> : <LoginForm onSignIn={handleSignIn} />}
        </div>

    );

}
