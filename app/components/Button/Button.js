
import buttonStyles from './button.module.css';

const Button=({children,theme})=> {

return(
<button className={theme==='primary' ?  buttonStyles.primary : buttonStyles.button}>


  {children}  
     </button>

)



}
export default Button;