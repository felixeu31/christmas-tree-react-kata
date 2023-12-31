import { fireEvent, render, screen } from '@testing-library/react';
import TreeGenerator from "./TreeGenerator";

describe('Tree generator', () => {
    it('should render warning message when height is 0', () => {
      const { getByText } = render(<TreeGenerator treeHeight={0}/>);
      
      expect(getByText('Please, select height and generate to get your tree')).toBeInTheDocument();
    });
    
    it('should render tree of height 1', () => {
        const { getByTestId } = render(<TreeGenerator treeHeight={1}/>);

        const renderedTree = getByTestId("tree");

        expect(renderedTree).toBeInTheDocument();
        expect(renderedTree.innerHTML).toBe('X<br>'+
        '|')
    });
    
    it('should render tree of height 2', () => {
      const { getByTestId } = render(<TreeGenerator treeHeight={2}/>);

      const renderedTree = getByTestId("tree");

      expect(renderedTree).toBeInTheDocument();
      expect(renderedTree.innerHTML).toBe('X<br>'+
      'XXX<br>'+
      '|')
    });      
    
    it('should render tree of height 3', () => {
      const { getByTestId } = render(<TreeGenerator treeHeight={3}/>);

      const renderedTree = getByTestId("tree");

      expect(renderedTree).toBeInTheDocument();
      expect(renderedTree.innerHTML).toBe('X<br>'+
      'XXX<br>'+
      'XXXXX<br>'+
      '|')
    });  
    
    it('should render tree of height 6', () => {
      const { getByTestId } = render(<TreeGenerator treeHeight={6}/>);

      const renderedTree = getByTestId("tree");

      expect(renderedTree).toBeInTheDocument();
      expect(renderedTree.innerHTML).toBe('X<br>'+
      'XXX<br>'+
      'XXXXX<br>'+
      'XXXXXXX<br>'+
      'XXXXXXXXX<br>'+
      'XXXXXXXXXXX<br>'+
      '|')
    }); 

    it('should render warning message when height is out of range', () => {
      const { getByText } = render(<TreeGenerator treeHeight={-1}/>);
      
      expect(getByText('The height introduced is invalid, please introduce a value between 1 and 20')).toBeInTheDocument();      
    });
});