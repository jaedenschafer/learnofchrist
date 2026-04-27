import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Samuel 9 — David Shows Kindness to Mephibosheth
 *
 * After David has secured the throne of Israel, his first act is not to
 * consolidate power but to seek out the broken remnant of Saul's house. He
 * finds Mephibosheth — lame in both feet, hidden in Lo-debar (the place of
 * no pasture), the son of his dead friend Jonathan. And David brings him to
 * his table forever, as a son. The entire chapter is gospel: the King
 * seeking the disabled, the enemy's line, the unworthy — and covenant
 * adoption at his table.
 */
export const SAMUEL_2_9: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 9,

  intros: [
    'The book of 2 Samuel opens with King David establishing his throne over all Israel. He has won every battle, subdued every enemy, and the kingdom is secure. And then — in the very chapter where we might expect him to shore up his power or claim his spoils — David does something unexpected. He asks: "Is there yet any that is left of the house of Saul, that I may shew him kindness for Jonathan&apos;s sake?" He is asking after the family of his enemy.',
    'What follows is one of the purest pictures of grace in Scripture. David finds Mephibosheth — the son of Jonathan, grandson of Saul, lame in both feet, hidden in exile in a place called Lo-debar (literally "no pasture"). And David brings him to his table forever, restores his lands, and treats him as "one of the king&apos;s sons." This is not justice. This is covenant kindness — chesed Elohim, the kindness of God shown through a king&apos;s mercy. The entire chapter is a portrait of how the King of Heaven finds the broken and brings them home.',
  ],

  opener: {
    matchArtist: /tissot|delacroix|dore/i,
    matchTitle: /david|mephibosheth|kindness|table|grace/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 2 Samuel 9',
    quote:
      'King David sought out Mephibosheth, the lame son of his enemy, from the place of exile. He restored his lands, brought him to his table forever, and treated him as one of the king&apos;s sons — a portrait of the King who seeks the broken and adopts them in grace.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 9 · Study Guide',
  },

  sections: [
    /* ─── 2 Samuel 9:1–5 — The King Seeks Out the Lame ──────────────────── */
    {
      ref: '2 Samuel 9:1–5',
      title: 'The King Seeks Out the Broken',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 1,
              spans: [
                t('And David said, '),
                hg('Is there yet any that is left of the house of Saul', 'c-seeking'),
                t(', that I may shew him kindness '),
                hp('for Jonathan&apos;s sake', 'c-jonathan-sake'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-seeking',
          html:
            'The chapter opens with David&apos;s question. He has consolidated the kingdom. The war is over. Saul&apos;s line has been crushed. And the first thing David seeks is not to destroy the remnant of his former enemy — it is to show them kindness. The King&apos;s first thought is mercy.',
        },
        {
          kind: 'commentary',
          id: 'c-jonathan-sake',
          html:
            '"For Jonathan&apos;s sake" — David&apos;s motivation is not pragmatism or guilt. It is covenant. Jonathan was his brother, his friend, the man who saved his life and loved him. The covenant David made with Jonathan (1 Samuel 20) was not sealed by David&apos;s power — it was sealed by friendship. And David keeps it. That is what covenants do. They hold. They wait. They reach out even when the other party cannot reach back.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 2,
              spans: [
                t('And there was of the house of Saul a servant whose name was Ziba: and when they had called him unto David, the king said, Art thou Ziba? And he said, Thy servant is he.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ziba',
          html:
            'David calls for Ziba, a servant who had belonged to Saul&apos;s house. This man knows the land, knows the families, knows who is left. He will become the conduit through which David&apos;s kindness flows.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 3,
              spans: [
                t('And the king said, Is there not yet any of the house of Saul, that I may shew '),
                hy('the kindness of God', 'c-kindness-god'),
                t(' unto him? And Ziba said unto the king, Jonathan hath yet a son, which is lame on his feet.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-kindness-god',
          title: 'Chesed Elohim — "The Kindness of God"',
          script: 'חֶ֫סֶד אֱלֹהִים',
          translit: '<strong>Chesed Elohim</strong> · covenant kindness; God&apos;s faithful love',
          description:
            'David does not say "I will show kindness to him." He says "I will show *the kindness of God* unto him." The kindness David shows is not his own invention — it is a reflection of God&apos;s own nature. Chesed is not mere sympathy. It is covenant-love, the steadfast kindness that God keeps toward His people. David is acting like his God.',
        },
        {
          kind: 'commentary',
          id: 'c-lame',
          html:
            'Ziba mentions that this son is lame on his feet. In the ancient world, physical disability marked a person as cursed, as less-than, as unfit. The first detail we learn about the heir of Saul&apos;s house is his brokenness. And that is exactly why David will seek him out.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 4,
              spans: [
                t('And the king said unto him, Where is he? And Ziba said unto the king, Behold, he is in the house of Machir the son of Ammiel, in '),
                hy('Lo-debar', 'c-lo-debar'),
                t('.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Then king David sent, and fetched him out of the house of Machir the son of Ammiel, from '),
                hy('Lo-debar', 'c-lo-debar'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-lo-debar',
          title: 'Lo-debar — "No Pasture" or "No Word"',
          script: 'לֹא דְבָר',
          translit: '<strong>Lo-debar</strong> · "no word"; "no pasture"',
          description:
            'The name Lo-debar carries a double meaning. It literally means "no pasture" or "no word" — a place of exile, desolation, silence. This is where the heir of Israel&apos;s enemy has hidden: in a place with no pasture, no sustenance, no word from God. It is where the broken are left when the kingdom forgets them. And it is where David goes to find him.',
        },

        {
          kind: 'carry',
          html:
            'You may be in a Lo-debar — a place where it seems like no one is watching, where there is no word, where you have been hidden away and forgotten. You may be broken in body or spirit. You may be from a family line that failed, a house that fell, a wound that marked you. And you may assume that when the strong rise to power, they will forget you — as they have forgotten everyone like you. But the King of heaven is asking, as David did: "Is there anyone left? Does anyone remember? Can I show kindness?" He is not content to let the broken stay hidden.',
        },

        {
          kind: 'reflection',
          id: 'lo-debar',
          prompt:
            'Where are you hidden? What place of exile, shame, or brokenness have you been living in, assuming no one would seek you out? What would it mean to believe that a King could find you there?',
        },
      ],
    },

    /* ─── 2 Samuel 9:6–8 — Mephibosheth Bows Before the King ────────────── */
    {
      ref: '2 Samuel 9:6–8',
      title: 'Fear Not — The King Shows His Face',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 6,
              spans: [
                t('Now when '),
                hg('Mephibosheth, the son of Jonathan', 'c-mephibosheth-name'),
                t(', the son of Saul, was come unto David, he '),
                hg('fell on his face, and did reverence', 'c-reverence'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mephibosheth-name',
          html:
            'We finally meet Mephibosheth by name. The name itself means "from the mouth of shame" — a name that marks him as the bearer of his family&apos;s disgrace. He is lame in both feet, grandson of Saul, son of Jonathan. When he comes before David, he comes as the broken heir of David&apos;s enemy.',
        },
        {
          kind: 'commentary',
          id: 'c-reverence',
          html:
            'Mephibosheth falls on his face before the King. This is total submission, absolute obeisance. He has no power, no standing, no claim. He can only bow.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 7,
              spans: [
                t('And David said, Mephibosheth: And he answered, Behold thy servant! '),
                hp('David said, Fear not', 'c-fear-not'),
                t(': for I will surely shew thee kindness '),
                hp('for Jonathan thy father&apos;s sake', 'c-covenant-repeat'),
                t(', and will '),
                hg('restore thee all the land of Saul thy father', 'c-restoration'),
                t('; and thou shalt '),
                hp('eat bread at my table continually', 'c-table-fellowship'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fear-not',
          html:
            'David&apos;s first words to Mephibosheth are the words God speaks throughout Scripture: "Fear not." These words do not mean "do not be afraid because you are safe." They mean "do not be afraid because I have mercy." They are the prelude to grace.',
        },
        {
          kind: 'commentary',
          id: 'c-covenant-repeat',
          html:
            'David repeats his covenant. "For Jonathan thy father&apos;s sake" — twice now David makes this declaration. This is not about Mephibosheth&apos;s worth. Mephibosheth has no worth in the world&apos;s eyes. He is lame, an exile, the son of Saul. David&apos;s kindness is rooted entirely in a friendship that Mephibosheth never made, and cannot unmake.',
        },
        {
          kind: 'commentary',
          id: 'c-restoration',
          html:
            'David restores all of Saul&apos;s lands to Mephibosheth. This is not pity-charity. This is restitution, inheritance, belonging. The lands that were forfeit — the fruit of Saul&apos;s failure — are returned to his line through David&apos;s grace.',
        },
        {
          kind: 'christ',
          id: 'fear-not-grace',
          title: 'Christ Connection — Fear Not, for I Will Show You Mercy',
          html:
            'Jesus will say to the paralyzed man, the bleeding woman, the tax collector, the Samaritan, the thief on the cross — always the same opening: "Fear not." And then, in every case, covenant restoration. The woman caught in adultery — "Neither do I condemn thee; go, and sin no more" (John 8:11). The thief — "To day shalt thou be with me in paradise" (Luke 23:43). And to the disciples after His resurrection — "Peace be unto you" (John 20:21). Jesus seeks out those who have been hidden, broken, exiled from God&apos;s table. And He says: "Fear not. For I will show thee kindness forever. Come. Eat bread at my table."',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 8,
              spans: [
                t('And he bowed himself, and said, What is thy servant, that thou shouldest look upon '),
                hg('such a dead dog as I am', 'c-dead-dog'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dead-dog',
          html:
            'Mephibosheth&apos;s response is the deepest humility. "A dead dog" — the lowest possible self-description in an honor-based culture. He is not false-humble. This is how he truly sees himself. He is broken, lame, hidden. He has no standing. And he is asking the question that every broken person asks: Why would the King look at me?',
        },

        {
          kind: 'carry',
          html:
            'You may feel like Mephibosheth — as if you are "such a dead dog" that no one worth anything would look at you. Your brokenness may feel permanent. Your exile may feel like it is who you are now. Your shame may feel like your name. But the King is saying to you, as David said to Mephibosheth: "Fear not. I am showing you the kindness of God. You will eat bread at my table forever."',
        },

        {
          kind: 'reflection',
          id: 'dead-dog',
          prompt:
            'When Mephibosheth says "such a dead dog as I am," he is naming what he believes to be his deepest truth. What is the deepest shame or brokenness you believe disqualifies you from the King&apos;s kindness? What would it take to believe it is not your final word?',
        },
      ],
    },

    /* ─── 2 Samuel 9:9–13 — Ziba Tends the Land, Mephibosheth Eats at the Table */
    {
      ref: '2 Samuel 9:9–13',
      title: 'Lame on Both His Feet, Yet Eating at the King&apos;s Table',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 9,
              spans: [
                t('Then the king called to Ziba, Saul&apos;s servant, and said unto him, I have given unto thy master&apos;s son all that pertained to Saul and to all his house.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Thou therefore, and thy sons, and thy servants, shall till the land for him, and thou shalt bring in the fruits, that thy master&apos;s son may have food to eat: but '),
                hp('Mephibosheth thy master&apos;s son shall eat bread alway at my table', 'c-always-table'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-always-table',
          html:
            'The text emphasizes this twice: "eat bread alway at my table." Not sometimes. Not on special occasions. Alway. The table is the place of intimacy in the ancient world — the place where the family gathers, where covenant is renewed over food, where you are known. Mephibosheth, the broken heir of Saul, will eat at the king&apos;s table forever.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 11,
              spans: [
                t('Now Ziba had fifteen sons and twenty servants: and Ziba said unto the king, According to all that my lord the king hath commanded his servant, so shall thy servant do. '),
                hp('As for Mephibosheth, said the king, he shall eat at my table, as one of the king&apos;s sons', 'c-as-son'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-as-son',
          html:
            'David says it plainly: Mephibosheth shall eat at the table "as one of the king&apos;s sons." This is not adoption in the sense of a legal heir — Mephibosheth will never inherit the throne. But it is adoption in the deepest sense: he is brought into the inner circle, the family table, the place where only the beloved are invited. He becomes a son at the King&apos;s table.',
        },

        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 12,
              spans: [
                t('And Mephibosheth had a young son whose name was Micha. And all that dwelt in the house of Ziba were servants unto Mephibosheth.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('So Mephibosheth dwelt in Jerusalem: '),
                hg('for he did eat continually at the king&apos;s table', 'c-continual-eating'),
                t('; and '),
                hg('was lame on both his feet', 'c-both-feet'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-continual-eating',
          html:
            'The final picture is of Mephibosheth dwelling in Jerusalem, eating continually at the King&apos;s table. This is not a temporary mercy. This is covenant. He has been brought from Lo-debar — the place of no pasture, no word — into the King&apos;s house, the place of continual provision.',
        },
        {
          kind: 'commentary',
          id: 'c-both-feet',
          html:
            'And the text reminds us: "was lame on both his feet." His condition does not change. He is not healed. He does not become whole in the eyes of the world. He is brought into the King&apos;s table *as a broken man*. His lameness does not disqualify him from the covenant. The King eats with him anyway.',
        },

        {
          kind: 'christ',
          id: 'wedding-feast',
          title: 'Christ Connection — The Wedding Feast, the Table of Grace',
          html:
            'Jesus will tell a parable about a king who prepares a wedding feast for his son. And he sends his servants to invite "them which were bidden" — the righteous, the worthy, the invited. And they refuse. So the king says: "Go therefore into the highways, and as many as ye shall find, bid to the marriage" (Matt. 22:9). They go out and gather "both bad and good" — the broken, the lame, the cast-out, the unworthy. And the table is full. Later, Jesus will feed the five thousand on a mountainside, breaking bread for the crowds. And He will say to the paralyzed man, "Son, thy sins be forgiven thee" (Mark 2:5). And He will eat with tax collectors and sinners, and the Pharisees will say, "Why eateth your master with publicans and sinners?" (Matt. 9:11). And Jesus&apos; answer is the entire gospel: "They that be whole need not a physician; but they that are sick" (Matt. 9:12). Mephibosheth is lame on both feet. And he eats at the King&apos;s table. Because the King&apos;s table is built for the broken.',
        },

        {
          kind: 'carry',
          html:
            'You may be lame on both feet. You may have been broken for so long that you do not remember what it is like to stand. You may have hidden in the Lo-debars of shame, exile, failure. You may believe that your brokenness is permanent, that you can never be whole enough to sit at any table that matters. But the King is preparing a table for you. Not when you are healed. Not when you have earned it. Not when you have become worthy. Now. As you are. Lame on both feet, and invited to eat bread forever at His table.',
        },

        {
          kind: 'reflection',
          id: 'table-fellowship',
          prompt:
            'What does it mean to you that Mephibosheth eats at the King&apos;s table while still lame on both feet? What is the difference between waiting to be healed and being invited to the feast as you are?',
        },
      ],
    },
  ],
};
