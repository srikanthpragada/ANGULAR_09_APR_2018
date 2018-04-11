import { Component } from '@angular/core';

@Component({
    selector: 'course',
    templateUrl: './course.component.html'
})
export class CourseComponent 
{
    name : string = "Angular 5"
    desc : string = "Angular is a framework to build more interactive web apps"
    topics : string [] = ['Data Binding','Forms','Http','Routing']
    message : string = ""

    addTopic(topic:string) {
        this.message = "";
        if (topic.trim() == "") {
           this.message = "Topic is required!"
           return;
        }
        
        this.topics.push(topic)
        
    }
}