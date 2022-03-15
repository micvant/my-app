import l from './Login.module.css';
import icon from './images/bg-01.jpg';

let login = (props) =>{

    return (
        <div>
        <div className={l.limiter}>
            <div className={l.containerLogin100} >
                <div className={`${l.wrapLogin100} ${l.pl55} ${l.pr55} ${l.pt65} ${l.pb54}`}>
                    <form className={l.login100form}>
					<span className={`${l.login100formtitle} ${l.pb49}`} >
						Login
					</span>

                        <div className={`${l.validateInput} ${l.wrapInput100} ${l.mb23}`} data-validate="Username is reauired">
                            <span className={l.labelInput100}>Username</span>
                            <input className={l.input100} type="text" name="username" placeholder="Type your username"/>
                                <span className={l.focusInput100} data-symbol="&#xf206;"></span>
                        </div>

                        <div className={`${l.wrapInput100} ${l.validateInput}`} data-validate="Password is required">
                            <span className={l.labelInput100}>Password</span>
                            <input className={l.input100} type="password" name="pass" placeholder="Type your password"/>
                                <span className={l.focusInput100} data-symbol="&#xf190;"></span>
                        </div>

                        <div className={`${l.textRight} ${l.pt8} ${l.pb31}`}>
                            <a href="#">
                                Forgot password?
                            </a>
                        </div>

                        <div className={l.containerLogin100FormBtn}>
                            <div className={l.wrapLogin100FormBtn}>
                                <div className={l.login100FormBgbtn}></div>
                                <button className={l.login100FormBtn}>
                                    Login
                                </button>
                            </div>
                        </div>

                        <div className={`${l.txt1} ${l.textCenter} ${l.pt54} ${l.pb20}`}>
						<span>
							Or Sign Up Using
						</span>
                        </div>

                        <div className={l.flexCM}>
                            <a href="#" className={`${l.login100SocialItem} ${l.bg1}`}>
                                <i className="fa fa-facebook"></i>
                            </a>

                            <a href="#" className="login100-social-item bg2">
                                <i className="fa fa-twitter"></i>
                            </a>

                            <a href="#" className="login100-social-item bg3">
                                <i className="fa fa-google"></i>
                            </a>
                        </div>

                        <div className={`${l.flexColC} ${l.pt155}`}>
						<span className={`${l.txt1} ${l.pb17}`}>
							Or Sign Up Using
						</span>

                            <a href="#" className={l.txt2}>
                                Sign Up
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    <div id="dropDownSelect1">ds</div>
    </div>
)
}

export default login;