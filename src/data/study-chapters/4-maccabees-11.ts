import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

export const FOURTH_MACCABEES_11: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 11,

  estimatedMinutes: { 5: 3, 10: 6, 15: 9 },
  intros: [
    'The fourth and fifth brothers step forward into the tyrant&apos;s machinery of death. The fourth is placed on the catapult-rack, his ribs broken one by one. The fifth is roasted with metal plates heated in the fire. Yet neither yields. Each speaks defiance and hope, invoking God&apos;s justice and resurrection.',
    'Their words turn suffering into witness. In the fire and on the rack, they proclaim not despair but the victory of covenant—a victory that death itself cannot undo.',
  ],

  sections: [
    /* ─── The Fourth Brother ──────────────────────────────────────────────────── */
    {
      ref: '4 Maccabees 11:1–7',
      title: 'The Fourth Brother on the Rack',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(1, t('And the fourth brother, brought forth to the instruments, spoke thus to the tyrant: '), hp('Thou art cruel', 'mac4-11-cruel'), t(', yet the God of Israel is not as thou art.')),
            verse(2, t('His limbs were stretched upon the '), hg('catapult-machine', 'mac4-11-catapult'), t(', and his body was wracked with torment.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-11-cruel',
          html: 'The fourth brother does not address the tyrant in fear or supplication. He addresses him with stark theological clarity: your cruelty is a finite thing, belonging to a human realm. The God above you operates on a different principle altogether.',
        },
        {
          kind: 'commentary',
          id: 'mac4-11-catapult',
          html: 'The catapult-machine was a siege instrument deployed to tear apart city walls. Antiochus turns it upon the body of a single young man—a grotesque misuse of power that paradoxically reveals its own weakness.',
        },
        {
          kind: 'greek',
          id: 'mac4-11-katapeltēs',
          title: 'Katapeltēs — &ldquo;Catapult-Machine&rdquo;',
          script: 'καταπέλτης',
          translit: '<strong>katapeltēs</strong> · catapult; siege machine; instrument of tearing',
          description: 'The word evokes the machinery of war. The tyrant deploys the apparatus of empire itself—the tools that conquered cities—against a single body. Yet instruments fail against the unbroken will.',
        },
        {
          kind: 'carry',
          html: 'When you stand before a force designed to break you, naming its true character is the first act of freedom. The brother refuses to grant the tyrant the dignity of ultimate power. He speaks truth into the machinery arrayed against him.',
        },
        {
          kind: 'reflection',
          id: 'mac4-11-cruel-refl',
          prompt: 'What "catapult-machine" of pressure or machinery has tried to break you? How does naming its limitation change your stance?',
        },
      ],
    },

    /* ─── The Fourth Brother Defies ───────────────────────────────────────────── */
    {
      ref: '4 Maccabees 11:3–8',
      title: 'Ribs Broken; Spirit Unbroken',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(3, t('As his ribs broke beneath the wheels, he cried out in agony—yet not to yield, but to '), hp('declare God&apos;s justice', 'mac4-11-justice'), t('.')),
            verse(5, t('He spoke unto the executioners: '), hg('I taste the bitterness of your devices', 'mac4-11-bitter'), t(', yet the sweetness of the law is mine.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-11-justice',
          html: 'The breaking of bones does not silence the brother. Instead, it becomes the occasion for his witness. His cries are not cries of defeat but proclamations of what remains unbroken: his faith, his covenant, his knowledge of God&apos;s justice working in history.',
        },
        {
          kind: 'commentary',
          id: 'mac4-11-bitter',
          html: 'The brother speaks of tasting bitterness and sweetness in the same moment—the bitterness of instruments designed to tear him apart, the sweetness of the law he clings to. Suffering need not erase the joy of covenant.',
        },
        {
          kind: 'greek',
          id: 'mac4-11-ekdikēsis',
          title: 'Ekdikēsis — &ldquo;Vengeance; Justice&rdquo;',
          script: 'ἐκδίκησις',
          translit: '<strong>ekdikēsis</strong> · vengeance; righteous justice; vindication',
          description: 'The brother cries out for God&apos;s vindication—not personal revenge, but the working of divine justice that will overturn the tyrant&apos;s claims. He trusts that what the world sees as victory will be revealed as defeat.',
        },
        {
          kind: 'carry',
          html: 'Suffering speaks. And if we are anchored in something deeper than pain—God&apos;s righteousness, His covenant, His justice—our suffering becomes testimony. The breaking of the body can become the breaking open of witness.',
        },
        {
          kind: 'reflection',
          id: 'mac4-11-bitter-sweet',
          prompt: 'The brother tasted bitterness yet spoke of sweetness. Where have you found hidden sweetness in a bitter season?',
        },
      ],
    },

    /* ─── The Fifth Brother ───────────────────────────────────────────────────── */
    {
      ref: '4 Maccabees 11:9–18',
      title: 'The Fifth Brother in the Fire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(9, t('And the fifth brother was brought forth. And they laid upon his body '), hy('plates of bronze heated in the fire', 'mac4-11-bronze'), t('.')),
            verse(10, t('Yet he looked at the king and said: '), hg('Thy instruments are but shadows of torment', 'mac4-11-shadow'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-11-bronze',
          html: 'The fifth brother endures a punishment more refined in its cruelty: slow burning, the searing of skin, the prolonged agony of heat. Yet his response is not to count the moments of pain but to declare the smallness of the tyrant&apos;s reach.',
        },
        {
          kind: 'commentary',
          id: 'mac4-11-shadow',
          html: 'The instruments of torture are shadows—real enough to cast a shadow, to burn, to break—but they have no ultimate substance. They are the tools of a mortal king in a temporal realm. The reality they shadow is God&apos;s eternal justice.',
        },
        {
          kind: 'carry',
          html: 'In the midst of fire, the brother maintains perspective. This apparatus, however terrible, is temporary. His covenant is eternal. This suffering, however acute, is finite. His God is infinite.',
        },
        {
          kind: 'reflection',
          id: 'mac4-11-shadows',
          prompt: 'What torments in your life might be "shadows"—real enough to hurt, yet small against eternity? How does that reshape your stance toward them?',
        },
      ],
    },

    /* ─── The Fifth Brother Speaks ────────────────────────────────────────────── */
    {
      ref: '4 Maccabees 11:11–20',
      title: 'Resurrection Hope Proclaimed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(12, t('Brother, brother—know that '), hp('the God who made us will raise us again', 'mac4-11-anastasis'), t('. We shall not remain in death.')),
            verse(14, t('Our bodies may burn and break, but the law shall not burn. Our God shall not be mocked. '), hg('He will require vengeance upon this king', 'mac4-11-avenge'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-11-anastasis',
          html: 'The fifth brother does not merely endure; he proclaims. In the midst of fire, he voices what the tyrant fears most: the resurrection of the dead. The God of Israel is not confined to the present moment or the tyrant&apos;s power. He calls forth the dead.',
        },
        {
          kind: 'greek',
          id: 'mac4-11-anastasis-word',
          title: 'Anastasis — &ldquo;Resurrection; Standing Up Again&rdquo;',
          script: 'ἀνάστασις',
          translit: '<strong>anastasis</strong> · rising up; resurrection; standing again',
          description: 'The word carries the sense of rising from the dead, the overturning of death&apos;s finality. It is not escape from suffering but passage through it into a restored body, a new life.',
        },
        {
          kind: 'commentary',
          id: 'mac4-11-avenge',
          html: 'The brother calls upon God to avenge—not for personal satisfaction, but because God&apos;s justice requires it. This is the cry for the moral shape of the universe to be set right, for the tyrant&apos;s deeds to not have the final word.',
        },
        {
          kind: 'christ',
          id: 'mac4-11-christ-resurrection',
          title: 'Christ Connection — The First to Rise',
          html: 'The brother proclaims resurrection in the fire. Paul writes: "Christ is risen from the dead, and become the firstfruits of them that slept. For since by man came death, by man came also the resurrection of the dead" (1 Cor. 15:20–21). The brothers invoke resurrection; Christ embodies it. Every believer who rises with Him steps into the victory they proclaimed under torture.',
        },
        {
          kind: 'carry',
          html: 'When you stand in fire—whether literal or spiritual—the deepest act of defiance is to proclaim hope. Not cheap hope. Not the false hope that the suffering is not real. But the hope grounded in God&apos;s character: He who created us will raise us. He who called us into covenant will not abandon us to death.',
        },
        {
          kind: 'reflection',
          id: 'mac4-11-resurrection-refl',
          prompt: 'What resurrection hope do you hold onto when suffering presses hardest? How does that hope change the meaning of what you endure?',
        },
      ],
    },


    /* ─── The Brothers&apos; Unified Witness ───────────────────────────────────────── */
    {
      ref: '4 Maccabees 11:19–27',
      title: 'The Seventh Word: God&apos;s Justice and Our Resurrection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            verse(19, t('So the fourth and fifth brothers gave up their spirits, having '), hp('conquered through the law', 'mac4-11-conquered'), t(' and through faith in God.')),
            verse(22, t('And their mother beheld them, and her heart broke and mended in a single moment. For she saw not death but passage. '), hg('She saw her sons ascending', 'mac4-11-ascent'), t('.')),
            verse(26, t('And it was written in heaven that these martyrs shall be '), hg('intercessors for the people', 'mac4-11-intercession'), t(' and judges with God Himself in the age to come.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-11-conquered',
          html: 'The brothers do not conquer the tyrant. They conquer death itself—the tyrant&apos;s last tool. They conquer through the law held in their hearts and the God in whom they trust. This is the deepest victory: a victory over the machinery designed to reduce them to silence.',
        },
        {
          kind: 'commentary',
          id: 'mac4-11-ascent',
          html: 'The mother, watching her sons die, sees them ascending. Death becomes a doorway upward. Faith transforms what the tyrant meant as annihilation into exaltation—a truth that outlasts empires.',
        },
        {
          kind: 'christ',
          id: 'mac4-11-christ-vengeance',
          title: 'Christ Connection — Vengeance Belongs to God',
          html: 'The brothers cry out for God&apos;s justice, but they do not take vengeance themselves. Jesus said: "Vengeance is mine; I will repay" (Rom. 12:19). Yet more: He took upon Himself the consequences of all sin. The brothers&apos; cry for justice is answered in Christ&apos;s resurrection—in which all injustice is finally and permanently reversed. His rising is the final word over every tyrant.',
        },
        {
          kind: 'commentary',
          id: 'mac4-11-intercession',
          html: 'To be an intercessor is to stand between the people and God, pleading on their behalf. The text grants the martyrs a role in the age to come—their suffering and faithfulness have cosmic weight, continuing to speak on behalf of those who come after them.',
        },
        {
          kind: 'carry',
          html: 'The mother of the Maccabean brothers watches her sons die rather than betray their covenant. She does not see the end of hope but the beginning of it. In Christian faith, we see the same: death is not the end but a doorway. Our God is not limited to time or the tyrant&apos;s reach. He is the God of the resurrection.',
        },
        {
          kind: 'reflection',
          id: 'mac4-11-witness',
          prompt: 'The brothers became "intercessors for the people." How does a faithful death become an eternal witness? What does it mean for a martyr to pray for those left behind?',
        },
        {
          kind: 'artwork',
          matchTitle: /martyrdom|fire|torture/i,
          matchArtist: /rembrandt|caravaggio|ribera/i,
          caption: '4 Maccabees 11 · The Fifth Brother in Fire',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The fourth and fifth brothers endured the rack and fire, proclaiming: "The God who made us will raise us again. We shall not remain in death. He will require vengeance upon this king."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 11 · Study Guide',
  },
};
