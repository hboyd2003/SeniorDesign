import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; 
import { DataService } from '../../services/data.service';
import { Mower } from '../../models/mower.model';

@Component({
  selector: 'app-mower-manager',
  templateUrl: './mower-manager.component.html',
  styleUrls: ['./mower-manager.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ]
})
export class MowerManagerComponent implements OnInit {
  mowers: Mower[] = [];
  mowerForm: FormGroup;
  showForm: boolean = false;

  constructor(
    private dataService: DataService,
    private fb: FormBuilder
  ) {
    this.mowerForm = this.fb.group({
      name: ['', Validators.required],
      latitude: ['', [Validators.required, Validators.min(-90), Validators.max(90)]],
      longitude: ['', [Validators.required, Validators.min(-180), Validators.max(180)]],
      status: ['', Validators.required],
      batteryLevel: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    });
  }

  ngOnInit(): void {
    this.dataService.mowers$.subscribe(mowers => {
      this.mowers = mowers;
    });
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    if (this.showForm) {
      this.mowerForm.reset();
    }
  }

  onSubmit(): void {
    if (this.mowerForm.valid) {
      const newMower: Mower = {
        ...this.mowerForm.value,
        id: 0, // Will be assigned by the service
        lastActive: new Date(),
        isSelected: true
      };
      this.dataService.addMower(newMower);
      this.mowerForm.reset();
      this.showForm = false;
    }
  }

  deleteMower(id: number): void {
    if (confirm('Are you sure you want to delete this mower?')) {
      this.dataService.deleteMower(id);
    }
  }
}