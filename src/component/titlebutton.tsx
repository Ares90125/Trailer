import React from 'react';
interface ButtonProps {
    text: string;
    isActivate:Boolean,
    buttonClick: ()=>void;
  }
function TitleButton(props:ButtonProps) {
  return (
     <button onClick={props.buttonClick} className={'text-subHeadColor text-normalSize px-[8px] py-[4px] mx-[4px] rounded-[6px]'+(props.isActivate?' bg-titleBgColor':'')}>{props.text}</button>
  );
}
export default TitleButton;
