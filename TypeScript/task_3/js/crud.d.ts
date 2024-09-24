import {RowId, RowElement} from "../interface.ts";


export function insertRow(row: RowElement): number;
export function deleteRow(rowId: number): void;
export function updateRow(rowId: number, row: RowElement);
