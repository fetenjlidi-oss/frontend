import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserC } from '../user-c';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List implements OnInit {
  users: UserC[] = [];
  selectedIds = new Set<number>();
  loading = true;

  constructor(
    private userService: User,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getAllUser().subscribe({
      next: (data) => {
        this.users =data
        this.loading = false;
      },
      error: () => (this.loading = false),
    });
  }

  toggleAll(checked: boolean): void {
    if (checked) {
      this.users.forEach((u) => u.id != null && this.selectedIds.add(u.id));
    } else {
      this.selectedIds.clear();
    }
  }

  toggleOne(id: number | undefined, checked: boolean): void {
    if (id == null) return;
    if (checked) this.selectedIds.add(id);
    else this.selectedIds.delete(id);
  }

  isSelected(id: number | undefined): boolean {
    return id != null && this.selectedIds.has(id);
  }

  get activeCount(): number {
    return this.users.filter((u) => u.is_active).length;
  }

  get isAllSelected(): boolean {
    const ids = this.users.filter((u) => u.id != null).map((u) => u.id!);
    return ids.length > 0 && ids.every((id) => this.selectedIds.has(id));
  }

  goToAdd(): void {
    this.router.navigate(['/user/add']);
  }

  goToUpdate(id: number): void {
    this.router.navigate(['/user/update/'+String(id)],);
  }

  goToDelete(id: number): void {
    this.router.navigate(['/user/delete'], { queryParams: { id } });
  }
}
