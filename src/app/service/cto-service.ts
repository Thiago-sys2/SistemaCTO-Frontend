import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface Cto {
  id: number;
  name: string;
  longitude: number;
  latitude: number;
  modelId: number;
}

@Injectable({ providedIn: 'root' })
export class CtoService {

  private apiUrl = 'http://localhost:8080/ctos';

  constructor(private http: HttpClient) {}

  create(dto: any) {
    return this.http.post(this.apiUrl, dto);
  }

    findAll(): Observable<Cto[]> {
    return this.http.get<Cto[]>(this.apiUrl);
  }
}
