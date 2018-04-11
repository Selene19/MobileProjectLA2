import { Component ,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompteService } from '../../app/core/compte.service';
import {map,mergeMap} from "rxjs/operators";

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
	id:any;
	eventSource;
	events;
	month:any;


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
	
	
  constructor(public navCtrl: NavController, public navParams: NavParams,public compteService:CompteService) {
	  
	  this.id = navParams.get('id');
	  this.getEvents().subscribe(events=>this.getEventsForCalendar(this.events));
	  //this.month=new Date().getMonth();
	  
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
			let day=cut2[2];
			let cut3=time.split(":");
			let hour=cut3[0];
			let minute=cut3[1];
			let second=cut3[2];
			
			startTime=new Date(year,month,day,hour,minute,second);
			
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
			
			endTime=new Date(year,month,day,hour,minute,second);
			
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
		console.log(this.eventSource);
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
	

}
