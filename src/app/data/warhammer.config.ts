import { UniverseDto } from '../dtos/fighter.dto';

export const warhammerConfig: UniverseDto = {
  id: 'warhammer-40k',
  title: 'Warhammer 40k',
  fighterTypes: [
    {
      id: 'space-marine',
      title: 'Space Marine',
      subtitle: 'Adeptus Astartes',
      imageUrl:
        'https://imgix.bustle.com/uploads/image/2024/9/4/a396740f/sapce-marine-2-3.jpg?w=400&h=300&fit=crop&crop=faces&dpr=2',
      fighters: [
        {
          id: 'ultramarines-captain',
          name: 'Ultramarines Captain',
          title: '1st Company',
          description:
            'Battle-hardened veteran of a hundred campaigns. Leads with tactical genius and unyielding courage.',
          imageUrl: 'https://i.pinimg.com/564x/7e/24/f0/7e24f0573ac2d23502289ea112f59111.jpg',
          stats: { strength: 9, agility: 6, power: 8 },
        },
        {
          id: 'blood-angels-dread',
          name: 'Blood Angels Dread',
          title: 'Death Company',
          description:
            'Consumed by the Black Rage, a walking engine of destruction entombed in ceramite and primal fury.',
          imageUrl:
            'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhozZpkH3-KoRvOukKPkVsfUvVGnQoXKh6n7CjDTlxmuIDlpgrGfebEbT7-MR8v5RV-BLTWy2Tc6QAkwOq1TuyS0gs72CGKfp97hnTFafTdNWeC2fVazbvQZIPvidY7THhJ_B9xe5IlG_A/w1200-h630-p-k-no-nu/Dreadnought_by_Blood_Angels.jpg',
          stats: { strength: 10, agility: 4, power: 9 },
        },
        {
          id: 'grey-knight',
          name: 'Grey Knight',
          title: 'Brotherhood',
          description:
            'Psychic warrior clad in Aegis armour. Trained since birth to wage war in the mind as much as the field.',
          imageUrl:
            'https://i.redd.it/lore-question-why-are-the-grey-knights-the-ones-that-must-v0-4lu20u7og5ag1.jpg?width=555&format=pjpg&auto=webp&s=e000c9cbe0327728418ca36b6744b5d2ca3c29b5',
          stats: { strength: 8, agility: 7, power: 10 },
        },
      ],
    },
    {
      id: 'chaos-warrior',
      title: 'Chaos Warrior',
      subtitle: 'Traitor Legion',
      imageUrl:
        'https://31.media.tumblr.com/0316998e1149d899462a950aedfa2331/tumblr_mwqsxoo3mk1so4uslo1_1280.jpg',
      fighters: [
        {
          id: 'abaddon-the-despoiler',
          name: 'Abaddon the Despoiler',
          title: 'Warmaster of Chaos',
          description:
            "Chosen of all four Chaos Gods. His axe Drach'nyen devours souls. Thirteen Black Crusades. Undefeated.",
          imageUrl:
            'https://preview.redd.it/abaddon-the-despoiler-by-israel-llona-v0-4d651p6hwq4c1.jpg?width=640&crop=smart&auto=webp&s=eccf75d3961512b7cbc44927b3dcca84d01fb7cf',
          stats: { strength: 10, agility: 5, power: 10 },
        },
        {
          id: 'khorne-berzerker',
          name: 'Khorne Berzerker',
          title: 'World Eaters Legion',
          description:
            'Frenzied melee killer who charges without fear or hesitation. Blood for the Blood God.',
          imageUrl:
            'https://wh40k.lexicanum.com/mediawiki/images/thumb/d/d5/WEArt10th.jpg/220px-WEArt10th.jpg',
          stats: { strength: 10, agility: 8, power: 7 },
        },
      ],
    },
    {
      id: 'eldar',
      title: 'Eldar',
      subtitle: 'Craftworld',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNFJMGdE1v4mGVSdNjXvY9SoF6ToNRY2JdA&s',
      fighters: [
        {
          id: 'farseer',
          name: 'Farseer',
          title: 'Craftworld Ulthwé',
          description:
            'Sees ten thousand futures simultaneously. Commands battle with prescience no enemy can outmanoeuvre.',
          imageUrl:
            'https://wh40k.lexicanum.com/mediawiki/images/thumb/9/9d/Farseer6.jpg/275px-Farseer6.jpg',
          stats: { strength: 5, agility: 9, power: 10 },
        },
        {
          id: 'howling-banshee',
          name: 'Howling Banshee',
          title: 'Aspect Warrior',
          description:
            'Blade speed that blurs sight. Her war-cry paralyses enemies with terror before the first cut lands.',
          imageUrl: 'https://i.pinimg.com/736x/c0/d7/7a/c0d77aa8932ace136433fef082fb035b.jpg',
          stats: { strength: 6, agility: 10, power: 7 },
        },
      ],
    },
    {
      id: 'orks',
      title: 'Orks',
      subtitle: 'WAAAGH!',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5znn7509-D-Y5Fma2Wyk5n4Mc1g8XnYxVfg&s',
      fighters: [
        {
          id: 'ghazghkull-thraka',
          name: 'Ghazghkull Thraka',
          title: 'Prophet of Gork & Mork',
          description:
            'The biggest, the baddest Ork alive. His WAAAGH! spans star systems. Krumped a Primarch. Satisfied? Never.',
          imageUrl:
            'https://cdn.shopify.com/s/files/1/0585/7119/4575/files/ghazghkull-mag-uruk-thraka-by-israel-llona-v0-49toooluaa4c1_480x480.webp?v=1714502397',
          stats: { strength: 10, agility: 4, power: 9 },
        },
      ],
    },
  ],
};
