import Link from 'next/link'

const Index = () => (
  <div>
    <p>top</p>
    <Link href="/posts/first-post"><a>this page!</a></Link>
  </div>
);

export default Index;