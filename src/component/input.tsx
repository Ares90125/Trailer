import React from 'react';
interface InputProps {
    width:string,
    text: string;
    val:string;
    isActivate:Boolean,
    buttonClick: (val:String)=>void;
  }
function CusInput(props:InputProps) {
  return (
    <div className={'flex flex-col mr-[24px]' +(props.width=='96'?' w-[96px]':props.width=='154'?' w-[154px]':' w-[256px]')}>
      <p className='text-textColor mb-[6px]'>{props.text}</p>
     {props.isActivate?<input onChange={(val)=>{}}   className={"appearance-none border border-slashColor rounded-[8px] text-mediumSize font-normal py-[10px] px-[14px] text-headColor mb-3 leading-tight focus:outline-none focus:shadow-outline"} placeholder="---"></input>:
      <p className='text-contentColor font-mediumSize my-3 '>{(props.val==''?'---':props.val)}</p>
     }
    </div>
  );
}
export default CusInput; 

//{.../* value={(props.val)} */}