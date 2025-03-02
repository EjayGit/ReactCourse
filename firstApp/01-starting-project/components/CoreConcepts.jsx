import CoreConcept from './CoreConcept.jsx';

export default function CoreConcepts(){
    return (
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(conceptItem => <CoreConcept key={conceptItem.title}{...conceptItem}/>)}
{/*             <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
    )
}