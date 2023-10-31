import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UtilsService {
    table = new Subject<any>();

    getTable() {
        return this.table.asObservable();
    }

    setTable(value: any) {
        this.table.next(value);
    }
}