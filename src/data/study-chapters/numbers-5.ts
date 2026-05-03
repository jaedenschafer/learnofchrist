import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 5 — Unclean outside the camp, restitution, and the sotah ritual.
 *
 * 31 verses covering three sections:
 * 1. Verses 1–4: Those who are unclean (leprous, with a discharge, defiled by death)
 *    must be separated outside the camp. The camp is holy space.
 * 2. Verses 5–10: When someone sins against a neighbor, confession and restitution,
 *    plus 20% compensation. A guilt offering is brought to the priest.
 * 3. Verses 11–31: The sotah ritual — a woman suspected of adultery. The husband
 *    cannot simply divorce or condemn her on suspicion; instead, God Himself judges
 *    through the ritual of bitter waters. This is not an inquisition but a divine
 *    protection AGAINST unjust accusation. The woman's body becomes the instrument
 *    of truth. If innocent, she is cleared. If guilty, the waters reveal it.
 *
 * Hebrew key terms:
 * - sotah (suspected adulteress)
 * - me ha-marim (waters of bitterness)
 *
 * The sotah ritual is striking because the husband cannot judge; only God can.
 * Christ connection: John 8:1–11 — the woman caught in adultery. Jesus writes in
 * the dust the same way the priest writes curses in the bitter water (Numbers 5:23).
 * The accusers leave; Jesus offers forgiveness instead of bitter water.
 *
 * Voice note: Do not moralize the sotah ritual. Explain its function as a
 * divinely-mediated judgment that protected women from human suspicion alone.
 */
export const NUMBERS_5: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 5,

  estimatedMinutes: { 5: 8, 10: 12, 15: 15 },
  intros: [
    'Numbers 5 addresses three states of holiness violation. First, those who are unclean by disease, discharge, or contact with death are separated outside the camp — the community must remain set apart for worship. Second, when someone wrongs a neighbor, confession and restitution follow, with a guilt offering brought to God. Third, the chapter turns to the most difficult case: a wife suspected of adultery. Here the law does something unusual — it forbids the husband from acting as judge. Instead, God Himself judges through a ritual. The suspected woman is neither divorced on suspicion nor condemned by her husband\'s word alone. A priest administers a test, and God reveals the truth.',
    'The sotah ritual is not an inquisition or a trap. It is a protection. In ancient near eastern cultures, a woman\'s fate rested entirely in her husband\'s judgment. But in Israel, accusation alone is not enough. The law refuses to let mere suspicion destroy a marriage. Instead, it calls on God to judge. The waters will either clear her or reveal her guilt. What makes this remarkable is what it does NOT do: it does not allow the husband\'s doubts or jealousy to be final. The law insists that truth, not suspicion, must rule.',
  ],

  sections: [
    /* ─── Numbers 5:1–4 — The Unclean Outside the Camp ─────────────────── */
    {
      ref: 'Numbers 5:1–4',
      title: 'The Unclean Separated',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Command the children of Israel, that they put out of the camp every leper, and every one that hath an '),
                hy('issue', 'num5-issue'),
                t(', and whosoever is '),
                hp('defiled by the dead', 'num5-defiled'),
                t(':'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Both male and female shall ye put out, without the camp shall ye put them; that they defile not their camps, in the midst whereof I dwell.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the children of Israel did so, and put them out without the camp: as the LORD spake unto Moses, so did the children of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'num5-issue',
          html:
            'An "issue" refers to any bodily discharge — leprosy, blood, any sign of contagion. These conditions mark a person as temporarily unclean and excluded from the congregation\'s holy space. It is not shame; it is a boundary. The camp is where God dwells, and the boundary separates the living from states associated with death.',
        },
        {
          kind: 'hebrew',
          id: 'num5-defiled-hebrew',
          title: 'Tame — &ldquo;unclean, defiled&rdquo;',
          script: 'טָמֵא',
          translit: '<strong>tame</strong> · to be defiled, to touch the unclean',
          description:
            'Ritual uncleanness is not moral failure — it is a state of being set apart. Anyone who touched a corpse, a bone, or a grave became tame for seven days. The uncleanness was real and serious, but it was also temporary. Ritual washing and waiting restored the person to the congregation.',
        },
        {
          kind: 'commentary',
          id: 'num5-defiled',
          html:
            'Contact with death makes a person unclean. Not because death is evil, but because it is final, irrevocable, the boundary between the living and the dead. God dwells among the living. The unclean must be separated, not as punishment, but to preserve the holiness of the camp and the possibility of worship.',
        },
        {
          kind: 'carry',
          html:
            'The law recognizes that some seasons require separation — not because you are bad, but because you are in a state that needs healing or time. If you are grieving the death of someone close, you are not fit for normal life yet. If you are sick, your body needs rest, not productivity. The law says: step outside for a time. The camp is still there when you return. Your place is held.',
        },
        {
          kind: 'reflection',
          id: 'unclean',
          prompt: 'What season of life requires you to step back from normal rhythms right now? What would it look like to honor that need instead of pushing through?',
        },
      ],
    },

    /* ─── Numbers 5:5–10 — Confession, Restitution, and the Guilt Offering ──── */
    {
      ref: 'Numbers 5:5–10',
      title: 'Making Wrong Right',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 5,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Speak unto the children of Israel, When a man or woman shall commit any sin that men commit, to do a trespass against the LORD, and that person be '),
                hg('guilty', 'num5-guilty'),
                t(';'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Then they shall '),
                hp('confess their sin which they have done', 'num5-confession'),
                t(': and he shall recompense his trespass with the principal thereof, and add unto it the '),
                hy('fifth part thereof', 'num5-twenty-percent'),
                t(', and give it unto him against whom he hath trespassed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'num5-guilty',
          html:
            'Guilt is real. When a person wrongs a neighbor — through theft, deception, or broken trust — the law does not minimize it or call it misunderstanding. It calls it what it is: a trespass. A sin against both God and the neighbor.',
        },
        {
          kind: 'hebrew',
          id: 'num5-confession-hebrew',
          title: 'Vidui — &ldquo;confession&rdquo;',
          script: 'וִדּוּיִ',
          translit: '<strong>vidui</strong> · confession, acknowledgment of guilt',
          description:
            'The Hebrew root means to throw or cast — to cast forth the sin, to speak it aloud. Confession is not silent remorse. It is spoken, public, a declaration before God and witness that the wrong has been named.',
        },
        {
          kind: 'commentary',
          id: 'num5-confession',
          html:
            'The law begins with confession. Not restitution alone, not compensation, not apology performed in isolation. First, the guilty person must speak it aloud: "I have done this." In that moment, the wrong stops being hidden and becomes real. Only then can repair begin.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 8,
              spans: [
                t('But if the man have no kinsman to recompense the trespass unto, let the trespass be recompensed unto the LORD, even to the priest; beside the ram of the atonement, whereby an atonement shall be made for him.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And every offering of all the holy things of the children of Israel, which they bring unto the priest, shall be his.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And every man\'s hallowed things shall be his: whatsoever any man giveth the priest, it shall be his.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'num5-twenty-percent',
          title: 'Chamesh — &ldquo;the fifth part&rdquo;',
          script: 'חָמֵשׁ',
          translit: '<strong>chamesh</strong> · fifth, twenty percent',
          description:
            'The restitution includes not just the value of what was taken, but an additional twenty percent — the measure of the wrong goes beyond mere replacement. The theft has cost something that money alone cannot restore: trust, time, peace.',
        },
        {
          kind: 'commentary',
          id: 'num5-restitution',
          html:
            'Restitution is specific. Return the principal — what was taken. Then add twenty percent. The twenty percent is not punishment; it is recognition. The theft did not merely remove an object. It broke trust. The twenty percent is the cost of that breaking.',
        },
        {
          kind: 'carry',
          html:
            'When you have wronged someone, the path back is not shame or excuse. It is confession, restitution, and the acknowledgment that trust costs more to restore than it costs to steal. That number — one hundred twenty percent — is the difference between getting a debt paid and getting a relationship back. When you wrong someone you love, simply replacing what was taken is not enough. You must also pay the cost of the broken trust. That is what real repentance looks like.',
        },
        {
          kind: 'reflection',
          id: 'restitution',
          prompt: 'Is there a wrong you need to confess and make right? What would that restitution look like — not just return, but restoration?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Numbers 5:11–31 — The Sotah Ritual ────────────────────────────── */
    {
      ref: 'Numbers 5:11–31',
      title: 'The Trial of Bitter Waters',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 11,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Speak unto the children of Israel, saying, If any man\'s wife go aside, and commit a trespass against him,'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And a man lie with her carnally, and it be hid from the eyes of her husband, and be kept close, and she be defiled, and there be no witness against her, neither she be taken with the manner;'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And the spirit of jealousy come upon him, and he be jealous of his wife, and she be defiled: or if the spirit of jealousy come upon him, and he be jealous of his wife, and she be not defiled:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'num5-no-witness',
          html:
            'The law describes a specific case: a woman accused of adultery, but with no witnesses and no proof. The husband suspects, perhaps he saw something that alarmed him, perhaps rumor has reached him. But there is no testimony that would hold up in court, no way to prove the charge. What happens now?',
        },
        {
          kind: 'hebrew',
          id: 'num5-sotah',
          title: 'Sotah — &ldquo;suspected adulteress&rdquo;',
          script: 'סוֹטָה',
          translit: '<strong>sotah</strong> · she who has gone aside, the suspected woman',
          description:
            'The word means literally "she who has gone aside," the woman who has turned away from her husband. In ancient cultures, such suspicion alone was often enough to condemn her. But the law refuses to let suspicion be final.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 15,
              spans: [
                t('Then shall the man bring his wife unto the priest, and he shall bring her offering for her, the tenth part of an ephah of barley meal; he shall pour no oil upon it, nor put frankincense thereon; for it is an offering of jealousy, an offering of memorial, bringing iniquity to remembrance.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'num5-barley-offering',
          html:
            'The husband brings his wife to the priest, and with her he brings an offering: barley meal, plain, with no oil or frankincense. Barley is the grain of the poor. It is a humble offering, befitting an accusation without proof. The offering is described as "bringing iniquity to remembrance" — it names what is suspected, but not proven.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 16,
              spans: [
                t('And the priest shall bring her near, and set her before the LORD:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the priest shall take holy water in an earthen vessel; and of the dust that is in the floor of the tabernacle the priest shall take, and put it into the water:'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the priest shall set the woman before the LORD, and uncover the woman\'s head, and put the offering of memorial in her hands, which is the offering of jealousy: and the priest shall have in his hand the bitter water that causeth the curse:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'num5-bitter-waters',
          html:
            'The priest prepares the waters of bitterness — holy water from the tabernacle floor, mixed with dust from the sanctuary ground. The woman is brought before God Himself. Her head is uncovered, a sign of vulnerability. She holds the offering of jealousy. And the priest holds the bitter water.',
        },
        {
          kind: 'hebrew',
          id: 'num5-marim',
          title: 'Me ha-Marim — &ldquo;waters of bitterness&rdquo;',
          script: 'מֵי הַמָּרִים',
          translit: '<strong>me ha-marim</strong> · the waters of bitterness',
          description:
            'The waters taste of judgment. They are described as causing a curse if guilt is found. Yet they are administered by God, not by the husband. The woman\'s innocence or guilt is revealed not by human judgment but by divine response. God is the only judge who can see what is hidden.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 19,
              spans: [
                t('And the priest shall charge her by an oath, and say unto the woman, If no man have lain with thee, and if thou hast not gone aside to uncleanness with another instead of thy husband, be thou free from this bitter water that causeth the curse:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('But if thou hast gone aside to another instead of thy husband, and if thou be defiled, and some man have lain with thee beside thine husband:'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Then the priest shall charge the woman with an oath of cursing, and the priest shall say unto the woman, The LORD make thee a curse and an oath among thy people, when the LORD doth make thy thigh to rot, and thy belly to swell;'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And this water that causeth the curse shall go into thy bowels, to make thy belly to swell, and thy thigh to rot: And the woman shall say, '),
                hp('Amen, Amen', 'num5-amen'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'num5-amen',
          html:
            'The woman herself must say "Amen" — she agrees to the test, accepts its outcome. She is not passive. She is not compelled against her will. She stands before God and accepts His judgment. If innocent, she is vindicated. If guilty, the waters reveal it. The test is severe, but it is not hidden. It is open, witnessed, and subject to divine truth alone.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 23,
              spans: [
                t('And the priest shall write these curses in a book, and he shall blot them out with the bitter water:'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And he shall cause the woman to drink the bitter water that causeth the curse: and the water that causeth the curse shall enter into her, if she be defiled.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Then the priest shall take the jealousy offering out of the woman\'s hand, and shall wave the offering before the LORD, and offer it upon the altar:'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And the priest shall take an handful of the offering, even the memorial thereof, and burn it upon the altar, and afterward shall cause the woman to drink the water.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'num5-writing',
          html:
            'The priest writes the curse upon a scroll. Then he blots it out with the bitter water — the curse is literally mixed into the water the woman drinks. If she is innocent, the curse has no power. If she is guilty, the curse enters into her and the waters bring forth the truth.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 27,
              spans: [
                t('And when he hath made her to drink the water, then it shall come to pass, that, if she be defiled, and have done trespass against her husband, that the water that causeth the curse shall enter into her, and become bitter, and her belly shall swell, and her thigh shall rot: and the woman shall be a curse among her people.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And if the woman be not defiled, but be clean; then she shall be free, and shall conceive seed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'num5-outcome',
          html:
            'The outcomes are total. If guilty, the waters reveal her guilt in a way that cannot be denied — her body becomes the instrument of truth. If innocent, she is not merely acquitted; she is cleared and even blessed with the ability to bear children. The law does not assume guilt. It holds suspicion and proof as entirely separate things.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 29,
              spans: [
                t('This is the law of jealousies, when a wife goeth aside to another instead of her husband, and is defiled;'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Or when the spirit of jealousy cometh upon him, and he be jealous over his wife, and shall set her before the LORD, and the priest shall execute upon her all this law.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('Then shall the man be guiltless from iniquity, and this woman shall bear her iniquity.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'num5-protection',
          html:
            'What makes this ritual remarkable is what it does NOT allow. The husband cannot divorce on suspicion. He cannot condemn on his word alone. He cannot even punish based on jealousy. What he CAN do is bring his suspicion to God and ask God to judge. The test is public, witnessed, divine. The woman is not left at the mercy of her husband\'s doubts. She stands before the Lord.',
        },
        {
          kind: 'christ',
          id: 'num5-christ',
          title: 'Christ Connection — The Woman Caught in Adultery',
          html:
            'John 8:1–11 tells of a woman caught in the act of adultery. The Pharisees bring her before Jesus to test Him: "Moses commanded us to stone such. But what sayest thou?" Jesus kneels and writes on the ground. Then He stands and says, "He that is without sin among you, let him first cast a stone at her." One by one, the accusers leave. Jesus asks the woman, "Where are those thine accusers? hath no man condemned thee?" She answers, "No man, Lord." And Jesus replies, "Neither do I condemn thee: go, and sin no more." What is striking is how closely Jesus mirrors the sotah ritual. The priest writes down the curse. Jesus writes on the ground. The ritual calls for divine judgment, not human condemnation. Jesus offers the same — not judgment from the crowd, but judgment from God, which turns out to be mercy. The woman is not left to the verdict of her accusers. She is brought before God Himself. And God\'s verdict is not destruction, but freedom: "go and sin no more."',
        },
        {
          kind: 'carry',
          html:
            'The sotah law protects women from a particular kind of destruction — the destruction that comes when a man\'s suspicion becomes a woman\'s condemnation. It says: accusation alone is not enough. There must be truth. And truth is God\'s work, not human judgment. The woman accused in John 8 is brought to Jesus by men who claim authority to stone her. They have the law; they have the offense. But Jesus refuses the logic of human judgment. He looks at the accusers and asks the question that silences every court: "Who among you is without sin?" Not because the law against adultery is wrong. But because the people applying it are themselves guilty. Only God can truly judge. And when God judges, grace is possible in a way it never is when humans alone sit in the seat of judgment. If you are being judged by others, remember: their verdict is never the final word. God\'s is.',
        },
        {
          kind: 'reflection',
          id: 'sotah',
          prompt: 'When have you felt judged on suspicion alone? What would change if you truly believed that only God\'s judgment of you ultimately stands?',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Numbers 5',
    quote:
      'When the unclean are separated, when wrongs are confessed and made right with restitution, and when suspicion is brought before God rather than acted upon as judgment, the community is protected. The law refuses to let human doubt be final. God alone is the judge of what is hidden.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 5 · Study Guide',
  },

  hasHebrew: true,
};
