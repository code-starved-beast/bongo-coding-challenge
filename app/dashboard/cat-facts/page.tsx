interface CatFact {
  fact: string;
  length: number;
}

async function getFactsAboutCats(): Promise<CatFact[]> {
  const res = await fetch("https://catfact.ninja/facts")
  if (!res.ok) {
    throw new Error('Failed to fetch cat facts')
  }

  const { data } = await res.json();
  return data;
}

export default async function CatFactsList() {
  const catFacts = await getFactsAboutCats();

  return (
    <>
      <h2>Cat Facts</h2>
      <ol>
        {
          catFacts.map(({ fact }) => <li key={fact}>{fact}</li>)
        }
      </ol>
    </>
  );
};