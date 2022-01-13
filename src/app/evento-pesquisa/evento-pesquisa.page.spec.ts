import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventoPesquisaPage } from './evento-pesquisa.page';

describe('EventoPesquisaPage', () => {
  let component: EventoPesquisaPage;
  let fixture: ComponentFixture<EventoPesquisaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoPesquisaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventoPesquisaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
