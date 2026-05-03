import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 36 — The Work Begins.
 *
 * After forty chapters of preparation—the call, the plagues, the Red Sea,
 * the law, the covenant, the blueprint—now the people actually build. Bezalel
 * and Aholiab and every wise-hearted craftsman begin the work. The people bring
 * offerings every morning. Verse 5 is unprecedented in scripture: "the people
 * bring much more than enough"—Moses has to actually restraint them from giving
 * more. It's the inversion of the golden calf chapter, where the people had to
 * be stopped from idolatry. Here they have to be stopped from generosity. The
 * chapter then walks through making the curtains, boards, sockets, and veil
 * per the chapter-26 blueprints—the technical details are touched lightly, with
 * focus on meaning: a place where God will dwell.
 */
export const EXODUS_36: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 36,

  estimatedMinutes: { beginner: 9, intermediate: 12, deep: 15 },
  intros: [
    'Exodus 36 begins with a shift. The law is given. The blueprints are drawn. The materials are ready. Now: "Then wrought Bezaleel and Aholiab, and every wise hearted man." The work begins. Not by force, not by a king&apos;s command, but by skilled hands—people whose hearts God had filled with wisdom, doing what they were made to do.',
    'The extraordinary moment comes in verse 5. Moses calls the people to bring offerings. They come, day after day, with gold and silver and fine linen and skilled work. And then Moses has to tell them to stop. "The people bring much more than enough for the service of the work, which the LORD commanded to make." It is the only place in Scripture where generosity itself becomes a problem. God&apos;s people have to be restrained from giving. This is the inverse of every other chapter in the Bible where people are restrained from sin. Here, their hearts have overflowed so completely that they must be told: Enough. Stop. Your gift is already made.',
    'For those who read this on the other side of the cross, the shape of the tabernacle tells the old story of how God meets sinners. But the story of the people who built it—their willing hearts, their overflow of generosity, their joy—that is the story of what a life looks like when grace has already done its work.',
  ],

  sections: [
    /* ─── Exodus 36:1–3 — The Craftsmen Begin ──────────────────────────── */
    {
      ref: 'Exodus 36:1–3',
      title: 'Wise Hearts Set to Work',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            { number: 1, spans: [ t('Then wrought '), t('Bezaleel and Aholiab'), t(', and every '), hy('wise hearted man', 'chokhma-heart'), t(', in whom the LORD put wisdom and understanding to know how to work all manner of work for the service of the sanctuary, according to all that the LORD had commanded.') ] },
            { number: 2, spans: [ t('And Moses called '), hg('Bezaleel and Aholiab', 'craftsmen-called'), t(', and every wise hearted man, in whose heart the LORD had put wisdom, even every one whose heart stirred him up to come unto the work to do it:') ] },
            { number: 3, spans: [ t('And they received of Moses all the offering, which the children of Israel had brought for the work of the service of the sanctuary, to make it withal: and they brought yet unto him free offerings every morning.') ] },
          ],
        },
        {
          kind: 'hebrew',
          id: 'chokhma-heart',
          title: 'Chokhma — &ldquo;wisdom&rdquo;',
          script: 'חָכְמָה',
          translit: '<strong>chokhma</strong> · skill, understanding, practical wisdom; the ability to do something well',
          description:
            'Chokhma is not just knowledge. It is the competence to do things—to build, to make, to create. God puts chokhma in the hearts of these craftsmen. Wisdom is always, in Scripture, a gift that makes you useful to others.',
        },
        {
          kind: 'commentary',
          id: 'craftsmen-called',
          html:
            'Notice the distinction in verse 2: &ldquo;every wise hearted man, in whose heart the LORD had put wisdom, even every one whose heart stirred him up.&rdquo; Two movements. First, God puts wisdom in hearts. Second, the people respond by letting their hearts stir them up. The work of the tabernacle is neither purely divine initiative nor purely human effort. It is both together, each responding to the other.',
        },
        {
          kind: 'christ',
          id: 'christ-overflow',
          title: 'Christ Connection — The Fullness of Giving',
          html:
            'Paul writes to the Corinthians about the Macedonian churches: &ldquo;their deep poverty abounded unto the riches of their liberality; for to their power, I bear record, yea, and beyond their power they were willing of themselves&rdquo; (2 Cor. 8:2–3). He is describing the exact same phenomenon Moses encountered: a people whose hearts have been so healed by grace that they overflow in giving. Paul goes on to apply it to Jesus: &ldquo;ye know the grace of our Lord Jesus Christ, that, though he was rich, yet for your sakes he became poor, that ye through his poverty might be rich&rdquo; (2 Cor. 8:9). A heart that has received grace gives without measure.',
        },
        {
          kind: 'carry',
          html:
            'When your heart is full, your hands become generous. Not because the law demands it, but because there is simply more inside you than you can keep. The craftsmen came with their skills. The people came with their gold. Not because they were told they had to. But because something in them—the feeling that God was coming to dwell among them—had made them want to give everything they had.',
        },
        {
          kind: 'reflection',
          id: 'reflect-wisdom',
          prompt:
            'Where have you experienced your own chokhma—a skill or ability that felt like a gift meant to serve others? What stirred your heart to offer it?',
        },
      ],
    },

    /* ─── Exodus 36:4–7 — Too Much Generosity ─────────────────────────── */
    {
      ref: 'Exodus 36:4–7',
      title: 'The People Bring Much More Than Enough',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            { number: 4, spans: [ t('And all the wise men, that wrought all the work of the sanctuary, came every man from his work which they made;') ] },
            { number: 5, spans: [ t('And they spake unto Moses, saying, The people bring '), hp('much more than enough', 'too-much-enough'), t(' for the service of the work, which the LORD commanded to make.') ] },
            { number: 6, spans: [ t('And Moses gave commandment, and they caused it to be proclaimed throughout the camp, saying, Let neither man nor woman make any more work for the offering of the sanctuary. So the people were '), hg('restrained from bringing', 'restrained-giving'), t('.') ] },
            { number: 7, spans: [ t('For the stuff they had was '), hy('sufficient', 'dayim-enough'), t(' for all the work to make it, and too much.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'too-much-enough',
          html:
            'This is the only verse in Scripture where the phrase "much more than enough" applies to a gift to God. Everywhere else, Israel&apos;s generosity is measured and incomplete. Here, it overflows. The people have given so freely that Moses must command them to stop. A heart healed by grace does not give strategically. It gives abundantly.',
        },
        {
          kind: 'commentary',
          id: 'restrained-giving',
          html:
            'The same word used elsewhere for restraining wickedness is used here for restraining generosity. In Exodus 32, when the people made the golden calf, they had to be stopped from idolatry. In Exodus 36, they have to be stopped from giving. This is the inversion of the calf chapter. The same people, the same wilderness, but now their hearts run toward God instead of away from Him. One chapter, they do what they want and it destroys them. The next, they do what they want and it builds the house of God.',
        },
        {
          kind: 'hebrew',
          id: 'dayim-enough',
          title: 'Dayim — &ldquo;sufficient&rdquo;',
          script: 'דַּיִּם',
          translit: '<strong>dayim</strong> · sufficient, enough; from a root meaning "to suffice"',
          description:
            'A simple word, but loaded with meaning here. The people have given not just enough, but overflowing. The work of God is never left undone for lack of resources when the people&apos;s hearts have been turned toward Him.',
        },
        {
          kind: 'carry',
          html:
            'You know the moment when someone tells you your gift is enough. When you have done more than was asked, given more than was needed, and the answer comes back: Stop. You have already done it. There is a strange joy in that—the knowledge that your overflowing did not go unnoticed. You gave until there was nothing left to give, and it was received completely. This is what the people felt. This is what a grace-healed heart experiences.',
        },
        {
          kind: 'reflection',
          id: 'reflect-enough',
          prompt:
            'When have you felt the restraint of "enough"—when something you were giving or doing had truly become complete? What did that feel like?',
        },
      ],
    },

    /* ─── Exodus 36:8–13 — The Curtains ──────────────────────────────── */
    {
      ref: 'Exodus 36:8–13',
      title: 'The Curtains of the Tabernacle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            { number: 8, spans: [ t('And every wise hearted man among them that wrought the work of the tabernacle made '), t('ten curtains'), t(' of fine twined linen, and blue, and purple, and scarlet: with cherubims of cunning work made he them.') ] },
            { number: 9, spans: [ t('The length of one curtain was twenty and eight cubits, and the breadth of one curtain four cubits: the curtains were all of one size.') ] },
            { number: 10, spans: [ t('And he coupled five curtains one unto another: and the other five curtains he coupled one unto another.') ] },
            { number: 11, spans: [ t('And he made loops of blue on the edge of one curtain from the selvedge in the coupling: likewise he made in the uttermost edge of another curtain, in the coupling of the second.') ] },
            { number: 12, spans: [ t('Fifty loops made he in one curtain, and fifty loops made he in the edge of the curtain which was in the coupling of the second: the loops held one curtain to another.') ] },
            { number: 13, spans: [ t('And he made fifty taches of gold, and coupled the curtains one unto another with the taches: so it became one tabernacle.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'curtains-construction',
          html:
            'The details of the curtains mirror the blueprint of Exodus 25. Ten curtains, four cubits wide, twenty-eight cubits long. Coupled into two groups of five, then joined with golden taches. The text is repeating the blueprint back to us not because we need to understand the mathematics, but because the people are actually doing what God said. They are not improvising. They are not adapting. They are fulfilling the vision God gave them, exactly as it was given.',
        },
        {
          kind: 'carry',
          html:
            'There is a particular kind of obedience that does not question, does not edit, does not improve. It simply does what it was asked to do, exactly as it was shown. The craftsmen could have made the curtains larger, or smaller, or a different color. They did not. They took the word God gave them and made it into matter. This kind of fidelity—to the vision, to the call, to the specific shape of what you were asked to do—is itself a form of love.',
        },
        {
          kind: 'reflection',
          id: 'reflect-obedience',
          prompt:
            'When have you had to follow detailed instructions without changing them? What was hard about that, and what was good about it?',
        },
      ],
    },

    /* ─── Exodus 36:14–34 — Boards and Sockets ──────────────────────── */
    {
      ref: 'Exodus 36:14–34',
      title: 'The Structure Built',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            { number: 14, spans: [ t('And he made curtains of goats&apos; hair for the tent over the tabernacle: eleven curtains he made them.') ] },
            { number: 15, spans: [ t('The length of one curtain was thirty cubits, and four cubits was the breadth of one curtain: the eleven curtains were of one size.') ] },
            { number: 16, spans: [ t('And he coupled five curtains by themselves, and six curtains by themselves.') ] },
            { number: 17, spans: [ t('And he made fifty loops upon the uttermost edge of the curtain in the coupling, and fifty loops made he upon the edge of the curtain which coupleth the second.') ] },
            { number: 18, spans: [ t('And he made fifty taches of brass to couple the tent together, that it might be one.') ] },
            { number: 19, spans: [ t('And he made a covering for the tent of rams&apos; skins dyed red, and a covering of badgers&apos; skins above that.') ] },
            { number: 20, spans: [ t('And he made '), hy('boards', 'boards-construction'), t(' for the tabernacle of shittim wood, standing up.') ] },
            { number: 21, spans: [ t('The length of a board was ten cubits, and the breadth of a board one cubit and a half.') ] },
            { number: 22, spans: [ t('One board had two tenons, equally distant one from another: thus did he make for all the boards of the tabernacle.') ] },
            { number: 23, spans: [ t('And he made boards for the tabernacle; twenty boards for the south side southward:') ] },
            { number: 24, spans: [ t('And forty sockets of silver he made under the twenty boards; two sockets under one board for his two tenons, and two sockets under another board for his two tenons.') ] },
            { number: 25, spans: [ t('And for the other side of the tabernacle, which is toward the north, he made twenty boards,') ] },
            { number: 26, spans: [ t('And their forty sockets of silver; two sockets under one board, and two sockets under another board.') ] },
            { number: 27, spans: [ t('And for the sides of the tabernacle westward he made six boards.') ] },
            { number: 28, spans: [ t('And two boards made he for the corners of the tabernacle in the two sides.') ] },
            { number: 29, spans: [ t('And they were coupled beneath, and coupled together at the head thereof, to one ring: thus he did to both of them in both the corners.') ] },
            { number: 30, spans: [ t('And there were eight boards; and their sockets were sixteen sockets of silver, under every board two sockets.') ] },
            { number: 31, spans: [ t('And he made bars of shittim wood; five for the boards of the one side of the tabernacle,') ] },
            { number: 32, spans: [ t('And five bars for the boards of the other side of the tabernacle, and five bars for the boards of the tabernacle for the sides westward.') ] },
            { number: 33, spans: [ t('And he made the middle bar to shoot through the boards from the one end to the other.') ] },
            { number: 34, spans: [ t('And he overlaid the boards with '), hg('gold', 'gold-boards'), t(', and made their rings of gold to be places for the bars, and overlaid the bars with gold.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'boards-construction',
          html:
            'The boards are structural—they hold up the tent. But they are also symbolic. The wood is acacia (shittim), the same wood as the ark and the altar. Every piece of the tabernacle is made of the same materials, speaks the same language. The boards stand ten cubits high, set in silver sockets. A portable building designed to move with the people as they wander.',
        },
        {
          kind: 'commentary',
          id: 'gold-boards',
          html:
            'Gold overlays everything: boards, rings, bars. Gold is purity, permanence, the incorruptible. The structure that holds the sanctuary is not ornamental gold. It is functional gold. Even the parts of the building nobody sees, the internal structure, the weight-bearing frame—it is covered in gold. God&apos;s dwelling place is not beautiful on the outside only. Its depths are precious too.',
        },
        {
          kind: 'carry',
          html:
            'The tabernacle was built to move. Its boards could be taken apart, carried, and set up again in a new place. The people of Israel never had a fixed home during those wilderness years—but they always had this. A portable sanctuary, a moveable dwelling place of God. Whatever else was unstable, God&apos;s presence was constant. The structure might change locations, but the presence remained.',
        },
        {
          kind: 'reflection',
          id: 'reflect-structure',
          prompt:
            'What structures or routines in your life help you sense God&apos;s presence, even when everything else feels unstable?',
        },
      ],
    },

    /* ─── Exodus 36:35–38 — The Veil ────────────────────────────────── */
    {
      ref: 'Exodus 36:35–38',
      title: 'The Veil That Separates Holy from Common',
      blocks: [
        {
          kind: 'scripture',
          chapter: 36,
          lines: [
            { number: 35, spans: [ t('And he made a veil of '), t('blue, and purple, and scarlet, and fine twined linen'), t(': with cherubims made he it of cunning work.') ] },
            { number: 36, spans: [ t('And he made thereunto four pillars of shittim wood, and overlaid them with gold: their hooks were of gold; and he cast for them four sockets of silver.') ] },
            { number: 37, spans: [ t('And he made an hanging for the tabernacle door of blue, and purple, and scarlet, and fine twined linen, of needlework;') ] },
            { number: 38, spans: [ t('And the five pillars of it with their hooks: and he overlaid the chapiters of them and their fillets with gold: but their five sockets were of brass.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'veil-separation',
          html:
            'The veil is the most sacred object in the tabernacle—not in size, but in what it does. It separates the holy of holies, where God dwells above the mercy seat, from the holy place where the priests serve. The veil is woven from the same materials as the curtains: blue, purple, scarlet, fine linen. It is a boundary made beautiful. The separation between God and people is not a wall of wood or stone. It is cloth—fine, intricate, crafted with cherubim embroidered into it. Even the line between the holy and the common is made of artistry.',
        },
        {
          kind: 'christ',
          id: 'christ-veil',
          title: 'Christ Connection — The Veil Torn Open',
          html:
            'When Jesus died on the cross, Matthew tells us: "And, behold, the veil of the temple was rent in twain from the top to the bottom; and the earth did quake, and the rocks rent" (Matt. 27:51). The very thing that separated the holy place from the common world—the boundary that only the high priest could cross, and only once a year—was torn open. Hebrews makes the meaning clear: Jesus is "the way into the holiest… a new and living way, which he hath consecrated for us, through the veil, that is to say, his flesh" (Heb. 10:19–20). The veil is no longer needed because the distance between God and humanity has been closed. You do not need a veil anymore. You need a person—and He has come.',
        },
        {
          kind: 'carry',
          html:
            'A veil protects. It also confines. For all the beauty of this embroidered cloth with its cherubim, it is still keeping you out. You cannot go past it. You cannot see what is on the other side. You can only know God through the priests who go behind it, through the sacrifices they make, through the word they bring back to you. This was life under the old covenant. Now, the veil is gone. Now, you can know Him directly—not just through a messenger, not just through a system, but face to face.',
        },
        {
          kind: 'reflection',
          id: 'reflect-veil',
          prompt:
            'What barriers have you felt between yourself and God? What would it mean for that barrier to be gone?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'The people brought much more than enough. Moses had to restrain them from giving. A heart healed by grace overflows.',
    snippet: 'Exodus 36 · Study Guide',
    ref: 'Exodus 36:5',
    label: 'Share Exodus 36',
  },

  hasHebrew: true,
};
