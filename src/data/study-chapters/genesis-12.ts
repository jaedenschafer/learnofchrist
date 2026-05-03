import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 12 — the call of Abram and the threefold promise: land, seed, blessing.
 *
 * Genesis 1–11 traces humanity's fall and scattering across the earth, culminating
 * in the Tower of Babel. Genesis 12 opens a new chapter: God speaks to an old man
 * in Mesopotamia and begins to gather a people. Every nation that will be blessed
 * will be blessed *through* this man's offspring. The promise of Genesis 3:15 — that
 * one descendant would crush the serpent's head — now takes shape. Abram doesn't yet
 * know how, but God calls him to move, to believe, to wait for a son. The journey
 * begins with altars and ends in Egypt, where Abram's faith will be tested in ways
 * that echo down to the Exodus itself.
 */
export const GENESIS_12: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 12,

  estimatedMinutes: { 5: 6, 10: 10, 15: 13 },
  intros: [
    'Genesis 12 marks a pivot in the Bible&apos;s story. The first eleven chapters show the world falling apart: Adam and Eve eat the forbidden fruit; their son murders his brother; humanity grows so wicked that God floods the earth; the survivors build a tower to reach heaven and are scattered across the land, their languages confused. Chapter 12 opens with God saying something no one has heard before: <em>Get thee out</em> — and with that command, salvation history begins.',
    'A man named Abram, seventy-five years old, receives a call. Leave your country. Leave your family. Go to a land I will show you. And if you go, I will make you a great nation. I will bless you. I will make your name great. And in you, all the families of the earth shall be blessed. It is a promise that sounds impossible. Abram has no son. He is old. His wife is barren. But he goes. And as he travels from Mesopotamia through Canaan to Egypt, altars rise up behind him — markers that God has kept His word to provide, to protect, and to be present.',
    'For the reader on this side of the cross, there is another name written underneath Abram&apos;s in invisible ink: Christ. The seed of Abraham will not be many; it will be One. The blessing of all nations will not come through a dynasty; it will come through a Man who died to bring the Gentiles into covenant. And the wilderness journey of Abram, learning to trust God without seeing the destination — that same journey is the life of faith the whole church is now called to walk.',
  ],

  opener: {
    matchTitle: /abram|abraham.*journey|call/i,
    matchArtist: /tissot|rembrandt/i,
    caption: 'Genesis 12 — A New Beginning',
  },

  bottomShare: {
    label: 'Share Genesis 12',
    quote:
      'God called Abram to leave his country and go to a land He would show him. I will make you a great nation, God said, and in you all the families of the earth shall be blessed. Abram believed and went, and God kept His promise.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 12 · Study Guide',
  },

  sections: [
    /* ─── Genesis 12:1–3 — The Call and the Threefold Promise ────────── */
    {
      ref: 'Genesis 12:1–3',
      title: 'The Call and the Promise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 1,
              spans: [
                t('Now the LORD had said unto Abram, '),
                hy('Get thee out of thy country, and from thy kindred, and from thy father&apos;s house', 'hebrew-lekh-lekha'),
                t(', unto a land that I will shew thee:'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And I will make of thee '),
                hp('a great nation', 'christ-seed'),
                t(': and I will '),
                hg('bless thee', 'c-bless'),
                t(', and '),
                hg('make thy name great', 'c-name'),
                t('; and thou shalt be a '),
                hg('blessing', 'c-vessel'),
                t(':'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And '),
                hp('I will bless them that bless thee, and curse him that curseth thee', 'c-covenant-sign'),
                t(': and in thee shall '),
                hp('all families of the earth be blessed', 'christ-nations'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-lekh-lekha',
          title: 'Lekh-Lekha — &ldquo;Get thee out&rdquo;',
          script: 'לֶךְ־לְךָ',
          translit: '<strong>lekh-lekha</strong> · go to/for yourself',
          description:
            'The famous opening is literally &ldquo;go to yourself&rdquo; — a peculiar phrasing in Hebrew. It is not just a command to move; it is an invitation to become. Abram must leave everything he is to discover who he will be. This journey is not just geography; it is transformation.',
        },
        {
          kind: 'commentary',
          id: 'c-bless',
          html:
            'God&apos;s promise comes in a cascade: <em>I will bless you. I will make your name great. You shall be a blessing.</em> The first is reception; the second, reputation; the third, a vocation. Blessing is not wealth alone or fame alone. It is God&apos;s presence and favor moving through you toward others.',
        },
        {
          kind: 'commentary',
          id: 'c-name',
          html:
            'In the ancient world, &ldquo;name&rdquo; meant reputation, legacy, the echo a life leaves behind. God promises Abram will not fade into history. But the irony is deep: the greatest thing about Abram&apos;s name is not what he built for himself, but the Covenant and the God who carries it forward through his offspring.',
        },
        {
          kind: 'commentary',
          id: 'c-vessel',
          html:
            'God doesn&apos;t just bless Abram; He makes him a conduit. His blessing is meant to spill over into the lives of others. This is the heart of covenant: you are blessed so that blessing flows from you.',
        },
        {
          kind: 'christ',
          id: 'christ-nations',
          title: 'Christ Connection — The Singular Seed of Abraham',
          html:
            'Paul reads this verse with precision: &ldquo;Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, <em>And to thy seed, which is Christ</em>&rdquo; (Gal. 3:16). The blessing of all nations does not come through Abraham&apos;s biological descendants alone, but through <em>one</em> descendant — the promised Messiah. When Jesus rose, the promise that all families of the earth would be blessed in Abraham began to be fulfilled. A Gentile who believes in Christ is now, Paul says, a son of Abraham and an heir to the promise (Gal. 3:29).',
        },
        {
          kind: 'carry',
          html:
            'Abram didn&apos;t know where he was going. He had no map, no safety net, and no guarantee. What he had was a word from God and a decision to move. This week, you may be standing at your own <em>lekh-lekha</em> — a call to leave behind a way of life that feels safe because you trust what you are being called toward. You may not see the full land yet. That&apos;s okay. The question is not whether you know the destination. It&apos;s whether you trust the One who calls.',
        },
        {
          kind: 'reflection',
          id: 'gen12-call',
          prompt:
            'What might God be calling you to leave behind? What would it mean to believe that what He is calling you toward is more real than what you are leaving?',
        },
      ],
    },

    /* ─── Genesis 12:4–6 — The Journey to Canaan ────────────────────── */
    {
      ref: 'Genesis 12:4–6',
      title: 'Into the Land',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 4,
              spans: [
                t('So Abram departed, as the LORD had spoken unto him; and Lot went with him: and Abram was '),
                hy('seventy and five years old', 'c-age'),
                t(' when he departed out of Haran.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And Abram took Sarai his wife, and Lot his brother&apos;s son, and all their substance that they had gathered, and the souls that they had gotten in Haran; and they went forth to go into the land of Canaan; and into the land of Canaan they came.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Abram passed through the land unto the place of '),
                hy('Sichem', 'hebrew-moreh'),
                t(', unto the '),
                hy('plain of Moreh', 'hebrew-moreh'),
                t('. And the Canaanite was then in the land.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-age',
          html:
            'Abram is seventy-five. In the ancient world, seventy-five is not a fresh start; it is a epilogue. Yet this is when God calls him into the greatest adventure of his life. This detail matters. It tells you God&apos;s promises do not wait for you to be young enough, strong enough, or ready enough.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-moreh',
          title: 'Moreh — &ldquo;the oak of Moreh&rdquo;',
          script: 'מוֹרֶה',
          translit: '<strong>moreh</strong> · oak, terebinth (a large, distinctive tree)',
          description:
            'The plain of Moreh is marked by an ancient oak tree, a landmark that would have been visible from far away. Later, other biblical leaders will stand at sacred oaks to renew covenant. Here, at the oak of Moreh, Abram enters the land God promised.',
        },
        {
          kind: 'commentary',
          id: 'c-arrival',
          html:
            'The text pauses to note: &ldquo;And the Canaanite was then in the land.&rdquo; Abram arrives to discover the land is not empty. It is inhabited by others, by people with their own gods and claims. The journey is not a conquest yet; it is a pilgrimage through a foreign land, a tent-dweller among the established.',
        },
        {
          kind: 'carry',
          html:
            'When Abram entered Canaan, he was a stranger. He had no deed to the land, no city walls, no armies. He had only the promise of God and a tent. The people around him had homes; he had altars. In your own life, following Christ often means being the stranger in the place where others are settled. The promise is not that you will never feel alien; it is that you belong to something greater than the place you are standing in.',
        },
        {
          kind: 'reflection',
          id: 'gen12-stranger',
          prompt:
            'How do you experience being a "stranger" in a world that often feels settled in other gods — success, security, comfort? What does it mean to let that estrangement remind you that you belong to somewhere deeper?',
        },
        {
          kind: 'artwork',
          matchTitle: /abraham.*journey|abram.*canaan|patriarch/i,
          caption: 'Genesis 12:4–6 · The Journey Begins',
        },
      ],
    },

    /* ─── Genesis 12:7–9 — Altars ────────────────────────────────────── */
    {
      ref: 'Genesis 12:7–9',
      title: 'The First Altar',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 7,
              spans: [
                t('And the LORD appeared unto Abram, and said, '),
                hp('Unto thy seed will I give this land', 'c-land-promise'),
                t(': and there builded he an '),
                hg('altar unto the LORD', 'c-altar-1'),
                t(', who appeared unto him.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And he removed from thence unto a mountain on the east of Bethel, and pitched his tent, having Bethel on the west, and Hai on the east: and there he '),
                hg('builded an altar unto the LORD', 'c-altar-2'),
                t(', and called upon the name of the LORD.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And Abram journeyed, going on still toward the south.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-altar-1',
          html:
            'The first thing Abram does when God appears is build an altar. Not to his own achievement. Not to memorialize his arrival. But to the God who appeared to him. Altars in Scripture are always responses — thanksgiving, prayer, or sacrifice offered up to the Almighty. An altar says: <em>I saw you here. This place is holy.</em>',
        },
        {
          kind: 'commentary',
          id: 'c-altar-2',
          html:
            'At Bethel, Abram builds a second altar. It is the pattern of his life: to move, to worship, to move again. The Canaanites had sanctuaries carved into the landscape — Abram has only a tent and an altar. The land belongs to others still; it will not be his or his son&apos;s. It will be his grandson&apos;s. Faith means building altars on land you don&apos;t yet own, in trust that the promise will come to pass.',
        },
        {
          kind: 'carry',
          html:
            'An altar is where you make something visible to heaven. It is a marker of the sacred in the everyday. You may never build a stone altar, but you can build one in your day: a moment of prayer before a meeting, a conversation about faith with a friend, a Sabbath table where God&apos;s presence is acknowledged. These small altars, multiplied across your life, are how you mark out the holy ground you are standing on.',
        },
        {
          kind: 'reflection',
          id: 'gen12-altar',
          prompt:
            'Where in your week do you build an altar — a moment where you make your faith in God visible? Where might you add one more?',
        },
      ],
    },

    /* ─── Genesis 12:10–20 — The Descent to Egypt ────────────────────── */
    {
      ref: 'Genesis 12:10–20',
      title: 'A Trial in Egypt',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 10,
              spans: [
                t('And there was a famine in the land: and Abram went down into Egypt to sojourn there; for the famine was grievous in the land.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And it came to pass, when he was come near to enter into Egypt, that he said unto Sarai his wife, '),
                hg('Behold now, I know that thou art a fair woman to look upon', 'c-fear'),
                t(':'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Therefore it shall come to pass, when the Egyptians shall see thee, that they shall say, This is his wife: and they will kill me, but they will save thee alive.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Say, I pray thee, thou art my '),
                hg('sister', 'c-deception'),
                t(': that it may be well with me for thy sake; and my soul shall live because of thee.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And it came to pass, that, when Abram was come into Egypt, the Egyptians beheld the woman that she was very fair.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('The princes also of Pharaoh saw her, and commended her before Pharaoh: and the woman was taken into Pharaoh&apos;s house.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And he entreated Abram well for her sake: and he had sheep, and oxen, and he asses, and menservants, and maidservants, and she asses, and camels.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the LORD '),
                hp('plagued Pharaoh and his house with great plagues', 'c-protection'),
                t(' because of Sarai Abram&apos;s wife.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And Pharaoh called Abram and said, What is this that thou hast done unto me? why didst thou not tell me that she was thy wife?'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Why saidst thou, She is my sister? so I might have taken her to me to wife: now therefore behold thy wife, take her, and go thy way.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Pharaoh commanded his men concerning him: and they sent him away, and his wife, and all that he had.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fear',
          html:
            'Abram has just built altars and heard the promise of God. But when famine strikes, his faith falters. The logic seems reasonable: Sarai is beautiful; Egyptians will want her; they will kill him to take her. So he asks Sarai to call herself his sister. It is a half-truth that conceals betrayal. He is willing to let his wife go to save his own skin.',
        },
        {
          kind: 'commentary',
          id: 'c-deception',
          html:
            'The text does not moralize here. It does not condemn Abram outright or blame Sarai. Instead, it shows the consequence of fear: a man willing to sacrifice his wife&apos;s honor for his own safety; a woman whose protection becomes the price tag on her husband&apos;s life. The descent into Egypt is a descent into the logic of the world — where survival justifies betrayal.',
        },
        {
          kind: 'christ',
          id: 'c-protection',
          title: 'Christ Connection — God Protects When Faith Fails',
          html:
            'What is remarkable is that God does not abandon Abram to the consequences of his fear. God sends plagues on Pharaoh&apos;s house to protect Sarai. It is a pattern the Bible will return to: the Exodus, where God sends plagues on Pharaoh again to rescue His people. The difference is that Abram&apos;s faith is still fragile, his motives still mixed — and God protects him anyway. Paul puts this at the center of salvation: &ldquo;For when we were yet without strength, in due time Christ died for the ungodly&rdquo; (Rom. 5:6). God&apos;s protection does not wait for our faith to be perfect; He moves to protect us in the very moment of our weakness.',
        },
        {
          kind: 'carry',
          html:
            'There is a famine in your life somewhere — a season of scarcity that makes you afraid, that tempts you to hold back truth or betray someone you love for the sake of self-preservation. In that moment, the question is not whether you are a person of perfect faith. The question is whether you believe God can protect you without your schemes. Abram&apos;s deception did not save him. God did.',
        },
        {
          kind: 'reflection',
          id: 'gen12-egypt',
          prompt:
            'When have you been tempted to use half-truth or deception to protect yourself from a feared outcome? What might change if you believed God could protect you without your help?',
        },
        {
          kind: 'artwork',
          matchTitle: /abram|abraham.*egypt|pharaoh|descent/i,
          caption: 'Genesis 12:10–20 · A Trial in Egypt',
        },
      ],
    },
  ],

  hasHebrew: true,
};
