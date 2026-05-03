import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 21 — Isaac is born (laughter), the long-promised son finally arrives.
 * But the promise-by-faith line and the promise-by-flesh line must be separated.
 *
 * Abraham's distress at sending away Hagar and Ishmael is genuine and painful.
 * God tells him to listen to Sarah and promises to make Ishmael a nation too.
 *
 * In the wilderness, Hagar and Ishmael nearly perish. The water runs out. God
 * hears the boy crying — His name means "God hears" — and opens her eyes to see
 * a well. An unlikely salvation for the discarded.
 *
 * The chapter closes with Abraham's covenant with Abimelech at Beersheba, the
 * "well of the oath."
 */
export const GENESIS_21: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 21,

  estimatedMinutes: { beginner: 8, intermediate: 11, deep: 16 },
  intros: [
    'The long-promised son finally arrives. Sarah, who has been barren for nearly a century, gives birth. The child&apos;s name is <em>Isaac</em> — <em>Yitzchak</em> in Hebrew — which means &ldquo;he laughs.&rdquo; Sarah had laughed in disbelief when God first promised him (Gen. 18:12); now she laughs again, but this time in joy (Gen. 21:6). The son born of faith, born of God&apos;s covenant word when all biology said no, is here.',
    'But Genesis 21 is not a clean happy ending. At Isaac&apos;s weaning feast, Sarah sees Ishmael, the son Abraham had made with Hagar, and she demands that both mother and boy be cast out. Abraham is distressed — he loves Ishmael — but God tells him to listen to Sarah. Two sons cannot inherit the same promise. The line of flesh (Ishmael, born of Abraham&apos;s attempt to fulfill the covenant by human means) and the line of faith (Isaac, born when it was physically impossible) must be separated. The division is painful for everyone, and the text does not hide that pain.',
    'The casting out is genuinely difficult, and Genesis does not ask us to admire it. But in the desert, where Hagar and Ishmael are left to die, the text asks us to see something: a God who hears the cry of the discarded child. The boy whose name [res:bibleodyssey-abraham-covenant] means &ldquo;God hears&rdquo; is heard in the very place where he has been thrown away. It is one of Scripture&apos;s recurring truths: God sees those no one else sees, and He hears those no one else hears.',
  ],

  bottomShare: {
    label: 'Share Genesis 21',
    quote:
      'God hath made me to laugh, and all that hear will laugh with me. And Abraham was an hundred years old when his son Isaac was born unto him. But the God who casts out the discarded mother and son in the wilderness opens Hagar&apos;s eyes to see a well, and makes of Ishmael a nation also.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 21 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-21',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 21 · Hebrew + Jewish commentary',
      url: 'https://www.sefaria.org/Genesis.21',
      description: 'Hebrew text with rabbinic commentary on Isaac&apos;s birth, Hagar&apos;s vindication, and the separation of two covenant lines.',
    },
    {
      id: 'pennmuseum-abraham-era',
      kind: 'museum',
      source: 'Penn Museum',
      label: 'Mari & Nuzi Tablets (Abraham&apos;s era)',
      url: 'https://www.penn.museum/collections/west-asia/',
      description: 'Ancient Near Eastern documents on family inheritance, the status of sons born to servants, and covenant relationships.',
    },
    {
      id: 'bibleodyssey-abraham-covenant',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Abraham and the Covenant',
      url: 'https://www.bibleodyssey.org/articles/abraham-sarah/',
      description: 'SBL article on the promise fulfilled in Isaac, the covenant line, and God&apos;s hearing of the rejected.',
    },
  ],

  sections: [
    /* ─── Genesis 21:1–8 — Isaac Is Born and Weaned ──────────────────── */
    {
      ref: 'Genesis 21:1–8',
      title: 'Isaac Is Born',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD visited Sarah as he had said, and the LORD did unto Sarah as he had spoken.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('For Sarah conceived, and bare Abraham a son in his old age, at the set time of which God had spoken unto him.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And Abraham called the name of his son that was born unto him, whom Sarah bare to him, '),
                hy('Isaac', 'hebrew-yitzchak'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And Abraham circumcised his son Isaac being eight days old, as God had commanded him.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And Abraham was an hundred years old when his son Isaac was born unto him.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Sarah said, '),
                hp('God hath made me to laugh', 'christ-laughter'),
                t('; so that all that hear will laugh with me.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And she said, Who would have said unto Abraham, that Sarah should have given children suck? for I have born him a son in his old age.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the child grew, and was '),
                t('weaned'),
                t(': and Abraham made a great feast the same day that Isaac was weaned.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-promise',
          html:
            'The chapter opens with the simplest sentence in Scripture: &ldquo;The LORD visited Sarah as he had said.&rdquo; Every verse up to this point has been God saying it, Abram doubting, Abram trying to help God out, Abram growing old. Now the text turns a corner: <em>and the LORD did.</em> The promise kept. The son born when Sarah was too old to conceive, when Abraham was a hundred. The waiting is over[res:sefaria-genesis-21][res:pennmuseum-abraham-era].',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yitzchak',
          title: 'Yitzchak — &ldquo;Isaac&rdquo;',
          script: 'יִצְחָק',
          translit: '<strong>yitzchak</strong> · he laughs',
          description:
            'The name appears for the first time in Genesis 17, when Abraham falls on his face and laughs. Then Sarah laughs when she overhears the promise. Now Isaac is born, and his mother laughs again. The child&apos;s existence is laughter — first in disbelief, then in joy. The name is the family&apos;s inside joke.',
        },
        {
          kind: 'christ',
          id: 'christ-laughter',
          title: 'Christ Connection — The Joy of the Impossible',
          html:
            'Sarah laughs at the promise; Isaac is born. Paul later tells the story of two sons — one born of flesh, one born of promise — and applies it to the old covenant and the new (Gal. 4:21–31). Isaac is the son of laughter, the son of what God alone could do. He is the type of everyone the gospel is for: those who have waited past the age of trying, who have given up on themselves, and who discover that God was never waiting for them to deserve it. The laughter of Sarah is the laughter of the redeemed: &ldquo;Blessed is the people that know the joyful sound&rdquo; (Ps. 89:15).',
        },
        {
          kind: 'carry',
          html:
            'Every promise you have waited for — every delayed answer, every "no, not yet, not in the way you planned" — is an Isaac waiting to be born. The time when God shows up and does what you stopped believing He would do. If you are in the long wait, Sarah&apos;s laughter is a promise that it has an ending. If you are looking back on a prayer God finally answered, that laughter is yours too.',
        },
        {
          kind: 'reflection',
          id: 'gen21-birth',
          prompt:
            'Where have you been waiting so long that you stopped believing? What would it look like to recognize, if the promise came, that it was His doing and not the result of your own effort?',
        },
      ],
    },

    /* ─── Genesis 21:9–14 — The Casting Out ───────────────────────────── */
    {
      ref: 'Genesis 21:9–14',
      title: 'The Hard Word',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 9,
              spans: [
                t('And Sarah saw the son of Hagar the Egyptian, which she had born unto Abraham, '),
                hg('mocking', 'c-mocking'),
                t('.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Wherefore she said unto Abraham, Cast out this bondwoman and her son: for the son of this bondwoman shall not be heir with my son, even with Isaac.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the thing was very grievous in Abraham&apos;s sight '),
                hy('because of his son', 'c-abraham-grieved'),
                t('.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And God said unto Abraham, Let it not be grievous in thy sight because of the lad, and because of thy bondwoman; in all that Sarah hath said unto thee, hearken unto her voice; for in Isaac shall thy seed be called.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And also of the son of the bondwoman will I make a nation, because he is thy seed.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And Abraham rose up early in the morning, and took bread, and a bottle of water, and gave it unto Hagar, putting it on her shoulder, and the child, and '),
                hp('sent her away', 'christ-rejection'),
                t(': and she departed, and wandered in the wilderness of Beersheba.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mocking',
          html:
            'Sarah sees Ishmael mocking — either at the weaning feast or in some other moment. The text does not ask us to sympathize with Sarah&apos;s response. She is jealous, protective, and wrong to treat Hagar and Ishmael as disposable. And yet the structure of the covenant is real: two sons cannot inherit the same promise. The line of faith (Isaac) and the line of flesh (Ishmael, made when Abraham tried to help God out) must be divided. Divorce is never clean. Neither is this separation.',
        },
        {
          kind: 'commentary',
          id: 'c-abraham-grieved',
          html:
            'The text tells us Abraham is grieved. He loves Ishmael. He has been present for thirteen years. To send him away into the desert with only bread and water is not justice — it is abandonment. Abraham does what Sarah asks, but his heart breaks. The Bible does not ask us to be hard about this moment. It is hard. The text sits with it.',
        },
        {
          kind: 'christ',
          id: 'christ-rejection',
          title: 'Christ Connection — Two Sons, Two Covenants',
          html:
            'Paul reads this chapter in Galatians 4 and sees what the Old Testament saw: Ishmael is the son of the flesh (born when Abraham took matters into his own hands); Isaac is the son of the promise (born by God&apos;s word alone). &ldquo;So then, brethren, we are not children of the bondwoman, but of the free&rdquo; (Gal. 4:31). The casting out of Hagar and Ishmael is the end of trying to earn the covenant by works. The promise goes to the son born of faith. But note: God does not reject Ishmael. He promises to make him a great nation too. Both lines continue; they simply cannot share the same inheritance.',
        },
        {
          kind: 'carry',
          html:
            'There are separations in your spiritual life that feel as hard as this one — old ways of thinking that have to go, relationships that cannot continue in the same form, seasons that have to close so new ones can open. The grief is real. You can be right about the boundary and still grieve the loss. Abraham rose up early, gave Hagar bread and water, and the text tells us his heart was broken doing it. That is how you know a boundary is real — it costs you.',
        },
        {
          kind: 'reflection',
          id: 'gen21-hard',
          prompt:
            'Where is God asking you to separate yourself from something — an old way of thinking, a relationship that has to change, a season that is ending? Can you name both what is true about the boundary AND the grief of it?',
        },
      ],
    },

    /* ─── Genesis 21:15–21 — God Hears the Boy ───────────────────────── */
    {
      ref: 'Genesis 21:15–21',
      title: 'God Hears in the Wilderness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 15,
              spans: [
                t('And the water was spent in the bottle, and she cast the child under one of the shrubs.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And she went, and sat her down over against him a good way off, as it were a bowshot: for she said, Let me not see the death of the child. And she sat over against him, and '),
                hg('lift up her voice, and wept', 'c-crying'),
                t('.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And God heard the voice of the lad; and the angel of God called to Hagar out of heaven, and said unto her, What aileth thee, Hagar? fear not; for God hath heard the voice of the lad where he is.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Arise, lift up the lad, and hold him in thine hand; for I will make him a great nation.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And God opened her eyes, and she '),
                hy('saw a well of water', 'hebrew-beer'),
                t('; and she went, and filled the bottle with water, and gave the lad drink.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And God was with the lad; and he grew, and dwelt in the wilderness, and became an archer.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And he dwelt in the wilderness of Paran: and his mother took him a wife out of the land of Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-crying',
          html:
            'The despair of Hagar is complete. The water is gone, the child is dying, and she cannot bear to watch. She sits at a distance and weeps. She is a woman who has lost everything: not only cast out, but about to lose her son. The text is unflinching about the cruelty of the moment.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shama',
          title: 'Shama — &ldquo;heard&rdquo;',
          script: 'שָׁמַע',
          translit: '<strong>shama</strong> · he heard',
          description:
            'The boy&apos;s name, Ishmael (Yishmael), is <em>God hears</em> — from this root. When the angel speaks to Hagar, the first words are &ldquo;God hath heard the voice of the lad where he is.&rdquo; His name is a promise that God listens. And in the wilderness, when there is no one left to care, the promise comes true. The boy whose name says God hears is heard.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-beer',
          title: 'Beer — &ldquo;well&rdquo;',
          script: 'בְּאֵר',
          translit: '<strong>beer</strong> · a well',
          description:
            'God does not rescue Hagar and Ishmael with manna from heaven or a cloud by day. He opens her eyes to see a well that was there all along. In the gospel, when Jesus meets a woman at a well and speaks to her of water that springs up to everlasting life (John 4), the reader hears echoes of Hagar&apos;s well in the wilderness. God provides not by magic but by making what was hidden visible.',
        },
        {
          kind: 'christ',
          id: 'christ-well',
          title: 'Christ Connection — The Well in the Wilderness',
          html:
            'John 4 brings the Samaritan woman — another woman cast out, another widow alone — to a well at noon. Jesus says, &ldquo;If thou knewest the gift of God, and who it is that saith to thee, Give me to drink; thou wouldest have asked of him, and he would have given thee living water&rdquo; (John 4:10). The well in the wilderness where Hagar sees provision is a type of the well where Jesus offers Himself as living water. Both stories are about a God who finds those no one else sees, who quenches thirst no well can hold. Christ is the well.',
        },
        {
          kind: 'carry',
          html:
            'The wilderness you are in — where the water is gone and you cannot see a way forward — is not outside God&apos;s notice. Your crying is not unheard. God may not rescue you the way you asked for, or on the timeline you set. But He opens eyes. He makes visible what was there all along. The well is there. You are being seen by the only One who can save you.',
        },
        {
          kind: 'reflection',
          id: 'gen21-wilderness',
          prompt:
            'Where is a wilderness in your life right now — a place where the obvious provision has run out and you feel like you are dying? What would it mean to let God open your eyes to a well that was there?',
        },
        {
          kind: 'artwork',
          matchTitle: /hagar/i,
          matchArtist: /tissot/i,
          caption: 'Genesis 21:15–21 · God Hears the Boy in the Wilderness',
        },
      ],
    },

    /* ─── Genesis 21:22–34 — The Covenant at Beersheba ─────────────────── */
    {
      ref: 'Genesis 21:22–34',
      title: 'The Covenant at Beersheba',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 22,
              spans: [
                t('And it came to pass at that time, that Abimelech and Phichol the chief captain of his host spake unto Abraham, saying, God is with thee in all that thou doest:'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Now therefore swear unto me here by God that thou wilt not deal falsely with me, nor with my son, nor with my son&apos;s son: but according to the kindness that I have done unto thee, thou shalt do unto me, and to the land wherein thou hast sojourned.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And Abraham said, I will swear.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And Abraham reproved Abimelech because of a well of water, which Abimelech&apos;s servants had violently taken away.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And Abimelech said, I wot not who hath done this thing: thou didst not tell me, neither yet heard I of it, but to day.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And Abraham took sheep and oxen, and gave them unto Abimelech; and both of them made a covenant.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And Abraham set seven ewe lambs of the flock by themselves.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And Abimelech said unto Abraham, What mean these seven ewe lambs which thou hast set by themselves?'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And he said, For these seven ewe lambs shalt thou take of my hand, that they may be a witness unto me, that I have digged this well.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('Therefore he called that place '),
                hy('Beersheba', 'hebrew-beersheba'),
                t('; because there they sware both of them.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('Thus they made a covenant at Beersheba: and Abimelech rose up, and Phichol the chief captain of his host, and they returned into the land of the Philistines.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And Abraham planted a '),
                hg('grove in Beersheba', 'c-grove'),
                t(', and called there on the name of the LORD, the everlasting God.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And Abraham sojourned in the land of the Philistines many days.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-abimelech',
          html:
            'Abimelech recognizes that God is with Abraham and wants a binding covenant. The well that Abimelech&apos;s servants had taken becomes the occasion for a formal agreement. Abraham plants a grove and calls on the name of the LORD, the everlasting God. The chapter moves from crisis (Hagar and Ishmael in the wilderness) to stability (a covenant that will hold).',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-beersheba',
          title: 'Beersheba — &ldquo;well of the oath&rdquo;',
          script: 'בְּאֵר שֶׁבַע',
          translit: '<strong>beersheba</strong> · well (beer) of seven (sheba) or oath (sheba)',
          description:
            'The name works two ways: Beer Sheva can mean "well of seven" (Abraham gives seven lambs as a witness) or "well of the oath" (sheba can mean oath). The place where the oath is sworn is also a place where a well—fresh water, life itself—is secured and witnessed. This will be Abraham&apos;s home.',
        },
        {
          kind: 'commentary',
          id: 'c-grove',
          html:
            'Abraham plants a <em>grove</em> — not a tree but a cluster of trees — a place where others can rest and find shade. He calls on the name of the LORD, the <em>everlasting God</em> (El Olam in Hebrew). After the hard word, the separation, the wilderness, the text brings us to a place of witness and stability. Abraham has seen God provide. He testifies to it by planting a grove and naming the place after what God gave him.',
        },
        {
          kind: 'carry',
          html:
            'The chapter closes not with closure but with survival and establishment. Abraham plants a grove for the next thirsty traveler. He names a well after the oath it witnessed. He dwells. In your own hard transitions — the ones that grieve you, the wildernesses that seem endless — there comes a time when God brings you to a place where you can plant something, testify to what He did, and make a covenant. Your story becomes a well that waters the next person who is thirsty.',
        },
        {
          kind: 'reflection',
          id: 'gen21-beersheba',
          prompt:
            'Where has God been faithful to you despite your circumstances? What would it look like to plant a grove there — to testify to His faithfulness in a way that might refresh someone else?',
        },
      ],
    },
  ],
};
