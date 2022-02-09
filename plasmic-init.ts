import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { SupabaseGridCollection, SupabaseImgField, SupabaseTableCollection, SupabaseTextField } from "./components/CodeComponents/DisplayCollections";
import { FormContextComponent, FormTextInput } from "./components/CodeComponents/Form";
import { SupabaseMutation, SupabaseQuery, SupabaseUserLogIn, SupabaseUserLogOut, SupabaseUserSession, SupabaseUserSignUp } from "./components/CodeComponents/DatabaseComponents";
import { SupabaseDeleteButton, SupabaseEditButton, SupabaseModal } from "./components/CodeComponents/UtilsComponents";
import { RedirectIf } from "./components/CodeComponents/LogicComponents";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "i6YZmFxPJB69NEUgdf79ap",
      token: "kQsz3J86zkb5oYUaPWjxmbmtKjFircpB7MPCoME9hDQfHKkXphgJMP9qMwmefNQqHJvyUwovnc4D3Oq3iUQ",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);


PLASMIC.registerComponent(SupabaseTextField, {
  name: "SupabaseTextField",
  props: {
    name: "string",
    },
  importPath: "./components/CodeComponents/DisplayCollections",
});

PLASMIC.registerComponent(SupabaseImgField, {
  name: "SupabaseImgField",
  props: {
    url: "string",
  },
  importPath: "./components/CodeComponents/DisplayCollections",
});

PLASMIC.registerComponent(SupabaseGridCollection, {
  name: "SupabaseGridCollection",
  props: {
    count: "number",
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Placeholder"
      }
    },
    columns: {
      type: "number",
      defaultValue: 4,
    },
    columnGap: {
      type: "number",
      defaultValue: 16,
    },
    rowGap: {
      type: "number",
      defaultValue: 16,
    },
    loading: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Loading..."
      }
    },
    testLoading: "boolean"
  },
  importPath: "./components/CodeComponents/DisplayCollections",
});

PLASMIC.registerComponent(FormTextInput, {
  name: "FormTextInput",
  props: {
    name: "string",
    children: "slot",
    defaultValue: "string",
  },
  importPath: "./components/CodeComponents/Form",
});

PLASMIC.registerComponent(FormContextComponent, {
  name: "FormContext",
  props: {
    children: "slot",
  },
  importName: "FormContextComponent",
  importPath: "./components/CodeComponents/Form",
});

PLASMIC.registerComponent(SupabaseQuery, {
  name: "SupabaseQuery",
  props: {
    children: "slot",
    tableName: "string",
    columns: "string",
    filters: "object",
    single: "boolean",
  },
  importPath: "./components/CodeComponents/DatabaseComponents"
});

PLASMIC.registerComponent(SupabaseUserSession, {
  name: "SupabaseUserSession",
  props: {
    children: "slot",
  },
  importPath: "./components/CodeComponents/DatabaseComponents"
});

PLASMIC.registerComponent(SupabaseUserLogOut, {
  name: "SupabaseUserLogOut",
  props: {
    children: "slot",
    redirectOnSuccess: "string",
  },
  importPath: "./components/CodeComponents/DatabaseComponents"
});

PLASMIC.registerComponent(SupabaseUserLogIn, {
  name: "SupabaseUserLogIn",
  props: {
    children: "slot",
    errorMessage: "slot",
    redirectOnSuccess: "string",
  },
  importPath: "./components/CodeComponents/DatabaseComponents"
});

PLASMIC.registerComponent(SupabaseUserSignUp, {
  name: "SupabaseUserSignUp",
  props: {
    children: "slot",
    errorMessage: "slot",
    redirectOnSuccess: "string",
  },
  importPath: "./components/CodeComponents/DatabaseComponents"
});

PLASMIC.registerComponent(SupabaseMutation, {
  name: "SupabaseMutation",
  props: {
    children: "slot",
    tableName: "string",
    filters: "object",
    method: {
      type: "choice",
      options: ["upsert", "insert", "update", "delete"]
    },
    data: "object",
    redirectOnSuccess: "string"
  },
  importPath: "./components/CodeComponents/DatabaseComponents"
});

PLASMIC.registerComponent(SupabaseTableCollection, {
  name: "SupabaseTableCollection",
  props: {
    columns: {
      type: "string",
    },
    loading: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Loading..."
      }
    },
    testLoading: "boolean",
    canEdit: "boolean",
    canDelete: "boolean",
    editSlot: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Placeholder"
      }
    },
    deleteSlot: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Placeholder"
      }
    },
    customizeEditAndDelete: "boolean",
    editPage: "string",
  },
  importPath: "./components/CodeComponents/DisplayCollections",
});


PLASMIC.registerComponent(SupabaseEditButton, {
  name: "SupabaseEditButton",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Placeholder"
      }
    },
    editPage: "string",
    id: "string",
  },
  importPath: "./components/CodeComponents/UtilsComponents"
});
/*
PLASMIC.registerComponent(SupabaseDeleteButton, {
  name: "SupabaseDeleteButton",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Placeholder"
      }
    },
    id: "string",
    modal: {
      type: "slot",
      defaultValue: {
        type: "component",
        name: "SupabaseModal",
      }
    }
  },
  importPath: "./components/CodeComponents/UtilsComponents"
});*/

PLASMIC.registerComponent(SupabaseDeleteButton, {
  name: "SupabaseDeleteButton",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Placeholder"
      }
    },
    id: "string",
    modal: {
      type: "slot",
      defaultValue: {
        type: "component",
        name: "SupabaseMutation",
        props: {
          children: {
            type: "component",
            name: "SupabaseModal"
          }
        }
      }
    }
  },
  importPath: "./components/CodeComponents/UtilsComponents"
});

PLASMIC.registerComponent(SupabaseModal, {
  name: "SupabaseModal",
  props: {
    children: {
      type: "slot",
      defaultValue: {
        type: "text",
        value: "Placeholder"
      }
    },
    showModal: "boolean",
  },
  importPath: "./components/CodeComponents/UtilsComponents"
});

PLASMIC.registerComponent(RedirectIf, {
  name: "RedirectIf",
  props: {
    children: "slot",
    operator: {
      type: "choice",
      options: ["FALSY", "TRUTHY", "EQUAL", "LESS_THAN", "GREATER_THAN"]
    },
    redirectUrl: "string",
    leftExpression: "string",
    rightExpression: "string",
    isTesting: "boolean",
    testCondition: "boolean"
  },
  importPath: "./components/CodeComponents/LogicComponents"
});