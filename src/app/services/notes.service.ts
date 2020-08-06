import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';
import { NoteDir } from '@app/models';

@Injectable({ providedIn: 'root' })
export class NotesService {
  private treeSubject = new BehaviorSubject<NoteDir[]>([]);
  readonly tree = this.treeSubject.asObservable();

  constructor(private http: HttpClient) {}

  // get tree() {
  //   return this.treeSubject.asObservable();
  // }

  loadTree() {
    return this.http.get<any>(`${environment.apiUrl}/notes/tree`)
      .pipe(map(tree => {
        this.treeSubject.next(tree);
        return tree;
      }));
  }
}