# Micro Frontends

## Purpose

With the wide adoption of micro services which look to break up monolithic applications in order to reduce complexity and increase cohesion, we should be looking into breaking up our monolithic clients to receive similar benefits to what was seen with the adoption of micro services.

## Benefits

* Technology agnostic products
* Each product team can select the technology stack which fits them best
* Increased level of autonomy
  * Teams can work on their product with an increased level of independence
* Increased level of cohesion
  * Each application has a more well defined responsibility
* Looser coupling
  * Applications should become less reliant on one another
* Code Splitting

## Principles

* Each application is responsible for its own data
  * Data retrieval, persisting and storing
* Communication between applications should be minimized, if communication is required then the use of custom events is suggested

## Implementations

### Build Time

#### Packages

In this implementation method, each micro frontend is deployed as its own package and included into the core application.

##### Benefits

* Fairly easy to implement

##### Potential Gotchas

* Duplicate dependencies
  * Need to ensure that dependencies are deduped during the build process of the core application

##### Drawbacks

* You need to build and release your core application every time you want to update one of your micro frontends
* Low level autonomy

#### Monorepo

In this implementation of micro frontends we have a single repo containing all of our applications which are bundled together and delivered to the client.

##### How to implement

###### Webpack

We can specify several [entry-points](https://webpack.js.org/concepts/entry-points) of each of our applications to be bundled and delivered to the client

###### Create React App

In order to support multiple applications in CRA, we have to extend the default configuration. Out of the box, CRA does not allow you to override the webpack configuration so we will have to make use of an npm module to do so. Below are two examples of npm modules which allow you to override the default configuration.

[Craco](https://www.npmjs.com/package/@craco/craco)

[React app rewired (no longer maintained)](https://www.npmjs.com/package/react-app-rewired)

##### Drawbacks

* You need to build and release your core application every time you want to update one of your micro frontends
* Low level of autonomy
* Increased build configuration complexity


### Run Time

#### Iframes

A run time integrations which includes each application through the use of iframes

##### How to implement

Simply include each of the child applications in the core application using iframes.

##### Benefits

* Easy to implement
* Medium level of autonomy

##### Drawbacks

* Duplicate dependencies
* CORS issues
* Routing, linking, and history are harder to manage

#### Javascript

##### How to implement

Each application is included in the document through the use of script tags. Routing is then defined to determine which application is shown within the core application

##### Benefits

* One of the most flexible methods of implementing micro frontends
* High level of autonomy
* High level of adoption in the industry
* Increased level of build complexity

##### Drawbacks

* Complex routing
* Need to ensure that child applications have loaded prior to the user accessing a route that is reliant on them

#### Web Components

##### How to implement

Each application is included in the document through the use of script tags. Routing is then defined to determine which application is shown within the core application through the use of web components which are instantiated and attached to the DOM, rather than relying on a global function which attaches the applications to the window.

##### Benefits

* High level of autonomy

##### Drawbacks

* Increased level of build complexity

## Examples

### Build Time

* Packages
* [TODO] Web Components (SFCs, Wrapper)

### Run Time

* Iframes
* Javascript
* [TODO] Web Components (SFCs, Wrapper)

## Sources

* https://martinfowler.com/articles/micro-frontends.html#Run-timeIntegrationViaIframes
* https://medium.com/@_rchaves_/building-microfrontends-part-ii-joining-apps-together-dfa1b6f17d3e
* https://dev.to/florianrappl/5-reasons-for-doing-microfrontends-1mba
* https://micro-frontends.org/
