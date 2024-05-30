import dados from '../../../dados.json';

export default function handler(req, res) {
  const { id } = req.query;
  const post = dados.posts.find(post => post.id === parseInt(id));

  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
}
