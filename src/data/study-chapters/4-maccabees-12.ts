import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

export const FOURTH_MACCABEES_12: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 12,

  intros: [
    'By chapter 12, Antiochus is desperate. Five brothers have already died, each one unmoved by torture, each one witnessing to their God. The youngest brother alone remains alive.',
    'In a final gambit, the king offers the youngest—the smallest, the gentlest, still a child—wealth, power, friendship, and rule. Everything the tyrant believes matters. Everything the martyrs have already rejected.',
  ],

  sections: [
    {
      ref: '4 Maccabees 12:1–8',
      title: 'The Tyrant&apos;s Final Offer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(1, t('And Antiochus, seeing that five brothers had perished, turned to the youngest, who alone remained alive. And he said unto him:')),
            verse(2, t('"Pity thy youth, boy. I will make thee rich beyond measure. I will grant thee '), hp('friendship', 'mac4-12-philia'), t(' and rule among my people.')),
            verse(3, t('Worship the Greek gods, and thou shalt be honored among all men. Refuse, and thou shalt burn as thy brothers have burned."')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-12-offer',
          html: 'The king does not understand what he faces. He has watched five men spit out his threats as worthless. Yet he imagines that youth, perhaps, can still be swayed. He offers not merely life but the things the powerful crave: wealth, honor, friendship with the king himself. In the tyrant&apos;s world, nothing is more precious. In the martyrs&apos; world, nothing is cheaper.',
        },
        {
          kind: 'greek',
          id: 'mac4-12-philia',
          title: 'Philia — Friendship; Affection',
          script: 'φιλία',
          translit: '<strong>Philia</strong> · friendship; affection; loving association',
          description: 'To Antiochus, friendship with the king is the highest prize—social belonging, protection, favor. To the martyr, true philia belongs to God and to the faith-bound community. The king&apos;s friendship is a kingdom of ash.',
        },
        {
          kind: 'christ',
          id: 'mac4-12-christ-tempt',
          title: 'Christ Connection — The Wilderness Temptation',
          html: 'Jesus, too, faced a final tempter offering "all these things will I give thee" (Matthew 4:9). The devil showed Him "all the kingdoms of the world and the glory of them." Jesus answered: "Get thee hence, Satan." The youngest brother, like Christ, refuses the kingdoms of this world.',
        },
        {
          kind: 'carry',
          html: 'When the world offers you everything—comfort, belonging, prestige—in exchange for your faith, you will know it is not the voice of love but of desperation. The desperate tyrant always speaks loudest.',
        },
        {
          kind: 'reflection',
          id: 'mac4-12-offers',
          prompt: 'What "friendships" or "kingdoms" has the world offered you in exchange for compromise? How do you recognize these offers?',
        },
      ],
    },
    {
      ref: '4 Maccabees 12:9–14',
      title: 'The Youngest&apos;s Refusal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(9, t('And the youngest brother, standing unmoved, said to the king: '), hp('Thou hast been defeated by us', 'mac4-12-nikao'), t(' seven times. Do not now imagine that thou hast won.')),
            verse(10, t('I will not reject the laws of my fathers, nor forsake the God of my people, for all thy promises of gold and rule.')),
            verse(11, t('Thy '), hp('friendship', 'mac4-12-philia'), t(' is death, and thy kingdom is corruption. I choose the kingdom of God instead.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-12-youngest',
          html: 'The youngest speaks with the clarity of the seven brothers before him. He is not naive; he knows exactly what he is refusing. He has watched the king torture and burn. He knows the fire is real. And he chooses it anyway—not because he is unafraid, but because he has seen something the king cannot: that his brothers are already alive in God, and that all the king&apos;s gold is already turned to dust.',
        },
        {
          kind: 'greek',
          id: 'mac4-12-nikao',
          title: 'Nikao — Overcome; Conquer; Defeat',
          script: 'νικάω',
          translit: '<strong>Nikao</strong> · overcome; conquer; be victorious',
          description: 'The boy speaks of victory in a language the king should understand. "You have been conquered by us." The tyrant has lost not because his weapons are weak but because his victims have already escaped his power through faith.',
        },
        {
          kind: 'christ',
          id: 'mac4-12-christ-no',
          title: 'Christ Connection — No Temptation Will Master You',
          html: 'Paul writes: "No temptation has overtaken you that is not common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear" (1 Corinthians 10:13). The youngest brother, like Christ in the wilderness, finds his "way out" by refusing to negotiate with the tempter.',
        },
        {
          kind: 'carry',
          html: 'Refusal is its own form of strength. When you say "no" to what the world offers, you are saying "yes" to something far greater—a kingdom not of this world, a friendship that death cannot break.',
        },
        {
          kind: 'reflection',
          id: 'mac4-12-refusal',
          prompt: 'What enables someone to say "no" to everything the world values? Where does such courage come from?',
        },
      ],
    },
    {
      ref: '4 Maccabees 12:15–19',
      title: 'The Youngest Brother Executed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(15, t('And the king, enraged, commanded that the boy be cast into the fire. And as the flames rose around him, he cried out with a voice clear as a bell:')),
            verse(16, t('"'), hp('Thou shalt be tormented forever', 'mac4-12-aionios'), t(', O king. Thy days are numbered, but thy judgment is eternal."')),
            verse(17, t('And the boy&apos;s voice fell silent as the fire consumed him. Yet his words hung in the air, unburnt.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-12-death',
          html: 'The youngest does not merely die. He prophesies. In his final breath, he inverts the king&apos;s power structure: the tyrant who commands death will himself be commanded by death—not for a moment, but forever. The boy&apos;s death is not defeat but the speaking of judgment.',
        },
        {
          kind: 'greek',
          id: 'mac4-12-aionios',
          title: 'Aiōnios — Eternal; Everlasting',
          script: 'αἰώνιος',
          translit: '<strong>Aiōnios</strong> · eternal; everlasting; without end',
          description: 'The boy pronounces aiōnios judgment—a torment without end, a suffering that does not diminish with time. This is the language of Gehenna, of the age to come, of divine reckoning.',
        },
        {
          kind: 'artwork',
          matchTitle: /martyr|fire|burn|pyre/i,
          caption: 'The Witness of Fire: How the martyrs&apos; final words carry beyond their death.',
        },
        {
          kind: 'christ',
          id: 'mac4-12-christ-gehenna',
          title: 'Christ Connection — Gehenna and Final Judgment',
          html: 'Jesus Himself spoke of eternal torment: "These will go away into eternal punishment, but the righteous into eternal life" (Matthew 25:46). The boy echoes Christ&apos;s own warnings about gehenna (Matthew 25:41). The tyrant, not the martyrs, faces the fire that does not end.',
        },
        {
          kind: 'greek',
          id: 'mac4-12-gehenna',
          title: 'Gehenna — Hell; The Place of Judgment',
          script: 'γέεννα',
          translit: '<strong>Gehenna</strong> · hell; the valley of judgment; eternal separation from God',
          description: 'Gehenna is not merely a place of physical fire but of divine reckoning—separation from the presence of God. It is the final word of those who have rejected Him.',
        },
        {
          kind: 'carry',
          html: 'The youngest brother teaches us that the tyrant&apos;s power is temporary. His fire, real as it is, is brief. But the God of the martyrs is eternal. The judgment the boy speaks is not vengeance but truth—the simple, terrible truth that all things answer to God.',
        },
        {
          kind: 'reflection',
          id: 'mac4-12-eternal',
          prompt: 'What does it mean that the boy speaks of "eternal torment" even as his own life ends? How does faith change what we understand about death?',
        },
      ],
    },
    {
      ref: '4 Maccabees 12:20–26',
      title: 'The Youngest and the Sixth: One Witness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(20, t('Now, some say that the sixth brother perished before the youngest. Others say the boy alone was the sixth. Yet in the account they are one: the final, unbroken testimony.')),
            verse(21, t('Seven brothers entered the fire. And the king, who commanded all—who was lord of armies, master of nations—could not move them.')),
            verse(24, t('For they '), hp('gave up their bodies', 'mac4-12-pyr'), t(' to the fire, but not their souls. Their witness outlasted the flames.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-12-six-and-youngest',
          html: 'Whether the sixth brother and the youngest are the same person or two different young men, the text makes a theological claim: they are one witness. Seven brothers, all refusing. All unmoved. All declaring the same truth: that God remains, even when empires burn.',
        },
        {
          kind: 'greek',
          id: 'mac4-12-pyr',
          title: 'Pyr — Fire',
          script: 'πῦρ',
          translit: '<strong>Pyr</strong> · fire; the flame that tests and purifies',
          description: 'Pyr is not merely destruction but divine refining. The fire that was meant to break the brothers instead became the medium of their transformation and witness.',
        },
        {
          kind: 'christ',
          id: 'mac4-12-christ-fire',
          title: 'Christ Connection — Tested and Unshaken',
          html: 'Peter speaks of faith "more precious than gold, which perishes even though refined by fire" (1 Peter 1:7). The fire that consumes the body cannot touch the soul rooted in God. Christ Himself passed through the fire of judgment so we might emerge unburnt.',
        },
        {
          kind: 'carry',
          html: 'The brothers teach us that what the world can take—wealth, comfort, even life itself—is not what the world cannot take: your faith, your witness, your eternal belonging to God. Guard these things above all.',
        },
        {
          kind: 'reflection',
          id: 'mac4-12-final',
          prompt: 'What would it mean to "give up your body but not your soul"? How do the martyrs redefine what it means to survive?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I will not abandon the laws of my fathers. Thou shalt be tormented forever, O king. But thy judgment is eternal.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 12 · Study Guide',
  },
};
