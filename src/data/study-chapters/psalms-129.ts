import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 129 — Many a Time Have They Afflicted Me
 *
 * "Many a time have they afflicted me from my youth, may Israel now say."
 * A song of ascents recounting persistent persecution and God's deliverance.
 * "Yet they have not prevailed against me."
 * The psalmist's enemies have plowed upon his back, yet he remains standing.
 * Christ connection: Christ afflicted from His birth (Herod's persecution);
 * yet unable to be destroyed; the righteous afflicted yet unbroken.
 */
export const PSALMS_129: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 129,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'Psalm 129 is a corporate testimony of endurance through relentless persecution. The psalmist speaks for Israel, for the people as a whole: "Many a time have they afflicted me from my youth." This is not a single attack, not a passing trial. This is a lifetime of hostility, opposition, pressure. From childhood, the nation has faced enemies bent on its destruction. And yet—"Yet they have not prevailed against me." The nation has not been destroyed. It remains. It stands. The afflicters have not won.',
  ],

  sections: [
    {
      ref: 'Psalm 129:1–8',
      title: 'Afflicted Yet Standing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 129,
          lines: [
            plain(1, 'Many a time have they afflicted me from my youth, may Israel now say:'),
            plain(2, 'Many a time have they afflicted me from my youth: yet they have not prevailed against me.'),
            plain(3, 'The plowers plowed upon my back: they made long their furrows.'),
            plain(4, 'The Lord is righteous: he hath cut asunder the cords of the wicked.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-129-78mid-1',
          html:
            'Affliction from youth and the Lord&apos;s faithfulness yield to prayer against enemies. Endurance becomes vindication. [res:sefaria-psalm-129]',
        },
        {
          kind: 'scripture',
          chapter: 129,
          lines: [
            plain(5, 'Let them all be confounded and turned back that hate Zion.'),
            plain(6, 'Let them be as the grass upon the housetops, which withereth afore it groweth up:'),
            plain(7, 'Wherewith the mower filleth not his hand; nor he that bindeth sheaves his bosom.'),
            plain(8, 'Neither do they which go by say, The blessing of the Lord be upon you: we bless you in the name of the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps129-plowers',
          html:
            'The image is visceral and brutal: "The plowers plowed upon my back: they made long their furrows." As a farmer plows a field, the enemies have plowed upon the psalmist&apos;s back. The flesh is scarred, marked, broken open. Yet the voice that speaks is not broken. It is the voice of someone who has endured, who has been wounded but not destroyed.',
        },
        {
          kind: 'commentary',
          id: 'ps129-prevailed',
          html:
            '"Yet they have not prevailed against me." This is the turning point. For all the affliction, for all the deep plowing of suffering, the enemy has not prevailed. The psalmist is still standing. Still speaking. Still able to testify to God&apos;s righteousness. The affliction did not accomplish its purpose. The enemy did not achieve the annihilation it sought.',
        },
        {
          kind: 'commentary',
          id: 'ps129-righteous',
          html:
            '"The Lord is righteous: he hath cut asunder the cords of the wicked." The bonds that held the psalmist, the cords that seemed to bind him to the will of his enemies, have been cut by the righteous God. Freedom has come, not through the enemy&apos;s mercy, but through God&apos;s justice. The psalmist then pronounces judgment on those who hate Zion—let them be confounded, turned back, like grass on a rooftop that withers before bearing fruit.',
        },
        {
          kind: 'christ',
          id: 'ps129-christ-afflicted',
          title: 'Christ Connection — The Afflicted One',
          html:
            'Matthew 2 records Herod&apos;s attempt to kill the infant Jesus by slaughtering the innocents of Bethlehem. Christ was afflicted from His earliest days. Yet He could not be destroyed. His enemies plowed upon His back at Calvary. Yet He rose. And all who belong to Him share in the pattern—afflicted, yet not overcome. The wounds of Christ are the means by which the cords of wickedness are cut asunder. [res:bible-odyssey-psalm-129]',
        },
        {
          kind: 'carry',
          html:
            'Psalm 129 speaks to those who have been afflicted persistently, who bear the scars of long opposition, who are tempted to believe that their enemies have won. It tells you that standing is itself a victory. That endurance is proof of God&apos;s righteousness working on your behalf. The enemies who plowed your back will wither like grass on a housetop. But you will remain.',
        },
        {
          kind: 'reflection',
          id: 'ps129-endure',
          prompt:
            'What affliction have you endured? Where are the deep furrows that your enemies have plowed? What would it mean to say, not "I have been destroyed," but "Yet they have not prevailed against me"? How might recognizing God&apos;s righteousness in your endurance change your perspective?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Many a time have they afflicted me from my youth: yet they have not prevailed against me. The Lord is righteous: he hath cut asunder the cords of the wicked.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 129 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-129',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 129 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.129',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-129',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 129 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+129',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
  ],

};
