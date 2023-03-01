import useSWR from "swr";

export default function count() {
  const { data: count } = useSWR("./api/count", async (url: string) => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data.Count;
  });

  return (
    <div>
      {count ? <p>The current visitor count is: {count}</p> : <p>Loading...</p>}
    </div>
  );
}
