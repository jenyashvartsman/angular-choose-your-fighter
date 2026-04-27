import { UniverseDto } from '../dtos/fighter.dto';

export const duneConfig: UniverseDto = {
  id: 'dune',
  title: 'Dune',
  fighterTypes: [
    {
      id: 'fremen',
      title: 'Fremen',
      subtitle: 'Desert Warriors',
      imageUrl: 'https://i.pinimg.com/736x/90/9a/2d/909a2d0917439dab1ef50fbef5355818.jpg',
      fighters: [
        {
          id: 'paul-muaddib',
          name: "Paul Muad'Dib",
          title: 'Lisan al-Gaib',
          description:
            'Prescient warrior-prophet. Wields a Crysknife with lethal precision. His name is a killing word.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/en/thumb/f/ff/Timoth%C3%A9e_Chalamet_as_Paul_Atreides_%28Dune_2021%29.jpg/250px-Timoth%C3%A9e_Chalamet_as_Paul_Atreides_%28Dune_2021%29.jpg',
          stats: { strength: 8, agility: 9, power: 10 },
        },
        {
          id: 'chani',
          name: 'Chani',
          title: 'Fremen Naib',
          description:
            'Born under twin moons. Her blade never hesitates; the desert is her armour.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/en/1/16/Zendaya_as_Chani_%28Dune_2021%29.jpg',
          stats: { strength: 7, agility: 10, power: 7 },
        },
      ],
    },
    {
      id: 'bene-gesserit',
      title: 'Bene Gesserit',
      subtitle: 'Sisterhood',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Mohiam%2BBeneGesserit-1984.jpg/250px-Mohiam%2BBeneGesserit-1984.jpg',
      fighters: [
        {
          id: 'lady-jessica',
          name: 'Lady Jessica',
          title: 'Reverend Mother',
          description:
            'Wields the Voice. Masters Prana-bindu body control. Trained her son to be a god.',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Lady_Jessica_-_Rebecca_Ferguson_%282021%29.png/250px-Lady_Jessica_-_Rebecca_Ferguson_%282021%29.png',
          stats: { strength: 6, agility: 9, power: 9 },
        },
      ],
    },
    {
      id: 'sardaukar',
      title: 'Sardaukar',
      subtitle: 'Imperial Guard',
      imageUrl: 'https://glamours.eorzeacollection.com/293126/cover-0-1745601662.png',
      fighters: [
        {
          id: 'nefuds-elite',
          name: "Nefud's Elite",
          title: 'Imperial Guard',
          description:
            'Trained on Salusa Secundus. One Sardaukar equals ten regular soldiers in open combat.',
          imageUrl:
            'https://www.looper.com/img/gallery/characters-that-were-cut-from-the-dune-franchise/iakin-nefud-1709753049.jpg',
          stats: { strength: 9, agility: 7, power: 7 },
        },
      ],
    },
    {
      id: 'mentats',
      title: 'Mentats',
      subtitle: 'Human Computers',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ7hl60wIIkoFZZHRBOYJ04aPfY8x5bB3HTA&s',
      fighters: [
        {
          id: 'thufir-hawat',
          name: 'Thufir Hawat',
          title: 'Master of Assassins',
          description:
            'Tactical precision elevated to art. Calculates outcomes faster than machine logic.',
          imageUrl:
            'https://preview.redd.it/thurfir-hawat-throughout-the-years-v0-j5brej7ww4i71.jpg?width=512&format=pjpg&auto=webp&s=4711b9c93df9a29cc8b86202c2bde5bd4b9902f8',
          stats: { strength: 5, agility: 6, power: 8 },
        },
      ],
    },
  ],
};
