import Link from "next/link";
export default function clone() {
  return (
    <div>
       <title>facebook.com</title>
      <main className="flex justify-between">
        <div>
         
          <h1 className="text-[#0866ff] ml-4 font-sans  text-6xl font-bold md:ml-60 mt-52">
            facebook
          </h1>
          <br />
          <p className="md:w-[490px] w-[300px] ml-4 md:ml-60 text-xl md:text-3xl font-[400]">
            Facebook helps you connect and share with the people in your life
          </p>
        </div>

        <div className="bg-white md:w-[400px] w-[300px] md:mt-36 h-[350px] -ml-[500px] md:mr-64 rounded-xl mt-[450px]  shadow-md shadow-zinc-400 ">
       
          <ul>
            <li className="text-center">
              <input
                className="border-zinc-200 border-[1px] md:text-lg md:w-[350px] w-[250px] text-sm  rounded h-12 mt-6 px-4 placeholder-gray-400
               focus:outline-none focus:ring-0 focus:ring-[#0866ff] focus:border-[#0866ff] focus:shadow-lg transition-all"
                type="text"
                placeholder="Email address or phone number"
              />
            </li>

            <li className="text-center">
              <input
                className="border-zinc-200 border-[1px] text-sm md:text-lg md:w-[350px] w-[250px] rounded h-12 mt-6 px-4 placeholder-gray-400
               focus:outline-none focus:ring-0 focus:ring-[#3a4250] focus:border-[#0866ff] focus:shadow-lg transition-all"
                type="text"
                placeholder="Password"
              />
            </li>

            <li>
              <button className="text-center w-[250px] bg-[#0866ff] rounded text-white md:w-[350px] h-12 mt-4 ml-7 font-semibold text-[22px]">
                Log in
              </button>
            </li>
            <li>
              <p className="text-[#0866ff] text-center mt-2">
                Forgotten password?
              </p>
            </li>
            <hr className="md:w-[340px] w-[250px] ml-6 mt-4" />
            <li>
              <button className="bg-[#42b72a] w-40 md:w-48 h-12 text-center ml-20 md:ml-28 mt-6 rounded text-white font-semibold text-[16px] md:text-[18px]">
                Create new account
              </button>
            </li>
          </ul>
        </div>
      </main>
      <p className="md:ml-[930px] m;-[800px] mt-7 text-[15px]">
        <Link className="font-bold text-[15px]" href={"#"}>Create a page</Link> for a celebrity, brand or
        business.
      </p>
    </div>
  );
}
