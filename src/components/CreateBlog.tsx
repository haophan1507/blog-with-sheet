import { useForm } from '@mantine/form';
import { Box, Button, Group, Text, TextInput } from '@mantine/core';
import { RichTextEditor } from '@mantine/rte';
import axios from 'axios';
import { useMutation } from 'react-query';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

export type FormType = {
  Id?: string;
  Title: string;
  By: string;
  Content: string;
  Time?: Date;
};

export default function CreateBlog() {
  const form = useForm({
    initialValues: {
      Title: '',
      By: '',
      Content: '',
    },
    validate: {
      Title: (value) => (value.length < 6 ? 'Invalid Title' : null),
      By: (value) => (value.length < 2 ? 'Invalid By' : null),
      Content: (value) => (value.length < 50 ? 'Invalid Content' : null),
    },
  });

  const mutation = useMutation((values: FormType) => {
    return axios.post(process.env.URL_SHEET || '', values);
  });

  const submitForm = async (values: FormType) => {
    mutation.mutate({
      ...values,
      Id: uuidv4(),
      Time: dayjs().toDate(),
    });
    form.reset();
  };

  return (
    <Box>
      <form onSubmit={form.onSubmit((values) => submitForm(values))}>
        <TextInput
          label="Title"
          placeholder="Title"
          {...form.getInputProps('Title')}
        />
        <TextInput
          mt="md"
          label="By"
          placeholder="By"
          {...form.getInputProps('By')}
        />
        <Text fz="sm" mt="md">
          Content
        </Text>
        <RichTextEditor
          id="rte"
          {...form.getInputProps('Content')}
          value={form.values.Content}
          onChange={(value) => form.setFieldValue('Content', value)}
        />
        {/* {!form.isValid('Content') && (
          <Text fz="xs" c="red">
            Invalid Content
          </Text>
        )} */}

        <Group position="center" mt="md">
          <Button type="submit" loading={mutation.isLoading}>
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
}
