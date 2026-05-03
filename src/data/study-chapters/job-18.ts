import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Job 18 — Bildad's Second Speech: The Fate of the Wicked
 *
 * Bildad returns to assault Job with harsh poetry about the fate of the wicked.
 * His vision is brutal and unrelenting: the wicked man's light is put out, his
 * memory perishes from the earth, his bones are full of the sin of his youth.
 * "The terrors of death" pursue him. He knows nothing of rest. Bildad speaks as
 * if he is describing Job—implying that Job's suffering is the proof of his
 * wickedness. But Bildad sees only a man's downfall. He does not see that Christ
 * Himself will be abandoned by friends, forgotten by the world, and yet will rise
 * to become the hope of all humanity.
 */
export const JOB_18: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 18,

  estimatedMinutes: { beginner: 3, intermediate: 6, deep: 9 },
  intros: [
    'Bildad rises to speak a second time, and his words are even harder than before. He has heard Job&apos;s defense, and he is not convinced. In his view, the doctrine is simple and absolute: the wicked suffer, the righteous prosper. Job is suffering. Therefore, Job must be wicked. There is no other explanation. Bildad does not offer argument or negotiation. He offers only a terrible vision of what happens to wicked men—a vision designed to crush hope from Job&apos;s heart.',
    'The speech is constructed as a poetic description of the wicked man&apos;s inevitable doom. Light is put out. Memory is erased. Terror pursues him. His days are cut short. His name disappears from the earth. Every image is designed to say the same thing: this is what happens to you when you are wicked. Bildad speaks as though Job&apos;s suffering is not a mystery, not a test, not a temporary trial. It is a verdict. It is the final word. And yet Bildad does not understand that the final suffering—the greatest abandonment, the deepest darkness—will be borne by one who is not wicked at all, but perfectly innocent, and that through His darkness, the world will be redeemed.',
  ],

  bottomShare: {
    quote:
      'Bildad speaks of the wicked man&apos;s doom: "The light of the wicked shall be put out, and the spark of his fire shall not shine." But this terrible vision does not account for the one who goes into darkness not for his own sin, but for the sin of the world.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 18 · Study Guide',
  },

  resources: [
    {
      id: 'british-museum-ludlul',
      kind: 'museum',
      source: 'British Museum',
      label: 'Ludlul Bel Nemeqi (I Will Praise the Lord)',
      url: 'https://www.britishmuseum.org/',
      description: 'Akkadian wisdom poem from Babylon: suffering, divine justice, vindication.',
    },
    {
      id: 'sefaria-job-18',
      kind: 'study',
      source: 'Sefaria',
      label: 'Job 18 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Job.18',
      description: 'The Hebrew text of Job 18 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-job-overview-18',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Job — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/job/',
      description: 'Open-access SBL essay on the historical and literary setting of Job.',
    },

  ],

  sections: [
    /* ─── Job 18:1–4 — Bildad&apos;s Opening ────────────────────────────── */
    {
      ref: 'Job 18:1–4',
      title: 'The Impatience of the Friends',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(1, 'Then answered Bildad the Shuhite, and said,'),
            plain(2, 'How long will it be ere ye make an end of words? mark, and afterwards we will speak.'),
            plain(3, 'Wherefore are we counted as beasts, and reputed vile in your sight?'),
            {
              number: 4,
              spans: [
                t('Thou that tearest thyself in '),
                hg('thine anger', 'job18-anger'),
                t(', shall the earth be forsaken for thee? or shall the rock be removed out of his place?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job18-anger',
          html:
            'Bildad speaks with contempt. Job "teareth himself in his anger"—suggesting that Job&apos;s grief and pain are actually self-destruction born of rage. But Bildad misreads the signs. What he sees as anger may be the righteous man&apos;s agony at injustice. What he sees as self-tearing may be the soul&apos;s genuine cry. Bildad has no patience for ambiguity. He will not sit with mystery. He must diagnose and condemn. [res:british-museum-ludlul]',
        },
        {
          kind: 'hebrew',
          id: 'job18-tore',
          title: 'Qara — "Tear" (in the Sense of Rending)',
          script: 'קָרַע',
          translit: '<strong>Qara</strong> · to tear, rend, split; to separate forcefully',
          description:
            'Job "tears himself"—the same word used when a man tears his garments in mourning. But Bildad uses the verb in a more sinister way: not as the outward expression of grief, but as an inward violence, a self-destruction. The word carries the sense of rending apart what was whole. Bildad implies that Job&apos;s suffering is his own doing, not the hand of God.',
        },
        {
          kind: 'carry',
          html:
            'Bildad&apos;s impatience reveals the cruelty of certainty. He is so sure of his doctrine that he cannot listen. He cannot sit with Job&apos;s mystery. He must move toward judgment. This is what happens when we are more attached to our theology than to the person in front of us[res:sefaria-job-18][res:bibleodyssey-job-overview-18].',
        },
        {
          kind: 'reflection',
          id: 'job18-impatience',
          prompt: 'When have you been so sure of your theological position that you stopped listening to someone in pain? What would change if you waited longer before offering explanations?',
        },
      ],
    },

    /* ─── Job 18:5–13 — The Fate of the Wicked ────────────────────────── */
    {
      ref: 'Job 18:5–13',
      title: 'The Light of the Wicked Put Out',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 5,
              spans: [
                t('Yea, the '),
                hg('light of the wicked shall be put out', 'job18-light'),
                t(', and the spark of his fire shall not shine.'),
              ],
            },
            plain(6, 'The light shall be dark in his tabernacle, and his candle shall be put out with him.'),
            plain(7, 'The steps of his strength shall be straitened, and his own counsel shall cast him down.'),
            {
              number: 8,
              spans: [
                t('For he is cast into a '),
                hg('net by his own feet', 'job18-net'),
                t(', and he walketh upon a snare.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job18-trap-ruin',
          html:
            'Bildad shifts from setting traps for the wicked to their complete ruination. Judgment escalates to annihilation.',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(9, 'The gin shall take him by the heel, and the robber shall prevail against him.'),
            plain(10, 'The snare is laid for him in the ground, and a trap for him in the way.'),
            plain(11, 'Terrors shall make him afraid on every side, and shall drive him to his feet.'),
            {
              number: 12,
              spans: [
                t('His strength shall be hungerbitten, and '),
                hg('destruction shall be ready at his side', 'job18-destruction'),
                t('.'),
              ],
            },
            plain(13, 'It shall devour the strength of his skin: even the firstborn of death shall devour his strength.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job18-light',
          html:
            'Bildad begins with an image of darkness. The wicked man&apos;s light is extinguished. His brightness—the symbol of blessing, of life, of divine favor—is snuffed out. In Hebrew thought, light is life, knowledge, hope. To lose light is to lose everything that makes existence worth living. Bildad is painting a picture of utter doom, designed to make Job see that his suffering is not temporary—it is the shadow of eternal judgment.',
        },
        {
          kind: 'commentary',
          id: 'job18-net',
          html:
            'The wicked man "is cast into a net by his own feet." This is the core of Bildad&apos;s theology: the wicked man is trapped by his own actions. He does not fall because of external evil. He falls because his wickedness creates snares around him. He walks into traps of his own making. This doctrine sounds wise—sin does have consequences—but Bildad mistakes correlation for causation. He assumes that because Job is suffering, Job must have set the trap.',
        },
        {
          kind: 'hebrew',
          id: 'job18-nets',
          title: 'Reshet — "Net" (A Trap of Restraint)',
          script: 'רֶשֶׁת',
          translit: '<strong>Reshet</strong> · net, snare, trap; something woven to entangle',
          description:
            'The net is woven deliberately—it is a trap laid, a restraint fashioned. But in this verse, the wicked man lays it "by his own feet." The image suggests that his wickedness has created an entanglement of his own making. The net is both a consequence of his actions and a binding restraint. He is not free. He is caught.',
        },
        {
          kind: 'commentary',
          id: 'job18-destruction',
          html:
            '"Destruction shall be ready at his side." Bildad personifies destruction as a companion, ever-present, waiting. The wicked man does not have a moment of peace. Death itself is standing by, watching, ready to strike. This is Bildad&apos;s vision of the wicked man&apos;s fate: not a quick ending, but a slow terror, a gradual degradation, with death waiting at the door.',
        },
        {
          kind: 'carry',
          html:
            'Bildad&apos;s vision is meant to be a warning: this is what happens to the wicked. But the doctrine fails to account for the righteous man who suffers unjustly. It fails to see that suffering can be a test, not a verdict. And it fails to see that the deepest suffering—the crucifixion of the innocent—will be the very means of human redemption.',
        },
        {
          kind: 'reflection',
          id: 'job18-darkness',
          prompt: 'Bildad sees suffering as darkness, as deserved darkness. But what if darkness itself is sometimes a place where faith grows deepest? Have you found God in your darkest moments, or only felt abandoned?',
        },
      ],
    },

    /* ─── Job 18:14–21 — Memory Erased, Name Forgotten ──────────────────── */
    {
      ref: 'Job 18:14–21',
      title: 'The Wicked Man Forgotten',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            {
              number: 14,
              spans: [
                t('His confidence shall be rooted out of his tabernacle, and it shall bring him to the '),
                hg('king of terrors', 'job18-king-terrors'),
                t('.'),
              ],
            },
            plain(15, 'It shall dwell in his tabernacle, because it is none of his: brimstone shall be scattered upon his habitation.'),
            plain(16, 'His roots shall be dried up beneath, and above shall his branch be cut off.'),
            {
              number: 17,
              spans: [
                t('His '),
                hg('memory shall perish from the earth', 'job18-memory'),
                t(', and he shall have no name in the street.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job18-mid-bildad-terror',
          html:
            'Calamity strips everything; faith asks: can you praise when silence is easier?',
        },
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(18, 'He shall be driven from light into darkness, and chased out of the world.'),
            plain(19, 'He shall neither have son nor nephew among his people, nor any remaining in his dwellings.'),
            plain(20, 'They that come after shall be astonied at his day, as they that went before were affrighted.'),
            {
              number: 21,
              spans: [
                t('Surely such are the dwellings of the '),
                hg('wicked', 'job18-wicked-final'),
                t(', and this is the place of him that knoweth not God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job18-king-terrors',
          html:
            'The "king of terrors"—a phrase for death itself. But note the progression: the wicked man is not just afflicted. He is brought to the presence of death, to stand before the king of terrors. His very confidence—the thing that sustained him—becomes the pathway to his own judgment. What he believed would save him becomes his destruction.',
        },
        {
          kind: 'hebrew',
          id: 'job18-zachar',
          title: 'Zachar — "Memory" (What Remains After Death)',
          script: 'זִכְרוֹן',
          translit: '<strong>Zachar</strong> or <strong>Zichron</strong> · memory, remembrance; what is remembered after death',
          description:
            'In Hebrew thought, memory is a form of immortality. To be remembered is to persist beyond death. To be forgotten is to cease to exist, even in the minds of the living. "His memory shall perish from the earth" means that the wicked man will be utterly erased. No one will speak his name. No one will recall his deeds. He will become as if he never lived.',
        },
        {
          kind: 'commentary',
          id: 'job18-memory',
          html:
            'This is the deepest terror of Bildad&apos;s vision: not just death, but annihilation. Not just suffering, but erasure. The wicked man will be forgotten. His children will forget him. His dwelling will be empty. Even his name will disappear from the streets. This is the opposite of the promise given to the righteous—that their name will be remembered and their deeds will be known.',
        },
        {
          kind: 'commentary',
          id: 'job18-wicked-final',
          html:
            'Bildad concludes his speech with a rhetorical flourish: "Surely such are the dwellings of the wicked, and this is the place of him that knoweth not God." He is speaking of Job. He is saying: this is you, Job. You are the wicked man. You are forgotten. You are condemned. But Bildad does not see what the reader knows: that Job is not the wicked man. Job is the righteous man being tested.',
        },
        {
          kind: 'christ',
          id: 'job18-christ',
          title: 'Christ Connection — Abandoned, Yet Remembered Forever',
          html:
            'Christ goes into the darkness that Bildad describes. His disciples abandon Him. His enemies mock Him. "My God, my God, why hast thou forsaken me?" He experiences the deepest sense of abandonment. Like the wicked man in Bildad&apos;s vision, Christ is brought to the king of terrors—to death itself. But there is a difference: Christ&apos;s name is not forgotten. His memory does not perish from the earth. Instead, His name is exalted above every name, and His remembrance is celebrated in every age. What Bildad saw as the fate of the wicked becomes, in Christ, the pathway to redemption. The innocent One goes into darkness and conquers it.',
        },
        {
          kind: 'carry',
          html:
            'Bildad&apos;s theology is not false. The wicked do reap what they sow. Evil does have consequences. Memory does matter. But Bildad confuses the pattern with the purpose. He sees a doctrine and forgets the person. He speaks of fate as if it were fact, when in truth fate is neither foreordained nor unchangeable. Job is about to prove that.',
        },
        {
          kind: 'reflection',
          id: 'job18-memory-end',
          prompt: 'Bildad says the wicked are forgotten. But what does it mean to be remembered by God, even if the world forgets you? Is God&apos;s remembrance enough?',
        },
      ],
    },
  ],
};
