const TEMPLATE_REPO = "https://github.com/InfinityLoopLabs/react-template.git";
const TEMPLATE_REF = "main";

module.exports = {
  commands: {
    addWidget: [
      {
        type: "copy",
        from: "_template/widget",
        to: "app/features/widgets/$name",
      },
      {
        type: "rename",
        target: "app/features/widgets/$name",
        replace: [{ Sample: "$name" }],
      },
      {
        type: "insert",
        file: "app/application/store/reducers.ts",
        placeholder: "import { generatedReducersList } from '@application/store/generated/reducers'",
        line: "import { Reducer as $nameWidgetReducer } from '@features/widgets/$name'",
      },
      {
        type: "insert",
        file: "app/application/store/reducers.ts",
        placeholder: "// Widgets: Начало",
        line: "  $nameLower: $nameWidgetReducer,",
      },
      {
        type: "insert",
        file: "app/utils/hooks/useAppActions.ts",
        placeholder: "import type { AppDispatchType } from '@application/store/store'",
        line: "import { Actions as $nameActions } from '@features/widgets/$name'",
      },
      {
        type: "insert",
        file: "app/utils/hooks/useAppActions.ts",
        placeholder: "// insert actions here",
        line: "      $nameLower: createAction($nameActions),",
      },
    ],
    addService: [
      {
        type: "copy",
        from: "_template/service",
        to: "app/features/services/$name",
      },
      {
        type: "rename",
        target: "app/features/services/$name",
        replace: [{ Sample: "$name" }],
      },
      {
        type: "insert",
        file: "app/application/store/reducers.ts",
        placeholder: "import { generatedReducersList } from '@application/store/generated/reducers'",
        line: "import { Reducer as $nameServiceReducer } from '@features/services/$name'",
      },
      {
        type: "insert",
        file: "app/application/store/reducers.ts",
        placeholder: "// Services: Начало",
        line: "  $nameLower: $nameServiceReducer,",
      },
      {
        type: "insert",
        file: "app/utils/hooks/useAppActions.ts",
        placeholder: "import type { AppDispatchType } from '@application/store/store'",
        line: "import { Actions as $nameActions } from '@features/services/$name'",
      },
      {
        type: "insert",
        file: "app/utils/hooks/useAppActions.ts",
        placeholder: "// insert actions here",
        line: "      $nameLower: createAction($nameActions),",
      },
    ],
    removeWidget: [
      {
        type: "remove-line",
        file: "app/utils/hooks/useAppActions.ts",
        line: "import { Actions as $nameActions } from '@features/widgets/$name'",
      },
      {
        type: "remove-line",
        file: "app/utils/hooks/useAppActions.ts",
        line: "      $nameLower: createAction($nameActions),",
      },
      {
        type: "remove-line",
        file: "app/application/store/reducers.ts",
        line: "import { Reducer as $nameWidgetReducer } from '@features/widgets/$name'",
      },
      {
        type: "remove-line",
        file: "app/application/store/reducers.ts",
        line: "  $nameLower: $nameWidgetReducer,",
      },
      {
        type: "remove",
        target: "app/features/widgets/$name",
      },
    ],
    removeService: [
      {
        type: "remove-line",
        file: "app/utils/hooks/useAppActions.ts",
        line: "import { Actions as $nameActions } from '@features/services/$name'",
      },
      {
        type: "remove-line",
        file: "app/utils/hooks/useAppActions.ts",
        line: "      $nameLower: createAction($nameActions),",
      },
      {
        type: "remove-line",
        file: "app/application/store/reducers.ts",
        line: "import { Reducer as $nameServiceReducer } from '@features/services/$name'",
      },
      {
        type: "remove-line",
        file: "app/application/store/reducers.ts",
        line: "  $nameLower: $nameServiceReducer,",
      },
      {
        type: "remove",
        target: "app/features/services/$name",
      },
    ],
    sync: [
      {
        type: "merge-template",
        repo: TEMPLATE_REPO,
        ref: TEMPLATE_REF,
      },
    ],
  },
};
