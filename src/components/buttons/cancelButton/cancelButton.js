import './cancelButton.scss';
import { useNavigate } from "react-router-dom";

const CancelButton  = (props) => {
    const navigate =  useNavigate();
    return(
        <button type="button" className="btn-cancel" onClick={() => {navigate(`${props.href}`)}}>{props.children}</button>
    )
}
export default CancelButton