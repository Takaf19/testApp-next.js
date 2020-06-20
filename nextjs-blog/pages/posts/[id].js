import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

// 取得した記事の内容を表示
export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

// Id取得処理呼び出し
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

// IDに基づき、記事の内容を取得する処理を呼び出し
export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}