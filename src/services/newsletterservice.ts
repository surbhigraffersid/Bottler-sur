import axios from "axios";

export const addNewsLetter = (emailId:string) =>{
   return axios.post("https://api.botler.com/requests/newsletter", {
      email:emailId
    })
}