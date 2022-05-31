import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsConsultationwithoutAutoComponent } from './details-consultationwithout-auto.component';

describe('DetailsConsultationwithoutAutoComponent', () => {
  let component: DetailsConsultationwithoutAutoComponent;
  let fixture: ComponentFixture<DetailsConsultationwithoutAutoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsConsultationwithoutAutoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsConsultationwithoutAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
