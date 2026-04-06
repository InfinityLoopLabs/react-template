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
