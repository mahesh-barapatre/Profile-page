import './App.css'
import { FaArrowLeft } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import { PiGraduationCapBold } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { IoIosFlower } from "react-icons/io";
import { FaPlusMinus } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";
import { MdFlag } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";

function App() {

  let images = [
    "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1218862687.1703267619&semt=sph",
    "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.1.1218862687.1703267619&semt=sph ",
    "https://img.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_53876-129387.jpg?size=626&ext=jpg&ga=GA1.1.1218862687.1703267619&semt=sph",
    "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&ga=GA1.1.1218862687.1703267619&semt=sph",
    "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1218862687.1703267619&semt=sph",
    "https://img.freepik.com/premium-photo/portrait-happy-young-woman-standing-isolated_1258-24779.jpg?size=626&ext=jpg&ga=GA1.1.1218862687.1703267619&semt=sph",
    "https://img.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_53876-129387.jpg?size=626&ext=jpg&ga=GA1.1.1218862687.1703267619&semt=sph",
    "https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?size=626&ext=jpg&ga=GA1.1.1218862687.1703267619&semt=sph",
    "https://img.freepik.com/premium-photo/portrait-happy-young-woman-standing-isolated_1258-24779.jpg?size=626&ext=jpg&ga=GA1.1.1218862687.1703267619&semt=sph",
  ];
  return (
    <div className="bg-black text-white h-full">
      <div className="p-5 h-[50vh] bg-img bg-cover flex justify-between">
        <FaArrowLeft />
        <div className="flex flex-col items-end font-semibold">
          <span className="bg-white px-3 py-2 rounded-full m-2 text-black w-fit">
            Get more accurate results
          </span>
          <span className="border-2 px-3 text-sm sm:text-md py-2 m-2 border-gradient bg-black">
            Hangout with like-minded people
          </span>
        </div>
      </div>

      <div className="w-full relative bottom-24 flex flex-col justify-center bg-transparent items-center">
        <IoStarSharp className='relative size-4 left-16 top-6 bg-yellow-300 blur' />
        <IoStarSharp className='relative size-6 left-16 text-yellow-300' />
        <img
          className="rounded-full h-32 w-32 p-3 bg-gray-800"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlU3KKehF60rMuD7FPFv5XfGRyVFodjWXnQ&usqp=CAU"
          alt="user-img"
        />
        <IoStarSharp className='relative right-14 bottom-2 bg-yellow-300 blur' />
        <IoStarSharp className='relative bottom-6 right-14 text-yellow-300' />

        <span className="">
          <span className="font-bold">You</span>, 21
        </span>
        <span>Female</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-around sm:mb-10">
        <div className="font-semibold p-5 ">
          <div>
            <span className="uppercase text-fuchsia-500 mr-2">first name</span>
            Jennifer
          </div>
          <div>
            <span className="uppercase text-fuchsia-500 mr-2">last name</span>
            John
          </div>
          <div>
            <span className="uppercase text-fuchsia-500 mr-2">birthday</span>7
            May 2005
          </div>
          <div>
            <span className="uppercase text-fuchsia-500 mr-2">age</span>
            22
          </div>
          <div>
            <span className="uppercase text-fuchsia-500 mr-2">gender</span>
            Female
          </div>
          <div>
            <span className="uppercase text-fuchsia-500 mr-2">phone</span>
            +91 8283016334
          </div>
          <div>
            <span className="uppercase text-fuchsia-500 mr-2">email</span>
            jenni.john@gmail.com
          </div>
        </div>

        <div className="flex flex-col space-y-3 my-5 p-5 font-bold">
          <div className="flex">
            <FaEarthAmericas className="mt-1 mr-2" />
            San fransisco
          </div>
          <div className="flex">
            <PiGraduationCapBold className="mt-1 mr-2" />
            Havard
          </div>
          <div className="flex">
            <MdOutlineWorkOutline className="mt-1 mr-2" />
            Not yet
          </div>
          <div className="flex font-normal text-sm w-3/4">
            <IoIosFlower className="mt-1 mr-2 size-8 font-bold pb-3" />
            Tell everyone what's the most interesting thing about you?
          </div>
        </div>
      </div>

      <div className="flex text-xl my-3 px-5">
        People
        <span className="text-gradient bg-gradient-to-r from-pink-500 to-blue-500 mx-2">
          similar to you
        </span>
        <span className="flex p-1 bg-gradient rounded-lg">
          <FaPlusMinus className="mt-1" />
          10%
          <FaArrowDown className="mt-1" />
        </span>
      </div>

      <div className="py-10 flex flex-wrap px-5">
        <div className="rounded-full justify-center items-center flex flex-col w-1/2 sm:w-1/4 md:w-1/5 my-10">
          <div className="h-28 w-28 sm:w-40 sm:h-40 rounded-xl bg-gray-600 flex flex-wrap p-2 sm:p-3">
            {images.map((image) => (
              <img className="rounded-full w-1/3 h-1/3" src={image} alt="img" />
            ))}
          </div>

          <span className="font-bold text-sm my-3">Behaviour(27%)</span>
          <span className="text-sm flex space-x-2 font-bold">
            <FaMale className="mt-1 text-sky-400" />
            1000.
            <FaFemale className="mt-1 text-pink-400" />
            2400.
            <MdFlag className="mt-1 lg-gradient" />
            15
          </span>
        </div>
        <div className="rounded-full justify-center items-center flex flex-col w-1/2 sm:w-1/4 md:w-1/5 my-10">
          <div className="h-28 w-28 sm:w-40 sm:h-40 rounded-xl bg-gray-600 flex flex-wrap p-2 sm:p-3">
            {images.map((image) => (
              <img className="rounded-full w-1/3 h-1/3" src={image} alt="img" />
            ))}
          </div>

          <span className="font-bold text-sm my-3">Interests(6%)</span>
          <span className="text-sm flex space-x-2 font-bold">
            <FaMale className="mt-1 text-sky-400" />
            210.
            <FaFemale className="mt-1 text-pink-400" />
            1400.
            <MdFlag className="mt-1 lg-gradient" />
            5
          </span>
        </div>
        <div className="rounded-full justify-center items-center flex flex-col w-1/2 sm:w-1/4 md:w-1/5 my-10">
          <div className="h-28 w-28 sm:w-40 sm:h-40 rounded-xl bg-gray-600 flex flex-wrap p-2 sm:p-3">
            {images.map((image) => (
              <img className="rounded-full w-1/3 h-1/3" src={image} alt="img" />
            ))}
          </div>

          <span className="font-bold text-sm my-3">Values(81%)</span>
          <span className="text-sm flex space-x-2 font-bold">
            <FaMale className="mt-1 text-sky-400" />
            34k.
            <FaFemale className="mt-1 text-pink-400" />
            41k.
            <MdFlag className="mt-1 lg-gradient" />
            1.5k
          </span>
        </div>
        <div className="rounded-full justify-center items-center flex flex-col w-1/2 sm:w-1/4 md:w-1/5 my-10">
          <div className="h-28 w-28 sm:w-40 sm:h-40 rounded-xl bg-gray-600 flex flex-wrap p-2 sm:p-3">
            {images.map((image) => (
              <img className="rounded-full w-1/3 h-1/3" src={image} alt="img" />
            ))}
          </div>

          <span className="font-bold text-sm my-3">Exroversion(0.98%)</span>
          <span className="text-sm flex space-x-2 font-bold">
            <FaMale className="mt-1 text-sky-400" />
            34.
            <FaFemale className="mt-1 text-pink-400" />
            280.
            <MdFlag className="mt-1 lg-gradient" />
            1
          </span>
        </div>
        <div className="rounded-full justify-center items-center flex flex-col w-1/2 sm:w-1/4 md:w-1/5 my-10">
          <div className="h-28 w-28 sm:w-40 sm:h-40 rounded-xl bg-gray-600 flex flex-wrap p-2 sm:p-3">
            {images.map((image) => (
              <img className="rounded-full w-1/3 h-1/3" src={image} alt="img" />
            ))}
          </div>

          <span className="font-bold text-sm my-3">Introversion(99.2%)</span>
          <span className="text-sm flex space-x-2 font-bold">
            <FaMale className="mt-1 text-sky-400" />
            21k.
            <FaFemale className="mt-1 text-pink-400" />
            37k.
            <MdFlag className="mt-1 lg-gradient" />
            3
          </span>
        </div>
      </div>
    </div>
  );
}

export default App
