const validatePath = (path: string, aboutOptions: string[]): { lastPathname: string, secondLastPathname: string, isValid: boolean } => {
    const PathArr = path.split("/");
    const lastPathname = PathArr[PathArr.length - 1];
    const secondLastPathname = PathArr[PathArr.length - 2];
    return {
      lastPathname,
      secondLastPathname,
      isValid: aboutOptions.includes(secondLastPathname) && !isNaN(Number(lastPathname)) && Number(lastPathname) >= 1 && Number(lastPathname) <= aboutOptions.length
    };
  };
  
  export default validatePath;
