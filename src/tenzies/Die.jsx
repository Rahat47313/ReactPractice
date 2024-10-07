import PropTypes from "prop-types";

export default function Die(props){
    return(
        <div onClick={props.holdDice} className={`flex justify-center items-center box-border cursor-pointer text-[2rem] ${props.isHeld? 'bg-[#59e391]':'bg-white'} rounded-md shadow-[0px_2px_2px_rgba(0,0,0,0.15)] w-[50px] h-[50px]`}>
            <div>{props.value}</div>
        </div>
    );
}

Die.propTypes = {
    holdDice: PropTypes.func,
    isHeld: PropTypes.bool,
    value: PropTypes.number,
  };