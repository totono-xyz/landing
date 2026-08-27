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
                  text: 'Totono helps US companies hire vetted Argentinian engineers with zero friction. Antonio Tralice interviews and vets the engineers, gives them the AI tools and harness he designs and controls, handles contract and payments, and supports them. Engineers do the work. You can manage the engineer yourself, or have Antonio do it. TOTONO LLC is a Delaware limited liability company. We work remotely with clients across the Americas and Europe, on US Eastern Time.',
                },
              },
              {
                '@type': 'Question',
                name: 'Who is Antonio Tralice?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Antonio Tralice is a software engineer and ed-tech entrepreneur, and a Y Combinator alumni (S20). He has spent more than a decade building web platforms, backend services and learning products. He built Totono to help US companies hire strong Argentinian engineers with zero friction.',
                },
              },
              {
                '@type': 'Question',
                name: 'What do I get when I hire through Totono?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You get a vetted Argentinian engineer who uses the AI tools and harness Antonio designs and controls. Antonio handles contract, payments, and logistics. You can manage the engineer directly, or Antonio can do it. Either way Totono stays on to support them. One contract, one invoice, one point of contact.',
                },
              },
              {
                '@type': 'Question',
                name: 'What languages and timezone does Totono work in?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Totono works in English and Spanish. The working day is US Eastern Time, which makes real-time collaboration easy for US companies and clients across the Americas and Europe.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I hire through Totono?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Email toni.tralice@totono.xyz with a short description of what you want to build, your current stack if there is one, whether you plan to manage the engineer yourself or have Antonio do it, any deadlines or budget constraints, and the best way to reach you. Antonio will reply, usually within two business days. After a first exchange over email, he schedules a short call to understand your needs in more depth, and then you receive a written proposal with scope, timeline and pricing. The first conversation and proposal are free of charge and obligation.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does Totono NOT do?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Totono does not provide off-the-shelf SaaS products, hosting-only services, or design-only work without implementation. You can have Antonio run the engineer or manage them yourself; Totono stays on to support them either way.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do proposals and pricing work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Every engagement starts with a free initial conversation and a written proposal. Proposals include scope, timeline, milestones and pricing. There is no public pricing list; pricing depends on the scope, complexity and timeline of each project. Contact us for a proposal tailored to your needs.',
                },
              },
            ],
          }),
        }}
      />
      <Page label="FAQ" title="Frequently asked questions.">
        <p>
          Common questions about Totono and how we help US companies hire vetted Argentinian
          engineers. If your question is not answered here, <a href="/contact">get in touch</a>.
        </p>

        <h2>What is Totono?</h2>
        <p>
          Totono helps US companies hire vetted Argentinian engineers with zero friction. Antonio
          Tralice interviews and vets the engineers, gives them the AI tools and harness he designs
          and controls, handles contract and payments, and supports them. Engineers do the work. You
          can manage the engineer yourself, or have Antonio do it. TOTONO LLC is a Delaware limited
          liability company. We work remotely with clients across the Americas and Europe, on US
          Eastern Time.
        </p>

        <h2>Who is Antonio Tralice?</h2>
        <p>
          Antonio Tralice is a software engineer and ed-tech entrepreneur, and a Y Combinator alumni
          (S20). He has spent more than a decade building web platforms, backend services and
          learning products. He built Totono to help US companies hire strong Argentinian engineers
          with zero friction.
        </p>

        <h2>What do I get when I hire through Totono?</h2>
        <p>
          You get a vetted Argentinian engineer who uses the AI tools and harness Antonio designs
          and controls. Antonio handles contract, payments, and logistics. You can manage the
          engineer directly, or Antonio can do it. Either way Totono stays on to support them. One
          contract, one invoice, one point of contact.
        </p>

        <h2>What languages and timezone does Totono work in?</h2>
        <p>
          Totono works in English and Spanish. The working day is US Eastern Time, which makes
          real-time collaboration easy for US companies and clients across the Americas and Europe.
        </p>

        <h2>How do I hire through Totono?</h2>
        <p>
          Email <a href="mailto:toni.tralice@totono.xyz">toni.tralice@totono.xyz</a> with a short
          description of what you want to build, your current stack if there is one, whether you
          plan to manage the engineer yourself or have Antonio do it, any deadlines or budget
          constraints, and the best way to reach you. Antonio will reply, usually within two business
          days. After a first exchange over email, he schedules a short call to understand your needs
          in more depth, and then you receive a written proposal with scope, timeline and pricing.
          The first conversation and proposal are free of charge and obligation.
        </p>

        <h2>What does Totono NOT do?</h2>
        <p>
          Totono does not provide off-the-shelf SaaS products, hosting-only services, or design-only
          work without implementation. You can have Antonio run the engineer or manage them yourself;
          Totono stays on to support them either way.
        </p>

        <h2>How do proposals and pricing work?</h2>
        <p>
          Every engagement starts with a free initial conversation and a written proposal. Proposals
          include scope, timeline, milestones and pricing. There is no public pricing list; pricing
          depends on the scope, complexity and timeline of each project. Contact us for a proposal
          tailored to your needs.
        </p>
      </Page>
    </>
  )
}
