

const api_call=(url)=>{
    return fetch(url).then(response=> response.json());//.then(data=> data);
}
export default api_call;