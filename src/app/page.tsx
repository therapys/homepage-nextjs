export default function Home() {
  return (
    <div>
      <main className="block isolate">
        <h1>Karl M. Kiilaspää</h1>

        <h2>I write code.</h2>

        <p className="block mr-2">
          My primary focus lies in developing scalable software solutions for emerging markets. 
          Currently leading development of{" "}
          <a
            className="text-blue-500 cursor-pointer no-underline hover:underline"
            href="https://bilt.me/"
          >
            bilt.me
          </a>
          , a platform addressing modern agentic workflow challenges.
        </p>

        <p>
          Previous work includes distributed server architecture and infrastructure management 
          for{" "}
          <a
            className="text-blue-500 cursor-pointer no-underline hover:underline"
            href="https://minecraft.net/"
            target="_blank"
          >
            Minecraft
          </a>
          -based platforms serving concurrent user loads. Select implementations are documented under{" "}
          <a
            className="text-blue-500 cursor-pointer no-underline hover:underline"
            href="/projects/"
          >
            projects
          </a>
          .
        </p>

        <p>
          Open-source contributions and experimental implementations are maintained on{" "}
          <a
            className="text-blue-500 cursor-pointer no-underline hover:underline"
            href="https://github.com/therapys"
          >
            GitHub
          </a>
          , focusing on developer tooling and infrastructure automation.
        </p>

        <p>
          Technical documentation, architectural analyses, and implementation notes are published 
          periodically via the{" "}
          <a
            className="text-blue-500 cursor-pointer no-underline hover:underline"
            href="/blog/"
          >
            blog
          </a>
          .
        </p>

        <div style={{marginTop: '3em', marginBottom: '2em'}}>
          <h3 style={{textAlign: 'center', fontSize: '11pt', marginBottom: '1em'}}>
            Figure 1: Model Architecture Overview
          </h3>
          <svg width="100%" height="120" viewBox="0 0 600 120" style={{display: 'block', margin: '0 auto'}}>
            {/* Grid lines */}
            <line x1="50" y1="10" x2="50" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
            <line x1="50" y1="80" x2="550" y2="80" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
            
            {/* Age bar */}
            <rect x="50" y="30" width="400" height="50" fill="var(--link-color)" opacity="0.7"/>
            
            {/* Labels */}
            <text x="30" y="60" fontSize="12" fill="currentColor" textAnchor="end">Age</text>
            <text x="50" y="95" fontSize="12" fill="currentColor" textAnchor="middle">0</text>
            <text x="450" y="95" fontSize="12" fill="currentColor" textAnchor="middle">20</text>
            <text x="550" y="95" fontSize="12" fill="currentColor" textAnchor="middle">100</text>
            
            {/* Current age indicator */}
            <text x="450" y="25" fontSize="14" fill="currentColor" fontWeight="bold" textAnchor="middle">20 years</text>
          </svg>
          <p style={{textAlign: 'center', fontSize: '10pt', color: 'var(--footer-text-color)', marginTop: '0.5em'}}>
            Trained on 2005 parameters, fine-tuned ever since. (n=1, ongoing)
          </p>
        </div>

        <div style={{marginTop: '3em', marginBottom: '2em'}}>
          <h3 style={{textAlign: 'center', fontSize: '11pt', marginBottom: '1em'}}>
            Figure 2: Technology Stack Proficiency Distribution
          </h3>
          <svg width="100%" height="300" viewBox="0 0 600 300" style={{display: 'block', margin: '0 auto'}}>
            {/* Axes */}
            <line x1="100" y1="20" x2="100" y2="240" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
            <line x1="100" y1="240" x2="550" y2="240" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
            
            {/* Bars */}
            <rect x="110" y="45" width="360" height="25" fill="var(--link-color)" opacity="0.8"/>
            <rect x="110" y="77" width="360" height="25" fill="var(--link-color)" opacity="0.8"/>
            <rect x="110" y="109" width="315" height="25" fill="var(--link-color)" opacity="0.8"/>
            <rect x="110" y="141" width="270" height="25" fill="var(--link-color)" opacity="0.8"/>
            <rect x="110" y="173" width="225" height="25" fill="var(--link-color)" opacity="0.8"/>
            <rect x="110" y="205" width="180" height="25" fill="var(--link-color)" opacity="0.8"/>
            
            {/* Labels */}
            <text x="95" y="60" fontSize="12" fill="currentColor" textAnchor="end">Golang</text>
            <text x="95" y="92" fontSize="12" fill="currentColor" textAnchor="end">TypeScript</text>
            <text x="95" y="124" fontSize="12" fill="currentColor" textAnchor="end">C</text>
            <text x="95" y="156" fontSize="12" fill="currentColor" textAnchor="end">Java</text>
            <text x="95" y="188" fontSize="12" fill="currentColor" textAnchor="end">Python</text>
            <text x="95" y="220" fontSize="12" fill="currentColor" textAnchor="end">Rust</text>
            
            {/* Proficiency values */}
            <text x="480" y="60" fontSize="11" fill="currentColor">80%</text>
            <text x="480" y="92" fontSize="11" fill="currentColor">80%</text>
            <text x="435" y="124" fontSize="11" fill="currentColor">70%</text>
            <text x="390" y="156" fontSize="11" fill="currentColor">60%</text>
            <text x="345" y="188" fontSize="11" fill="currentColor">50%</text>
            <text x="300" y="220" fontSize="11" fill="currentColor">40%</text>
            
            {/* Scale */}
            <text x="100" y="260" fontSize="10" fill="currentColor" textAnchor="middle">0%</text>
            <text x="325" y="260" fontSize="10" fill="currentColor" textAnchor="middle">50%</text>
            <text x="550" y="260" fontSize="10" fill="currentColor" textAnchor="middle">100%</text>
          </svg>
          <p style={{textAlign: 'center', fontSize: '10pt', color: 'var(--footer-text-color)', marginTop: '0.5em'}}>
            Self-reported proficiency levels across primary technology domains (2025)
          </p>
        </div>

        <div style={{marginTop: '3em', paddingTop: '2em', borderTop: '1px solid var(--border-color)'}}>
          <h3 style={{fontSize: '11pt'}}>References</h3>
          <ol style={{fontSize: '10pt', lineHeight: '1.8', paddingLeft: '2em'}}>
            <li>
              Kiilaspää, K.M. (2024-2025). <i>GitHub Repository Collection</i>. 
              Available at: <a href="https://github.com/therapys">https://github.com/therapys</a>
            </li>
            <li>
              Kiilaspää, K.M. (2025). <i>Professional LinkedIn Profile</i>. 
              Available at: <a href="https://linkedin.com/in/karlkiilaspaa">https://linkedin.com/in/karlkiilaspaa</a>
            </li>
            <li>
              Kiilaspää, K.M. (2025). <i>Twitter/X Updates</i>. 
              Available at: <a href="https://twitter.com/karlkiilaspaa">https://twitter.com/karlkiilaspaa</a>
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
}
