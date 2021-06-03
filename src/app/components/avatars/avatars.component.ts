import {Component, AfterViewInit, Input, ViewChild, ElementRef, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.css']
})
export class AvatarsComponent implements AfterViewInit, OnChanges{
  @Input() name!: string;
  @ViewChild('avatars') avatars!: ElementRef<HTMLCanvasElement>;
  context: any;

  color = '#252525';

  constructor() {
  }


  ngAfterViewInit(): void {
    const canvas = this.avatars.nativeElement;
    this.context = canvas.getContext('2d');
  }

  generateCanvas(): void {
    this.avatars.nativeElement.width = 200;
    this.avatars.nativeElement.height = 200;
    this.context.fillStyle = this.color;
    this.context.fillRect(0, 0, this.avatars.nativeElement.height, this.avatars.nativeElement.width);
  }

  drawTextOnCanvas(): void {
    if (this.name !== undefined && this.name.length === 2) {
      this.context.font = 'bold 100px Montserrat';
      this.context.fillStyle = '#FFFFFF';
      this.context.textAlign = 'center';
      this.context.baseline = 'middle';
      this.context.fillText(this.name, 100, 135);
      console.log(this.avatars.nativeElement.toDataURL('image/png'));
    }

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.generateCanvas();
    this.drawTextOnCanvas();

  }


}
