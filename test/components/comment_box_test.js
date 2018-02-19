import { renderComponent, expect } from '../test_helper';
import CommentBox from "../../src/components/CommentBox";

describe('CommentBox', () => {
   let component;

   beforeEach(() => {
      component = renderComponent(CommentBox);      
   });

   it('has the correct class', () => {
      expect(component).to.have.class('comment-box');
   });

   it('has a text area', () => {
      // component is a jquery object
      expect(component.find('input')).to.exist;
   });

   it('has a button', () => {
      expect(component.find('button')).to.exist;
   });

   describe('Text area', () => {
      beforeEach(() => {
         component.find('input').simulate('change', 'new comment');
      });

      it('shows the typed text', () => {
         expect(component.find('input')).to.have.value('new comment');
      });
      
      it('clear after submitting', () => {
         component.simulate('submit');
         expect(component.find('input')).to.have.value('');
      });
   })

});

