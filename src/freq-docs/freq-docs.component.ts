import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-freq-docs',
  templateUrl: './freq-docs.component.html',
  styleUrls: ['./freq-docs.component.scss'],
})
export class FreqDocsComponent implements OnInit {
  file: any = null;
  demoForm = this.fb.group({
    docs: this.fb.array([]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  get docs() {
    return this.demoForm.controls['docs'] as FormArray;
  }

  addDoc() {
    const docForm = this.fb.group({
      title: [''],
      file: [''],
    });
    this.docs.push(docForm);
  }

  remove(i: number) {
    this.docs.removeAt(i);
  }

  upload(event: any, index: number): void {
    let fileName = event.target.files[0].name;
    this.docs.controls[index].patchValue({ file: fileName });
  }

  onSave() {
    console.log(this.demoForm.value);
  }
}
