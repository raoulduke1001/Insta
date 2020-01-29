export default class instaService {
    constructor(){
        this._apibase = 'http://localhost:3000';
    }

getResource = async (url) =>{
    const res = await fetch(`${this._apibase}${url}`);
       
    if(!res.ok){
        throw new Error(`Couldn't fetch ${url}, received ${res.status}`)
       }
    return await res.json();
}

getAllPosts = async () => {
    const res = await this.getResource('/posts/')
    return res;
}
}