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
import starmd from '../public/star-md.svg';
import starsm from '../public/star-sm.svg';
import lgtv from '../public/lgtv.png';

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
          <span className="bg-white text-sm px-4 py-2 rounded-full m-2 text-black w-fit">
            Get more accurate results
          </span>
          <span className="border-2 px-4 text-sm sm:text-md py-2 m-1 border-gradient bg-black">
            Hangout with like-minded people
          </span>
        </div>
      </div>

      <div className="w-full relative bottom-28 flex flex-col justify-center bg-transparent items-center">
        <img
          className="relative left-20 top-6 size-16"
          src={starmd}
          alt="star"
        />
        <img
          className="rounded-full h-44 w-44 p-4 bg-gray-800"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlU3KKehF60rMuD7FPFv5XfGRyVFodjWXnQ&usqp=CAU"
          alt="user-img"
        />
        <img
          className="relative size-5 right-20 bottom-8"
          src={starsm}
          alt="star"
        />

        <span className="text-gray-400">
          <span className="text-lg text-white">You</span>, 21
        </span>
        <span className="text-sm text-gray-400">Female</span>
      </div>

      <div className="flex relative bottom-24 flex-col bg-transparent sm:flex-row sm:justify-around sm:mb-10">
        <div className="space-y-3 p-5 ">
          <div>
            <span className="uppercase tx-color mr-2">first name</span>
            Jennifer
          </div>
          <div>
            <span className="uppercase tx-color mr-2">last name</span>
            John
          </div>
          <div>
            <span className="uppercase tx-color mr-2">birthday</span>7 May 2005
          </div>
          <div className="text-gray-400">
            <span className="uppercase tx-color mr-2">age</span>
            22
          </div>
          <div>
            <span className="uppercase tx-color mr-2">gender</span>
            Female
          </div>
          <div className="text-gray-400">
            <span className="uppercase tx-color mr-2">phone</span>
            +91 8283016334
          </div>
          <div>
            <span className="uppercase tx-color mr-2">email</span>
            jenni.john@gmail.com
          </div>
        </div>

        <div className="flex flex-col mt-5 p-5 pb-0 space-y-3">
          <div className="flex">
            <FaEarthAmericas className="mt-1 mr-2 text-gray-400" />
            San fransisco
          </div>
          <div className="flex">
            <PiGraduationCapBold className="mt-1 mr-2 text-gray-400" />
            Havard
          </div>
          <div className="flex">
            <MdOutlineWorkOutline className="mt-1 mr-2 text-gray-400" />
            Not yet
          </div>
          <div className="flex font-normal text-sm w-3/4 text-gray-400">
            <IoIosFlower className="mt-1 mr-2 size-8 font-bold pb-3 text-white" />
            Tell everyone what's the most interesting thing about you?
          </div>
        </div>
      </div>

      <div className="flex text-xl px-5 font-bold">
        People
        <span className="text-gradient bg-gradient-to-r from-pink-500 to-blue-500 mx-2">
          similar to you
        </span>
        <span className="flex p-2 bg-gradient font-semibold text-sm rounded-lg">
          <FaPlusMinus className="mt-1" />
          10%
          <FaArrowDown className="mt-1" />
        </span>
      </div>

      <div className="pb-10 flex flex-wrap px-5">
        <div className="rounded-full justify-center items-center flex flex-col w-1/2 sm:w-1/4 md:w-1/5 mt-10">
          <div className="h-24 w-24 sm:w-32 sm:h-32 rounded-xl bg-gray-600 flex flex-wrap p-3 sm:p-4">
            {images.map((image) => (
              <img className="rounded-full w-1/3 h-1/3" src={image} alt="img" />
            ))}
          </div>

          <span className="font-bold text-sm my-3">Behaviour(27%)</span>
          <span className="text-sm flex space-x-1">
            <FaFemale className="mt-1 bg-pink-600 rounded-sm" />
            1300.
            <FaMale className="mt-1 bg-blue-600 rounded-sm" />
            2400.
            <img
              className=' size-6'
              src={lgtv} alt="flag" />
            15
          </span>
        </div>
        <div className="rounded-full justify-center items-center flex flex-col w-1/2 sm:w-1/4 md:w-1/5 mt-10">
          <div className="h-24 w-24 sm:w-32 sm:h-32 rounded-xl bg-gray-600 flex flex-wrap p-3 sm:p-4">
            {images.map((image) => (
              <img className="rounded-full w-1/3 h-1/3" src={image} alt="img" />
            ))}
          </div>

          <span className="font-bold text-sm my-3">Interests(6%)</span>
          <span className="text-sm flex space-x-1">
            <FaFemale className="mt-1 bg-pink-600 rounded-sm" />
            210.
            <FaMale className="mt-1 bg-blue-600 rounded-sm" />
            1400.
            <img
              className=' size-6'
              src={lgtv} alt="flag" />5
          </span>
        </div>
        <div className="rounded-full justify-center items-center flex flex-col w-1/2 sm:w-1/4 md:w-1/5 mt-10">
          <div className="h-24 w-24 sm:w-32 sm:h-32 rounded-xl bg-gray-600 flex flex-wrap p-3 sm:p-4">
            {images.map((image) => (
              <img className="rounded-full w-1/3 h-1/3" src={image} alt="img" />
            ))}
          </div>

          <span className="font-bold text-sm my-3">Values(81%)</span>
          <span className="text-sm flex space-x-1 ">
            <FaFemale className="mt-1 bg-pink-600 rounded-sm" />
            34k.
            <FaMale className="mt-1 bg-blue-600 rounded-sm" />
            41k.
            <img
              className=' size-6'
              src={lgtv} alt="flag" />
            1.5k
          </span>
        </div>
        <div className="rounded-full justify-center items-center flex flex-col w-1/2 sm:w-1/4 md:w-1/5 mt-10">
          <div className="h-24 w-24 sm:w-32 sm:h-32 rounded-xl bg-gray-600 flex flex-wrap p-3 sm:p-4">
            {images.map((image) => (
              <img className="rounded-full w-1/3 h-1/3" src={image} alt="img" />
            ))}
          </div>

          <span className="font-bold text-sm my-3">Exroversion(0.98%)</span>
          <span className="text-sm flex space-x-1">
            <FaFemale className="mt-1 bg-pink-600 rounded-sm" />
            34.
            <FaMale className="mt-1 bg-blue-600 rounded-sm" />
            280.
            <img
              className=' size-6'
              src={lgtv} alt="flag" />1
          </span>
        </div>
        <div className="rounded-full justify-center items-center flex flex-col w-1/2 sm:w-1/4 md:w-1/5 mt-10">
          <div className="h-24 w-24 sm:w-32 sm:h-32 rounded-xl bg-gray-600 flex flex-wrap p-3 sm:p-4">
            {images.map((image) => (
              <img className="rounded-full w-1/3 h-1/3" src={image} alt="img" />
            ))}
          </div>

          <span className="font-bold text-sm my-3">Introversion(99.2%)</span>
          <span className="text-sm flex space-x-1">
            <FaFemale className="mt-1 bg-pink-600 rounded-sm" />
            21k.
            <FaMale className="mt-1 bg-blue-600 rounded-sm" />
            37k.
            <img
              className=' size-6'
              src={lgtv} alt="flag" />3
          </span>
        </div>
      </div>
    </div>
  );
}

export default App
