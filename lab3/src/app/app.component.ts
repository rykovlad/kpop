import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: ` <h1>rykov 3rd lab</h1>
    <br/>
        <img [src]="url" > <br/>
<input type='file' (change)="onSelectFile($event)">
        
        
        `,
})
export class AppComponent {
    url = '';
    onSelectFile(event: any) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (event: any) => {
                this.url = event.target.result;
            }

            reader.readAsDataURL(event.target.files[0]);
        }
    }

}