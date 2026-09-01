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
                  text: 'Totono helps US companies hire vetted Argentinian talent with zero friction. Totono vets the engineers and handles contract, payments, and the rest of the business side. Engineers work with the state of the art in AI harnesses and skills automation. They do the work. You may manage the engineer yourself, or have Totono do it. Totono stays on to support them either way. Totono is run by Antonio Tralice. TOTONO LLC is a Delaware limited liability company. We work remotely with clients across the Americas and Europe, on US Eastern Time.',
                },
              },
              {
                '@type': 'Question',
                name: 'Who is Antonio Tralice?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Antonio Tralice is a software engineer and ed-tech entrepreneur, and a Y Combinator alumni (S20). He has spent more than a decade building web platforms, backend services and learning products. He built Totono to help founders hire strong engineers from Argentina with zero friction.',
                },
              },
              {
                '@type': 'Question',
                name: 'What do I get when I hire through Totono?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You get a vetted engineer who works on your project using state-of-the-art AI harnesses and skills automation. Totono is your single point of contact: coordinates the engineer, answers questions, and handles the business side (contract, payments, and logistics). You may manage the engineer yourself, or have Totono do it. One contract, one invoice, one email thread.',
                },
              },
              {
                '@type': 'Question',
                name: 'What languages and timezone does Totono work in?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Totono works in English and Spanish. The working day is US Eastern Time, which makes real-time collaboration easy for clients in the Americas and Europe.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I hire a Totono engineer?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Email toni.tralice@totono.xyz with a short description of what you want to build, your current stack if there is one, any deadlines or budget constraints, and the best way to reach you. Totono will reply, usually within two business days. After a first exchange over email, Totono schedules a short call to understand the problem in more depth, and then you receive a written proposal with scope, timeline and pricing. The first conversation and proposal are free of charge and obligation.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does Totono NOT do?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Totono does not provide off-the-shelf SaaS products, hosting-only services, or design-only work without implementation.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do proposals and pricing work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Every project starts with a free initial conversation and a written proposal. Proposals include scope, timeline, milestones and pricing. There is no public pricing list; pricing depends on the scope, complexity and timeline of each project. Contact us for a proposal tailored to your needs.',
                },
              },
            ],
          }),
        }}
      />
      <Page label="FAQ" title="Frequently asked questions.">
        <p>
          Common questions about Totono and how we connect you with vetted AI engineers from
          Argentina. If your question is not answered here, <a href="/contact">get in touch</a>.
        </p>

        <h2>What is Totono?</h2>
        <p>
          Totono helps US companies hire vetted Argentinian talent with zero friction. Totono vets
          the engineers and handles contract, payments, and the rest of the business side. Engineers
          work with the state of the art in AI harnesses and skills automation. They do the work.
          You may manage the engineer yourself, or have Totono do it. Totono stays on to support
          them either way. Totono is run by Antonio Tralice. TOTONO LLC is a Delaware limited
          liability company. We work remotely with clients across the Americas and Europe, on US
          Eastern Time.
        </p>

        <h2>Who is Antonio Tralice?</h2>
        <p>
          Antonio Tralice is a software engineer and ed-tech entrepreneur, and a Y Combinator alumni
          (S20). He has spent more than a decade building web platforms, backend services and
          learning products. He built Totono to help founders hire strong engineers from Argentina
          with zero friction.
        </p>

        <h2>What do I get when I hire through Totono?</h2>
        <p>
          You get a vetted engineer who works on your project using state-of-the-art AI harnesses
          and skills automation. Totono is your single point of contact: coordinates the engineer,
          answers questions, and handles the business side (contract, payments, and logistics). You
          may manage the engineer yourself, or have Totono do it. One contract, one invoice, one
          email thread.
        </p>

        <h2>What languages and timezone does Totono work in?</h2>
        <p>
          Totono works in English and Spanish. The working day is US Eastern Time, which makes
          real-time collaboration easy for clients in the Americas and Europe.
        </p>

        <h2>How do I hire a Totono engineer?</h2>
        <p>
          Email <a href="mailto:toni.tralice@totono.xyz">toni.tralice@totono.xyz</a> with a short
          description of what you want to build, your current stack if there is one, any deadlines
          or budget constraints, and the best way to reach you. Totono will reply, usually within
          two business days. After a first exchange over email, Totono schedules a short call to
          understand the problem in more depth, and then you receive a written proposal with scope,
          timeline and pricing. The first conversation and proposal are free of charge and
          obligation.
        </p>

        <h2>What does Totono NOT do?</h2>
        <p>
          Totono does not provide off-the-shelf SaaS products, hosting-only
          services, or design-only work without implementation.
        </p>

        <h2>How do proposals and pricing work?</h2>
        <p>
          Every project starts with a free initial conversation and a written proposal. Proposals
          include scope, timeline, milestones and pricing. There is no public pricing list; pricing
          depends on the scope, complexity and timeline of each project. Contact us for a proposal
          tailored to your needs.
        </p>
      </Page>
    </>
  )
}
