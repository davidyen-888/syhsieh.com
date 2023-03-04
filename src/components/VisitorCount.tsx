import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function count() {
  const { data: count } = useSWR("./api/count", fetcher);
  const { data: count2 } = useSWR("../api/count", fetcher);

  return (
    <p>
      {count ? (
        <span>
          You are the
          <strong> {count.Count}</strong>th visitor!
        </span>
      ) : count2 ? (
        <span>
          You are the
          <strong> {count2.Count}</strong>th visitor!
        </span>
      ) : (
        <span>Loading...</span>
      )}
    </p>
  );
}
