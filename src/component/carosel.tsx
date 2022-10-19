import React,{useState} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface ButtonProps {
    text: string;
    isEdit:Boolean,
    isCancel:Boolean,
    buttonClick: ()=>void;
  }
function Carosel() {
  const [selected, setSelected]=useState(0);
  return (
    <div className='relative min-w-[640] w-full bg-previewBgColor rounded-[8px] '>
        <Carousel selectedItem={selected} className='px-[51px] py-[28px]' showArrows={false} showStatus={false} showIndicators={false} showThumbs={false}>
            <div>
                <img src="./assets/back.png" />
            </div>
            <div>
                 <img src="./assets/back.png" />
            </div>
            <div>
                <img src="./assets/back.png" />
            </div>
            <div>
                <img src="./assets/back.png" />
            </div>
            <div>
                <img src="./assets/back.png" />
            </div>
        </Carousel>
        <button className='absolute flex flex-row  items-center top-[35px] right-[28px] '>
            <div className='w-[5px] h-[5px] rounded-full mx-[2px] bg-black'></div>
            <div className='w-[5px] h-[5px] rounded-full mx-[2px] bg-black'></div>
            <div className='w-[5px] h-[5px] rounded-full mx-[2px] bg-black'></div>
        </button>
        <div className="absolute flex justify-between top-0 w-full h-full px-[12px]">
          <button
            onClick={()=>{if(selected>0) setSelected(selected-1)}}
            className={""}
          > 
          <div className='w-[40px] h-[40px] bg-white rounded-full  flex items-center justify-center'>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L1 7L7 1" stroke={(selected>0?"#344054":"#D1D5DB")} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={()=>{if(selected<4) setSelected(selected+1)}}
          >
            <div className='w-[40px] h-[40px] bg-white rounded-full  flex items-center justify-center'>
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L7 7L1 1" stroke={(selected<4?"#344054":"#D1D5DB")} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <span className="sr-only">Next</span>
          </button>
        </div>
       <div className='w-full absolute flex flex-row  items-center bottom-[24px]'>
            <div className=' mx-auto bg-whiteColor rounded-[17px]   flex flex-row '>
                {
                  new Array(5).fill(0).map((item, index)=>
                    <button key={index} onClick={()=>{setSelected(index)}} className={'w-[10px] h-[10px] rounded-full mx-[8px] my-[12px]'+(selected!=index?' bg-slashColor':'  bg-black')}></button>
                  )
                }
            </div>
       </div>
    </div>
     );
}
export default Carosel;
