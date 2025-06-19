import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaDetallePage } from './nota-detalle-page';

describe('NotaDetallePage', () => {
  let component: NotaDetallePage;
  let fixture: ComponentFixture<NotaDetallePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotaDetallePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
