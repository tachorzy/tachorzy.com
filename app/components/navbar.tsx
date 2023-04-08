import NavStyle from '../styles/NavBarStyle.module.css'
import Image from 'next/image'
import { ManropeExtraBold } from '../pages'

const NavBar = () => {

    return(
        <div className={ManropeExtraBold.className}>
            <div className={NavStyle.navContainer}>
                <ul className={NavStyle.navItems}>

                </ul>
            </div>
        </div>

    );
}

export default NavBar;