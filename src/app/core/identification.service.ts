import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import {User} from '../../pages/identification/user';
import {UserConnexion} from '../../pages/identification/userConnexion';
import {RequestOptions,Headers} from '@angular/http';



@Injectable()
export class IdentificationService {
	

 
  constructor(private http: HttpClient) { }
	
	postUser(user: User):Observable <any> {
		 
		 
		return this.http.post('https://projectla2.ovh/API/users/new', user);
		
		
		
		
		
  
	}

	getIdentificationUser(userConnexion : UserConnexion) : Observable<any> {
		return this.http.get('https://projectla2.ovh/API/users/connexion?email='+userConnexion.email+'&password='+userConnexion.password);
		
		
	}
	
	getId(email:any) :Observable<any> {
		return this.http.get('https://projectla2.ovh/API/users/byEmail?email='+email);
	}

	

	
	
		

	
		
	
	

	



	
	
}





	
	


