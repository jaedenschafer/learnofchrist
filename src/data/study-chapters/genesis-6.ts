import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 6 - the chapter where heaven invades earth, God grieves
 * over humanity, and Noah alone finds favor.
 *
 * The chapter moves through three unfinished mysteries - the sons of God
 * and daughters of men (vv.1-4), the great grief of God and His resolve
 * (vv.5-8), and a man who walked with God and received a command that would
 * remake the world (vv.9-22). It is the hinge between creation and judgment,
 * between the world that was and the world that will be remade.
 */
export const GENESIS_6: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 6,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 13 },
  intros: [
    'Genesis 6 is the chapter where the world turns dark. After five generations of human failure, after Cain and the first murder, after a humanity that grows more twisted the further it gets from Eden, we arrive at a moment when God looks at what He has made and finds Himself grieving. The Hebrew word for that grief-<em>nicham</em>-shares its root with the name Noah. This is a chapter about repentance: God&apos;s, and a man&apos;s.',
    'The opening verses are strange-a moment most biblical scholars openly disagree about. Sons of God and daughters of men. Were they angels? Descendants of Seth? Earthly rulers? The text doesn&apos;t settle it, and readers across two thousand years have held different views. Rather than choosing a side, let yourself sit with the strangeness. The Bible is full of moments that defy easy answers. This is one of them.',
    'But what follows is clear: God sees the darkness He made space for, grieves it with a tenderness that feels almost human, and chooses one family-Noah and his house-to carry the promise through the waters of judgment[res:bibleodyssey-flood-narratives]. The ark is the answer to that grief. It is salvation beginning again.',
  ],

  sections: [
    /* ─── Genesis 6:1-4 - Sons of God and Daughters of Men ─────────────── */
    {
      ref: 'Genesis 6:1-4',
      title: 'Sons of God and Daughters of Men',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass, when men began to multiply on the face of the earth, and daughters were born unto them,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('That the '),
                hy('sons of God', 'hebrew-sons-of-god'),
                t(' saw the daughters of men that they were fair; and they took them wives of all which they chose.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the LORD said, My spirit shall not always strive with man, for that he also is flesh: yet his days shall be an '),
                hg('hundred and twenty years', 'c-lifespan'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('There were '),
                hy('giants in the earth', 'hebrew-nephilim'),
                t(' in those days; and also after that, when the sons of God came in unto the daughters of men, and they bare children to them, the same became mighty men which were of old, men of renown.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-strangers',
          html:
            'The opening verses resist easy interpretation. Three major views have stood for centuries: (1) the <em>sons of God</em> were angelic beings who took human wives-a reading the early Jews and early Christians held, and one Jude and 2 Peter explicitly cite; (2) they were descendants of Seth, the godly line, marrying Cainites, the worldly line; (3) they were human rulers or king-priests, the powerful of the earth taking what they wanted. The text does not settle this. Rather, it holds the strangeness. What is clear: someone is crossing a line. Someone is taking what was not meant to be taken. And the earth is watching[res:sefaria-genesis-6][res:britishmuseum-atrahasis].',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-sons-of-god',
          title: 'Sons of God - בְנֵי־אֱלֹהִים',
          script: 'בְנֵי־אֱלֹהִים',
          translit: '<strong>b&apos;nei elohim</strong> · literally "sons of God"',
          description:
            'This phrase appears five times in the Old Testament. In Job 1:6 and 2:1 it refers to heavenly beings standing before God. Here the text names an intrusion-something stepping into the human order that was not human. Whether angel or priest, the crossing of a boundary is the point.',
        },
        {
          kind: 'commentary',
          id: 'c-lifespan',
          html:
            'God&apos;s response is not to punish the transgression directly. It is to limit the future. <em>His days shall be an hundred and twenty years.</em> The lifespans that once stretched to nine hundred will now compress to a century. Judgment often looks like time itself being shortened-a mercy to a world growing more wicked, a way of saying: this will not go on forever.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nephilim',
          title: 'Nephilim - נְפִילִים',
          script: 'נְפִילִים',
          translit: '<strong>nephilim</strong> · "fallen ones," giants',
          description:
            'The word means literally the fallen, the ones brought down. Elsewhere translated "giants." Their size seems less important than the fact that they are the hybrid offspring of this crossing-powerful, mighty, famous, and entirely outside God&apos;s original design. Power in the wrong hands grows monstrous.',
        },
        {
          kind: 'carry',
          html:
            'You live in a time of crossed boundaries-between virtual and real, work and home, what you watch and who you become. Genesis 6 is not telling you that those crossings are easy to judge. It is telling you that they are never invisible. Someone is always watching. God is always watching. And the line you think is small-<em>just this once, just a taste, just this taking</em>-has a way of producing something larger than you planned.',
        },
        {
          kind: 'reflection',
          id: 'gen6-boundaries',
          prompt:
            'What boundaries in your life are beginning to blur? Which ones are you making excuses for? What is it costing you not to name the line?',
        },
      ],
    },

    /* ─── Genesis 6:5-8 - God Grieves ────────────────────────────────── */
    {
      ref: 'Genesis 6:5-8',
      title: 'The Sorrow of the Maker',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 5,
              spans: [
                t('And God saw that the wickedness of man was great in the earth, and that '),
                hg('every imagination of the thoughts of his heart was only evil continually', 'c-evil-continually'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And it '),
                hp('repented the LORD', 'christ-god-grieves'),
                t(' that he had made man on the earth: and it '),
                hp('grieved him', 'christ-god-grieves'),
                t(' at his heart.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-evil-continually',
          html:
            'The diagnosis is total. Not just that some people do evil-but that the entire landscape of human thought has become evil. <em>Every imagination of the thoughts of his heart.</em> The inner world has rotted. And rotting inward means rotting outward soon after.',
        },
        {
          kind: 'christ',
          id: 'christ-god-grieves',
          title: 'Christ Connection - God Who Feels the Pain He Sees',
          html:
            'The Hebrew word here is <em>nicham</em>-sometimes translated "repent," sometimes "grieve," sometimes "be moved to pity." It does not mean God changed His mind out of fickleness. It means God felt the weight of the world He made turning away from Him. Centuries later, Jesus wept over Jerusalem with the same tenderness: &ldquo;If thou hadst known, even thou, at least in this thy day, the things which belong unto thy peace!&rdquo; (Luke 19:42). God does not judge from distance. He grieves what He loves.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 7,
              spans: [
                t('And the LORD said, I will destroy man whom I have created from the face of the earth; both man, and beast, and the creeping thing, and the fowls of the air; for it '),
                hg('repenteth me that I have made them', 'c-utter-resolve'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('But Noah found '),
                t('grace in the eyes of the LORD'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-utter-resolve',
          html:
            'God&apos;s judgment is not random punishment. It is a reluctant mercy-a decision born of grief that the world He made has become so far from what He intended that only water and judgment can clear the ground for a beginning again. But notice: this determination is stated, and immediately-before we even finish the thought-the exception arrives. Noah. One man who walked with God, and in him, the way forward.',
        },
        {
          kind: 'carry',
          html:
            'If you are watching the world grow darker and feeling the weight of it, you are not wrong. The text does not deny that things have gotten bad. But it also does not end there. It ends with a man. One man who found grace, who walked with God, and whose obedience opened a door for the rest of us. Your one faithfulness today-in a room, in a conversation, in a decision no one else will see-is a door opening somewhere.',
        },
        {
          kind: 'reflection',
          id: 'gen6-grief',
          prompt:
            'What part of the world grieves your heart as you think about it today? Where do you see God&apos;s tenderness still working, like Noah, quietly, faithfully?',
        },
      ],
    },

    /* ─── Genesis 6:9-12 - Noah the Man Who Walked with God ────────────── */
    {
      ref: 'Genesis 6:9-12',
      title: 'The Man Who Walked with God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 9,
              spans: [
                t('These are the generations of Noah: Noah was a just man and '),
                hg('perfect in his generations', 'c-perfect'),
                t(', and Noah '),
                hp('walked with God', 'christ-walked-with'),
                t('.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Noah begat three sons, Shem, Ham, and Japheth.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('The earth also was corrupt before God, and the earth was filled with violence.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And God looked upon the earth, and, behold, it was corrupt; for all flesh had corrupted his way upon the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-perfect',
          html:
            'The word translated <em>perfect</em> does not mean sinless. It means complete, whole, undivided in his loyalty. In a generation bent away from God, Noah is the one bent <em>toward</em> Him. He is not perfect in the sense of being without flaw. He is perfect in the sense of being steady. He walks.',
        },
        {
          kind: 'commentary',
          id: 'c-walked-with',
          html:
            'Notice who else in Genesis <em>walked with God</em> this way. Enoch, in chapter 5, who &ldquo;walked with God: and he was not; for God took him.&rdquo; It is the way of communion-not striving, not performing, but simply walking alongside God, turning your steps where His go. That is the posture of Noah in a corrupt world. That is his strength.',
        },
        {
          kind: 'christ',
          id: 'christ-walked-with',
          title: 'Christ Connection - Emmanuel, God With Us',
          html:
            'The walking with God that Noah practices finds its fullest expression in the Incarnation. Jesus is God walking among us, Emmanuel-God with us. And that walking is the invitation to everyone who follows Him. &ldquo;I am the way,&rdquo; He says. Not: follow the way. But: walk with <em>me</em>. The steady faithfulness that saved Noah is the same movement that saves us now-not perfection, but turned-toward presence with the One who loves us.',
        },
        {
          kind: 'reflection',
          id: 'gen6-walk',
          prompt:
            'When did you last sense yourself walking with God rather than struggling toward Him? What made that moment different? How could you make more space for that kind of walking today?',
        },
      ],
    },

    /* ─── Genesis 6:13-22 - The Ark Commanded ─────────────────────────── */
    {
      ref: 'Genesis 6:13-22',
      title: 'The Ark Commanded',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 13,
              spans: [
                t('And God said unto Noah, The end of all flesh is come before me; for the earth is filled with violence through them; and, behold, I will destroy them with the earth.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Make thee an '),
                hy('ark', 'hebrew-tevah'),
                t(' of gopher wood; rooms shalt thou make in the ark, and shalt '),
                hg('pitch it within and without with pitch', 'c-pitch'),
                t('.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And this is the fashion which thou shalt make it of: The length of the ark shall be three hundred cubits, the breadth of it fifty cubits, and the height of it thirty cubits.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('A window shalt thou make to the ark, and in a cubit shalt thou finish it above; and the door of the ark shalt thou set in the side thereof; with lower, second, and third stories shalt thou make it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-pitch',
          html:
            'The word for pitch is <em>kopher</em>-the same root that gives us <em>kaphar</em>, &ldquo;atonement, covering.&rdquo; The ark is sealed inside and out with the language of covering, protection, atonement. Every plank holds that meaning. The wood that saves Noah is sealed with the very word that later names the act of making humans right with God again.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tevah',
          title: 'Tevah - תֵּבָה (ark)',
          script: 'תֵּבָה',
          translit: '<strong>tevah</strong> · ark, vessel',
          description:
            'The same word appears for the basket Moses floats in as an infant (Ex. 2:3). A <em>tevah</em> is not a boat; it is a survival pod, a womb of wood. It does not sail. It floats. It carries life through judgment.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 17,
              spans: [
                t('And, behold, I, even I, do bring a flood of waters upon the earth, to destroy all flesh, wherein is the breath of life, from under heaven; and every thing that is in the earth shall die.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('But with thee will I establish my '),
                hp('covenant', 'christ-covenant-ark'),
                t('; and thou shalt come into the ark, thou, and thy sons, and thy wife, and thy sons&apos; wives with thee.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And of every living thing of all flesh, two of every sort shalt thou bring into the ark, to keep them alive with thee; they shall be male and female.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Of fowls after their kind, and of cattle after their kind, of every creeping thing of the earth after his kind, two of every sort shall come unto thee, to keep them alive.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And take thou unto thee of all food that is eaten, and thou shalt gather it to thee; and it shall be for food for thee, and for them.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Thus did Noah; according to all that God commanded him, so did he.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-covenant',
          html:
            'God does not save Noah because Noah is good. God saves Noah because God <em>makes a covenant with him</em>. It is grace, not merit. The ark is not a reward for righteousness. It is a gift of mercy to a man who walked with God, who listened, and who will do what is asked. The pattern is established here: salvation comes through covenant, through the offer of relationship, not through earning.',
        },
        {
          kind: 'christ',
          id: 'christ-covenant-ark',
          title: 'Christ Connection - The Ark as Type of Atonement',
          html:
            'Peter explicitly typologizes the ark as baptism: &ldquo;eight souls were saved by water. The like figure whereunto even baptism doth also now save us&rdquo; (1 Peter 3:20-21). The wood sealed with <em>kopher</em> (atonement) carries life through water-through the judgment of God-and sets it down on the other side. Later, another wood, another cross, sealed with the blood of the Lamb, will carry all who believe through the waters of judgment into a new world. The ark points to Christ. The wood that saves is always the wood of atonement.',
        },
        {
          kind: 'carry',
          html:
            'When the flood comes-and floods come to all of us, in some form, in every life-you will not save yourself by being good. You will not. What saves is stepping into the ark God provides. For Noah it was wood and pitch. For us it is a covenant, a promise, a place inside God&apos;s mercy. God is not asking you to build your own rescue. He is asking you to step into His.',
        },
        {
          kind: 'reflection',
          id: 'gen6-obey',
          prompt:
            'What is God asking you to build or do that looks impossible or makes no sense? What would it mean to obey with the same simple faithfulness Noah shows in the last verse?',
        },
        {
          kind: 'artwork',
          matchTitle: /noah|ark|flood/i,
          caption: 'Genesis 6:13-22 · The Vessel of Salvation',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Genesis 6',
    quote:
      'In the midst of the world&apos;s corruption, God grieves and chooses one man who walked with Him, and through him opens a door to the other side. The ark is pitched with atonement; the water that judges becomes the way to begin again.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 6 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-6',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 6 · Hebrew + Jewish commentary',
      url: 'https://www.sefaria.org/Genesis.6',
      description: 'Hebrew text with rabbinic commentary on the pre-flood world and Noah&apos;s election.',
    },
    {
      id: 'britishmuseum-atrahasis',
      kind: 'museum',
      source: 'British Museum',
      label: 'Atrahasis Epic (Babylonian flood narrative)',
      url: 'https://www.britishmuseum.org/collection/search?object=Atrahasis',
      description: 'Neo-Babylonian flood narrative showing parallels and contrasts with Genesis account.',
    },
    {
      id: 'bibleodyssey-flood-narratives',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Flood Narratives in the Ancient Near East',
      url: 'https://www.bibleodyssey.org/articles/flood-narratives-ancient-near-east/',
      description: 'SBL comparison of Genesis flood account with Mesopotamian parallels.',
    },
  ],
};
