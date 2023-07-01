import Welcome from './Welcome';

import '../styles/ContentSection.css';
import '../styles/small/ContentSection-sm.css';
import '../styles/medium/ContentSection-md.css';
import '../styles/large/ContentSection-lg.css';

function ContentSection() {
    return (
        <main className="ContentSection">
            <Welcome />
        </main>
    );
}

export default ContentSection;