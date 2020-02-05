import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
// implements OnInit lifecycle for initializing the form.
// we use OnInit because we should initialize the form before the rendering of the template.
export class AppComponent implements OnInit {
  genders = ["male", "female", "gender neutral"];
  signupForm: FormGroup;

  ngOnInit() {
    //initialization form:
    this.signupForm = new FormGroup({
      //formControls: key value pairs. In HTML we have username field, email, radio button so:
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl("male")
    });
  }
  onSubmit() {
    console.log(this.signupForm);
  }
}
