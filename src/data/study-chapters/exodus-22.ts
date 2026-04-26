import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 22 — Property laws and the heart of the law: kindness to the
 * sojourner, widow, and orphan. No usury on loans to the poor. Return a
 * poor man&apos;s cloak by sundown.
 *
 * The chapter opens with property laws — theft, strays, loans — then pivots
 * to reveal the law&apos;s true heartbeat: Israel&apos;s memory of Egypt. "Ye were
 * strangers in the land of Egypt." God&apos;s law is less interested in
 * punishment than in restoration. He rests on memory, not rules.
 */
export const EXODUS_22: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 22,

  intros: [
    'Exodus 22 opens with property laws. What if someone steals your ox? What if a field is grazed bare? What if you borrow something and it breaks? But the chapter has a hidden hinge. Halfway through, the laws shift from objects to people — sojourners, widows, orphans. And every time they do, God says the same thing: remember Egypt.',
    'The law&apos;s heart is not punishment, but restoration. Return a borrowed item whole. Pay back a loan before sunset so a poor man can eat. Don&apos;t oppress the stranger, because you were strangers once. It&apos;s a law written on memory. And it points toward Jesus, who came as Restorer of all things — making whole what was broken, returning what was lost, inviting the outsider back in.',
  ],

  bottomShare: {
    label: 'Share Exodus 22',
    quote:
      'God&apos;s law protects the weak and the outsider. The sojourner, the widow, the orphan — they stand at the center of His concern. Remember your own exile, He says. Show kindness, not because the law demands it, but because you know what it means to be without a home.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 22 · Study Guide',
  },

  sections: [
    /* ─── Exodus 22:1–4 — Theft and Restitution ──────────────────────── */
    {
      ref: 'Exodus 22:1–4',
      title: 'Theft and Restitution',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 1,
              spans: [
                t('If a man shall steal an ox, or a sheep, and kill it, or sell it; he shall restore '),
                hg('five oxen', 'c-fivefold'),
                t(' for an ox, and '),
                hg('four sheep', 'c-fivefold'),
                t(' for a sheep.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fivefold',
          html:
            'The thief must make five-fold restitution — not because the law is cruel, but because the victim has lost not only the animal, but the labor, the livelihood, the future it would have produced. Restitution is not punishment; it is <em>restoration</em>. The debt is what it takes to make the person whole again.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 2,
              spans: [
                t('If a thief be found breaking up, and be smitten that he die, '),
                hg('there shall no blood be shed for him', 'c-homeowner'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('If the sun be risen upon him, '),
                hg('there shall be blood shed for him', 'c-homeowner'),
                t('; for he should make full restitution; if he have nothing, then he shall be sold for his theft.'),
              ],
            },
            {
              number: 4,
              spans: [t('If the theft be certainly found in his hand alive, whether it be ox, or ass, or sheep; he shall restore double.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-homeowner',
          html:
            'The law distinguishes between night-theft and day-theft. At night, a man defending his home who kills a thief has done no wrong — the darkness makes intent unknowable. By day, the killing is unjustified, because the person could be apprehended another way. The law protects not only property, but life, by keeping force proportional to the true harm.',
        },
        {
          kind: 'carry',
          html:
            'When something of yours is taken — time, reputation, trust, a promise broken — your first instinct may be punishment. But the law that opens Exodus 22 is fixed on <em>restoration.</em> What would it take to make you whole again? That is the real debt. Sometimes it is not money, but apology, change, time, or even letting the wrong person go. Jesus teaches this same principle when He tells us to give back more than what was stolen, to love the one who took from us, to be <em>restored</em> together.',
        },
        {
          kind: 'reflection',
          id: 'theft-rest',
          prompt:
            'What has been taken from you that still needs restoring? What would real restitution look like — not punishment, but wholeness?',
        },
      ],
    },

    /* ─── Exodus 22:5–8 — Damage and Disputes ────────────────────────── */
    {
      ref: 'Exodus 22:5–8',
      title: 'Damage, Disputes, and Trust',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 5,
              spans: [
                t('If a man shall cause a field or vineyard to be eaten, and shall let his beast loose, and he shall feed in another man&apos;s field; of the '),
                hg('best of his own field', 'c-proportion'),
                t(' and of the best of his own vineyard shall he make restitution.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('If fire break out, and catch in thorns, so that the stacks of corn, or the standing corn, or the field, be consumed therewith; he that kindled the fire shall surely make restitution.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-proportion',
          html:
            'Notice the pattern: the thief pays five-fold, the careless neighbor pays from his <em>best</em> grain — proportional to the negligence, not the damage. And throughout, the law assumes that some harm is<em>accidental.</em> A man loses a borrowed tool through honest use. A field is grazed because a fence failed. The law makes room for ordinary human error.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 7,
              spans: [
                t('If a man shall deliver unto his neighbour money or stuff to keep, and it be stolen out of the man&apos;s house; '),
                hy('if the thief be found, let him pay double', 'c-oath'),
                t(':'),
              ],
            },
            {
              number: 8,
              spans: [
                t('But if the thief be not found, then the master of the house shall be brought unto the judges, to see whether he have put his hand unto his neighbour&apos;s stuff:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-oath',
          html:
            'When property is entrusted to someone else, disputes arise. The law sends both parties to the judges — to God, ultimately — rather than letting grievance fester. Community needs a way to resolve wrongs, or trust collapses. The judges exist to restore both the property <em>and</em> the relationship.',
        },
        {
          kind: 'carry',
          html:
            'Small wrongs — a borrowed thing forgotten, a commitment half-kept, a careless word — are the cracks where relationships start to break. The law in Exodus doesn&apos;t pretend these are nothing. But it also refuses to let them become permanent. It creates space for harm to be named, restitution made, and trust rebuilt. You probably have one such crack in a relationship right now. The law&apos;s wisdom is to name it, not to let it widen.',
        },
        {
          kind: 'reflection',
          id: 'damage-disp',
          prompt:
            'Is there a small wrong between you and someone else that has never been directly addressed? What would it take to restore that relationship?',
        },
      ],
    },

    /* ─── Exodus 22:9–15 — Loans, Pledges, and the Poor ────────────────────── */
    {
      ref: 'Exodus 22:9–15',
      title: 'The Poor, the Cloak, and Mercy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 9,
              spans: [
                t('For all manner of trespass, whether it be for ox, for ass, for sheep, for raiment, or for any manner of lost thing, which another challengeth to be his: the '),
                hg('cause of both parties', 'c-judges'),
                t(' shall come before the judges; and whom the judges shall condemn, he shall pay double unto his neighbour.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-judges',
          html:
            'The center of law in Israel is not the king&apos;s throne, but the <em>judges</em> — the community elders who sit at the gate and listen. Both parties speak. The judges weigh. Dispute is brought out into the light, not suppressed. A nation that refuses to resolve its small wrongs will not last long.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 10,
              spans: [
                t('If a man deliver unto his neighbour an ass, or an ox, or a sheep, or any beast, to keep; and it die, or be hurt, or driven away, no man seeing it:'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Then shall an '),
                hg('oath of the LORD', 'c-oath-lord'),
                t(' be between them both, that he hath not put his hand unto his neighbour&apos;s goods; and the owner of it shall accept thereof, and he shall not make it good.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-oath-lord',
          html:
            'An ox dies in someone&apos;s care. It may be theft. It may be accident. No witness. The law sends them both before God Himself — an oath before the Lord. The caretaker can swear his innocence; the owner must accept it. God becomes the judge when humans cannot see the heart.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 12,
              spans: [
                t('But if it be stolen from him, he shall make restitution unto the owner thereof.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('If it be torn in pieces, then let him bring it for witness, and he shall not make good that which was torn.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And if a man borrow ought of his neighbour, and it be hurt, or die, the owner thereof being not with it, he shall surely make it good.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('But if the owner thereof be with it, he shall not make it good: if it be an hired thing, it came for his hire.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-borrow',
          html:
            'The borrower assumes the risk — except when the owner is present, or when something is rented. You hired the ox knowing its risks. The owner is there if something happens. The law sorts risk by presence and consent. It treats people as responsible but also <em>reasonable</em>.',
        },
        {
          kind: 'carry',
          html:
            'When you borrow something, you accept its risk. When you loan something, you release your grip on it. The law assumes both lender and borrower are acting in good faith unless proven otherwise. Few relationships fracture over big betrayals. Most break over small loans never returned, borrowed things not cared for, and the silence that follows. Exodus 22 calls all of this out into the open and says: settle it, with witnesses and judges if needed, but <em>settle it.</em>',
        },
        {
          kind: 'reflection',
          id: 'borrow-loan',
          prompt:
            'Do you have something borrowed that still needs returning, or a loan you made that was never repaid? What is keeping you from asking for it back?',
        },
      ],
    },

    /* ─── Exodus 22:16–17 — Seduction ──────────────────────────── */
    {
      ref: 'Exodus 22:16–17',
      title: 'Integrity and Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 16,
              spans: [
                t('And if a man '),
                hy('entice a maid', 'c-entice'),
                t(' that is not betrothed, and lie with her, he shall surely '),
                hg('endow her to be his wife', 'c-endow'),
                t('.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('If her father utterly refuse to give her unto him, he shall pay money according to the dowry of virgins.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-entice',
          html:
            'The word is <em>pitah</em> — to persuade, seduce, entice. The law protects the girl from being used and abandoned. The man who takes her virginity assumes responsibility. He cannot simply walk away because he is bored or ashamed. <em>She</em> becomes central to his future, not a mistake to be forgotten.',
        },
        {
          kind: 'commentary',
          id: 'c-endow',
          html:
            'The bride-price is not the purchase of a woman; it is the declaration that she is <em>his wife,</em> with all the covenant that entails. He cannot endow her and then divorce her easily. He has assumed her into his family, her protection is now his responsibility, and her future is bound with his. The law makes their union a public, binding act.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ger',
          title: 'Ger — &ldquo;sojourner&rdquo;',
          script: 'גֵּר',
          translit: '<strong>ger</strong> · stranger, alien, one without citizenship or land',
          description:
            'The word returns in verse 21. Israel itself was <em>grim</em> — strangers — in Egypt. The law says the slave of memory must become the keeper of mercy. What happened to you becomes your calling to others.',
        },
        {
          kind: 'carry',
          html:
            'A promise made in secret, a relationship that was only physical — the law refuses to let it disappear. Someone&apos;s reputation, someone&apos;s future, has been changed. The man cannot pretend it didn&apos;t happen. He must either marry her or pay what her lost virginity cost her in that world. Integrity is not optional. It is the only way trust holds.',
        },
        {
          kind: 'reflection',
          id: 'entice-prom',
          prompt:
            'Is there a promise you made that you have been quietly ignoring? What would it take to make it right?',
        },
      ],
    },

    /* ─── Exodus 22:18–20 — Three Absolutes ──────────────────────────────── */
    {
      ref: 'Exodus 22:18–20',
      title: 'The Line: Three Absolutes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 18,
              spans: [t('Thou shalt not suffer a witch to live.')],
            },
            {
              number: 19,
              spans: [
                t('Whosoever '),
                hg('lieth with a beast', 'c-abomination'),
                t(' shall surely be put to death.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('He that '),
                hy('sacrificeth unto any god', 'c-gods'),
                t(', save unto the LORD only, shall be utterly destroyed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-abomination',
          html:
            'The law draws a line at the sacred and the broken. A witch is someone who tries to mediate with the divine outside covenant with God. Bestiality violates the order of creation. Sacrifice to other gods is covenant-breaking. These are not disputes to be settled or debts to be repaid. They are boundaries that, if crossed, dissolve the community altogether.',
        },
        {
          kind: 'commentary',
          id: 'c-gods',
          html:
            'Israel had just left Egypt, where the gods were endless and negotiable. The law says: no. One God. One covenant. You cannot have Him halfway. Other gods are not debatable alternatives; they are a covenant-breach. The punishment is severe because the consequence is cultural death — once other gods are in, the Law falls apart, and the covenant dissolves.',
        },
        {
          kind: 'carry',
          html:
            'Most of law is about restoring what is broken, settling disputes, and making whole what was damaged. But some things — lies about the source of authority, the violation of created order, the attempt to serve two kings — cannot be negotiated. There are lines. Knowing which is which is wisdom.',
        },
        {
          kind: 'reflection',
          id: 'absolutes',
          prompt:
            'Where are the non-negotiable lines in your own faith? What are the things you would never compromise on, and why?',
        },
      ],
    },

    /* ─── Exodus 22:21–27 — The Heart: The Vulnerable and the Vulnerable ────────────── */
    {
      ref: 'Exodus 22:21–27',
      title: 'The Heart of the Law: Remember Your Story',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 21,
              spans: [
                t('Thou shalt neither vex a '),
                hy('stranger', 'c-ger'),
                t(', nor oppress him: for ye were '),
                hp('strangers in the land of Egypt', 'c-egypt-mem'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ger',
          html:
            'The law pivots. It has been about property, about settling wrongs. Now it is about the people no one else will protect. The <em>ger</em> is someone without land, without family lines, without voice in the city gate. He is you — Israel — four hundred years ago. The law says: <em>remember.</em>',
        },
        {
          kind: 'christ',
          id: 'c-egypt-mem',
          title: 'Christ Connection — The Welcome of the Foreigner',
          html:
            'Jesus embodies Israel&apos;s entire law of mercy toward the outsider. He was born far from home, fled as a refugee to Egypt. He was called &ldquo;the friend of sinners,&rdquo; the one who ate with tax collectors and touched lepers — the strangers of His day. Matthew 25 makes it explicit: &ldquo;I was a stranger, and ye took me in… Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me&rdquo; (Matt. 25:35, 40). Every refugee, every outsider, every person without a home is Jesus Himself, asking to be known.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 22,
              spans: [
                t('Ye shall not afflict any widow, or fatherless child.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('If thou afflict them in any wise, and they cry at all unto me, I will surely hear their cry;'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And my wrath shall wax hot, and I will kill you with the sword; and your wives shall be widows, and your children fatherless.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-widow-orphan',
          html:
            'The widow and orphan have no one. In that ancient world, they are destitute. God says: do not harm them, because their cry comes straight to Me. He is not distant when it comes to the vulnerable. He is listening. And the language is fierce — <em>I will kill you.</em> God&apos;s mercy is not soft. It is the iron protection of a Father who hears every cry.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 25,
              spans: [
                t('If thou lend money to any of my people that is poor by thee, thou shalt not be to him as an usurer, '),
                hy('neither shalt thou lay upon him usury', 'c-usury'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-neshek',
          title: 'Neshek — &ldquo;usury&rdquo;',
          script: 'נֶשֶׁךְ',
          translit: '<strong>neshek</strong> · interest, literally &ldquo;a bite&rdquo;',
          description:
            'Usury is a bite taken from the poor. The law forbids it. If you lend to someone who has nothing, you do not charge for the mercy. Later rabbis would extend this: money can be lent with interest to outsiders, but never to Israel. Because the covenant is about caring for your own.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 26,
              spans: [
                t('If thou at all take thy neighbour&apos;s raiment to pledge, thou shalt deliver it unto him by that the sun goeth down:'),
              ],
            },
            {
              number: 27,
              spans: [
                t('For that is his covering only, it is his raiment for his skin: wherein shall he sleep? and it shall come to pass, when he crieth unto me, that I will hear; for I am gracious.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-usury',
          html:
            'Interest on a loan to the poor is a bite — <em>neshek</em> in Hebrew. You are already vulnerable; the lender should not profit from your desperation. The law treats this differently than business loans between merchants. When you lend to someone with nothing, the loan itself is an act of mercy. To charge interest turns mercy into exploitation.',
        },
        {
          kind: 'commentary',
          id: 'c-cloak',
          html:
            'A poor man borrows against his cloak as collateral. But at night, he needs it to sleep. So the law says: take it back by sundown. <em>For that is his covering only.</em> God sees the poor man shivering in the cold. His cry goes straight to heaven. The law is not rules written in stone; it is the sound of God listening to the vulnerable, and commanding His people to listen too.',
        },
        {
          kind: 'carry',
          html:
            'You know what it means to be outside, unwelcome, forgotten. Maybe it happened in a moment. Maybe it took years. But you have been the stranger. You have needed mercy. Exodus 22 asks you to become the one who gives it — not from pity, but from memory. The widow you help may be yourself, thirty years ago. The refugee you turn away could be your own younger self, asking for a second chance. Remember. And when you do, you will find that you are treating Jesus.',
        },
        {
          kind: 'reflection',
          id: 'stranger-mem',
          prompt:
            'When have you been the stranger, the outsider, the one without a home? How has that shaped who you are now?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Exodus 22:28–31 — First-Fruits and the Animals ──────────────────── */
    {
      ref: 'Exodus 22:28–31',
      title: 'Respect, First-Fruits, and the Order of Creation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 28,
              spans: [
                t('Thou shalt not revile the gods, nor curse the '),
                hy('ruler of thy people', 'c-ruler'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ruler',
          html:
            'Respect for authority — civil and spiritual — holds order together. This does not mean blind obedience to injustice. But it does mean you do not dismiss leadership lightly, and you do not claim that the gods are nothing. Covenant requires some reverence.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 29,
              spans: [
                t('Thou shalt not delay to offer the first of thy ripe fruits, and of thy liquors: the '),
                hg('firstborn of thy sons', 'c-firstborn'),
                t(' shalt thou give unto me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-firstborn',
          html:
            'The first of everything belongs to God. The first fruits, the first oil, the first-born son. Not because God needs them, but because the first acknowledges <em>who is first in your life.</em> Every harvest, every year, you give the beginning back, and God redeems what you give. He does not keep it; He gives it back, consecrated.',
        },
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 30,
              spans: [
                t('Likewise thou shalt do with thine oxen, and with thy sheep: '),
                hg('seven days it shall be with his dam', 'c-sevendays'),
                t('; on the eighth day thou shalt give it me.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And ye shall be '),
                hg('holy men unto me', 'c-holiness'),
                t(': neither shall ye eat any flesh that is torn of beasts in the field; ye shall cast it to the dogs.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sevendays',
          html:
            'An animal stays with its mother for seven days — the cycle of creation. On the eighth, it is given to God. The eighth day is not the first day of the next week; it is <em>beyond</em> the week, the start of something new. First-fruits are always about transition, thanksgiving, and the acknowledgment that the future is God&apos;s.',
        },
        {
          kind: 'commentary',
          id: 'c-holiness',
          html:
            'Israel shall be <em>holy</em> — set apart, consecrated. Not because they are better, but because they belong to God. And holiness has implications: eat no torn flesh from the field. Use only what is whole, what is clean, what honors the order God made. Holiness is not just in the temple; it is in what you eat, whom you welcome, how you treat the trapped and the wild.',
        },
        {
          kind: 'carry',
          html:
            'The first-fruits are your way of saying every year: <em>I know where these came from.</em> Not from your effort alone, not from your luck, but from a God who made the seasons and calls the rain. When you give the first, you are practicing the posture of your whole life: dependence, gratitude, and the knowledge that you are in covenant. What is your first-fruit right now — the thing you need to give back to God before you claim anything for yourself?',
        },
        {
          kind: 'reflection',
          id: 'firstborn',
          prompt:
            'What would it look like for you to give God the first of your time, talent, or treasure — not the leftovers, but the beginning?',
        },
      ],
    },
  ],
};
