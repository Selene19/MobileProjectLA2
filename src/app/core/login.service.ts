import { Injectable } from '@angular/core';



@Injectable()
export class LoginService {

  constructor() { }
	

	
	
 changeAuthentification(){
	 
	sessionStorage.clear();
	 
	

 }
	
hiddenDeco(){
	
	let key2='id';
	let id =sessionStorage.getItem(key2);
	if(id!=null){
		return false;
	}
	  else {
		  return true;
	  }
}
			

	
	
getLinkD(){
	
	let key2='id';
	  
	let id =sessionStorage.getItem(key2);
	if(id!=null){
		  return "Voir mon compte";
		  
		  
	  }
	  else {
		  return "Connexion / Création compte";
	  }
}
	
	
	getRole(){
		
	
		let key3='role';
		let role=sessionStorage.getItem(key3);
		
		if(role=="user"){
				return false;
			}
			else {
				return true;
			}
		
	
	}
	
	postUser(id:any,role:any){
	
		

		
	   let key2 = 'id';
	   sessionStorage.setItem(key2,id.toString());
	   console.log(sessionStorage.getItem(key2));
		
	   let key3='role';
		sessionStorage.setItem(key3,role.toString());
	   console.log(sessionStorage.getItem(key3));
	}
	
	isValid(){
		
		
		
		
		let key2='id';
	  
	let id =sessionStorage.getItem(key2);
		if(id!=null){
		  return true;
		  
		  
	  }
	  else {
		  return false;
	  }
		
		
	}
	
	hiddenConnexion(){
		let key2='id';
	  
	let id =sessionStorage.getItem(key2);
		
		if(id!=null){
		  return true;
		  
		  
	  }
	  else {
		  return false;
	  }
		
	}
	
	hiddenCompte(){
		let key2='id';
	  
	let id =sessionStorage.getItem(key2);
		
		if(id!=null){
		  return false;
		  
		  
	  }
	  else {
		  return true;
	  }
		
	}
}

