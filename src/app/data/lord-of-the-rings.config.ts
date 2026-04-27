import { UniverseDto } from '../dtos/fighter.dto';

export const lordOfTheRingsConfig: UniverseDto = {
  id: 'lord-of-the-rings',
  title: 'Lord of the Rings',
  fighterTypes: [
    {
      id: 'wizard',
      title: 'Wizard',
      subtitle: 'Order of Istari',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84mjDc7IXy7u8TWoixutEC6mTL3jfPVgF2A&s',
      fighters: [
        {
          id: 'gandalf-the-white',
          name: 'Gandalf the White',
          title: 'Maia of Manwë',
          description:
            'A Maia spirit in mortal form. Returns from death stronger. Carries Narya, ring of fire.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Gandalf600ppx.jpg/250px-Gandalf600ppx.jpg',
          stats: { strength: 6, agility: 5, power: 10 },
        },
        {
          id: 'saruman',
          name: 'Saruman',
          title: 'Head of the Order',
          description:
            'Voice alone can bend minds. His mastery of Orthanc and Uruk-hai makes him a force of cunning ruin.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Christopher_Lee_as_Saruman_LOTR.jpg/250px-Christopher_Lee_as_Saruman_LOTR.jpg',
          stats: { strength: 5, agility: 4, power: 10 },
        },
      ],
    },
    {
      id: 'ranger',
      title: 'Ranger',
      subtitle: 'Dúnedain',
      imageUrl:
        'https://64.media.tumblr.com/55b53b8a3da8bd23cd3c8a038b6b6676/84a89e31b71a2c42-82/s500x750/dcbfafe8e024aac50b344a2d288e2164be2526c2.jpg',
      fighters: [
        {
          id: 'aragorn',
          name: 'Aragorn',
          title: 'Heir of Isildur',
          description:
            'Heir of Isildur, ranger, king. Fights with the strength of Númenor. The dead march at his command.',
          imageUrl: 'https://miro.medium.com/1*XyeW3MRm0r-qoccMHmxHWg.jpeg',
          stats: { strength: 9, agility: 8, power: 8 },
        },
      ],
    },
    {
      id: 'elf-warrior',
      title: 'Elf Warrior',
      subtitle: 'Firstborn',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Legolas600ppx.jpg/250px-Legolas600ppx.jpg',
      fighters: [
        {
          id: 'legolas',
          name: 'Legolas',
          title: 'Prince of Mirkwood',
          description:
            'A thousand arrows, never a miss. Runs on snow. Counts horses while you blink.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Legolas600ppx.jpg/250px-Legolas600ppx.jpg',
          stats: { strength: 6, agility: 10, power: 7 },
        },
        {
          id: 'glorfindel',
          name: 'Glorfindel',
          title: "Elrond's House",
          description:
            'Slew a Balrog alone and was reborn to fight again. Among the mightiest elves ever to draw breath.',
          imageUrl:
            'https://i.namu.wiki/i/gls2D3kBAHBzEhcjv-v-ESMOtqyoJBiSCn1oCy6hDSDLExmpQ6ozInkSjWbHowJK2H4xJmubcMTp0BnJVPu5sw.webp',
          stats: { strength: 9, agility: 9, power: 9 },
        },
      ],
    },
    {
      id: 'ring-wraith',
      title: 'Ring Wraith',
      subtitle: 'Nazgûl',
      imageUrl:
        'https://darksidetoy.com/images/virtuemart/product/15954569628462a2c3e96954bb1ce7da54cf1c6c2c%20(2).jpg',
      fighters: [
        {
          id: 'witch-king-of-angmar',
          name: 'Witch-king of Angmar',
          title: 'Lord of the Nazgûl',
          description:
            'No living man can kill him — and none did. His presence alone dissolves courage.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSm4IP-k45P7BNNXcq8MaFeAiwOVGlgg9CTg&s',
          stats: { strength: 9, agility: 5, power: 9 },
        },
      ],
    },
  ],
};
