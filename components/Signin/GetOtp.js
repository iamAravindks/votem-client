import React from 'react'

const GetOtp = ({ setIsOtp }) =>
{
    
  return (
    <div className="w-full flex-[2]  flex justify-center  flex-col gap-7 items-center p-4 lg:order-2 lg:flex-1 lg:max-w-[50%] lg:p-7 animate-slide-left">
      <h2 className="text-purple-600 text-2xl font-semibold leading-8 tracking-wider my-3">
        Voter Sign In
      </h2>
      <form className="min-w-full px-8 flex flex-col gap-10 lg:min-w-[75%]" onSubmit={()=>setIsOtp(true)}>
        <div className="relative z-0 min-w-full group">
          <input
            type="number"
            name="floating_number"
            id="floating_number"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
             minLength={'12'}
          />
          <label
            htmlFor="floating_number"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Aadhaar Number
          </label>
        </div>

        <div className="relative z-0 min-w-full group">
          <input
            type="date"
            name="floating_date"
            id="floating_date"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="floating_date"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Date Of Birth
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-purple-700 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800"
        >
          GET OTP
        </button>
      </form>
    </div>
  );
}


const getStaticProps = (context) =>
{
    return {
        props:context.setIsOtp
    }
}

export default GetOtp