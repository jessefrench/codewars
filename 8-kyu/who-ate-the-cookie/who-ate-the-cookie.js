function cookie(x) {
  let name;
  
    switch (typeof x) {
        case "string":
            name = "Zach";
            break;
        case "number":
            name = "Monica";
            break;
        default:
            name = "the dog";
    }
  
    return `Who ate the last cookie? It was ${name}!`;
}