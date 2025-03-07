export const BOOK_URL = 'https://bookshelves.p.rapidapi.com/books';
const BOOK_KEY = 'f44201b387msh5e0cad16ab4e4d5p1b65e1jsn245ab80cdcce';
const BOOK_HOST = 'bookshelves.p.rapidapi.com';
export const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': BOOK_HOST,
    'X-RapidAPI-Key': BOOK_KEY,
  },
};
export const localBooks = [
  {
    author: 'Terry Hayes',
    description: 'THE AMAZING NEW THRILLER FROM TERRY HAYES.',
    id: 0,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51yzXRsP89L._SX319_BO1,204,203,200_.jpg',
    price: '£16.00',
    review: '3.2 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'The Year of the Locust: Terry Hayes',
  },

  {
    author: 'Stephen King',
    description:
      "'A dazzlingly shapeshifting novel . . . equally good at action scenes and in-depth psychology' The Sunday Times'A thriller with a surprisingly heartfelt and redemptive ending, Billy Summers is a compelling and engrossing read' Sunday ExpressFrom legendary storyteller and No. 1 bestseller Stephen King, whose 'restless imagination is a power that cannot be contained' (The New York Times Book Review), comes a thrilling new novel about a good guy in a bad job.Billy Summers is a man in a room with a gun. He's a killer for hire and the best in the business. But he'll do the job only if the target is a truly bad guy. And now Billy wants out. But first there is one last hit. Billy is among the best snipers in the world, a decorated Iraq war vet, a Houdini when it comes to vanishing after the job is done. So what could possibly go wrong? How about everything.This spectacular can't-put-it-down novel is part war story, part love letter to small town America and the people who live there, and it features one of the most compelling and surprising duos in King fiction, who set out to avenge the crimes of an extraordinarily evil man. It's about love, luck, fate, and a complex hero with one last shot at redemption. You won't put this story down, and you won't forget Billy.",
    id: 1,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51CR2a6HU1S._SX323_BO1,204,203,200_.jpg',
    price: '£10.00',
    review: '4.6 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'Billy Summers: The No. 1 Bestseller',
  },

  {
    author: 'Abigail Dean',
    description:
      '‘Sensational. Gripping, haunting, and beautifully written’ RICHARD OSMAN‘Haunting, powerful, with a pitch-perfect ending’ THE NEW YORK TIMES',
    id: 2,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41xFykGq2fS._SX324_BO1,204,203,200_.jpg',
    price: '£4.50',
    review: '4.2 out of 5 stars',
    source: 'www.amazon.co.uk',
    title:
      'Girl A: The Sunday Times and New York Times global best seller, an astonishing new crime thriller debut novel from the biggest literary fiction voice of 2021',
  },
  {
    author: 'John Grisham',
    description:
      "***THE SUNDAY TIMES THRILLER OF THE MONTH***Nonstop suspense from the Sunday Times bestselling author: Investigator Lacy Stoltz follows the trail of a serial killer, and closes in on a shocking suspect - a sitting judge.In The Whistler, Lacy Stoltz investigated a corrupt judge who was taking millions in bribes from a crime syndicate. She put the criminals away, but only after being attacked and nearly killed. Three years later, and approaching forty, she is tired of her work for the Florida Board on Judicial Conduct and ready for a change.Then she meets a mysterious woman who is so frightened she uses a number of aliases. Jeri Crosby's father was murdered twenty years earlier in a case that remains unsolved and that has grown stone cold. But Jeri has a suspect whom she has become obsessed with and has stalked for two decades. Along the way, she has discovered other victims.Suspicions are easy enough, but proof seems impossible. The man is brilliant, patient, and always one step ahead of law enforcement. He is the most cunning of all serial killers. He knows forensics, police procedure, and most important: he knows the law.He is a judge, in Florida - under Lacy's jurisdiction.He has a list, with the names of his victims and targets, all unsuspecting people unlucky enough to have crossed his path and wronged him in some way. How can Lacy pursue him, without becoming the next name on his list?The Judge's List is by any measure John Grisham's most surprising, chilling novel yet.PRAISE FOR JOHN GRISHAM'When Grisham gets in the courtroom he lets rip, drawing scenes so real they're not just alive, they're pulsating' Mirror'A superb, instinctive storyteller' The Times'Storytelling genius . . . he is in a league of his own' Daily Record 350+ million copies, 45 languages, 9 blockbuster films:NO ONE WRITES DRAMA LIKE JOHN GRISHAM",
    id: 3,
    imgUrl:
      'https://images-eu.ssl-images-amazon.com/images/I/41piAxEIYIL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    price: '£9.00',
    review: '4.4 out of 5 stars',
    source: 'www.amazon.co.uk',
    title:
      "The Judge's List: The phenomenal new novel from international bestseller John Grisham",
  },
  {
    author: 'Lee Child',
    description:
      "Reacher never backs down from a problem.And he's about to find a big one, on a deserted Arizona road, where a Jeep has crashed into the only tree for miles around. Under the merciless desert sun, nothing is as it seems.Minutes later Reacher is heading into the nearby border town, a backwater that has seen better days. Next to him is Michaela Fenton, an army veteran turned FBI agent, who is trying to find her twin brother. He might have got mixed up with some dangerous people.And Reacher might just need to pay them a visit.Their leader has burrowed his influence deep into the town. Just to get in and meet the mysterious Dendoncker, Reacher is going to have to achieve the impossible.To get answers will be even harder. There are people in this hostile, empty place who would rather die than reveal their secrets.But then, if Reacher is coming after you, you might be better off dead.***'Jack Reacher is today's James Bond, a thriller hero we can't get enough of.' Ken Follett'If you haven't read any Jack Reacher, you have a treat in store . . . a hitchhiker without a phone, a one-man force for good.' The Times'A contemporary version of the knight in shining armour . . . Reacher is a mythic figure.' Literary Review'Jack Reacher is a wonderfully epic hero; tough, taciturn, yet vulnerable... Irresistible.' People'Jack Reacher has long since earned his prominent place in the pantheon of cool, smart-talking American heroes.' New York Times",
    id: 4,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51bkhS7IZtL._SX325_BO1,204,203,200_.jpg',
    price: '£10.00',
    review: '4.0 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'Better Off Dead: (Jack Reacher 26)',
  },
  {
    author: 'Joanne Harris',
    description:
      "Your favourite authors have been gripped by this electric psychological thriller!'A dark world of emotional complexity and betrayal, where twist follows twist and nothing is what it seems' ALEX MICHAELIDES'Exhilarating, addictive, fierce' BRIDGET COLLINS'A psychological thriller you can't put down and an antiheroine you won't forget' HARLAN COBEN'Dark, Gothic, and propulsively readable - past secrets and present discoveries entangle in an intricately crafted conclusion' RUTH WARE'Engrossing, cunning, sharp, sinister . . . kept me enthralled till the final pages' CHRIS WHITAKER'A clever chess game of repressed fears, power struggles, secrets and lies' LUCY ATKINS 'A complex, chilling mystery full of shifting truths and dark corners where the unburied past lies in wait' TAMMY COHEN'A dark and richly enjoyable novel that already feels like a classic' ELLY GRIFFITHS'Irresistibly readable, dark and brilliant with a masterful emotional punch' CATRIONA WARD* * * * *Now I'm in charge, the gates are my gates. The rules are my rules. It's an incendiary moment for St Oswald's school. For the first time in its history, a headmistress is in power, the gates opening to girls.Rebecca Buckfast has spilled blood to reach this position. Barely forty, she is just starting to reap the harvest of her ambition. As the new regime takes on the old guard, the ground shifts. And with it, the remains of a body are discovered. But Rebecca is here to make her mark. She'll bury the past so deep it will evade even her own memory, just like she has done before. After all... You can't keep a good woman down.* * * * * Praise for Joanne Harris's other books set in the St Oswald's world - which all read as standalone thrillers: 'A masterpiece of misdirection' Val McDermid 'Delivers an almighty twist . . . brilliantly atmospheric ' The Times 'Crime novel or literary novel? Categories really don't matter; readers will find themselves comprehensively gripped' Independent '[A] gripping psychological thriller . . . Harris is one of our most accomplished novelists' Daily Express 'Marvellously mischievous' Good Housekeeping 'A classic whodunnit with the characters carefully crafted and the tension at a knife edge' Sunday Express '[A] delicious black comedy' Daily Mail",
    id: 5,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51-pJi3HneS._SX323_BO1,204,203,200_.jpg',
    price: '£14.29',
    review: '4.4 out of 5 stars',
    source: 'www.amazon.co.uk',
    title:
      'A Narrow Door: The electric psychological thriller from the Sunday Times bestseller',
  },
  {
    author: 'Dirk Cussler',
    description:
      "DIRK PITT IS BACK. AND ON HIS SHOULDERS RESTS THE FATE OF THE ENTIRE PLANET.JOIN THE LATEST THRILL RIDE FROM THE GRAND MASTER OF ADVENTURE, CLIVE CUSSLER_________Tibet, 1959.In the turmoil of the Communist takeover of the mountain kingdom, a Buddhist artefact of immense importance appears to have been lost to history.Until, sixty years later, clues to its survival emerged from the wreckage of a cargo plane discovered deep beneath the surface of the Philippine Sea . . .NUMA Director Dirk Pitt and his old friend Al Giordino already have their hands full dealing with the recovery of a top secret hypersonic missile that went down in the Luzon Strait. Especially when it becomes clear that a rogue Chinese military team has its sights set on the same prize.And that, after making their own earth-shattering discovery about what lies below the waves, they're prepared to go to any lengths to ensure that they possess it.Any lengths at all.From the cold, dark depths of the Pacific Ocean to the vertiginous peaks of the Himalayas, only Dirk Pitt can unravel the mysteries that will bring the world back from the brink of war . . .Praise for Clive Cussler:'The Adventure King' Sunday Express'Just about the best in the business' New York Post 'Cussler is hard to beat' Daily Mail",
    id: 6,
    imgUrl:
      'https://images-eu.ssl-images-amazon.com/images/I/51Mj0GqakoL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    price: '£10.00',
    review: '3.0 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: "Clive Cussler's The Devil's Sea",
  },

  {
    author: 'Ken Follett',
    description:
      "'Bold in scale and meticulously researched' - Sunday Times'A stunning thriller and one of the most compelling reads of the year' – Daily ExpressExpertly researched, visionary in scale and the first contemporary novel in over a decade from international number one bestseller Ken Follett, Never is more than a thriller. It imagines a scenario we all hope never comes true, one which will keep you transfixed until the final page . . .A stolen US army drone.A shrinking oasis in the Sahara Desert. A secret stash of deadly chemicals.Each is a threat to the stability of the world but individually are problems that can be overcome. In the diplomatic arena though, everyone will have a different way of dealing with such a threat. And when those in charge disagree and refuse to back down, it will kick off an international chain reaction with potentially catastrophic consequences: a world edging closer to war . . .Now three people must work tirelessly and with the utmost skill to stop that from happening:A spy working undercover with jihadists. A brilliant Chinese spymaster. A US president beleaguered by a populist rival for the next election.The only question is, in a game of brinksmanship can the inevitable ever be stopped? 'A compelling story, and only too realistic' – Lawrence H. Summers, former U.S. Treasury Secretary",
    id: 7,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51GHAvwe8SS._SX323_BO1,204,203,200_.jpg',
    price: '£10.00',
    review: '4.5 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'Never: Ken Follett',
  },

  {
    author: 'Elly Griffiths',
    description:
      "'If only all history mysteries could be as good as The Midnight Hour' The TimesA twisty new murder story from the bestselling author of the Dr Ruth Galloway Mysteries. An old man lies dead and it looks like poison, but his wife isn't the only one who had reason to kill him. Brighton, 1965When theatrical impresario Bert Billington is found dead in his retirement home, no one suspects foul play. But when the postmortem reveals that he was poisoned, suspicion falls on his wife, eccentric ex-Music Hall star Verity Malone. Frustrated by the police response to Bert's death and determined to prove her innocence, Verity calls in private detective duo Emma Holmes and Sam Collins. This is their first real case, but as luck would have it they have a friend on the inside: Max Mephisto is filming a remake of Dracula, starring Seth Billington, Bert's son. But when they question Max, they feel he isn't telling them the whole story.Emma and Sam must vie with the police to untangle the case and bring the killer to justice. They're sure the answers must lie in Bert's dark past and in the glamorous, occasionally deadly, days of Music Hall. But the closer they get to the truth, the more danger they find themselves in...",
    id: 8,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51UGKY9Wi4L._SX330_BO1,204,203,200_.jpg',
    price: '£11.00',
    review: '4.5 out of 5 stars',
    source: 'www.amazon.co.uk',
    title:
      'The Midnight Hour: Twisty mystery from the bestselling author of The Postscript Murders (The Brighton Mysteries)',
  },

  {
    author: 'Alex Michaelides',
    description: '',
    id: 9,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41EANP48VAL._SX322_BO1,204,203,200_.jpg',
    price: '£7.00',
    review: '3.9 out of 5 stars',
    source: 'www.amazon.co.uk',
    title:
      "'The Maidens: The new thriller from the author of the global bestselling debut The Silent Patient'",
  },
  {
    author: 'Kirupa Chinnathambi',
    description: '',
    id: 10,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41r4HUHrVeL._SX382_BO1,204,203,200_.jpg',
    price: '£16.81',
    review: '4.4 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: "JavaScript Absolute Beginner's Guide",
  },
  {
    author: 'Code Quickly',
    description:
      'Do you want to develop a skill that will ensure you never go jobless again? ',
    id: 11,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41SVTBTm1oL._SX384_BO1,204,203,200_.jpg',
    price: '£9.99',
    review: '4.5 out of 5 stars',
    source: 'www.amazon.co.uk',
    title:
      'Learn JavaScript Quickly: A Complete Beginner’s Guide to Learning JavaScript, Even If You’re New to Programming (Crash Course With Hands-On Project)',
  },
  {
    author: 'Anthony Horowitz',
    description: '',
    id: 12,
    imgUrl:
      'https://images-eu.ssl-images-amazon.com/images/I/51eUhyGnwbL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    price: '£10.00',
    review: '4.3 out of 5 stars',
    source: 'www.amazon.co.uk',
    title:
      'A Line to Kill: from the global bestselling author of Moonflower Murders (Hawthorne and Horowitz)',
  },
  {
    author: 'James Lovegrove',
    description:
      'A beautifully presented sinister seasonal mystery from the acclaimed author of Sherlock Holmes & The Christmas Demon.',
    id: 13,
    imgUrl:
      'https://images-eu.ssl-images-amazon.com/images/I/51zeVThmJyL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    price: '£11.99',
    review: '4.4 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'Sherlock Holmes & the Three Winter Terrors',
  },
  {
    author: 'Catherine Ryan Howard',
    description:
      "Shortlisted for the An Post Irish Book Awards 2021 Crime Fiction Book of the Year ** THE INTERNATIONAL BESTSELLER **'As good as suspense fiction gets' Washington PostNo one even knew they were together. Now one of them is dead.56 DAYS AGOCiara and Oliver meet in a supermarket queue in Dublin and start dating the same week COVID-19 reaches Irish shores.35 DAYS AGOWhen lockdown threatens to keep them apart, Oliver suggests they move in together. Ciara sees a unique opportunity for a relationship to flourish without the scrutiny of family and friends. Oliver sees a chance to hide who - and what - he really is. TODAYDetectives arrive at Oliver's apartment to discover a decomposing body inside. Can they determine what really happened, or has lockdown created an opportunity for someone to commit the perfect crime?'Compulsive, intriguing and fantastically entertaining' Liz Nugent",
    id: 14,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41p5wvEyafL._SX324_BO1,204,203,200_.jpg',
    price: '£11.95',
    review: '4.2 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: '56 Days',
  },

  {
    author: 'Mike McGrath',
    description:
      "JavaScript in easy steps, 6th edition instructs the user how to create exciting web pages that employ the power of JavaScript to provide functionality. You need have no previous knowledge of any scripting language so it's ideal for the newcomer to JavaScript. By the end of this book you will have gained a sound understanding of JavaScript and be able to add exciting dynamic scripts to your own web pages. ",
    id: 15,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51IfxCbUvZL._SX408_BO1,204,203,200_.jpg',
    price: '£8.99',
    review: '4.4 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'JavaScript in easy steps, 6th edition',
  },
  {
    author: 'Jordan B. Peterson',
    description:
      "The #1 Sunday Times bestseller from 'the most influential public intellectual in the Western world right now' (New York Times) - now in paperback.How should we live properly in a world of chaos and uncertainty?Jordan Peterson has helped millions of people, young and old, men and women, aim at a life of responsibility and meaning. Now he can help you.Drawing on his own work as a clinical psychologist and on lessons from humanity's oldest myths and stories, Peterson offers twelve profound and realistic principles to live by. After all, as he reminds us, we each have a vital role to play in the unfolding destiny of the world.Deep, rewarding and enlightening, 12 Rules for Life is a lifeboat built solidly for stormy seas: ancient wisdom applied to our contemporary problems.",
    id: 16,
    imgUrl:
      'https://images-eu.ssl-images-amazon.com/images/I/41EATHVLJRL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    price: '£9.23',
    review: '4.6 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: '12 Rules for Life: An Antidote to Chaos',
  },

  {
    author: 'Jessie Burton',
    description:
      "'A beautiful and profound retelling' - Madeline MillerA dazzling, feminist retelling of Greek myth from the internationally bestselling author of The Miniaturist, stunningly illustrated by Olivia Lomenech Gill.Exiled to a far-flung island by the whims of the gods, Medusa has little company except the snakes that adorn her head instead of hair. But when a charmed, beautiful boy called Perseus arrives on the island, her lonely existence is disrupted with the force of a supernova, unleashing desire, love and betrayal.Filled with glorious full-colour illustrations by award-winning Olivia Lomenech Gill, this astonishing retelling of Greek myth is perfect for readers of Circe and The Silence of the Girls. Illuminating the girl behind the legend, it brings alive Medusa for a new generation.",
    id: 17,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51F0Oz-3njS._SX385_BO1,204,203,200_.jpg',
    price: '£9.99',
    review: '4.5 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'Medusa',
  },
  {
    author: 'Dave Goulson',
    description:
      "**THE SUNDAY TIMES BESTSELLER**'Compelling, penetrating, devastating - Silent Earth is a wake-up call for the world.' Isabella TreeWe have to learn to live as part of nature, not apart from it. And the first step is to start looking after the insects, the little creatures that make our shared world go round.Insects are essential for life as we know it. As they become more scarce, our world will slowly grind to a halt; we simply cannot function without them. Drawing on the latest ground-breaking research and a lifetime's study, Dave Goulson reveals the shocking decline of insect populations that has taken place in recent decades, with potentially catastrophic consequences. He passionately argues that we must all learn to love, respect and care for our six-legged friends.Eye-opening, inspiring and riveting, Silent Earth is part love letter to the insect world, part elegy, part rousing manifesto for a greener planet. It is a call to arms for profound change at every level - in government policy, agriculture, industry and in our own homes and gardens. Although time is running out, it is not yet too late for insect populations to recover. We may feel helpless in the face of many of the environmental issues that loom on our horizon, but Goulson shows us how we can all take simple steps to encourage insects and counter their destruction.",
    id: 18,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41MYlcd+aaL._SX323_BO1,204,203,200_.jpg',
    price: '£13.76',
    review: '4.8 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'Silent Earth: Averting the Insect Apocalypse',
  },
  {
    author: 'Soho House',
    description:
      "The quintessential style, cooking, and home interior book from Soho House, the world's leading members club.Since the first Soho House opened its doors over 25 years ago, we've learnt a bit about what works. Contemporary, global yet with something quintessentially English and homely at its heart, this is Soho House style explained by its experts:- From planning a room to vintage finds: bringing the Soho House look home.- Our House curator's advice on how to buy, collect and hang art.- The art of a great night's sleep: how to design the perfect bedroom.- No-fuss recipes and chef's tips: here's how to make your favourite House dishes.- Inside Babington: our take on country-house living. Wellies optional.- Flip-flop glamour and poolside style from Soho House Miami Beach.- All the secrets of cocktail hour: House tonics and barman's tips.- Spa treatment at home, DIY facials and chocolate brownies.Eat Drink Nap, a 300-page highly illustrated book, with a foreword from founder Nick Jones, and photography from leading food and interiors photographers Mark Seelen and Jean Cazals, shares the Soho House blueprint for stylish, modern living, the Soho House way.___________________________________________Readers love EAT, DRINK, NAP:'A fun and stylish guide to a better life''A perfect coffee table book!''I love it and people comment and do flick though it when they are at my home''Simple but elegant. . . and chocked full of beautiful pictures and wonderful information for making your house a home.'",
    id: 19,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41k7Rwbp1OL._SX420_BO1,204,203,200_.jpg',
    price: '£20.74',
    review: '4.8 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'Eat, Drink, Nap: Bringing the House Home',
  },
  {
    author: 'Stephen Fry',
    description:
      "AN EPIC BATTLE THAT LASTED TEN YEARS. A LEGENDARY STORY THAT HAS SURVIVED THOUSANDS.'An inimitable retelling of the siege of Troy . . . Fry's narrative, artfully humorous and rich in detail, breathes life and contemporary relevance into these ancient tales' OBSERVER'Stephen Fry has done it again. Well written and super storytelling' 5***** READER REVIEW ________ 'Troy. The most marvellous kingdom in all the world. The Jewel of the Aegean. Glittering Ilion, the city that rose and fell not once but twice . . .'When Helen, the beautiful Greek queen, is kidnapped by the Trojan prince Paris, the most legendary war of all time begins.Watch in awe as a thousand ships are launched against the great city of Troy.Feel the fury of the battleground as the Trojans stand resolutely against Greek might for an entire decade.And witness the epic climax - the wooden horse, delivered to the city of Troy in a masterclass of deception by the Greeks . . .In Stephen Fry's exceptional retelling of our greatest story, TROY will transport you to the depths of ancient Greece and beyond. ________ 'A fun romp through the world's greatest story. Fry's knowledge of the world - ancient and modern - bursts through' Daily Telegraph'An excellent retelling . . . told with compassion and wit' 5***** Reader Review'Hugely successful, graceful' The Times'If you want to read about TROY, this book is a must over any other' 5***** Reader Review'Fluent, crisp, nuanced, begins with a bang' The Times Literary Supplement'The characters . . . are brilliantly brought to life' 5***** Reader Review PRAISE FOR STEPHEN FRY'S GREEK SERIES: 'A romp through the lives of ancient Greek gods. Fry is at his story-telling best . . . the gods will be pleased' Times 'A head-spinning marathon of legends' Guardian 'An Olympian feat. The gods seem to be smiling on Fry - his myths are definitely a hit' Evening Standard 'An odyssey through Greek mythology. Brilliant . . . all hail Stephen Fry' Daily Mail 'A rollicking good read' Independent",
    id: 20,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41rYlCpl5HS._SX324_BO1,204,203,200_.jpg',
    price: '£8.19',
    review: '4.7 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'Troy: Our Greatest Story Retold (Stephen Fry’s Greek Myths, 3)',
  },
  {
    author: 'Will Smith',
    description:
      "_______*AVAILABLE NOW*'The best memoir I ever read'- Oprah Winfrey'If you read one book this year, make it this one'- Jay Shetty'A wild ride'- New York Times'Raw, comedic, inspirational'- GQOne of the most dynamic and globally recognized entertainment forces of our time opens up fully about his life, in a brave and inspiring book that traces his learning curve to a place where outer success, inner happiness, and human connection are aligned. Along the way, Will tells the story in full of one of the most amazing rides through the worlds of music and film that anyone has ever had.Will Smith's transformation from a fearful child in a tense West Philadelphia home to one of the biggest rap stars of his era and then one of the biggest movie stars in Hollywood history, with a string of box office successes that will likely never be broken, is an epic tale of inner transformation and outer triumph, and Will tells it astonishingly well. But it's only half the story. Will Smith thought, with good reason, that he had won at life: not only was his own success unparalleled, his whole family was at the pinnacle of the entertainment world. Only they didn't see it that way: they felt more like star performers in his circus, a seven-days-a-week job they hadn't signed up for. It turned out Will Smith's education wasn't nearly over. This memoir is the product of a profound journey of self-knowledge, a reckoning with all that your will can get you and all that it can leave behind. Written with the help of Mark Manson, author of the multi-million-copy bestseller The Subtle Art of Not Giving a F*ck, Will is the story of how one exceptional man mastered his own emotions, written in a way that can help everyone else do the same. Few of us will know the pressure of performing on the world's biggest stages for the highest of stakes, but we can all understand that the fuel that works for one stage of our journey might have to be changed if we want to make it all the way home. The combination of genuine wisdom of universal value and a life story that is preposterously entertaining, even astonishing, puts Will the book, like its author, in a category by itself.",
    id: 21,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51wpdBkpQfS._SX327_BO1,204,203,200_.jpg',
    price: '£13.59',
    review: '4.6 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'Will',
  },
  {
    author: 'Jordan B. Peterson',
    description:
      "A #1 New York Times and Sunday Times bestsellerThe long-awaited sequel to 12 RULES FOR LIFE, which has sold over 5 million copies around the worldIn 12 Rules for Life, acclaimed public thinker and clinical psychologist Jordan B. Peterson offered an antidote to the chaos in our lives: eternal truths applied to modern anxieties. His insights have helped millions of readers and resonated powerfully around the world. Now in this much-anticipated sequel, Peterson goes further, showing that part of life's meaning comes from reaching out into the domain beyond what we know, and adapting to an ever-transforming world. While an excess of chaos threatens us with uncertainty, an excess of order leads to a lack of curiosity and creative vitality. Beyond Order therefore calls on us to balance the two fundamental principles of reality - order and chaos ­- and reveals the profound meaning that can be found on the path that divides them.In times of instability and suffering, Peterson reminds us that there are sources of strength on which we can all draw: insights borrowed from psychology, philosophy, and humanity's greatest myths and stories. Drawing on the hard-won truths of ancient wisdom, as well as deeply personal lessons from his own life and clinical practice, Peterson offers twelve new principles to guide readers towards a more courageous, truthful and meaningful life.",
    id: 22,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41Bhl964Z3L._SX325_BO1,204,203,200_.jpg',
    price: '£16.38',
    review: '4.8 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'Beyond Order: 12 More Rules for Life',
  },
  {
    author: 'DK Eyewitness',
    description:
      "In love with all things Japan or looking to absorb a little Japanese wisdom into your daily life?From the philosophies of ikigai and wabi sabi to kitsch karaoke nights and futuristic robot restaurants; traditional tea ceremonies and tranquil onsen dwellings to cosplay culture and J-Pop megastars; Japan is full of intriguing contradictions.Though renowned for its ultramodern capital Tokyo - a sprawling neon-lit metropolis straight from the pages of a science fiction novel - Japan is still deeply rooted in ancient tradition. And while the country runs with clockwork precision, the cultural life of the inhabitants is transformed with the changing of the seasons, a testament to the enduring power of nature's rhythms.With each page alive with facts, history and inspiration, Be More Japan unlocks the secrets behind modern Japanese living - whether you're eating sushi in London or enjoying the cherry blossoms in San Francisco. And if you're dreaming of a future trip to Japan (or awaiting the 2021 Olympics) this book will get you closer to your destination before you've even departed.",
    id: 23,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41m+X+E3ZML._SX258_BO1,204,203,200_.jpg',
    price: '£12.19',
    review: '4.7 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'Be More Japan: The Art of Japanese Living',
  },

  {
    author: 'Ryan Holiday',
    description:
      "INSTANT NEW YORK TIMES BESTSELLER'An urgent call to arms for each and all of us.' Matthew McConaughey'Ryan Holiday is a genius.' Chris Evans'A clear and inspiring guide for how to develop this highest of human virtues.' - Robert GreeneAn inspiring anthem to the power, promise, and challenges of courage, the first in a series examining the timeless Stoic virtues from #1 New York Times bestselling author Ryan HolidayFortune favours the bold. All great leaders of history have known this, and were successful because of the risks they dared to take. But today so many of us are paralysed by fear. Drawing on ancient Stoic wisdom and examples across history and around the world, Ryan Holiday shows why courage is so important, and how to cultivate it in our own lives. Courage is not simply physical bravery but also doing the right thing and standing up for what you believe; it's creativity, generosity and perseverance. And it is the only way to live an extraordinary, fulfilled and effective life. Everything in life begins with courage. This book will equip you with the bravery to begin.",
    id: 24,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/516Upaeh1US._SX352_BO1,204,203,200_.jpg',
    price: '£10.99',
    review: '4.4 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'Courage Is Calling: Fortune Favours the Brave',
  },
  {
    author: 'Yuval Noah Harari',
    description:
      "The second volume of an epic, beautifully illustrated graphic history of humankind, based on Yuval Noah Harari's internationally bestselling phenomenonWhen nomadic Homo sapiens settled to live in one place, they started working harder and harder. But why didn't they get a better life in return?In The Pillars of Civilization, Yuval Noah Harari and his companions including Prof. Saraswati and Dr. Fiction travel the length and breadth of human history to investigate how the Agricultural Revolution changed society forever. Discover how wheat took over the world, how war, famine, disease and inequality became a part of the human condition, and why we might only have ourselves to blame.The origins of modern farming are told through Elizabethan tragedy, the changing fortunes of domesticated plants and animals are tracked in the columns of the Daily Business News, and the history of inequality is revealed in a superhero detective story.A radical, witty and colourful retelling of the story of humankind, adapted from Yuval Noah Harari's Sapiens: A Brief History of Humankind, Volume 2 can be read as a standalone or as a follow-up to Volume 1, The Birth of Humankind.Praise for Yuval Noah Harari's Sapiens: A Brief History of Humankind:'I would recommend Sapiens to anyone who's interested in the history and future of our species.' - Bill Gates'Interesting and provocative... It gives you a sense of how briefly we've been on this Earth' - Barack Obama'Jaw-dropping from the first word to the last... It may be the best book I've ever read' - Chris Evans'Contains a remarkable piece of information on almost every page and reminds us that we should be grateful to be human.' - Matt Haig'Sweeps the cobwebs out of your brain... Radiates power and clarity, making the world strange and new' - Sunday Times'Provocative and fascinating and opinionated...it makes the familiar seem unfamiliar. It altered how I view our species and our world.' - Guardian",
    id: 25,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/41+yOMinMuL._SX354_BO1,204,203,200_.jpg',
    price: '£14.49',
    review: '2.3 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'Sapiens A Graphic History, Volume 2: The Pillars of Civilization',
  },
  {
    author: 'Lin-Manuel Miranda',
    description:
      'Winner of the 2016 Pulitzer Prize for DramaNow a major motion picture, available on Disney Plus.Goodreads best non-fiction book of 2016From Tony Award-winning composer-lyricist-star Lin-Manuel Miranda comes a backstage pass to his groundbreaking, hit musical Hamilton.Lin-Manuel Miranda\'s groundbreaking musical Hamilton is as revolutionary as its subject, the poor kid from the Caribbean who fought the British, defended the Constitution, and helped to found the United States. Fusing hip-hop, pop, R&B, and the best traditions of theater, this once-in-a-generation show broadens the sound of Broadway, reveals the storytelling power of rap, and claims the origins of the United States for a diverse new generation.HAMILTON: THE REVOLUTION gives readers an unprecedented view of both revolutions, from the only two writers able to provide it. Miranda, along with Jeremy McCarter, a cultural critic and theater artist who was involved in the project from its earliest stages - "since before this was even a show," according to Miranda - traces its development from an improbable perfor­mance at the White House to its landmark opening night on Broadway six years later. In addition, Miranda has written more than 200 funny, revealing footnotes for his award-winning libretto, the full text of which is published here.Their account features photos by the renowned Frank Ockenfels and veteran Broadway photographer, Joan Marcus; exclusive looks at notebooks and emails; interviews with Questlove, Stephen Sond­heim, leading political commentators, and more than 50 people involved with the production; and multiple appearances by Presi­dent Obama himself. The book does more than tell the surprising story of how a Broadway musical became an international phenomenon: It demonstrates that America has always been renewed by the brash upstarts and brilliant outsiders, the men and women who don\'t throw away their shot.',
    id: 26,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/516YwgSk16L._SX396_BO1,204,203,200_.jpg',
    price: '£22.48',
    review: '4.9 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'Hamilton: The Revolution',
  },
  {
    author: 'Richard Dawkins',
    description:
      'The Wonder of Flight. The Science of Evolution. From both, Richard Dawkins weaves a fascinating and beautifully illustrated account of how nature and humans have learned to overcome the pull of gravity and take to the skies.',
    id: 27,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51Tq533UOLL._SX363_BO1,204,203,200_.jpg',
    price: '£12.99',
    review: '5.0 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'Flights of Fancy: Defying Gravity by Design and Evolution',
  },
  {
    author: 'Elinor Cleghorn',
    description:
      "'Seamlessly melding scholarship with passion, Unwell Women is the definition of unputdownable' Telegraph'A richly detailed, wide-ranging and enraging history... Unwell Women is not just a compelling investigation, but an essential one' Observer'A passionate and indignant history' The Times'A searing, brilliant investigation, an intricate and urgent book on how women's health has constantly been misunderstood and miscast throughout history' Kate Williams'One of the most important books of our generation' Fern Riddell'UNWELL WOMEN is a powerful and fascinating book that takes an unsparing look at how women's bodies have been misunderstood and misdiagnosed for centuries.' Lindsey Fitzharris'We are taught that medicine is the art of solving our body's mysteries. And as a science, we expect medicine to uphold the principles of evidence and impartiality. We want our doctors to listen to us and care for us as people, but we also need their assessments of our pain and fevers, aches and exhaustion to be free of any prejudice about who we are, our gender, or the colour of our skin. But medicine carries the burden of its own troubling history. The history of medicine, of illness, is a history of people, of their bodies and their lives, not just physicians, surgeons, clinicians and researchers. And medical progress has always reflected the realities of a changing world, and the meanings of being human.'In Unwell Women Elinor Cleghorn unpacks the roots of the perpetual misunderstanding, mystification and misdiagnosis of women's bodies, and traces the journey from the 'wandering womb' of ancient Greece, the rise of witch trials in Medieval Europe, through the dawn of Hysteria, to modern day understandings of autoimmune diseases, the menopause and conditions like endometriosis. Packed with character studies of women who have suffered, challenged and rewritten medical orthodoxy - and drawing on her own experience of un-diagnosed Lupus disease - this is a ground-breaking and timely exposé of the medical world and woman's place within it.",
    id: 28,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/61VmsN7RNnL._SX332_BO1,204,203,200_.jpg',
    price: '£12.44',
    review: '4.8 out of 5 stars',
    source: 'www.amazon.co.uk',
    title:
      'Unwell Women: A Journey Through Medicine And Myth in a Man-Made World',
  },

  {
    author: 'Marcus Aurelius',
    description:
      'A deluxe special edition of the ancient classic written by the Roman Emperor known as “The Philosopher”',
    id: 29,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/314zOC-wFyL._SX404_BO1,204,203,200_.jpg',
    price: '£7.89',
    review: '4.7 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'Meditations: The Philosophy Classic (Capstone Classics)',
  },
  {
    author: 'Kia Marie Hunt',
    description:
      'A great gift for birthdays and other special occasions, My Awesome Year Being 8 is bursting with ideas and inspiration for making awesome memories!',
    id: 30,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51Z5rS5xn8L._SX357_BO1,204,203,200_.jpg',
    price: '£7.99',
    review: '4.8 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'My Awesome Year being 8',
  },

  {
    author: 'Sarah Winman',
    description:
      'THE INSTANT SUNDAY TIMES BESTSELLER A BBC BETWEEN THE COVERS BOOK CLUB PICKA BBC RADIO 4 BOOK AT BEDTIME WINNER OF THE INWORDS LITERARY AWARD',
    id: 31,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51K+ai-cgAL._SX328_BO1,204,203,200_.jpg',
    price: '£12.38',
    review: '4.5 out of 5 stars',
    source: 'www.amazon.co.uk',
    title:
      'Still Life: The instant Sunday Times bestseller and BBC Between Two Covers Book Club pick',
  },
  {
    author: 'Nir Eyal',
    description:
      "'A must-read for everyone who cares about driving customer engagement' Eric Ries, author of The Lean Startup'The most high bandwidth, high octane, and valuable presentation I have ever seen on this subject' Rory Sutherland, vice chairman, Ogilvy & MatherNir Eyal reveals how successful companies create products people can't put down - and how you can too Why do some products capture our attention while others flop? What makes us engage with certain things out of sheer habit? Is there an underlying pattern to how technologies hook us? Nir Eyal answers these questions (and many more) with the Hook Model - a four-step process that, when embedded into products, subtly encourages customer behaviour. Through consecutive \"hook cycles,\" these products bring people back again and again without depending on costly advertising or aggressive messaging.Hooked is based on Eyal's years of research, consulting, and practical experience. He wrote the book he wished had been available to him as a start-up founder - not abstract theory, but a how-to guide for building better products. Hooked is written for product managers, designers, marketers, start-up founders, and anyone who seeks to understand how products influence our behaviour.Eyal provides readers with practical insights to create user habits that stick; actionable steps for building products people love; and riveting examples from the iPhone to Twitter, Pinterest and the Bible App.",
    id: 32,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51khdIL9xWL._SX319_BO1,204,203,200_.jpg',
    price: '£9.99',
    review: '4.5 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'Hooked: How to Build Habit-Forming Products',
  },

  {
    author: 'Karen Homer',
    description:
      "Little Book of Louis Vuitton is the pocket-sized and fully illustrated story of one of the world's most luxurious fashion houses.",
    id: 33,
    imgUrl:
      'https://images-eu.ssl-images-amazon.com/images/I/31sIl2nBSbS._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    price: '£9.66',
    review: '4.6 out of 5 stars',
    source: 'www.amazon.co.uk',
    title:
      'Little Book of Louis Vuitton: The Story of the Iconic Fashion House: 9 (Little Books of Fashion)',
  },

  {
    author: 'Derren Brown',
    description:
      "THE SUNDAY TIMES BESTSELLER  'Enlightening, thought-provoking and illuminating. Derren Brown asks questions about the world, and his intelligent curiosity benefits us all.' ELIZABETH DAY In A Book of Secrets, internationally bestselling author Derren Brown shows us that it is in those  moments when we are faced with adversity that we can find life's most lasting rewards.  In thirteen fascinating chapters, Derren takes us on a personal journey - to the scene of a childhood humiliation, to lonely evenings on tour, to being paralysed by shyness at a dinner party, to navigating middle age and to finding love. Sharing moments of anger, frustration, loneliness and loss, Derren reveals how it's possible to find consolation and compassion. Even in our most challenging times we can find meaning and grow.'Derren Brown is a mine of wisdom, humanity and kindness - everything we need to sustain and nourish ourselves.' ALAIN DE BOTTON***** 'This is the most I've seen Derren lay himself bare'***** 'Funny, moving and always, always meaningful'***** 'Derren's best book to date and the best book I have read this year' ***** 'Everything you need in this is a gem. I can't wait to read it a second time'",
    id: 34,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51w3XOvjFnL._SX323_BO1,204,203,200_.jpg',
    price: '£12.00',
    review: '4.5 out of 5 stars',
    source: 'www.amazon.co.uk',
    title:
      'A Book of Secrets: how to find comfort in a turbulent world - THE INSTANT SUNDAY TIMES BESTSELLER',
  },

  {
    author: 'Henry Gee',
    description:
      "'Exhilaratingly whizzes through billions of years . . . Gee is a marvellously engaging writer, juggling humour, precision, polemic and poetry to enrich his impossibly telescoped account . . . [making] clear sense out of very complex narratives' - The Times'Henry Gee makes the kaleidoscopically changing canvas of life understandable and exciting. Who will enjoy reading this book? - Everybody!' Jared Diamond, author of Guns, Germs, and SteelFor billions of years, Earth was an inhospitably alien place – covered with churning seas, slowly crafting its landscape by way of incessant volcanic eruptions, the atmosphere in a constant state of chemical flux. And yet, despite facing literally every conceivable setback that living organisms could encounter, life has been extinguished and picked itself up to evolve again. Life has learned and adapted and continued through the billions of years that followed. It has weathered fire and ice. Slimes begat sponges, who through billions of years of complex evolution and adaptation grew a backbone, braved the unknown of pitiless shores, and sought an existence beyond the sea.From that first foray to the spread of early hominids who later became Homo sapiens, life has persisted, undaunted. A (Very) Short History of Life is an enlightening story of survival, of persistence, illuminating the delicate balance within which life has always existed, and continues to exist today. It is our planet like you’ve never seen it before.Life teems through Henry Gee’s lyrical prose – colossal supercontinents drift, collide, and coalesce, fashioning the face of the planet as we know it today. Creatures are engagingly personified, from ‘gregarious’ bacteria populating the seas to duelling dinosaurs in the Triassic period to magnificent mammals with the future in their (newly evolved) grasp. Those long extinct, almost alien early life forms are resurrected in evocative detail. Life’s evolutionary steps – from the development of a digestive system to the awe of creatures taking to the skies in flight – are conveyed with an alluring, up-close intimacy.",
    id: 35,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51Z-fZULWlS._SX309_BO1,204,203,200_.jpg',
    price: '£12.18',
    review: '4.1 out of 5 stars',
    source: 'www.amazon.co.uk',
    title:
      'A (Very) Short History of Life On Earth: 4.6 Billion Years in 12 Chapters',
  },
  {
    author: 'DK',
    description:
      'Which were the most powerful African empires? Who were the pioneers of jazz? What sparked the Black Lives Matter movement? This book answers these questions and many more, exploring the rich history of the peoples of Africa and the African diaspora, and the struggles and triumphs of Black communities around the world. The Black History Book provides clear and concise explanations of important events and cultural milestones. It is packed with memorable quotations from Black figures, bold illustrations, and step-by-step diagrams that untangle complex concepts.From the earliest human migrations to modern Black communities, this thought-provoking book presents a vivid overview of Black history. It brings to life the stories of the early kingdoms of Ancient Egypt and Nubia; the powerful medieval and early modern empires; and the struggle against colonization. It also explores Black history beyond the African continent - including the Atlantic slave trade and slave resistance settlements; the Harlem Renaissance and Jazz Age; the Windrush migration; civil rights and Black feminist movements; and Black Lives Matter. Continuing the "Big Ideas" series\' trademark combination of authoritative text and bold graphics, The Black History Book uses an innovative visual approach to make the subject accessible to everyone, whether you are eager to discover more about Black history, a history student looking to broaden your knowledge, or an armchair reader.',
    id: 36,
    imgUrl:
      'https://images-na.ssl-images-amazon.com/images/I/51iOcywIVnS._SX418_BO1,204,203,200_.jpg',
    price: '£13.19',
    review: '4.7 out of 5 stars',
    source: 'www.amazon.co.uk',
    title: 'The Black History Book: Big Ideas Simply Explained',
  },
];
