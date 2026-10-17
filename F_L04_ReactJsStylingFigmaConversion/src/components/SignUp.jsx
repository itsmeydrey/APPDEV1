
import styles from "./SignUp.module.css";
import logo from "../assets/logo.svg";

function SignUp({ onSwitch }) {
    return (
        <main className={styles.signupPage}>
            {/* Left panel */}
            <section className={styles.left}>
                <p className={styles.tagline}>
                    Need webdesign
                    <br />
                    for your business?
                    <br />
                    <strong>Design Spacee</strong>
                    <br />
                    will help you.
                </p>

                <img
                    src={logo}
                    alt="Design Spacee Logo"
                    className={styles.logo}
                />

                <p className={styles.link}>
                    figma.com/@designspacee
                </p>
            </section>

            {/* Right panel */}
            <section className={styles.right}>
                <form
                    className={styles.form}
                    onSubmit={(event) => event.preventDefault()}
                >
                    <h2>Create Account</h2>

                    {/* Social sign-up buttons */}
                    <div className={styles.socialButtons}>
                        <button
                            type="button"
                            className={styles.socialButton}
                        >
                            Sign up with Google
                        </button>

                        <button
                            type="button"
                            className={styles.socialButton}
                        >
                            Sign up with Facebook
                        </button>
                    </div>

                    {/* Divider */}
                    <div className={styles.divider}>
                        <span></span>
                        <strong>OR</strong>
                        <span></span>
                    </div>

                    {/* Input fields */}
                    <div className={styles.inputGroup}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            aria-label="Full Name"
                            autoComplete="name"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            aria-label="Email"
                            autoComplete="email"
                            required
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            aria-label="Password"
                            autoComplete="new-password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={styles.submitButton}
                    >
                        Create Account
                    </button>

                    <p className={styles.loginLink}>
                        Already have an account?{" "}
                        <a href="#" onClick={(e) => { e.preventDefault(); onSwitch?.(); }}>Login</a>
                    </p>
                </form>
            </section>
        </main>
    );
}

export default SignUp;