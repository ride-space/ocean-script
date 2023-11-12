'use server';

import { redirect } from 'next/navigation';
import { z } from 'zod';

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
  message?: string | null;
};

const contactSchema = z.object({
  name: z
    .string()
    .min(1, '入力してください')
    .max(20, '20文字以下で入力してください'),
  email: z
    .string()
    .min(1, '入力してください')
    .max(126, '126文字以下で入力してください')
    .email('メールアドレスの形式で入力してください'),
  subject: z.string().max(150, '150文字以下で入力してください'),
  message: z
    .string()
    .min(1, '入力してください')
    .max(1500, '1500文字以下で入力してください'),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const sendContact = async (prevState: State, formData: FormData) => {
  const data = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  });
  if (!data.success) {
    return {
      errors: data.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Send Message.',
    };
  }
  try {
    await fetch(process.env.NEWT_FORM_ENDPOINT as string, {
      method: 'POST',
      body: JSON.stringify(data.data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    redirect('/');
  } catch (error) {
    console.log(error);

    return {
      message: 'お問い合わせの送信に失敗しました。',
    };
  }
};
