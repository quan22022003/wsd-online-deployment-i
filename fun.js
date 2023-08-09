const hello = () => {
    console.log("Hello world!");
  };
  
  const greeting = (who = "John Doe") => {
    return console.log(who);
  };
  
  export { greeting, hello };