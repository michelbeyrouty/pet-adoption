const fetchSearch = async ({ queryKey }) => {
    const { animal, location, breed } = queryKey[1];

    const response = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`);

    if (!response.ok) {
        throw new Error(`Failed to fetch pet using animal=${animal}; location=${location}; breed=${breed}`)
    }

    return await response.json();
}

export default fetchSearch;
