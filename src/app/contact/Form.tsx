'use client';

import { Button, Input, Textarea } from '@nextui-org/react';
import { useFormState } from 'react-dom';

import { sendContact } from '@/lib/actions';

export const Form = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(sendContact, initialState);

  return (
    <form action={dispatch} className='grid gap-y-6'>
      <Input
        isRequired
        id='name'
        name='name'
        type='text'
        label='名前'
        aria-describedby='name-error'
      />
      {state.errors?.name ? (
        <div
          id='name-error'
          aria-live='polite'
          className='mt-2 text-sm text-red-500'>
          {state.errors.name.map((error: string) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      ) : null}
      <Input
        isRequired
        id='email'
        name='email'
        type='email'
        label='メールアドレス'
        aria-describedby='email-error'
      />
      {state.errors?.email ? (
        <div
          id='email-error'
          aria-live='polite'
          className='mt-2 text-sm text-red-500'>
          {state.errors.email.map((error: string) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      ) : null}
      <Input
        id='subject'
        name='subject'
        type='text'
        label='件名'
        aria-describedby='subject-error'
      />
      {state.errors?.subject ? (
        <div
          id='subject-error'
          aria-live='polite'
          className='mt-2 text-sm text-red-500'>
          {state.errors.subject.map((error: string) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      ) : null}
      <Textarea
        isRequired
        id='message'
        name='message'
        label='内容'
        aria-describedby='message-error'
      />
      {state.errors?.message ? (
        <div
          id='message-error'
          aria-live='polite'
          className='mt-2 text-sm text-red-500'>
          {state.errors.message.map((error: string) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      ) : null}
      <Button
        type='submit'
        color='primary'
        variant='flat'
        className='max-w-[180px]'>
        送信
      </Button>
    </form>
  );
};
