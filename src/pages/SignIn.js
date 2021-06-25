import '../scss/pages/SignIn.scss';
import Button from '../components/Button';
import TextField from '../components/TextField';
import ShowCase from '../components/ShowCase';
import Logo from '../components/Logo';
import Link from '../components/Link';
import CoverImage from '../assets/cover.jpg';
import LogoImage from '../assets/logo.png';

export default function SignInPage() {
  return (
    <div className='container'>
      <div className='signin-section'>
        <Logo src={LogoImage} alt='logo' />
        <p className='title'>Sign In</p>
        <form>
          <div className='form-inputs-container'>
            <TextField
              id='userName'
              type='email'
              placeholder='Enter email'
              label='Email'
              iconName={'mail'}
            />
            <TextField
              id='password'
              type='password'
              placeholder='Enter Password'
              label='Password'
              iconName={'lock'}
            />
          </div>
          <Link
            url='#'
            title='Forgot Password'
            className='forgot-password-link'
          />
          <Button className='btn-signin' title='Sign In' />
        </form>
      </div>
      <ShowCase src={CoverImage} alt='showcase' />
    </div>
  );
}
