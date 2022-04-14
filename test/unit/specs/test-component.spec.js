import { createTest, destroyVM } from '../util';
import TestComponent from 'packages/test-component';

describe('TestComponent', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(TestComponent, true);
    expect(vm.$el).to.exist;
  });
  it('size', () => {
    vm = createTest(TestComponent, {
      size: 'medium'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('el-button--medium')).to.be.true;
  });
  it('plain', () => {
    vm = createTest(TestComponent, {
      plain: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-plain')).to.be.true;
  });
  it('round', () => {
    vm = createTest(TestComponent, {
      round: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-round')).to.be.true;
  });
  it('circle', () => {
    vm = createTest(TestComponent, {
      circle: true
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('is-circle')).to.be.true;
  });
});

