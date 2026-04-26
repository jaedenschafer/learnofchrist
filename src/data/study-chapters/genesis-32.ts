import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 32 — Jacob wrestles with God.
 *
 * One of Scripture&apos;s strangest and most beloved chapters. Jacob is on his way
 * home to face his brother Esau — the man he deceived twenty years ago. Terrified,
 * he divides his company, sends gifts ahead, prays one of the most honest prayers
 * in the Bible. Then alone at the Jabbok, in the dark, a Man appears. They wrestle
 * all night. The Man touches Jacob&apos;s thigh and breaks it. Jacob will not let go
 * without a blessing. The Man asks his name; Jacob answers. The Man renames him
 * Israel — &ldquo;for as a prince hast thou power with God and with men, and hast
 * prevailed.&rdquo; Jacob limps away, blessed and broken, never the same.
 */
export const GENESIS_32: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 32,

  intros: [
    'Jacob is going home. For twenty years he has lived in exile in Haran, hiding from the brother he cheated. He has built a family, amassed herds and servants, and survived the schemes of his father-in-law. Now the time has come to go back to Canaan, to face the man he wronged. And Esau is coming to meet him — with four hundred men.',
    'What follows is a night without parallel in Scripture. Alone at the river Jabbok, Jacob encounters a mysterious figure. The text calls him a Man. Jacob calls him God. The Church has long understood him as a pre-incarnate appearance of the Son — a christophany. And what happens in that darkness is neither a vision nor a prayer alone, but something physical and real: a wrestling match with God Himself, where the blessing comes through the wound.',
    'This is a chapter about power and helplessness, about holding on to God when God is silent and mysterious, about limping into blessing. Read it slowly. The text does not explain everything, and it should not. Some mysteries are meant to remain.',
  ],

  bottomShare: {
    label: 'Share Genesis 32',
    quote:
      'Jacob wrestles with a Man all night at the Jabbok and will not let Him go until He blesses him. The Man touches his thigh and breaks it. But He grants the blessing and renames Jacob Israel: &ldquo;for as a prince hast thou power with God and with men, and hast prevailed.&rdquo;',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 32 · Study Guide',
  },

  sections: [
    /* ─── Genesis 32:1–8 — Fear and Division ───────────────────────────── */
    {
      ref: 'Genesis 32:1–8',
      title: 'Fear and Division',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 1,
              spans: [
                t('And Jacob went on his way: and '),
                hp('the angels of God met him', 'c-mahanaim'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And when Jacob saw them, he said, This is '),
                hy('God&apos;s host', 'hebrew-mahanaim'),
                t(': and he called the name of that place '),
                hy('Mahanaim', 'hebrew-mahanaim'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And Jacob sent messengers before him to his brother Esau unto the land of Seir, the country of Edom.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And he commanded them, saying, Thus shall ye speak unto my lord Esau; Thy servant Jacob saith thus, I have sojourned with Laban, and stayed there until now:'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And I have oxen, and asses, flocks, and menservants, and womenservants: and I have sent to tell my lord, that I may find grace in thy sight.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the messengers returned to Jacob, saying, We came to thy brother Esau, and also '),
                hg('he cometh to meet thee, and four hundred men with him', 'c-esau-four-hundred'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Then Jacob was greatly afraid and '),
                hg('distressed', 'c-fear-division'),
                t(': and he divided the people that was with him, and the flocks, and herds, and the camels, into two bands;'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And said, If Esau shall come to the one company, and smite it, then the other company which is left shall escape.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-mahanaim',
          title: 'Mahanaim — &ldquo;two camps&rdquo;',
          script: 'מַחֲנַיִם',
          translit: '<strong>mahanaim</strong> · literally &ldquo;two camps&rdquo; or &ldquo;two hosts&rdquo;',
          description:
            'Jacob sees the angels and names the place Mahanaim, &ldquo;two camps,&rdquo; because he has encountered God&apos;s army. The place will haunt Jacob this entire chapter. He himself will soon divide into two camps out of fear. And later, wrestling with the Man by night, he will be broken and remade — a splitting apart that leads to wholeness. The name Mahanaim echoes through the narrative, a constant reminder that God&apos;s presence is there, even in Jacob&apos;s terror.',
        },
        {
          kind: 'commentary',
          id: 'c-mahanaim',
          html:
            'Jacob has barely left Laban&apos;s house when angels appear. He has not sought them out or deserved them. They come. The God who will wrestle with Jacob later — who will wound him and remake him — sends His messengers first. Before the breaking, there is comfort. Before the trial, there is a sign that Jacob is not alone.',
        },
        {
          kind: 'commentary',
          id: 'c-esau-four-hundred',
          html:
            'Four hundred men. The number is meant to be terrifying. Esau has become powerful in the land while Jacob lived in exile. And now Jacob learns that his brother is coming to meet him at speed. The reconciliation he hoped for is about to become a battle.',
        },
        {
          kind: 'commentary',
          id: 'c-fear-division',
          html:
            'Jacob&apos;s first response to fear is to divide. Split the people, divide the animals — if half are destroyed, at least half survive. It is a logical response, a practical hedge. But it is also the opposite of faith. Faith would say, <em>God is with me. I will walk forward whole.</em> Fear says, <em>I will cut myself in half so that at least part of me survives.</em> Jacob is about to learn that wholeness comes not through dividing, but through being broken by God and held fast.',
        },
        {
          kind: 'carry',
          html:
            'When you are afraid, your impulse is probably to divide too — to split yourself into pieces, protect different parts, hedge your bets. Notice the prayer that follows (verses 9-12). Jacob does something different. Instead of planning another escape, he prays. Instead of dividing further, he begins to yield.',
        },
        {
          kind: 'reflection',
          id: 'gen32-fear',
          prompt:
            'What does fear usually make you do first — divide, plan, control? What would it look like to bring that fear to God in prayer instead?',
        },
      ],
    },

    /* ─── Genesis 32:9–12 — The Prayer ───────────────────────────────── */
    {
      ref: 'Genesis 32:9–12',
      title: 'The Prayer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 9,
              spans: [
                t('And Jacob said, '),
                hp('O God of my father Abraham, and God of my father Isaac', 'c-god-of-fathers'),
                t(', the LORD which saidst unto me, Return unto thy country, and to thy kindred, and I will deal well with thee:'),
              ],
            },
            {
              number: 10,
              spans: [
                t('I am not worthy of the least of all the mercies, and of all the truth, which thou hast shewed unto thy servant; for with my '),
                hg('staff I passed over this Jordan', 'c-staff'),
                t('; and now I am become two bands.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Deliver me, I pray thee, from the hand of my brother, from the hand of Esau: for I fear him, '),
                hp('lest he will come and smite me, and the mother with the children', 'c-fear-family'),
                t('.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And thou saidst, I will surely do thee good, and make thy seed as the sand of the sea, which cannot be numbered for multitude.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-god-of-fathers',
          html:
            'Jacob does not begin with his own piety. He begins by naming the God of Abraham and Isaac — the God whose promises have been fulfilled across generations. This is not Jacob&apos;s story alone. He is praying into a covenant that precedes him and will outlast him. The prayer is an anchor into something larger than his terror.',
        },
        {
          kind: 'commentary',
          id: 'c-staff',
          html:
            'This is the most honest sentence in the prayer: <em>I am not worthy.</em> Jacob came with a staff — one man, alone, with nothing. God gave him wives, children, flocks, and servants. He has become two bands, multiplied beyond measure. And yet he fears losing it all. The prayer holds two truths together: everything is a gift, and everything can be taken. That tension is the place where Jacob will meet God.',
        },
        {
          kind: 'commentary',
          id: 'c-fear-family',
          html:
            'It is important that Jacob names the threat precisely. Not just himself, but the mother with the children. His family. The fear is not abstract. It is the fear of loss — the fear that the people he loves will be destroyed. In a moment, God will answer this prayer by breaking Jacob himself, teaching him that his family cannot be protected by his strength or his schemes. Only by God&apos;s keeping.',
        },
        {
          kind: 'christ',
          id: 'christ-unworthy-prayer',
          title: 'Christ Connection — The Unworthy Servant',
          html:
            'Jacob prays, <em>I am not worthy of the least of all the mercies.</em> That prayer echoes through all of Scripture. The centurion says it to Jesus: &ldquo;Lord, I am not worthy that thou shouldest come under my roof&rdquo; (Matt. 8:8). The publican prays it: &ldquo;God, be merciful to me, a sinner&rdquo; (Luke 18:13). And Paul writes, &ldquo;Christ Jesus came into the world to save sinners; of whom I am chief&rdquo; (1 Tim. 1:15). The recognition that we deserve nothing is not the end of the prayer. It is the beginning of faith. God has already promised to do us good. We are not negotiating with Him. We are reminding ourselves that His kindness is free.',
        },
        {
          kind: 'carry',
          html:
            'Your fear is real. The threat is real. But the prayer Jacob prays teaches something: name what you are afraid of, name what you have been given, acknowledge that you deserve none of it, and then ask. Bring the whole thing before God. Do not manage it alone. Jacob&apos;s prayer does not make Esau disappear, but it changes Jacob. He has given the burden to God. Whatever comes next, he will not carry it by himself.',
        },
        {
          kind: 'reflection',
          id: 'gen32-prayer',
          prompt:
            'What is the fear beneath your fear right now? What would it mean to pray Jacob&apos;s prayer — acknowledging both your unworthiness and God&apos;s faithfulness?',
        },
      ],
    },

    /* ─── Genesis 32:13–21 — The Gifts ───────────────────────────────── */
    {
      ref: 'Genesis 32:13–21',
      title: 'The Gifts Sent Ahead',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 13,
              spans: [
                t('And he lodged there that same night; and took of that which came to his hand a '),
                hg('present for Esau his brother', 'c-present'),
                t(':'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Two hundred she goats, and twenty he goats, two hundred ewes, and twenty rams,'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Thirty milch camels with their colts, forty kine, and ten bulls, twenty she asses, and ten foals.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And he delivered them into the hand of his servants, every drove by themselves; and said unto his servants, Pass over before me, and put a space betwixt drove and drove.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And he commanded the foremost, saying, When Esau my brother meeteth thee, and asketh thee, saying, Whose art thou? and whither goest thou? and whose are these before thee?'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Then thou shalt say, They be thy servant Jacob&apos;s; it is a present sent unto my lord Esau: and, behold, also he is behind us.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And so commanded he the second, and the third, and all that followed the droves, saying, On this manner shall ye speak unto Esau, when ye find him.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And say ye also, Behold, thy servant Jacob is behind us. For he said, I will appease him with the present that goeth before me, and afterward I will '),
                hg('see his face', 'c-see-his-face'),
                t('; peradventure he will accept of me.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('So went the present over before him: and himself lodged that night in the company.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-present',
          html:
            'Jacob sends a present. Not once, but in waves — the droves divided so that each encounter with Esau prepares him for the next. Jacob is still trying to manage the encounter through his own resources. He trusts his gifts more than he trusts God. The gifts are not wrong, but they will not be the key. The answer lies not in what Jacob sends ahead, but in what Jacob leaves behind — himself, alone, at the river.',
        },
        {
          kind: 'commentary',
          id: 'c-see-his-face',
          html:
            'Jacob says, &ldquo;I will appease him with the present, and afterward I will see his face.&rdquo; He will see Esau&apos;s face. But before that, in the dark at the Jabbok, he will see another face — the face of God. And he will say of that encounter, &ldquo;I have seen God face to face, and my life is preserved.&rdquo; The order matters. The encounter with God precedes the reconciliation with the brother.',
        },
        {
          kind: 'carry',
          html:
            'You probably have strategies for appeasement too — gifts you send ahead, performances designed to soften someone&apos;s heart or protect you from judgment. The gifts are not evil. But notice what Jacob is about to learn: reconciliation does not come through the gifts. It comes through the meeting. And the meeting that matters most is not the one with Esau. It is the one that happens first, alone, in the dark, with God.',
        },
        {
          kind: 'reflection',
          id: 'gen32-gifts',
          prompt:
            'What &ldquo;gifts&rdquo; do you send ahead to protect yourself or win favor? What might happen if you stopped trying to manage the encounter and simply met it?',
        },
      ],
    },

    /* ─── Genesis 32:22–28 — The Wrestling ─────────────────────────── */
    {
      ref: 'Genesis 32:22–28',
      title: 'The Wrestler in Darkness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 22,
              spans: [
                t('And he rose up that night, and took his two wives, and his two womenservants, and his eleven sons, and passed over the ford Jabbok.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And he took them, and sent them over the brook, and sent over that he had.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And Jacob was left '),
                hg('alone', 'c-alone'),
                t('; and there '),
                hp('wrestled a man with him until the breaking of the day', 'c-wrestling'),
                t('.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And when he saw that he prevailed not against him, he '),
                hg('touched the hollow of his thigh', 'c-thigh-touch'),
                t('; and the hollow of Jacob&apos;s thigh was out of joint, as he wrestled with him.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And he said, Let me go, for the day breaketh. And Jacob said, '),
                hp('I will not let thee go, except thou bless me', 'c-blessing-demand'),
                t('.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And he said unto him, What is thy name? And he said, Jacob.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And he said, Thy name shall be called no more Jacob, but '),
                hy('Israel', 'hebrew-israel'),
                t(': for as a prince hast thou power with God and with men, and hast prevailed.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-israel',
          title: 'Yisrael — &ldquo;he who wrestles with God&rdquo;',
          script: 'יִשְׂרָאֵל',
          translit: '<strong>yisrael</strong> · &ldquo;God strives&rdquo; or &ldquo;he who wrestles with God&rdquo;',
          description:
            'The name is rebuilt from <em>sarah</em> (to strive, to wrestle) and <em>El</em> (God). Jacob becomes Israel — the one who strives with God and prevails. Not through strength, but through holding on. Not through winning, but through refusing to let go until he is blessed. The whole nation will take this name. Israel&apos;s entire identity is built on the refusal to let God go, even when broken.',
        },
        {
          kind: 'commentary',
          id: 'c-alone',
          html:
            'Jacob sends everyone across. He is alone. At the moment of greatest need, he is separated from everything — wife, children, servants, animals, the weight of his wealth. There is nothing left but Jacob and the darkness and a river. The condition is necessary. What is about to happen cannot happen while Jacob is still holding on to his defenses.',
        },
        {
          kind: 'commentary',
          id: 'c-wrestling',
          html:
            'A Man appears. The text does not explain who He is. Jacob will later tell his name — Peniel, &ldquo;the face of God&rdquo; — &ldquo;because I have seen God face to face, and my life is preserved&rdquo; (v. 30). But in the moment, Jacob does not know. He only knows that something is holding him, and he cannot let go.',
        },
        {
          kind: 'commentary',
          id: 'c-thigh-touch',
          html:
            'The Man touches his thigh — the socket of the hip — and it goes out of joint. In a moment, Jacob will be physically broken. He will limp the rest of his life. This is not gentle. The God who comes to Jacob in the dark does not come to comfort him. He comes to break him. And in breaking him, to remake him.',
        },
        {
          kind: 'commentary',
          id: 'c-blessing-demand',
          html:
            'Jacob holds on. The Man says, <em>Let me go, for the day breaketh.</em> But Jacob refuses. <em>I will not let thee go, except thou bless me.</em> Jacob is broken, outnumbered, alone in the dark, and he demands a blessing. He will not let go. This is not the prayer of verse 9-12. This is the prayer of a man who has been torn apart and found something worth holding onto even more. The Man is breaking free and Jacob is holding on with the last strength he has. <em>Bless me.</em>',
        },
        {
          kind: 'christ',
          id: 'christ-wrestling-christophany',
          title: 'Christ Connection — Wrestling with God',
          html:
            'The Church has understood this wrestling match as a christophany — a pre-incarnate appearance of Christ. Hosea 12:4 calls the figure &ldquo;the angel,&rdquo; but the text itself implies divinity. Jacob sees His face and lives. Christ came to a people broken by the Fall — a people who had failed to keep the covenant. And He did not come to comfort them with gifts or promises alone. He came to wrestle with them, to break them in their pride, to strip them of everything they thought would save them. And He demanded that they hold on, that they refuse to let Him go. &ldquo;Blessed are they that mourn,&rdquo; Jesus said, &ldquo;for they shall be comforted&rdquo; (Matt. 5:4). The comfort comes after the breaking.',
        },
        {
          kind: 'carry',
          html:
            'There are prayers God answers by giving you what you ask for. And there are prayers God answers by breaking you so that you can hold on to Him instead. You are probably praying for something to be taken away. God might be working to take away the thing you are holding instead — the pride, the self-reliance, the strategy that keeps you from falling on Him completely. Do not mistake the breaking for abandonment. It is the opposite. It is the closest God can come.',
        },
        {
          kind: 'reflection',
          id: 'gen32-wrestling',
          prompt:
            'Where are you being broken right now — where is God making it impossible for you to hold on to your own strength? What would it mean to refuse to let Him go until He blesses you there?',
        },
        {
          kind: 'artwork',
          matchTitle: /jacob.*wrestl|angel.*jacob/i,
          matchArtist: /rembrandt|delacroix|gauguin/i,
          caption: 'Genesis 32:24–28 — The Wrestling',
        },
      ],
    },

    /* ─── Genesis 32:29–32 — The Name and the Limp ─────────────────── */
    {
      ref: 'Genesis 32:29–32',
      title: 'The New Name and the Broken Thigh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 32,
          lines: [
            {
              number: 29,
              spans: [
                t('And Jacob asked him, and said, Tell me, I pray thee, thy name. And he said, Wherefore is it that thou dost ask after my name? And he '),
                hp('blessed him there', 'c-blessing-given'),
                t('.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And Jacob called the name of the place '),
                hy('Peniel', 'hebrew-peniel'),
                t(': for I have '),
                hp('seen God face to face, and my life is preserved', 'c-face-to-face'),
                t('.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And as he passed over '),
                hy('Penuel', 'hebrew-penuel-note'),
                t(' the sun rose upon him, and he halted upon his thigh.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('Therefore the children of Israel eat not of the sinew which shrank, which is upon the hollow of the thigh, unto this day: because he touched the hollow of Jacob&apos;s thigh in the sinew that shrank.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-peniel',
          title: 'Peniel — &ldquo;face of God&rdquo;',
          script: 'פְּנִיאֵל',
          translit: '<strong>peniel</strong> · the face or presence of God',
          description:
            'The place is named Peniel, from <em>panim</em> (face) and <em>El</em> (God). Jacob has seen the face of God. Not in vision, not in prayer, but in the flesh — a physical encounter. His life is preserved. The name marks the place where the boundary between visible and invisible, known and mysterious, was torn open.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-penuel-note',
          title: 'Penuel — the same place, another name',
          script: 'פְּנוּאֵל',
          translit: '<strong>penuel</strong> · variant spelling of Peniel',
          description:
            'Penuel and Peniel are the same place, spelled two ways in the ancient text. Both mean &ldquo;the face of God.&rdquo; The place will remain a significant location in Israel&apos;s later history. But its meaning is fixed here: it is the place where a man met God in the dark and saw His face.',
        },
        {
          kind: 'commentary',
          id: 'c-blessing-given',
          html:
            'The Man asks, <em>Wherefore is it that thou dost ask after my name?</em> The question is not answered. Jacob never learns the name. And then the Man blesses him. Not because Jacob earned it, not because Jacob defeated Him. Despite the wrestling, despite the refusal to let go — or perhaps because of it — the Man grants the blessing. The blessing does not require the Man to be named. It requires only that Jacob receive it.',
        },
        {
          kind: 'commentary',
          id: 'c-face-to-face',
          html:
            'I have seen God face to face, and my life is preserved. This is extraordinary. The Old Testament assumption is that no one can see God and live (cf. Exodus 33:20). Jacob has broken that assumption. He has met the presence of God visibly and survived. The mystery is not explained. The text does not say how this is possible. It only says that it happened. And Jacob knows it.',
        },
        {
          kind: 'christ',
          id: 'christ-face-to-face',
          title: 'Christ Connection — Seeing God Unveiled',
          html:
            'Jacob says, &ldquo;I have seen God face to face, and my life is preserved.&rdquo; But centuries later, John writes, &ldquo;No man hath seen God at any time; the only begotten Son, which is in the bosom of the Father, he hath declared him&rdquo; (John 1:18). What Jacob saw in shadow and mystery, we see in the face of Christ — God made visible, God made knowable, God made touchable. Jesus told His disciples, &ldquo;he that hath seen me hath seen the Father&rdquo; (John 14:9). What Jacob encountered in darkness, the disciples encountered in daylight. The face of God is the face of Christ.',
        },
        {
          kind: 'commentary',
          id: 'c-the-limp',
          html:
            'And he halted upon his thigh. Jacob limps for the rest of his life. The blessing does not undo the wound. The breaking is permanent. Israel — the new name — is a name written in a limp. Every step Jacob takes reminds him of the night he met God. The limp is not a curse. It is a mark. A sign that he has been held by something stronger than himself and that he did not let go.',
        },
        {
          kind: 'carry',
          html:
            'If you have been broken by God — if there is something you will carry for the rest of your life that marks you as one who has met Him — do not be ashamed of the limp. It is your name. Israel. The one who wrestled with God and would not let go, even when it cost everything. The limp is the proof that the blessing is real.',
        },
        {
          kind: 'reflection',
          id: 'gen32-limp',
          prompt:
            'What is your limp? What permanent mark has God left on you? How might it be a sign of grace rather than a scar of defeat?',
        },
        {
          kind: 'artwork',
          matchTitle: /peniel|penuel|jacob.*blessed/i,
          matchArtist: /rembrandt|delacroix|tissot/i,
          caption: 'Genesis 32:29–30 — Blessed at Peniel',
        },
      ],
    },

    /* ─── Genesis 32 — Whole Chapter Arc ──────────────────────────────── */
    {
      ref: '',
      title: 'The Limp That Proves the Blessing',
      blocks: [
        {
          kind: 'divider',
        },
        {
          kind: 'commentary',
          html:
            'Jacob entered this chapter terrified — looking over his shoulder at an enemy he had wronged, dividing his people to hedge against loss, sending gifts ahead to appease. By the end, he has been dismantled. His thigh is broken. His body bears the mark. And he is whole. Israel — the new name — walks forward into the day, limping. The blessing required the breaking. The wholeness required the wound.',
        },
        {
          kind: 'commentary',
          html:
            'This is the pattern that runs through all of Scripture. The God who comes to us does not come to leave us as we are. He comes to remake us. Paul writes, &ldquo;If any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new&rdquo; (2 Cor. 5:17). The newness is not purchased cheaply. Christ was broken. He rose. And those who follow Him are broken too — not destroyed, but unmade so that they can be made again. The limp is the proof. It says: <em>I have been held by God. I will not let go.</em>',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
