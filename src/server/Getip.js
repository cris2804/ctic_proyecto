export const Getip = (host) => {
  let hostactual = "";

  if (host.includes("beegons") || host.includes("181.176.48.200")){
    hostactual = "http://181.176.48.200:4000";
  }else{
    hostactual = "http://192.168.52.232:4000";
  }

  return hostactual
}
