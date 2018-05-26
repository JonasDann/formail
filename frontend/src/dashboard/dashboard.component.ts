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
            this.forms = [];
            for (let form of data) {
                this.forms.push(new Form(form));
            }
        });
    }

    public toggleActive(id) {

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
    emails: string[];
    template: string;
    active: boolean;

    constructor(data?: {id: string, name: string, description: string, emails: string[], template: string, active: boolean}) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
            this.emails = data.emails;
            this.template = data.template;
            this.active = data.active;
        } else {
            this.id = "";
            this.name = "";
            this.description = "";
            this.emails = [];
            this.template = "";
            this.active = false;
        }
    }

    get emailList(): string {
        return this.emails.join(", ");
    }
    set emailList(str: string) {
        this.emails = str.split(",").map(element => element.trim());
    }
}