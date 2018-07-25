import {Component, ComponentFactoryResolver, Input, OnInit, ViewContainerRef} from '@angular/core';
import {TableGridOptions} from '../../interfaces/table-grid-options';
import {TableGridDetailsComponent} from '../table-grid-details/table-grid-details.component';

@Component({
  selector: 'lib-table-grid-cell',
  templateUrl: './table-grid-cell.component.html',
  styleUrls: ['./table-grid-cell.component.css']
})
export class TableGridCellComponent implements OnInit {
  @Input() gridOptions: TableGridOptions;
  @Input() gridRow: any;
  @Input() gridCell: any;
  @Input() isFirst: boolean;
  @Input() detailRow;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    if (this.detailRow) {
      setTimeout(() => {
        const component = (typeof this.gridOptions.detailComponent !== 'undefined')
          ? this.gridOptions.detailComponent : TableGridDetailsComponent;
        const factory = this.componentFactoryResolver.resolveComponentFactory(component);
        const ref = this.viewContainerRef.createComponent(factory);
        ref.instance.gridOptions = this.gridOptions;
        ref.instance.gridRow = this.gridRow;
        ref.instance.detailsInit(this.gridCell);
        ref.changeDetectorRef.detectChanges();
      }, 0);
    }
  }
}
