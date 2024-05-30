import NextLink from 'next/link';
import { Box, Text } from '@skynexui/components';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  // const dadosDaAPI = await fetch('https://fakeapi-omariosouto.vercel.app/api/posts')
  //   .then((res) => res.json());

  // const paths = dadosDaAPI.posts.map((postAtual) => {
  //   return { params: { id: `${postAtual.id}` } };
  // })

  return {
    // paths: paths,
    paths: [],
    fallback: 'blocking' // false or 'blocking'
  };
}


export async function getStaticProps({ params }) {
  console.log(params.id);
  const res = await fetch(`http://localhost:3000/api/posts/${params.id}`);
  const post = await res.json();

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id: post.id,
      title: post.title,
      date: post.date,
      content: post.content,
    },
    revalidate: 10,
  };
}

export default function PostByIdScreen(props) {
  const router = useRouter();

  if (router.isFallback) {
    return 'Essa página não existe, ainda!!';
  }

  const { title, date, content } = props;

  return (
    <Box
      styleSheet={{
        flexDirection: 'column',
        margin: '32px auto',
        maxWidth: '700px',
        paddingHorizontal: '16px',
      }}
    >
      {/* Cabeçalho */}
      <Text
        variant="heading2"
        tag="h1"
        styleSheet={{ color: '#F9703E', justifyContent: 'center', lineHeight: '1.2' }}
      >
        {title}
      </Text>
      <Text styleSheet={{ color: '#F9703E', justifyContent: 'center', borderBottom: '1px solid #F9703E', paddingVertical: '16px', marginVertical: '16px' }}>
        {date}
      </Text>

      {/* Área de Conteúdo */}
      <Box
        styleSheet={{
          flexDirection: 'column',
        }}
      >
        <Text>
          {content}
        </Text>
      </Box>

      {/* Rodapé */}
      <Box
        styleSheet={{
          marginTop: '16px',
          paddingVertical: '16px',
          borderTop: '1px solid #F9703E',
          color: '#F9703E',
        }}
      >
        <NextLink href="/" passHref>
          <Text tag="a" styleSheet={{ hover: { textDecoration: 'underline' }, cursor: 'pointer' }}>
            Voltar para a home
          </Text>
        </NextLink>
      </Box>
    </Box>
  );
}
