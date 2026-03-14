
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface UserToDelete {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  avatar?: string;
}

@Component({
  selector: 'app-delete',
  standalone: false,
  templateUrl: './delete.html',
  styleUrl: './delete.css',
})
export class Delete {
  @Input() isOpen = false;
  @Input() user: UserToDelete | null = null;
  @Input() isDeleting = false;
 
  @Output() confirmed = new EventEmitter<number>();
  @Output() cancelled = new EventEmitter<void>();
 
  confirm(): void {
    if (this.user) {
      this.confirmed.emit(this.user.id);
    }
  }
 
  cancel(): void {
    this.cancelled.emit();
  }
 
  // Close on backdrop click
  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.cancel();
    }
  }
}
