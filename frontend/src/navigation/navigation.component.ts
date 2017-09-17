import {Component, Input} from "@angular/core";

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.less']
})

export class NavigationComponent {
    @Input() loggedIn: boolean;

    public login() {
        let url = location.href;
        location.href = "#login";
        history.replaceState(null,null, url);
        document.getElementById("account-email").focus();
    }
}