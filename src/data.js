// Timeline imports
import pocketWatch from './components/svgs/pocketWatchSVG';
import brickPhone from './assets/5g-workforce/brick_phone.svg';
import computer from './assets/5g-workforce/computer.svg';
import dummy from './assets/5g-workforce/dummy.svg';
import boombox from './components/svgs/BoomboxSVG';

// Timeline 2 imports
import books from './assets/retain-talent/books.svg';
import clock from './components/svgs/ClockSVG';
import handsShaking from './assets/retain-talent/hands_shaking.svg';
import parasol from './assets/retain-talent/parasol.svg';
import plant from './assets/retain-talent/plant.svg';

// Flipboard assets 
import ai from './assets/flip/ai.svg';
import print from './assets/flip/3d_printing.svg';
import chatbots from './assets/flip/chatbots.svg';
import dataMining from './assets/flip/data_mining.svg';
import iot from './assets/flip/iot.svg';
import revolution from './assets/flip/revolution.svg';

// case studies slider
import brexit from './assets/case-studies/brexit.svg';
import digital from './assets/case-studies/digital.svg';
import globalisation from './assets/case-studies/globalisation.svg';
import productivity from './assets/case-studies/productivity.svg';
import sustainability from './assets/case-studies/sustainability.svg';
import talent from './assets/case-studies/talent.svg';

// how to future slider assets
import teethImg from './assets/futue-proof-slider/ortodontics.svg';
import devicesImg from './assets/futue-proof-slider/devices.svg';
import competitionImg from './assets/futue-proof-slider/competition.svg';


export const FiveGTimeline = [
  {
    id: 0,
    img: pocketWatch,
    title: 'Traditionalists',
    date: 'born before 1945',
    copy:
      'In part owing to changes in pension rules, older people are working later in life, with the average exit age from the workforce now higher than 65 for the first time, according to government statistics. Official Office for National Statistics (ONS) figures for 2018 show that 10.2pc of people over 65 are in work.',
  },
  {
    id: 0,
    img: dummy,
    title: 'Baby boomers',
    date: '1946-64',
    copy:
      'Older generations have embraced freelancing as a way to make extra income. According to ONS figures, people aged 65 and over accounted for 22pc of all part-time self-employment in 2015, up from 14pc in 2001. According to figures from 2015, half of those aged over 70 in employment were self-employed.',
  },
  {
    id: 0,
    img: boombox,
    title: 'Generation X',
    date: '1965-80',
    copy:
      'Older people are unafraid to use technology such as apps to find jobs, and have also embraced flexible working. According to research by Workplace Insights, Generation X (along with baby boomers) make up almost half of freelancers, with 48pc in the 40-49 or 50-59 age brackets.',
  },
  {
    id: 0,
    img: computer,
    title: 'Millennials',
    date: '1981-95',
    copy:
      'Research by Deloitte has shown that millennials have very different attitudes to work, with 50pc considering flexibility “very important” in choosing a job, and 21pc having moved job within the past year. Deloitte research found that 43pc of millennial workers planned to leave their jobs within two years.',
  },
  {
    id: 0,
    img: brickPhone,
    title: 'Generation Z',
    date: '1996-2012',
    copy:
      'Generation Z are digital natives, and highly flexible, with 83pc of graduates in the UK willing to relocate for work, according to Accenture research. They are comfortable with technology, with 68pc welcoming artificial intelligence (AI) and other technology at work. Generation Z rank their relationship with their work team as one of their top concerns.',
  },
];

export const shopSlider = [
  {
    title: 'Train employees',
    copy: 'Training is key to helping employees adapt to the new digital economy, says Nick Matthews, vice president EMEA at HR firm Culture Amp. “One way to succeed is to invest in your people,” he says. “Put in place a clear learning and development plan to help employees retrain for the skills they need in the new digital economy and create a culture of continuous learning.”',
  },
  {
    title: 'Work more flexibly',
    copy: 'Today’s workers increasingly expect to work flexibly, and from home – and embracing this can save businesses money, says Jonathan Corrie, chief executive at Precursive.<br/><br/> Mr Corrie says: “Technology can help to create a more agile workforce whereby people and their skills are fluidly matched to the work they are most qualified for, creating a more engaged workforce as well as huge time and cost savings for business.”',
  },
  {
    title: 'Focus on employees',
    copy: 'Businesses of the future will automate dreary tasks and focus on employee satisfaction, says Charles Towers-Clark, group chief executive of Pod Group, and author of The Weird CEO: How to lead in a world dominated by AI. “These companies will attract employees who are able to take initiative, responsibility and will be able to work with in close conjunction with AI,” he says.',
  },
  {
    title: 'Innovate',
    copy: 'Businesses of the future need to be able to adopt new ideas rapidly, and use these to disrupt their sectors, says IDEA’s Dr McCabe.<br/><br/> Dr McCabe says: “The most important thing is that there is a spirit of considering ways to deliver value and speed of service. As the most successful businesses of recent years have demonstrated, being unique and able to reimagine what customers need is crucial.”',
  },
];

export const forefront = [
  {
    logo: teethImg,
    title: 'Taking orthodontics online',
    copy: 'A huge number of adults have crooked teeth – up to 77pc of people in London, according to Aalok Y Shukla, of Straight Teeth Direct – but only 1pc get treatment, as it is often extremely expensive.<br />In 2009, he set up a business focused on making the process cheaper, using at-home consultations and 3D printing. He says: “In all other industries, technology makes things more affordable, so we wanted to do that.<br />“I’ve always been tracking cutting-edge technologies and I saw the costs of 3D printing and computer-aided design [CAD] systems were becoming more accessible. So we started researching and seeing if there could be a way to internally manufacture the most desirable teeth-straightening solution – invisible aligners using 3D printing for a price that would mean we could offer it for a third of the price of in-clinic options.<br />“We realised we could, so we sold our clinic and Straight Teeth Direct was born.”',
  },
  {
    logo: competitionImg,
    title: 'Taking advantage of the competition',
    copy:
      'Charlie Thuiller invented Oppo ice cream with his brother Harry, with a goal of making ice cream with fewer calories than an apple. At the time, the idea of “healthy” ice cream was seen as “out there”.<br />But within five years, their ice cream (made from natural ingredients, such as coconut milk and stevia leaf, a natural sweetener) faced steep competition. Mr Thuiller says his competitors actually energised sales.<br />“When we first launched Oppo we were the first healthy ice cream globally. Five years later there are 35 companies. This space has become massively congested.<br />“It\'s very important to welcome competitors, using their might to support their company. Within six months of Unilever coming into the space, they educated consumers about healthy ice cream, and our sales doubled. We always focus on innovation.”',
  },
  {
    logo: devicesImg,
    title: 'Helping all businesses embrace the tech revolution',
    copy: 'Digital Catapult, for example, helps smaller companies to access advanced digital technologies such as augmented reality, 5G, AI and the internet of things (IoT), says chief executive Jeremy Silver. <br /> Mr Silver says that his government-backed organisation brings together start-up businesses, large corporations and academic research. The resulting collaboration helps businesses to “develop technologies which solve problems, increase productivity, boost the UK economy and open up new markets faster”.<br />He adds: “Digital Catapult provides physical and digital facilities for experimentation, testing and development that would otherwise not be accessible for smaller companies.<br />“In January, we launched the Future Networks Lab in partnership with Siemens, BT and a number of other big industry players. It’s one of the first facilities in Europe specifically designed to enable UK start-ups, corporations and network platform providers to collaborate on solutions using 5G and IoT technologies.”<br />Such facilities can supercharge the process by which businesses reach out to support networks, suppliers and other businesses in order to collaborate and grow.',
  },
];

export const retainTalent = [
  {
    img: clock,
    title: 'Offer flexible working arrangements',
    copy:
      'Up to 91pc of HR professionals say flexible working improves relationships with employees',
  },
  {
    img: handsShaking,
    title: 'Be inclusive',
    copy:
      'Accenture research finds that working cultures where employees are treated as equals are six times more productive',
  },
  {
    img: books,
    title: 'Offer the right training',
    copy:
      'Two-thirds of employees want to train to learn new digital skills, according to Accenture research',
  },
  {
    img: parasol,
    title: 'Allowing workers to “buy” holidays',
    copy:
      'Employers can allow employees to “buy” extra annual leave to offer more flexibility on holidays',
  },
  {
    img: plant,
    title: 'Have a business with a purpose',
    copy:
      'For younger workers, the purpose of a business is increasingly important, with 86pc of millennials saying they would leave an employer whose values no longer matched theirs',
  },
];

export const verticalSlider = [
  {
    copy:
      'In 2018, there were 2.2 million more small businesses than in 2000, a rise of 63pc, according to government statistics',
    coordTop: '10',
    coordRight: '60',
  },
  {
    copy:
      'There are 55,400 mid-sized businesses in the UK, accounting for up to 2pc of the economy',
    coordTop: '20',
    coordRight: '15',
  },
  {
    copy:
      'Mid-sized businesses are firms with annual turnover between £5m and £250m',
    coordTop: '30',
    coordRight: '42',
  },
  {
    copy:
      'Some mid-sized businesses expect sales growth of up to 10pc per year',
    coordTop: '40',
    coordRight: '20',
  },
  {
    copy:
      'Around three-quarters (73pc) of mid-sized businesses export outside the UK, with only a fifth not trading internationally',
    coordTop: '50',
    coordRight: '65',
  },
  {
    copy:
      'Businesses of this size are concerned about costs, with 38pc citing their customers’ price expectations as a challenge, and 37pc citing their own costs as a challenge',
    coordTop: '60',
    coordRight: '20',
  },
  {
    copy:
      'Sustainability is an increasing concern for such businesses, with 65pc having committed to ethical behaviour through corporate social responsibility programmes',
    coordTop: '70',
    coordRight: '70',
  },
  {
    copy:
      'Finding employees with the right skills remains a problem, with 48pc of businesses in the professional services struggling to find talent',
    coordTop: '80',
    coordRight: '10',
  },
  {
    copy:
      'Three-quarters of all British businesses are in the service industries, according to government statistics',
    coordTop: '90',
    coordRight: '70',
  },
  {
    copy:
      'Businesses in retail account for 19pc of employment in Britain, according to government statistics',
    coordTop: '100',
    coordRight: '50',
  },
  {
    copy:
      'Manufacturing firms account for just 5pc of businesses, but 10pc of employment, according to government statistics',
    coordTop: '85',
    coordRight: '35',
  },
];

export const flipBoardData = [
  {
    title: '46pc of UK exports, EU, £274bn',
    copy: 'Cars and other road vehicles make up 43pc of UK exports to the EU. The EU’s share of UK trade has declined – in 2002, the EU accounted for 55pc of UK exports. Ten of the UK’s top 25 export markets are in the EU.[DC(&M2]',
  },
  {
    title: '19pc of UK exports, US, £118bn',
    copy: 'The US accounts for 28pc of UK exports of business services including legal, accounting and professional services. It also imports a lot of British-made cars.',
  },
  {
    title: '4pc of UK exports, China, £23.1bn',
    copy: 'Britain has a small trade surplus on trade in services (such as business services) to China, but imports many Chinese-made goods.',
  },
  {
    title: '3.1pc of UK exports, Switzerland, £19.6bn',
    copy: 'Switzerland has been the highest growth market for UK exports over the past decade after China, with business services in particular seeing progress. Switzerland is the UK’s third-largest non-EU market.',
  },
  {
    title: '2.3pc of UK exports, Japan, £14.3bn',
    copy: 'British high street stores such as Lush, Ted Baker, Burberry and Fortnum & Mason have arrived in Japan – but it’s not just limited to the high street, with specialist companies such as Brewdog making  inroads too[DC(&M3] .',
  },
  {
    title: '1.3pc of UK exports in 2018, India, £8bn',
    copy: 'Exports to India have risen from 0.9pc in 1999, with trade in goods and business services growing rapidly in recent years.',
  },
];

export const basicSlider = [
  {
    img: brexit, title: 'Brexit', copy: 'Brexit has overshadowed Britain’s national debate for more than three years, and it’s no surprise that even in 2018 most mid-sized businesses listed it as the single biggest challenge they face.<br/><br/> NatWest research found that 85pc of exporting mid-sized businesses sell into EU markets. In response, 14pc of such businesses have established new offices in EU countries. Rick Smith, managing director of company rescue and insolvency specialist Forbes Burton, says: “The main challenge at the moment is uncertainty. Uncertainty means that plans, strategies and tactics are very hard to form, and if they are formed there have to be multiple variations to be able to respond to any outcomes.”',
  },
  {
    img: digital, title: 'Rise of digital', copy: 'Businesses in the technology sector are among the most optimistic about future growth in their sector, recent NatWest research has found.<br/><br/> The research found that more than two-thirds of businesses in the technology, media and telecoms sector (68pc) anticipated productivity growth. Rob Orr, executive director, Virgin Media Business, says: “Digital transformation doesn’t stop – you will never reach a point of being ‘digitally transformed’. It’s a continuous journey of improvement, one small change at a time.”',
  },
  {
    img: globalisation, title: 'Globalisation', copy: 'The globalisation of trade offers both opportunities and challenges for Britain’s mid-sized businesses, says Masha Cilliers, specialist payments partner at iBe, the financial services advisory firm.<br/><br/> Ms Cilliers says: “On the one hand they are being pressured by international players in their own domestic markets – losing loyal customers and competition forcing down prices. On the other hand, the barriers to entering global markets are lowering; online sales have opened up the global market in a way never experienced before.”',
  },
  {
    img: sustainability, title: 'Sustainability', copy: 'Sustainability is an increasing focus for Britain’s mid-sized businesses, with many now investing in technology and training to meet the demands of an increasingly climate-conscious world. NatWest research found that 58pc of mid-sized businesses regard sustainability as extremely or very influential on their business decision making. When asked which key sustainability initiatives have you engaged with in the last three years, 62pc said they had invested in new tech for energy efficiency and 66pc had conducted an energy audit.<br/><br/> “Businesses now have to deliver the so-called ‘triple bottom line’: profit, people and planet,” says Jon Tipple, global chief strategy officer at FutureBrand. “Business leaders need to ensure the accountability of their businesses so they deliver the good that citizens, societies and their owners really need, versus just satisfying the whim of the chief executive.”<br/><br/> But the climate emergency poses as much of an opportunity as a challenge for mid-sized businesses, Professor Roper says. “We are obsessed with Brexit but much of the rest of the world is focused on the ‘climate emergency’,” he says. “Massive opportunities exist for companies with low-carbon, green technologies and products.”',
  },
  {
    img: talent, title: 'Talent', copy: 'Attracting and retaining talent is a key challenge for Britain’s mid-sized businesses, the NatWest report found. Many mid-sized business rated recruitment and staff retention as one of the biggest challenges they faced, with 41pc having problems attracting employees with the right skills, and 38pc having difficulty retaining key employees.<br/><br/> Harry Hortyn, co-founder of Oxford Summer Courses, says communication is key: “Providing clarity, both financially and in defining role responsibilities, is essential for attracting and retaining talent.”',
  },
  {
    img: productivity, title: 'Productivity', copy: 'Productivity remains a key concern for Britain’s mid-sized businesses, although many are optimistic about their current situation. In NatWest’s survey, 55pc of mid-sized businesses reported they had experienced productivity growth in the past 12 months –  while 41pc said productivity levels are a strategic concern.<br/><br/> Paul Smith, executive vice president and general manager UK at Salesforce, says: “Automation will be key to increasing national productivity; businesses must work to ensure that employees have the skills they will need for jobs in the digital economy.”',
  },
];
