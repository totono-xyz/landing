import { Page } from '@/components/page'

const FAQ = [
  [
    'What is Totono?',
    'An agentic software factory. We plug into your codebase and tooling, agents ship, and you control them through our harness. TOTONO LLC, Delaware.',
  ],
  [
    'What is the harness?',
    'Our own tool. A map of your code that lives in your repo, rules for what agents can do, and a view of the state of the app. Early and improving every week.',
  ],
  ['Which agents does it work with?', 'Claude Code, Codex, Cursor and Grok.'],
  [
    'How fast can you start?',
    'Days. We connect to your repo, CI, tracker and deploys, and start shipping pull requests.',
  ],
  [
    'Do I keep control of my code?',
    'Yes. The map lives in your repo. Your developers decide what agents can touch, and important decisions go through a human.',
  ],
  [
    'Who is Antonio Tralice?',
    'The founder. Software engineer, Y Combinator alum (S20), a decade building web platforms.',
  ],
  [
    'How do I start?',
    'Email toni.tralice@totono.xyz with your product, stack and what you want shipped. We reply within two business days, in English or Spanish.',
  ],
  [
    'How does pricing work?',
    'A free call, then a written proposal with scope, timeline and price. No public price list.',
  ],
]

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQ.map(([name, text]) => ({
              '@type': 'Question',
              name,
              acceptedAnswer: { '@type': 'Answer', text },
            })),
          }),
        }}
      />
      <Page label="FAQ" title="Frequently asked questions.">
        <p>
          Not answered here? <a href="/contact">Get in touch</a>.
        </p>
        {FAQ.map(([question, answer]) => (
          <section key={question}>
            <h2>{question}</h2>
            <p>{answer}</p>
          </section>
        ))}
      </Page>
    </>
  )
}
