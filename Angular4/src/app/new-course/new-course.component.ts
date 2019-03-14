import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent {

  form = new FormGroup({
    topics : new FormArray([])
  });

  get topics(){
    return this.form.get('topics') as FormArray;
  }

  addTopic(topic : HTMLInputElement){
     this.topics.push(new FormControl(topic.value));
     topic.value = '';
  }

  removeTopic(topic) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
