import { Component, OnInit, Input } from '@angular/core';
import { NoteDir } from '@app/models';

@Component({
  selector: '[appDir]',
  templateUrl: './dir.component.html',
  styleUrls: []
})
export class DirComponent implements OnInit {
  @Input() dir: NoteDir;
  opened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get hasChildren() {
    return this.dir.children?.length;
  }

  toggle() {
    this.opened = !this.opened;
    return false;
  }

}
