import React, { useState, useEffect } from 'react';
// Styles
import './App.scss';
// Data & external methods
import { FiveGTimeline, retainTalent, shopSlider, forefront, basicSlider } from './data';
import analytics from './helpers/analytics';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Pagebody from './components/Pagebody';
import Dropcap from './components/Dropcap';
import Pullquote from './components/Pullquote';
import CTA from './components/CTA';
import Button from './components/Button';
import Timeline from './components/Timeline';
import Slider from './components/Slider';
import Related from './components/Related';
import Credits from './components/Credits';
import Footer from './components/Footer';
import Socials from './components/Socials';
import AnimationTrigger from './components/AnimationTrigger';
import Bubbles from './components/Bubbles';
import Flipboard from './components/Flipboard';
import VerticalSlider from './components/VerticalSlider';
import BasicSlider from './components/BasicSlider';
import PullQuoteSpecial from './components/Pullquote';

// Assets
import Broughttyb from './components/Broughttyb';
import benefits from './assets/titles/benefits.svg';
import exporting from './assets/titles/exporting.svg';
import clock from './assets/titles/clock.svg';
import books from './assets/titles/books.svg';
import robot from './assets/titles/robot.svg';


function App() {

  useEffect(() => {
    analytics.send('App Loaded');
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <PullQuoteSpecial>
        <Pullquote specialQuote>
          <h3>
            All this uncertainty means that companies are holding onto cash, not investing and extending their borrowing facilities.
          </h3>
          <p>
            Professor Stephen Roper, director of the Enterprise Research Centre at Warwick Business School
          </p>
        </Pullquote>
      </PullQuoteSpecial>
      <Pagebody>
        <AnimationTrigger>
          <p>
            <Dropcap>M</Dropcap>
            id-sized businesses are the lifeblood of Britain’s economy, but the ongoing turmoil over Brexit is overshadowing their efforts, says Professor Stephen Roper, director of the Enterprise Research Centre at Warwick Business School.
          </p>
          <p>
            However he believes firms also have fresh opportunities in the form of low-carbon technologies, new digital ways of working and new export markets. “UK growth is slowing, consumer confidence is declining and Brexit is creating uncertainty about imports, exports and the availability of EU workers,”
          </p>
          <p>
            Research conducted by NatWest, in partnership with Warwick Business School, in 2018 found that mid-sized businesses (with a turnover between £5m and £250m) were optimistic, based on interviews with 861 business decision makers. But Professor Roper says that Brexit is now hitting these companies disproportionately hard: “Around 80pc of mid-size manufacturing and services businesses export to the EU compared to around 20pc of smaller firms. So the impact of Brexit is hitting mid-size firms hardest. Firms are preparing but significant risks remain around cross-channel logistics and potential delays for both imports and exports.”
          </p>
          <p>
            The future may look uncertain, but it’s not all doom and gloom. “The lower value of sterling has created some new export opportunities for UK exporters, however – an unanticipated Brexit bonus,” says Professor Roper.
          </p>
          <p>
            There are 55,400 such companies in Britain, accounting for 2pc of Britain’s economy, according to the Office for National Statistics, and many are already making the most of these opportunities. Read on for more insights from mid-sized businesses and other experts, to assess the challenges and opportunities these companies face.
          </p>
        </AnimationTrigger>
      </Pagebody>
      <BasicSlider title="The 6 key challenges affecting business today" dataProp={basicSlider} columns={false} />
      <Pagebody title="How do mid-sized businesses feel about the future?" img={clock}>
        <AnimationTrigger>
          <Pullquote notopborder nopaddingtop>
            <h3>
              Top of their game
            </h3>
            <h4>
              Prevailing optimism
            </h4>
            <p>
              Britain’s mid-sized businesses remain optimistic about growth, despite a challenging business environment
            </p>
            <h4>
              Size matters
            </h4>
            <p>
              Larger firms are the most optimistic about their prospects for sales growth
            </p>
            <h4>
              Plaudits for exporters
            </h4>
            <p>
              Most mid-sized businesses in Britain already export, and those exporting beyond Europe are optimistic about increased sales
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder nopaddingtop>
            <h3>
              Challenges ahead
            </h3>
            <h4>
              Battle for Brexit
            </h4>
            <p>
              Most mid-sized businesses cite Brexit as the single biggest challenge they face today
            </p>
            <h4>
              Talent
            </h4>
            <p>
              Finding the right talent is a key challenge for British mid-sized business, particularly in the professional services sector
            </p>
            <h4>
              Sustainability
            </h4>
            <p>
              British firms are embracing sustainability, with many having conducted energy audits and trained staff
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder nopaddingtop>
            <h3>
              Sentiment across sectors
            </h3>
            <h4>
              Manufacturing and construction
            </h4>
            <p>
              Businesses in manufacturing and construction are the least optimistic in terms of future growth for the sector as a whole, but more confident with their own future growth
            </p>
            <h4>
              Technology
            </h4>
            <p>
              …but firms in the technology sector are among the most upbeat, and the most likely to be aiming to enter new markets, or expand via merger or acquisition
            </p>
            <h4>
              Retail
            </h4>
            <p>
              With a challenging retail landscape, Britain’s retail businesses remain positive about growth in their own business than in the sector as a whole.
            </p>
          </Pullquote>
        </AnimationTrigger>
      </Pagebody>
      <VerticalSlider />
      <Pagebody title="Where do current business opportunities lie?" img={robot}>
        <AnimationTrigger>
          <p>
            Technology can answer many of the concerns businesses have, Professor Roper believes. “Going digital is going to be key to future business success,” he says. “This applies both on the shop floor as well as in the back office. Investment in new kit will require new skills, however. Investing in workforce and management skills will also be important.” However, opportunities also abound elsewhere, as shifts in international relations impact on businesses globally and the consumer appetite for sustainability filters down to businesses.
        </p>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder>
            <h3>
              Artificial intelligence
            </h3>
            <p>
              AI could supercharge the world economy, analysts believe, with machine learning streamlining the way the world does business. A report PwC predicted that widespread use of AI could lead to global GDP being 14pc higher by the year 2030.
            </p>
            <p>
              Dan Pitchford, co-founder of AI Business, says: “The reward in implementing AI within businesses and processes is providing greater efficiencies, cost saving in the long run and is opening businesses’ eyes to new and emerging markets.”
            </p>

          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder>
            <h3>
              Circular economy
            </h3>
            <p>
              Increased reuse and recycling of products will affect every industry as consumers increasingly demand to buy from sustainable businesses. Research by Unilever in 2017 found that 33pc of consumers now demand to buy from companies they believe are “doing good”.
            </p>
            <p>
              Erica Wolfe-Murray, business expert and author of Simple Tips, Smart Ideas, says: “New processes will be developed, new materials will be required, new power sources will evolve – all tying into the circular economy. And the pressure for this will come from peers as well as customers.”
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder>
            <h3>
              Fourth industrial revolution
            </h3>
            <p>
              The fourth industrial revolution refers to artificially intelligent factories changing the way we manufacture goods, making it quicker and more efficient to create and deliver everything from shoes to snacks.
            </p>
            <p>
              The fourth industrial revolution could add $3.7 trillion (£3 trillion) in value to the world economy by 2025, according to a McKinsey report. Mr Pitchford says: “AI should be integrated into the whole workflow of a factory so the system can provide updates on specific tasks that employees need to complete. It’s a small change that can increase productivity and generate a cost reduction of up to 70pc.”
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder>
            <h3>
              New export markets
            </h3>
            <p>
              Emerging markets including India and Nigeria can offer new customers to British businesses, as could new trade deals forged in the wake of Brexit. Ironically, the uncertainty over Brexit has forced British businesses to think about the way they work, which could prove useful, says Keith Hatton, chief executive at Currencies Direct.
            </p>
            <p>
              Mr Hatton says: “The fallout from Brexit has certainly helped to focus business to trade in unprecedented scenarios. This has developed improved processes, supply chain management, internal controls and risk management, and ultimately created more agile and adaptable businesses equipped with skillsets to help them thrive in post-Brexit Britain.”
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder>
            <h3>
              Automation
            </h3>
            <p>
              Automation is often portrayed as “robots taking jobs”, but British people remain confident that technology will create, rather than destroy jobs. Research by Gallup found that 80pc of UK workers thought it was unlikely their job would be automated within five years.
            </p>
            <p>
              Dr Steve McCabe, associate professor, Institute for Design and Economic Acceleration (IDEA) at Birmingham City University, says: “If we've seen an increase in the use of digitisation, we have seen nothing compared to what comes next. Every organisation, regardless of size, will need to embrace digital measures to ensure they are at least as good as the rest.”
            </p>

          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder>
            <h3>
              Social benefits
            </h3>
            <p>
              Businesses will shift away from decisions based on shareholder value, and will increasingly address the needs of employees and communities, according to Ms Wolfe-Murray. Research by NatWest found that 65pc of businesses had committed to corporate social responsibility programmes.
            </p>
            <p>
              Ms Wolfe-Murray says: “With 181 of the influential US Business Roundtable companies signing up to push for an economy that serves all Americans, there will be a groundswell in running companies for the benefit of all stakeholders, including employees, customers, suppliers, communities and shareholders.”
            </p>
          </Pullquote>
        </AnimationTrigger>
      </Pagebody>
      <Slider />
      <Pagebody
        title="What does the future hold for different sectors?"
        img={books}
      >
        <AnimationTrigger>
          <Pullquote notopborder nopaddingtop>
            <h3>
              Agriculture, energy and sustainability
            </h3>
            <p>
              Businesses in this sector remain optimistic about sales growth, NatWest research found, with 61pc anticipating productivity increases in 2018.
            </p>
            <p>
              Costs remain a key concern for such businesses, with 56pc citing price expectations from customers as a challenge, and 55pc finding costs and overheads a challenge.
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder nopaddingtop>
            <h3>
              Technology, media and telecoms
            </h3>
            <p>
              Firms in this hi-tech sector are the most optimistic about future growth, with 68pc anticipating productivity growth in the next 12 months.
            </p>
            <p>
              Securing orders and winning new business are a key concern for such firms, along with the challenge of attracting the right talent. In NatWest's research, 48pc cited the challenge of winning business, and 46pc said it was challenging to find employees with the right skills.
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder nopaddingtop>
            <h3>
              Manufacturing
            </h3>
            <p>
              Manufacturing businesses are more likely to be exporters, with 23pc exporting to the EU and 60pc exporting globally, and relatively few firms (17pc) focused on the domestic market.
            </p>
            <p>
              Attracting employees with the right skills remains the key challenge for firms in this sector (41c), along with lower price expectations from customers (40pc).
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder nopaddingtop>
            <h3>
              Retail and wholesale
            </h3>
            <p>
              Companies in the retail sector face competitive markets, with the most common challenge cited by such firms being “securing orders and winning business”.
            </p>
            <p>
              But retailers are looking beyond Britain, with 53pc exporting globally and 26pc exporting to the EU.
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder nopaddingtop>
            <h3>
              Professional services
            </h3>
            <p>
              Companies in the professional services sector face challenges in recruitment, with three of the top five challenges cited by managers relating to hiring, attracting and retaining talent.
            </p>
            <p>
              Britain's professional services firms are in high demand around the globe, with 61pc of professional services firms exporting globally.
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder nopaddingtop>
            <h3>
              Construction
            </h3>
            <p>
              Britain’s construction industry is domestically focused, with 45pc of companies selling only in the UK market.
            </p>
            <p>
              These companies are focused on keeping down costs and overheads, with 45pc citing that as the key challenge they face – closely followed by attracting skilled employees at 44pc.
            </p>
          </Pullquote>
        </AnimationTrigger>
        <AnimationTrigger>
          <Pullquote notopborder nopaddingtop>
            <h3>
              Other services
            </h3>
            <p>
              Like construction, this sector (which includes personal services, such as hairdressing, pet care or laundry) is domestically focused, with 40pc of firms selling only in the UK.
            </p>
            <p>
              Costs remain the key concern for such firms with 35pc of companies citing costs and overheads as their key concern.
            </p>
          </Pullquote>
        </AnimationTrigger>
      </Pagebody>
      <CTA>
        <p>To find out more about getting your business ready for the digital future, visit the NatWest Business Hub</p>
        <Button
          link="https://ad.doubleclick.net/ddm/trackclk/N8083.124621MSNUK/B22370404.240723500;dc_trk_aid=443465896;dc_trk_cid=105350124;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua="
        />
      </CTA>
      <Socials />
      <Broughttyb />
      <Credits />
      <Related />
      <Footer />
    </>
  );
}

export default App;
