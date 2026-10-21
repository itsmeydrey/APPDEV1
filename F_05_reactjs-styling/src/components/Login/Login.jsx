import styles from "./Login.module.css";
import leavesImage from "../../assets/login-leaves.png";
import googleIcon from "../../assets/google.svg";
import facebookIcon from "../../assets/facebook.svg";

function Login() {
    return (
        <main className={styles.loginPage}>
            <section className={styles.loginCard}>
                <div className={styles.imagePanel}>
                    <img className={styles.leavesImage} src={leavesImage} alt="Blue-gray botanical leaves" />
                </div>
                <div className={styles.formPanel}>
                    <header className={styles.heading}>
                        <h1>Hello,</h1>
                        <span>Guyss!</span>
                    </header>

                    <nav className={styles.tabs}>
                        <button type="button" className={styles.activeTab}>
                            Login
                        </button>
                        <button type="button" className={styles.inactiveTab}>
                            SignUp
                        </button>
                    </nav>

                    <form className={styles.loginForm}>
                        <input 
                            className={styles.input}
                            type="email"
                            placeholder="Enter your email"
                            aria-label="Email"
                            required
                        />

                        <input
                            className={styles.input}
                            type="password" 
                            placeholder="Enter Password"
                            aria-label="Password"
                            required
                        />

                        <button className={styles.loginButton}>
                            Login
                        </button>
                    </form>

                    <div className={styles.socialSection}>
                        
                        <span className={styles.orDivider}>Or</span>

                        <div className={styles.socialIcons}>
                            <button
                                type="button"
                                className={styles.socialButton}
                                aria-label="Continue with Google"
                            >
                                <img src={googleIcon} alt="Google icon" />
                            </button>

                            <button
                                type="button"
                                className={styles.socialButton}
                                aria-label="Continue with Facebook"
                            >
                                <img src={facebookIcon} alt="Facebook icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Login;