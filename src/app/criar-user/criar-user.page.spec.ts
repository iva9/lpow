import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CriarUserPage } from './criar-user.page';

describe('CriarUserPage', () => {
  let component: CriarUserPage;
  let fixture: ComponentFixture<CriarUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CriarUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
