const getEtcs = (etc) => {
  const string = etc.join(',');
  return string;
}

export const etcToString = (etc) => {
  const etcs = getEtcs(etc);
  return etcs;
}
