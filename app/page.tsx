const Arrow = () => <span aria-hidden="true">↗</span>;

function Logo() {
  return <a className="logo" href="#top" aria-label="Deepwell Media home"><span>deepwel<span className="logo-accent">l</span></span><small>MEDIA</small></a>;
}

export default function Home() {
  return <main id="top">
    <section className="hero">
      <nav className="nav wrap"><Logo/><div className="navlinks"><a href="#model">What We Do</a><a href="#method">Approach</a><a href="#fit">Who It’s For</a><a href="#why">Why Deepwell</a></div><a className="button button-small" href="mailto:hello@deepwellmedia.com">Let’s Talk <Arrow/></a></nav>
      <div className="hero-grid wrap">
        <div className="hero-copy"><p className="eyebrow">REAL PEOPLE. REAL PERSPECTIVE. REAL IMPACT.</p><h1>Turn expertise<br/>into <em>influence.</em></h1><p className="lede">Your people know things your market cares about. We put them in conversation with the people your business needs to know, then turn those conversations into original media that compounds.</p><div className="actions"><a className="button" href="mailto:hello@deepwellmedia.com">Let’s Talk <Arrow/></a><a className="text-link" href="#method">See how it works ↓</a></div></div>
        <div className="depth-card"><span>DEEPWELL / 01</span><p>Expertise is your company’s deepest source of original content.</p><div className="depth-lines"><i/><i/><i/><i/></div></div>
      </div>
      <div className="hero-bottom wrap"><span>STRATEGIC CONVERSATIONS</span><span>ORIGINAL MEDIA</span><span>REAL RELATIONSHIPS</span><span>LASTING INFLUENCE</span></div>
    </section>

    <section className="manifesto wrap" id="why"><p className="eyebrow green">THE OPPORTUNITY</p><h2>Your company’s best content<br/>hasn’t been created yet.</h2><div className="manifesto-copy"><p>It’s inside the heads of the people who have spent years solving hard problems, serving customers and learning your industry firsthand.</p><p>AI can generate more content. It can’t generate that experience. Deepwell brings it to the surface.</p></div></section>

    <section className="model" id="model"><div className="wrap"><div className="section-head"><div><p className="eyebrow">MORE THAN CONTENT</p><h2>A media program built<br/>around what you know.</h2></div><p>We handle the strategy, people and production required to turn your expertise into a media property worth paying attention to.</p></div><div className="cards">
      <article><b>01</b><h3>Strategic Conversations</h3><p>We identify customers, prospects, partners and industry leaders worth knowing, then create a reason to talk.</p></article>
      <article><b>02</b><h3>Professional Production</h3><p>Your expert shows up for the conversation. We handle preparation, recording, editing, packaging and publishing.</p></article>
      <article><b>03</b><h3>Content That Compounds</h3><p>One conversation becomes long-form video, audio, articles, social content, email and a growing library of original expertise.</p></article>
      <article><b>04</b><h3>Business Outcomes</h3><p>The goal isn’t vanity metrics. It’s stronger relationships, more authority, new opportunities and influence in the market.</p></article>
    </div></div></section>

    <section className="method wrap" id="method"><div className="method-intro"><p className="eyebrow green">THE DEEPWELL METHOD</p><h2>Go deeper.<br/><span>Then go further.</span></h2><p>We turn a small amount of your team’s time into an ongoing media engine.</p></div><div className="steps">
      <div><b>01</b><h3>Discover</h3><p>Find the knowledge and perspectives inside your organization worth surfacing.</p></div>
      <div><b>02</b><h3>Connect</h3><p>Identify the people and companies worth bringing into the conversation.</p></div>
      <div><b>03</b><h3>Capture</h3><p>Create authentic conversations around subjects your market actually cares about.</p></div>
      <div><b>04</b><h3>Refine</h3><p>Extract the strongest ideas, stories and perspectives from every conversation.</p></div>
      <div><b>05</b><h3>Amplify</h3><p>Turn those ideas into media across the channels where your audience already spends time.</p></div>
      <div><b>06</b><h3>Compound</h3><p>Build a growing asset of expertise, relationships and authority your competitors can’t copy.</p></div>
    </div></section>

    <section className="conversation"><div className="wrap conversation-grid"><div><p className="eyebrow">ONE CONVERSATION</p><h2>An entire<br/>content engine.</h2><p className="conversation-copy">A single 35–45 minute conversation can fuel weeks of meaningful media without turning your executives into full-time content creators.</p></div><div className="output-list"><span>01</span><p>Long-form video</p><span>02</span><p>Podcast episode</p><span>03</span><p>Short-form video</p><span>04</span><p>Executive social content</p><span>05</span><p>Article & newsletter</p><span>06</span><p>Sales & SEO source material</p></div></div></section>

    <section className="fit wrap" id="fit"><div className="section-head dark"><div><p className="eyebrow green">WHO IT’S FOR</p><h2>Built for companies<br/>with something to say.</h2></div><p>Deepwell works best when your expertise is valuable, your sales are relationship-driven and your market is small enough that the right conversation matters.</p></div><div className="fit-grid"><div><span>01</span><h3>B2B Companies</h3><p>Complex products, high-value customers and a market that rewards credibility.</p></div><div><span>02</span><h3>Industry Experts</h3><p>Leaders with years of firsthand knowledge but little time to turn it into content.</p></div><div><span>03</span><h3>Relationship-Led Sales</h3><p>Businesses where knowing the right 100 people matters more than reaching 100,000 strangers.</p></div></div></section>

    <section className="quote"><div className="wrap"><p className="eyebrow">A DIFFERENT KIND OF MEDIA COMPANY</p><blockquote>“The world doesn’t need more generated content. It needs more people worth listening to.”</blockquote><p className="quote-note">Deepwell makes those people easier to hear.</p></div></section>

    <section className="cta"><div className="wrap cta-inner"><div><p className="eyebrow">READY TO GO DEEPER?</p><h2>Put your expertise<br/>to work.</h2></div><div><p>Bring the expertise. We’ll handle everything else.</p><a className="button light" href="mailto:hello@deepwellmedia.com">Start a conversation <Arrow/></a></div></div></section>

    <footer className="footer wrap"><Logo/><p>Turn expertise into influence.</p><p>© {new Date().getFullYear()} Deepwell Media</p></footer>
  </main>;
}
