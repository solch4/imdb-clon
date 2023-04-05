import Card from "./Card";

const Results = ({ results }) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-5xl mx-auto py-4">
      {results &&
        results.map((result) => (
          <Card key={result.id} result={result} />
        ))}
    </div>
  );
};

export default Results;
