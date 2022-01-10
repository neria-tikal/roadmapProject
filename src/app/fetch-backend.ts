import {
  HttpBackend,
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Observer } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FetchBackend implements HttpBackend {
  handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    if (!("fetch" in window)) {
      throw new Error(`Fetch not supported with this browser`);
    }

    if (req.method === "JSONP") {
      throw new Error(
        `Attempted to construct Jsonp request without HttpClientJsonpModule installed.`
      );
    }

    return new Observable((observer: Observer<HttpEvent<any>>) => {
      const request = new Request(req.urlWithParams, { method: req.method });
      console.log("Use Fetch");
      fetch(request).then(r => {
        r.json().then(body => {
          const headers = new HttpHeaders();
          r?.headers.forEach((value, name) => {
            headers.append(name, value)
          })
          observer.next(
            new HttpResponse({
              url: r.url,
              status: r.status,
              statusText: r.statusText,
              body: body,
              headers: headers
            })
          );
        });
      });
    });
  }
}

@Injectable({
  providedIn: "root"
})
export class FetchClient extends HttpClient {
  constructor(handler: FetchBackend) {
    super(handler);
  }
}
