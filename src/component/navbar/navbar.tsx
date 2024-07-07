import { IoIosSunny } from 'react-icons/io';
import './navbar.css';

type Props = {}

export default function Navbar({} : Props){
    return(
        <div className='navbar-container'>
            네비게이션바
            <IoIosSunny className='navbar-logo-icon'/>
        </div>
    )
}


// 리액트 아이콘 (글자)
// npm install react-icons --save