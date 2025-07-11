import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  tableData: userData[] = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 22 },
    { id: 4, name: 'Diana', age: 28 },
    { id: 5, name: 'Ethan', age: 35 },
  ];

  tableColumns: ColumnData[] = [
    { name: 'SNo.', value: 'id' },
    { name: 'Name', value: 'name' },
    { name: 'Age', value: 'age' },
    { name: 'Action', value: 'action' },
  ];

  deleteDataRow(id: any) {
    const indToDelete = this.tableData.findIndex((row) => row.id == id);
    console.log('indToDelete', indToDelete);

    this.tableData.splice(indToDelete, 1);
  }
}
