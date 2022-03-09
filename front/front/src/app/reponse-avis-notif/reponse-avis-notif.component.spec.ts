import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReponseAvisNotifComponent } from './reponse-avis-notif.component';

describe('ReponseAvisNotifComponent', () => {
  let component: ReponseAvisNotifComponent;
  let fixture: ComponentFixture<ReponseAvisNotifComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReponseAvisNotifComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReponseAvisNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
