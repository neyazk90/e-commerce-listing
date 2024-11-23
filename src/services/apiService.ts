import apiClient from "./apiConfig"

export const get = (url:string) => { 
    return apiClient.get(url)
}