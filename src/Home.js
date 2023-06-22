import {FaTwitter,FaHeart,FaShoppingCart, FaFacebookF, FaPlus} from 'react-icons/fa';
import {BsGoogle, BsPersonFill,  BsArrowLeft} from 'react-icons/bs';
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';
import sofa from './images/sofa.png';


export default function Home() {
  return (
    <div >
      <div className="flex lg:flex-row flex-col w-screen h-screen overflow-hidden text-black">
        <div className="bg-white h-full flex-1">
        <div className="flex flex-col">
          <ul className="flex justify-evenly">
            <li className="font-bold text-md text-gray-500 px-16 py-8">Types</li>
            <li className="font-bold text-md text-gray-500 bg-[#fff0c8] px-16 py-8">Prices</li>
            <li className="font-bold text-md text-gray-500 px-16 py-8">Contact</li>
          </ul>
          <div className="flex flex-col  text-gray-900 pl-1 sm:pl-10 md:pl-32">
          <h1 className="font-serif font-bold text-5xl mt-20 mb-2 ">Wood Candy</h1>
          <h1 className="font-bold font-serif   flex text-5xl  mb-6">Sofa</h1>
          </div>
          <p className="font-serif text-gray-500 items-center text-start pl-1 sm:pl-104 md:pl-32">
          Haileamlak Waleligne is a driven MERN stack developer <br/>
           with a passion for crafting exceptional websites.<br/>
            With a keen eye for detail and a desire to innovate,<br/>
             Haileamlak is dedicated to making his mark in the <br/>
              web industry and driving the next wave of <br/>
              technological revolution.</p>
              <p className="font-bold text-5xl font-serif pl-1 sm:pl-104 md:pl-32 py-4">$399.00</p>
              <p className="px-4 py-2 bg-[#fff0c8] text-lg my-4 w-32 ml-1 sm:ml-104 md:ml-32 font-semibold">Buy Now</p>
              <div className=" flex justify-between px-20">
              <div className="grid grid-cols-3 gap-12 justify-between text-gray-500 p-3 ">
                  <BsGoogle />
                  <FaTwitter />
                  <FaFacebookF />
                </div>
                <div>
                <BsArrowLeft  className='font-extrabold text-5xl text-gray-500'/>
                </div>
              </div>
        </div>
        </div>
        <div className="bg-[#fff0c8] h-full flex-1">
        <div className="flex justify-end mt-8 mr-16">
          <FaHeart  className="mx-4 my-3 "/>
          <FaShoppingCart  className="mx-4 my-3 "/>
          <BsPersonFill  className="mx-4 my-3 "/>
        </div>
        <div className="flex right-72">
          <div className="left-[-15%] right-72 relative" >
          <img src={sofa} alt="sofa"  />
          </div>
          <div className='right-4 absolute rotate-90 top-[37%] '>
            <span className="font-bold text-2xl">01</span>
            <span  className="font-bold text-gray-500">/03</span>
          </div>
        </div>
        <div className="flex bottom-0 justify-between sticky pl-32 pt-32">
          <div className="font-bold text-5xl pt-10">
            <HiOutlineArrowNarrowRight />
          </div>
          <div className="flex font-serif bg-[#fff192] p-8 px-16 top-6 pt-12 ">
            <button className="pr-2 pb-2 text-2xl">Add to Cart </button>
            <FaPlus className="mt-2 ml-3"/>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}