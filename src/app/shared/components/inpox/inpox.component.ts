import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inpox',
  templateUrl: './inpox.component.html',
  styleUrls: ['./inpox.component.css']
})
export class InpoxComponent implements OnInit {

  users = [
    {name: "Leonardo Payne", status: "Hey! there I'm available...", time: "12.30 PM", avatar: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},
    {name: "Carl Hanson", status: "I've finished it! See you so...", time: "02.14 AM", avatar: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},
    {name: "Jensen Combs", status: "this template is awesome!", time: "08.22 PM", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"},
    {name: "Amiah Burton", status: "Nice to meet you", time: "05.49 AM", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},
    {name: "Yaretzi Mayo", status: "Hey! there I'm available...", time: "01.19 AM", avatar: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"},
  ]

  constructor() { }

  ngOnInit() {
  }

}
