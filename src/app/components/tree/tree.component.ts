import { Component, OnInit } from '@angular/core';
import { NoteDir } from '@app/models';
import { NotesService } from '@app/services';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: []
})
export class TreeComponent implements OnInit {

  tree: NoteDir[];
  loading: boolean = true;

  constructor(
    private notesService: NotesService
  ) {
    this.notesService.tree.subscribe(tree => this.tree = tree );
  }

  ngOnInit(): void {
    this.notesService.loadTree().subscribe(_ => this.loading = false);
  }

}
