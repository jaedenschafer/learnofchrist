import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const JOEL_1: RichChapterContent = {
  bookSlug: 'joel',
  bookName: 'Joel',
  chapter: 1,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  intros: [
    'Joel opens with a crisis: a plague of locusts. "That which the palmerworm hath left hath the locust eaten; and that which the locust hath left hath the cankerworm eaten." Wave upon wave of destruction. The land is devastated. The grape vines are destroyed. The fig trees are stripped bare.',
    'Yet this physical judgment is a sign of a greater reality — the day of the Lord. The locust plague is but a small foreshadowing of the judgment that will come on all the earth. Joel calls the people to awake, to lament, to gather together. This is a wakeup call — not to doom them, but to turn them toward God.',
  ],

  bottomShare: {
    label: 'Share Joel 1',
    quote:
      'A locust plague devastates the land. Joel uses this natural judgment as a call to spiritual awakening. "Awake, ye drunkards, and weep."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joel 1 · Study Guide',
  },

  sections: [
    {
      ref: 'Joel 1:1–7',
      title: 'The Locust Plague',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The word of the Lord that came to Joel the son of Pethuel.'),
            plain(2, 'Hear this, ye old men, and give ear, all ye inhabitants of the land. Hath this been in your days, or even in the days of your fathers?'),
            plain(3, 'Tell ye your children of it, and let your children tell their children, and their children another generation.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'joel-1-78mid-1',
          html:
            'The locust devastation turns into a call to the priests — &quot;Gird yourselves, and lament.&quot; The disaster becomes a summons to mourn before the LORD.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 4,
              spans: [
                t('That which the '),
                hg('palmerworm hath left hath the locust eaten', 'joel1-locusts'),
                t('; and that which the locust hath left hath the cankerworm eaten; and that which the cankerworm hath left hath the caterpiller eaten.'),
              ],
            },
            plain(5, 'Awake, ye drunkards, and weep; and howl, all ye drinkers of wine, because of the new wine; for it is cut off from your mouth.'),
            plain(6, 'For a nation is come up upon my land, strong, and without number, whose teeth are the teeth of a lion, and he hath the cheek teeth of a great lion.'),
            plain(7, 'He hath laid my vine waste, and barked my fig tree: he hath made it clean bare, and cast it away; the branches thereof are made white.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'joel1-locusts',
          html:
            'The plague comes in waves. Four types of locusts — palmerworm, locust, cankerworm, caterpiller — each eating what the previous one left. It is a picture of complete devastation. Nothing escapes. Everything is consumed. Joel uses this as a sign of the judgment that will come on the earth.',
        },
        {
          kind: 'carry',
          html:
            'Joel calls the drunkards to weep. The wine has been cut off. The comfort that comes from wine — the numbing, the escape — is gone. Sometimes God removes our comforts so that we wake up, so that we see reality, so that we turn back to Him. What comfort has God removed from your life? What is He calling you to wake up from?',
        },
        {
          kind: 'reflection',
          id: 'joel1-wakeup',
          prompt: 'Joel calls Israel to awake and weep. What is God calling you to awake from? What judgment do you need to see as a call to return to Him?',
        },
      ],
    },

    {
      ref: 'Joel 1:8–20',
      title: 'The Call to Lament',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(8, 'Lament like a virgin girded with sackcloth for the husband of her youth.'),
            plain(9, 'The meat offering and the drink offering is cut off from the house of the Lord; the priests, the Lord&apos;s ministers, mourn.'),
            plain(10, 'The field is wasted, the land mourneth; for the corn is wasted: the new wine is dried up, the oil languisheth.'),
            plain(11, 'Be ye ashamed, O ye husbandmen; howl, O ye vinedressers, for the wheat and for the barley; because the harvest of the field is perished.'),
            plain(12, 'The vine is dried up, and the fig tree languisheth; the pomegranate tree, the palm tree also, and the apple tree, even all the trees of the field, are withered: because joy is withered away from the sons of men.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'joel1-withering',
          html: 'Everything is withered. The vine, the fig tree, the pomegranate, the palm — all the trees of the field. And deeper than the physical withering is the withering of joy itself. When the source of life is cut off, joy cannot remain. This is not just an agricultural crisis; it is a spiritual crisis.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(13, 'Gird yourselves, and lament, ye priests: howl, ye ministers of the altar: come, lie all night in sackcloth, ye ministers of my God: for the meat offering and the drink offering is withholden from the house of your God.'),
            plain(14, 'Sanctify ye a fast, call a solemn assembly, gather the elders and all the inhabitants of the land into the house of the Lord your God, and cry unto the Lord,'),
            plain(15, 'Alas for the day! for the day of the Lord is at hand, and as a destruction from the Almighty shall it come.'),
            plain(16, 'Is not the meat cut off before our eyes, yea, joy and gladness from the house of our God?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'joel-1-78mid-2',
          html:
            'The locust devastation turns into a call to the priests — &quot;Gird yourselves, and lament.&quot; The disaster becomes a summons to mourn before the LORD.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(17, 'The seed is rotten under their clods, the garners are laid desolate, the barns are broken down; for the corn is withered.'),
            plain(18, 'How do the beasts groan! the herds of cattle are perplexed, because they have no pasture; yea, the flocks of sheep are made desolate.'),
            plain(19, 'O Lord, to thee will I cry: for the fire hath devoured the pastures of the wilderness, and the flame hath burned all the trees of the field.'),
            plain(20, 'The beasts of the field cry also unto thee: for the rivers of waters are dried up, and the fire hath devoured the pastures of the wilderness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'joel1-priests-called',
          html:
            'The priests are called to mourn. The worship is cut off — the meat offering and the drink offering are no longer brought to the Lord. But in this cutting off, the priests are summoned to stand in the gap, to gather the people, to sanctify a fast, and to cry unto the Lord. The crisis becomes a call.',
        },
        {
          kind: 'carry',
          html:
            'When all that sustains us is gone, when the fields are bare and the grain is perished, we cry to the Lord. This is what Joel is calling Israel to — not to despair, but to turn the crisis into a moment of prayer and seeking. What has been stripped away from your life that has driven you to cry unto the Lord?',
        },
        {
          kind: 'reflection',
          id: 'joel1-lament-reflection',
          prompt: 'Joel calls the people to lament and to gather before God. How do you respond when everything that sustains you is taken away? Does it drive you to seek God?',
        },
      ],
    },

    {
      ref: 'Joel 1 · All',
      title: 'Judgment as Wake-up Call',
      blocks: [
        {
          kind: 'commentary',
          id: 'joel1-theme',
          html:
            'Joel 1 presents judgment as a wakeup call. The locusts devastate the land, and instead of the people despairing or hiding, they are called to wake up, to lament, to gather before God. The destruction is meant to turn them back to their Maker. It is harsh mercy — the removal of comfort so that they will seek the Comforter.',
        },
        {
          kind: 'christ',
          id: 'joel1-christ',
          title: 'Christ Connection — Herald of the Day',
          html:
            'The locust plague stands as a shadow of the day of the Lord — a day of judgment and visitation. Yet Joel&apos;s urgent call to gather and seek God prefigures Christ&apos;s own call. "Come unto me, all ye that labour and are heavy laden, and I will give you rest" (Matt. 11:28). The day of the Lord will indeed come. But before it comes, Christ offers refuge. He is the One standing at the door, calling us to awake from our comforts, to gather before the Throne, to seek His face while He may be found.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
