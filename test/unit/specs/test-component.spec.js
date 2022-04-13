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
});

