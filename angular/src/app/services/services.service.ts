import { Injectable } from '@angular/core';
import { HttpClient}    from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
readonly root_url;
  constructor(private http:HttpClient) {
this.root_url="http://localhost:3000";
   }
  /*
  inside the services make get method 
  which take the url as param 
  */
getHeader()
{
  const headers=new Headers();
  headers.append('Content-Type','application.json')
return headers;
}


  get(url:string)
  {
    
return this.http.get(`${this.root_url}/${url}`);
  }

  post(url:string,payload)
  {
    console.log('servies task')
    console.log(`${this.root_url}/${url}`)
return this.http.post(`${this.root_url}/${url}`,payload);
  }

  delete(url:string)
  {
    console.log('hereeeeeeee')
    console.log(url)
    return this.http.delete(`${this.root_url}/${url}`);
  }



 
  patch(url:string,payload)
  {
    return this.http.patch(`${this.root_url}/${url}`,payload);
  }
 
}
