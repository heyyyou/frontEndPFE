import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjouterAvisGaucheComponent } from './ajouter-avis-gauche.component';

describe('AjouterAvisGaucheComponent', () => {
  let component: AjouterAvisGaucheComponent;
  let fixture: ComponentFixture<AjouterAvisGaucheComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterAvisGaucheComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjouterAvisGaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
