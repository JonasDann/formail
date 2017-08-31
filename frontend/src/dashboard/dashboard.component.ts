import {Component, OnInit} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.less']
})

export class DashboardComponent implements OnInit {
    forms: Form[];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get<Form[]>('http://localhost:3000/api/form').subscribe(data => {
            this.forms = data;
        });
    }

    public remove(id) {
        this.http.delete('http://localhost:3000/api/form/' + id).subscribe(() => {
            let i;
            for (i = 0; i < this.forms.length; i++) {
                if (id.localeCompare(this.forms[i].id) == 0) {
                    this.forms.splice(i, 1);
                    break;
                }
            }
        });
    }
}

export class Form {
    id: string;
    name: string;
    description: string;
    email: string;
    template: string;
}