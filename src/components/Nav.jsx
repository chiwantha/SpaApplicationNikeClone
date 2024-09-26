import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import {navLinks} from '../constants';
import Button from './Button';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='justify-between flex items-center max-container'>
        <a href="/">
          <img 
            src={headerLogo} 
            alt='Logo' 
            width={130} 
            height={29}
          ></img>
        </a>

        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-3'>

          <Button label="WhatsApp"
          padding_x="px-2 md:px-5" padding_y="py-2 md:py-3" />

          <div className='hidden max-lg:block'>
            <img src={hamburger} alt='Hamburger' width={25} height={25}
            className=''>
            </img>
          </div>

        </div>
      </nav>
    </header>
  )
}

export default Nav