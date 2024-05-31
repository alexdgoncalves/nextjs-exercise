import dados from '../../dados.json';

export default function handler(req, res) {
  // Configurar cabeçalhos CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { page = 1 } = req.query;
  const itemsPerPage = 10;

  const start = itemsPerPage * (page - 1);
  const end = itemsPerPage * page;
  const data = dados.posts.slice(start, end);
  res.status(200).json(data);
}
