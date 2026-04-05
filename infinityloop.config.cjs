const TEMPLATE_REPO = "https://github.com/InfinityLoopLabs/react-template.git";
const TEMPLATE_REF = "main";

module.exports = {
  commands: {
    sync: [
      {
        type: "merge-template",
        repo: TEMPLATE_REPO,
        ref: TEMPLATE_REF,
      },
    ],
  },
};
