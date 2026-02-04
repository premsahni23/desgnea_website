export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Flexible AI workflow automation for technical teams</h1>
            <p>
              Build with the premium AI content management of Figma AI design tools
              that help you create, collaborate, and ship faster than ever before.
              Design systems to production-ready code in minutes.
            </p>
            <div className="cta-buttons">
              <a href="#" className="btn btn-primary">Get Started for free</a>
              <a href="#" className="btn btn-secondary">See Examples</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Features that work for your future.</h2>
          <p style={{textAlign: 'center', color: '#a1a1aa', marginBottom: '3rem'}}>
            Check out our amazing features. Build advanced the power of Figma for success.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Workflow Marketing</h3>
              <p>
                Automate your marketing workflows with AI-powered tools that help you create, 
                manage, and optimize campaigns across multiple channels.
              </p>
              <a href="#" style={{color: '#a855f7', textDecoration: 'none', fontSize: '0.9rem'}}>View details</a>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Automation Usage & Limits</h3>
              <p>
                Set intelligent limits and monitor usage across your automation workflows. 
                Get insights into performance and optimize resource allocation.
              </p>
              <a href="#" style={{color: '#a855f7', textDecoration: 'none', fontSize: '0.9rem'}}>View details</a>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Visual Workflow Builder</h3>
              <p>
                Create complex automation workflows with our intuitive drag-and-drop interface. 
                No coding required - just connect the dots.
              </p>
              <a href="#" style={{color: '#a855f7', textDecoration: 'none', fontSize: '0.9rem'}}>View details</a>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Automation Section */}
      <section className="workflow-section">
        <div className="container">
          <h2>The next generation of workflow automation.</h2>
          <p>
            Automate repetitive tasks and focus on what matters most. Our AI-powered 
            workflow automation helps teams work smarter, not harder.
          </p>
          
          <div className="workflow-visual">
            <p style={{color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '2rem'}}>
              Trusted by teams at 300+ of the world's leading organizations
            </p>
            
            {/* Company logos placeholder */}
            <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', opacity: 0.6}}>
              <span>DELL</span>
              <span>zendesk</span>
              <span>squarespace</span>
              <span>ServiceNow</span>
              <span>Lattice</span>
              <span>TED</span>
            </div>
          </div>
          
          <a href="#" className="btn btn-primary" style={{marginTop: '2rem', display: 'inline-block'}}>
            Learn more
          </a>
        </div>
      </section>
    </main>
  )
}