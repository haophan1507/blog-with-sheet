import {
  Header as HeaderComponent,
  Container,
  Title,
  useMantineColorScheme,
  UnstyledButton,
  createStyles,
  Text,
  Center,
  Group,
  Anchor,
} from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import { NavLink } from 'react-router-dom';
import { IconSun, IconMoon } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  control: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 1000,
    paddingLeft: theme.spacing.sm,
    paddingRight: 4,
    width: 136,
    height: 36,
  },

  iconWrapper: {
    height: 28,
    width: 28,
    borderRadius: 28,
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.yellow[4]
        : theme.colors.dark[4],
    color: theme.colorScheme === 'dark' ? theme.black : theme.colors.blue[2],
  },

  value: {
    lineHeight: 1,
  },
}));

export default function Header() {
  const { classes } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const Icon = colorScheme === 'dark' ? IconSun : IconMoon;

  return (
    <HeaderComponent height={64} mb={40}>
      <Container
        size="lg"
        sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <UnstyledButton component={NavLink} to="/">
          <Title order={1}>Blog With Sheet</Title>
        </UnstyledButton>

        <Group spacing={5} className={classes.links}>
          <Anchor
            component={NavLink}
            to="/create-blog"
            className={classes.link}
          >
            Create Blog
          </Anchor>
          <Anchor component={NavLink} to="/list-blog" className={classes.link}>
            List Blog
          </Anchor>
        </Group>

        <UnstyledButton
          aria-label="Toggle theme"
          className={classes.control}
          onClick={() => toggleColorScheme()}
          title="Ctrl + J"
        >
          <Text size="sm" className={classes.value}>
            {upperFirst(colorScheme === 'light' ? 'dark' : 'light')} theme
          </Text>

          <Center className={classes.iconWrapper}>
            <Icon size={18} />
          </Center>
        </UnstyledButton>
      </Container>
    </HeaderComponent>
  );
}
