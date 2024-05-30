import dados from '../../dados.json';

export default function handler(req, rest) {
  const { page } = req.query;
  const itemsPerPage = 10;

  const start = itemsPerPage * (page - 1);
  const end = itemsPerPage * page;
  const data = dados.posts.slice(start, end);
  rest.status(200).json(data);
}