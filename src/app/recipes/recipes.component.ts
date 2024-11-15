import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from "@angular/forms"
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  private fb: FormBuilder
  constructor(private http: HttpClient){}

  form: FormGroup = this.fb.group({
    spiceName: '',
    spiceAmount: 0
  })
}

//   inputFields: string[] = [];

//   addInput() {
//     this.inputFields.push('');
//   }

//   removeInput(index: number) {
//     this.inputFields.splice(index, 1);
//   }
  
//   submitData(spiceList: string) {
//     this.http.post("http://localhost:3000/addRecipe", spiceList).subscribe(res => {
//       console.log(res)
//     })
//     //   if (this.inputFields.length > 0) {
//   //     this.http.post("http://localhost:3000/",this.inputFields).subscribe(
//   //       response => {
//   //         console.log('Data submitted successfully', response);
//   //       },
//   //       error => {
//   //         console.error('Error submitting data', error);
//   //       }
//   //     );
//   //   } else {
//   //     console.log('No input data to submit');
//   //   }
//   }
// }
