import { TestBed } from '@angular/core/testing';
import { SimulService } from './simul.service';

describe('SimulService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimulService = TestBed.get(SimulService);
    expect(service).toBeTruthy();
  });
});
it('randomIntFromInterval() should return number', () => {
  const comp = new SimulService();
  expect(comp.randomIntFromInterval(0,100)).toBeGreaterThanOrEqual(0);
    expect(comp.randomIntFromInterval(0,100)).toBeLessThanOrEqual(100);
});
it('getPercentRange() should return number 0-100', () => {
  const comp = new SimulService();
  expect(comp.getPercentRange()).toBeGreaterThanOrEqual(0);
  expect(comp.getPercentRange()).toBeLessThanOrEqual(100);
});
it('getHourRange() should return number 0-23', () => {
  const comp = new SimulService();
  expect(comp.getHourRange()).toBeGreaterThanOrEqual(0);
  expect(comp.getHourRange()).toBeLessThanOrEqual(23);
});
it('getTimeRange() should return number 0-59', () => {
  const comp = new SimulService();
  expect(comp.getTimeRange()).toBeGreaterThanOrEqual(0);
  expect(comp.getTimeRange()).toBeLessThanOrEqual(59);
});
it('getRandomTime() should return HH:MM:SS', () => {
  const comp = new SimulService();
  expect(comp.getRandomTime()).toContain(':');
});


