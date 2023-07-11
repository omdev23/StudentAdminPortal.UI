import { Component, OnInit, ViewChild } from '@angular/core';

import { StudentService } from './student.service';

import { Student } from '../models/ui-models/student.model';

import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';

import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-student',

  templateUrl: './student.component.html',

  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students: Student[] = [];

  displayedColumns: string[] = [
    'firstName',

    'lastName',

    'dateOfBirth',

    'email',

    'mobile',

    'gender',

    'edit',
  ];

  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>();

  @ViewChild(MatPaginator) matPaginator!: MatPaginator;

  @ViewChild(MatSort) matSort!: MatSort;

  filterString = '';

  constructor(private StudentService: StudentService) {}

  ngOnInit(): void {
    this.StudentService.getStudents().subscribe(
      (Success) => {
        this.students = Success;

        this.dataSource = new MatTableDataSource<Student>(this.students);

        if (this.matPaginator) {
          this.dataSource.paginator = this.matPaginator;
        }

        if (this.matSort) {
          this.dataSource.sort = this.matSort;
        }
      },

      (error) => {
        console.log(error);
      }
    );
  }

  // filterStudents() {
  //   this.dataSource.filter = this.filterString.trim().toLowerCase();
  // }
}
