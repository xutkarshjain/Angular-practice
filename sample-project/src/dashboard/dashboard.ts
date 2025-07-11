import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface item {
  name: string;
  id: number;
}
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  itemList: item[] = [
    { name: 'soap', id: 1 },
    { name: 'shampoo', id: 2 },
    { name: 'facewash', id: 3 },
    { name: 'comb', id: 4 },
    { name: 'comb', id: 4 },
    { name: 'comb', id: 4 },
    { name: 'comb', id: 4 },
    { name: 'comb', id: 4 },
    { name: 'comb', id: 4 },
    { name: 'comb', id: 4 },
    { name: 'comb', id: 4 },
    { name: 'comb', id: 4 },
    { name: 'comb', id: 4 },
    { name: 'comb', id: 4 },
    { name: 'comb', id: 4 },
    { name: 'comb', id: 4 },
    { name: 'comb', id: 4 },
    { name: 'comb', id: 4 },
    { name: 'comb', id: 4 },
    { name: 'comb', id: 4 },
    { name: 'comb', id: 4 },
    { name: 'comb', id: 4 },
  ];

  handleCardClick(e: any) {
    const target = e.target as HTMLElement;

    const li = target.closest('.card');
    if (li) {
      const id = li.getAttribute('data-id');
      console.log('Clicked item ID:', id);
    }
    e.stopPropagation();
  }

  handleCardClickParent(e: any) {
    console.log('i do nothing');
  }
}
