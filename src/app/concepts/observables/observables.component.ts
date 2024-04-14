import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { CommonserviceService } from '../../utilities/services/commonservice.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent implements OnInit, OnDestroy {
  eventName!: string;
  timer!: Date;
  data!: any;
  p1: {
    messageData:string[],
    taskStatus:boolean
  }={messageData:[],
    taskStatus:false
  };
  p2: {
    messageData:string[],
    taskStatus:boolean
  }={messageData:[],
    taskStatus:false
  };
  p3: {
    messageData:string[],
    taskStatus:boolean
  }={messageData:[],
    taskStatus:false
  };
  taskClear:boolean=true;
  activeParticipants:string[]=[];
  taskAllocated!:boolean;
  isTimerOn!: Subscription;
  subscriptions: Subscription[] = [];//Method used to unsubscribe all the subscriptions at once during component destroy
  timerEvent = new Observable<Date>((observer: Observer<Date>) => {
    let intervalId = setInterval(() => {
      observer.next(new Date());
    }, 1000);
    setTimeout(() => {
      observer.complete();
    }, 1000 * 60 * 2)

    return () => {
      clearInterval(intervalId);
      console.log('Unsubscribed from observable');
    };
  })

  constructor(private cs: CommonserviceService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.cs.getCurrentEvent.subscribe((event: Event) => {
      this.eventName = event.type;
    }));
  }

  ToggleTimer() {
    if (this.isTimerOn && !this.isTimerOn?.closed) {
      this.isTimerOn.unsubscribe();
    }
    else {
      this.isTimerOn = this.timerEvent.subscribe({
        next: (time: Date) => {
          this.timer = time;
        },
        error: () => {
          console.log('err')
        },
        complete: () => {
          alert('Timer completed after 2 minutes');
        }
      });
      this.subscriptions.push(this.isTimerOn);
    }
  }

  emitTab(event: Event) {
    this.cs.emitEvent(event)
  }

  resolvePromise(event: any) {
    if (event.index == 2) {
      this.cs.promisedData().then((result) => { this.data = result; console.log(this.data) }).catch((err) => { console.log('Error occured') });
    }
    else if (event.index == 3) {
      this.activeParticipants.push('Person 1')
      this.cs.taskAllocation('Person 1 joined the group')
      this.subscriptions.push(this.cs.getTaskStatus.subscribe((data:any)=>{
          this.p1.messageData.push(data);
      }));
    }

  }

  AllocateTask(person:string){
    this.cs.taskAllocation(person+' Allocated task')
    this.taskAllocated = true;
    this.taskClear = false;
  }

  joinGroup(person:string){
    this.activeParticipants.push(person)
    this.cs.taskAllocation(person+' joined the group')
    this.subscriptions.push(this.cs.getTaskStatus.subscribe((data:any)=>{
      (person=='Person 2')?this.p2.messageData.push(data):this.p3.messageData.push(data);
  }));
  }

  completeTask(person:string){
    this.cs.taskAllocation(person+' completed the task')
    let personNo=Number(person.split(' ')[1]);
    if(personNo==1){
      this.p1.taskStatus = true;
    }
    else if(personNo==2){
      this.p2.taskStatus = true;
    }
    else if(personNo==3){
      this.p3.taskStatus = true;
    }
    if(this.p1.taskStatus && this.p2.taskStatus && this.p3.taskStatus){
      this.taskAllocated = false;
      this.taskClear=true;
    }
  }
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions in the array
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
