import { Page } from '@/components/page'

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is Totono?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Totono is an independent software studio led by Antonio Tralice. The legal entity is TOTONO LLC, a limited liability company registered in Delaware, United States, and operated from Buenos Aires, Argentina. We design and build custom web applications, backend systems, REST and GraphQL APIs, and learning platforms. We also provide architecture reviews, technical due diligence and fractional CTO services.',
                },
              },
              {
                '@type': 'Question',
                name: 'Who leads Totono?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Totono is led by Antonio Tralice, a software engineer and ed-tech entrepreneur from Tucumán, Argentina. Antonio is a Y Combinator alumni (S20) and has spent more than a decade building web platforms, backend services and learning products. Every Totono engagement is handled directly by Antonio: no account managers, no hand-offs.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does Totono build?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Totono builds custom web applications from first prototype to production, backend systems including REST and GraphQL APIs, integrations with third-party services, and learning platforms with courses, cohorts, assessments and student tooling. We also provide architecture reviews, technical due diligence on existing codebases, and fractional CTO services for startups and small teams.',
                },
              },
              {
                '@type': 'Question',
                name: 'What languages does Totono work in, and what timezone?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Totono works in English and Spanish. We are based in Buenos Aires, Argentina (UTC-3 timezone), which overlaps with both US and European business hours. This makes real-time collaboration easy for clients in the Americas and Europe.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I hire Totono?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Email toni.tralice@totono.xyz with a short description of what you want to build, your current stack if there is one, any deadlines or budget constraints, and the best way to reach you. Antonio Tralice will reply, usually within two business days. After a first exchange over email, we usually schedule a short call to understand the problem in more depth, and then you receive a written proposal with scope, timeline and pricing. The first conversation and proposal are free of charge and obligation.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does Totono NOT do?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Totono does not provide off-the-shelf SaaS products, hosting or infrastructure management only, design-only work without implementation, or mobile-native-only apps for iOS and Android. Totono is also not a staffing agency and does not provide large outsourced teams. Totono is a small studio that takes on a limited number of projects at a time to ensure quality and direct involvement.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do proposals and pricing work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Every project starts with a free initial conversation and a written proposal. Proposals include scope, timeline, milestones and pricing. Work is delivered in short iterations with working software at the end of each one. There is no public pricing list; pricing depends on the scope, complexity and timeline of each project. Contact us for a proposal tailored to your needs.',
                },
              },
            ],
          }),
        }}
      />
      <Page label="FAQ" title="Frequently asked questions.">
        <p>
          Common questions about Totono, the independent software studio led by Antonio Tralice.
          If your question is not answered here, <a href="/contact">get in touch</a>.
        </p>

        <h2>What is Totono?</h2>
        <p>
          Totono is an independent software studio led by Antonio Tralice. The legal entity is
          TOTONO LLC, a limited liability company registered in Delaware, United States, and
          operated from Buenos Aires, Argentina. We design and build custom web applications,
          backend systems, REST and GraphQL APIs, and learning platforms. We also provide
          architecture reviews, technical due diligence and fractional CTO services.
        </p>

        <h2>Who leads Totono?</h2>
        <p>
          Totono is led by Antonio Tralice, a software engineer and ed-tech entrepreneur from
          Tucumán, Argentina. Antonio is a Y Combinator alumni (S20) and has spent more than a
          decade building web platforms, backend services and learning products. Every Totono
          engagement is handled directly by Antonio: no account managers, no hand-offs.
        </p>

        <h2>What does Totono build?</h2>
        <p>
          Totono builds custom web applications from first prototype to production, backend systems
          including REST and GraphQL APIs, integrations with third-party services, and learning
          platforms with courses, cohorts, assessments and student tooling. We also provide
          architecture reviews, technical due diligence on existing codebases, and fractional CTO
          services for startups and small teams.
        </p>

        <h2>What languages does Totono work in, and what timezone?</h2>
        <p>
          Totono works in English and Spanish. We are based in Buenos Aires, Argentina (UTC-3
          timezone), which overlaps with both US and European business hours. This makes real-time
          collaboration easy for clients in the Americas and Europe.
        </p>

        <h2>How do I hire Totono?</h2>
        <p>
          Email <a href="mailto:toni.tralice@totono.xyz">toni.tralice@totono.xyz</a> with a short
          description of what you want to build, your current stack if there is one, any deadlines
          or budget constraints, and the best way to reach you. Antonio Tralice will reply, usually
          within two business days. After a first exchange over email, we usually schedule a short
          call to understand the problem in more depth, and then you receive a written proposal
          with scope, timeline and pricing. The first conversation and proposal are free of charge
          and obligation.
        </p>

        <h2>What does Totono NOT do?</h2>
        <p>
          Totono does not provide off-the-shelf SaaS products, hosting or infrastructure management
          only, design-only work without implementation, or mobile-native-only apps for iOS and
          Android. Totono is also not a staffing agency and does not provide large outsourced
          teams. Totono is a small studio that takes on a limited number of projects at a time to
          ensure quality and direct involvement.
        </p>

        <h2>How do proposals and pricing work?</h2>
        <p>
          Every project starts with a free initial conversation and a written proposal. Proposals
          include scope, timeline, milestones and pricing. Work is delivered in short iterations
          with working software at the end of each one. There is no public pricing list; pricing
          depends on the scope, complexity and timeline of each project. Contact us for a proposal
          tailored to your needs.
        </p>
      </Page>
    </>
  )
}
