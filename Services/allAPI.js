import { commonAPI } from "./CommonAPI";
import { serverUrl } from "./serverUrl";

//function for adding video
export const AddVideoAPI=async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/allVideos`,reqBody)
}
//function for getting video
export const GetVideoAPI=async()=>{
     return await commonAPI('get',`${serverUrl}/allVideos`,"")}

//function for deleting video
export const DeleteVideoAPI=async(id)=>{
    return await commonAPI('delete',`${serverUrl}/allVideos/${id}`,"")
}

//function for adding category
export const AddCategoryAPI=async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/category/`,reqBody)
}

//function to get category
export const GetCategoryAPI=async()=>{
    return await commonAPI('get',`${serverUrl}/category/`,"")
}

//function for deleting category
export const DeleteCategoryAPI=async(id)=>{
    return await commonAPI('delete',`${serverUrl}/category/${id}`,"")
}

//function to add watchHistory
export const addWatchHistoryAPI = async (reqBody) => {
    return await commonAPI('post', `${serverUrl}/watchHistory`, reqBody);
  };

//function to get watchHistory
export const getWatchHistoryAPI = async () => {
    return await commonAPI('get', `${serverUrl}/watchHistory`,"");
  };

  //function for deleting category
export const deleteWatchHistoryAPI=async(id)=>{
    return await commonAPI('delete',`${serverUrl}/watchHistory/${id}`,"")
}

//function for getting a video details
export const getAVideoAPI=async(id)=>{
    return await commonAPI('get',`${serverUrl}/allVideos/${id}`,"")
}

//function to update add category
export const updateCategoryAPI=async(id,reqBody)=>{
    return await commonAPI('put',`${serverUrl}/category/${id}`,reqBody)
}