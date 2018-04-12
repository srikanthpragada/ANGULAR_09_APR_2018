import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'course',
    templateUrl: './course.component.html'
})
export class CourseComponent {
    @ViewChild("topic") topic: ElementRef;
    name: string = "Angular 5"
    desc: string = "Angular is a framework to build more interactive web apps"
    topics: string[] = ['Data Binding', 'Forms', 'Http', 'Routing']
    message: string = ""

    addTopic(topic: string) {
        this.message = "";
        if (topic.trim() == "") {
            this.message = "Topic is required!"
            return;
        }
        if (this.topics.indexOf(topic) >= 0) {
            this.message = "Topic already exists!"
            return;
        }

        this.topics.push(topic)
        this.topic.nativeElement.value = "";  // remove text from textbox 
    }

    deleteTopic(topic : string) {
        // console.log(topic);
        var pos = this.topics.indexOf(topic)
        this.topics.splice(pos,1)   // Delete topic by index 
    }
}