import React from 'react';
import { Onboarding, Info, Step, Field, End } from '@reactive-labs/onboarding';
import Container from './components/container/container.component';
import InputText from './components/input-text/input-text.component';
import Button from './components/button/button.component';
import Progress from './components/progress/progress.component';
import Feedback from './components/feedback/feedback.component';
import Header from './components/header/header.component';
import StepHeader from './components/step-header/step-header.component';

import { emailValidator } from './utils';

class App extends React.Component {
  render() {
    return (
      <Onboarding>
        <Info>
          {({ currentStep, numberOfSteps, prevStep }) => (
            <>
              <Progress currentStep={currentStep} numberOfSteps={numberOfSteps} />
              <Header back={currentStep > 1 && prevStep} />
            </>
          )}
        </Info>
        <Step name="full-name">
          {({ nextStep, validStep }) => (
            <Container>
              <StepHeader>Tell us a little about yourself</StepHeader>
              <Field
                name="name"
                type="text"
                validations={[
                  {
                    name: 'not-empty',
                    on: 'blur',
                    validator: value => value !== '',
                    errorMessage: 'Name must not be empty',
                  },
                  {
                    name: 'minimum-characters',
                    on: 'blur',
                    validator: value => value.length > 3,
                    errorMessage: `I bet that your name has more than 3 characters`,
                  },
                  {
                    name: 'on-enter',
                    on: 'enter',
                    validations: ['not-empty', 'minimum-characters'],
                  },
                ]}
              >
                {({ type, value, onChange, onFocus, onBlur, onEnter, valid, error }) => (
                  <InputText
                    type={type}
                    placeholder="Name"
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onEnter={() => onEnter(nextStep)}
                    valid={valid}
                    error={error}
                  />
                )}
              </Field>
              <Field name="last-name" type="text">
                {({ type, value, onChange, onFocus, onBlur, onEnter, valid, error }) => (
                  <InputText
                    type={type}
                    placeholder="Last name"
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onEnter={() => onEnter(nextStep)}
                    valid={valid}
                    error={error}
                  />
                )}
              </Field>
              <Button disabled={!validStep} onClick={nextStep}>
                Next Step
              </Button>
            </Container>
          )}
        </Step>
        <Step name="thanks-for-coming" conversational>
          {({ nextStep }) => (
            <Container>
              <Info>
                {({ onboarding }) => (
                  <Feedback
                    title={`Hey ${onboarding.full_name.name}`}
                    subtitle="Thanks for taking your time to fill this form!"
                  />
                )}
              </Info>
              <Button onClick={nextStep}>Let's go!</Button>
            </Container>
          )}
        </Step>
        <Step name="dni">
          {({ nextStep, validStep }) => (
            <Container>
              <StepHeader>What's your personal identification number (ES)?</StepHeader>
              <Field
                name="dni"
                type="text"
                validations={[
                  {
                    name: 'dni-length',
                    on: 'blur',
                    validator: value => value.length === 9,
                    errorMessage: 'A DNI must have 9 characters length',
                  },
                  {
                    name: 'on-enter',
                    on: 'enter',
                    validations: ['dni-length'],
                  },
                ]}
              >
                {({ type, value, onChange, valid, onBlur, onEnter, error }) => (
                  <InputText
                    type={type}
                    placeholder="DNI"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    onEnter={() => onEnter(nextStep)}
                    valid={valid}
                    error={error}
                  />
                )}
              </Field>
              <Button disabled={!validStep} onClick={nextStep}>
                Next Step
              </Button>
            </Container>
          )}
        </Step>
        <Step name="aditional-details">
          {({ validStep, finish }) => (
            <Container>
              <StepHeader>Mind to share your email with us?</StepHeader>
              <Field
                name="email"
                type="email"
                validations={[
                  {
                    name: 'is-email',
                    on: 'blur',
                    validator: email => emailValidator(email),
                    errorMessage: 'You have to write a valid email',
                  },
                  {
                    name: 'on-enter',
                    on: 'enter',
                    validations: ['is-email'],
                  },
                ]}
              >
                {({ type, value, onChange, onBlur, onEnter, valid, error }) => (
                  <InputText
                    type={type}
                    placeholder="Email"
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    onEnter={() => onEnter(finish)}
                    valid={valid}
                    error={error}
                  />
                )}
              </Field>
              <Button disabled={!validStep} onClick={validStep ? finish : undefined}>
                Complete!
              </Button>
            </Container>
          )}
        </Step>
        <End>
          {({ full_name }) => (
            <Container>
              <Feedback
                title={`Hello, ${full_name.name}! 👋`}
                subtitle="It's good to know that you're interested in subscribing to our newsletter!"
              />
            </Container>
          )}
        </End>
      </Onboarding>
    );
  }
}

export default App;
