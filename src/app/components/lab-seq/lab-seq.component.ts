import { Component } from '@angular/core';
import { LabseqService } from 'src/app/services/Labseq.service';

@Component({
  selector: 'app-lab-seq',
  templateUrl: './lab-seq.component.html',
  styleUrls: ['./lab-seq.component.scss']
})
export class LabSeqComponent {
  inputValue!: string
  result!: string

  constructor(private service: LabseqService) { }

  calculate(): void {
    this.service.getCalculationResult(this.inputValue).subscribe({
      next: (value) => this.result = value,
      error: (error) => {
        console.error('Erro:', error)
        this.result = error.error.message
      } 
    })
  }

}
