import layoutStyles from './layout.module.css';
import Header from '../Header/Header';

const Layout=({children})=> {

return(

  <>
  <Header/>
<main className={layoutStyles.container}> 
{children}
</main>
</>
)



}
export default Layout;