import './App.css';
import React, { useState }  from 'react';
import TitleButton from './component/titlebutton';
import ConButton from './component/conbutton';
import DropDown from './component/dropdown';
import Carosel from './component/carosel';
import CusInput from './component/input';
import {getListApi, postListApi, ListType} from './server/defaultapi';
import { useEffect } from 'react';
function App() {
  const [manufList,setManuf]=useState<Array<ListType>>([]);
  const [typeList,setType]=useState<Array<ListType>>([]);
  const [isenable, setEnable]=useState(false);
  const getList= async()=>{
    let mid= await getListApi('manufs');
    if(mid.message)
    {
      setManuf(mid.value);
      mid= await getListApi('types');
      if(mid.message){
        setType(mid.value);
        setEnable(true);
      }
      else{
        // alert('error');
      }
    }else{
      // alert('error');
    }
  }
  const postList= async()=>{
    let mid= await postListApi('post',
    {
       'manufs':manufList[drop[0]].id,
       'types':manufList[drop[4]].id,
       // you can add  more 
    });
    if(mid){
      alert('success');
    }
  }
  useEffect(()=>{
    getList();
  }
  ,[]);
  // some fileds are static
  //If I get more time, I will do it perfectly
  const properity=[
     'Owner',
     'Status',
     'Model Style',
     'Type',
     'New/Used'
  ];
  const Identify=[
    [
      { id:'1',
        name:'Acme Trailers'
    },
    { id:'2',
        name:'Aema Manuf.'
    },
    { id:'3',
        name:'Aha! Carports'
    }
   ],
   [
    { id:'1',
        name:'Acme Trailers'
    },
    { id:'2',
        name:'Aema Manuf.'
    },
    { id:'3',
        name:'Aha! Carports'
    }
    ],
    [
      { id:'1',
        name:'Acme Trailers'
    },
    { id:'2',
        name:'Aema Manuf.'
    },
    { id:'3',
        name:'Aha! Carports'
    }
    ],
  ]
  const strList=[
    { id:'1',
        name:'Acme Trailers'
    },
    { id:'2',
        name:'Aema Manuf.'
    },
    { id:'3',
        name:'Aha! Carports & Trailers'
    }
  ];
  const [drop, setDrop]=useState([0,0,0,0,0,0]);
  const [size, setSize]=useState([0,0,0,0,0,0]);
  const [iden, setIden]=useState([1,1,1]);
  const [edit, setEdit]=useState(false);
  const changeDrop=(item:number, index:number)=>{ 
    let mid=[...drop];
    mid[index]=item;
    setDrop(mid);
  };
  const changeSize=(item:number, index:number)=>{ 
    let mid=[...size];
    mid[index]=item;
    setSize(mid);
  };
  const changeIden=(item:number, index:number)=>{ 
    let mid=[...iden];
    mid[index]=item;
    setIden(mid);
  };
  return (
   <>
     {isenable&&<div className='mt-[52px] mx-[80px] font-medium text-normalSize text-contentColor'>
      <div className='flex flex-row justify-between	items-center border-b-[1px] border-b-borderColor'>
        <div className='flex flex-col'>
          <div className='flex flex-row items-center '>
            <p className='text-titleColor'>ServicePad</p>
            <svg className='ml-[5px] mr-[17px]' width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.833375 18.3334L9.16671 1.66669" stroke="#D0D5DD" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <TitleButton text={'Dashboard'} isActivate={false} buttonClick={()=>{}}/>
            <TitleButton text={'Browse'} isActivate={true} buttonClick={()=>{}}/>
          </div>
          <p className='text-headColor text-headSize mt-[24px] mb-[4px]'> Trailer Details</p>
          <p className='text-subHeadColor mb-[20px]'> Manage your selected trailer’s details here.</p>
        </div>
        <div className='flex flex-row items-center '>
          <svg className='mr-[11px]' width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.66665 1.89124V5.33336C9.66665 5.80006 9.66665 6.03342 9.75747 6.21168C9.83737 6.36848 9.96485 6.49596 10.1217 6.57586C10.2999 6.66669 10.5333 6.66669 11 6.66669H14.4421M14.6666 8.32354V14.3334C14.6666 15.7335 14.6666 16.4336 14.3942 16.9683C14.1545 17.4387 13.772 17.8212 13.3016 18.0609C12.7668 18.3334 12.0668 18.3334 10.6666 18.3334H5.33331C3.93318 18.3334 3.23312 18.3334 2.69834 18.0609C2.22793 17.8212 1.84548 17.4387 1.6058 16.9683C1.33331 16.4336 1.33331 15.7335 1.33331 14.3334V5.66669C1.33331 4.26656 1.33331 3.56649 1.6058 3.03171C1.84548 2.56131 2.22793 2.17885 2.69834 1.93917C3.23312 1.66669 3.93318 1.66669 5.33331 1.66669H8.00979C8.62127 1.66669 8.92701 1.66669 9.21473 1.73576C9.46982 1.797 9.71368 1.89801 9.93736 2.03509C10.1897 2.18969 10.4058 2.40588 10.8382 2.83826L13.4951 5.49511C13.9275 5.92749 14.1436 6.14368 14.2982 6.39597C14.4353 6.61966 14.5363 6.86352 14.5976 7.11861C14.6666 7.40633 14.6666 7.71206 14.6666 8.32354Z" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className='mr-[45px]'>Documents (2)</p> 
          <svg className='mr-[9px]' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.16669 3.33332H5.66669C4.26656 3.33332 3.56649 3.33332 3.03171 3.6058C2.56131 3.84549 2.17885 4.22794 1.93917 4.69834C1.66669 5.23312 1.66669 5.93319 1.66669 7.33332V14.3333C1.66669 15.7335 1.66669 16.4335 1.93917 16.9683C2.17885 17.4387 2.56131 17.8212 3.03171 18.0608C3.56649 18.3333 4.26656 18.3333 5.66669 18.3333H12.6667C14.0668 18.3333 14.7669 18.3333 15.3017 18.0608C15.7721 17.8212 16.1545 17.4387 16.3942 16.9683C16.6667 16.4335 16.6667 15.7335 16.6667 14.3333V10.8333M6.66666 13.3333H8.06212C8.46977 13.3333 8.67359 13.3333 8.86541 13.2873C9.03547 13.2464 9.19804 13.1791 9.34716 13.0877C9.51536 12.9847 9.65948 12.8405 9.94773 12.5523L17.9167 4.58332C18.607 3.89296 18.607 2.77368 17.9167 2.08332C17.2263 1.39296 16.107 1.39296 15.4167 2.08332L7.44772 10.0523C7.15946 10.3405 7.01534 10.4847 6.91227 10.6528C6.82088 10.802 6.75354 10.9645 6.71271 11.1346C6.66666 11.3264 6.66666 11.5302 6.66666 11.9379V13.3333Z" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className='mr-[28px]'>Notes (2)</p>
          {!edit&&<ConButton text={'Edit'} isEdit={true} isCancel={false} buttonClick={()=>{setEdit(true)} }/>}
          {edit&&<ConButton text={'cancel'} isEdit={false} isCancel={true} buttonClick={()=>{setEdit(false)} }/>}
          {edit&&<ConButton text={'Save'} isEdit={false} isCancel={false} buttonClick={()=>{setEdit(false)} }/>}
        </div>
      </div>
      <div className='mt-[56px] pb-[38px] flex flex-row items-start '>
        <table className="table-fixed basis-1/2 items-start mr-[70px]">
          <tbody>
          <tr >
            <td className='text-titleColor align-text-top	w-[50%]'>{'Manufacturer'}</td>
            <td className='w-[50%] pb-[20px]'>
            <DropDown isEdit={edit} width='256' id={drop[0]} list={manufList} buttonClick={(val) => { changeDrop(val, 0); } } text={null}/>
            </td>
          </tr>
          <tr >
            <td className='text-titleColor align-text-top	w-[50%]'>{'Owner'}</td>
            <td className='w-[50%] pb-[20px]'>
            <DropDown isEdit={edit} width='256' id={drop[1]} list={strList} buttonClick={(val) => { changeDrop(val, 1); } } text={null}/>
            </td>
          </tr>
          <tr >
            <td className='text-titleColor align-text-top	w-[50%]'>{'Status'}</td>
            <td className='w-[50%] pb-[20px]'>
            <DropDown isEdit={edit} width='256' id={drop[2]} list={strList} buttonClick={(val) => { changeDrop(val, 2); } } text={null}/>
            </td>
          </tr>
          <tr >
            <td className='text-titleColor align-text-top	w-[50%]'>{'Model Style'}</td>
            <td className='w-[50%] pb-[20px]'>
            <DropDown isEdit={edit} width='256' id={drop[3]} list={strList} buttonClick={(val) => { changeDrop(val, 3); } } text={null}/>
            </td>
          </tr>
          <tr >
            <td className='text-titleColor align-text-top	w-[50%]'>{'Type'}</td>
            <td className='w-[50%] pb-[20px]'>
            <DropDown isEdit={edit} width='256' id={drop[4]} list={typeList} buttonClick={(val) => { changeDrop(val, 4); } } text={null}/>
            </td>
          </tr>
          <tr >
            <td className='text-titleColor align-text-top	w-[50%]'>{'New/Used'}</td>
            <td className='w-[50%] pb-[20px]'>
            <DropDown isEdit={edit} width='256' id={drop[5]} list={strList} buttonClick={(val) => { changeDrop(val, 5); } } text={null}/>
            </td>
          </tr>
          </tbody>
        </table>
        <div className='basis-1/2'>
          <Carosel/>
        </div>
      </div>
      <div className='h-[1px] bg-borderColor mx-[80px] mb-[45px]'></div>
      <table className="table-fixed items-start w-full px-[5%]">
        <tbody>
          <tr className='border-b-[1px] border-b-borderColor'>
                  <td className='text-titleColor align-text-top	w-[20%]'>{'Price'}</td>
                  <td className='w-[70%] py-[20px]'>
                    <div className='flex flex-row '>
                      <CusInput  width={'110'} text={'Sales Price'} val={''} isActivate={edit} buttonClick={(val)=>{}}/>
                      <CusInput  width={'110'} text={'Min Sales Price'} val={''} isActivate={edit} buttonClick={(val)=>{}}/>
                      <CusInput  width={'110'} text={'Lease Price'} val={''} isActivate={edit} buttonClick={(val)=>{}}/>
                      <CusInput  width={'110'} text={'Min Lease Price'} val={''} isActivate={edit} buttonClick={(val)=>{}}/>
                    </div>
                  </td>
                </tr>
          </tbody>
          <tbody>
          <tr className='border-b-[1px] border-b-borderColor'>
                    <td className='text-titleColor align-text-top	w-[20%]'>{'Characteristics'}</td>
                    <td className='w-[70%] py-[20px]'>
                    <div className='flex flex-col'>
                      <div className='flex flex-row'>
                        <CusInput  width={'244'} text={'Color'} val={''} isActivate={edit} buttonClick={(val)=>{}}/>
                        <CusInput  width={'244'} text={'Shipping Weight (lbs)'} val={''} isActivate={edit} buttonClick={(val)=>{}}/>
                      </div>
                      <div className='flex flex-row '>
                        <DropDown isEdit={edit} width='96' id={size[0]} list={7} buttonClick={(val) => { changeSize(val, 0); } } text={'Width (ft)'}/>
                        <DropDown isEdit={edit} width='96' id={size[1]} list={8} buttonClick={(val) => { changeSize(val, 1); } } text={'Width (in)'}/>
                        <DropDown isEdit={edit} width='96' id={size[2]} list={4} buttonClick={(val) => { changeSize(val, 2); } } text={'Length (ft)'}/>
                        <DropDown isEdit={edit} width='96' id={size[3]} list={6} buttonClick={(val) => { changeSize(val, 3); } } text={'Length (in)'}/>
                        <DropDown isEdit={edit} width='96' id={size[4]} list={7} buttonClick={(val) => { changeSize(val, 4); } } text={'Height (ft)'}/>
                        <DropDown isEdit={edit} width='96' id={size[5]} list={3} buttonClick={(val) => { changeSize(val, 5); } } text={'Height (in)'}/>
                      </div>
                    </div>
                    </td>
                  </tr> 
          </tbody>
          <tbody>
          <tr className='border-b-[1px] border-b-borderColor'> 
                    <td className='text-titleColor align-text-top	w-[20%]'>{'Identity'}</td>
                    <td className='w-[70%] py-[20px]'>
                      <div className='flex flex-col '>
                        <div className='flex flex-row'>
                        <CusInput  width={'244'} text={'Serial'} val={''} isActivate={edit} buttonClick={(val)=>{}}/>
                        <CusInput  width={'244'} text={'MSO'} val={''} isActivate={edit} buttonClick={(val)=>{}}/>
                        </div>
                        <div className='flex flex-row'>
                          <DropDown isEdit={edit} width='154' id={iden[0]} list={Identify[0]} buttonClick={(val) => { changeIden(val, 0); } } text={'Title Status'}/>
                          <DropDown isEdit={edit} width='154' id={iden[1]} list={Identify[1]} buttonClick={(val) => { changeIden(val, 1); } } text={'Title No.'}/>
                          <DropDown isEdit={edit} width='154' id={iden[2]} list={Identify[2]} buttonClick={(val) => { changeIden(val, 2); } } text={'Title State'}/>
                        </div>
                      </div>
                    </td>
                  </tr>
          </tbody>
          <tbody>
          <tr className='border-b-[1px] border-b-borderColor'>
                    <td className='text-titleColor align-text-top	w-[20%]'>{'Location'}</td>
                    <td className='w-[70%] py-[20px]'>
                      <div className='flex flex-row'>
                        <CusInput  width={'154'} text={'County'} val={''} isActivate={edit} buttonClick={(val)=>{}}/>
                        <CusInput  width={'154'} text={'Postal Code'} val={''} isActivate={edit} buttonClick={(val)=>{}}/>
                        <CusInput  width={'154'} text={'Physical Date'} val={''} isActivate={edit} buttonClick={(val)=>{}}/>
                      </div>
                    </td>
                  </tr>
          <tr className='border-b-[1px] border-b-borderColor'>
            <td className='text-titleColor align-text-top	w-[20%]'>{'GPS'}</td>
            <td className='w-[70%] py-[20px]'>
              <div className='flex flex-row '>
                <CusInput  width={'110'} text={'Sales Price'} val={''} isActivate={edit} buttonClick={(val)=>{}}/>
                <CusInput  width={'110'} text={'Sales Price'} val={''} isActivate={edit} buttonClick={(val)=>{}}/>
              </div>
            </td>
          </tr>
          </tbody>
      </table>
      <div className='h-[100px]'>
        
      </div>
    </div>}
   </>
  );
}
export default App;
