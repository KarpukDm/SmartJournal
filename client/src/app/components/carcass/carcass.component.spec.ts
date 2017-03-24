/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {CarcassComponent} from "./carcass.component";

describe('CarcassComponent', () => {
  let component: CarcassComponent;
  let fixture: ComponentFixture<CarcassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarcassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarcassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
