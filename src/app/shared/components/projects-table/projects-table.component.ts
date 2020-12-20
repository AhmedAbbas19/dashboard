import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects-table",
  templateUrl: "./projects-table.component.html",
  styleUrls: ["./projects-table.component.css"],
})
export class ProjectsTableComponent implements OnInit {
  projects = [
    {
      name: "Tailwind",
      startDate: "16/12/2020",
      dueDate: "20/12/2020",
      status: "pending",
      assign: "Ahmed Abbas",
    },
    {
      name: "Angular",
      startDate: "1/11/2020",
      dueDate: "31/12/2020",
      status: "pending",
      assign: "Ahmed Mohamed",
    },
    {
      name: "Reactjs",
      startDate: "1/12/2020",
      dueDate: "10/12/2020",
      status: "released",
      assign: "Ahmed Sobh",
    },
    {
      name: "React Native",
      startDate: "10/12/2020",
      dueDate: "15/12/2020",
      status: "review",
      assign: "Ahmed Abbas",
    },
    {
      name: "Typescript",
      startDate: "10/12/2020",
      dueDate: "20/12/2020",
      status: "comming soon",
      assign: "Ahmed Mohamed",
    },
    {
      name: "Flutter",
      startDate: "13/12/2020",
      dueDate: "16/12/2020",
      status: "released",
      assign: "Ahmed Sobh",
    },
    {
      name: "Nextjs",
      startDate: "13/12/2020",
      dueDate: "16/12/2020",
      status: "pending",
      assign: "Ahmed Abbas",
    }
  ];
  constructor() {}

  ngOnInit() {}
}
