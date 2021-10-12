import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

	signupForm!: FormGroup;
	gender: string = "male";
	constructor(private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		/* this.signupForm = new FormGroup({
			name: new FormControl(null, Validators.required),
			email: new FormControl(null, [Validators.required, Validators.email]),
			mobile: new FormControl(null),
			dob: new FormControl(null),
			gender: new FormControl("male")
		}) */

		this.signupForm = this.formBuilder.group({
			"name": [, Validators.required],
			email: [null, [Validators.required, Validators.email]],
			mobile: [null],
			dob: [null],
			gender: ["male"]
		});
		this.signupForm.addControl("addredd", this.formBuilder.control(null, Validators.required));

		this.signupForm.patchValue({
			name: "1st name"
		});
	}

	onSignupSubmit() {
		console.log(this.signupForm);
	}

}

// @Component({
// 	selector: 'app-ab',
// 	templateUrl: './sign-up.component.html',
// 	styleUrls: ['./sign-up.component.css']
// })
// export class Ab {

// }