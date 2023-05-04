import Pet from "./Pet";

const Pets = ({ pets = [] }) => {
  return (
    <div>
      {pets.map((pet) => (
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />
      ))}
    </div>
  );
};

export default Pets;
