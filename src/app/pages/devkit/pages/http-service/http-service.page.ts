import { Component } from '@angular/core';
import { ArticleSectionsModule } from 'src/app/components/article-sections/article-sections.module';
import { CodeBeforeAfterComponent } from '../../../../components/code-before-after/code-before-after.component';

@Component({
  selector: 'http-service-page',
  standalone: true,
  imports: [ArticleSectionsModule, CodeBeforeAfterComponent],
  templateUrl: './http-service.page.html',
  styleUrl: './http-service.page.scss',
})
export class HttpServicePage {
  // readonly FileSystemIsSupportedExampleData = FileSystemIsSupportedExampleData;
  // readonly FileSystemSaveAsExampleData = FileSystemSaveAsExampleData;
  // readonly FileSystemRequestUploadExampleData = FileSystemRequestUploadExampleData;

  readonly codeBefore = `provide: [
  HttpClient
]
  
// ...

http = inject(HttpClient);

addTodo(newTodoName: string) {
  this.http.post('http://localhost:8080/api/add-todo', { name: newTodoName }, { withCredentials: true }).subscribe(/* ... */);
}
removeTodo(todoId: string) {
  this.http.delete(\`http://localhost:8080/api/todo/\${todoId}\`, { withCredentials: true }).subscribe(/* ... */);
}
updateTodo(todoId: string, newTodoName: string) {
  this.http.put(\`http://localhost:8080/api/todo/\${todoId}\`, { name: newTodoName }, { withCredentials: true }).subscribe(/* ... */);
}`;

  readonly codeAfter = `provide: [
  ...provideHttpService('http://localhost:8080/api/', { withCredentials: true })
]
  
// ...

http = inject(HttpService);

addTodo<{ name: string }>(newTodoName: string) {
  this.http.post('add-todo', { name: newTodoName }).subscribe(/* ... */);
}
removeTodo(todoId: string) {
  this.http.delete(\`todo/\${todoId}\`).subscribe(/* ... */);
}
updateTodo<{ name: string }>(todoId: string, newTodoName: string) {
  this.http.put(\`todo/\${todoId}\`, { name: newTodoName }).subscribe(/* ... */);
}`;
}
