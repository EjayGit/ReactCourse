import componentsImg from './assets/components.png'
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header.jsx'
import CoreConcept from './components/CoreConcept.jsx'
import TabButton from '../components/TabButton';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building block."
              image={componentsImg}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
          </menu>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
