import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 28 - Jacob flees Padan-aram. He stops at Bethel and dreams of a
 * ladder reaching to heaven with angels ascending and descending, the LORD
 * standing above it. God renews the Abrahamic promises. Jacob wakes in wonder,
 * sets up a stone pillar, vows tithes. A turning point: grace finds him in
 * flight, at the edge of nowhere, and names the place the house of God.
 */
export const GENESIS_28: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 28,

  estimatedMinutes: { beginner: 8, intermediate: 12, deep: 15 },
  intros: [
    'Jacob has just stolen his brother&apos;s blessing. He is fleeing for his life into the desert, running from Esau&apos;s murderous rage. He is homeless, alone, carrying nothing but the clothes on his back and a thief&apos;s guilt. At nightfall he lies down on the hard ground with a stone for a pillow. And then - at the moment of deepest isolation, when he has lost everything and has no reason to expect God&apos;s face - he dreams.',
    'What he sees is a ladder connecting earth to heaven, angels moving up and down it like a highway between two worlds. And standing at the top: the LORD Himself. The dream is pure grace: [res:bibleodyssey-jacob-israel] God speaking the very promises Jacob thought he&apos;d forfeited, blessing him not because he deserves it but because He had promised it to Abraham. Jacob wakes from his stone pillow trembling. He names the place Bethel - the house of God - and marks it with a vow. But his vow is still Jacob: <em>if</em> God will be with me, <em>then</em> the LORD will be my God. Grace finds him bargaining. Grace meets him anyway.',
  ],

  bottomShare: {
    label: 'Share Genesis 28',
    quote:
      'Jacob dreamed of a ladder reaching to heaven, with angels ascending and descending on it. The LORD stood above it and said, "I am with you and will keep you wherever you go." When Jacob woke he said, "How dreadful is this place! This is none other but the house of God, and this is the gate of heaven."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 28 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-28',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 28 · Commentaries & Translations',
      url: 'https://www.sefaria.org/Genesis.28',
      description: 'Rabbinic and academic commentaries on Jacob&apos;s ladder vision and the Bethel theophany.',
    },
    {
      id: 'iaa-israel-sites',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Canaanite and Patriarchal Sites',
      url: 'https://www.antiquities.org.il/Article/ArticleFull/1',
      description: 'Archaeological records of settlements and family structures in Iron Age Canaan.',
    },
    {
      id: 'bibleodyssey-jacob-israel',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'Jacob &amp; Israel: Deception, Wrestling, &amp; Divine Naming',
      url: 'https://www.bibleodyssey.org/en/passages/related-articles/Jacob-Israel',
      description: 'Theological exploration of Jacob&apos;s role in covenant continuation and God&apos;s sovereign choice.',
    },
  ],

  sections: [
    /* ─── Genesis 28:1-5 - Sent Away ──────────────────────────────── */
    {
      ref: 'Genesis 28:1-5',
      title: 'The Flight',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 1,
              spans: [
                t('And Isaac called Jacob, and '),
                hg('blessed him, and charged him', 'c-blessed'),
                t(', and said unto him, Thou shalt not take a wife of the daughters of Canaan.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Arise, go to '),
                hy('Padan-aram', 'hebrew-paddanaram'),
                t(', to the house of Bethuel thy mother&apos;s father; and take thee a wife from thence of the daughters of Laban thy mother&apos;s brother.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And God Almighty bless thee, and make thee fruitful, and multiply thee, that thou mayest be a multitude of people;'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And '),
                hp('give thee the blessing of Abraham', 'christ-promise-renewed'),
                t(', to thee, and to thy seed with thee; that thou mayest inherit the land wherein thou art a stranger, which God gave unto Abraham.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And Isaac sent away Jacob: and he went to Padan-aram unto Laban, son of Bethuel the Syrian, the brother of Rebekah, Jacob&apos;s and Esau&apos;s mother.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blessed',
          html:
            'Isaac blesses Jacob in front of Esau. Jacob has stolen the blessing, yet Isaac ratifies it - not out of foolishness, but because he now understands. The work is done. Jacob must be sent away to marry well and keep the line pure. Isaac is no longer fighting what God has already chosen. He is doing the harder thing: accepting it, and blessing the son he favors less.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-paddanaram',
          title: 'Padan-Aram - &ldquo;the field of Aram&rdquo;',
          script: 'פַּדַּן־אָרָם',
          translit: '<strong>Paddan-Aram</strong> · the field / plain of Aram (Mesopotamia)',
          description:
            'Jacob is being sent into exile - north to Mesopotamia, to the homeland his family came from. It is a long, solitary journey into the unknown. He goes as a refugee, carrying his mother&apos;s shame and his brother&apos;s hatred with him.',
        },
        {
          kind: 'christ',
          id: 'christ-promise-renewed',
          title: 'Christ Connection - The Seed of Promise',
          html:
            'Isaac says Jacob will inherit the land and become a multitude. He is speaking about the Abrahamic covenant - the same promise God made to Abraham and later reaffirmed to Isaac. Paul will later clarify what seed is being spoken of: &ldquo;Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, And to thy seed, which is Christ&rdquo; (Gal. 3:16). Every time the promise is renewed, it is drawing the entire story toward the One who will bring all nations blessing.',
        },
        {
          kind: 'carry',
          html:
            'You have times in your life when you are sent away - from a job, a relationship, a place you thought would always be home. Sometimes you sent yourself by your own poor choices. Sometimes someone you trusted sends you without explanation. The promise Jacob carries into exile is not that he deserves to go or that it will be easy. It is that he goes not alone, that God is already thinking about the lineage that flows through him, that his scattering is part of a gathering.',
        },
        {
          kind: 'reflection',
          id: 'gen28-sent',
          prompt:
            'What good thing are you carrying into a difficult season right now? What would it mean to hold the promise while you walk the hard road?',
        },
      ],
    },

    /* ─── Genesis 28:6-9 - Esau&apos;s Failure ────────────────────────── */
    {
      ref: 'Genesis 28:6-9',
      title: 'Esau Understands Too Late',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 6,
              spans: [
                t('When Esau saw that Isaac had blessed Jacob, and sent him away to Padan-aram, to take him a wife from thence; and that as he blessed him '),
                hg('he gave him a charge, saying, Thou shalt not take a wife of the daughters of Canaan', 'c-esau-sees'),
                t(';'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And that Jacob obeyed his father and his mother, and was gone to Padan-aram;'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And Esau seeing that the daughters of Canaan pleased not Isaac his father;'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Then went Esau unto Ishmael, and took Mahalath the daughter of Ishmael Abraham&apos;s son, the sister of Nebajoth, to be his wife, '),
                hg('beside the wives which he had', 'c-too-late'),
                t(', and took her to wife.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-esau-sees',
          html:
            'Esau finally sees what his father values, what the covenant requires. He finally understands. And so he tries to fix it - he goes and marries Mahalath, a daughter of Ishmael, thinking this will make him acceptable. [res:sefaria-genesis-28] But understanding too late is a particular kind of pain. The blessing cannot be unbroken and re-given. The choice made at the red pot cannot be unmade.',
        },
        {
          kind: 'commentary',
          id: 'c-too-late',
          html:
            'Esau takes another wife (he already has two Canaanite wives). He is trying to buy his way back into the inheritance with a good marriage. But the inheritance was not for sale. [res:iaa-israel-sites] It was a gift that required a different heart all along.',
        },
        {
          kind: 'carry',
          html:
            'There are moments when you finally understand what someone was asking of you - and it is too late to give it them the way they wanted. The repair has to happen in a different key. If you are Esau here, asking God to accept the late understanding, the answer is yes - but the gift will look different than you imagined. If you are someone waiting for another person to finally see, the work is still to keep the door open, still to make clear what matters.',
        },
      ],
    },

    /* ─── Genesis 28:10-15 - The Dream at Bethel ───────────────────── */
    {
      ref: 'Genesis 28:10-15',
      title: 'The Ladder Reaching to Heaven',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 10,
              spans: [
                t('And Jacob went out from Beersheba, and went toward Haran.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And he lighted upon a certain place, and tarried there all night, because the sun was set; and he took of the stones of that place, and put them for his pillows, and lay down in that place to sleep.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And he dreamed, and behold '),
                hp('a ladder set up on the earth, and the top of it reached to heaven', 'c-sulam'),
                t(': and behold '),
                hp('the angels of God ascending and descending on it', 'c-sulam'),
                t('.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And, behold, '),
                hp('the LORD stood above it', 'christ-standing'),
                t(', and said, I am the LORD God of Abraham thy father, and the God of Isaac: the land whereon thou liest, to thee will I give it, and to thy seed;'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And thy seed shall be as the dust of the earth, and thou shalt spread abroad to the west, and to the east, and to the north, and to the south: and in thee and in thy seed shall all the families of the earth be blessed.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And, behold, '),
                hp('I am with thee, and will keep thee in all places whither thou goest, and will bring thee again into this land', 'c-presence'),
                t('; for I will not leave thee, until I have done that which I have spoken to thee of.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sulam',
          html:
            'A <em>sulam</em> - a ladder or ramp or stairway connecting earth to heaven. We picture an upright ladder leaning against the sky, but the word evokes something more like a ziggurat, a long ramp that allows passage back and forth. This is the only place in all of Hebrew Scripture the word appears. The image carries the weight of its uniqueness: this is a highway between worlds, opened in a dream to a man who has nowhere else to turn.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-sulam',
          title: 'Sulam - &ldquo;ladder&rdquo;',
          script: 'סֻלָּם',
          translit: '<strong>sulam</strong> · a ladder, stairway, or ramp; the point of contact between earth and heaven',
          description:
            'Used only here. The image is of active passage - angels going up and coming down, like traffic on a highway. Not a static connection, but a living one. A way for heaven to reach down and earth to reach up.',
        },
        {
          kind: 'christ',
          id: 'christ-standing',
          title: 'Christ Connection - The Ladder Is a Person',
          html:
            'Later in John&apos;s Gospel, Jesus tells Nathanael: &ldquo;Ye shall see heaven open, and the angels of God ascending and descending upon the Son of man&rdquo; (John 1:51). Jesus is reading Genesis 28 and telling Nathanael that <em>He</em> is the ladder. Not a ramp to heaven, but a Person. The point of contact between two worlds is not a thing but the God-man standing in the middle. Everything that ascends and descends in the kingdom of God passes through Him.',
        },
        {
          kind: 'commentary',
          id: 'c-presence',
          html:
            'God promises Jacob His presence: &ldquo;I am with thee.&rdquo; Not <em>if you behave</em>, not <em>when you deserve it</em>, but <em>I am with you</em> - an unearned companionship in the middle of exile. The promise echoes through the rest of Scripture. God with Moses. God with Joshua. God with the disciples. God with us.',
        },
        {
          kind: 'carry',
          html:
            'The wonder of Jacob&apos;s dream is not the architecture of heaven; it is that heaven opens to him now, here, while he is still running, still afraid, still guilty. The promise does not require that he get himself together first. The ladder does not wait. Grace meets him on a stone pillow with dirt under his fingernails and says: <em>I am with you.</em> Whatever you were running from, whatever you are ashamed of, the ladder is open tonight.',
        },
        {
          kind: 'reflection',
          id: 'gen28-ladder',
          prompt:
            'When have you felt most alone - most cut off from heaven, most sure no one was watching? What would change if the ladder was open even then?',
        },
        {
          kind: 'artwork',
          matchTitle: /jacob|ladder|dream|bethel/i,
          caption: 'Genesis 28:12-15 · The Ladder Reaching to Heaven',
        },
      ],
    },

    /* ─── Genesis 28:16-19 - Jacob Wakes ───────────────────────────── */
    {
      ref: 'Genesis 28:16-19',
      title: 'The House of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 16,
              spans: [
                t('And Jacob awaked out of his sleep, and he said, '),
                hp('Surely the LORD is in this place', 'c-yahweh-place'),
                t('; and I knew it not.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And he was afraid, and said, '),
                hg('How dreadful is this place!', 'c-dreadful'),
                t(' this is none other but the house of God, and this is '),
                hp('the gate of heaven', 'christ-gate'),
                t('.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And Jacob rose up early in the morning, and took the stone that he had put for his pillows, and '),
                hg('set it up for a pillar', 'c-pillar'),
                t(', and poured oil upon the top of it.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And he called the name of that place '),
                hy('Bethel', 'hebrew-bethel'),
                t(': but the name of that city was called Luz at the first.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-yahweh-place',
          html:
            'Jacob wakes trembling. He did not know. He was sleeping on holy ground and did not know it. This is the texture of the dream&apos;s grace: God was there the whole time, standing above him, speaking to him, while Jacob slept on a stone. The recognition comes after - not during the blessing, but when he wakes and understands what happened.',
        },
        {
          kind: 'commentary',
          id: 'c-dreadful',
          html:
            '&ldquo;How dreadful is this place.&rdquo; Not <em>lovely</em> or <em>wonderful</em>, but <em>dreadful</em> - full of dread, because the holy is fearsome. Jacob has been in God&apos;s presence and survived. The awe and the terror are the same feeling.',
        },
        {
          kind: 'commentary',
          id: 'c-pillar',
          html:
            'Jacob takes the stone he slept on and sets it up as a pillar. The stone becomes a monument, a marker of what happened. What was just a hard surface under his head becomes a memorial to grace.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-bethel',
          title: 'Bethel - &ldquo;house of God&rdquo;',
          script: 'בֵּית־אֵל',
          translit: '<strong>beit-el</strong> · the house / dwelling of God',
          description:
            'Jacob names the place after his dream. It is not the city&apos;s old name (that was Luz); it is the name for what the place means now. The man has named the city after his encounter with the divine. Later, a temple will stand on this spot - the place where earth and heaven touched in a dream becomes the place where earth and heaven meet in stone.',
        },
        {
          kind: 'christ',
          id: 'christ-gate',
          title: 'Christ Connection - The Door',
          html:
            'Jacob says, &ldquo;This is the gate of heaven.&rdquo; Later, Jesus will say, &ldquo;I am the door: by me if any man enter in, he shall be saved&rdquo; (John 10:9). The gate Jacob found in a dream is the Person Jesus revealed Himself to be. Not a place, but a way. Not a locked door, but an open one - and the gate-keeper Himself is standing at it, inviting people through.',
        },
        {
          kind: 'carry',
          html:
            'Bethel marks a turning point. Jacob woke up. He did not go back to sleep and pretend the dream was just a dream. He rose early, took the stone he&apos;d slept on, and made it a pillar - a monument to the night he found out God was there. The smallest stone in your pocket can become a memorial. A moment you almost forgot can become a place you return to. Name it. Mark it. Let it mark you.',
        },
        {
          kind: 'reflection',
          id: 'gen28-bethel',
          prompt:
            'Is there a Bethel in your story - a moment when you woke up and realized God was there? What would it mean to mark it, the way Jacob marked his stone?',
        },
      ],
    },

    /* ─── Genesis 28:20-22 - Jacob&apos;s Vow ────────────────────────── */
    {
      ref: 'Genesis 28:20-22',
      title: 'Jacob Still Bargains',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 20,
              spans: [
                t('And Jacob vowed a vow, saying, '),
                hg('If God will be with me, and will keep me in this way that I go, and will give me bread to eat, and raiment to put on', 'c-if'),
                t(','),
              ],
            },
            {
              number: 21,
              spans: [
                t('So that I come again to my father&apos;s house in peace; '),
                hp('then shall the LORD be my God', 'christ-covenant'),
                t(':'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And '),
                hg('this stone, which I have set for a pillar, shall be God&apos;s house', 'c-stone-house'),
                t(': and of all that thou shalt give me I will surely give the tenth unto thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-if',
          html:
            'Jacob has just had an encounter with the living God. The LORD has stood above him and spoken promises. And now Jacob says, <em>If</em>. <em>If</em> you will be with me, <em>if</em> you will keep me, <em>if</em> you will give me bread and clothes, <em>then</em> I will make you my God. It reads transactional. A contract. Jacob has not yet learned what grace is. He is still trying to earn his way home.',
        },
        {
          kind: 'commentary',
          id: 'c-stone-house',
          html:
            'Jacob says the stone will be God&apos;s house, and anything God gives him, he will tithe. He is trying to formalize the relationship, to make it legal, to put God in a contract he thinks he can understand. The vow is not wrong - vows matter in Scripture - but it reveals that Jacob is still Jacob. He is still the boy who thought he could manipulate blessing into his hands. Grace has found him, but he has not yet trusted it.',
        },
        {
          kind: 'christ',
          id: 'christ-covenant',
          title: 'Christ Connection - The Better Covenant',
          html:
            'Jacob says, &ldquo;then shall the LORD be my God.&rdquo; He is making a conditional covenant: <em>if</em> God keeps His side, Jacob will keep his. But the covenant God makes with His people through Jesus is not conditional on their performance. &ldquo;I will be your God, and you shall be my people&rdquo; (Jer. 31:33) - not <em>if</em> you obey, but <em>I am.</em> What Jacob could not yet see is that God was already keeping His word before Jacob ever promised anything. The ladder was open. The promise was spoken. Grace comes first.',
        },
        {
          kind: 'carry',
          html:
            'If you are still trying to earn your way into God&apos;s keeping - if you tithe to stay blessed, pray to avoid punishment, perform to stay loved - you are still in Jacob&apos;s place on that stone. The vow is not wrong; the heart that makes it is incomplete. God is not waiting for you to get good enough to keep Him. He is already keeping you while you&apos;re still bargaining. The deal He made does not depend on your end of the bargain being perfect.',
        },
        {
          kind: 'reflection',
          id: 'gen28-vow',
          prompt:
            'What conditions have you been putting on your trust in God? What would shift if you let Him be God without the &ldquo;if&rdquo;?',
        },
      ],
    },
  ],
};
