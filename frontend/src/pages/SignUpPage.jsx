import React, { useState } from 'react'
import { Link } from 'react-router'
import useSignUp from '../hooks/useSignup'

const SignUpPage = () => {

  const [signupData,setSignupData] = useState({
    fullName:"",
    email:"",
    password:"",
  })

  // const queryClient = useQueryClient();

  // const { mutate:signupMutation, isPending, error } = useMutation({
  //   mutationFn: signup,
  //   onSuccess: () => queryClient.invalidateQueries({queryKey: ["authUser"]}),
  // });

  const {isPending,error,signupMutation} = useSignUp()

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData)
  }

  if(error){
    console.log(error)
  }

  return (
    <div className='h-screen flex items-center justify-center p-4 sm:p-6 md:p-8' data-theme="night"> 
      <div className='border border-primary/50 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden'>
        {/* Singup Form - Left side*/}
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          {/*LOGO*/}
          <div className="mb-4 flex items-center justify-start gap-2">
            <img src="/Logo.png" alt="Logo" className="w-20 h-25 rounded-full" />
            <span className="text-3xl font-bold font-roboto pb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary/100 tracking-wider">
              Aurisync
            </span>
          </div>
          {/*Error message if any*/}
          {error && (
            <div className="alert alert-error shadow-lg mb-4 text-bold">
              <span>
              
                {error.response.data}
              </span>
            </div>
          )}
          <div className="w-full">
            <form onSubmit={handleSignup} className="flex flex-col gap-4">
              <div className="space-y-4 ">
                <div>
                  <h2 className="text-xl font-semibold ">
                    Create an Account
                  </h2>
                  <p className="text-sm opacity-80">
                    Join Aurisync and start your conversation journey!
                  </p>
                </div>

                <div className="space-y-3">
                  {/*Full Name*/}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input type="text"
                      placeholder='John Doe'
                      className='input input-bordered w-full'
                      value={signupData.fullName}
                      onChange={(e) => setSignupData({...signupData, fullName: e.target.value})}
                      required
                    />
                  </div>
                  {/*Email*/}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email"
                      placeholder='john@gmail.com'
                      className='input input-bordered w-full'
                      value={signupData.email}
                      onChange={(e) => setSignupData({...signupData, email: e.target.value})}
                      required
                    />
                  </div>
                  {/*Password*/}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password"
                      placeholder='******'
                      className='input input-bordered w-full'
                      value={signupData.password}
                      onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                      required
                    />
                    <p className="text-xs opacity-70 mt-1">
                      Password must be atleast 6 characters
                    </p>
                  </div>

                </div>
                <button 
                  type="submit"
                  className="btn bg-primary/50 w-full rounded-full  hover:btn-secondary transition duration-200 ease-in-out">
                    {isPending? (
                      <>
                      <span className="loading loading-spinner loading-sm">
                      </span>
                       Signing Up...
                      </>
                    ) : 
                    (
                      "Create Account"
                    )
                    }
                </button>

                <div className="text-center mt-4">
                  <p className="text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-primary hover:underline">
                      Sign In
                    </Link>
                  </p>
                </div>
              
              </div>
            </form>
          </div>
        </div>

        {/*Signup Form - Right side*/}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/5 items-center justify-center">
          <div className="max-w-md p-8">
            {/* Illustration */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <img src="/video-call.png" alt="Language connection illustration" className="w-full h-full" />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">Connect with language partners worldwide</h2>
              <p className="opacity-90">
                Practice conversations, make friends, and improve your language skills together
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SignUpPage