import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditProfilMedecinComponent } from './edit-profil-medecin.component';

describe('EditProfilMedecinComponent', () => {
  let component: EditProfilMedecinComponent;
  let fixture: ComponentFixture<EditProfilMedecinComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfilMedecinComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditProfilMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
