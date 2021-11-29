import type { Package } from '@guild-docs/server/npm';
import { Demo, DEMO_QUERY, DEMO_SCHEMA } from './demos';

export const ALL_TAGS = [
  'tracing',
  'metrics',
  'core',
  'errors',
  'security',
  'utilities',
  'performance',
  'caching',
  'devtool',
  'authentication',
  'authorization',
  'schema',
  'subscription',
] as const;

export type Tags = typeof ALL_TAGS[number];

export const pluginsArrWithDemos: Array<
  Package<Tags> & {
    demos?: Demo[];
  }
> = [
  {
    identifier: 'use-sentry',
    title: 'useSentry',
    npmPackage: '@envelop/sentry',
    iconUrl: '/assets/logos/sentry.png',
    tags: ['tracing', 'metrics', 'errors'],
  },
  {
    identifier: 'use-statsd',
    title: 'useStatsD',
    npmPackage: '@envelop/statsd',
    iconUrl: '/assets/logos/datadog.png',
    tags: ['metrics', 'errors'],
  },
  {
    identifier: 'use-schema',
    title: 'useSchema',
    githubReadme: {
      repo: 'dotansimha/envelop',
      path: 'packages/core/docs/use-schema.md',
    },
    npmPackage: '@envelop/core',
    iconUrl: '/logo.png',
    tags: ['core', 'schema'],
  },
  {
    identifier: 'use-async-schema',
    title: 'useAsyncSchema',
    githubReadme: {
      repo: 'dotansimha/envelop',
      path: 'packages/core/docs/use-async-schema.md',
    },
    npmPackage: '@envelop/core',
    iconUrl: '/logo.png',
    tags: ['core', 'schema'],
  },
  {
    identifier: 'use-lazy-loaded-schema',
    title: 'useLazyLoadedSchema',
    githubReadme: {
      repo: 'dotansimha/envelop',
      path: 'packages/core/docs/use-lazy-loaded-schema.md',
    },
    npmPackage: '@envelop/core',
    iconUrl: '/logo.png',
    tags: ['core', 'schema'],
  },
  {
    identifier: 'use-error-handler',
    title: 'useErrorHandler',
    githubReadme: {
      repo: 'dotansimha/envelop',
      path: 'packages/core/docs/use-error-handler.md',
    },
    npmPackage: '@envelop/core',
    iconUrl: '/logo.png',
    tags: ['core', 'errors'],
  },
  {
    identifier: 'use-masked-errors',
    title: 'useMaskedErrors',
    githubReadme: {
      repo: 'dotansimha/envelop',
      path: 'packages/core/docs/use-masked-errors.md',
    },
    npmPackage: '@envelop/core',
    iconUrl: '/logo.png',
    tags: ['core', 'errors', 'security'],
  },
  {
    identifier: 'use-extend-context',
    title: 'useExtendContext',
    githubReadme: {
      repo: 'dotansimha/envelop',
      path: 'packages/core/docs/use-extend-context.md',
    },
    npmPackage: '@envelop/core',
    iconUrl: '/logo.png',
    tags: ['core', 'utilities'],
  },
  {
    identifier: 'use-logger',
    title: 'useLogger',
    githubReadme: {
      repo: 'dotansimha/envelop',
      path: 'packages/core/docs/use-logger.md',
    },
    npmPackage: '@envelop/core',
    iconUrl: '/logo.png',
    tags: ['core', 'utilities'],
  },
  {
    identifier: 'use-payload-formatter',
    title: 'usePayloadFormatter',
    githubReadme: {
      repo: 'dotansimha/envelop',
      path: 'packages/core/docs/use-payload-formatter.md',
    },
    npmPackage: '@envelop/core',
    iconUrl: '/logo.png',
    tags: ['core', 'utilities'],
  },
  {
    identifier: 'use-timing',
    title: 'useTiming',
    githubReadme: {
      repo: 'dotansimha/envelop',
      path: 'packages/core/docs/use-timing.md',
    },
    npmPackage: '@envelop/core',
    iconUrl: '/logo.png',
    tags: ['core', 'tracing', 'utilities'],
  },
  {
    identifier: 'use-graphql-jit',
    title: 'useGraphQLJit',
    npmPackage: '@envelop/graphql-jit',
    iconUrl: '/assets/logos/graphql.png',
    tags: ['performance'],
  },
  {
    identifier: 'use-parser-cache',
    title: 'useParserCache',
    npmPackage: '@envelop/parser-cache',
    iconUrl: '/logo.png',
    tags: ['performance', 'caching'],
    demos: [
      {
        schema: DEMO_SCHEMA,
        query: DEMO_QUERY,
        requestHeaders: {},
        code: `useTest`,
      },
    ],
  },
  {
    identifier: 'use-validation-cache',
    title: 'useValidationCache',
    npmPackage: '@envelop/validation-cache',
    iconUrl: '/logo.png',
    tags: ['performance', 'caching'],
  },
  {
    identifier: 'use-depth-limit',
    title: 'useDepthLimit',
    npmPackage: '@envelop/depth-limit',
    iconUrl: '/logo.png',
    tags: ['performance', 'security'],
  },
  {
    identifier: 'use-data-loader',
    title: 'useDataLoader',
    npmPackage: '@envelop/dataloader',
    iconUrl: '/assets/logos/graphql.png',
    tags: ['performance', 'caching'],
  },
  {
    identifier: 'use-apollo-tracing',
    title: 'useApolloTracing',
    npmPackage: '@envelop/apollo-tracing',
    iconUrl: '/assets/logos/apollo.png',
    tags: ['devtool', 'metrics'],
  },
  {
    identifier: 'use-open-telemetry',
    title: 'useOpenTelemetry',
    npmPackage: '@envelop/opentelemetry',
    iconUrl: '/assets/logos/opentelemetry.png',
    tags: ['tracing', 'metrics', 'errors'],
  },
  {
    identifier: 'use-generic-auth',
    title: 'useGenericAuth',
    npmPackage: '@envelop/generic-auth',
    iconUrl: '/assets/logos/generic_auth.png',
    tags: ['security', 'authentication', 'authorization'],
  },
  {
    identifier: 'use-auth0',
    title: 'useAuth0',
    npmPackage: '@envelop/auth0',
    iconUrl: '/assets/logos/auth0.png',
    tags: ['security', 'authentication', 'authorization'],
  },
  {
    identifier: 'use-graphql-modules',
    title: 'useGraphQLModules',
    npmPackage: '@envelop/graphql-modules',
    iconUrl: 'https://www.graphql-modules.com/img/just-logo.svg',
    tags: ['schema', 'utilities', 'devtool'],
  },
  {
    identifier: 'use-rate-limiter',
    title: 'useRateLimiter',
    npmPackage: '@envelop/rate-limiter',
    iconUrl: '/assets/logos/rate_limiter.png',
    tags: ['schema', 'utilities', 'security'],
  },
  {
    identifier: 'use-disable-introspection',
    title: 'useDisableIntrospection',
    npmPackage: '@envelop/disable-introspection',
    iconUrl: '/assets/logos/graphql.png',
    tags: ['utilities', 'security'],
  },
  {
    identifier: 'use-filter-allowed-operations',
    title: 'useFilterAllowedOperations',
    npmPackage: '@envelop/filter-operation-type',
    iconUrl: '/assets/logos/graphql.png',
    tags: ['utilities', 'security'],
  },
  {
    identifier: 'use-preload-assets',
    title: 'usePreloadAssets',
    npmPackage: '@envelop/preload-assets',
    iconUrl: '/assets/logos/assets.png',
    tags: ['utilities'],
  },
  {
    identifier: 'use-persisted-operations',
    title: 'usePersistedOperations',
    npmPackage: '@envelop/persisted-operations',
    iconUrl: '/assets/logos/persisted_operations.png',
    tags: ['security', 'performance'],
  },
  {
    identifier: 'use-graphql-hive',
    title: 'useHive',
    npmPackage: '@graphql-hive/client',
    iconUrl: 'https://the-guild.dev/static/shared-logos/products/hive.svg',
    tags: ['tracing', 'metrics', 'devtool'],
  },
  {
    identifier: 'use-newrelic',
    title: 'useNewRelic',
    npmPackage: '@envelop/newrelic',
    iconUrl: '/assets/logos/newrelic.png',
    tags: ['tracing', 'metrics', 'errors'],
  },
  {
    identifier: 'use-live-query',
    title: 'useLiveQuery',
    npmPackage: '@envelop/live-query',
    iconUrl: '/assets/logos/graphql.png',
    tags: ['utilities'],
  },
  {
    identifier: 'use-fragment-arguments',
    title: 'useFragmentArguments',
    npmPackage: '@envelop/fragment-arguments',
    iconUrl: '/assets/logos/graphql.png',
    tags: ['utilities'],
  },
  {
    identifier: 'use-apollo-server-errors',
    title: 'useApolloServerErrors',
    npmPackage: '@envelop/apollo-server-errors',
    iconUrl: '/assets/logos/apollo.png',
    tags: ['utilities', 'errors'],
  },
  {
    identifier: 'use-operation-field-permissions',
    title: 'useOperationFieldPermissions',
    npmPackage: '@envelop/operation-field-permissions',
    iconUrl: '/assets/logos/graphql.png',
    tags: ['security', 'authorization'],
  },
  {
    identifier: 'use-extended-validation',
    title: 'useExtendedValidation',
    npmPackage: '@envelop/extended-validation',
    iconUrl: '/assets/logos/graphql.png',
    tags: ['devtool', 'utilities'],
  },
  {
    identifier: 'use-prometheus',
    title: 'usePrometheus',
    npmPackage: '@envelop/prometheus',
    iconUrl: '/assets/logos/prometheus.png',
    tags: ['metrics', 'errors'],
  },
  {
    identifier: 'use-context-value-per-execute-subscription-event',
    title: 'useContextValuePerExecuteSubscriptionEvent',
    npmPackage: '@envelop/execute-subscription-event',
    iconUrl: '/assets/logos/graphql.png',
    tags: ['utilities', 'subscription'],
    githubReadme: {
      repo: 'dotansimha/envelop',
      path: '/packages/plugins/execute-subscription-event/README.md',
    },
  },
  {
    identifier: 'use-resource-limitations',
    title: 'useResourceLimitations',
    npmPackage: '@envelop/resource-limitations',
    iconUrl: '/assets/logos/rate_limiter.png',
    tags: ['schema', 'utilities', 'security'],
  },
  {
    identifier: 'use-response-cache',
    title: 'useResponseCache',
    npmPackage: '@envelop/response-cache',
    iconUrl: '/logo.png',
    tags: ['caching', 'performance'],
  },
  {
    identifier: 'use-apollo-federation',
    title: 'useApolloFederation',
    npmPackage: '@envelop/apollo-federation',
    iconUrl: '/assets/logos/apollo.png',
    tags: ['schema', 'utilities'],
  },
];

export function getPluginDemos(identifier: string) {
  return pluginsArrWithDemos.find(p => p.identifier === identifier)?.demos || [];
}

export const pluginsArr: Array<Package<Tags>> = pluginsArrWithDemos.map(({ demos, ...rest }) => rest);
