
import Layout from "../components/Layout/Layout";
import signupStyles from './file.module.css';
import Button from "../components/Button/Button";
function SignUpPage() {
  return (
    <Layout>
       <> 

<div className={signupStyles.wrapperl}>

  <div>
    <div className="creatacc">
    </div>
  </div>
  <div className="text">
    <form action="">
     <h1 className={signupStyles.h1style}>Create an Account</h1 >
     <div >
                    <label htmlFor="username" className={signupStyles.label}>What should we call you?  </label>
                    <input  className={signupStyles.inputboxC}
                      type="text"
                      placeholder="Username"
                      minLength="5"
                      maxLength="10" />
                    </div>
      < div >
                      <label htmlFor="Email" className={signupStyles.label}>What is your email? </label>
                         <input  className={signupStyles.inputboxC}
                          type="text"
                          placeholder="Email"
                          minLength="5"
                          maxLength="10" />
      </div>
     <div >
        <label htmlFor="Password"className={signupStyles.label}>Create a password.</label>
        <input  className={signupStyles.inputboxC}
          type="Password"
          placeholder="Password"
          minLength="5"
          maxLength="10" />

      </div>
      <div >
          <label htmlFor="Confirm password"className={signupStyles.label}> Re-enter your password to confirm that they are the same.</label>
        <input  className={signupStyles.inputboxC}
          type="Password"
          placeholder="Confirm password"
          minLength="5"
          maxLength="10" />

      </div>
      <Button >Sign Up</Button>
      <div className="create-forgot">
          <label htmlFor=""></label>
       
          
      </div>
    </form>
  </div>
  </div>
 

</>


      </Layout>
  )
}

export default SignUpPage;