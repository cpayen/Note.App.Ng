import { Component, OnInit, Input } from '@angular/core';
import { NoteDir } from '@app/models';

@Component({
  selector: '[appTreeDir]',
  templateUrl: './tree-dir.component.html',
  styleUrls: []
})
export class TreeDirComponent implements OnInit {
  @Input() dir: NoteDir;
  opened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get hasChildren() {
    return this.dir.children?.length;
  }

  toggle($event) {
    this.opened = !this.opened;
    $event.preventDefault();
    $event.stopPropagation();
  }

}
