import { Characters } from '../model/Characters';
import { useState, useEffect } from 'react';

export function GetAllCharacters() {
    const [characters, setCharacters] = useState<Characters[]>([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            const baseUrl = 'https://dattebayo-api.onrender.com';

            try {
                const response = await fetch(`${baseUrl}/characters`);
                const data = await response.json();
                console.log(data);

                if (Array.isArray(data.characters)) {
                    const arrayList = data.characters.map((char: any) => {
                        return new Characters({
                            id: char.id,
                            name: char.name,
                            images: char.images,
                            debut: char.debut,
                            family: char.family,
                            jutsu: char.jutsu || [],
                            natureType: char.natureType || [],
                            personal: char.personal 
                        });
                    });

                    setCharacters(arrayList);
                }
            } catch (error) {
                console.log(error + ' Error fetching characters');
            }
        };

        fetchCharacters();
    }, []);

    return (
        <div className="flex flex-wrap justify-center">
            {characters.map((character: Characters) => (
                <div className="max-w-sm rounded overflow-hidden shadow-lg m-4" key={character.getId()}>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">
                            {JSON.stringify(character.getFamily())}
                            <br />
                            {JSON.stringify(character.getDebut())}
                            <br />
                            {JSON.stringify(character.getFamily())}
                            <br />
                            {JSON.stringify(character.getJutsu()?.join(', ') || '')}
                            <br />
                            {JSON.stringify(character.getNatureType()?.join(', ') || '')}
                        </div>

                        <img
                            className="w-full"
                            src={character.getImages()?.[0] ?? 'default_image_url.jpg'}
                            alt={character.getName()}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
