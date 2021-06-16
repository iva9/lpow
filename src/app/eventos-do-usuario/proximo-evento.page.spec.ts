import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProximoEventoPage } from './proximo-evento.page';

describe('ProximoEventoPage', () => {
  let component: ProximoEventoPage;
  let fixture: ComponentFixture<ProximoEventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProximoEventoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProximoEventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
