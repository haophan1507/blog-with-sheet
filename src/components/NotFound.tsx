import { createStyles, Title, Text, Button, SimpleGrid } from '@mantine/core';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Image } from '../assets/not-found.svg';

const useStyles = createStyles((theme) => ({
  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  control: {
    [theme.fn.smallerThan('sm')]: {
      width: '100%',
    },
  },

  mobileImage: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  desktopImage: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

type Props = {};

export default function NotFound({}: Props) {
  const { classes } = useStyles();

  return (
    <SimpleGrid
      spacing={80}
      cols={2}
      breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}
    >
      <Image className={classes.mobileImage} />
      <div>
        <Title className={classes.title}>Something is not right...</Title>
        <Text color="dimmed" size="lg">
          Page you are trying to open does not exist. You may have mistyped the
          address, or the page has been moved to another URL. If you think this
          is an error contact support.
        </Text>
        <Button
          to="/home"
          component={NavLink}
          variant="outline"
          size="md"
          mt="xl"
          className={classes.control}
        >
          Get back to home page
        </Button>
      </div>
      <Image className={classes.desktopImage} />
    </SimpleGrid>
  );
}
