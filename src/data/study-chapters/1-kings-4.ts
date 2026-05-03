import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Kings 4 — Solomon's Administration and the Fullness of Wisdom
 *
 * In this chapter, Solomon is revealed in the fullness of his power: his
 * court is organized, his kingdom is vast, his provision is inexhaustible,
 * and his wisdom is unmatched. The text catalogs his administrators, his
 * twelve officers, the abundance of his daily table, and the far extent of
 * his dominion. But woven beneath this magnificence is a deeper pattern—
 * one that Scripture itself will interrogate. The chapter speaks of a golden
 * age, of "every man under his vine and under his fig tree," a vision of
 * peace that echoes the prophetic hope of the messianic age. It is Israel&apos;s
 * covenantal promise appearing to come true. And then, quietly, the text
 * mentions 40,000 stalls of horses — a detail that breaks the law of
 * Deuteronomy and foreshadows the very troubles that will undo Solomon&apos;s
 * glory. In Solomon, we see both the height of earthly kingship and its
 * fundamental limitation. His wisdom cannot bind his own will to the law
 * of God. Only in Christ is that binding perfected.
 */
export const KINGS_1_4: RichChapterContent = {
  bookSlug: '1-kings',
  bookName: '1 Kings',
  chapter: 4,

  estimatedMinutes: { 5: 5, 10: 12, 15: 16 },
  intros: [
    'After Solomon&apos;s prayer in the temple and his dramatic public displays of wisdom — the judgment of the two mothers — the narrative pauses to show us the machinery of his kingdom. This is not mere administrative detail. It is a portrait of order, of abundance, of a nation brought into harmony under a single wise king. The officers are named, the territories are mapped, the daily provisions are enumerated in staggering quantities. And yet, as we read the chapter, a tension emerges. The chapter opens with Solomon established as king "over all Israel," and it closes with a description of his unsurpassed wisdom. Between these bookends lies a catalog of splendor — and a single, ominous line about horses.',
    'The people of Israel are described as "many, as the sand which is by the sea" — a quotation of the covenantal promise made to Abraham (Genesis 22:17; 32:12). The covenant promise is being fulfilled. Every man dwells safely "under his vine and under his fig tree" — language that will reappear in the prophetic vision of the messianic age (Micah 4:4; Zechariah 3:10). Solomon&apos;s reign is presented as an eschatological moment, a foretaste of the age to come. It is the golden age of Israel. And Solomon is its architect — a king of such wisdom that "his fame was in all nations round about."',
  ],

  bottomShare: {
    label: 'Share 1 Kings 4',
    quote:
      'Solomon&apos;s kingdom is established in peace, his wisdom unmatched among all the earth, and every man dwells safely under his vine and fig tree. Yet beneath the splendor lies a hidden fracture—the king who reigns in wisdom is beginning to accumulate the very things that wisdom forbids.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Kings 4 · Study Guide',
  },

  sections: [
    /* ─── 1 Kings 4:1–6 — Solomon's Cabinet ────────────────────────────── */
    {
      ref: '1 Kings 4:1–6',
      title: 'The Officers of the King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'So king Solomon was king over all Israel.'),
            plain(
              2,
              'And these were the princes which he had; Azariah the son of Zadok the priest,'
            ),
            plain(
              3,
              'Elihoreph and Ahiah, the sons of Shisha, scribes; Jehoshaphat the son of Ahilud, the recorder;'
            ),
            plain(
              4,
              'And Benaiah the son of Jehoiada was over the host: and Zadok and Abiathar were the priests:'
            ),
            plain(
              5,
              'And Azariah the son of Nathan was over the officers: and Zabud the son of Nathan was principal officer, and the king&apos;s friend:'
            ),
            plain(
              6,
              'And Ahishar was over the household: and Adoniram the son of Abda was over the tribute.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cabinet-structure',
          html:
            'The text opens not with poetry but with bureaucracy. Solomon establishes a court that mirrors the structure of earlier kingdoms — scribes, a recorder, a high priest, a commander of the military. The catalog is precise, almost clinical. These are the men who organize the kingdom. But notice who is listed first: not a general, not a priest in the old sense, but Azariah, son of Zadok — a priest who has already sided with Solomon over his rivals. The priesthood is subordinate to the king&apos;s vision of order. And notice Zabud, "the king&apos;s friend" — a position that exists not in the ceremonial structure but in personal trust. Solomon surrounds himself with those he trusts absolutely.',
        },
        {
          kind: 'commentary',
          id: 'priests-dual',
          html:
            'Zadok and Abiathar are listed together as "the priests." Abiathar, who supported Adonijah&apos;s attempted coup, has been allowed to survive — though not with the authority he once held. Zadok, the priest who remained loyal to Solomon, is clearly in the ascendant. The priesthood that once rivaled the kingship is now divided, with one priest exiled and one priest subordinate to the crown. This is the shape of Solomon&apos;s order: unified under the king.',
        },
        {
          kind: 'hebrew',
          id: 'sar',
          title: 'Sar — "Prince" or "Officer"',
          script: 'שַׂר',
          translit: '<strong>Sar</strong> · prince; officer; leader; one who rules',
          description:
            'The Hebrew sar is used throughout this passage for the officials and administrators of Solomon&apos;s court. The word carries both a sense of rulership and of service — a sar is someone given authority, but also someone responsible to a superior authority. Solomon&apos;s sarim are not independent princes; they are his officers, bound to his will.',
        },
        {
          kind: 'carry',
          html:
            'The organization of a kingdom reveals its values. Solomon builds a court based on loyalty, on competence, on the careful distribution of power. Every officer has a specific domain. Nothing is left to chance. We do the same in our own lives — we structure our families, our work, our relationships to reflect what we believe matters. What does the way you organize your own "household" — your time, your relationships, your priorities — say about what you truly believe?',
        },
        {
          kind: 'reflection',
          id: 'cabinet-trust',
          prompt:
            'Solomon surrounds himself with men he trusts — Zadok, Azariah, Zabud. Whom do you trust absolutely with the ordering of important parts of your life? What qualities must a person have for you to place that trust in them?',
        },
      ],
    },

    /* ─── 1 Kings 4:7–19 — The Twelve Officers and the Territories ──────── */
    {
      ref: '1 Kings 4:7–19',
      title: 'The Twelve Officers and the Land Divided',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(
              7,
              'And Solomon had twelve officers over all Israel, which provided victuals for the king and his household: each man his month in a year was his charge.'
            ),
            plain(8, 'And these are their names: The son of Hur, in mount Ephraim:'),
            plain(9, 'The son of Dekar, in Makaz, and in Shaalbim, and Beth-shemesh, and Elon-beth-hanan:'),
            plain(
              10,
              'The son of Hesed, in Aruboth; to him pertained Sochoh, and all the land of Hepher:'
            ),
            plain(
              11,
              'The son of Abinadab, in all the region of Dor; which had Taphath the daughter of Solomon to wife:'
            ),
            plain(12, 'Baana the son of Ahilud; to him pertained Taanach and Megiddo, and all Beth-shean, which is by Zarethan beneath Jezreel, from Beth-shean to Abel-meholah, even unto the place that is beyond Jokneam:'),
            plain(
              13,
              'The son of Geber, in Ramoth-gilead; to him pertained the towns of Jair the son of Manasseh, which are in Gilead; to him also pertained the region of Argob, which is in Bashan, threescore great cities with walls and brasen bars:'
            ),
            plain(14, 'Ahinadab the son of Iddo had Mahanaim:'),
            plain(15, 'Ahimaaz was in Naphtali; he also took Basmath the daughter of Solomon to wife:'),
            plain(
              16,
              'Baanah the son of Hushai, in Asher and in Aloth:'
            ),
            plain(17, 'Jehoshaphat the son of Paruah, in Issachar:'),
            plain(18, 'Shimei the son of Elah, in Benjamin:'),
            plain(19, 'Geber the son of Uri was the only officer which was in the land of Judah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'twelve-officers',
          html:
            'Solomon divides his kingdom into twelve districts, each administered by a single officer. Each man is responsible for the king&apos;s sustenance for one month of the year — a system that ensures both the burden is shared and the obligation is constant. There is no month when someone is not gathering for the king. The twelve officers mirror the twelve tribes, but the divisions do not always follow tribal boundaries. Judah is listed separately, and it is subject to a single officer. This foreshadows the very fracture that will split the kingdom after Solomon&apos;s death.',
        },
        {
          kind: 'commentary',
          id: 'daughters-marriage',
          html:
            'Two of the officers have married Solomon&apos;s daughters — Taphath and Basmath. Solomon uses marriage as a political tool, binding the officers to the throne through family connection. His daughters are not merely women; they are instruments of political stability. This practice will become more extreme later in Solomon&apos;s reign, when he marries hundreds of foreign women for political alliances — relationships that will ultimately lead him into idolatry.',
        },
        {
          kind: 'carry',
          html:
            'Solomon&apos;s system is brilliantly organized — everyone has a clear role, a specific territory, a defined season of responsibility. But organization alone does not guarantee righteousness. The twelve officers are perfectly ordered, yet the kingdom is already becoming top-heavy, already beginning to demand more than the land can sustainably give. We live in an age of systems, of organization, of efficiency. But Jesus asked: "What profit a man if he gain the whole world but lose his own soul?" (Matthew 16:26). Perfect order is not the same as right order.',
        },
        {
          kind: 'reflection',
          id: 'twelve-territories',
          prompt:
            'Solomon divides his kingdom into twelve districts, each with a defined responsibility. How do you divide your own responsibilities and commitments? Are they distributed in a way that allows for genuine rest, or are you constantly being "called upon"?',
        },
      ],
    },

    /* ─── 1 Kings 4:20–28 — Abundance and Provision ──────────────────────── */
    {
      ref: '1 Kings 4:20–28',
      title: 'Abundance and Daily Provision',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(
              20,
              'Judah and Israel were many, as the sand which is by the sea in multitude, eating and drinking, and making merry.'
            ),
            {
              number: 21,
              spans: [
                t('And Solomon reigned over all kingdoms from the river unto the land of the Philistines, unto the border of Egypt: they brought '),
                hg('presents', '1k4-presents'),
                t(', and served Solomon all the days of his life.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Solomon&apos;s provision for one day was thirty measures of fine flour, and threescore measures of meal,'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Ten fat oxen, and twenty oxen out of the pastures, and an hundred sheep, beside harts, and roebucks, and fallow deer, and fatted fowl:'),
              ],
            },
            {
              number: 24,
              spans: [
                t('For he had dominion over all the region on this side the river, from Tiphsah even to Azzah, over all the kings on this side the river: and he had peace on all sides round about him.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And '),
                hg('Judah and Israel dwelt safely', '1k4-vine-fig'),
                t(', every man under his vine and under his fig tree, from Dan even to Beersheba, all the days of Solomon.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And Solomon had forty thousand stalls of horses for his chariots, and twelve thousand horsemen.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And those officers provided victuals for king Solomon, and for all that came unto king Solomon&apos;s table, every man in his month: they lacked nothing.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Barley also and straw for the horses and dromedaries brought they unto the place where the officers were, every man according to his charge.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1k4-presents',
          html:
            'All the neighboring kingdoms bring presents to Solomon and serve him. The word "presents" (minchah in Hebrew) originally referred to a grain offering in the temple, but here it describes the tribute of foreign powers. Solomon has become so great that the world itself acknowledges his supremacy. Yet the text will later reveal that this power rests on a foundation more fragile than it appears.',
        },
        {
          kind: 'commentary',
          id: '1k4-vine-fig',
          html:
            'This is one of the most resonant phrases in Scripture: "every man under his vine and under his fig tree." The vine and the fig tree are not merely crops; they are symbols of peace, of home, of security. A person dwelling safely under their own vine and fig tree is living in the eschatological peace promised by the prophets. In Micah 4:4, the prophet describes the messianic age in nearly identical language: "They shall sit every man under his vine and under his fig tree; and none shall make them afraid" (Micah 4:4). Solomon&apos;s kingdom is presented as the fulfillment of Israel&apos;s deepest covenant hopes. Yet this peace will not last. The very accumulation that produces such abundance will eventually become the instrument of its undoing.',
        },
        {
          kind: 'hebrew',
          id: 'chokhmah',
          title: 'Gefen & Teenah — Vine and Fig Tree',
          script: 'גֶּ֫פֶן | תְּאֵנָה',
          translit: '<strong>Gefen</strong> · vine | <strong>Teenah</strong> · fig tree',
          description:
            'The vine and fig tree are rooted in ancient Near Eastern imagery as symbols of peace and prosperity. To dwell under one&apos;s own vine and fig tree is to be at rest in one&apos;s own land, safe from enemies, secure in one&apos;s home. The phrase occurs in 1 Kings 4:25, Micah 4:4, and Zechariah 3:10 — all describing times of eschatological peace. For Solomon&apos;s listeners, this language would have carried enormous weight: the messianic promise was unfolding now, in real time, under Solomon&apos;s reign.',
        },
        {
          kind: 'commentary',
          id: '1k4-horses',
          html:
            'And now, in verse 26, a single line appears that breaks the spell: "And Solomon had forty thousand stalls of horses for his chariots, and twelve thousand horsemen." The provision, the peace, the abundance — all true. But hidden here is a violation. Deuteronomy 17:16 commanded the king of Israel: "But he shall not multiply horses to himself" (Deuteronomy 17:16). The law forbade the king from accumulating the instruments of military power that would draw him away from reliance on God. Solomon, the wisest of all men, has broken the law of Moses. The magnificent abundance of his reign is already beginning to spring from a root of disobedience. The wisdom that orders his kingdom has not yet bent his own will to obedience to God&apos;s word.',
        },
        {
          kind: 'carry',
          html:
            'Peace and prosperity are good gifts. Solomon&apos;s kingdom rests in genuine peace. His people are genuinely secure. And yet the very thing that makes the kingdom secure — the accumulation of power, horses, warriors — is precisely what the law of God forbade. We live in a world that measures success by accumulation: more money, more followers, more power, more security. But Scripture asks a harder question: Does the way I accumulate what I have draw me toward God or away from him? Solomon would soon discover the answer. The wisdom that organized his kingdom was not the same as the obedience that would have kept it holy.',
        },
        {
          kind: 'reflection',
          id: 'abundance-cost',
          prompt:
            'Solomon has built a kingdom of genuine peace and abundance. Yet hidden within that abundance is a violation of God&apos;s law. What in your own success or security might you be overlooking because you are focused on the good parts? What costs are you being asked to ignore?',
        },
      ],
    },

    /* ─── 1 Kings 4:29–34 — Solomon's Wisdom ──────────────────────────── */
    {
      ref: '1 Kings 4:29–34',
      title: 'The Wisdom of Solomon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 29,
              spans: [
                t('And '),
                hg('God gave Solomon wisdom and understanding exceeding much', '1k4-wisdom-gift'),
                t(', and largeness of heart, even as the sand that is on the sea shore.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And Solomon&apos;s wisdom excelled the wisdom of all the children of the east country, and all the wisdom of Egypt.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('For he was wiser than all men; than Ethan the Ezrahite, and Heman, and Chalcol, and Darda, the sons of Mahol: and his fame was in all nations round about.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And he spake three thousand proverbs: and his songs were a thousand and five.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And he spake of trees, from the cedar tree that is in Lebanon even unto the hyssop that springeth out of the wall: he spake also of beasts, and of fowl, and of creeping things, and of fishes.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And there came of all people to hear the wisdom of Solomon, from all kings of the earth, which had heard of his wisdom.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1k4-wisdom-gift',
          html:
            'The text makes clear: Solomon&apos;s wisdom is not something he achieved or earned. It is a gift from God. God "gave Solomon wisdom and understanding exceeding much, and largeness of heart, even as the sand that is on the sea shore." The wisdom is divine in origin. It comes from the same God who granted it to him in his dream at Gibeon. This wisdom is not merely intellectual; it is "largeness of heart" — a comprehensive understanding not just of ideas but of people, of situations, of the whole fabric of human experience.',
        },
        {
          kind: 'commentary',
          id: '1k4-wisdom-extent',
          html:
            'Solomon&apos;s wisdom exceeds that of "the children of the east country" and "all the wisdom of Egypt" — the two great centers of ancient wisdom. Egypt was famous for its scribes, its learning, its accumulated knowledge. The East (Mesopotamia, Persia) had its own long tradition of wisdom literature. Solomon surpasses them all. His wisdom is universal — it encompasses trees and animals, birds and fish, proverbs and songs. This is not narrow specialization; this is comprehensive knowledge of creation itself.',
        },
        {
          kind: 'hebrew',
          id: 'chokhmah-divine',
          title: 'Chokhmah — "Wisdom"',
          script: 'חָכְמָה',
          translit: '<strong>Chokhmah</strong> · wisdom; understanding; insight; skill',
          description:
            'The Hebrew chokhmah encompasses more than mere intellectual knowledge. It refers to the ability to understand and navigate the world with skill and insight. It includes moral understanding, practical judgment, and even creative ability. Solomon&apos;s chokhmah is presented as a divine gift — something given by God rather than learned through human effort. This wisdom is what allows Solomon to speak about the whole of creation, from the greatest cedar to the smallest hyssop plant.',
        },
        {
          kind: 'commentary',
          id: '1k4-proverbs',
          html:
            'Solomon spoke three thousand proverbs. The Book of Proverbs, attributed to Solomon, preserves only a portion of this vast wisdom. A proverb is not a rule; it is an observation — a distilled insight about how the world works, how people behave, what leads to flourishing and what leads to ruin. Three thousand observations, drawn from a mind that has seen all aspects of creation and all types of human nature. This is wisdom in its full expression: the ability to name the patterns hidden in the chaos of life.',
        },
        {
          kind: 'commentary',
          id: '1k4-creation-knowledge',
          html:
            'The passage emphasizes that Solomon "spake of trees...and beasts, and fowl, and creeping things, and fishes." His wisdom includes what we would call natural science — the study of creation. This reflects an ancient understanding that wisdom meant understanding God&apos;s work in the world. To know the properties of cedar and hyssop, the behaviors of animals and fish, was to read the mind of the Creator as it was written in creation itself. Solomon&apos;s wisdom includes this comprehensive knowledge of how God ordered the world.',
        },
        {
          kind: 'christ',
          id: '1k4-christ-wisdom',
          title: 'Christ Connection — The Wisdom of God Incarnate',
          html:
            'Solomon is described as possessing wisdom "exceeding much," a gift from God that allows him to speak about the whole of creation. Yet the New Testament presents Jesus as something greater: the embodied Wisdom of God. In 1 Corinthians 1:24, Paul calls Christ "the power of God, and the wisdom of God." In Colossians 2:3, Paul writes that in Christ "are hid all the treasures of wisdom and knowledge." Where Solomon spoke about creation, Christ is the Word through whom creation itself came into being (John 1:3). Where Solomon&apos;s wisdom was given to him from outside himself, Christ "in whom dwelleth all the fulness of the Godhead bodily" (Colossians 2:9) is wisdom itself. Solomon was a king who spoke wisdom to those who came to hear him; Christ is the King whose word has authority over all creation (Hebrews 1:3). The wisdom of Solomon points toward the infinite wisdom of Christ.',
        },
        {
          kind: 'carry',
          html:
            'Wisdom is not the same as knowledge. Knowledge is the accumulation of facts; wisdom is the ability to see patterns, to understand not just what is true but what matters. Solomon possessed wisdom in such abundance that people traveled from distant lands simply to hear him speak. Yet this very chapter reveals that Solomon&apos;s wisdom had a blind spot: he could speak about creation but could not fully obey the Creator. He could understand human nature but not fully master his own. True wisdom, Scripture suggests, is not only the ability to see clearly but the ability to live consistently with what you see.',
        },
        {
          kind: 'reflection',
          id: 'wisdom-gap',
          prompt:
            'Solomon was wiser than all people, yet he accumulated horses in violation of God&apos;s law. Is there something you understand intellectually but struggle to live out? What would it mean to narrow that gap?',
        },
      ],
    },
  ],
};
