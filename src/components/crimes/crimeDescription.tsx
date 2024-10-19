// components/crimes/crimeDescription.tsx
import { GetServerSideProps } from "next";
import Crimes from "./crimes";

interface Crime {
  id: number;
  title: string;
  description: string;
  type: string;
  date: string;
}

interface CrimeDescriptionProps {
  crime: Crime;
}

const CrimeDescription: React.FC<CrimeDescriptionProps> = ({ crime }) => {
  if (!crime) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{crime.title}</h1>
      <p>{crime.description}</p>
      <p>Crime Type: {crime.type}</p>
      <p>Reported on: {crime.date}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params as { id: string };
  console.log(Crimes); // Log the ID being fetched

  try {
    const res = await fetch(`https://your-api.com/crimes/${id}`);
    const crime = await res.json();

    if (!crime) {
      return { notFound: true };
    }

    return {
      props: { crime },
    };
  } catch (error) {
    console.error("Error fetching crime data:", error); // Log any fetching errors
    return { notFound: true };
  }
};

export default CrimeDescription;
