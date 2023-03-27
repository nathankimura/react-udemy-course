import './styles.css';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';

export function Posts() {
  const { id } = useParams();
  const [qs] = useSearchParams();
  console.log(qs);
  return (
    <div>
      <h1>Posts</h1>
      {id && <h3>post param: {id}</h3>}
      {qs.get('batata') && <h3>Query string: {qs.get('batata')}</h3>}
      <Outlet />
    </div>
  );
}
