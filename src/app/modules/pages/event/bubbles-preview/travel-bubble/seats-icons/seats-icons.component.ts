import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'seats-icons',
  templateUrl: './seats-icons.component.html',
  styleUrls: ['./seats-icons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SeatsIconsComponent implements OnInit {
  @Input()
  amount: number;
  @Input()
  maxAmount: number;
  @Input()
  type: string;

  displayAmount: number;
  remainingAmount: number;

  ngOnInit(): void {
    this.displayAmount = Math.min(this.amount, this.maxAmount);
    this.remainingAmount = Math.max(this.amount - this.maxAmount, 0);
  }
}
