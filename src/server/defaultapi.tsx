import { api, get, post} from './api';
export interface  ListType {
    id:string,
    name:string
}
export const getListApi = async (name:string) => {
    return await get(name).then(
      function (response) {
        let array=new Array<ListType>();
        for(let i =0;i<response.data.length;i++){
        array.push(
            {
                'id':response.data[i]['ID'],
                'name':response.data[i]['Name'],
            }
        );
        }
        return {
            value:array,
            message:true
        };
      })
      .catch(function (error) {
        console.log(error);
        return {
          value: [],
          message: false
        };
      });
}
export const postListApi = async (name:string,data:any) => {
  return await post(name,data).then(
    function (response) {
      return {
          message:true
      };
    })
    .catch(function (error) {
      console.log(error);
      return {
        message: false
      };
    });
}