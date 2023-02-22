import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  <h2>
    Welcome {{title}}
  </h2>
  <a id="hi" href="https://www.youtube.com/watch?v=Y6OP-lPJxgs&list=PLC3y8-rFHvwhBRAgFinJR8KHIrCdTkZcZ&index=7">Angular link</a>
  <h2>
    {{greet()}}
</h2>
<h2 id="demo">
  {{siteUrl}}
</h2>
<p id="demo">JavaScript can change HTML content.</p>
<input type="text" value="pavan">
<input [disabled]="false" [id]="myId" type="text" value="Samala">
<input type="text" value="chintu">
<button type="button" onclick='document.getElementById("demo").innerHTML = "Pavan Samala chintu"'>Click me</button>
<h2 [class]="a">Pavan</h2>
<h2 [class]="b">Samala</h2>
  ` ,
  styles: [`
  h2{
   text-align : center
  }
  a{
    text-align : center
  }
  .A{
    color : blue;
    padding : 5px;
    margin : 5px;
  }
  .B{
    font-style : italic;
  }
  `]
})
export class TestComponent implements OnInit {
  public title = "pavan";
  public siteUrl = window.location.href;
  public myId="Samala";
  public a="A";
  public b="B";
  public Url="image.png";

  constructor() { }

  ngOnInit(): void {
  }
  greet(){
    return "Hello";
  }

}
