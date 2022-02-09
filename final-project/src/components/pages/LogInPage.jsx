import '../../App.css';
import LoginForm from '../LoginForm/LoginForm';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function LogInPage () {
        return (
            <div className='login-page'>
                <Header />
                <LoginForm />
            </div>
        );
  }

export default LogInPage;
