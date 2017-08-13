import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.less']
})

export class FormComponent implements OnInit, OnDestroy {
    id: string;
    private sub: any;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}