<img src="https://public.istackmanila.com/img-src/istack-react-boilerplate.png" alt="react boilerplate banner" align="center"/>

<br />

<div align="center"><strong>A React boilerplate starter pack for iStack apps</strong></div>
<div align="center">Based from Max Stoiber's react-boilerplate, and now updated and maintained by iStack Dev team for iStack related projects.</div>

<br />

## Quick start

1. Clone this repo using `git clone http://glc.istackmanila.com/istackmanila/react-boilerplate-istack`
2. Move to the appropriate directory: `cd react-boilerplate-istack`.<br />
3. Run `npm install` or `yarn` to install dependencies.<br />
   *At this point you can run `npm run start:dev` to run development at `http://localhost:3000`. or `PORT=4040 npm run start:dev` to run in specific port `http://localhost:4040`*
4. OPTIONAL: Run `npm run clean` in order start a clean version.

<br />

## Documentation

- See full documentation of react-boilerplate <a href="https://github.com/react-boilerplate/react-boilerplate" target="_blank">here</a>.

<br />

## UI Libraries

- <a href="https://www.styled-components.com/docs" target="_blank">Styled Components</a>
- <a href="http://www.material-ui.com/#/" target="_blank">Material UI</a>
- <a href="https://github.com/jxnblk/grid-styled" target="_blank">Grid</a> based from <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">FlexBox</a>

<br />

## Features

<dl>
  <dt>Quick scaffolding</dt>
  <dd>Create components, containers, routes, selectors and sagas - and their tests - right from the CLI!</dd>

  <dt>Instant feedback</dt>
  <dd>Enjoy the best DX (Developer eXperience) and code your app at the speed of thought! Your saved changes to the CSS and JS are reflected instantaneously without refreshing the page. Preserve application state even when you update something in the underlying code!</dd>

  <dt>Predictable state management</dt>
  <dd>Unidirectional data flow allows for change logging and time travel debugging.</dd>

  <dt>Next generation JavaScript</dt>
  <dd>Use template strings, object destructuring, arrow functions, JSX syntax and more, today.</dd>

  <dt>Next generation CSS</dt>
  <dd>Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance.</dd>

  <dt>Industry-standard routing</dt>
  <dd>It's natural to want to add pages (e.g. `/about`) to your application, and routing makes this possible.</dd>

  <dt>Industry-standard i18n internationalization support</dt>
  <dd>Scalable apps need to support multiple languages, easily add and support multiple languages with `react-intl`.</dd>

  <dt>Offline-first</dt>
  <dd>The next frontier in performant web apps: availability without a network connection from the instant your users load the app.</dd>

  <dt>SEO</dt>
  <dd>We support SEO (document head tags management) for search engines that support indexing of JavaScript content. (eg. Google)</dd>
</dl>

But wait... there's more!

  - *The best test setup:* Automatically guarantee code quality and non-breaking
    changes. (Seen a react app with 99% test coverage before?)
  - *Native web app:* Your app's new home? The home screen of your users' phones.
  - *The fastest fonts:* Say goodbye to vacant text.
  - *Stay fast*: Profile your app's performance from the comfort of your command
    line!
  - *Catch problems:* AppVeyor and TravisCI setups included by default, so your
    tests get run automatically on Windows and Unix.

<br />

## Deployment
1. update the `PUBLIC_PATH` of `.env.staging` and `.env.production` to your desired project domain.
```
PUBLIC_PATH=/react-boilerplate-istack/
API_URL=
ASSETS_URL=
```
2. make sure to prefix your route in routes.js
```
{
  path: `${process.env.PUBLIC_PATH}about`,
  name: 'about',
}
```
3. now you're ready for deployment, just run `npm run build:staging` for staging server or `npm run build:production` for production server.

