import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeBeforeAfterComponent } from '../../../../components/code-before-after/code-before-after.component';
import { CodeComponent } from "../../../../components/code/code.component";

@Component({
  selector: 'http-service-page',
  standalone: true,
  imports: [ArticleSectionsModule, CodeBeforeAfterComponent, CodeComponent],
  templateUrl: './http-service.page.html',
  styleUrl: './http-service.page.scss',
})
export class HttpServicePage {
  readonly codeBefore = `http = inject(HttpClient);

addTodo(newTodoName: string) {
  this.http.post('http://localhost:8080/api/add-todo', { name: newTodoName }, { withCredentials: true }).subscribe(/* ... */);
}
removeTodo(todoId: string) {
  this.http.delete(\`http://localhost:8080/api/todo/\${todoId}\`, { withCredentials: true }).subscribe(/* ... */);
}
updateTodo(todoId: string, newTodoName: string) {
  this.http.put(\`http://localhost:8080/api/todo/\${todoId}\`, { name: newTodoName }, { withCredentials: true }).subscribe(/* ... */);
}`;

  readonly codeAfter = `http = inject(MyHttpService);

addTodo<{ name: string }>(newTodoName: string) {
  this.http.post('add-todo', { name: newTodoName }).subscribe(/* ... */);
}
removeTodo(todoId: string) {
  this.http.delete(\`todo/\${todoId}\`).subscribe(/* ... */);
}
updateTodo<{ name: string }>(todoId: string, newTodoName: string) {
  this.http.put(\`todo/\${todoId}\`, { name: newTodoName }).subscribe(/* ... */);
}`;
  
  readonly howToCreateCode = `@Injectable({ providedIn: 'root' })
export class MyHttpService extends createHttpService('https://example.com/') {};`
}
