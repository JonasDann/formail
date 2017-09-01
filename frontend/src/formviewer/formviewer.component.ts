import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Form} from "../dashboard/dashboard.component";
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'formviewer',
    templateUrl: './formviewer.component.html',
    styleUrls: ['./formviewer.component.less']
})

export class FormviewerComponent implements OnInit, OnDestroy {
    form: Form;
    private sub: any;

    constructor(private route: ActivatedRoute, private http: HttpClient) {}

    ngOnInit(): void {
        this.form = new Form();

        this.sub = this.route.params.subscribe(params => {
            if (typeof params.id !== 'undefined') {
                this.form.id = params['id'];

                this.http.get<Form>('http://localhost:3000/api/form/' + this.form.id).subscribe(data => {
                    this.form = data;
                    console.log(data);
                });
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    public save() {
        (<HTMLElement>document.querySelector('button.btn .glyphicon')).style.display = "inline-block";

        this.form.id = this.form.name;
        this.http.post<Form>('http://localhost:3000/api/form', this.form).subscribe(() => {
            (<HTMLElement>document.querySelector('button.btn .glyphicon')).style.display = "none";
        });
    }
}