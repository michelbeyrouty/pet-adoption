import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length ? (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            key={pet.id}
          />
        ))
      ) : (
        <h1>No Pets Found</h1>
      )}
    </div>
  );
};

export default Results;
