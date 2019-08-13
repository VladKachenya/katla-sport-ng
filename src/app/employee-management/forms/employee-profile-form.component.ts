import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeListItem } from '../models/employee-list-item';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-profile-form.component.html',
    styleUrls: ['./employee-profile-form.component.css']
})
export class EmployeeProfileFormComponent implements OnInit {
    subordinateEmployees: EmployeeListItem[];
    employee: Employee;
    boss: Employee;
    existed = false;
    bossExisted = false;

    constructor(
        private employeeService: EmployeeService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.route.params.subscribe(p => {
            if (p['id'] === undefined) return;
            this.employeeService.getEmployee(p['id']).subscribe(e => {
                this.employee = e;
                this.employeeService.getEmployee(e.bossId).subscribe(b => {
                    this.boss = b; 
                    this.bossExisted = true
                });
            });
            this.employeeService.getSubordinateEmployees(p['id']).subscribe(se => this.subordinateEmployees = se);
            this.employeeService.getEmployee(p['id']).subscribe(e => this.employee = e);
            this.existed = true;
        });
    }

    onSubmit() {
    }
};