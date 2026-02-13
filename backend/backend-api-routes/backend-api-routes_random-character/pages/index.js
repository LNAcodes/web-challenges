import useSWR from "swr";
import Link from "next/link";

async function fetcher(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error loading data from the API.");
  }
  return response.json();
}
export default function HomePage() {
  const { data, isLoading } = useSWR("/api/random-character", fetcher);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <>
      <p>
        Name: {data.firstName} {data.lastName}
      </p>
      <p>Age: {data.age}</p>
      <p>Birthday {data.birthday}</p>
      <p>Gender {data.gender}</p>
      <p>SSN: {data.ssn}</p>
      <p>Twitter: {data.twitter}</p>
      <p>Geohash: {data.geohash}</p>
    </>
  );
}
