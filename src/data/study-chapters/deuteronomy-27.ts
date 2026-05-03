import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 27 — a public, communal recitation of the deepest moral standards.
 * Moses commands Israel to engrave the law on stones and to gather on two mountains
 * for the Levites to proclaim twelve curses, each confirmed by "Amen" from the people.
 * This is not mere reading; it is communal owning.
 */
export const DEUTERONOMY_27: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 27,

  estimatedMinutes: { beginner: 5, intermediate: 10, deep: 13 },
  intros: [
    'Deuteronomy 27 is Israel&apos;s covenant moment: standing at the edge of the Promised Land, about to cross the Jordan, the people are commanded to make a public, shouted acknowledgment of the law&apos;s deepest standards. They will engrave the law on stones and stand on two mountains — one for blessing, one for curse — while the Levites declare twelve curses aloud. Each curse is answered by a thundering "Amen" from the whole assembly. This is not private piety; it is communal witnessing.',
    'The twelve curses target the sins the law cares most about: secret idolatry, the dishonoring of parents, the perversion of justice for the vulnerable, secret violence, bribery that executes the innocent, and—finally—the curse that Paul would quote centuries later: the curse of not keeping "all things which are written in the book of the law." This chapter is where the law shows its face and its teeth.',
  ],

  sections: [
    /* ─── Deuteronomy 27:1–3 — The Law Engraved on Stone ─────────────── */
    {
      ref: 'Deuteronomy 27:1–3',
      title: 'The Law Written Plain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 1,
              spans: [
                t('And Moses with the elders of Israel commanded the people, saying, '),
                hg('Keep all the commandments', 'c-keep-commandments'),
                t(' which I command you this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-keep-commandments',
          html:
            'The chapter opens with a single command: <em>keep all the commandments.</em> Not some. All. The law as a whole, a covenant made with the whole people. What follows is the mechanism by which Israel will own that covenant publicly.',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 2,
              spans: [
                t('And it shall be on the day when ye shall pass over Jordan unto the land which the Lord thy God giveth thee, that thou shalt '),
                hg('set thee up great stones', 'c-great-stones'),
                t(', and '),
                hy('plaster them with plaster', 'hebrew-syd'),
                t(':'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And thou shalt write upon them '),
                hy('all the words of this law', 'c-all-words'),
                t(', when thou art passed over, that thou mayest go in unto the land which the Lord thy God giveth thee, a land that floweth with milk and honey; as the Lord God of thy fathers hath promised thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-great-stones',
          html:
            'The stones are not hidden in a temple or reserved for priests. They stand in a public place where every Israelite who crosses the Jordan will see them. The law is not a secret doctrine whispered to the elite; it is engraved and plastered where the whole people can read it.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-syd',
          title: 'Syd — &ldquo;plaster&rdquo;',
          script: 'סִיד',
          translit: '<strong>syd</strong> · whitewashed, lime-covered',
          description:
            'The stones are covered with white plaster so the engraved words show plainly. Nothing hidden. The law is meant to be read, not decoded.',
        },
        {
          kind: 'carry',
          html:
            'The deepest laws are not mysterious or private. They are written plain where you can see them. In your own conscience, your own community, the boundaries are already there — parent and child, justice for the stranger, truth in witness, the body sacred. You don&apos;t have to excavate them. They are plastered and plain. Your job is to name them aloud.',
        },
      ],
    },

    /* ─── Deuteronomy 27:4–8 — The Altar of Unhewn Stones ────────────── */
    {
      ref: 'Deuteronomy 27:4–8',
      title: 'An Altar of Unhewn Stone',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 4,
              spans: [
                t('Therefore it shall be when ye be gone over Jordan, that ye shall '),
                hg('set up these stones', 'c-set-stones'),
                t(', which I command you this day, in the mount Ebal, and thou shalt plaster them with plaster.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And there shalt thou build an altar unto the Lord thy God, an altar of stones: '),
                hy('thou shalt not lift up any iron tool', 'hebrew-barzel'),
                t(' upon them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-set-stones',
          html:
            'The altar built on Mount Ebal is made from unhewn stones — stones taken as God gave them, unworked, unshapen by human labor. No iron tool to cut or refine them. The Law does not require sophistication or human cleverness. It requires obedience.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-barzel',
          title: 'Barzel — &ldquo;iron&rdquo;',
          script: 'בַּרְזֶל',
          translit: '<strong>barzel</strong> · iron; the worker&apos;s tool',
          description:
            'Iron is the tool of human craft and labor. The prohibition against lifting an iron tool on the altar is an ancient principle: what God accepts is what humans receive unworked, not what humans make or improve.',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 6,
              spans: [
                t('Thou shalt build the altar of the Lord thy God of whole stones: and thou shalt offer burnt offerings thereon unto the Lord thy God:'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And thou shalt offer peace offerings, and shalt '),
                hy('eat there, and rejoice', 'c-rejoice-place'),
                t(' before the Lord thy God.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And thou shalt write upon the stones all the words of this law very plainly.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rejoice-place',
          html:
            'After the curses are spoken, Israel eats and rejoices before God at this very place. They do not eat in fear. The covenant is not only about curse; it is about belonging to a community that stands together, owns the law together, and then eats together. The meal is the affirmation that the people can live under this law.',
        },
        {
          kind: 'carry',
          html:
            'You live under a law you didn&apos;t make. You didn&apos;t refine it or improve it; it came to you whole. And yet the call is not to fear it in isolation. The deepest part of belonging to a community of faith is standing together to say what the standards are, and then sitting down together to eat. Judgment and grace meet at the same table.',
        },
      ],
    },

    /* ─── Deuteronomy 27:11–14 — Gerizim and Ebal, Blessing and Curse ─── */
    {
      ref: 'Deuteronomy 27:11–14',
      title: 'Two Mountains: Blessing and Curse',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 11,
              spans: [
                t('And Moses charged the people the same day, saying,'),
              ],
            },
            {
              number: 12,
              spans: [
                t('These shall stand upon mount '),
                hy('Gerizim', 'hebrew-gerizim'),
                t(' to bless the people, when ye are come over Jordan; '),
                hg('Simeon, and Levi, and Judah, and Issachar, and Joseph, and Benjamin', 'c-gerizim-tribes'),
                t(':'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And these shall stand upon mount '),
                hy('Ebal', 'hebrew-ebal'),
                t(' to curse; Reuben, Gad, and Asher, and Zebulun, Dan, and Naphtali.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And the Levites shall speak, and say unto all the men of Israel with a loud voice,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gerizim-tribes',
          html:
            'Six tribes stand on Gerizim, six on Ebal. The division is not random; the Levites — who have no tribal standing — stand between them to pronounce judgment. The whole nation is split in two, one half facing the words of blessing, one half facing the words of curse, with the Levites proclaiming what each path looks like.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-gerizim',
          title: 'Gerizim — &ldquo;blessing mountain&rdquo;',
          script: 'גְּרִזִים',
          translit: '<strong>Gerizim</strong> · the mountain of blessing',
          description:
            'To this day, Mount Gerizim and Mount Ebal stand on either side of the Shechem Valley. The acoustics of the valley carry voices astonishingly between the mountains — an ancient Israelite standing on one mountain could hear the words proclaimed from the other.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ebal',
          title: 'Ebal — &ldquo;curse mountain&rdquo;',
          script: 'עֵיבָל',
          translit: '<strong>Ebal</strong> · the mountain of curse',
          description:
            'Though often translated as bare or stony, Ebal is the mountain where the curses are proclaimed. The contrast between the two peaks is geographical and moral — one mountain for what follows obedience, one for what follows betrayal.',
        },
        {
          kind: 'reflection',
          id: 'two-mountains',
          prompt: 'If you stood on one of these mountains today, looking at the other, which way are you actually facing? What choice is being made in your life right now?',
        },
      ],
    },

    /* ─── Deuteronomy 27:15–26 — The Twelve Curses, Each Answered "Amen" ─ */
    {
      ref: 'Deuteronomy 27:15–26',
      title: 'Twelve Curses: The People Speak "Amen"',
      blocks: [
        {
          kind: 'commentary',
          id: 'c-curses-intro',
          html:
            'Each curse follows the same form: the Levite proclaims it, and "all the people shall say, Amen." This is not a reading. This is the people taking ownership. Every time they say "Amen," they are standing together and saying: "This is a line we will not cross."',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 15,
              spans: [
                t('Cursed be the man that maketh any graven or molten image, an abomination unto the Lord, and putteth it in a '),
                hy('secret place', 'hebrew-seter'),
                t('. And all the people shall say, '),
                hy('Amen', 'hebrew-amen'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-secret-image',
          html:
            'The first curse targets idolatry done in secret. Not the image that stands openly in a rival nation&apos;s temple — the image hidden in the dark. God sees what no community can see. A person may hide their heart&apos;s allegiance from everyone but God.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-amen',
          title: 'Amen — &ldquo;so be it, firm&rdquo;',
          script: 'אָמֵן',
          translit: '<strong>amen</strong> · verily, so be it; from the root meaning &ldquo;firm, faithful&rdquo;',
          description:
            'Every curse in this chapter ends with the people saying "Amen." They are not cursing each other; they are affirming: "This law stands. We stand under it. May it be firm among us."',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-seter',
          title: 'Seter — &ldquo;secret place&rdquo;',
          script: 'סֵתֶר',
          translit: '<strong>seter</strong> · a hidden place, concealment',
          description:
            'The law does not condemn the obvious idolater alone — the person who bows openly in the high places. It condemns the hidden heart, the secret shrine, the private allegiance to another god.',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 16,
              spans: [
                t('Cursed be he that '),
                hg('setteth light by his father or his mother', 'c-parents'),
                t('. And all the people shall say, Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-parents',
          html:
            'To "set light" by a parent is to treat them with contempt, to reduce them, to rob them of honor. The deepest law of the household comes early in the curses. The family unit is sacred.',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 17,
              spans: [
                t('Cursed be he that '),
                hg('removeth his neighbour&apos;s landmark', 'c-landmark'),
                t('. And all the people shall say, Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-landmark',
          html:
            'A landmark is a boundary stone. To move it is to steal land by stealth, to take what is not yours by manipulating what you both agreed on. It is dishonesty made material.',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 18,
              spans: [
                t('Cursed be he that maketh '),
                hg('the blind to wander out of the way', 'c-blind'),
                t('. And all the people shall say, Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blind',
          html:
            'To mislead the blind is to exploit the vulnerable. The person who cannot see is helpless against someone who directs them into danger. The law sees this cruelty and curses it.',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 19,
              spans: [
                t('Cursed be he that '),
                hy('perverteth the judgment', 'c-judgment'),
                t(' of the stranger, fatherless, and widow. And all the people shall say, Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-judgment',
          html:
            'Three times the law names the most vulnerable: the stranger (who has no tribe, no local standing), the fatherless (who has no male advocate), the widow (who has no husband to defend her). To pervert justice for them is to crush what little protection the law offers. The deepest curses protect the powerless.',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 20,
              spans: [
                t('Cursed be he that '),
                hg('lieth with his father&apos;s wife', 'c-sexual-boundaries'),
                t('. And all the people shall say, Amen.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Cursed be he that '),
                hg('lieth with any manner of beast', 'c-sexual-boundaries'),
                t('. And all the people shall say, Amen.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Cursed be he that '),
                hg('lieth with his sister', 'c-sexual-boundaries'),
                t(', the daughter of his father, or the daughter of his mother. And all the people shall say, Amen.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Cursed be he that '),
                hg('lieth with his mother in law', 'c-sexual-boundaries'),
                t('. And all the people shall say, Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sexual-boundaries',
          html:
            'Five curses target sexual transgression. The body is sacred. The boundaries within the family are sacred. These are the lines that hold a people together. To cross them is to tear the fabric that makes community possible.',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 24,
              spans: [
                t('Cursed be he that '),
                hg('smiteth his neighbour secretly', 'c-secret-violence'),
                t('. And all the people shall say, Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-secret-violence',
          html:
            'To strike in secret is cowardice made into violence. It is the man who strikes from behind, in the dark, where witnesses cannot see. God sees. The people witness together by saying "Amen."',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 25,
              spans: [
                t('Cursed be he that '),
                hg('taketh reward to slay an innocent person', 'c-bribery-murder'),
                t('. And all the people shall say, Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bribery-murder',
          html:
            'To take money to kill the innocent is the sin of the hireling, the man who has a price. The law names this as one of the deepest evils: the perversion of justice through greed. Blood has been sold.',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 26,
              spans: [
                t('Cursed be he that '),
                hp('confirmeth not all the words of this law', 'christ-curse-all'),
                t(' to do them. And all the people shall say, Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-curse-all',
          html:
            'The twelfth curse is the final and heaviest: cursed is the person who does not confirm <em>all</em> the words of the law. Not some words. All. This curse stands alone because it is foundational to all the others. To keep the law, you must keep the whole thing. And that, Paul will later point out, is why no one can be saved by the law — no one keeps all things.',
        },
        {
          kind: 'carry',
          html:
            'Each "Amen" is a choice. You are saying aloud that you see the line, you understand what crossing it costs, and you consent to stand on the other side of it. This does not make you righteous if you cross it later. But it does mean you know what you are doing. You have named the standard. You have said, before witnesses, "This matters. This line holds us together."',
        },
      ],
    },

    /* ─── Deuteronomy 27:26 — "Cursed Is Everyone": Paul Quotes This ─── */
    {
      ref: 'Deuteronomy 27:26 and Galatians 3:10–13',
      title: '"Cursed Is Everyone": Why the Law Cannot Save',
      blocks: [
        {
          kind: 'christ',
          id: 'christ-curse-all-paul',
          title: 'Christ Connection — "Cursed Is Every One"',
          html:
            'Centuries after Deuteronomy was written, Paul quotes verse 26 in Galatians: "Cursed is every one that continueth not in all things which are written in the book of the law to do them" (Gal. 3:10). Paul&apos;s logic is devastating: the law itself proclaims that <em>everyone</em> who does not keep all things is cursed. No one keeps all things. Therefore the law cannot save; it can only reveal that all of us are under curse. But Paul adds the reversal: "Christ hath redeemed us from the curse of the law, being made a curse for us" (Gal. 3:13). Christ stood in the place where Deuteronomy 27 places all of us. He took the twelfth curse—and broke it.',
        },
        {
          kind: 'reflection',
          id: 'christ-curse',
          prompt:
            'If you were standing on Mount Ebal and heard all twelve curses proclaimed, which one would have struck closest to where you actually live? And what does it mean that Christ took that curse for you?',
        },
      ],
    },

    /* ─── Joshua 8:30–35 — This Command Was Carried Out ────────────────── */
    {
      ref: 'Joshua 8:30–35',
      title: 'Joshua Carries Out the Command',
      blocks: [
        {
          kind: 'commentary',
          id: 'c-joshua-execution',
          html:
            'Joshua did exactly what Moses commanded. After the conquest of Jericho and Ai, Joshua gathered all Israel on the slopes of Mounts Gerizim and Ebal, engraved the law on stones, and had the Levites proclaim the curses and blessings. "And all Israel, and their elders, and officers, and their judges, stood on this side the ark and on that side before the priests the Levites" (Joshua 8:33). The command given in Deuteronomy 27 was not hypothetical; it was lived out. The people stood between the mountains and heard the law spoken aloud. The acoustics of the valley carried every word.',
        },
        {
          kind: 'carry',
          html:
            'The law written on stone in the wilderness was not a threat meant only for one generation. It was meant to be carried into the land and enacted there, where the whole community could see and hear it. In the same way, the law written on your conscience is not private. It shapes how you live in community, how you speak truth, how you protect the vulnerable. The boundaries become real when they are lived out with others.',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Deuteronomy 27',
    quote:
      'When you cross the Jordan into God&apos;s land, engrave the law on stone and gather on two mountains. The Levites will proclaim twelve curses, each one answered by the people with "Amen." This is how a people keeps the law alive: by standing together and naming what they stand against.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 27 · Study Guide',
  },
};
