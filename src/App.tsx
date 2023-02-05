import { Container, Box } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import Header from './components/Header';
import Home from './components/Home';
import ListBlog from './components/ListBlog';
import NotFound from './components/NotFound';

export default function App() {
  return (
    <Box>
      <Header />
      <Container size="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/list-blog" element={<ListBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Box>
  );
}
