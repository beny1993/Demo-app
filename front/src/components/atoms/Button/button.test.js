/* global describe,it */
import { render, fireEvent } from '@testing-library/react';
import Button from './Buttton';

describe('when button render', () => {
  const handleClick = jest.fn();
  const component = render(<Button onClick={handleClick}>my button</Button>);
  const button = component.getByRole('button');
  fireEvent.click(button);

  it('have text', () => {
    expect(button.textContent).toBe('my button');
  });

  it('onClick should be function', () => {
    expect(typeof handleClick).toBe('function');
  });

  it('onClick should called correctly', () => {
    expect(handleClick).toBeCalledTimes(1);
  });
});
