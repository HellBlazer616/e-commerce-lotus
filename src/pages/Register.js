import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { navigate } from '@reach/router';
// import { useAlert } from 'react-alert';
import { grey } from '../utils/Colors';
import registerSvg from '../utils/assets/registerSvg.svg';
import { Log, Content } from '../components/FormComponent';

const Register = () => {
  const { register, handleSubmit, errors, getValues } = useForm({});
  const [formData, setFormData] = useState('');

  const onSubmit = (data) => {
    console.log(data);

    const payload = Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');
    setFormData(payload);
    console.log('served');
  };

  useEffect(() => {
    if (formData === '') return;
    async function setData(payload) {
      await fetch('customer/api/auth/register', {
        method: 'POST',

        body: payload,
      }).then(async (response) => {
		console.log(response);
        const res = await response.json();
        if (res.msg === 'User created!') {
          console.log('Created');
		  setFormData('');
        }
      });
    }
    setData(formData);
	
  }, [formData]);

  return (
    <Wrapper>
      <StyledLog>
        <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign up</h1>
          <section className="form-group">
            <label htmlFor="firstName">
              First Name
              <input
                type="text"
                name="firstName"
                ref={register({
                  required: 'You must specify an name',
                  minLength: {
                    value: 3,
                    message: 'The name must be 3 characters or more',
                  },
                })}
              />
              {errors.firstName && (
                <p className="error">{errors.firstName.message}</p>
              )}
            </label>

            <label htmlFor="lastName">
              Last Name
              <input
                type="text"
                name="lastName"
                ref={register({
                  required: 'You must specify an name',
                  minLength: {
                    value: 3,
                    message: 'The name must be 3 characters or more',
                  },
                })}
              />
              {errors.lastName && (
                <p className="error">{errors.lastName.message}</p>
              )}
            </label>
          </section>
          <section className="form-group">
            <label htmlFor="country">
              Country
              <select
                name="country"
                id="country"
                defaultValue="Bangladesh"
                ref={register()}
              >
                <option>Bangladesh</option>
                <option>Apples</option>
                <option>Bananas</option>
                <option>Grapes</option>
                <option>Oranges</option>
              </select>
            </label>
            <label htmlFor="city">
              City
              <select
                name="city"
                id="city"
                defaultValue="Country"
                ref={register()}
              >
                <option>Dhaka</option>
                <option>Apples</option>
                <option>Bananas</option>
                <option>Grapes</option>
                <option>Oranges</option>
              </select>
            </label>
          </section>
          <section className="form-group">
            <label htmlFor="password">
              Password
              <input
                type="password"
                name="password"
                ref={register({
                  required: 'You must specify a password',
                  minLength: {
                    value: 6,
                    message: 'The password must be 6 characters or more',
                  },
                  validate: (value) => {
                    const message =
                      'Password must contain at least one letter, at least one number, and be longer than six characters';
                    const regex = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/i;
                    if (regex.test(value)) {
                      return true;
                    }
                    return message;
                  },
                })}
              />
              {errors.password && (
                <p className="error">{errors.password.message}</p>
              )}
            </label>

            <label htmlFor="password2">
              Confirm Password
              <input
                type="password"
                name="password2"
                ref={register({
                  required: 'You must specify the confirm Password',

                  validate: (value) => {
                    const message =
                      'confirm password do not match the password';
                    const password = getValues('password');
                    if (value === password) return true;
                    return message;
                  },
                })}
              />
              {errors.password2 && (
                <p className="error">{errors.password2.message}</p>
              )}
            </label>
          </section>
          <section className="form-group">
            <label htmlFor="phone">
              Phone
              <input
                type="text"
                name="phone"
                ref={register({
                  minLength: 7,
                  required: 'You must specify a valid phone number',
                })}
              />
              {errors.phone && <p className="error">{errors.phone.message}</p>}
            </label>
          </section>
          <input className="submit" type="submit" />
        </form>
      </StyledLog>
      <Content>
        <img src={registerSvg} alt="logging" />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${grey};
  display: flex;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;

const StyledLog = styled(Log)`
  input {
    color: #2f2f2f;
    margin-right: 10px;
    width: 80%;
  }
  & .form-control {
    flex-basis: 70%;
  }
`;

export default Register;
