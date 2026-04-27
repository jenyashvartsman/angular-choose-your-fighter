import { UniverseDto } from '../dtos/fighter.dto';

export const starWarsConfig: UniverseDto = {
  id: 'star-wars',
  title: 'Star Wars',
  fighterTypes: [
    {
      id: 'jedi',
      title: 'Jedi',
      subtitle: 'Guardians of Peace',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/8/81/JediKnights.jpg',
      fighters: [
        {
          id: 'obi-wan-kenobi',
          name: 'Obi-Wan Kenobi',
          title: 'Jedi Master',
          description:
            'Serene master of Soresu. Patient, methodical, and always with the high ground. Defence impenetrable.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Ben_Kenobi.png/250px-Ben_Kenobi.png',
          stats: { strength: 7, agility: 8, power: 9 },
        },
        {
          id: 'mace-windu',
          name: 'Mace Windu',
          title: 'Council Member',
          description:
            'The only master of Vaapad. His purple blade channels the dark side into raw combat mastery.',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bf/Mace_Windu.png',
          stats: { strength: 8, agility: 9, power: 9 },
        },
        {
          id: 'yoda',
          name: 'Yoda',
          title: 'Grand Master',
          description:
            'Nine centuries of wisdom. Size matters not. His speed and Force mastery defy all expectation.',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Yoda_Empire_Strikes_Back.png',
          stats: { strength: 4, agility: 10, power: 10 },
        },
      ],
    },
    {
      id: 'sith',
      title: 'Sith',
      subtitle: 'Dark Side',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Darth_Vader_-_2007_Disney_Weekends.jpg/250px-Darth_Vader_-_2007_Disney_Weekends.jpg',
      fighters: [
        {
          id: 'darth-vader',
          name: 'Darth Vader',
          title: 'Dark Lord of the Sith',
          description:
            'Immovable. Relentless. His Force choke is as feared as his crimson blade. Inevitable.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Darth_Vader_-_2007_Disney_Weekends.jpg/250px-Darth_Vader_-_2007_Disney_Weekends.jpg',
          stats: { strength: 10, agility: 6, power: 10 },
        },
        {
          id: 'darth-maul',
          name: 'Darth Maul',
          title: 'Sith Apprentice',
          description:
            'Dual-bladed acrobatic fury. Survived being cut in half by sheer hatred. Trained as a weapon since birth.',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bb/MaulStarWars.jpg',
          stats: { strength: 7, agility: 10, power: 8 },
        },
      ],
    },
    {
      id: 'mandalorian',
      title: 'Mandalorian',
      subtitle: 'Warriors of Mandalore',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/TheMandalorian.jpg/250px-TheMandalorian.jpg',
      fighters: [
        {
          id: 'din-djarin',
          name: 'Din Djarin',
          title: 'The Mandalorian',
          description: 'Beskar steel. Whistling birds. Jetpack. This is the way.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/TheMandalorian.jpg/250px-TheMandalorian.jpg',
          stats: { strength: 7, agility: 8, power: 6 },
        },
        {
          id: 'boba-fett',
          name: 'Boba Fett',
          title: 'Bounty Hunter',
          description:
            'The most feared name in the galaxy. No disintegrations — usually. Cloned from the best.',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3e/FettbobaJB.png',
          stats: { strength: 6, agility: 7, power: 7 },
        },
      ],
    },
    {
      id: 'clone-trooper',
      title: 'Clone Trooper',
      subtitle: 'Grand Army',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4uWDqS_VL4dsP6zy2_jU4XEuQwDzEWeoMWw&s',
      fighters: [
        {
          id: 'commander-rex',
          name: 'Commander Rex',
          title: '501st Legion',
          description:
            'Loyalty and discipline made flesh. Cut out his own inhibitor chip. Never leaves a soldier behind.',
          imageUrl:
            'https://i.etsystatic.com/17372453/r/il/a237f9/1791611739/il_570xN.1791611739_5uom.jpg',
          stats: { strength: 7, agility: 7, power: 6 },
        },
      ],
    },
  ],
};
