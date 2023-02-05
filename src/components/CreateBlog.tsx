import { useForm } from '@mantine/form';
import { TextInput } from '@mantine/core';
import { useEffect, useRef, useState } from 'react';

type Props = {};

export default function CreateBlog({}: Props) {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <div style={{ maxWidth: 320, margin: 'auto' }}>
      <TextInput
        label="Name"
        placeholder="Name"
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="md"
        label="Email"
        placeholder="Email"
        {...form.getInputProps('email')}
      />
    </div>
  );
}
