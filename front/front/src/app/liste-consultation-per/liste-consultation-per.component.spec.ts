import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeConsultationPerComponent } from './liste-consultation-per.component';

describe('ListeConsultationPerComponent', () => {
  let component: ListeConsultationPerComponent;
  let fixture: ComponentFixture<ListeConsultationPerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeConsultationPerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeConsultationPerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
