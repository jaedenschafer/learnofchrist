import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 8 — the turning of the flood, where God remembers Noah and mercy
 * breaks through the waters. The chapter is a portrait of judgment ending and
 * covenant beginning—the pattern that will repeat through all Scripture.
 */
export const GENESIS_8: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 8,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 13 },
  intros: [
    'Genesis 7 is all weight—five weeks of rain, the waters rising, everything breathing creature dying in the flood. Genesis 8 opens with a single sentence that turns the entire narrative: <em>"God remembered Noah."</em> Not that God had forgotten, but that He stopped the judgment. The one person He was keeping alive, the one ark, the one family—God&apos;s covenant memory reaches down through the deep waters, and suddenly the flood is not endless. Genesis 8 is the moment judgment becomes mercy, and it will be the hinge on which the whole Bible turns.',
    'The chapter follows Noah through the long unbecoming: the ark rests on Ararat, Noah sends out a raven and then a dove, the waters recede, the earth dries, God tells him to come out. And when Noah steps onto the new world, the first thing he does is build an altar. God smells the sweet savour of the sacrifice and makes a vow: Never again will He curse the ground for humanity&apos;s sake. The flood was judgment for sin. What comes after the flood is grace—the promise that judgment will not have the last word.',
  ],

  bottomShare: {
    label: 'Share Genesis 8',
    quote: 'God remembered Noah and the waters receded. Noah built an altar, offered sacrifices, and God swore never again to curse the ground because of humanity—judgment ended, and mercy was sworn by covenant.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 8 · Study Guide',
  },

  sections: [
    /* ─── Genesis 8:1–5 — God Remembered Noah ────────────────────────── */
    {
      ref: 'Genesis 8:1–5',
      title: 'God Remembered Noah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 1,
              spans: [
                t('And God '),
                hg('remembered Noah', 'gen8-zakhar'),
                t(', and every living thing, and all the cattle that was with him in the ark: and God made a wind to pass over the earth, and '),
                hy('the waters asswaged', 'hebrew-zakhar'),
                t(';'),
              ],
            },
            {
              number: 2,
              spans: [
                t('The fountains also of the deep and the windows of heaven were stopped, and the '),
                hg('rain from heaven was restrained', 'gen8-rain'),
                t(';'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the waters returned from off the earth continually: and after the end of the hundred and fifty days the waters were abated.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the ark rested in the seventh month, on the seventeenth day of the month, upon the mountains of Ararat.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the waters decreased continually until the tenth month: in the tenth month, on the first day of the month, were the tops of the mountains seen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen8-zakhar',
          html:
            'The hinge of the flood narrative: God <em>remembered</em> Noah. In Hebrew, to remember is not passive—it is to act on what one remembers, to turn memory into movement. God&apos;s covenant name, Yahweh, is built on the logic of remembrance; it means "the One who will be there, who keeps His word." The only time judgment is lifted in Scripture is when God&apos;s memory of His covenant shows up. Judgment ends not because the earth has become sinless, but because God has remembered His promise.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-zakhar',
          title: 'Zakhar — &ldquo;remembered&rdquo;',
          script: 'זָכַר',
          translit: '<strong>zakhar</strong> · to remember, to keep in mind, to act in covenant',
          description:
            'In biblical Hebrew, remembering is action. God remembers Abraham (Gen. 19:29), remembers His covenant (Ex. 2:24), remembers Jerusalem (Ps. 137:6). Each time it means God takes steps to fulfill what He has promised. Zakhar is the covenant verb of the Old Testament.',
        },
        {
          kind: 'commentary',
          id: 'gen8-rain',
          html:
            'The rainfall stops. The fountains of the deep are closed. Creation, which was opened up to judgment, begins its turning back. The waters will recede for five months before the ark touches dry ground, and another three months before the earth is dry enough for anyone to leave. Even mercy is slow; restoration takes time.',
        },
        {
          kind: 'carry',
          html:
            'The moment when judgment turns to mercy is a single sentence: &ldquo;God remembered Noah.&rdquo; Your own story may have been the flood for a season—grief, confusion, the sense that the waters will never settle. The turning point, when it comes, is often just as simple and as quiet. God remembers His promise to you before the circumstances shift. Look for the first stirring of wind across the dark water, the smallest opening. Mercy almost always comes before the ground is dry.',
        },
        {
          kind: 'reflection',
          id: 'gen8-remember',
          prompt:
            'Where in your life do you need God to remember His covenant? What would it look like to trust that even now, the wind is already passing over your waters?',
        },
      ],
    },

    /* ─── Genesis 8:6–12 — The Raven and the Dove ───────────────────── */
    {
      ref: 'Genesis 8:6–12',
      title: 'The Raven and the Dove',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 6,
              spans: [
                t('And it came to pass at the end of forty days, that Noah opened the window of the ark which he had made:'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And he sent forth a '),
                hg('raven', 'gen8-raven'),
                t(', which went forth to and fro, until the waters were dried up from off the earth.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Also he sent forth a '),
                hy('dove from him', 'hebrew-yonah'),
                t(', to see if the waters were abated from off the face of the ground;'),
              ],
            },
            {
              number: 9,
              spans: [
                t('But the dove found no rest for the sole of her foot, and she returned unto him into the ark, for the waters were on the face of the whole earth: then he put forth his hand, and took her, and pulled her in unto him into the ark.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And he stayed yet other seven days; and again he sent forth the dove out of the ark;'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the dove came in to him in the evening; and, lo, in her mouth was an '),
                hp('olive leaf pluckt off', 'christ-dove'),
                t(': so Noah knew that the waters were abated from off the earth.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And he stayed yet other seven days; and sent forth the dove; which returned not again unto him any more.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen8-raven',
          html:
            'The raven goes back and forth across the bare ground, unfamiliar territory, looking for something to feed on. The raven survives the new world. But the dove—the dove is different. A dove, in the Bible, will be a sign of innocence (Matt. 10:16). The dove is the bird that will descend on Jesus at His baptism (Matt. 3:16). Here is the first dove in Scripture, and she is looking for a place to land, a place of peace, and she finds nothing.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yonah',
          title: 'Yonah — &ldquo;dove&rdquo;',
          script: 'יוֹנָה',
          translit: '<strong>yonah</strong> · dove, a bird of gentleness and innocence',
          description:
            'The word yonah becomes the name of a later prophet—Jonah—the man who is swallowed by a great fish and spat out onto dry land, just as this dove is sent out again and again. The first dove in Scripture is a messenger, carrying news of whether the world is yet habitable. The last dove in Scripture, in the baptism of Jesus, carries the same message: that Heaven and Earth are being made new.',
        },
        {
          kind: 'commentary',
          id: 'gen8-olive',
          html:
            'On the third sending, the dove returns with an olive leaf. Not a whole branch—a leaf, a small thing, the first green thing growing in the new world. The dove had nowhere to rest. Now she brings proof that somewhere, life is beginning again.',
        },
        {
          kind: 'christ',
          id: 'christ-dove',
          title: 'Christ Connection — The Dove with the Olive Leaf',
          html:
            'In Jesus&apos; baptism, the Spirit descends on Him like a dove (Matt. 3:16). The first dove in Scripture brought an olive leaf, proof that the earth was waking. The dove in the New Testament descends on the one who will remake the earth, who will walk out of the grave, who will be the new world breaking through the old one. In Him, dry land is given back. In Him, the gentleness of the dove meets the strength that raised the dead.',
        },
        {
          kind: 'carry',
          html:
            'The dove goes out the first time and finds nothing. The second time finds only water and sky. The third time brings back the leaf. Some of your own journeys out into the world have ended in nothing. Some have sent you back exhausted. But watch for the third time. Watch for the small green thing, the first sign that the world is waking under your feet. God&apos;s restoration is often quiet and small at first—not a whole branch, just a leaf. Enough to know that life is growing again.',
        },
        {
          kind: 'reflection',
          id: 'gen8-dove',
          prompt:
            'What small sign of life returning have you seen, after your own flood? What would it mean to trust that a leaf means the whole world is waking?',
        },
        {
          kind: 'artwork',
          matchTitle: /dove|ark/i,
          caption: 'Genesis 8:8–11 · The Dove Returns',
        },
      ],
    },

    /* ─── Genesis 8:13–19 — Leaving the Ark ───────────────────────── */
    {
      ref: 'Genesis 8:13–19',
      title: 'Stepping onto Dry Ground',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 13,
              spans: [
                t('And it came to pass in the six hundredth and first year, in the first month, the first day of the month, that the waters were dried up from off the earth: and Noah removed the covering of the ark, and looked, and, behold, the face of the ground was dry.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And in the second month, on the seven and twentieth day of the month, was the earth dried.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And God spake unto Noah, saying,'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Go forth of the ark, thou, and thy wife, and thy sons, and thy sons&apos; wives with thee.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Bring forth with thee every living thing that is with thee, of all flesh, both of fowl, and of cattle, and of every creeping thing that creepeth upon the earth; that they may breed abundantly in the earth, and be fruitful, and multiply upon the earth.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And Noah went forth, and his sons, and his wife, and his sons&apos; wives with him:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Every beast, every creeping thing, and every fowl, and whatsoever creepeth upon the earth, after their kinds, went forth out of the ark.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen8-emerge',
          html:
            'After a year in the ark—three hundred and seventy-five days of confinement—Noah opens the covering and sees. The earth is dry. God speaks for the first time since the flood command, and He says: Go forth. Bring every living thing out with you. Let them breed and multiply. What was contained, sealed, shut away is now commanded to open and spread across the earth again. The living begin their diaspora into a new world.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes you are in a season of holding on, of containment, of waiting. The covering of the ark stays shut. Then the word comes: Go forth. Release what you have been guarding. Let others out of the boat. The season of confinement is finished. Whatever has been multiplying quietly in the small space is now sent out into the open world, and that&apos;s right. That&apos;s the next season.',
        },
        {
          kind: 'reflection',
          id: 'gen8-forth',
          prompt:
            'What have you been holding in confinement—a gift, a calling, a relationship? What would it look like to open the covering and send it forth to multiply in the world?',
        },
      ],
    },

    /* ─── Genesis 8:20–22 — Noah's Altar and God's Promise ────────── */
    {
      ref: 'Genesis 8:20–22',
      title: 'The Sweet Savour and God&apos;s Oath',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 20,
              spans: [
                t('And Noah builded an '),
                hg('altar unto the LORD', 'gen8-altar'),
                t('; and took of every clean beast, and of every clean fowl, and '),
                hp('offered burnt offerings', 'christ-savour'),
                t(' on the altar.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And the LORD smelled a '),
                hy('sweet savour', 'hebrew-reach'),
                t('; and the LORD said in his heart, I will not again curse the ground any more for man&apos;s sake; for the '),
                hg('imagination of man&apos;s heart is evil from his youth', 'gen8-heart'),
                t('; neither will I again smite any more every thing living, as I have done.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('While the earth remaineth, seedtime and harvest, and cold and heat, and summer and winter, and day and night shall not cease.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen8-altar',
          html:
            'The first thing Noah does after stepping out of the ark is not to plant a field or build a house. He builds an altar. He takes the clean animals—the ones that were meant for sacrifice, the ones he cannot keep—and he offers them to God. The flood has just destroyed the world, and Noah&apos;s response is gratitude. Worship comes before survival.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-reach',
          title: 'Reach hannichoach — &ldquo;sweet savour&rdquo;',
          script: 'רֵיחַ הַנִּיחֹחַ',
          translit: '<strong>reach</strong> · scent, smell / <strong>nichoach</strong> · sweet, restful, pleasing',
          description:
            'This phrase appears seventeen times in Leviticus, always describing a sacrifice God accepts. Noah&apos;s burnt offering rises to Heaven as a sweet savour. The Psalmist will later sing that God smells the prayers of His people like incense (Ps. 141:2). What matters is not the grandeur of the offering but the heart of the one who gives it.',
        },
        {
          kind: 'commentary',
          id: 'gen8-heart',
          html:
            'God makes a strange statement: He will not curse the earth again even though the imagination of man&apos;s heart is evil from his youth. The flood was judgment for that evil. And yet God swears an oath: never again, not because humans have become righteous, but because He has decided mercy will be the shape of His relationship with the earth from this point forward. The judgment was real. The grace that comes after is realer still.',
        },
        {
          kind: 'christ',
          id: 'christ-savour',
          title: 'Christ Connection — The Final Sweet Savour',
          html:
            'Paul writes: &ldquo;Christ also hath loved us, and hath given himself for us an offering and a sacrifice to God for a <em>sweetsmelling savour</em>&rdquo; (Eph. 5:2). Noah&apos;s burnt offering on the dirt rises as a sweet smell to Heaven, and God swears mercy. Christ&apos;s sacrifice on the hill rises as the same savour, and God the Father swears that sin has been forgiven, that death has been defeated, that the curse is being lifted forever. What Noah offered on an altar of stone, Christ offered with His body. What brought a one-time reprieve, brought an eternal covenant.',
        },
        {
          kind: 'carry',
          html:
            'Noah did not build an altar because God demanded it. He built it because his heart knew that gratitude was the only appropriate response to grace. This week, notice what gets your first fruits—not the urgent, not the practical, but what you offer first to God. A morning before your phone. A meal with your family before scrolling. An hour of rest before productivity. These small altars tell the truth of what you believe about grace. God smells them, and they are a sweet savour to Him.',
        },
        {
          kind: 'reflection',
          id: 'gen8-altar-reflection',
          prompt:
            'What would it look like for you to build an altar first—to give God your first fruits, your first thought, your first hour of the day—before you give them to anything else?',
        },
        {
          kind: 'artwork',
          matchTitle: /noah|altar/i,
          caption: 'Genesis 8:20–22 · Noah&apos;s Altar',
        },
      ],
    },
  ],
};
