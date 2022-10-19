import React from 'react';
interface ButtonProps {
    text: string;
    isEdit:Boolean,
    isCancel:Boolean,
    buttonClick: ()=>void;
  }
function ConButton(props:ButtonProps) {
  return (
     <button onClick={props.buttonClick} className={'w-[90px] justify-center flex flex-row items-center text-normalSize px-[16px] py-[10px] mx-[4px] rounded-[8px] '+(props.isCancel?' border-[1px] border-slashColor text-editBgColor':'text-whiteColor bg-editBgColor')}>
      {
        props.isEdit
        &&
        <svg className='mr-[8px]' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.39668 14.0964C1.43497 13.7518 1.45411 13.5795 1.50624 13.4185C1.55249 13.2756 1.61784 13.1396 1.70051 13.0142C1.79369 12.8729 1.91627 12.7504 2.16142 12.5052L13.1667 1.49999C14.0871 0.579512 15.5795 0.579513 16.5 1.49999C17.4205 2.42046 17.4205 3.91285 16.5 4.83332L5.49475 15.8386C5.2496 16.0837 5.12702 16.2063 4.98572 16.2995C4.86035 16.3821 4.72439 16.4475 4.58152 16.4937C4.42048 16.5459 4.24819 16.565 3.90362 16.6033L1.08331 16.9167L1.39668 14.0964Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      }
      <p>{props.text}</p>
    </button>
  );
}
export default ConButton;
