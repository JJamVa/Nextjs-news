import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

//default.js 병렬 라우팅을 다룰 때, 사용
export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();
  
  return (
    <>
      <h2>LatestNews 페이지</h2>
      <NewsList news={latestNews} />
    </>
  );
}
