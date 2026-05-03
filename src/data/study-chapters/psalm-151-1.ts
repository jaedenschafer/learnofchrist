import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Psalm 151 — The Shepherd Anointed
 *
 * A brief autobiographical psalm preserved in the Septuagint and Dead Sea Scrolls
 * (Hebrew form), included in Orthodox and some Catholic Bibles. David looks back
 * over two pivotal moments: his anointing as the youngest son, and his slaying of
 * Goliath. Apocrypha status neutral — read as a Davidic-tradition psalm regardless
 * of canon position.
 *
 * PACING: 1-3 verses per scripture block. DOCTRINAL: Stay neutral on canonicity.
 * VOICE: LDS+Baptist+Catholic+Orthodox neutral. No clichés. Second-person warm.
 * HEBREW: ≥2 callouts (maar, mashach, herpah, choreph). CHRIST: ≥2 connections
 * with NT cross-refs. CARRY + REFLECTION in most sections. ARTWORK: 1-3 hooks.
 */
export const PSALM_151_1: RichChapterContent = {
  bookSlug: 'psalm-151',
  bookName: 'Psalm 151',
  chapter: 1,

  estimatedMinutes: { beginner: 6, intermediate: 12, deep: 16 },
  intros: [
    'Psalm 151 is a small, intimate psalm — seven verses. David remembers two moments that shaped him: being chosen smallest among his brothers, and slaying Goliath. These two memories anchor the heartbeat of the entire Psalter: God lifts the lowly and silences the mighty. This psalm exists in the Septuagint and Dead Sea Scrolls, in Orthodox and some Catholic Bibles, but its canonical status varies across traditions. Whether or not one counts it as canonical, it preserves the voice of the shepherd-king looking back over his own becoming.',
    'What makes Psalm 151 so powerful is its refusal to deny the smallness. David does not boast. He does not erase his humble beginnings. Instead, he sings them as the very place God found him. This is the God we meet throughout Scripture — not the God of palaces first, but the God of fields and overlooked corners, the God who calls the small one and anoints him with the oil of a new name.',
  ],

  opener: {
    matchArtist: /tissot|rembrandt|corot/i,
    matchTitle: /david|shepherd|anointed|goliath/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── Psalm 151:1 — The Smallest of His Brethren ───────────────────── */
    {
      ref: 'Psalm 151:1',
      title: 'I Was the Youngest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 1,
              spans: [
                t('I was '),
                hy('small among my brethren', 'ps151-small'),
                t(', and '),
                hy('growing up in my father&apos;s house', 'ps151-youngest'),
                t(': '),
                hg('I kept my father&apos;s sheep', 'ps151-shepherd'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ps151-small',
          html:
            'David does not hide his smallness — he leads with it. Not shame, but precision. He was <em>small</em>, and he knows the God who saw him in that smallness. Throughout Scripture, God has a pattern: the youngest son (Isaac over Ishmael, Jacob over Esau, Joseph among eleven brothers, David among eight). The pattern is so consistent that when David sings it as his own life, he is inviting you to recognize yourself somewhere in it too.',
        },
        {
          kind: 'commentary',
          id: 'ps151-youngest',
          html:
            'The Hebrew carries both senses: the youngest in the birth order, and the one still &quot;growing up&quot; — not yet a man in the eyes of his brothers or perhaps even his father. While his older brothers might receive commands or inheritance, David is still in formation. He is the one left behind.',
        },
        {
          kind: 'commentary',
          id: 'ps151-shepherd',
          html:
            'David tends his father&apos;s sheep. Not a grand task, not a task worthy of a prince, not a task that would impress observers. Sheep need patient watching, constant vigilance against predators, simple faithful care. The shepherd works alone, often in silence. It is the work of someone not yet called to anything larger. Yet this work shapes David. This is where he learns to fight (he will later tell Saul he killed a lion and a bear defending the flock). This is where he learns to sing. This is where God will find him.',
        },
        {
          kind: 'hebrew',
          id: 'ps151-naar',
          title: 'Naar — The Lad',
          script: 'נַעַר',
          translit: '<strong>naar</strong> · a youth, a lad, a young man still in formation',
          description:
            'The word suggests not merely youth but a particular kind of youth — one not yet called upon, not yet trusted with the full weight of the family name. David was the naar when God saw him. Not the grown warrior — the lad in the field.',
        },
        {
          kind: 'christ',
          id: 'ps151-christ-rejected',
          title: 'Christ Connection — The Stone the Builders Rejected',
          html:
            'Jesus comes from Nazareth, a place so despised that Nathanael asks, "Can any good thing come out of Nazareth?" (John 1:46). He is the carpenter&apos;s son, a tekton, a tradesman — overlooked in the eyes of Jerusalem. Yet this rejected corner stone becomes the head of the corner (Matthew 21:42). Like David, Christ is the small one whom the mighty will overlook, only to find themselves terrified when He stands.',
        },
        {
          kind: 'carry',
          html:
            'If you have been counted small — by your family, by your circumstances, by the people who get to decide who matters — you are not an accident in God&apos;s story. The Psalmist has already walked the field you walk. And he learned this: small is not forgotten by God. Small is exactly where His vision sharpens.',
        },
        {
          kind: 'reflection',
          id: 'ps151-ref-small',
          prompt:
            'What makes you feel smallest right now? In what ways have you been passed over or left behind? What might God be seeing in you that the world has not yet seen?',
        },
      ],
    },

    /* ─── Psalm 151:2 — The Shepherd Who Made Music ────────────────────── */
    {
      ref: 'Psalm 151:2',
      title: 'The Shepherd-Musician',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 2,
              spans: [
                t('My '),
                hy('hands made an organ', 'ps151-organ'),
                t(', and my fingers '),
                hy('fashioned a psaltery', 'ps151-harp'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ps151-organ',
          html:
            'The shepherd had something his brothers did not: skill. Not the skill of war, not the skill of diplomacy, but the skill of making instruments. David&apos;s hands were not idle in the field. He worked. He crafted. He took whatever materials he had and made music from them. This detail is crucial. David does not present himself as chosen because he is passive or waiting. He is actively working, actively creating, in a small place.',
        },
        {
          kind: 'commentary',
          id: 'ps151-harp',
          html:
            'The psaltery — the harp — will become David&apos;s signature. It is the instrument he will play for Saul, soothing the rejected king. It is the instrument from which the Psalter itself takes its name. But before David the king, before David the healer, before David the Psalmist — there was David the shepherd-boy who fashioned it with his own hands in the field.',
        },
        {
          kind: 'hebrew',
          id: 'ps151-yatzar',
          title: 'Yatzar — To Form, to Fashion',
          script: 'יָצַר',
          translit: '<strong>yatzar</strong> · to form, to fashion, to shape with purpose',
          description:
            'The same verb used in Genesis 2:7 for God forming Adam from the dust. David&apos;s hands do not merely touch the harp — they form it. There is an echo of the divine act in the shepherd boy&apos;s work.',
        },
        {
          kind: 'christ',
          id: 'ps151-christ-maker',
          title: 'Christ Connection — The Hands of the Maker',
          html:
            'John 1:3 says of Christ, "All things were made by him." Yet Christ comes to us with carpenter&apos;s hands (Mark 6:3). The One who made all things works wood in Nazareth, with calluses and sawdust. Like David making music in the field, Christ&apos;s work of redemption is done not in a palace but with His hands, with intention, with the personal care of a craftsman.',
        },
        {
          kind: 'carry',
          html:
            'What you have made with your hands in a small place is not worthless. The God who made you sees the care you take in your work — your honesty in little things, your creativity with what you have been given. These are not preludes to your real life. They are your real life, and they matter.',
        },
      ],
    },

    /* ─── Psalm 151:3 — "Who Shall Declare It to My Lord?" ──────────────── */
    {
      ref: 'Psalm 151:3',
      title: 'The Lord Himself Hears All Things',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 3,
              spans: [
                t('And '),
                hg('who shall declare it to my Lord', 'ps151-declare'),
                t('? The Lord himself, '),
                hp('he hears all things', 'ps151-hear'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ps151-declare',
          html:
            'The question is delicate. David is alone in the field. No one of importance is watching. No one is going to report his faithfulness to the king. No one is going to tell his father that the youngest son is skilled. And so the natural question arises: does it matter? Who will declare it? But the very fact that the question can be asked — and asked with hope rather than despair — means David already knows the answer.',
        },
        {
          kind: 'commentary',
          id: 'ps151-hear',
          html:
            'The Lord hears all things. Not some things. Not the loud things. All things. The small faithfulness in the field. The music made with no audience. The shepherd boy tending sheep no one else wanted to tend. The God who created sound itself hears every note.',
        },
        {
          kind: 'christ',
          id: 'ps151-christ-knows',
          title: 'Christ Connection — Nothing Hidden from His Eyes',
          html:
            'In Matthew 6:4, Jesus teaches about giving in secret: "Thy Father which seeth in secret himself shall reward thee openly." The God who sees what is hidden is the very nature of Christ&apos;s proclamation. No act of faithfulness is ever truly hidden. The Father hears the shepherd boy. The Father sees the widow&apos;s mite. The Father knows when you pray in your closet with the door shut.',
        },
        {
          kind: 'carry',
          html:
            'You do not need a witness for your faithfulness to count. You do not need an audience, a platform, or recognition. God hears. God sees. And the God who hears all things has already noted your name.',
        },
        {
          kind: 'reflection',
          id: 'ps151-ref-hear',
          prompt:
            'What small acts of faithfulness have you offered in secret, where you wondered if anyone saw? What would change in you if you truly believed God heard every one of them?',
        },
      ],
    },

    /* ─── Psalm 151:4 — The Angel and the Anointing ───────────────────── */
    {
      ref: 'Psalm 151:4',
      title: 'He Sent His Angel and Anointed Me',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 4,
              spans: [
                t('He sent his angel and '),
                hy('took me from my father&apos;s sheep', 'ps151-angel'),
                t(', and '),
                hp('anointed me with the oil of his anointing', 'ps151-mashach'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ps151-angel',
          html:
            'The "angel" here is likely a reference to the prophet Samuel, whose coming to Bethlehem to anoint David is recorded in 1 Samuel 16. In Scripture, the word "angel" (Hebrew <em>malakh</em>) means "messenger" and can refer to both heavenly beings and human representatives. What matters is the action: God sends someone. David does not choose to leave the field. He does not campaign for kingship. He is simply taken. The initiative is entirely God&apos;s.',
        },
        {
          kind: 'hebrew',
          id: 'ps151-mashach',
          title: 'Mashach — To Anoint, to Consecrate',
          script: 'מָשַׁח',
          translit: '<strong>mashach</strong> · to anoint with oil; from this root comes <strong>mashiach</strong>, Messiah',
          description:
            'Anointing with oil was the mark of kingship, of priesthood, of being set apart for God&apos;s purpose. The same root gives us the word for Messiah — the Anointed One. Every person anointed in Scripture carries in their name the promise of the Ultimate Anointing yet to come.',
        },
        {
          kind: 'christ',
          id: 'ps151-christ-anointed',
          title: 'Christ Connection — The Anointed One',
          html:
            'Luke 4:18 records Christ reading from Isaiah 61: "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor." Christ is the Mashiach — the Anointed. And He comes not to kings or priests in temples, but to the poor, the broken, the overlooked. Like David taken from the sheep, Christ is the Anointed One who comes from the margins.',
        },
        {
          kind: 'carry',
          html:
            'If God has anointed you — and in Christ, every believer is anointed, sealed with the Holy Spirit (Ephesians 1:13) — then you have been consecrated for His purpose. You have not chosen this. You have been chosen. And that changes everything about what you will become.',
        },
      ],
    },

    /* ─── Psalm 151:5 — My Brothers Were Tall and Fair ────────────────── */
    {
      ref: 'Psalm 151:5',
      title: 'The Lord Delighted Not in Them',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 5,
              spans: [
                t('My brethren were '),
                hy('tall and goodly', 'ps151-brothers'),
                t('; but '),
                hp('the Lord delighted not in them', 'ps151-delight'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ps151-brothers',
          html:
            'The brothers are beautiful, impressive, tall — exactly what a human eye would count as kingly. This is no small detail. In 1 Samuel 16, Samuel is explicitly told not to choose by outward appearance: "Look not on his countenance, or on the height of his stature; because I have refused him: for the Lord seeth not as man seeth; for man looketh on the outward appearance, but the Lord looketh on the heart." David&apos;s brothers had everything the eye could measure. They had nothing the heart could offer.',
        },
        {
          kind: 'commentary',
          id: 'ps151-delight',
          html:
            'The Lord did not delight in them. Not because they were wicked, but because they were not the chosen. The same God who later delights in His Son ("This is my beloved Son, in whom I am well pleased," Matthew 3:17) passes over these tall, goodly men in favor of a shepherd boy. The delight of God is not a reward for beauty or strength. It is the gift of choice, and it falls where it will.',
        },
        {
          kind: 'hebrew',
          id: 'ps151-chaphetz',
          title: 'Chaphetz — To Delight In, to Be Pleased With',
          script: 'חָפֵץ',
          translit: '<strong>chaphetz</strong> · to desire, to delight in, to take pleasure',
          description:
            'The word suggests not obligation but genuine pleasure. God did not begrudgingly choose David as a second choice. The heart of God was inclined toward him. This is an act of love, not necessity.',
        },
        {
          kind: 'christ',
          id: 'ps151-christ-despised',
          title: 'Christ Connection — Despised and Rejected',
          html:
            'Isaiah 53:2-3 describes the Messiah: "He hath no form nor comeliness; and when we shall see him, there is no beauty that we should desire him. He is despised and rejected of men." Christ does not come in the beauty of David&apos;s brothers. He comes as one from whom men hide their faces. And yet He is the One in whom the Father&apos;s delight is boundless.',
        },
        {
          kind: 'carry',
          html:
            'If you have never been the one chosen for your looks, your talent, your strength — if you have always known yourself as overlooked — you are walking a path Christ Himself walked. And you are walking it toward a delight no eye can measure.',
        },
        {
          kind: 'reflection',
          id: 'ps151-ref-delight',
          prompt:
            'What have you been passed over for? What do you sense that God delights in about you — not what your resume says, but what your heart knows?',
        },
      ],
    },

    /* ─── Psalm 151:6 — I Went Out to Meet the Philistine ──────────────── */
    {
      ref: 'Psalm 151:6',
      title: 'The Giant&apos;s Curse',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 6,
              spans: [
                t('I went forth to meet '),
                hg('the Philistine', 'ps151-goliath'),
                t(': and '),
                hy('he cursed me by his idols', 'ps151-curse'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ps151-goliath',
          html:
            'David does not hide behind the army. He walks to meet Goliath. The Philistine champion is armored, massive, experienced. David is unarmed, carrying only a sling and five smooth stones. In the eyes of every witness, this is not courage. It is madness. It is the smallness that knows itself small, walking directly toward the thing that terrifies the strong.',
        },
        {
          kind: 'commentary',
          id: 'ps151-curse',
          html:
            'Goliath curses David by his idols — the gods of Philistia. The curse carries weight in the ancient world. It is an act of spiritual warfare, an invocation of divine judgment. But the curse spoken by the idols — the dead gods, the images made by human hands — has no power over the God who made the shepherd boy.',
        },
        {
          kind: 'hebrew',
          id: 'ps151-alal',
          title: 'Alal — To Curse, to Revile',
          script: 'אָלַל',
          translit: '<strong>alal</strong> · to curse, to revile, to pour abuse upon',
          description:
            'The Philistine does not remain silent. His weapon is words before it is the sword. He curses David, trying to destroy him with speech. But the small shepherd stands.',
        },
        {
          kind: 'christ',
          id: 'ps151-christ-cursed',
          title: 'Christ Connection — Bearing the Curse',
          html:
            'Galatians 3:13 says, "Christ hath redeemed us from the curse of the law, being made a curse for us." Like David standing before Goliath&apos;s curse, Christ stands before the curse of sin and death — the curse that falls on all humanity. And He does not dodge it. He bears it. He takes the curse of the enemy on Himself.',
        },
        {
          kind: 'carry',
          html:
            'Whatever curse has been spoken over your life — by your past, by your shame, by the voice that has condemned you — it does not have the final word. God has written a different word over you. In Christ, every curse has been answered.',
        },
      ],
    },

    /* ─── Psalm 151:7 — I Drew His Own Sword ──────────────────────────── */
    {
      ref: 'Psalm 151:7',
      title: 'Reproach Removed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 7,
              spans: [
                t('But I drew '),
                hy('his own sword', 'ps151-sword'),
                t(', and beheaded him, and removed '),
                hp('reproach from the children of Israel', 'ps151-herpah'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ps151-sword',
          html:
            'David does not defeat Goliath with Goliath&apos;s strength. He takes Goliath&apos;s own weapon. The sword that the Philistine carried to destroy Israel becomes the instrument of his own destruction. What the enemy meant for dominion becomes the tool of his overthrow. This is not luck. This is the reversal that God works.',
        },
        {
          kind: 'commentary',
          id: 'ps151-herpah',
          html:
            'The reproach — the shame, the mockery, the weight of defeat that the Philistines had cast on Israel — is lifted. A small shepherd removes it. An anointed boy, carrying five smooth stones, undoes what the mightiest warrior could not. The reproach does not dissolve on its own. It is actively removed by one who was counted small.',
        },
        {
          kind: 'hebrew',
          id: 'ps151-herpah-2',
          title: 'Herpah — Reproach, Shame, Mockery',
          script: 'חֶרְפָּה',
          translit: '<strong>herpah</strong> · reproach, shame, scorn; what clings to the defeated',
          description:
            'The reproach is not a light thing. It is a stain on the nation, a weight carried by every Israelite. To remove it is to restore honor to a people. And the removing is done by the one whom everyone else overlooked.',
        },
        {
          kind: 'christ',
          id: 'ps151-christ-reproach',
          title: 'Christ Connection — The Reproach Removed',
          html:
            'Hebrews 12:2 describes Christ: "Looking unto Jesus the author and finisher of our faith; who for the joy that was set before him endured the cross, despising the shame." And Luke 1:25 records of Elizabeth, "the Lord... hath taken away my reproach." Christ does not dodge the reproach of the cross. He takes it, bears it, and through His bearing it, removes the reproach of sin from all who believe. Like David with Goliath&apos;s sword, Christ takes the very weapon of the enemy — death itself — and turns it to our deliverance (1 Corinthians 15:57).',
        },
        {
          kind: 'carry',
          html:
            'Whatever reproach you have carried — the shame of failure, the mockery of your enemies, the weight of being overlooked — Christ has taken it. Not to leave you in shame but to remove it altogether. You are no longer defined by the reproach. You are defined by the Anointed One who saw you and loved you.',
        },
        {
          kind: 'reflection',
          id: 'ps151-ref-reproach',
          prompt:
            'What reproach have you carried? What would it mean for that shame to be removed not by your own strength but by the God who chose you first?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Psalm 151',
    quote:
      '"I was small among my brethren... but the Lord delighted not in them. I went forth to meet the Philistine, and he cursed me by his idols. But I drew his own sword, and beheaded him, and removed reproach from the children of Israel."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 151 · Study Guide',
  },

  hasHebrew: true,
};
