export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return [
        ...state,
        {
          id: Math.random(), // not really unique but it's just an example
          title: action.article.title,
          body: action.article.body,
        },
      ];
    case "DELETE_ARTICLE":
      return [...state.filter((val) => val.id !== action.article.id)];
    case "EDIT_ARTICLE":
      console.log(action.arti);
      return [
        ...state.filter((val) =>
          val.id === action.arti.id
            ? {
                id: val.id,
                title: action.arti.title,
                body: action.arti.body,
              }
              
            : val
        ),
      ];
    // [...state.filter(val=>val.id===action.arti.id)]
    default:
      return state;
  }
};
