const TEMPLATE_REPO = 'https://github.com/InfinityLoopLabs/react-template.git'
const TEMPLATE_REF = 'main'

module.exports = {
  commands: {
    addWidget: [
      {
        type: 'copy',
        from: '_template/widget',
        to: 'app/features/widgets/${Name}',
      },
      {
        type: 'rename',
        target: 'app/features/widgets/${Name}',
        replace: [{ Sample: '${Name}' }],
      },
      {
        type: 'insert',
        when: '!no-store',
        file: 'app/application/store/reducers.ts',
        placeholder:
          "import { generatedReducersList } from '@application/store/generated/reducers'",
        line: "import { Reducer as ${Name}Reducer } from '@widgets/${Name}'",
      },
      {
        type: 'insert',
        when: '!no-store',
        file: 'app/application/store/reducers.ts',
        placeholder: '// Widgets: Начало',
        line: '  ${Name}: ${Name}Reducer,',
      },
      {
        type: 'insert',
        when: '!no-store',
        file: 'app/utils/hooks/useAppActions.ts',
        placeholder:
          "import type { AppDispatchType } from '@application/store/store'",
        line: "import { Actions as ${Name}Actions } from '@widgets/${Name}'",
      },
      {
        type: 'insert',
        when: '!no-store',
        file: 'app/utils/hooks/useAppActions.ts',
        placeholder: '// Widgets Actions: Начало',
        line: '      ${Name}: createAction(${Name}Actions),',
      },
    ],
    addService: [
      {
        type: 'copy',
        from: '_template/service',
        to: 'app/features/services/${name}',
      },
      {
        type: 'rename',
        target: 'app/features/services/${name}',
        replace: [{ Sample: '${name}' }],
      },
      {
        type: 'insert',
        when: '!no-store',
        file: 'app/application/store/reducers.ts',
        placeholder:
          "import { generatedReducersList } from '@application/store/generated/reducers'",
        line: "import { Reducer as ${Name}Reducer } from '@services/${name}'",
      },
      {
        type: 'insert',
        when: '!no-store',
        file: 'app/application/store/reducers.ts',
        placeholder: '// Services: Начало',
        line: '  ${name}: ${Name}Reducer,',
      },
      {
        type: 'insert',
        when: '!no-store',
        file: 'app/utils/hooks/useAppActions.ts',
        placeholder:
          "import type { AppDispatchType } from '@application/store/store'",
        line: "import { Actions as ${name}Actions } from '@services/${name}'",
      },
      {
        type: 'insert',
        when: '!no-store',
        file: 'app/utils/hooks/useAppActions.ts',
        placeholder: '// Services Actions: Начало',
        line: '      ${name}: createAction(${name}Actions),',
      },
    ],
    addOpenApiConfig: [
      {
        type: 'copy',
        from: '_template/openapi-config/app/application/api/rtk/instances/sample.ts',
        to: 'app/application/api/rtk/instances',
      },
      {
        type: 'rename',
        target: 'app/application/api/rtk/instances/sample.ts',
        replace: [{ sample: '${name}' }],
      },
      {
        type: 'copy',
        from: '_template/openapi-config/openapi-config-sample.cjs',
        to: '.',
      },
      {
        type: 'rename',
        target: 'openapi-config-sample.cjs',
        replace: [{ sample: '${name}' }],
      },
      {
        type: 'insert',
        file: 'app/application/store/generated/middlewares.ts',
        placeholder: '// CLI: Paste imports',
        line: "import { enhancedApi as ${name} } from '@generated/hooks/${name}'",
      },
      {
        type: 'insert',
        file: 'app/application/store/generated/middlewares.ts',
        placeholder: '// CLI: Paste middlewares',
        line: '  ${name}.middleware,',
      },
      {
        type: 'insert',
        file: 'app/application/store/generated/reducers.ts',
        placeholder: '// CLI: Paste imports',
        line: "import { enhancedApi as ${name} } from '@generated/hooks/${name}'",
      },
      {
        type: 'insert',
        file: 'app/application/store/generated/reducers.ts',
        placeholder: '// CLI: Paste reducers',
        line: '  [${name}.reducerPath]: ${name}.reducer,',
      },
    ],
    removeWidget: [
      {
        type: 'remove-line',
        file: 'app/utils/hooks/useAppActions.ts',
        line: "import { Actions as ${Name}Actions } from '@widgets/${Name}'",
      },
      {
        type: 'remove-line',
        file: 'app/utils/hooks/useAppActions.ts',
        line: '      ${Name}: createAction(${Name}Actions),',
      },
      {
        type: 'remove-line',
        file: 'app/application/store/reducers.ts',
        line: "import { Reducer as ${Name}Reducer } from '@widgets/${Name}'",
      },
      {
        type: 'remove-line',
        file: 'app/application/store/reducers.ts',
        line: '  ${Name}: ${Name}Reducer,',
      },
      {
        type: 'remove',
        target: 'app/features/widgets/${Name}',
      },
    ],
    removeService: [
      {
        type: 'remove-line',
        file: 'app/utils/hooks/useAppActions.ts',
        line: "import { Actions as ${name}Actions } from '@services/${name}'",
      },
      {
        type: 'remove-line',
        file: 'app/utils/hooks/useAppActions.ts',
        line: '      ${name}: createAction(${name}Actions),',
      },
      {
        type: 'remove-line',
        file: 'app/application/store/reducers.ts',
        line: "import { Reducer as ${Name}Reducer } from '@services/${name}'",
      },
      {
        type: 'remove-line',
        file: 'app/application/store/reducers.ts',
        line: '  ${name}: ${Name}Reducer,',
      },
      {
        type: 'remove',
        target: 'app/features/services/${name}',
      },
    ],
    sync: [
      {
        type: 'merge-template',
        repo: TEMPLATE_REPO,
        ref: TEMPLATE_REF,
        protectedPaths: [
          'app/features',
          'app/application/store/reducers.ts',
          'app/utils/hooks/useAppActions.ts',
        ],
      },
      {
        type: 'read',
        file: '.cli',
      },
      {
        type: 'replace',
        file: 'package.json',
        optional: true,
        search: '"name": "sample-frontend"',
        replace: '"name": "${PROJECT_NAME}"',
      },
    ],
  },
}
