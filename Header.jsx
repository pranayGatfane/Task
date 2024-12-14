import { AiFillApple } from "react-icons/ai";
import { IoMdSearch } from "react-icons/io";
import homePage from '../assets/home.jpg'

export const Header = () => {
  return (
    <div className="container">
      <div className='navbar'>
        <div className='icon'>

          <AiFillApple />

        </div>
        <div className='links'>
          <div>Home</div>
          <div>About</div>
          <div>Conatct</div>
          <IoMdSearch />
        </div>
      </div>

      <div className="homePage">
        <img src={homePage} alt="landing Page" />
      </div>
    </div>
  )
}
