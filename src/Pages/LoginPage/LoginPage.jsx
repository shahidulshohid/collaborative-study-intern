import Lottie from 'react-lottie';
import signInLottieData from "../../assets/lottie/loginImg.json";
const LoginPage = () => {
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value 
        const password = form.password.value 
        console.log(email, password)
    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: signInLottieData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          <Lottie options={defaultOptions} height={300} width={300} />
          </div>
          <div className="card w-full max-w-sm shrink-0 shadow-2xl">
          <h3 className='text-2xl md:text-2xl text-center mt-6'>Login your account</h3>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name='password'
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
