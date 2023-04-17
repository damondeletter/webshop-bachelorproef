import { ChangeDetectorRef, Component, Inject, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  public counter: number;
  public time: number;

  @Input("Props") foo : any = {
    params: {
      count: -1,
    },
  };


  ngOnInit(): void {
    // this.props.subscribe(s => {
    //   this.time = s.params.count;
    //   this.cd.detectChanges();
    // });
  }

}