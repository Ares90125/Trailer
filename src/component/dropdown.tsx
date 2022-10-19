import list, { List } from 'postcss/lib/list';
import React, { useState, useEffect, useRef } from 'react';
import { isArray } from 'util';
import {ListType} from '../server/defaultapi';
interface Dropdownprops {
    isEdit:Boolean;
    text:string|null;
    id: number;
    width:string;
    list:Array<ListType>|number;
    buttonClick: (val:number)=>void;
  }

function DropDown(props:Dropdownprops) {
    function useOutsideAlerter(ref) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
            setOpen(false);
        }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    }
  const [open, setOpen]=useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <div className={'flex flex-col mr-[24px]' +(props.width=='96'?' w-[96px]':props.width=='154'?' w-[154px]':' w-[256px]')}>
       {props.text!==null&& <p className='text-textColor mb-[6px]'>{props.text}</p>}
        <div ref={wrapperRef} className={'relative' +(props.width=='96'?' w-[96px]':props.width=='154'?' w-[154px]':' w-[256px]')}>
            <button onClick={()=>{setOpen(!open)}} className={'flex  flex-row justify-between w-full items-center  py-[10px] text-normalSize rounded-[8px] border-[1px]'+(props.isEdit?' border-slashColor px-[14px]':props.width=='256'?' px-[14px]  border-whiteColor':' border-whiteColor')}>
                <p className={props.id==0?'text-contentColor':'text-headColor'}>{props.id==0?typeof props.list !== "number"?'Select model style':'1':typeof props.list !== "number"?props.list[props.id-1].name:props.id}</p>
                <svg className={(props.isEdit?'':' hidden')} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="#667085" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <div className={'z-50 bg-whiteColor absolute w-full shadow-dropshadow scrollbar max-h-[220px] rounded-[8px] overflow-auto'+(open?'':' hidden')+(props.isEdit?'':' hidden')}>
                { typeof props.list !== "number"?props.list.map(
                    (value, index)=>
                        <div key={index} onClick={()=>{props.buttonClick(index+1); setOpen(false)}} className={'w-full h-[44px] pl-[14px] flex items-center'+(props.id==index+1?' bg-titleBgColor':'')}>
                        <p>{value.name}</p>
                        </div>
                    ):
                    new Array(props.list).fill(0).map(
                        (value, index)=>
                            <div key={index} onClick={()=>{props.buttonClick(index+1); setOpen(false)}} className={'w-full h-[44px] pl-[14px] flex items-center'+(props.id==index+1?' bg-titleBgColor':'')}>
                            <p>{index+1}</p>
                            </div>
                        )
                }
            </div>
        </div>
    </div>
  );
}
export default DropDown;
