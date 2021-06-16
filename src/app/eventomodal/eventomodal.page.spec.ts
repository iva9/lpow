import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventomodalPage } from './eventomodal.page';

describe('EventomodalPage', () => {
  let component: EventomodalPage;
  let fixture: ComponentFixture<EventomodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventomodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventomodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
