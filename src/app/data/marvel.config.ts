import { UniverseDto } from '../dtos/fighter.dto';

export const marvelConfig: UniverseDto = {
  id: 'marvel',
  title: 'Marvel',
  fighterTypes: [
    {
      id: 'avenger',
      title: 'Avenger',
      subtitle: "Earth's Mightiest",
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Captain_America.png',
      fighters: [
        {
          id: 'thor-odinson',
          name: 'Thor Odinson',
          title: 'God of Thunder',
          description:
            'Mjolnir. Lightning. Immortality. A genuine Asgardian god who has fought for 1,500 years. Worthy.',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Thor_%28Marvel_Comics%29.png',
          stats: { strength: 10, agility: 7, power: 10 },
        },
        {
          id: 'steve-rogers',
          name: 'Steve Rogers',
          title: 'Captain America',
          description: 'Peak human. Vibranium shield. Unbreakable will. Can wield Mjolnir.',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Captain_America.png',
          stats: { strength: 8, agility: 8, power: 7 },
        },
        {
          id: 'natasha-romanoff',
          name: 'Natasha Romanoff',
          title: 'Black Widow',
          description: 'No superpowers — just decades of training and the will to always show up.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/en/3/37/Natasha_Romanova_incarnations.jpg',
          stats: { strength: 6, agility: 10, power: 6 },
        },
      ],
    },
    {
      id: 'villain',
      title: 'Villain',
      subtitle: 'Forces of Chaos',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/Thanos_%28Infobox_image%29.png',
      fighters: [
        {
          id: 'thanos',
          name: 'Thanos',
          title: 'The Mad Titan',
          description:
            'Even without stones, a match for nearly any hero. His plan was perfect. Inevitable.',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b7/Thanos_%28Infobox_image%29.png',
          stats: { strength: 10, agility: 5, power: 10 },
        },
      ],
    },
    {
      id: 'guardian',
      title: 'Guardian',
      subtitle: 'Guardians of Galaxy',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Gamora-cover.jpg/250px-Gamora-cover.jpg',
      fighters: [
        {
          id: 'gamora',
          name: 'Gamora',
          title: 'Deadliest Woman Alive',
          description:
            'Surgically enhanced assassin raised by Thanos himself. Knows every weakness in the galaxy.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/en/thumb/0/08/Gamora-cover.jpg/250px-Gamora-cover.jpg',
          stats: { strength: 7, agility: 9, power: 7 },
        },
      ],
    },
    {
      id: 'x-men',
      title: 'X-Men',
      subtitle: 'Mutant Brotherhood',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Wolverine_%28circa_2024%29.jpg/250px-Wolverine_%28circa_2024%29.jpg',
      fighters: [
        {
          id: 'wolverine',
          name: 'Wolverine',
          title: 'Weapon X',
          description:
            'Adamantium skeleton and claws. Regeneration that has kept him alive for 200 years. Berserker rage.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Wolverine_%28circa_2024%29.jpg/250px-Wolverine_%28circa_2024%29.jpg',
          stats: { strength: 8, agility: 8, power: 9 },
        },
        {
          id: 'storm',
          name: 'Storm',
          title: 'Weather Witch',
          description:
            'Controls weather on a global scale. Omega-level mutant. Can suffocate you in a vacuum.',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/34/Storm_%28Ororo_Munroe%29.png',
          stats: { strength: 5, agility: 8, power: 10 },
        },
      ],
    },
  ],
};
