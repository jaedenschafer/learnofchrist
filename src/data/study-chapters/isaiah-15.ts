import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 15 — The Burden of Moab
 *
 * "The burden of Moab. Because in the night Ar of Moab is laid waste, and brought to silence;
 * because in the night Kir of Moab is laid waste, and brought to silence." Isaiah&apos;s prophecy
 * turns to the nation of Moab, speaking of its coming destruction. Yet beneath the prophecy
 * of judgment, Isaiah&apos;s tone is one of lament—even sorrow over the judgment that must fall.
 * "Therefore will I howl for Moab, and I will cry out for all Moab." Christ grieves over
 * judgment and destruction, weeping over those who reject God.
 */
export const ISAIAH_15: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 15,

  intros: [
    'The series of prophecies against the nations continues. Isaiah now turns his eye to Moab, a nation that dwells east of the Dead Sea, descended from Lot. The word is one of destruction: cities will be laid waste, people will flee in panic, mourning will cover the land. Yet the tone of Isaiah&apos;s prophecy is unlike simple condemnation. He does not exult in Moab&apos;s destruction. Rather, he weeps. "Therefore will I howl for Moab, and I will cry out for all Moab." The prophet grieves over the judgment that must fall.',
    'This is the paradox of prophecy—the bearer of bad news is not unmoved by the news. Isaiah speaks judgment, yes, but judgment filled with sorrow. This reflects something true about God Himself: He does not take pleasure in the death of the wicked. He does not exult in destruction. Rather, He grieves over it. When people turn from His way, when judgment must fall, the One who judges does so with a heavy heart. Even Christ, the perfect one, wept over Jerusalem, saying, "How often would I have gathered thy children together, even as a hen gathereth her chickens under her wings, and ye would not!" (Matthew 23:37).',
  ],

  sections: [
    {
      ref: 'Isaiah 15:1–9',
      title: 'The Burden of Moab: Lamentation Over Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(1, 'The burden of Moab. Because in the night Ar of Moab is laid waste, and brought to silence; because in the night Kir of Moab is laid waste, and brought to silence;'),
            plain(2, 'He is gone up to Bajith, and to Dibon, the high places, to weep: Moab shall howl over Nebo, and over Medeba: on all their heads shall be baldness, and every beard cut off.'),
            plain(3, 'In their streets they shall gird themselves with sackcloth: on the tops of their houses, and in their streets, every one shall howl, weeping abundantly.'),
            plain(4, 'And Heshbon shall cry, and Elealeh: their voice shall be heard even unto Jahaz: therefore the armed soldiers of Moab shall cry out; his life shall be grievous unto him.'),
            plain(5, 'My heart shall cry out for Moab; his fugitives shall flee unto Zoar, an heifer of three years old: for by the mounting up of Luhith with weeping shall they go it up; for in the way of Horonaim they shall raise up a cry of destruction.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah15-laid-waste',
          html:
            'The destruction comes suddenly, in the night. Cities are laid waste and brought to silence—the silence of death, of emptiness. The word "burden" (massa in Hebrew) refers to a heavy load, something that weighs heavily on the one who carries it. Isaiah speaks of Moab&apos;s destruction as a burden—not merely as a prophecy to be spoken, but as a weight upon his heart.',
        },
        {
          kind: 'commentary',
          id: 'isaiah15-mourning',
          html:
            'The response to destruction is widespread mourning. People go to the high places to weep. They gird themselves with sackcloth—the garment of lamentation. They cut their beards and shave their heads—visible signs of grief. From city to city, the cry goes up. The people flee like hunted animals. And in the midst of it all, Isaiah speaks his own lament: "My heart shall cry out for Moab." This is not merely reporting on distant events. This is a prophet moved with compassion, even for a nation facing judgment.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah15-massa',
          title: 'Massa — "Burden"',
          script: 'מַשָּׂא',
          translit: '<strong>Massa</strong> · burden, load, weight; an oracle or prophecy (from the root "to lift, to carry")',
          description:
            'The Hebrew word massa refers to something that must be lifted or carried—a burden. When applied to prophecy, it suggests that prophecy itself is a weight, something the prophet carries. To speak of judgment is to carry that judgment in one&apos;s heart.',
        },
        {
          kind: 'commentary',
          id: 'isaiah15-heart-cry',
          html:
            'The phrase "My heart shall cry out for Moab" is extraordinary. Isaiah does not distance himself from the suffering he prophesies. He does not stand apart, untouched. His heart cries out. His compassion flows toward those who are facing destruction. This teaches us something about what true prophecy is: it is not cold denunciation from a distance. It is the speaking of hard truth by one whose heart is broken by that truth, who grieves over the judgment, who wishes it were otherwise, yet speaks it because it must be spoken.',
        },
        {
          kind: 'christ',
          id: 'isaiah15-christ-sorrow',
          title: 'Christ Connection — The Sorrow of the Judge',
          html:
            'Jesus, the Judge of all the earth, wept. Standing over Jerusalem, He wept openly, saying, "If thou hadst known, even thou, at least in this thy day, the things which belong unto thy peace! but now they are hid from thine eyes" (Luke 19:41–42). He spoke of coming judgment—the destruction of the temple, the scattering of the people—yet He wept as He spoke. His judgment is real, but it is the judgment of one who loves, who grieves, who would gather people under His wings if they would only come. Like Isaiah weeping over Moab, Christ grieves over those who refuse Him.',
        },
        {
          kind: 'carry',
          html:
            'Does your heart ever cry out for those who are heading toward destruction? Do you grieve over those who are rejecting God&apos;s way, who are moving toward their own ruin? Or have you become hardened, indifferent, perhaps even satisfied with the notion of their judgment? Isaiah teaches us that compassion and judgment are not opposites. One can grieve deeply for those who are experiencing the consequences of their choices, even while affirming that judgment is just. This is the heart of Christ—the heart that grieves, that weeps, that wishes things were different, yet speaks truth with love.',
        },
        {
          kind: 'reflection',
          id: 'isaiah15-compassion-reflect',
          prompt: 'For whom do you need to develop greater compassion, even (or especially) when you believe judgment awaits them? How can your witness be one that grieves for the lost rather than exults in judgment?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'My heart shall cry out for Moab; his fugitives shall flee unto Zoar, an heifer of three years old.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 15:5 · Study Guide',
  },

  hasHebrew: true,
};
