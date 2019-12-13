import { storiesOf } from '@open-wc/demoing-storybook';
import '../assets/css/shared.css';

storiesOf('layouts', module)
  .add('tiles', () => tiles_demo)
  .add('floorplans', () => main_with_sidebar)
;

export const tiles_demo = `
  <div class="tiles">
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
    <div class="demo"></div>
  </div>`;

export const main_with_sidebar = `
  <div class="main-with-sidebar">
    <section>
      <div class="demo fill txtc ptl" style="min-width: 350px;">MAIN</div>
    </section>
    <aside>
      <h2>List of Information</h2>
      <ul>
        <li>First option with a list </li>
        <li>Second option</li>
        <li>yet another option</li>
        <li>Mugar Storage* –Circulation –1st floor</li>
        <li>Howard Gotlieb Archival Research Center –Exhibits</li>
      </ul>
    </aside>
  </div>
`;