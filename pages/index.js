import NextLink from 'next/link';
import { Box, Text, Image } from '@skynexui/components';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export async function getServerSideProps() {
  const firstPage = 1;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts?page=${firstPage}`);
  const posts = await res.json();

  return {
    props: {
      posts: posts,
    },
  };
}

export default function HomeScreen({ posts }) {
  const [items, setItems] = useState(posts);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);

  const infos = {
    nome: 'Alex',
    githubUser: 'alexdgoncalves',
  }

  const fetchPosts = async (pageNumber) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts?page=${pageNumber}`);
    const newPosts = await res.json();

    setItems((prevItems) => [...prevItems, ...newPosts]);

    if (newPosts.length < 10) {
      setHasMore(false);
    }
    setPage(pageNumber + 1);
  }

  return (
    <Box
      styleSheet={{
        flexDirection: 'column',
        margin: '32px auto',
        maxWidth: '800px',
        paddingHorizontal: '16px',
      }}
    >
      <InfiniteScroll
        dataLength={items.length}
        next={() => fetchPosts(page)}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>End of list</p>}
      >
        <Image
          src={`https://github.com/${infos.githubUser}.png`}
          styleSheet={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            margin: '0 auto',
            border: '2px solid #F9703E',
          }}
        />
        <Text
          variant="heading1"
          tag="h1"
          styleSheet={{ color: '#F9703E', justifyContent: 'center' }}
        >
          {infos.nome}
        </Text>

        <Box styleSheet={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          marginTop: '16px',
          gridGap: '16px',
        }}>
          {items.map(({ title, content, id }) => (
            <Post key={id} title={title} content={content} id={id} />
          ))}
        </Box>
      </InfiniteScroll>
    </Box>
  )
}

function Post({ title, content, id }) {
  return (
    <Box
      styleSheet={{
        flexDirection: 'column',
        border: '1px solid #F9703E',
        padding: '16px',
        boxShadow: '1px 1px 5px 0 rgba(255,69,0,0.2)',
        transition: '.3s',
        borderRadius: '4px',
        hover: {
          boxShadow: '1px 1px 5px 5px rgba(255,69,0,0.2)',
        }
      }}
    >
      <NextLink href={`/posts/${id}`} passHref>
        <Text
          tag="a"
          variant="heading4"
          styleSheet={{ display: 'block', color: '#F9703E', marginBottom: '8px', hover: { textDecoration: 'underline' }, cursor: 'pointer' }}
        >
          {title}
        </Text>
      </NextLink>
      <Text>
        {content.substring(0, 140)}...
      </Text>
    </Box>
  );
}
