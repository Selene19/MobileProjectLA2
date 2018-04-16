import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
/*import {User} from '../website/identification/user';*/
import {RendezVousPost} from '../../pages/get-meeting/rdPost';
import {Operation} from '../../pages/get-meeting/operation';

import {RequestOptions,Headers} from '@angular/http';


@Injectable()
export class CompteService {

  constructor(private http: HttpClient) { }
	
	
	getInformations(id:any) :Observable<any> {
		
		return this.http.get('https://projectla2.ovh/API/users/byId?id='+id);
		
	}
	
	/*putUser(user:User):Observable<any>{
		return this.http.put('https://projectla2.ovh/API/users/update', user);
	}*/
	
	getCommandes(id:any): Observable<any> {
		return this.http.get('https://projectla2.ovh/API/commandes/ByUserId?id='+id);
	}
	
	getMetting(): Observable<any> {
		return this.http.get('https://projectla2.ovh/API/calendarEvents');
	}
	
	postMetting(rdPost:RendezVousPost):Observable<any>{
		return this.http.post('https://projectla2.ovh/API/event',rdPost);
		
	}
	
	getMeetingId(id:any):Observable<any>{
		return this.http.get('https://projectla2.ovh/API/events/byUserId?id='+id);
	}
	
	postReparation(operation:Operation){
		return this.http.post('https://projectla2.ovh/API/reparation',operation);
	}

	postMontage(operation:Operation){
		return this.http.post('https://projectla2.ovh/API/montage',operation)
	}
	
	postNettoyage(operation:Operation){
		return this.http.post('https://projectla2.ovh/API/nettoyage',operation);
	}

}