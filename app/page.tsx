import Pagination from "./components/Pagination";

export default function Home({ searchParams }: { searchParams: { page: string } }) {
  const currentPage = isNaN(parseInt(searchParams.page)) ? 1 :　parseInt(searchParams.page)
  return <Pagination itemCount={100} pageSize={10} currentPage={currentPage} />;
}
