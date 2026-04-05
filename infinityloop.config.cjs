const TEMPLATE_REPO = "https://github.com/InfinityLoopLabs/react-template.git";
const TARGET_REPO = "./";
const TEMPLATE_REF = "main";

module.exports = {
  meta: {
    templateRepo: TEMPLATE_REPO,
    targetRepo: TARGET_REPO,
    templateRef: TEMPLATE_REF,
  },
  commands: {
    bootstrap: [
      {
        type: "download",
        repo: TEMPLATE_REPO,
        ref: TEMPLATE_REF,
        allowNonEmpty: true,
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
