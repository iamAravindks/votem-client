import React from 'react'

const OTP = () => {
  return (
    <div className=" w-full flex-[2]  flex justify-center  flex-col gap-7 items-center p-4 lg:order-2 lg:flex-1 lg:max-w-[50%] lg:p-7 animate-slide-left">
      <div className="container mx-auto ">
        <div className="max-w-sm mx-auto md:max-w-lg ">
          <div className="w-full">
            <div className="bg-purple-600 h-96 py-3 rounded text-center text-white flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold">OTP Verification</h1>
              <div className="flex flex-col mt-4">
                <span>Enter the OTP you received at</span>
                <span className="font-bold">+91 ******876</span>
              </div>

              <form
                id="otp"
                className="flex flex-col justify-center items-center text-center px-2 "
              >
                <div className="flex flex-row ">
                  <input
                    className="m-2 border h-10 w-10 text-center form-control rounded text-black"
                    type="text"
                    id="first"
                    maxLength="1"
                    required
                  />
                  <input
                    className="m-2 border h-10 w-10 text-center form-control rounded text-black"
                    type="text"
                    id="second"
                    maxLength="1"
                    required
                  />
                  <input
                    className="m-2 border h-10 w-10 text-center form-control rounded text-black"
                    type="text"
                    id="third"
                    maxLength="1"
                    required
                  />
                  <input
                    className="m-2 border h-10 w-10 text-center form-control rounded text-black"
                    type="text"
                    id="fourth"
                    maxLength="1"
                    required
                  />
                  <input
                    className="m-2 border h-10 w-10 text-center form-control rounded text-black"
                    type="text"
                    id="fifth"
                    maxLength="1"
                    required
                  />
                  <input
                    className="m-2 border h-10 w-10 text-center form-control rounded text-black"
                    type="text"
                    id="sixth"
                    maxLength="1"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  GET OTP
                </button>
              </form>

              <div className="flex justify-center text-center mt-5">
                <a className="flex items-center text-white hover:text-blue-900 cursor-pointer">
                  <span className="font-bold">Resend OTP</span>
                  <i className="bx bx-caret-right ml-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OTP