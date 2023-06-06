import { Component,Input } from "@angular/core";
import { CommonModule } from "@angular/common";


export interface Housinglocation {
id:number;
name:string;
city:string;
state:string;
photo:string;
availableUnits:number;
wifi:boolean;
laundry:boolean;
}
