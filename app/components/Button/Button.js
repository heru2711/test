import buttonStyles from './button.module.css';

const Button=({text})=> {

return(
<button className={buttonStyles.button}>


  {text}  
     </button>

)



}
export default Button;