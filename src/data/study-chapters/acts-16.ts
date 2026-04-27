import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const ACTS_16: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 16,

  intros: [
    'Paul receives a vision of a man from Macedonia crying, "Come over into Macedonia, and help us." He travels to Philippi, where he meets Lydia, a seller of purple, whose heart the Lord opens to receive the gospel. He is also imprisoned with Silas for casting out a demon. But in prison, an earthquake shakes the foundations. The Philippian jailer, thinking the prisoners have escaped, is about to kill himself. Paul cries out: "Do thyself no harm: we are all here." The jailer asks the question that echoes through Acts: "What must I do to be saved?"',
  ],

  sections: [
    {
      ref: 'Acts 16:1–15',
      title: 'The Macedonian Call',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(9, 'And a vision appeared to Paul in the night; There stood a man of Macedonia, and prayed him, saying, Come over into Macedonia, and help us.'),
            plain(14, 'And a certain woman named Lydia, a seller of purple, of the city of Thyatira, which worshipped God, heard us: whose heart the Lord opened, that she attended unto the things which were spoken of Paul.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts16-vision',
          html: 'Paul receives a night vision calling him to Macedonia. This is a pivotal moment in mission history. The gospel now crosses from Asia into Europe. The vision guides Paul&apos;s steps. He obeys without question.',
        },
        {
          kind: 'greek',
          id: 'acts16-dianoigo',
          title: 'Dianoigo — To Open',
          script: 'διανοίγω',
          translit: '<strong>Dianoigo</strong> · to open; to open the mind; to disclose',
          description: 'The Lord opens Lydia&apos;s heart. Faith is not achieved by human persuasion alone but by the Spirit opening the heart to receive.',
        },
        {
          kind: 'christ',
          id: 'acts16-christ-vision',
          title: 'Christ Connection — The Gospel Spreads',
          html: 'Jesus commanded His apostles to preach to all nations. Paul&apos;s vision is the answer to that commission. The gospel moves westward, toward the Roman Empire, toward the entire world.',
        },
        {
          kind: 'carry',
          html: 'Lydia and her household are baptized. She invites Paul and Silas to stay in her home. The gospel finds its first foothold in Philippi in the household of a faithful woman.',
        },
        {
          kind: 'reflection',
          id: 'acts16-call-reflect',
          prompt: 'Where is God calling you to go or serve?',
        },
      ],
    },

    {
      ref: 'Acts 16:25–34',
      title: 'The Philippian Jailer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(30, 'And brought them out, and said, Sirs, what must I do to be saved?'),
            plain(31, 'And they said, Believe on the Lord Jesus Christ, and thou shalt be saved, and thy house.'),
            plain(34, 'And when he had brought them into his house, he set meat before them, and rejoiced, believing in God with all his household.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts16-jailer',
          html: 'Paul and Silas are imprisoned for casting out a demon. At midnight, they pray and sing hymns. An earthquake shakes the prison. The jailer thinks the prisoners have escaped and reaches for his sword. Paul cries out: "Do thyself no harm: we are all here." The jailer is converted.',
        },
        {
          kind: 'commentary',
          id: 'acts16-salvation',
          html: 'The jailer asks the one question that matters: "What must I do to be saved?" Paul&apos;s answer is simple: "Believe on the Lord Jesus Christ, and thou shalt be saved." Salvation comes through faith.',
        },
        {
          kind: 'greek',
          id: 'acts16-pisteuō',
          title: 'Pisteuō — To Believe',
          script: 'πιστεύω',
          translit: '<strong>Pisteuō</strong> · to believe; to have faith; to trust',
          description: 'Belief is not merely intellectual assent. It is trust, commitment, surrender to Jesus Christ as Lord.',
        },
        {
          kind: 'christ',
          id: 'acts16-christ-savior',
          title: 'Christ Connection — Believe and Be Saved',
          html: 'Jesus is the Savior. Faith in Him is the path to salvation. Not works, not law, not human effort—but faith in the One who died and rose again.',
        },
        {
          kind: 'carry',
          html: 'The jailer washes the wounds of Paul and Silas. He feeds them. He rejoices with his whole household. The gospel transforms not just individuals but families and communities.',
        },
        {
          kind: 'reflection',
          id: 'acts16-faith-reflect',
          prompt: 'What does it mean to believe on the Lord Jesus Christ with your whole heart?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'What must I do to be saved?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 16 · Study Guide',
  },

  hasHebrew: false,
};
