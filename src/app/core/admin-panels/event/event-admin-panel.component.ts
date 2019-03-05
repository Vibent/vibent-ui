import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'event-admin-panel',
  templateUrl: './event-admin-panel.component.html',
})
export class EventAdminPanelComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  openSettingsModal() {
    $('#modalEventSettings').modal('show');
  }

}
