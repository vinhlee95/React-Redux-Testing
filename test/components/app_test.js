// Test solely the App component
import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Group together similar tests
describe('App', () => {

  // Test a single attribute of a target
  it('shows the correct text', () => {

    // Create an instance of App
    const component = renderComponent(App);

    // To make an assertion about a target 
    expect(component).to.contain('Hello world');

  });

});

