function readFile(filePath){
  let fileOpened = false;

  try{
    console.log("Opening a file");
    fileOpened = true;

    if(filePath !== "valid.txt"){
      throw new Error("File not found")
    }
    console.log(`Reading data from ${filePath}`);
    return "File Content: Hello, World";

  } catch(error){
    console.log(`Error: ${error.message}`);
  } finally{
    if(fileOpened){
      console.log("Closing file to release IO resources");
    } else{
      console.log("No file was opened, nothing to close");
    }
  }
}

// readFile("valid.txt")





function parseJson(str){
  try{
    const data = JSON.parse(str)
    return data
  }catch(error){
    return "Invalid JSON"
  }
}

console.log(parseJson(`{"name":"Mahin","profession":"Developer"}`
));