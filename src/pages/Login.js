import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../firebase.init';



const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);


    const { register, formState: { errors }, handleSubmit } = useForm();


    const navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


  
    useEffect(() => {
        if (user || gUser) {
            console.log(user || gUser)
            navigate(from, { replace: true });
        }
    }, [user,gUser, from, navigate])

    let firebaseError;

    if (loading || gLoading) {
        return <div className=' flex justify-center font-bold text-3xl mt-10'> <p>Loading...</p></div>
    }

    if (error ||gError) {
        firebaseError = <small className='text-red-500'>{error?.message}</small>
    }

    const onSubmit = data => {

        signInWithEmailAndPassword(data.email, data.password)

    }
    return (
        <div className='flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-xl">Log in</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>

                            </label>
                            <input

                                type="email"
                                placeholder="Email"
                                className="input input-bordered border-black w-full max-w-xs"

                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'This is required field'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'This is wrong email'
                                    }
                                })} />

                            <label className="label">

                                {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email?.message}</span>}
                            </label>

                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>

                            </label>
                            <input

                                type="password"
                                placeholder="password"
                                className="input input-bordered border-black w-full max-w-xs"

                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'This is password required field'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters'
                                    }
                                })} />

                            <label className="label">

                                {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password?.message}</span>}
                            </label>

                        </div>
                        {firebaseError}
                        <button
                            type="submit"
                            className="btn btn-outline w-full hover:bg-pink-700">Submit</button>


                    </form>


                    <small>New to this site  ? <Link className='text-pink-700' to='/signUp'>Create new account</Link></small>

                    <div className="divider">OR</div>

                    <button onClick={() => signInWithGoogle()}    className="btn btn-outline w-full hover:bg-pink-700">Continue with google</button>



                </div>
            </div>
        </div>
    );
}

export default Login;