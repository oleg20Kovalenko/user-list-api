import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/service/list.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public page: number = 1;
  public count: number = 6;
  public users: any[] = [];
  public totalPages!: number;
  isLoading: Subject<boolean> = this.listService.isLoading;

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.changeState();
  }

  changeState() {
    this.listService
      .getUsers(this.page, this.count)
      .subscribe((res) => {
        this.users = res.data;
        this.totalPages = res.total_pages;
      });
  }

  changePage(page: number): void {
    this.page = page;
    this.changeState();
  }

  checkNumbOfCurrentPage(page: number): boolean {
    return this.page === page;
  }

}
