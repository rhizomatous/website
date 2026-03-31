import { join } from "path"

export default {
  plugins: {
    "postcss-mixins": {
      mixinsFiles: [join(import.meta.dirname, "css/mixins.css")],
    },
  },
}
