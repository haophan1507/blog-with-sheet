import {
  AspectRatio,
  Card,
  Container,
  createStyles,
  Image,
  Loader,
  SimpleGrid,
  Text,
} from '@mantine/core';
import axios from 'axios';
import dayjs from 'dayjs';
import { useQuery } from 'react-query';
import { FormType } from './CreateBlog';

const mockImage = [
  'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',

  'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',

  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',

  'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

function usePosts() {
  return useQuery('blogs', async (): Promise<Array<FormType>> => {
    const { data } = await axios.get(process.env.URL_SHEET || '');
    return data;
  });
}
export default function ListBlog() {
  const { isLoading, isError, data, error } = usePosts();
  const { classes } = useStyles();

  if (isLoading) {
    return (
      <Container
        py="xl"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Loader size="xl" />
      </Container>
    );
  }

  if (isError) {
    return <span>Error</span>;
  }

  const cards = data?.map((blog: FormType) => (
    <Card
      key={blog.Id}
      p="md"
      radius="md"
      component="a"
      href="#"
      className={classes.card}
    >
      <AspectRatio ratio={1920 / 1080}>
        <Image src={mockImage[Math.floor(Math.random() * 4)]} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {dayjs(blog.Time).format('DD/MM/YYYY')}
      </Text>
      <Text className={classes.title} mt={5}>
        {blog.Title}
      </Text>
    </Card>
  ));

  return (
    <Container>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}
