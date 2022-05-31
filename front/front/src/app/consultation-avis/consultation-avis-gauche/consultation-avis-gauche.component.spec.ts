import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultationAvisGaucheComponent } from './consultation-avis-gauche.component';

describe('ConsultationAvisGaucheComponent', () => {
  let component: ConsultationAvisGaucheComponent;
  let fixture: ComponentFixture<ConsultationAvisGaucheComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationAvisGaucheComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultationAvisGaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
