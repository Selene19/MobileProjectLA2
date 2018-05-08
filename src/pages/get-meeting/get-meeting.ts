import { Component ,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompteService } from '../../app/core/compte.service';
import {map,mergeMap} from "rxjs/operators";
import {RendezVous} from './rd';
import {RendezVousPost} from './rdPost';
import {Operation} from './operation';

import { Observable } from "rxjs/Observable";


/**
 * Generated class for the GetMeetingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-meeting',
  templateUrl: 'get-meeting.html',
})
export class GetMeetingPage {
	minDate:any
	id:any;
	eventSource;
	events;
	month:any;
	
	
	
	

	services = [
    'Montage',
    'Réparation',
    'Nettoyage',
  ];
	nettoyages=[
		'Forfait nettoyage',
		'Forfait logiciel',
		'Forfait logiciel et nettoyage',
	];

	validation:String="";


    isToday:boolean;
    calendar = {
        mode: 'month',
        currentDate: new Date(),
        dateFormatter: {
            formatMonthViewDay: function(date:Date) {
                return date.getDate().toString();
            },
            formatMonthViewDayHeader: function(date:Date) {
                return 'MonMH';
            },
            formatMonthViewTitle: function(date:Date) {
                return 'testMT';
            },
            formatWeekViewDayHeader: function(date:Date) {
                return 'MonWH';
            },
            formatWeekViewTitle: function(date:Date) {
                return 'testWT';
            },
            formatWeekViewHourColumn: function(date:Date) {
                return 'testWH';
            },
            formatDayViewHourColumn: function(date:Date) {
                return 'testDH';
            },
            formatDayViewTitle: function(date:Date) {
                return 'testDT';
            }
        }
		
		
		
	}

	rd=new RendezVous();
    rdPost=new RendezVousPost();
operation=new Operation();
	
	
  constructor(public navCtrl: NavController, public navParams: NavParams,public compteService:CompteService) {
	  let key2='id';
	  
	  this.id = sessionStorage.getItem(key2);
	  
	  this.getEvents().subscribe(events=>this.getEventsForCalendar(this.events));
	  this.minDate= new Date().toISOString();
	 //2018-04-16T07:46:22.434Z
	  let cut=this.minDate.split(":");
	  let cut2=cut[0].split("T");
	  let hours=parseInt(cut2[1]);
	  hours=hours+3;
	  let hourss=hours.toString();
	  if(hourss.length==2){
		  this.minDate=cut2[0]+"T"+hours+":"+cut[1]+":"+cut[2];
	  }
	  else{
		  this.minDate=cut2[0]+"T"+"0"+hours+":"+cut[1]+":"+cut[2];
	  }
   
	  
	 
	  
	  
	  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetMeetingPage');
  }
	
	loadEvents() {
        this.getEvents().subscribe(events=>this.getEventsForCalendar(this.events));
    }

	getEvents():Observable<any>{
		return this.compteService.getMetting().pipe(
			map(events => this.events=events));
	}

	getEventsForCalendar(events:any[]){
		var events=[];
		var startTime;
		var endTime;
		
		
		console.log(this.events);
		this.events.forEach(event => {
			let cut = event.start.split("T");
			let date=cut[0];
			let time=cut[1];
			let cut2=date.split("-");
			let year=cut2[0];
			let month=cut2[1];
			console.log(month);
			
			let day=cut2[2];
			console.log(day);
			let cut3=time.split(":");
			let hour=cut3[0];
			let minute=cut3[1];
			let second=cut3[2];
			
			startTime=new Date(year,month-1,day,hour,minute,second);
			console.log(startTime);
			
			 cut = event.end.split("T");
			 date=cut[0];
			 time=cut[1];
			 cut2=date.split("-");
			 year=cut2[0];
			 month=cut2[1];
			 day=cut2[2];
			 cut3=time.split(":");
			 hour=cut3[0];
			 minute=cut3[1];
			 second=cut3[2];
			
			endTime=new Date(year,month-1,day,hour,minute,second);
			
			events.push({
                    title: event.title,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: event.allDay
                });
			
			
		});
		//2018-04-11T13:30:00
		//new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
		
		this.eventSource=events;
		
	}

    

    onEventSelected(event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
		

    }

    changeMode(mode) {
        this.calendar.mode = mode;
    }

    today() {
        this.calendar.currentDate = new Date();
    }

    onTimeSelected(ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
		this.month=ev.selectedTime.getMonth();
		console.log(this.month);
		switch(this.month){
			case 0:
				this.month="Janvier";
				break;
			case 1: 
				this.month="Février";
				break;
			case 2:
				this.month="Mars";
				break;
			case 3:
				this.month="Avril";
				break;
			case 4:
				this.month="Mai";
				break;
			case 5:
				this.month="Juin";
				break;
			case 6:
				this.month="Juillet";
				break;
			case 7:
				this.month="Août";
				break;
			case 8:
				this.month="Septembre";
				break;
			case 9:
				this.month="Octobre";
				break;
			case 10:
				this.month="Novembre";
				break;
			case 11:
				this.month="Décembre";
				break;
						 }
    }

    onCurrentDateChanged(event:Date) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    }

    createRandomEvents() {
        var events = [];
        for (var i = 0; i < 50; i += 1) {
            var date = new Date();
            var eventType = Math.floor(Math.random() * 2);
            var startDay = Math.floor(Math.random() * 90) - 45;
            var endDay = Math.floor(Math.random() * 2) + startDay;
            var startTime;
            var endTime;
            if (eventType === 0) {
                startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true
                });
				
            } else {
                var startMinute = Math.floor(Math.random() * 24 * 60);
                var endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + startDay, 0, date.getMinutes() + startMinute);
                endTime = new Date(date.getFullYear(), date.getMonth(), date.getDate() + endDay, 0, date.getMinutes() + endMinute);
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false
                });
				
            }
        }
		
        return events;
    }

    onRangeChanged(ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    }

    markDisabled = (date:Date) => {
        var current = new Date();
        current.setHours(0, 0, 0);
        return date < current;
    };



	onSubmit(value):void {
	
	  
	   
	   
	   this.rd.idUser=this.id;
	   this.rd.service=value.service;
	   this.rd.nettoyage=value.nettoyage;
	   this.rd.date=value.date
	   this.rd.time=value.time;
	   this.rd.domicile=value.domicile;
	   this.rd.adresse=value.adresse;
	   this.rd.ville=value.ville;
	   this.rd.codePostal=value.codePostal;
		this.rd.description=value.description;
		
		
		
		//2018-04-16T09:00:00
		
		let dateStart=this.rd.time.toString().split("Z");
		
		
		
		
	
	    
	 
	 		
	
		let dateEndd=dateStart[0];
		let dateEnd=dateEndd.toString().split(":");
		let formatDateEnd="";
		
		
		if(dateEnd[1].toString()=="00"){
			
			 formatDateEnd=dateEnd[0]+":30:00";
		}
		else {
			
			 let hours=dateEnd[0].split("T");
			 let hoursEndd=hours[1];
			let hoursEnd=parseInt(hoursEndd);
			hoursEnd=hoursEnd+1;
			
			 formatDateEnd=hours[0]+"T"+hoursEnd+":00:00";
		}
	
	
		
		
	
	    this.rdPost.start=dateStart[0];
		
		this.rdPost.end=formatDateEnd;
		
		
		this.rdPost.typeEvent=this.rd.service
		if(this.rd.nettoyage!=null){
			this.rdPost.typeEvent+= " " +this.rd.nettoyage;
		}
		if(this.rd.domicile!=false){
			this.rdPost.aDomicile=this.rd.domicile;
			this.rdPost.adresse=this.rd.adresse+" " + this.rd.codePostal+ " " + this.rd.ville;
		}
		else {
			this.rdPost.aDomicile=this.rd.domicile;
			this.rdPost.adresse=null;
		}
		
		this.rdPost.idUser=this.rd.idUser;
	    
	
		
		
	   this.operation.description=this.rd.description;
		
	
	    
	   
	  this.compteService.postMetting(this.rdPost).subscribe(
        res => {
          this.validation="Votre rendez-vous est pris en compte.";
			this.operation.idEvent=res.id;
			this.postOperation(this.operation);
			
			
        },
        err => {
          this.validation="Une erreur est survenu ou vous essayez de prendre une plage indisponible.";			
        })
	    

	
	   
   }

	postOperation(operation:Operation){
		
		if(this.rdPost.typeEvent=="Montage"){
			this.compteService.postMontage(operation).subscribe();
		}
		
		else {
			if( this.rdPost.typeEvent=="Réparation"){
				this.compteService.postReparation(operation).subscribe();
				
			}
			else {
				this.compteService.postNettoyage(operation).subscribe();
			}
		}
	}
	

}
