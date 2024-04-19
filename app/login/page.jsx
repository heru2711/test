import Layout from "../components/Layout/Layout";
import Link from "next/link";
import loginStyles from "./login.module.css";
import Button from "../components/Button/Button";
import Image from "next/image";

function LoginPage() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <Layout>
        <div className={loginStyles.wrapper}>
          <div className={loginStyles.imgwrapper}>
            <Image
              src="/assets/1.svg"
              height={200}
              width={400}
              alt="company name logo"
            />
          </div>

          <div className={loginStyles.wrappersp}>
            <form action="" className={loginStyles.form}>
              <div className={loginStyles.topwrapper}></div>
              <div className={loginStyles.inputboxs}>
                <label htmlFor="username"> </label>
                <input type="text" placeholder="username" />
              </div>
              <div className={loginStyles.inputwrapper}></div>
              <div className={loginStyles.inputboxs}>
                <label htmlFor="Password"> </label>
                <input type="Password" placeholder="Password" />
              </div>
              <div className={loginStyles.inputwrapper}></div>
              <nav>
                <Button>Login</Button>
                <div className="create-forgot">
                  <label htmlFor=""> </label>
                  <Link href="/sign-up" className={loginStyles.forgotPassword}>
                    Forgot password?
                  </Link>
                  <Link href="/sign-up" className={loginStyles.createAccount}>
                    {" "}
                    Create Account
                  </Link>
                </div>
              </nav>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default LoginPage;
