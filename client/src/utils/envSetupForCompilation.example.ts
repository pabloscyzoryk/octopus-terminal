// this is how your envSetupForCompilation.ts file should look like:
// THIS FILE IS NECCESSARY FOR YOUR ENVIRONMENT VARIABLES TO BE BAKED IN YOUR COMPILED APPLICATION
// IF YOU DON'T PROVIDE A VALUE FOR A VARIABLE, APP WILL USE THE VALUE FROM .env FILE

const envSetupForCompilation = {
  PORT: '',
  SUPABASE_URL: '',
  SUPABASE_KEY: '',
};

export default envSetupForCompilation;
