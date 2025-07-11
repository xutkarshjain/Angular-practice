import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { debounceTime, Subject, BehaviorSubject, takeUntil } from 'rxjs';

interface ColumnData {
  name: string;
  value: string;
}

interface userData {
  id: number;
  name: string;
  age: number;
  [key: string]: any;
}

@Component({
  selector: 'app-table',
  imports: [CommonModule, FormsModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table implements OnInit, OnDestroy {
  searchText = '';
  filteredTableData: userData[] = [];
  searchSubject = new BehaviorSubject<string>('');
  private destroy$ = new Subject<void>();

  tableData: userData[] = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 22 },
    { id: 4, name: 'Diana', age: 28 },
    { id: 5, name: 'Ethan', age: 35 },
    { id: 6, name: 'Alice', age: 31 },
    { id: 7, name: 'Bob', age: 26 },
    { id: 8, name: 'Frank', age: 29 },
    { id: 9, name: 'Grace', age: 24 },
    { id: 10, name: 'Alice', age: 27 },
    { id: 11, name: 'Helen', age: 33 },
    { id: 12, name: 'Charlie', age: 21 },
    { id: 13, name: 'Ian', age: 32 },
    { id: 14, name: 'Diana', age: 30 },
    { id: 15, name: 'Bob', age: 28 },
  ];

  tableColumns: ColumnData[] = [
    { name: 'SNo.', value: 'id' },
    { name: 'Name', value: 'name' },
    { name: 'Age', value: 'age' },
    { name: 'Action', value: 'action' },
  ];

  ngOnInit() {
    this.filterTable();
    this.searchSubject
      .pipe(debounceTime(500), takeUntil(this.destroy$))
      .subscribe(() => {
        this.filterTable();
      });
  }

  deleteDataRow(id: any) {
    const indToDelete = this.tableData.findIndex((row) => row.id == id);
    this.tableData.splice(indToDelete, 1);
    this.filterTable();
  }

  onSearch() {
    setTimeout(() => {
      this.searchSubject.next(this.searchText);
    }, 0);
  }

  filterTable() {
    this.filteredTableData = this.tableData.filter((row: userData) => {
      return row.name
        .toLowerCase()
        .includes(this.searchText.trim().toLowerCase());
    });
  }

  ngOnDestroy(): void {
    this.destroy$.complete();
  }
}
