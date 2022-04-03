/* global describe,it */
import { render, fireEvent, screen, act, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import LoginForm from '@/components/forms/LoginForm/LoginForm';
import { initializeStore } from '@/redux/store';

describe('when change password form render', () => {
  let loginButton;
  let component;
  const onFinish = jest.fn();

  beforeEach(async () => {
    const store = initializeStore({});
    component = render(
      <Provider store={store}>
        <LoginForm
          onFinish={onFinish}
          loading={false}
        />
      </Provider>,
    );
    loginButton = await screen.findByRole('button');
  });

  it('inputs render', () => {
    const username = component.container.querySelector('#username');
    const password = component.container.querySelector('#password');
    expect(username).toBeTruthy();
    expect(password).toBeTruthy();
  });

  it('buttons render', () => {
    expect(loginButton).toBeTruthy();
  });

  it('change value works', () => {
    const username = component.container.querySelector('#username');
    const password = component.container.querySelector('#password');
    fireEvent.change(username, { target: { value: 'example@gmail.com' } });
    fireEvent.change(password, { target: { value: '12345678' } });
    expect(username.value).toBe('example@gmail.com');
    expect(password.value).toBe('12345678');
  });

  it('login button works', async () => {
    const username = component.container.querySelector('#username');
    const password = component.container.querySelector('#password');
    fireEvent.change(username, { target: { value: 'm.savalanpour@gmail.com' } });
    fireEvent.change(password, { target: { value: 'm@12345678' } });
    await act(async () => {
      fireEvent.submit(loginButton);
    });
    await waitFor(() => expect(onFinish).toHaveBeenCalledTimes(1));
  });

  it('Login Form Snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
