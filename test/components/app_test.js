// Test solely the App component
import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Group together similar tests
describe('App', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(App);
  });

  it('has the comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });

});

