import Link from 'next/link';
import headerStyles from  './header.module.css'
import Button from '../Button/Button';
import Image from 'next/image';

//<Button >Sign Up</Button>
/*<li>
<Link href='/sign-up'className={headerStyles.link}> Sign up</Link>
</li>

*/
const Header=()=>{
    return (
        <header className={headerStyles.header}>
            {/* <img className={headerStyles.img} src='/assets/1.svg' alt=""/> */}
            <Image src='/assets/1.svg'  height={40} width={60} alt="company name logo"/>
            <ul className={headerStyles.ul}>
            <li>
    <Link href='/login' className={headerStyles.link}>Login</Link>
</li>
                <li>
                <Link href='/matches'className={headerStyles.link} >Matches</Link>
                </li>
                <li>
                     <Link href='/my-list'className={headerStyles.link} > My list</Link>
                </li>
                <li>
                     <Link href='/help' className={headerStyles.link}> Help</Link>
                </li>
                <li>
                <Link href='/settings' className={headerStyles.link}> Settings</Link>
                </li>
            
            </ul>
            <Button theme='primary'>Sign Up</Button>
            
            </header>

    )};
 
export default Header;