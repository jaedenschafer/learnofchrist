import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Acts 27 — The Voyage to Rome; Shipwreck on Malta
 *
 * Paul is being sent to Rome as a prisoner to stand trial before Caesar.
 * A ship sets sail in autumn, moving slowly against the wind. Paul warns
 * that the voyage will bring loss, but no one believes him. A great storm—
 * the Euroclydon—arises. For many days, neither sun nor stars appear. The
 * crew and passengers lose all hope. But Paul stands in the night and says:
 * "There stood by me this night the angel of God, whose I am, and whom I
 * serve." He tells them to be of good cheer—they will be lost at sea, but
 * all 276 souls will reach land safely. The ship breaks upon the rocks of
 * Malta, but every person escapes alive.
 *
 * Through the voyage runs a thread of confidence—the man who belongs to God
 * has already been promised deliverance. What the crew sees as disaster, Paul
 * knows as God&apos;s mercy. The chapter turns on a single moment: when Paul
 * breaks bread before them all and gives thanks. In that act, the storm loses
 * its power to drown hope.
 */
export const ACTS_27: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 27,

  estimatedMinutes: { beginner: 7, intermediate: 14, deep: 20 },
  intros: [
    'Acts 27 is the longest chapter of suspense in Acts. Luke is a meticulous reporter—he counts the days, the fathoms, the souls on the ship. He names the winds, marks the hours, notes the hardships. But through every detail runs something the crew cannot see: a man on the ship whose God has already spoken. Paul has not been promised escape. He has been promised something harder: that his life will be spared so that he can stand before Caesar. And in that promise lies the promise for everyone with him.',
    'The voyage is a portrait of faith in the dark. The crew has maps, experience, and seamanship. Paul has only a word from God—one that turns out to be true when the maps and experience fail. The punchline comes when Paul takes bread, gives thanks before them all, and eats. In that moment—in the middle of the wreck, with 276 souls about to face the sea—the gospel breaks through. Bread offered in the storm. A man saying thank you to God when everything is being lost. That is what faith looks like when the world is sinking.',
  ],

  sections: [
    /* ─── Acts 27:1–2 — The Voyage Begins ──────────────────────────────────── */
    {
      ref: 'Acts 27:1–2',
      title: 'The Voyage Begins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(1, 'And when it was determined that we should sail into Italy, they delivered Paul and certain other prisoners unto one named Julius a centurion of Augustus&apos; band.'),
            plain(2, 'And entering into a ship of Adramyttium, we launched, meaning to sail by the coasts of Asia; one Aristarchus, a Macedonian of Thessalonica, being with us.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'act27-determined',
          html:
            'Paul is to be sent to Rome. The decision has been made, the centurion assigned, the prisoners delivered into his charge. Luke uses the word &ldquo;we&rdquo;—he is now traveling with Paul. Aristarchus, Paul&apos;s companion from Thessalonica, is also there. Paul is not traveling alone to his trial. The people who know and love him will see what God does.',
        },
        {
          kind: 'carry',
          html:
            'Paul is a prisoner being sent to stand trial. He has no control over the ship&apos;s course, no authority over the centurion, no guarantee of a fair hearing. Yet he is not paralyzed by fear. He is on his way to do what he was called to do—preach before Caesar. Whatever losses come, whatever delays or dangers, they are already part of God&apos;s plan. What journey are you on that feels like it is out of your control? What if the very lack of control is where God is most at work?',
        },
        {
          kind: 'reflection',
          id: 'act27-determined-prompt',
          prompt: 'What part of your life feels predetermined by others, beyond your control? How does Paul&apos;s trust help you face that?',
        },
      ],
    },

    /* ─── Acts 27:3–8 — Paul&apos;s Warning Ignored ──────────────────────────── */
    {
      ref: 'Acts 27:3–8',
      title: 'Past Cnidus and Crete; Paul&apos;s Warning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(3, 'And the next day we touched at Sidon. And Julius courteously entreated Paul, and gave him liberty to go unto his friends to refresh himself.'),
            plain(4, 'And when we had launched from thence, we sailed under the lee of Cyprus, because the winds were contrary.'),
            plain(5, 'And when we had sailed over the sea of Cilicia and Pamphylia, we came to Myra, a city of Lycia.'),
            plain(6, 'And there the centurion found a ship of Alexandria sailing into Italy; and he put us therein.'),
            plain(7, 'And when we had sailed slowly many days, and scarce were come over against Cnidus, the wind not suffering us to go further, we sailed under the lee of Crete, over against Salmone;'),
            plain(8, 'And, hardly passing it, came unto a place which is called The fair havens; nigh whereunto was the city of Lasea.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'act27-slow-sailing',
          html:
            'The voyage is slow. The wind is contrary. The ship is fighting against the season—it is autumn now, and sailing the Mediterranean in autumn is treacherous. They move from port to port, always struggling against the wind. The crew is experienced, but experience cannot control the weather. They are now near Crete, at a harbor called Fair Havens—a name that will soon become ironic.',
        },
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(9, 'Now when much time was spent, and when sailing was now dangerous, because the fast was now already past, Paul admonished them,'),
            plain(10, 'And said unto them, Sirs, I perceive that this voyage will be with hurt and much damage, not only of the cargo and ship, but also of our lives.'),
            plain(11, 'Nevertheless the centurion believed the master and the owner of the ship, more than those things which were spoken by Paul.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'act27-paul-warns',
          html:
            'Paul speaks. He is a prisoner, not a sailor. He has no authority on this ship. But he perceives—perhaps by revelation, perhaps by the same common sense any person could use—that the season is too late. The fast is &ldquo;already past.&rdquo; This is the Day of Atonement, the latest safe day to sail the Mediterranean. What comes after is the danger season. Paul admonishes them: &ldquo;Sirs, I perceive that this voyage will be with hurt and much damage, not only of the cargo and ship, but also of our lives.&rdquo;',
        },
        {
          kind: 'greek',
          id: 'act27-nēsteia',
          title: 'Nēsteia — Fasting; The Day of Atonement',
          script: 'νηστεία',
          translit: '<strong>nēsteia</strong> · fasting; the act of abstaining from food; also, the season of the Day of Atonement',
          description:
            'The fast that &ldquo;was now already past&rdquo; refers to Yom Kippur, the Day of Atonement, after which Mediterranean sailing became increasingly dangerous. Paul is marking time not by the calendar but by the liturgical year—a prisoner&apos;s way of keeping faith.',
        },
        {
          kind: 'commentary',
          id: 'act27-not-believed',
          html:
            'The centurion believes the ship&apos;s master and owner instead. They have a business incentive to sail—a ship in harbor makes no money. The master has sailed these waters a hundred times. The owner wants to reach Italy. Paul is a prisoner. Why would anyone listen to him? The cost of heeding Paul&apos;s warning is delay and lost profit. The cost of ignoring it will be death. But that cost is not yet visible.',
        },
        {
          kind: 'carry',
          html:
            'When have you heard a warning you knew was true but chose to ignore because the person giving it had no authority, or because the immediate cost of listening seemed too high? Paul is right. The centurion, the master, and the owner are experienced. But experience without humility becomes stubbornness. A prisoner&apos;s word, spoken humbly and directly, is easier to dismiss than to heed. Yet it turns out to be the only word on that ship worth believing.',
        },
        {
          kind: 'reflection',
          id: 'act27-warning-prompt',
          prompt: 'When have you dismissed good advice because of where it came from? What made you finally believe, or what would have helped you listen?',
        },
      ],
    },

    /* ─── Acts 27:12–14 — The Euroclydon Strikes ──────────────────────────── */
    {
      ref: 'Acts 27:12–14',
      title: 'The Euroclydon; The Storm Breaks',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(12, 'And because the haven was not commodious to winter in, the more part advised to depart thence also, if by any means they could reach Phenice, and there to winter; which is an haven of Crete, and lieth toward the southwest and northwest.'),
            plain(13, 'And when the south wind blew softly, supposing that they had obtained their purpose, they loosed from Fair Havens, and sailed close by Crete.'),
            plain(14, 'But not long after there arose against it a tempestuous wind, called Euroclydon:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'act27-false-hope',
          html:
            'Fair Havens is not a good place to winter. The decision is made: sail for Phenice, a better harbor on the southwestern coast of Crete. When the south wind blows gently, they think they have succeeded. They have their purpose. They loosen from Fair Havens and sail close by Crete. For a moment, it seems Paul is wrong. But the south wind is only the calm before the storm.',
        },
        {
          kind: 'greek',
          id: 'act27-euroklydōn',
          title: 'Euroklydōn — The Northeaster; Furious Storm',
          script: 'εὐροκλύδων',
          translit: '<strong>euroklydōn</strong> · a violent northeasterly wind; the northeaster',
          description:
            'The Euroclydon is a specific, notorious wind of the Mediterranean—a violent northeast gale that can arise suddenly and with devastating force. Sailors knew it by name. For those who encountered it on a small ship in autumn, it meant disaster.',
        },
        {
          kind: 'carry',
          html:
            'One good wind, one moment of apparent success, and the crew thinks the danger has passed. But it is the lull before the tempest. How often does God let you taste just enough success to make you comfortable before the real trial comes? The Euroclydon is not punishment—Paul has already said they will all survive. It is the storm that will teach them what Paul already knows: that they cannot trust the weather, cannot trust their skill, cannot trust anything but the word of the God who speaks through a prisoner.',
        },
        {
          kind: 'reflection',
          id: 'act27-false-hope-prompt',
          prompt: 'What false sense of security have you had, just before a real storm broke? How did that teach you about trust?',
        },
        {
          kind: 'artwork',
          matchTitle: /storm|sea|ship|euroclydon/i,
          matchArtist: /tissot|mctaggart|cormon/i,
          caption: 'Acts 27:14 · The Euroclydon Storm Breaks',
        },
      ],
    },

    /* ─── Acts 27:15–20 — Days Without Sun or Stars ──────────────────────── */
    {
      ref: 'Acts 27:15–20',
      title: 'Neither Sun nor Stars in Many Days',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(15, 'And when the ship was caught, and could not bear up into the wind, we let her drive.'),
            plain(16, 'And running under the lee of a small island called Clauda, we had much work to come by the boat: which when they had taken up, they used helps, undergirding the ship; and, fearing lest they should fall into the quicksands, strake sail, and so were driven.'),
            plain(17, 'And we being exceedingly tossed with a tempest, the next day they lightened the ship;'),
            plain(18, 'And the third day we cast out with our own hands the tackling of the ship.'),
            plain(19, 'And when neither sun nor stars in many days appeared, and no small tempest lay upon us, all hope that we should be saved was then taken away.'),
            plain(20, 'But after long abstinence Paul stood forth in the midst of them, and said, Sirs, ye should have hearkened unto me, and not have loosed from Crete, and have gained this harm and loss.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'act27-ship-caught',
          html:
            'The ship cannot fight the wind. They let her drive—meaning they surrender to the storm and let it push them where it will. They run under the lee of an island to gain a moment of shelter. They undergird the ship—wrapping cables around it to hold it together under the strain. Still the storm rages.',
        },
        {
          kind: 'greek',
          id: 'act27-boēthēma',
          title: 'Boēthēma — Support; Undergirding; Help',
          script: 'βοήθημα',
          translit: '<strong>boēthēma</strong> · a help; a support; something used to undergird or prop up',
          description:
            'The crew undergirds the ship with cables and supports. Boēthēma is also a spiritual word—the help and support God gives in times of trouble. Here it is literal rope and wood. But the deeper truth is that the ship, and the ship&apos;s people, will need a help that rope cannot provide.',
        },
        {
          kind: 'commentary',
          id: 'act27-jettison',
          html:
            'The storm is so violent that the crew lightens the ship by throwing cargo overboard. Then they cast out the tackling—the ship&apos;s own equipment—with their own hands. Everything that can be spared is thrown into the sea. But even that is not enough. For many days, neither sun nor stars appear. The crew cannot navigate. They have no idea where they are, or where the storm is driving them. All hope that they should be saved is taken away.',
        },
        {
          kind: 'carry',
          html:
            'The crew has thrown overboard everything—the cargo that represents profit, the tackling that represents a working ship, the tools that represent their competence as sailors. For days they see no sun, no stars, no reference point. All hope is gone. You know this darkness. A diagnosis with no good outcome. A relationship where all the words have been said and nothing has changed. A financial collapse where the arithmetic no longer works. A loss that strips away the props you were leaning on. In that darkness, when all hope is gone, Paul has something to say. Not yet. But he is coming.',
        },
        {
          kind: 'reflection',
          id: 'act27-darkness-prompt',
          prompt: 'When have you lost all hope—when the sun and stars both seemed gone? What brought you through?',
        },
      ],
    },

    /* ─── Acts 27:21–26 — "Be of Good Cheer" ───────────────────────────────── */
    {
      ref: 'Acts 27:21–26',
      title: '&ldquo;There Stood by Me This Night&rdquo;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(21, 'But after long abstinence Paul stood forth in the midst of them, and said, Sirs, ye should have hearkened unto me, and not have loosed from Crete, and have gained this harm and loss.'),
            plain(22, 'And now I exhort you to be of good cheer: for there shall be no loss of any man&apos;s life among you, but of the ship.'),
            plain(23, 'For there stood by me this night the angel of God, whose I am, and whom I serve,'),
            plain(24, 'Saying, Fear not, Paul; thou shalt be brought before Caesar: and, lo, God hath given thee all them that sail with thee.'),
            plain(25, 'Wherefore, sirs, be of good cheer: for I believe God, that it shall be even as it was told me.'),
            plain(26, 'Howbeit we must be cast upon a certain island.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'act27-paul-stands',
          html:
            'Paul has not eaten for many days. The ship is in chaos. The crew has given up hope. Now Paul stands forth in the midst of them. Not to say &ldquo;I told you so&rdquo;—though he does mention it. Not to lead a mutiny or take control. Simply to speak. And what he says is this: &ldquo;Be of good cheer.&rdquo;',
        },
        {
          kind: 'greek',
          id: 'act27-tharseo',
          title: 'Tharseo — Be of Good Cheer; Take Courage',
          script: 'θαρσέω',
          translit: '<strong>tharseo</strong> · be of good cheer; take courage; be confident',
          description:
            'The same word Jesus uses when He walks on the water and His disciples cry out in fear: &ldquo;It is I; be not afraid&rdquo;—<em>tharseto</em>. The same word the risen Christ uses to Mary Magdalene and the disciples. It means: courage. Confidence. Good cheer. It is a word that presumes something to be glad about, even when the world looks dark.',
        },
        {
          kind: 'commentary',
          id: 'act27-angel-promise',
          html:
            'Paul does not promise deliverance because he is an optimist. He promises it because an angel of God has stood by him in the night. The angel has told him: &ldquo;Fear not, Paul; thou shalt be brought before Caesar.&rdquo; Paul&apos;s life is not in question—God has already settled it. And not just Paul&apos;s life. &ldquo;God hath given thee all them that sail with thee.&rdquo; Because Paul is going to live, everyone with Paul will live too.',
        },
        {
          kind: 'commentary',
          id: 'act27-believe-god',
          html:
            'Wherefore, sirs, be of good cheer: for I believe God, that it shall be even as it was told me. Paul is not preaching positive thinking. He is preaching faith in God&apos;s promise. He has heard God speak. He believes what he heard. The storm is still raging. The ship is still breaking. But the word of God has more weight than the storm.',
        },
        {
          kind: 'christ',
          id: 'act27-be-cheer',
          title: 'Christ Connection — &ldquo;Be of Good Cheer; I Have Overcome the World&rdquo;',
          html:
            'The last words Jesus speaks to His disciples before going to the cross are: &ldquo;In the world ye shall have tribulation: but be of good cheer; I have overcome the world&rdquo; (John 16:33). Paul stands on a sinking ship and echoes that same word: be of good cheer. Not because the storm will not come. It is here. Not because there will be no loss—the ship will be lost. But because the God who commands the storm has already promised deliverance. The same God who spoke to Paul in the darkness speaks to you now: be of good cheer. I have already won.',
        },
        {
          kind: 'carry',
          html:
            'The crew hears Paul say: &ldquo;Be of good cheer. There shall be no loss of any man&apos;s life among you.&rdquo; These are people who have lost all hope. They have thrown everything overboard. They do not know where they are. And a prisoner—a man with no authority—stands and tells them to be of good cheer. Not because things will get better. The ship will still break. But because something is true that makes the breaking bearable: God has spoken. God has promised. God will keep His word. That is the difference between optimism and faith. Optimism hopes things will turn out well. Faith knows they will turn out as God has promised, and that is enough.',
        },
        {
          kind: 'reflection',
          id: 'act27-good-cheer-prompt',
          prompt: 'When have you heard a word of promise—from God, from Scripture, from someone you trusted—that helped you face a storm? What made you believe it?',
        },
        {
          kind: 'artwork',
          matchTitle: /angel|paul|dark|light|vision/i,
          caption: 'Acts 27:23–24 · The Angel Appears to Paul',
        },
      ],
    },

    /* ─── Acts 27:27–32 — The Soundings; Sailors Plot to Escape ────────────── */
    {
      ref: 'Acts 27:27–32',
      title: 'The Soundings; Sailors Plot to Escape',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(27, 'But when the fourteenth night was come, as we were driven up and down in Adria, about midnight the shipmen deemed that they drew near to some country;'),
            plain(28, 'And sounded the depth, and found it twenty fathoms: and when they had gone a little further, they sounded again, and found it fifteen fathoms.'),
            plain(29, 'Then fearing lest we should have fallen upon rocks, they cast four anchors out of the stern, and wished for the day.'),
            plain(30, 'And as the shipmen were about to flee out of the ship, and had let down the boat into the sea, under colour of casting out anchors from the foreship,'),
            plain(31, 'Paul said to the centurion and to the soldiers, Except these abide in the ship, ye cannot be saved.'),
            plain(32, 'Then the soldiers cut off the ropes of the boat, and let her fall away.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'act27-soundings',
          html:
            'For fourteen nights the ship has been driven by the storm. Now they begin to feel bottom. Twenty fathoms. Fifteen fathoms. They are approaching land—they do not know what land, but land is near. The crew throws out four anchors from the stern and waits for daybreak.',
        },
        {
          kind: 'commentary',
          id: 'act27-sailors-flee',
          html:
            'But then the sailors see their chance. They lower a boat, pretending to cast out anchors from the foreship, but actually trying to escape. In the confusion of the storm and the darkness, they can flee. Let the ship sink with the soldiers and prisoners. They will row to land themselves. It is the moment of ultimate cowardice—not from the soldiers or the centurion, but from the men trained to keep the ship safe.',
        },
        {
          kind: 'greek',
          id: 'act27-apokoptō',
          title: 'Apokoptō — Cut Off; Sever',
          script: 'ἀποκόπτω',
          translit: '<strong>apokoptō</strong> · to cut off; to sever; to disconnect',
          description:
            'The soldiers cut off the ropes of the boat. Apokoptō carries the sense of decisive, final action—not a negotiated untying, but a clean severing. What the sailors were planning to use for their own escape is cut away from the ship. There will be no escape for the crew. There will be only one way forward: together.',
        },
        {
          kind: 'commentary',
          id: 'act27-paul-intervenes',
          html:
            'Paul speaks again. Not as the imprisoned man, but as the one who carries God&apos;s word. &ldquo;Except these&rdquo;—the sailors—&ldquo;abide in the ship, ye cannot be saved.&rdquo; The centurion believes him this time. The soldiers cut the ropes. The boat is gone. Now they are truly bound together—all 276 souls on one sinking ship, with no way out but forward.',
        },
        {
          kind: 'carry',
          html:
            'The sailors try to escape. It is the most human thing in the world—save yourself. Let others go down if necessary. But Paul will not allow it. And the centurion, finally trusting Paul, cuts the boat loose. In the church, in families, in communities that work, there is a principle that cuts deeper than self-preservation: we are bound together. If you escape and I am left, we have both lost something essential. We are only saved together, or not at all. Where are you tempted to cut the boat loose—to save yourself at the cost of those bound to you?',
        },
        {
          kind: 'reflection',
          id: 'act27-together-prompt',
          prompt: 'When have you been tempted to save yourself at the cost of community? What would it mean to stay in the ship with others?',
        },
      ],
    },

    /* ─── Acts 27:33–38 — Bread Broken and Eaten ───────────────────────────── */
    {
      ref: 'Acts 27:33–38',
      title: 'Breaking Bread in the Storm',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(33, 'And while the day was coming on, Paul besought them all to take some meat, saying, This day is the fourteenth day that ye have tarried and continued fasting, having taken nothing.'),
            plain(34, 'Wherefore I pray you, take some meat: for this is for your health: for there shall not an hair fall from the head of any of you.'),
            plain(35, 'And when he had thus spoken, he took bread, and gave thanks to God in the presence of them all: and when he had broken it, he began to eat.'),
            plain(36, 'Then were they all of good cheer, and they also took some meat.'),
            plain(37, 'And we were in all in the ship two hundred threescore and sixteen souls.'),
            plain(38, 'And when they had eaten enough, they lightened the ship, and cast out the wheat into the sea.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'act27-bread-blessing',
          html:
            'Paul does something stunning. He takes bread. He gives thanks to God in the presence of them all. He breaks it. He begins to eat. The ship is still being driven by the storm. The timbers are still groaning. But in that moment, a man stands up and eats bread with thanksgiving. And the whole ship watches.',
        },
        {
          kind: 'greek',
          id: 'act27-eucharisteō',
          title: 'Eucharisteō — Give Thanks; Bless',
          script: 'εὐχαριστέω',
          translit: '<strong>eucharisteō</strong> · to give thanks; to bless; to acknowledge with gratitude',
          description:
            'The word is our Eucharist—our Thanksgiving, our Communion. Paul is not having a meal. He is having a blessing. He is raising ordinary bread into an act of faith, of trust, of gratitude to the God whose promise he carries. The ship&apos;s people see it. And something breaks open in them.',
        },
        {
          kind: 'commentary',
          id: 'act27-276-souls',
          html:
            'Luke counts them: two hundred and threescore and sixteen souls. 276 people on the ship. 276 people who have lost all hope. 276 people whose only chance of survival is a promise made to a prisoner by an angel in the night. And when they see Paul give thanks for bread, they all become of good cheer. They eat. They are still in danger. The storm is still raging. But somehow, bread broken and blessed has changed something in them.',
        },
        {
          kind: 'christ',
          id: 'act27-bread-fed',
          title: 'Christ Connection — Bread Multiplied; Fed in the Wilderness',
          html:
            'Paul standing on a sinking ship and breaking bread echoes Jesus in two moments. First, the feeding of the five thousand, when Jesus multiplied loaves and fishes to feed a multitude lost in the wilderness (Matt. 14:19). Second, the Last Supper, when Jesus took bread and broke it and said, &ldquo;This is my body, which is given for you&rdquo; (Luke 22:19). Paul is not performing either miracle. But he is living out the meaning of both: the gospel offered in the wilderness, the gospel offered in the storm, ordinary bread transformed into an act of trust and blessing. Everyone on that ship is being fed by faith—not by what they can see or hold, but by what Paul has heard and believed.',
        },
        {
          kind: 'carry',
          html:
            'You have had a meal offered to you in a moment of crisis. Perhaps someone brought food when the diagnosis came. Perhaps a friend sat down and shared a table with you when everything had fallen apart. Perhaps you have offered bread to someone else in their storm. That is what Paul is doing here. He is not pretending the storm will go away. He is saying: God has spoken. God will keep His word. And in the meantime, we eat together. We break bread. We give thanks. We are still alive. Paul&apos;s act turns the ship from a place of despair into a place of communion. That is the power of bread offered and blessed in the darkness.',
        },
        {
          kind: 'reflection',
          id: 'act27-bread-prompt',
          prompt: 'When have you been offered bread—literally or figuratively—in a storm? What did that bread mean to you?',
        },
        {
          kind: 'artwork',
          matchTitle: /bread|meal|last supper|communion|breaking|thanks/i,
          caption: 'Acts 27:35 · Paul Breaks Bread Before Them All',
        },
      ],
    },

    /* ─── Acts 27:39–44 — The Wreck; All Safe to Land ──────────────────────── */
    {
      ref: 'Acts 27:39–44',
      title: 'The Wreck on Malta; All Escape Safe to Land',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(39, 'And when it was day, they knew not the land: but they discovered a certain creek with a shore, into the which they were minded to thrust in the ship, if it were possible.'),
            plain(40, 'And when they had taken up the anchors, they committed themselves to the sea, and loosed the rudder bands, and hoised up the mainsail to the wind, and made toward shore.'),
            plain(41, 'And falling into a place where two seas met, they encountered a rock, and the forepart of the ship stuck fast, and remained unmoveable: but the hinder part was broken with the violence of the waves.'),
            plain(42, 'And the soldiers&apos; counsel was to kill the prisoners, lest any of them should swim out, and escape.'),
            plain(43, 'But the centurion, willing to save Paul, kept them from their purpose; and commanded that they which could swim should cast themselves first into the sea, and get to land:'),
            plain(44, 'And the rest, some on boards, and some on broken pieces of the ship. And so it came to pass, that they escaped all safe to land.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'act27-wreck',
          html:
            'When daylight comes, the crew does not recognize the coast. But they see a creek with a shore. They cut loose the anchors and commit themselves to the sea. They loose the rudder bands and hoist the mainsail. For the first time since the storm began, they are sailing toward something instead of being driven. And then the ship hits a rock. The forepart sticks fast. The hinder part breaks apart in the waves. The ship is being torn in two.',
        },
        {
          kind: 'greek',
          id: 'act27-asphaleia',
          title: 'Asphaleia — Safety; Security; Certainty',
          script: 'ἀσφάλεια',
          translit: '<strong>asphaleia</strong> · safety; security; certainty; a condition of being safe',
          description:
            'Paul&apos;s promise was asphaleia—safety. Every soul would escape. Now the ship is breaking. The soldiers see an opportunity to kill the prisoners and escape themselves. They are choosing uncertainty and death over the promise of safety. But the centurion, who has learned to trust Paul, chooses differently.',
        },
        {
          kind: 'commentary',
          id: 'act27-prisoners-saved',
          html:
            'The soldiers want to kill the prisoners. It is practical—fewer people in the water means more chance they themselves will survive. But the centurion will not allow it. He is willing to save Paul. He commands that those who can swim cast themselves first into the sea. The rest use boards and broken pieces of the ship. And so it comes to pass: they escaped all safe to land. All 276 souls. Not one life lost. Paul&apos;s word was true.',
        },
        {
          kind: 'christ',
          id: 'act27-all-safe',
          title: 'Christ Connection — The Shepherd Who Leaves None Behind',
          html:
            'Jesus says, &ldquo;I am the good shepherd: the good shepherd giveth his life for the sheep&rdquo; (John 10:11). Paul, standing on the sinking ship, echoes that shepherding. He will not allow the prisoners to be killed. The centurion, learning from Paul, refuses to save himself at their cost. They save together, or not at all. Not one soul is lost. The promise holds. This is the logic of the cross—the strong bear the weak, the one brings the many to safety, nobody is left behind.',
        },
        {
          kind: 'carry',
          html:
            'The centurion was willing to let the soldiers kill the prisoners to save their own skins. It would have been practical. It would have improved their odds. But he chose instead to obey Paul&apos;s word: &ldquo;Except these abide in the ship, ye cannot be saved.&rdquo; That centurion is a portrait of faith in action. He trusts a prisoner. He prevents a killing. He ensures that everyone—soldiers, crew, prisoners, Luke the physician, Aristarchus the companion—everyone escapes alive. That is what it looks like when someone finally believes Paul. When someone finally trusts the word that God has spoken. When someone finally lets go of self-preservation and chooses the safety that holds everyone.',
        },
        {
          kind: 'reflection',
          id: 'act27-safe-prompt',
          prompt: 'What does it mean to you that everyone on that ship escaped alive? How does that promise speak to your own storms?',
        },
        {
          kind: 'artwork',
          matchTitle: /wreck|malta|ship|breaking|escape|rocks/i,
          matchArtist: /tissot|mctaggart|cormon|shipwreck/i,
          caption: 'Acts 27:41–44 · Shipwreck on Malta',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'And now I exhort you to be of good cheer: for there shall be no loss of any man&apos;s life among you, but of the ship. So it came to pass, that they escaped all safe to land.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 27 · Study Guide',
  },

  hasHebrew: false,
};
